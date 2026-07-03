const DATA = window.CHROMOSOME_LEARN_DATA;
const storageKeys = {
  completedModules: "cl_phase6_completed_modules",
  checklist: "cl_phase6_checklist",
  difficult: "cl_phase6_difficult_cards"
};

const examStorageKey = "cl_phase6_exam_history";
const plannerStorageKey = "cl_phase6_last_plan";

const state = {
  completedModules: new Set(loadArray(storageKeys.completedModules)),
  checklist: new Set(loadArray(storageKeys.checklist)),
  difficult: new Set(loadArray(storageKeys.difficult)),
  filteredFlashcards: [...DATA.flashcards],
  flashIndex: 0,
  flashFlipped: false,
  practiceTopic: Object.keys(DATA.practice)[0],
  practiceIndex: 0,
  practiceScore: 0,
  practiceAnswered: false
};

function loadArray(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch (error) {
    return [];
  }
}

function saveSet(key, set) {
  localStorage.setItem(key, JSON.stringify([...set]));
}

function $(selector) {
  return document.querySelector(selector);
}

function $all(selector) {
  return [...document.querySelectorAll(selector)];
}

function normalise(value) {
  return String(value || "").trim().toLowerCase();
}

function updateProgress() {
  const moduleTotal = DATA.modules.length;
  const checklistTotal = DATA.checklist.length;
  const moduleDone = state.completedModules.size;
  const checklistDone = state.checklist.size;
  const totalItems = moduleTotal + checklistTotal;
  const doneItems = moduleDone + checklistDone;
  const percent = totalItems ? Math.round((doneItems / totalItems) * 100) : 0;

  $("#overallProgress").textContent = percent;
  $("#overallProgressFill").style.width = `${percent}%`;
  $("#moduleStat").textContent = `${moduleDone}/${moduleTotal}`;
  $("#checklistStat").textContent = `${checklistDone}/${checklistTotal}`;
  $("#difficultStat").textContent = state.difficult.size;
  const best = getExamHistory().reduce((max, item) => Math.max(max, item.percent || 0), 0);
  const bestNode = $("#bestExamStat");
  if (bestNode) bestNode.textContent = `${best}%`;
}

function setupNavigation() {
  const toggle = $("#navToggle");
  const links = $("#navLinks");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "×" : "☰";
  });
  $all("#navLinks a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "☰";
    });
  });
}

function renderModules() {
  const stack = $("#moduleStack");
  const search = normalise($("#moduleSearch").value);
  const category = $("#moduleCategory").value;

  const filtered = DATA.modules.filter((module) => {
    const haystack = normalise([
      module.title,
      module.category,
      module.summary,
      module.keyPoints.join(" "),
      module.clinical,
      module.memory
    ].join(" "));
    const matchesSearch = !search || haystack.includes(search);
    const matchesCategory = category === "all" || module.category === category;
    return matchesSearch && matchesCategory;
  });

  if (!filtered.length) {
    stack.innerHTML = `<div class="empty-state">No module matches your search. Try another keyword.</div>`;
    return;
  }

  stack.innerHTML = filtered.map((module, index) => {
    const completed = state.completedModules.has(module.id);
    return `
      <article class="module-card ${completed ? "completed" : ""}">
        <button class="module-header" type="button" aria-expanded="${index === 0 ? "true" : "false"}" data-module-toggle="${module.id}">
          <span>
            <small>${module.category}</small>
            <strong>${module.title}</strong>
          </span>
          <span class="module-status">${completed ? "Completed" : "Open"}</span>
        </button>
        <div class="module-body ${index === 0 ? "open" : ""}" id="module-${module.id}">
          <p class="module-summary">${module.summary}</p>
          <div class="note-grid">
            <div>
              <h4>Key points</h4>
              <ul>${module.keyPoints.map((point) => `<li>${point}</li>`).join("")}</ul>
            </div>
            <div>
              <h4>Clinical connection</h4>
              <p>${module.clinical}</p>
              <h4>Memory tip</h4>
              <p>${module.memory}</p>
            </div>
          </div>
          <div class="self-test">
            <span>Quick self-test</span>
            <p>${module.selfTest}</p>
          </div>
          <button class="small-button module-complete" type="button" data-module-complete="${module.id}">
            ${completed ? "Mark as not complete" : "Mark as complete"}
          </button>
        </div>
      </article>`;
  }).join("");

  $all("[data-module-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const body = $(`#module-${button.dataset.moduleToggle}`);
      const open = body.classList.toggle("open");
      button.setAttribute("aria-expanded", String(open));
    });
  });

  $all("[data-module-complete]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.moduleComplete;
      if (state.completedModules.has(id)) {
        state.completedModules.delete(id);
      } else {
        state.completedModules.add(id);
      }
      saveSet(storageKeys.completedModules, state.completedModules);
      renderModules();
      updateProgress();
    });
  });
}

function setupModules() {
  $("#moduleSearch").addEventListener("input", renderModules);
  $("#moduleCategory").addEventListener("change", renderModules);
  renderModules();
}

function getVisibleFlashcards() {
  const filter = $("#flashcardFilter").value;
  if (filter === "all") return [...DATA.flashcards];
  if (filter === "difficult") return DATA.flashcards.filter((card) => state.difficult.has(card.id));
  return DATA.flashcards.filter((card) => card.set === filter);
}

function renderFlashcard() {
  state.filteredFlashcards = getVisibleFlashcards();
  if (!state.filteredFlashcards.length) {
    $("#flashLabel").textContent = "No cards";
    $("#flashTerm").textContent = "No difficult cards yet";
    $("#flashAnswer").textContent = "Mark cards as difficult while revising to see them here.";
    $("#flashcardCounter").textContent = "Card 0 of 0";
    $("#markDifficult").disabled = true;
    return;
  }

  if (state.flashIndex >= state.filteredFlashcards.length) state.flashIndex = 0;
  if (state.flashIndex < 0) state.flashIndex = state.filteredFlashcards.length - 1;

  const card = state.filteredFlashcards[state.flashIndex];
  const isDifficult = state.difficult.has(card.id);
  $("#flashLabel").textContent = `${card.set}${isDifficult ? " • difficult" : ""}`;
  $("#flashTerm").textContent = card.term;
  $("#flashAnswer").textContent = state.flashFlipped ? card.answer : "Click to show answer";
  $("#flashcard").classList.toggle("flipped", state.flashFlipped);
  $("#flashcard").classList.toggle("hard-card", isDifficult);
  $("#flashcardCounter").textContent = `Card ${state.flashIndex + 1} of ${state.filteredFlashcards.length}`;
  $("#markDifficult").textContent = isDifficult ? "Remove difficult" : "Mark difficult";
  $("#markDifficult").disabled = false;
}

