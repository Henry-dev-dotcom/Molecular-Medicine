#!/usr/bin/env python3
"""Deployment checks for the static ChromosomeLearn GitHub Pages site."""

from __future__ import annotations

import json
import re
import sys
from collections import Counter
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]
ERRORS: list[str] = []


def error(message: str) -> None:
    ERRORS.append(message)


def local_path(value: str) -> Path | None:
    value = value.strip()
    if not value or value.startswith(("#", "data:", "mailto:", "tel:", "javascript:")):
        return None
    parsed = urlsplit(value)
    if parsed.scheme or parsed.netloc:
        return None
    path = unquote(parsed.path)
    if path.startswith("/"):
        error(f"Root-absolute local URL is not project-site safe: {value}")
        return None
    return ROOT / path


required = [
    "index.html",
    "manifest.webmanifest",
    "sw.js",
    "robots.txt",
    ".nojekyll",
    "assets/css/styles.css",
    "assets/js/data.js",
    "assets/js/app.js",
    "assets/img/icon.svg",
    "assets/img/icon-192.png",
    "assets/img/icon-512.png",
    "assets/img/icon-maskable-512.png",
    "assets/img/apple-touch-icon.png",
    ".github/workflows/deploy-pages.yml",
]
for item in required:
    if not (ROOT / item).exists():
        error(f"Missing required file: {item}")

index_path = ROOT / "index.html"
html = index_path.read_text(encoding="utf-8") if index_path.exists() else ""

# Duplicate IDs and hash links.
ids = re.findall(r'\bid=["\']([^"\']+)["\']', html, flags=re.I)
for item, count in Counter(ids).items():
    if count > 1:
        error(f"Duplicate HTML id: {item}")

for attr, value in re.findall(r'\b(href|src)=["\']([^"\']+)["\']', html, flags=re.I):
    if attr.lower() == "href" and value.startswith("#"):
        target = value[1:]
        if target and target not in ids:
            error(f"Broken internal hash link: {value}")
        continue
    path = local_path(value)
    if path is not None and not path.exists():
        error(f"Missing file referenced by index.html: {value}")

# Manifest validity and icon paths.
manifest_path = ROOT / "manifest.webmanifest"
if manifest_path.exists():
    try:
        manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
    except json.JSONDecodeError as exc:
        error(f"Invalid manifest JSON: {exc}")
        manifest = {}

    for key in ("name", "short_name", "start_url", "scope", "display", "icons"):
        if not manifest.get(key):
            error(f"Manifest is missing required field: {key}")

    for key in ("start_url", "scope"):
        value = manifest.get(key, "")
        if isinstance(value, str) and value.startswith("/"):
            error(f"Manifest {key} must be relative for project Pages sites: {value}")

    for icon in manifest.get("icons", []):
        src = icon.get("src", "")
        path = local_path(src)
        if path is not None and not path.exists():
            error(f"Missing manifest icon: {src}")

# Service-worker precache paths.
sw_path = ROOT / "sw.js"
if sw_path.exists():
    sw = sw_path.read_text(encoding="utf-8")
    match = re.search(r"const CORE_ASSETS\s*=\s*\[(.*?)\]\.map", sw, flags=re.S)
    if not match:
        error("Could not find CORE_ASSETS in sw.js")
    else:
        for value in re.findall(r'^\s*"([^"]*)"\s*,?\s*$', match.group(1), flags=re.M):
            if value == "":
                continue
            path = local_path(value)
            if path is not None and not path.exists():
                error(f"Missing service-worker asset: {value}")

# GitHub Pages package must stay within platform limits and contain no symlinks.
for path in ROOT.rglob("*"):
    if path.is_symlink():
        error(f"Symbolic links are not allowed in the Pages artifact: {path.relative_to(ROOT)}")
    elif path.is_file() and path.stat().st_size > 100 * 1024 * 1024:
        error(f"File exceeds 100 MB: {path.relative_to(ROOT)}")

if ERRORS:
    print("ChromosomeLearn deployment QA failed:\n")
    for item in ERRORS:
        print(f"- {item}")
    sys.exit(1)

print("ChromosomeLearn deployment QA passed.")
print(f"Checked {len(ids)} HTML IDs and all local deployment references.")
