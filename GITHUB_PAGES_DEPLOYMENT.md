# Deploy ChromosomeLearn on GitHub Pages

This package is configured for automatic deployment with GitHub Actions. It works as either:

- a project site: `https://USERNAME.github.io/REPOSITORY/`
- a user site: `https://USERNAME.github.io/`
- a GitHub Pages site using a custom domain

All website assets use relative paths, so no repository-name edits are required.

## Files already prepared

- `.github/workflows/deploy-pages.yml` — validates and deploys the site
- `.nojekyll` — prevents unwanted Jekyll processing
- `index.html` — site entry page at the repository root
- `manifest.webmanifest` — installable app metadata
- `sw.js` — project-path-safe offline support
- `scripts/qa_check.py` — deployment validation run before every release

## Deployment steps

1. Create a GitHub repository.
2. Extract the ZIP package.
3. Upload or push the **contents** of `ChromosomeLearn_GitHub_Pages_Ready` to the repository root. Do not upload the containing folder as an extra directory.
4. Confirm that the default branch is named `main`.
5. Open the repository on GitHub and go to **Settings → Pages**.
6. Under **Build and deployment**, set **Source** to **GitHub Actions**.
7. Push a commit to `main`, or open **Actions → Deploy ChromosomeLearn to GitHub Pages → Run workflow**.
8. Wait for the build and deploy jobs to complete. The deployed URL will appear in the workflow summary and in **Settings → Pages**.

## Updating the website later

Edit the files locally, commit them, and push to `main`. The workflow will:

1. run the deployment QA script;
2. check JavaScript syntax;
3. package only the public website files;
4. deploy the new version to GitHub Pages.

If a check fails, deployment stops before the public site is changed.

## Important notes

- Keep `index.html`, `manifest.webmanifest`, `sw.js`, `robots.txt`, `.nojekyll`, and the `assets` folder at the repository root.
- Do not change relative asset paths to paths beginning with `/`; root-absolute paths can break project sites.
- GitHub Pages uses HTTPS, so the service worker and installable-app features can work after the first successful online visit.
- Browser progress is saved with `localStorage`; it belongs to the browser and domain where the site is opened.
- A change of repository name or custom domain creates a different browser origin, so previously saved progress will not automatically transfer. Use the website's export/import feature when moving domains.

## Optional custom domain

Configure the domain in **Settings → Pages**, then follow GitHub's DNS instructions. GitHub can create the `CNAME` file automatically. Do not add a placeholder `CNAME` file before the final domain is known.

## Local pre-deployment test

From the extracted folder, run:

```bash
python3 scripts/qa_check.py
node --check assets/js/data.js
node --check assets/js/app.js
node --check sw.js
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.