function setupFlashcards() {
  $("#flashcard").addEventListener("click", () => {
    state.flashFlipped = !state.flashFlipped;
    renderFlashcard();
  });
  $("#prevCard").addEventListener("click", () => {
    state.flashIndex -= 1;
    state.flashFlipped = false;
    renderFlashcard();
  });
  $("#nextCard").addEventListener("click", () => {
    state.flashIndex += 1;
    state.flashFlipped = false;
    renderFlashcard();
  });
  $("#shuffleCards").addEventListener("click", () => {
    DATA.flashcards.sort(() => Math.random() - 0.5);
    state.flashIndex = 0;
    state.flashFlipped = false;
    renderFlashcard();
  });
  $("#markDifficult").addEventListener("click", () => {
    const card = state.filteredFlashcards[state.flashIndex];
    if (!card) return;
    if (state.difficult.has(card.id)) {
      state.difficult.delete(card.id);
    } else {
      state.difficult.add(card.id);
    }
    saveSet(storageKeys.difficult, state.difficult);
    updateProgress();
    renderFlashcard();
  });
  $("#flashcardFilter").addEventListener("change", () => {
    state.flashIndex = 0;
    state.flashFlipped = false;
    renderFlashcard();
  });
  renderFlashcard();
}

const diagrams = {
  chromatin: {
    label: "Structure",
    title: "DNA packaging into chromatin",
    description: "Long DNA is packaged by wrapping around histone proteins to form nucleosomes. Nucleosomes then fold into more compact chromatin fibres and eventually visible chromosomes.",
    bullets: ["DNA wraps around histone octamers.", "Histone H1 supports higher-order packing.", "Open chromatin supports transcription; dense chromatin usually silences genes."],
    svg: `<svg viewBox="0 0 620 320" role="img" aria-label="Chromatin packaging diagram">
      <path d="M40 70 C130 10, 160 130, 250 70 S390 20, 470 80 S560 135, 590 70" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" opacity=".35"/>
      <g class="svg-beads">
        <circle cx="115" cy="68" r="28"/><circle cx="215" cy="74" r="28"/><circle cx="315" cy="62" r="28"/><circle cx="415" cy="84" r="28"/><circle cx="515" cy="95" r="28"/>
      </g>
      <text x="68" y="145">DNA + histones = nucleosomes</text>
      <path d="M120 195 C190 155, 260 235, 330 190 S470 150, 540 205" fill="none" stroke="currentColor" stroke-width="18" stroke-linecap="round" opacity=".24"/>
      <text x="160" y="270">Higher-order chromatin fibre</text>
    </svg>`
  },
  anatomy: {
    label: "Anatomy",
    title: "Parts of a chromosome",
    description: "A chromosome has two arms separated by a centromere. The p arm is short and the q arm is long. Telomeres protect the chromosome ends.",
    bullets: ["p arm = short arm.", "q arm = long arm.", "Centromere supports kinetochore formation and spindle attachment.", "Telomeres protect chromosome ends."],
    svg: `<svg viewBox="0 0 620 340" role="img" aria-label="Chromosome anatomy diagram">
      <defs><linearGradient id="chr" x1="0" x2="1"><stop offset="0" stop-color="currentColor" stop-opacity=".2"/><stop offset="1" stop-color="currentColor" stop-opacity=".55"/></linearGradient></defs>
      <path d="M270 55 C210 90, 210 150, 295 182 C210 220, 210 280, 270 310" fill="none" stroke="url(#chr)" stroke-width="44" stroke-linecap="round"/>
      <path d="M350 55 C410 90, 410 150, 325 182 C410 220, 410 280, 350 310" fill="none" stroke="url(#chr)" stroke-width="44" stroke-linecap="round"/>
      <circle cx="310" cy="182" r="32" fill="currentColor" opacity=".45"/>
      <text x="84" y="72">Telomere</text><line x1="170" y1="70" x2="250" y2="58" stroke="currentColor"/>
      <text x="92" y="146">p arm</text><line x1="160" y1="142" x2="260" y2="115" stroke="currentColor"/>
      <text x="398" y="188">Centromere</text><line x1="390" y1="184" x2="342" y2="182" stroke="currentColor"/>
      <text x="430" y="270">q arm</text><line x1="425" y1="265" x2="365" y2="258" stroke="currentColor"/>
    </svg>`
  },
  nomenclature: {
    label: "Notation",
    title: "How to read 15q13",
    description: "Chromosome nomenclature starts with the chromosome number, then the arm, then the region and band. Numbers increase as you move away from the centromere.",
    bullets: ["15 = chromosome 15.", "q = long arm.", "1 = region 1.", "3 = band 3.", "15q13 means chromosome 15, long arm, region 1, band 3."],
    svg: `<svg viewBox="0 0 620 320" role="img" aria-label="Chromosome nomenclature diagram">
      <rect x="75" y="75" width="470" height="170" rx="28" fill="currentColor" opacity=".08"/>
      <text x="135" y="165" font-size="60" font-weight="800">15q13</text>
      <g font-size="18">
        <text x="122" y="225">chromosome</text><line x1="158" y1="188" x2="158" y2="204" stroke="currentColor"/>
        <text x="275" y="225">arm</text><line x1="300" y1="188" x2="300" y2="204" stroke="currentColor"/>
        <text x="350" y="225">region</text><line x1="368" y1="188" x2="368" y2="204" stroke="currentColor"/>
        <text x="450" y="225">band</text><line x1="458" y1="188" x2="458" y2="204" stroke="currentColor"/>
      </g>
    </svg>`
  },
  abnormalities: {
    label: "Abnormalities",
    title: "Structural chromosome changes",
    description: "Structural abnormalities can remove, copy, reverse or move pieces of chromosomes. These changes may alter gene dosage or create abnormal gene fusions.",
    bullets: ["Deletion = segment lost.", "Duplication = segment repeated.", "Inversion = segment reversed.", "Translocation = segment moved to another chromosome."],
    svg: `<svg viewBox="0 0 620 360" role="img" aria-label="Structural abnormalities diagram">
      <g font-size="15" font-weight="700">
        <text x="65" y="70">Normal</text><rect x="150" y="50" width="70" height="28" rx="8"/><rect x="225" y="50" width="70" height="28" rx="8" opacity=".75"/><rect x="300" y="50" width="70" height="28" rx="8" opacity=".5"/><rect x="375" y="50" width="70" height="28" rx="8" opacity=".3"/>
        <text x="65" y="135">Deletion</text><rect x="150" y="115" width="70" height="28" rx="8"/><rect x="225" y="115" width="70" height="28" rx="8" opacity=".75"/><rect x="375" y="115" width="70" height="28" rx="8" opacity=".3"/>
        <text x="65" y="200">Duplication</text><rect x="150" y="180" width="70" height="28" rx="8"/><rect x="225" y="180" width="70" height="28" rx="8" opacity=".75"/><rect x="300" y="180" width="70" height="28" rx="8" opacity=".5"/><rect x="300" y="215" width="70" height="28" rx="8" opacity=".5"/><rect x="375" y="180" width="70" height="28" rx="8" opacity=".3"/>
        <text x="65" y="285">Inversion</text><rect x="150" y="265" width="70" height="28" rx="8"/><rect x="225" y="265" width="70" height="28" rx="8" opacity=".5"/><rect x="300" y="265" width="70" height="28" rx="8" opacity=".75"/><rect x="375" y="265" width="70" height="28" rx="8" opacity=".3"/>
      </g>
    </svg>`
  },
  prenatal: {
    label: "Clinical",
    title: "Prenatal diagnostic options",
    description: "Prenatal testing includes screening and diagnostic methods. Non-invasive methods estimate risk, while invasive diagnostic methods can confirm chromosome or genetic conditions more directly.",
    bullets: ["Ultrasound checks fetal structure and markers.", "NIPT uses cell-free fetal DNA from maternal blood.", "CVS samples placental tissue.", "Amniocentesis samples amniotic fluid."],
    svg: `<svg viewBox="0 0 620 330" role="img" aria-label="Prenatal testing timeline diagram">
      <line x1="75" y1="170" x2="545" y2="170" stroke="currentColor" stroke-width="6" stroke-linecap="round" opacity=".25"/>
      <g>
        <circle cx="145" cy="170" r="24"/><text x="106" y="120">Ultrasound</text><text x="120" y="220">screen</text>
        <circle cx="255" cy="170" r="24" opacity=".75"/><text x="225" y="120">NIPT</text><text x="223" y="220">blood</text>
        <circle cx="365" cy="170" r="24" opacity=".55"/><text x="342" y="120">CVS</text><text x="322" y="220">placenta</text>
        <circle cx="475" cy="170" r="24" opacity=".35"/><text x="425" y="120">Amniocentesis</text><text x="435" y="220">fluid</text>
      </g>
      <text x="130" y="280">Always requires counselling, consent and confidentiality</text>
    </svg>`
  }
};

function renderDiagram(name) {
  const diagram = diagrams[name];
  $("#diagramCanvas").innerHTML = diagram.svg;
  $("#diagramLabel").textContent = diagram.label;
  $("#diagramTitle").textContent = diagram.title;
  $("#diagramDescription").textContent = diagram.description;
  $("#diagramBullets").innerHTML = diagram.bullets.map((item) => `<li>${item}</li>`).join("");
  $all(".tab-button").forEach((button) => button.classList.toggle("active", button.dataset.diagram === name));
}

function setupDiagrams() {
  $all(".tab-button").forEach((button) => {
    button.addEventListener("click", () => renderDiagram(button.dataset.diagram));
  });
  renderDiagram("chromatin");
}


const karyotypeExamples = [
  {
    id: "46xx",
    label: "46,XX — typical female karyotype",
    notation: "46,XX",
    type: "Normal euploid",
    chromosomes: [{ label: "1–22", count: 44, kind: "autosomes" }, { label: "X", count: 2, kind: "sex" }],
    highlight: "This means 46 total chromosomes with two X chromosomes. There are 22 pairs of autosomes and two sex chromosomes.",
    exam: "Normal female constitutional karyotype."
  },
  {
    id: "46xy",
    label: "46,XY — typical male karyotype",
    notation: "46,XY",
    type: "Normal euploid",
    chromosomes: [{ label: "1–22", count: 44, kind: "autosomes" }, { label: "X", count: 1, kind: "sex" }, { label: "Y", count: 1, kind: "sex y" }],
    highlight: "This means 46 total chromosomes with one X chromosome and one Y chromosome.",
    exam: "Normal male constitutional karyotype."
  },
  {
    id: "down",
    label: "47,XX,+21 — Down syndrome example",
    notation: "47,XX,+21",
    type: "Autosomal trisomy",
    chromosomes: [{ label: "Most autosomes", count: 42, kind: "autosomes" }, { label: "21", count: 3, kind: "extra" }, { label: "X", count: 2, kind: "sex" }],
    highlight: "The +21 shows an extra chromosome 21. This is trisomy 21, commonly called Down syndrome.",
    exam: "Look for 47 total chromosomes and +21."
  },
  {
    id: "turner",
    label: "45,X — Turner syndrome",
    notation: "45,X",
    type: "Sex chromosome monosomy",
    chromosomes: [{ label: "1–22", count: 44, kind: "autosomes" }, { label: "X", count: 1, kind: "missing" }],
    highlight: "There are 45 chromosomes total and only one X chromosome. Turner syndrome is the only commonly surviving full monosomy.",
    exam: "No Barr body is expected in classic 45,X."
  },
  {
    id: "klinefelter",
    label: "47,XXY — Klinefelter syndrome",
    notation: "47,XXY",
    type: "Sex chromosome aneuploidy",
    chromosomes: [{ label: "1–22", count: 44, kind: "autosomes" }, { label: "X", count: 2, kind: "sex" }, { label: "Y", count: 1, kind: "sex y" }],
    highlight: "There are two X chromosomes and one Y chromosome. One X chromosome is inactivated as a Barr body.",
    exam: "Often associated with tall stature, small testes, infertility and gynaecomastia."
  },
  {
    id: "jacobs",
    label: "47,XYY — Jacobs syndrome",
    notation: "47,XYY",
    type: "Sex chromosome aneuploidy",
    chromosomes: [{ label: "1–22", count: 44, kind: "autosomes" }, { label: "X", count: 1, kind: "sex" }, { label: "Y", count: 2, kind: "sex y" }],
    highlight: "There is an extra Y chromosome. Many affected individuals are phenotypically normal or taller than average.",
    exam: "May be underdiagnosed because there may be no obvious characteristic phenotype."
  },
  {
    id: "rob",
    label: "45,XX,der(14;21)(q10;q10) — balanced Robertsonian carrier",
    notation: "45,XX,der(14;21)(q10;q10)",
    type: "Balanced structural rearrangement",
    chromosomes: [{ label: "Typical chromosomes", count: 43, kind: "autosomes" }, { label: "der(14;21)", count: 1, kind: "translocation" }, { label: "X", count: 2, kind: "sex" }],
    highlight: "The long arms of chromosomes 14 and 21 have fused. The carrier can be phenotypically normal but has reproductive risk for translocation Down syndrome.",
    exam: "Robertsonian translocations involve acrocentric chromosomes such as 13, 14, 15, 21 and 22."
  }
];

const syndromeExamples = [
  { name: "Down syndrome", karyotype: "47,XX/XY,+21", group: "autosomal", cause: "Trisomy 21, usually nondisjunction; sometimes Robertsonian translocation", features: "Intellectual disability, flat facial profile, short fingers, epicanthal folds" },
  { name: "Patau syndrome", karyotype: "47,XX/XY,+13", group: "autosomal", cause: "Trisomy 13", features: "Microcephaly, cleft lip/palate, postaxial polydactyly, cardiac defects" },
  { name: "Edwards syndrome", karyotype: "47,XX/XY,+18", group: "autosomal", cause: "Trisomy 18", features: "Severe developmental problems and high early mortality" },
  { name: "Turner syndrome", karyotype: "45,X", group: "sex", cause: "X monosomy or related X chromosome abnormality", features: "Short stature, gonadal dysgenesis, infertility, possible heart and kidney defects" },
  { name: "Klinefelter syndrome", karyotype: "47,XXY", group: "sex", cause: "Extra X chromosome in an individual with Y chromosome", features: "Tall body habitus, small testes, infertility, gynaecomastia" },
  { name: "Jacobs syndrome", karyotype: "47,XYY", group: "sex", cause: "Extra Y chromosome", features: "Often tall and phenotypically normal; possible cognitive or behavioural difficulties" },
  { name: "Cri-du-chat syndrome", karyotype: "del(5p)", group: "structural", cause: "Deletion of part of chromosome 5 short arm", features: "Developmental delay and characteristic facial features" },
  { name: "Williams syndrome", karyotype: "7q11.23 deletion", group: "structural", cause: "Microdeletion involving multiple genes", features: "Neurodevelopmental disorder; often detected by molecular cytogenetic methods" },
  { name: "Prader-Willi / Angelman", karyotype: "15q11-q13 deletion", group: "structural", cause: "Same region affected differently depending on parental origin due to imprinting", features: "PWS: hypotonia, obesity, small hands/feet. AS: happy disposition and movement discoordination" }
];

const prenatalTests = [
  { weeks: "Before pregnancy", title: "PGD/PGT during IVF", kind: "Embryo testing", note: "Used before implantation in IVF when there is increased risk of genetic or chromosomal disease." },
  { weeks: "From about 10 weeks", title: "Cell-free DNA / NIPT", kind: "Screening", note: "Maternal blood screening for common aneuploidies. It estimates risk and is not the same as diagnostic testing." },
  { weeks: "10–13 weeks", title: "Chorionic villus sampling", kind: "Diagnostic", note: "Samples placental tissue and can diagnose many chromosome or genetic conditions earlier than amniocentesis." },
  { weeks: "15–20 weeks", title: "Amniocentesis", kind: "Diagnostic", note: "Samples amniotic fluid containing fetal cells; often used for chromosomal/genetic disorders and neural tube defects." },
  { weeks: "Throughout pregnancy", title: "Ultrasonography", kind: "Imaging/screening", note: "Assesses fetal structure and markers such as nuchal translucency in appropriate windows." }
];

function renderKaryotypeExplorer() {
  const select = $("#karyotypeSelect");
  if (!select) return;
  const selected = karyotypeExamples.find((item) => item.id === select.value) || karyotypeExamples[0];
  const chromosomes = selected.chromosomes.map((group) => {
    const maxDots = Math.min(group.count, 12);
    const dots = Array.from({ length: maxDots }, (_, index) => `<span class="mini-chromosome ${group.kind}" title="${group.label} chromosome ${index + 1}"></span>`).join("");
    const extra = group.count > maxDots ? `<small>+${group.count - maxDots} more</small>` : "";
    return `<div class="chromosome-group"><strong>${group.label}</strong><div class="chromosome-dots">${dots}</div>${extra}</div>`;
  }).join("");

  $("#karyotypeBoard").innerHTML = `
    <div class="karyotype-meta">
      <span>${selected.notation}</span>
      <strong>${selected.type}</strong>
    </div>
    <div class="chromosome-groups">${chromosomes}</div>
  `;
  $("#karyotypeInsight").innerHTML = `
    <strong>What to notice:</strong> ${selected.highlight}<br />
    <strong>Exam tip:</strong> ${selected.exam}
  `;
}

function decodeNotationValue(value) {
  const input = String(value || "").trim();
  if (!input) return { title: "Enter a notation", points: ["Type an example such as 15q13 or 47,XX,+21."] };

  const locationMatch = input.match(/^([0-9]{1,2}|X|Y)([pq])(\d+)(?:\.(\d+))?(?:-([pq])?(\d+)(?:\.(\d+))?)?$/i);
  if (locationMatch) {
    const [, chr, arm, main, sub, rangeArm, rangeMain, rangeSub] = locationMatch;
    const region = main[0];
    const band = main.slice(1) || "not specified";
    const points = [
      `${chr.toUpperCase()} = chromosome ${chr.toUpperCase()}.`,
      `${arm.toLowerCase()} = ${arm.toLowerCase() === "p" ? "short" : "long"} arm.`,
      `${region} = region ${region}, counted away from the centromere.`,
      `${band} = band ${band}${sub ? ` with sub-band .${sub}` : ""}.`
    ];
    if (rangeMain) points.push(`The range continues to ${rangeArm ? rangeArm.toLowerCase() : arm.toLowerCase()}${rangeMain}${rangeSub ? `.${rangeSub}` : ""}.`);
    return { title: `Decoded: ${input}`, points };
  }

  const karyotypeMatch = input.match(/^(\d+),([A-Z]+)(?:,(\+|-)(\d+|X|Y))?/i);
  if (karyotypeMatch) {
    const [, total, sex, sign, extra] = karyotypeMatch;
    const points = [`${total} = total chromosome number.`, `${sex.toUpperCase()} = sex chromosome complement.`];
    if (sign && extra) points.push(`${sign}${extra.toUpperCase()} = ${sign === "+" ? "extra" : "missing"} chromosome ${extra.toUpperCase()}.`);
    if (input.includes("der")) points.push("der = derivative chromosome formed after a structural rearrangement such as translocation.");
    return { title: `Decoded: ${input}`, points };
  }

  if (/rob|der|t\(/i.test(input)) {
    return {
      title: `Structural notation: ${input}`,
      points: [
        "t usually means translocation.",
        "rob means Robertsonian translocation, often involving acrocentric chromosomes.",
        "der means derivative chromosome produced by a rearrangement.",
        "q10 or p10 refers to the centromeric region of the chromosome arm."
      ]
    };
  }

  return { title: "Could not fully decode", points: ["Try a class-style example: 15q13, 4q26-q27, Xq27.3, 47,XX,+21, 45,X, or der(14;21)(q10;q10)."] };
}

function renderNotationDecoder() {
  const output = $("#decoderOutput");
  if (!output) return;
  const decoded = decodeNotationValue($("#notationInput").value);
  output.innerHTML = `<h4>${decoded.title}</h4><ul>${decoded.points.map((point) => `<li>${point}</li>`).join("")}</ul>`;
}

function renderSyndromeComparison() {
  const list = $("#syndromeList");
  if (!list) return;
  const filter = $("#syndromeFilter").value;
  const visible = syndromeExamples.filter((item) => filter === "all" || item.group === filter);
  list.innerHTML = visible.map((item) => `
    <article class="syndrome-item">
      <span>${item.karyotype}</span>
      <h4>${item.name}</h4>
      <p><strong>Cause:</strong> ${item.cause}</p>
      <p><strong>Features:</strong> ${item.features}</p>
    </article>
  `).join("");
}

function renderPrenatalTimeline() {
  const timeline = $("#prenatalTimeline");
  if (!timeline) return;
  timeline.innerHTML = prenatalTests.map((test) => `
    <article class="prenatal-node">
      <span>${test.weeks}</span>
      <h4>${test.title}</h4>
      <strong>${test.kind}</strong>
      <p>${test.note}</p>
    </article>
  `).join("");
}

function setupVisualTools() {
  const select = $("#karyotypeSelect");
  if (!select) return;
  select.innerHTML = karyotypeExamples.map((item) => `<option value="${item.id}">${item.label}</option>`).join("");
  select.addEventListener("change", renderKaryotypeExplorer);
  $("#decodeNotation").addEventListener("click", renderNotationDecoder);
  $("#notationInput").addEventListener("keydown", (event) => {
    if (event.key === "Enter") renderNotationDecoder();
  });
  $("#syndromeFilter").addEventListener("change", renderSyndromeComparison);
  renderKaryotypeExplorer();
  renderNotationDecoder();
  renderSyndromeComparison();
  renderPrenatalTimeline();
}

function setupPractice() {
  const select = $("#practiceTopic");
  select.innerHTML = Object.keys(DATA.practice).map((topic) => `<option value="${topic}">${topic}</option>`).join("");
  select.addEventListener("change", () => {
    state.practiceTopic = select.value;
    resetPractice();
  });
  $("#restartPractice").addEventListener("click", resetPractice);
  $("#nextPractice").addEventListener("click", () => {
    if (!state.practiceAnswered) {
      $("#practiceFeedback").textContent = "Choose an answer first.";
      $("#practiceFeedback").className = "feedback warn";
      return;
    }
    const questions = DATA.practice[state.practiceTopic];
    state.practiceIndex = (state.practiceIndex + 1) % questions.length;
    state.practiceAnswered = false;
    renderPractice();
  });
  resetPractice();
}

function resetPractice() {
  state.practiceIndex = 0;
  state.practiceScore = 0;
  state.practiceAnswered = false;
  renderPractice();
}

function renderPractice() {
  const questions = DATA.practice[state.practiceTopic];
  const item = questions[state.practiceIndex];
  $("#practiceTopicLabel").textContent = state.practiceTopic;
  $("#practiceQuestion").textContent = item.q;
  $("#practiceCounter").textContent = `Question ${state.practiceIndex + 1} of ${questions.length}`;
  $("#practiceScore").textContent = `Score: ${state.practiceScore}`;
  $("#practiceFeedback").textContent = "";
  $("#practiceFeedback").className = "feedback";
  $("#practiceAnswers").innerHTML = item.options.map((option, index) => `
    <button class="answer-button" type="button" data-answer="${index}">${option}</button>
  `).join("");

  $all("#practiceAnswers .answer-button").forEach((button) => {
    button.addEventListener("click", () => answerPractice(Number(button.dataset.answer)));
  });
}

function answerPractice(choice) {
  if (state.practiceAnswered) return;
  const item = DATA.practice[state.practiceTopic][state.practiceIndex];
  const correct = choice === item.answer;
  state.practiceAnswered = true;
  if (correct) state.practiceScore += 1;

  $all("#practiceAnswers .answer-button").forEach((button) => {
    const idx = Number(button.dataset.answer);
    button.disabled = true;
    if (idx === item.answer) button.classList.add("correct");
    if (idx === choice && !correct) button.classList.add("incorrect");
  });

  $("#practiceScore").textContent = `Score: ${state.practiceScore}`;
  $("#practiceFeedback").textContent = `${correct ? "Correct." : "Not correct."} ${item.explain}`;
  $("#practiceFeedback").className = `feedback ${correct ? "success" : "error"}`;
}

function renderGlossary() {
  const results = $("#glossaryResults");
  const search = normalise($("#glossarySearch").value);
  const category = $("#glossaryCategory").value;
  const filtered = DATA.glossary.filter((item) => {
    const matchesSearch = !search || normalise(`${item.term} ${item.definition}`).includes(search);
    const matchesCategory = category === "all" || item.category === category;
    return matchesSearch && matchesCategory;
  });

  if (!filtered.length) {
    results.innerHTML = `<div class="empty-state">No glossary term found.</div>`;
    return;
  }

  results.innerHTML = filtered.map((item) => `
    <article class="glossary-item">
      <span>${item.category}</span>
      <h3>${item.term}</h3>
      <p>${item.definition}</p>
    </article>
  `).join("");
}

function setupGlossary() {
  $("#glossarySearch").addEventListener("input", renderGlossary);
  $("#glossaryCategory").addEventListener("change", renderGlossary);
  renderGlossary();
}

function renderChecklist() {
  const grid = $("#checklistGrid");
  grid.innerHTML = DATA.checklist.map((item, index) => {
    const id = `check-${index}`;
    const checked = state.checklist.has(String(index));
    return `
      <label class="check-item" for="${id}">
        <input id="${id}" type="checkbox" data-check="${index}" ${checked ? "checked" : ""} />
        <span>${item}</span>
      </label>
    `;
  }).join("");

  $all("[data-check]").forEach((input) => {
    input.addEventListener("change", () => {
      const id = input.dataset.check;
      if (input.checked) {
        state.checklist.add(id);
      } else {
        state.checklist.delete(id);
      }
      saveSet(storageKeys.checklist, state.checklist);
      updateProgress();
    });
  });
}

function setupChecklist() {
  renderChecklist();
}


const examState = {
  questions: [],
  current: 0,
  answers: [],
  remainingSeconds: 0,
  timerId: null,
  submitted: false,
  startedAt: null
};

function getExamHistory() {
  try {
    return JSON.parse(localStorage.getItem(examStorageKey)) || [];
  } catch (error) {
    return [];
  }
}

function saveExamHistory(history) {
  localStorage.setItem(examStorageKey, JSON.stringify(history.slice(0, 8)));
}

function shuffleArray(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function getExamBank() {
  const practiceQuestions = Object.entries(DATA.practice).flatMap(([topic, questions]) =>
    questions.map((question) => ({ ...question, topic }))
  );
  return [...practiceQuestions, ...(DATA.examBank || [])];
}

function createExamQuestion(question, index) {
  const options = question.options.map((text, optionIndex) => ({
    text,
    correct: optionIndex === question.answer
  }));

  return {
    id: `exam-${index}-${normalise(question.topic).replace(/[^a-z0-9]+/g, "-")}`,
    topic: question.topic,
    q: question.q,
    options: shuffleArray(options),
    explain: question.explain
  };
}

function formatSeconds(seconds) {
  if (!seconds) return "No timer";
  const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
  const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
}

function startExamTimer() {
  clearInterval(examState.timerId);
  if (!examState.remainingSeconds) {
    $("#examTimer").textContent = "No timer";
    return;
  }

  $("#examTimer").textContent = formatSeconds(examState.remainingSeconds);
  examState.timerId = setInterval(() => {
    examState.remainingSeconds -= 1;
    $("#examTimer").textContent = formatSeconds(examState.remainingSeconds);
    if (examState.remainingSeconds <= 0) {
      clearInterval(examState.timerId);
      submitExam(true);
    }
  }, 1000);
}

function startExam() {
  const requestedLength = Number($("#examLength").value || 15);
  const timeLimit = Number($("#examTime").value || 0);
  const bank = shuffleArray(getExamBank());
  const picked = bank.slice(0, Math.min(requestedLength, bank.length));

  examState.questions = picked.map(createExamQuestion);
  examState.current = 0;
  examState.answers = Array(examState.questions.length).fill(null);
  examState.remainingSeconds = timeLimit * 60;
  examState.submitted = false;
  examState.startedAt = Date.now();

  $("#examSetup").hidden = true;
  $("#examCard").hidden = false;
  $("#examResults").hidden = true;
  renderExamQuestion();
  startExamTimer();
}

function renderExamQuestion() {
  if (!examState.questions.length) return;
  const question = examState.questions[examState.current];
  const currentAnswer = examState.answers[examState.current];

  $("#examTopicLabel").textContent = question.topic;
  $("#examProgressText").textContent = `Question ${examState.current + 1} of ${examState.questions.length}`;
  $("#examProgressFill").style.width = `${((examState.current + 1) / examState.questions.length) * 100}%`;
  $("#examQuestion").textContent = question.q;
  $("#examAnswers").innerHTML = question.options.map((option, index) => `
    <button class="answer-button ${currentAnswer === index ? "selected" : ""}" type="button" data-exam-answer="${index}">
      <span>${String.fromCharCode(65 + index)}</span>
      ${option.text}
    </button>
  `).join("");

  $all("[data-exam-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      examState.answers[examState.current] = Number(button.dataset.examAnswer);
      renderExamQuestion();
    });
  });

  $("#prevExam").disabled = examState.current === 0;
  $("#nextExam").disabled = examState.current === examState.questions.length - 1;
}

function moveExam(direction) {
  examState.current += direction;
  if (examState.current < 0) examState.current = 0;
  if (examState.current >= examState.questions.length) examState.current = examState.questions.length - 1;
  renderExamQuestion();
}

function scoreExam() {
  let correct = 0;
  const byTopic = {};

  const review = examState.questions.map((question, index) => {
    const answerIndex = examState.answers[index];
    const userOption = answerIndex === null ? null : question.options[answerIndex];
    const correctOption = question.options.find((option) => option.correct);
    const isCorrect = Boolean(userOption && userOption.correct);
    if (isCorrect) correct += 1;

    if (!byTopic[question.topic]) {
      byTopic[question.topic] = { correct: 0, total: 0 };
    }
    byTopic[question.topic].total += 1;
    if (isCorrect) byTopic[question.topic].correct += 1;

    return {
      ...question,
      userAnswer: userOption ? userOption.text : "Not answered",
      correctAnswer: correctOption.text,
      isCorrect
    };
  });

  return { correct, total: examState.questions.length, review, byTopic };
}

function submitExam(autoSubmitted = false) {
  if (!examState.questions.length || examState.submitted) return;
  const unanswered = examState.answers.filter((answer) => answer === null).length;
  if (!autoSubmitted && unanswered && !confirm(`You still have ${unanswered} unanswered question(s). Submit anyway?`)) {
    return;
  }

  examState.submitted = true;
  clearInterval(examState.timerId);

  const result = scoreExam();
  const percent = Math.round((result.correct / result.total) * 100);
  const weakTopics = Object.entries(result.byTopic)
    .filter(([, stats]) => stats.correct / stats.total < 0.7)
    .map(([topic]) => topic);

  const durationSeconds = Math.round((Date.now() - examState.startedAt) / 1000);
  const history = getExamHistory();
  history.unshift({
    date: new Date().toISOString(),
    percent,
    correct: result.correct,
    total: result.total,
    weakTopics,
    durationSeconds
  });
  saveExamHistory(history);

  $("#examCard").hidden = true;
  $("#examSetup").hidden = false;
  $("#examResults").hidden = false;
  renderExamResults(result, percent, weakTopics, autoSubmitted);
  renderExamHistory();
  updateProgress();
}

function renderExamResults(result, percent, weakTopics, autoSubmitted) {
  $("#examScoreTitle").textContent = `Score: ${percent}%`;
  $("#examScoreSummary").textContent = `${result.correct} correct out of ${result.total}. ${autoSubmitted ? "The exam was submitted automatically because time ended. " : ""}${getScoreMessage(percent)}`;

  $("#topicBreakdown").innerHTML = Object.entries(result.byTopic).map(([topic, stats]) => {
    const topicPercent = Math.round((stats.correct / stats.total) * 100);
    return `
      <div class="topic-result">
        <div><strong>${topic}</strong><span>${stats.correct}/${stats.total}</span></div>
        <div class="mini-progress"><span style="width:${topicPercent}%"></span></div>
      </div>
    `;
  }).join("");

  const plan = weakTopics.length ? weakTopics.map((topic) => {
    const moduleHint = getModuleHintForTopic(topic);
    return `<li><strong>${topic}:</strong> revise ${moduleHint}, then retake topic practice before another exam.</li>`;
  }) : ["You performed well across all tested topics. Keep revising flashcards and retake exam mode tomorrow to confirm retention."];
  $("#revisionPlan").innerHTML = plan.map((item) => item.startsWith("<li>") ? item : `<li>${item}</li>`).join("");

  $("#examReviewList").innerHTML = result.review.map((item, index) => `
    <article class="review-item ${item.isCorrect ? "correct" : "wrong"}">
      <div class="review-head">
        <span>${item.isCorrect ? "Correct" : "Review"}</span>
        <strong>${index + 1}. ${item.topic}</strong>
      </div>
      <p>${item.q}</p>
      <dl>
        <div><dt>Your answer</dt><dd>${item.userAnswer}</dd></div>
        <div><dt>Correct answer</dt><dd>${item.correctAnswer}</dd></div>
      </dl>
      <small>${item.explain}</small>
    </article>
  `).join("");
}

function getScoreMessage(percent) {
  if (percent >= 85) return "Excellent. You are close to exam-ready for this set.";
  if (percent >= 70) return "Good work. Focus on the weak topics and repeat the exam.";
  if (percent >= 50) return "Fair attempt. Return to the notes and flashcards before retesting.";
  return "Start again with the modules, then use flashcards before attempting another exam.";
}

function getModuleHintForTopic(topic) {
  const map = {
    "Chromosome basics": "basic terms, chromosome anatomy and chromatin packaging",
    "Chromosome nomenclature": "p/q arms, regions, bands and karyotype notation",
    "Karyotyping and techniques": "banding, FISH, array CGH, SNP array and WGS",
    "Aneuploidy syndromes": "nondisjunction, trisomy, monosomy and syndrome karyotypes",
    "Structural abnormalities": "deletions, duplications, inversions and translocations",
    "Mosaicism and epigenetics": "mosaicism, methylation and histone modification",
    "Telomeres and prenatal": "telomere aging/cancer and prenatal testing methods"
  };
  return map[topic] || "the related module and glossary terms";
}

function renderExamHistory() {
  const list = $("#examHistoryList");
  if (!list) return;
  const history = getExamHistory();
  if (!history.length) {
    list.innerHTML = `<div class="empty-state compact-empty">No exam attempts yet.</div>`;
    return;
  }

  list.innerHTML = history.map((item, index) => {
    const date = new Date(item.date);
    const weak = item.weakTopics && item.weakTopics.length ? item.weakTopics.join(", ") : "None";
    return `
      <article class="history-item">
        <strong>${item.percent}%</strong>
        <span>${item.correct}/${item.total} • Attempt ${history.length - index}</span>
        <small>${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</small>
        <em>Weak: ${weak}</em>
      </article>
    `;
  }).join("");
}

function setupExamMode() {
  const startButton = $("#startExam");
  if (!startButton) return;
  startButton.addEventListener("click", startExam);
  $("#prevExam").addEventListener("click", () => moveExam(-1));
  $("#nextExam").addEventListener("click", () => moveExam(1));
  $("#submitExam").addEventListener("click", () => submitExam(false));
  $("#clearExamHistory").addEventListener("click", () => {
    if (!confirm("Clear all saved exam scores?")) return;
    localStorage.removeItem(examStorageKey);
    localStorage.removeItem(plannerStorageKey);
    renderExamHistory();
    renderStudyPlan();
    renderRevisionReport();
    updateProgress();
  });
  renderExamHistory();
}


function getWeakTopicsFromHistory() {
  const counts = {};
  getExamHistory().forEach((attempt) => {
    (attempt.weakTopics || []).forEach((topic) => {
      counts[topic] = (counts[topic] || 0) + 1;
    });
  });
  return Object.entries(counts).sort((a, b) => b[1] - a[1]).map(([topic]) => topic);
}

function distributeItems(items, days) {
  const buckets = Array.from({ length: days }, () => []);
  items.forEach((item, index) => buckets[index % days].push(item));
  return buckets;
}

function renderStudyPlan() {
  const board = $("#planBoard");
  if (!board) return;
  const days = Number($("#plannerDays").value || 7);
  const focus = $("#plannerFocus").value || "balanced";
  const weakTopics = getWeakTopicsFromHistory();
  let modules = [...DATA.modules];

  if (focus === "weak" && weakTopics.length) {
    modules.sort((a, b) => {
      const aWeak = weakTopics.some((topic) => normalise(a.title).includes(normalise(topic.split(" ")[0])) || normalise(topic).includes(normalise(a.category)));
      const bWeak = weakTopics.some((topic) => normalise(b.title).includes(normalise(topic.split(" ")[0])) || normalise(topic).includes(normalise(b.category)));
      return Number(bWeak) - Number(aWeak);
    });
  }

  const buckets = distributeItems(modules, days);
  const plan = buckets.map((items, index) => {
    const day = index + 1;
    const activity = focus === "exam"
      ? (day === days ? "Take a timed exam, review wrong answers and revise weak topics." : "Read notes, answer topic practice, then do 10 flashcards.")
      : focus === "weak"
        ? "Revise weak areas first, then complete flashcards and one practice set."
        : "Read notes, view one diagram, flip flashcards and answer practice questions.";
    const examTask = day === days ? "Final task: attempt Exam Mode and download your revision report." : "Mini task: mark completed modules after studying.";
    return { day, items, activity, examTask };
  });

  localStorage.setItem(plannerStorageKey, JSON.stringify({ days, focus, generatedAt: new Date().toISOString(), plan }));

  board.innerHTML = plan.map((day) => `
    <article class="plan-day">
      <span class="day-pill">Day ${day.day}</span>
      <h3>${day.items.length ? day.items.map((item) => item.title).join(" + ") : "Review and rest"}</h3>
      <p>${day.activity}</p>
      <ul>${day.items.map((item) => `<li><strong>${item.category}:</strong> ${item.summary}</li>`).join("")}</ul>
      <em>${day.examTask}</em>
    </article>
  `).join("");
}

function setupPlanner() {
  if (!$("#generatePlan")) return;
  $("#generatePlan").addEventListener("click", renderStudyPlan);
  $("#plannerDays").addEventListener("change", renderStudyPlan);
  $("#plannerFocus").addEventListener("change", renderStudyPlan);
  $("#printPlan").addEventListener("click", () => window.print());
  renderStudyPlan();
}

function buildReportText() {
  const moduleTotal = DATA.modules.length;
  const checklistTotal = DATA.checklist.length;
  const history = getExamHistory();
  const best = history.reduce((max, item) => Math.max(max, item.percent || 0), 0);
  const latest = history[0];
  const weakTopics = getWeakTopicsFromHistory();
  const completedTitles = DATA.modules.filter((module) => state.completedModules.has(module.id)).map((module) => module.title);
  const difficultCards = DATA.flashcards.filter((card) => state.difficult.has(card.id)).map((card) => card.term);
  const notCompleted = DATA.modules.filter((module) => !state.completedModules.has(module.id)).map((module) => module.title);
  const nextSteps = [];
  if (notCompleted.length) nextSteps.push(`Complete remaining modules: ${notCompleted.slice(0, 4).join(", ")}${notCompleted.length > 4 ? ", ..." : ""}.`);
  if (difficultCards.length) nextSteps.push(`Revisit difficult flashcards: ${difficultCards.slice(0, 5).join(", ")}.`);
  if (weakTopics.length) nextSteps.push(`Focus exam revision on: ${weakTopics.slice(0, 5).join(", ")}.`);
  if (!nextSteps.length) nextSteps.push("Attempt another timed exam and keep reviewing explanations for wrong answers.");

  return {
    generatedAt: new Date().toLocaleString(),
    moduleProgress: `${state.completedModules.size}/${moduleTotal}`,
    checklistProgress: `${state.checklist.size}/${checklistTotal}`,
    difficultCount: difficultCards.length,
    best,
    latest,
    weakTopics,
    completedTitles,
    difficultCards,
    nextSteps
  };
}

function renderRevisionReport() {
  const container = $("#revisionReport");
  if (!container) return;
  const report = buildReportText();
  container.innerHTML = `
    <div class="report-topline">
      <div><span class="panel-label">Generated</span><strong>${report.generatedAt}</strong></div>
      <div><span class="panel-label">Best exam</span><strong>${report.best}%</strong></div>
      <div><span class="panel-label">Modules</span><strong>${report.moduleProgress}</strong></div>
      <div><span class="panel-label">Checklist</span><strong>${report.checklistProgress}</strong></div>
    </div>
    <div class="report-section-grid">
      <section>
        <h3>Completed modules</h3>
        ${report.completedTitles.length ? `<ul>${report.completedTitles.map((item) => `<li>${item}</li>`).join("")}</ul>` : `<p>No modules marked complete yet.</p>`}
      </section>
      <section>
        <h3>Difficult flashcards</h3>
        ${report.difficultCards.length ? `<ul>${report.difficultCards.map((item) => `<li>${item}</li>`).join("")}</ul>` : `<p>No difficult cards marked yet.</p>`}
      </section>
      <section>
        <h3>Weak exam topics</h3>
        ${report.weakTopics.length ? `<ul>${report.weakTopics.map((item) => `<li>${item}</li>`).join("")}</ul>` : `<p>No weak topics recorded yet. Take an exam to generate feedback.</p>`}
      </section>
      <section>
        <h3>Recommended next steps</h3>
        <ul>${report.nextSteps.map((item) => `<li>${item}</li>`).join("")}</ul>
      </section>
    </div>
  `;
}

function downloadTextFile(filename, content, type = "text/plain") {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function setupReportTools() {
  if (!$("#refreshReport")) return;
  $("#refreshReport").addEventListener("click", renderRevisionReport);
  $("#printReport").addEventListener("click", () => window.print());
  $("#downloadReport").addEventListener("click", () => {
    const report = buildReportText();
    const lines = [
      "ChromosomeLearn Revision Report",
      `Generated: ${report.generatedAt}`,
      `Modules completed: ${report.moduleProgress}`,
      `Checklist completed: ${report.checklistProgress}`,
      `Best exam score: ${report.best}%`,
      "",
      "Completed modules:",
      ...(report.completedTitles.length ? report.completedTitles.map((x) => `- ${x}`) : ["- None yet"]),
      "",
      "Difficult flashcards:",
      ...(report.difficultCards.length ? report.difficultCards.map((x) => `- ${x}`) : ["- None yet"]),
      "",
      "Weak topics:",
      ...(report.weakTopics.length ? report.weakTopics.map((x) => `- ${x}`) : ["- None recorded yet"]),
      "",
      "Next steps:",
      ...report.nextSteps.map((x) => `- ${x}`)
    ];
    downloadTextFile("chromosomelearn_revision_report.txt", lines.join("\n"));
  });
  $("#exportProgress").addEventListener("click", () => {
    const payload = {
      app: "ChromosomeLearn",
      phase: 6,
      exportedAt: new Date().toISOString(),
      completedModules: [...state.completedModules],
      checklist: [...state.checklist],
      difficult: [...state.difficult],
      examHistory: getExamHistory(),
      lastPlan: JSON.parse(localStorage.getItem(plannerStorageKey) || "null")
    };
    downloadTextFile("chromosomelearn_progress_backup.json", JSON.stringify(payload, null, 2), "application/json");
  });
  $("#importProgress").addEventListener("change", (event) => {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const payload = JSON.parse(reader.result);
        state.completedModules = new Set(payload.completedModules || []);
        state.checklist = new Set(payload.checklist || []);
        state.difficult = new Set(payload.difficult || []);
        saveSet(storageKeys.completedModules, state.completedModules);
        saveSet(storageKeys.checklist, state.checklist);
        saveSet(storageKeys.difficult, state.difficult);
        localStorage.setItem(examStorageKey, JSON.stringify(payload.examHistory || []));
        if (payload.lastPlan) localStorage.setItem(plannerStorageKey, JSON.stringify(payload.lastPlan));
        renderModules();
        renderChecklist();
        renderFlashcard();
        renderExamHistory();
        renderRevisionReport();
        updateProgress();
        alert("Progress imported successfully.");
      } catch (error) {
        alert("Could not import this file. Please choose a valid ChromosomeLearn JSON backup.");
      }
    };
    reader.readAsText(file);
    event.target.value = "";
  });
  renderRevisionReport();
}

function setupPWA() {
  const status = $("#offlineStatus");
  const dot = $("#offlineDot");
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(() => {
      if (status) status.textContent = "Offline support ready after first load";
      if (dot) dot.classList.add("ready");
    }).catch(() => {
      if (status) status.textContent = "Offline support unavailable in this browser";
    });
  } else if (status) {
    status.textContent = "Offline support unavailable in this browser";
  }

  let deferredPrompt = null;
  const installButton = $("#installApp");
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event;
    if (installButton) installButton.hidden = false;
  });
  if (installButton) {
    installButton.addEventListener("click", async () => {
      if (!deferredPrompt) return;
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      deferredPrompt = null;
      installButton.hidden = true;
    });
  }
}

function setupReset() {
  $("#resetProgress").addEventListener("click", () => {
    if (!confirm("Reset all saved progress for this website?")) return;
    Object.values(storageKeys).forEach((key) => localStorage.removeItem(key));
    localStorage.removeItem(examStorageKey);
    localStorage.removeItem(plannerStorageKey);
    state.completedModules = new Set();
    state.checklist = new Set();
    state.difficult = new Set();
    renderModules();
    renderChecklist();
    renderFlashcard();
    renderExamHistory();
    renderStudyPlan();
    renderRevisionReport();
    updateProgress();
  });
}

function init() {
  setupNavigation();
  setupModules();
  setupFlashcards();
  setupDiagrams();
  setupVisualTools();
  setupPractice();
  setupExamMode();
  setupPlanner();
  setupGlossary();
  setupChecklist();
  setupReportTools();
  setupPWA();
  setupReset();
  updateProgress();
}

document.addEventListener("DOMContentLoaded", init);
