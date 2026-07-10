window.CHROMOSOME_LEARN_DATA = {
  modules: [
    {
      id: "basics",
      category: "Basics",
      title: "Basic chromosome terminology",
      summary: "Chromosomes are organised DNA-protein structures that carry genetic information. Chromatin is DNA plus histone proteins, while a chromatid is one identical half of a duplicated chromosome joined at the centromere.",
      keyPoints: [
        "Cytogenetics is the study of chromosomes, their structure and inheritance.",
        "A chromosome contains genetic information needed for cell function, development and inheritance.",
        "A nucleosome is the basic unit of chromatin: DNA wrapped around histone proteins.",
        "Euchromatin is loose and transcriptionally active; heterochromatin is dense and mostly inactive."
      ],
      clinical: "Problems in chromosome number or structure may lead to developmental disorders, infertility, pregnancy loss and cancer.",
      memory: "Think: chromosome = book of genetic information; chromatin = the book material; nucleosome = the beads that package the book.",
      selfTest: "Explain the difference between chromosome, chromatin, chromatid and nucleosome."
    },
    {
      id: "packaging",
      category: "Structure",
      title: "Chromatin packaging and histones",
      summary: "DNA is packed in stages so that long DNA molecules can fit inside the nucleus. DNA wraps around histone octamers to form nucleosomes, which then fold into higher-order chromatin fibres.",
      keyPoints: [
        "A nucleosome contains histones H2A, H2B, H3 and H4, with DNA wrapped around them.",
        "Histone H1 binds linker DNA and helps stabilise compact chromatin structure.",
        "Histone acetylation usually opens chromatin and activates transcription.",
        "Histone methylation may activate or repress transcription depending on the site."
      ],
      clinical: "Changes in chromatin packaging can affect gene expression and are important in cancer and developmental disease.",
      memory: "DNA packaging is like beads on a string becoming a tightly coiled rope.",
      selfTest: "Why does acetylation usually increase gene expression?"
    },
    {
      id: "nomenclature",
      category: "Cytogenetics",
      title: "Chromosome nomenclature",
      summary: "Chromosome locations are written using the chromosome number, arm, region and band. The short arm is p and the long arm is q. Numbers increase away from the centromere.",
      keyPoints: [
        "15q means the long arm of chromosome 15.",
        "15q13 means chromosome 15, long arm, region 1, band 3.",
        "4q26-q27 means a region on the long arm of chromosome 4 from band q26 to q27.",
        "The centromere region is marked as p10 or q10 depending on the side."
      ],
      clinical: "Correct notation helps clinicians describe deletions, duplications, translocations and gene locations accurately.",
      memory: "p is petite/short, q is the next letter/long arm.",
      selfTest: "Interpret 7q11.23 in simple words."
    },
    {
      id: "karyotype",
      category: "Cytogenetics",
      title: "Karyotypes, ideograms and chromosome types",
      summary: "A karyotype is the chromosome complement of a cell or individual. Human somatic cells normally have 46 chromosomes: 22 pairs of autosomes and two sex chromosomes.",
      keyPoints: [
        "Normal female karyotype: 46,XX. Normal male karyotype: 46,XY.",
        "Autosomes are chromosomes 1–22; sex chromosomes are X and Y.",
        "Metacentric chromosomes have near-equal arms.",
        "Submetacentric chromosomes have one arm slightly longer; acrocentric chromosomes have one arm much longer."
      ],
      clinical: "Karyotyping is used to detect aneuploidy and large structural rearrangements.",
      memory: "Karyotype = the actual chromosome set; ideogram = the simplified chromosome map.",
      selfTest: "What does 47,XX,+21 mean?"
    },
    {
      id: "banding",
      category: "Cytogenetics",
      title: "Human karyotyping and banding techniques",
      summary: "Karyotyping usually uses metaphase chromosomes because they are condensed and visible. Banding techniques stain chromosomes in patterns that help identify regions and abnormalities.",
      keyPoints: [
        "Colchicine or colcemid arrests dividing cells at metaphase.",
        "G-banding uses trypsin and Giemsa; dark bands are usually AT-rich and heterochromatic.",
        "R-banding gives the reverse of G-banding.",
        "Q-banding uses quinacrine fluorescence; C-banding highlights centromeric heterochromatin."
      ],
      clinical: "Banding helps detect large deletions, duplications and translocations, but it cannot reliably detect very small genomic changes.",
      memory: "G = Giemsa, Q = Quinacrine, C = Centromere heterochromatin, R = Reverse.",
      selfTest: "Why are cells arrested at metaphase during karyotyping?"
    },
    {
      id: "fish-array-wgs",
      category: "Cytogenetics",
      title: "FISH, microarrays and whole-genome sequencing",
      summary: "Modern chromosome analysis includes targeted and genome-wide techniques. FISH targets specific DNA regions. Chromosomal microarray detects genome-wide copy number changes. SNP arrays add information on uniparental disomy and homozygosity. WGS can detect aneuploidy and structural rearrangements from sequence reads.",
      keyPoints: [
        "FISH uses labelled DNA probes that bind to specific chromosome regions.",
        "Array CGH compares patient DNA with reference DNA to detect gains and losses.",
        "SNP arrays detect copy number changes plus loss of heterozygosity and uniparental disomy.",
        "Whole-genome sequencing can show extra chromosomes or translocation breakpoints through read alignment patterns."
      ],
      clinical: "These tools are useful when conventional karyotyping is too low-resolution for the suspected condition.",
      memory: "FISH = find one suspected region; array = scan genome dosage; WGS = read across the genome.",
      selfTest: "Which technique is best for detecting a suspected microdeletion: karyotype or microarray? Why?"
    },
    {
      id: "numerical",
      category: "Abnormalities",
      title: "Numerical chromosomal abnormalities",
      summary: "Numerical abnormalities occur when chromosome number is abnormal. Aneuploidy involves gain or loss of individual chromosomes. Polyploidy involves extra whole sets of chromosomes.",
      keyPoints: [
        "Nondisjunction during meiosis or mitosis is a major cause of aneuploidy.",
        "Trisomy means three copies of a chromosome; monosomy means one copy.",
        "Triploidy has 69 chromosomes, such as 69,XXX or 69,XXY.",
        "Aneuploidy can cause infertility, miscarriage and syndromic disease."
      ],
      clinical: "Trisomies 13, 18 and 21 can survive to birth, but trisomy 13 and 18 are often associated with early death.",
      memory: "A-neu-ploidy = not the normal number for one or more chromosomes.",
      selfTest: "Explain how nondisjunction can lead to trisomy."
    },
    {
      id: "syndromes",
      category: "Clinical",
      title: "Major aneuploidy syndromes",
      summary: "Common chromosomal syndromes include Down syndrome, Patau syndrome, Edwards syndrome, Turner syndrome, Klinefelter syndrome and Jacobs syndrome.",
      keyPoints: [
        "Down syndrome: 47,XX/XY,+21; features include intellectual disability, flat facial profile and short fingers.",
        "Patau syndrome: trisomy 13; features may include microcephaly, cleft lip/palate, polydactyly and cardiac defects.",
        "Edwards syndrome: trisomy 18; associated with severe developmental abnormalities.",
        "Turner syndrome: 45,X; short stature, gonadal dysgenesis and infertility.",
        "Klinefelter syndrome: 47,XXY; tall body proportions, small testes, infertility and possible gynaecomastia.",
        "Jacobs syndrome: 47,XYY; often tall and may have cognitive or behavioural differences."
      ],
      clinical: "Recognising the karyotype helps connect the genetic abnormality to clinical features and counselling.",
      memory: "21 = Down, 13 = Patau, 18 = Edwards, XO = Turner, XXY = Klinefelter, XYY = Jacobs.",
      selfTest: "Match 45,X and 47,XXY to their syndromes."
    },
    {
      id: "structural",
      category: "Abnormalities",
      title: "Structural chromosomal abnormalities",
      summary: "Structural abnormalities happen when chromosome segments are lost, copied, reversed or moved. Major types include deletion, duplication, inversion, insertion and translocation.",
      keyPoints: [
        "Deletion means loss of a chromosome segment.",
        "Duplication means extra copies of a chromosome region.",
        "Inversion means a chromosome segment breaks and reinserts in the reverse direction.",
        "Translocation means a chromosome segment attaches to a different chromosome.",
        "Robertsonian translocation involves fusion of long arms of acrocentric chromosomes."
      ],
      clinical: "Examples include Cri-du-chat from 5p deletion, Williams syndrome from 7q11.23 deletion and Philadelphia chromosome t(9;22) in CML.",
      memory: "Delete, duplicate, invert, move: these four words explain most structural changes.",
      selfTest: "What is the difference between reciprocal translocation and Robertsonian translocation?"
    },
    {
      id: "deletions-imprinting",
      category: "Clinical",
      title: "Deletion syndromes and genomic imprinting",
      summary: "Some syndromes result from deletion of specific chromosomal regions. The same deletion may produce different syndromes depending on whether it is inherited from the mother or father because of genomic imprinting.",
      keyPoints: [
        "Cri-du-chat syndrome results from deletion of part of chromosome 5p.",
        "Williams syndrome is associated with deletion at 7q11.23.",
        "Prader-Willi and Angelman syndromes involve the 15q11-q13 region.",
        "Maternal 15q11-q13 deletion leads to Angelman syndrome; paternal deletion leads to Prader-Willi syndrome."
      ],
      clinical: "Genomic imprinting means gene expression depends on parent of origin, so counselling must consider which parental chromosome is affected.",
      memory: "Same address, different parent, different syndrome.",
      selfTest: "Why can the same 15q11-q13 deletion produce two different conditions?"
    },
    {
      id: "mosaicism",
      category: "Abnormalities",
      title: "Mosaicism",
      summary: "Mosaicism means one individual has two or more different chromosome complements in different cell lines. It often results from nondisjunction after fertilisation.",
      keyPoints: [
        "A postzygotic mitotic error can create two cell populations.",
        "Mosaicism may be detected by karyotyping, interphase FISH or microarray.",
        "Effects depend on timing, tissue distribution, chromosome involved and proportion of abnormal cells.",
        "Mosaic individuals may be less severely affected than non-mosaic individuals."
      ],
      clinical: "Mosaic Down syndrome and mosaic Turner syndrome can have milder features depending on the affected tissues.",
      memory: "Mosaic = mixed cell lines, like different tiles in one picture.",
      selfTest: "Why does mosaicism sometimes reduce clinical severity?"
    },
    {
      id: "telomeres-epigenetics",
      category: "Structure",
      title: "Telomeres, aging, cancer and epigenetics",
      summary: "Telomeres protect chromosome ends. They shorten with cell division, which can lead to senescence or apoptosis. Cancer cells often reactivate telomerase to keep dividing. Epigenetic changes regulate gene expression without changing DNA sequence.",
      keyPoints: [
        "Human telomeres contain repetitive TTAGGG sequences.",
        "Short telomeres limit tissue renewal and contribute to aging features.",
        "Critically short telomeres can cause genomic instability.",
        "DNA methylation usually represses gene expression by recruiting silencing proteins.",
        "Histone acetylation generally opens chromatin and supports transcription."
      ],
      clinical: "Cancer may involve altered methylation states, telomerase reactivation and chromosomal instability.",
      memory: "Telomeres are chromosome caps; epigenetics is gene control without changing the letters.",
      selfTest: "Why can telomerase activation help cancer cells survive?"
    },
    {
      id: "prenatal",
      category: "Clinical",
      title: "Prenatal diagnostics and ethics",
      summary: "Prenatal diagnosis uses non-invasive and invasive methods to assess fetal health, chromosomal disorders and structural defects. Informed consent and confidentiality are essential.",
      keyPoints: [
        "Ultrasound can detect structural defects and markers such as nuchal translucency.",
        "Amniocentesis tests fetal cells from amniotic fluid.",
        "Chorionic villus sampling tests placental tissue.",
        "NIPT analyses cell-free fetal DNA in maternal blood.",
        "Genetic counselling supports reproductive choices and future pregnancy planning."
      ],
      clinical: "Prenatal results can guide pregnancy management, birth planning, neonatal care and counselling.",
      memory: "Screening estimates risk; diagnostic testing confirms more directly.",
      selfTest: "Explain why informed consent is important before prenatal genetic testing."
    },
    {"id": "history-development", "category": "Basics", "title": "Historical development of chromosome science", "summary": "Chromosome science developed from early observations of thread-like nuclear structures to the correct human chromosome count and discovery of chromosomal disease.", "keyPoints": ["1842: Nägeli observed thread-like structures in plant nuclei.", "1879: Flemming described mitosis and chromosome behaviour.", "1888: Waldeyer introduced the term chromosome.", "1956: Tjio and Levan correctly identified 46 human chromosomes.", "1959: Down syndrome was linked to trisomy 21; 1960: Philadelphia chromosome was identified in CML."], "clinical": "The historical discoveries explain why improved methods changed chromosome diagnosis and cancer cytogenetics.", "memory": "History path: see chromosomes → name chromosomes → count chromosomes → diagnose chromosome disorders.", "selfTest": "Why was the 1923 report of 48 human chromosomes later corrected?"},
    {"id": "cell-cycle-karyotyping-procedure", "category": "Cytogenetics", "title": "Cell cycle and full karyotyping procedure", "summary": "Karyotyping depends on dividing cells arrested at metaphase, when chromosomes are most condensed and easiest to see.", "keyPoints": ["Interphase includes G1, S and G2; S phase is DNA synthesis.", "Mitosis includes prophase, prometaphase, metaphase, anaphase and telophase.", "Peripheral blood lymphocytes are stimulated with phytohaemagglutinin and cultured.", "Colchicine or colcemid arrests metaphase; hypotonic KCl spreads chromosomes.", "Methanol:acetic acid fixation, slide dropping, trypsin-Giemsa staining and microscopy produce the karyotype."], "clinical": "A good metaphase spread allows chromosome number and large structural changes to be detected.", "memory": "Culture, arrest, swell, fix, drop, stain, view, arrange.", "selfTest": "List the karyotyping steps from sample collection to chromosome arrangement."},
    {"id": "fragile-sites-mlpa", "category": "Cytogenetics", "title": "Fragile sites, Fragile X and MLPA", "summary": "Fragile sites are non-staining chromosome gaps prone to instability. MLPA is a multiplex PCR-based method that detects small exon-level deletions and duplications.", "keyPoints": ["Fragile X syndrome is linked to a fragile site at Xq27.3 involving FMR1.", "CGG repeat expansion above 200 can silence FMR1.", "MLPA detects small copy number changes that may be below standard karyotype resolution.", "G-banded karyotypes usually detect changes larger than about 5–10 Mb.", "Q-banding can highlight Y chromosome heterochromatin strongly."], "clinical": "Fragile X is an important X-linked cause of intellectual disability; MLPA helps diagnose targeted gene-level copy number changes.", "memory": "Fragile site = gap; FMR1 repeat expansion = gene silencing.", "selfTest": "Why might MLPA detect a deletion that a standard karyotype misses?"},
    {"id": "transposable-elements", "category": "Abnormalities", "title": "Transposable elements and structural change", "summary": "Transposable elements are mobile DNA sequences that can contribute to structural abnormalities.", "keyPoints": ["Retrotransposons move by copy-and-paste through an RNA intermediate.", "DNA transposons move by cut-and-paste using transposase.", "Alu elements are about 300 bp and make up at least 10% of human DNA.", "LINE-1 elements can be up to 6 kb and account for nearly 20% of the genome.", "Reverse transcriptase, integrase and transposase are key enzymes."], "clinical": "Insertion or recombination involving repetitive elements can disrupt genes or alter chromosome structure.", "memory": "Retro = RNA copy; DNA transposon = cut and paste.", "selfTest": "Compare Alu and LINE elements in length and genome contribution."},
    {"id": "clinical-indications", "category": "Clinical", "title": "Clinical indications for chromosome analysis", "summary": "Chromosome analysis is requested when clinical features, pregnancy history, fertility problems, cancer or prenatal risk suggest a chromosomal abnormality.", "keyPoints": ["Indications include developmental delay, dysmorphic features, multiple malformations, ambiguous genitalia and intellectual disability.", "Stillbirth and neonatal death may require chromosome analysis for counselling.", "Amenorrhoea, infertility and recurrent miscarriage may indicate chromosomal testing.", "Cancer cytogenetics may guide diagnosis and prognosis.", "Advanced maternal age increases risk for common fetal chromosomal disorders."], "clinical": "Chromosome analysis can guide diagnosis, management, prognosis and family reproductive counselling.", "memory": "Development, death, fertility, family, cancer, pregnancy: these are major testing triggers.", "selfTest": "Give three clinical reasons why chromosome analysis may be requested."},
    {"id": "prenatal-serum-ethics", "category": "Clinical", "title": "Prenatal serum markers, diagnosis and ethics", "summary": "Prenatal testing includes screening and diagnostic methods. Ethical practice requires informed consent, confidentiality and counselling.", "keyPoints": ["NIPT uses cell-free fetal DNA to screen for trisomies 21, 18 and 13 and sex chromosome disorders.", "CVS samples placental tissue; amniocentesis samples amniotic fluid.", "Maternal serum AFP rises in neural tube defects and falls in Down syndrome.", "β-hCG rises in Down syndrome and falls in Edwards syndrome; estriol falls in Down and Edwards syndromes.", "Genetic counselling supports informed reproductive choices."], "clinical": "Prenatal diagnosis can help plan pregnancy management, delivery, neonatal care and future pregnancies.", "memory": "AFP high = neural tube defect; AFP low + hCG high = think Down screening pattern.", "selfTest": "Differentiate prenatal screening from diagnostic testing."}
  ],
  flashcards: [
    { id: "fc1", set: "basics", term: "Cytogenetics", answer: "The study of chromosomes, their structure and inheritance." },
    { id: "fc2", set: "basics", term: "Chromosome", answer: "A highly organised DNA-protein complex that carries genetic information." },
    { id: "fc3", set: "basics", term: "Chromatin", answer: "DNA plus histone proteins inside the nucleus." },
    { id: "fc4", set: "basics", term: "Nucleosome", answer: "The basic chromatin unit: DNA wrapped around a histone octamer." },
    { id: "fc5", set: "basics", term: "Euchromatin", answer: "Loosely packed chromatin that is usually transcriptionally active." },
    { id: "fc6", set: "basics", term: "Heterochromatin", answer: "Densely packed chromatin that is mostly transcriptionally inactive." },
    { id: "fc7", set: "basics", term: "Telomere", answer: "Repetitive DNA sequence at chromosome ends that protects chromosomes." },
    { id: "fc8", set: "basics", term: "Centromere", answer: "Primary constriction where sister chromatids are joined and spindle attachment occurs through the kinetochore." },
    { id: "fc9", set: "techniques", term: "Karyotype", answer: "The number, size and shape of chromosomes in a cell or individual." },
    { id: "fc10", set: "techniques", term: "G-banding", answer: "Giemsa staining method; dark bands are usually AT-rich and heterochromatic." },
    { id: "fc11", set: "techniques", term: "FISH", answer: "Fluorescence in situ hybridisation uses labelled DNA probes to detect specific chromosome regions." },
    { id: "fc12", set: "techniques", term: "Array CGH", answer: "Genome-wide method that compares patient and reference DNA to detect copy number gains or losses." },
    { id: "fc13", set: "techniques", term: "SNP array", answer: "Detects copy number changes plus uniparental disomy, loss of heterozygosity and homozygosity regions." },
    { id: "fc14", set: "abnormalities", term: "Aneuploidy", answer: "Abnormal number of individual chromosomes, such as trisomy or monosomy." },
    { id: "fc15", set: "abnormalities", term: "Nondisjunction", answer: "Failure of chromosomes or chromatids to separate properly during cell division." },
    { id: "fc16", set: "abnormalities", term: "Deletion", answer: "Loss of a chromosomal segment." },
    { id: "fc17", set: "abnormalities", term: "Duplication", answer: "Extra copy of a chromosomal segment." },
    { id: "fc18", set: "abnormalities", term: "Inversion", answer: "A chromosomal segment breaks and reattaches in the opposite orientation." },
    { id: "fc19", set: "abnormalities", term: "Translocation", answer: "A chromosome segment breaks and attaches to another chromosome." },
    { id: "fc20", set: "abnormalities", term: "Mosaicism", answer: "Presence of two or more chromosome complements in one individual." },
    { id: "fc21", set: "syndromes", term: "Down syndrome", answer: "Usually trisomy 21; karyotype may be 47,XX,+21 or 47,XY,+21." },
    { id: "fc22", set: "syndromes", term: "Turner syndrome", answer: "45,X; short stature, gonadal dysgenesis and infertility are common features." },
    { id: "fc23", set: "syndromes", term: "Klinefelter syndrome", answer: "47,XXY; tall body proportions, small testes, infertility and possible gynaecomastia." },
    { id: "fc24", set: "syndromes", term: "Cri-du-chat syndrome", answer: "Deletion of part of chromosome 5p; associated with developmental problems and characteristic cry." },
    { id: "fc25", set: "syndromes", term: "Prader-Willi / Angelman", answer: "Both involve 15q11-q13; different syndrome depends on parental origin because of imprinting." },
    {"id": "fc26", "set": "history", "term": "1842 chromosome milestone", "answer": "Karl Wilhelm von Nägeli observed thread-like structures in plant cell nuclei."},
    {"id": "fc27", "set": "history", "term": "1956 chromosome milestone", "answer": "Tjio and Levan correctly established the human chromosome number as 46."},
    {"id": "fc28", "set": "history", "term": "Philadelphia chromosome", "answer": "A cancer-associated abnormality linked to chronic myeloid leukemia, classically t(9;22) producing BCR-ABL."},
    {"id": "fc29", "set": "history", "term": "S phase", "answer": "The cell-cycle stage of programmed DNA synthesis."},
    {"id": "fc30", "set": "techniques", "term": "MLPA", "answer": "Multiplex ligation-dependent probe amplification; a multiplex PCR-based method for detecting small exon-level deletions and duplications."},
    {"id": "fc31", "set": "techniques", "term": "R-banding", "answer": "Reverse banding pattern compared with G-banding, produced using hot alkaline treatment before Giemsa staining."},
    {"id": "fc32", "set": "techniques", "term": "Q-banding", "answer": "Quinacrine fluorescence banding; bright bands are usually AT-rich and Y heterochromatin fluoresces strongly."},
    {"id": "fc33", "set": "techniques", "term": "C-banding", "answer": "Banding that highlights constitutive heterochromatin, especially centromeres and Yq."},
    {"id": "fc34", "set": "abnormalities", "term": "Fragile X syndrome", "answer": "X-linked intellectual disability associated with FMR1 at Xq27.3; CGG repeat expansion above 200 can silence the gene."},
    {"id": "fc35", "set": "abnormalities", "term": "Triploidy", "answer": "A chromosomal state with 69 chromosomes, often from double fertilisation of an ovum."},
    {"id": "fc36", "set": "syndromes", "term": "Patau syndrome", "answer": "Trisomy 13; features may include microcephaly, cleft lip/palate, polydactyly and cardiac defects."},
    {"id": "fc37", "set": "syndromes", "term": "Edwards syndrome", "answer": "Trisomy 18; severe developmental abnormalities and high early mortality."},
    {"id": "fc38", "set": "syndromes", "term": "Trisomy 16", "answer": "A common cause of first-trimester pregnancy loss; affected embryos usually do not survive past the first trimester."},
    {"id": "fc39", "set": "syndromes", "term": "Complete androgen insensitivity syndrome", "answer": "46,XY individual with female body contours, breast development and sparse pubic/axillary hair because tissues do not respond to androgens."},
    {"id": "fc40", "set": "abnormalities", "term": "Alu element", "answer": "A short interspersed nuclear element about 300 bp long; more than 1 million copies make up at least 10% of human DNA."},
    {"id": "fc41", "set": "abnormalities", "term": "LINE-1 element", "answer": "A long interspersed nuclear element up to 6 kb long that accounts for nearly 20% of the human genome."},
    {"id": "fc42", "set": "abnormalities", "term": "Retrotransposon", "answer": "A mobile element that moves by copy-and-paste using an RNA intermediate and reverse transcription."},
    {"id": "fc43", "set": "abnormalities", "term": "DNA transposon", "answer": "A mobile element that moves directly as DNA through cut-and-paste action of transposase."},
    {"id": "fc44", "set": "syndromes", "term": "Charcot-Marie-Tooth duplication", "answer": "Progressive neurological disorder associated with duplication of 17p12."},
    {"id": "fc45", "set": "abnormalities", "term": "Pericentric inversion", "answer": "An inversion in which the inverted segment includes the centromere."},
    {"id": "fc46", "set": "abnormalities", "term": "Paracentric inversion", "answer": "An inversion in which the inverted segment does not include the centromere."},
    {"id": "fc47", "set": "prenatal", "term": "Maternal serum AFP", "answer": "Increased in neural tube defects and decreased in Down syndrome screening patterns."},
    {"id": "fc48", "set": "prenatal", "term": "Maternal serum β-hCG", "answer": "Often increased in Down syndrome and decreased in Edwards syndrome screening patterns."},
    {"id": "fc49", "set": "prenatal", "term": "Maternal serum estriol", "answer": "Often decreased in Down syndrome and Edwards syndrome screening patterns."},
    {"id": "fc50", "set": "prenatal", "term": "Genetic counselling", "answer": "Supports informed consent, confidentiality, reproductive choices, family follow-up and understanding of chromosomal test results."}
  ],
  glossary: [
    { term: "Acrocentric", category: "basic", definition: "A chromosome with one arm much longer than the other; chromosomes 13, 14, 15, 21 and 22 are acrocentric." },
    { term: "Amniocentesis", category: "prenatal", definition: "An invasive prenatal test that samples amniotic fluid to analyse fetal cells." },
    { term: "Aneuploidy", category: "abnormality", definition: "An abnormal number of individual chromosomes." },
    { term: "Array CGH", category: "technique", definition: "Comparative genomic hybridisation using microarrays to detect genome-wide copy number gains and losses." },
    { term: "Autosomes", category: "basic", definition: "Chromosomes 1 to 22 that are not sex chromosomes." },
    { term: "Barr body", category: "basic", definition: "An inactivated X chromosome visible as sex chromatin in interphase cells." },
    { term: "C-banding", category: "technique", definition: "Banding technique that highlights centromeric and constitutive heterochromatin." },
    { term: "Cell-free fetal DNA", category: "prenatal", definition: "Fetal DNA fragments in maternal blood used in non-invasive prenatal testing." },
    { term: "Centromere", category: "basic", definition: "Primary constriction of a chromosome where the kinetochore forms." },
    { term: "Chromatid", category: "basic", definition: "One of the two identical DNA-protein strands of a duplicated chromosome." },
    { term: "Chromatin", category: "basic", definition: "DNA combined with histone proteins." },
    { term: "Chromosome", category: "basic", definition: "A DNA-protein structure that carries genetic information." },
    { term: "Chorionic villus sampling", category: "prenatal", definition: "A prenatal diagnostic test that samples placental tissue." },
    { term: "Cri-du-chat syndrome", category: "syndrome", definition: "Deletion syndrome caused by loss of part of chromosome 5p." },
    { term: "Deletion", category: "abnormality", definition: "Loss of a chromosomal segment." },
    { term: "Down syndrome", category: "syndrome", definition: "Usually caused by trisomy 21; karyotype written as 47,XX,+21 or 47,XY,+21." },
    { term: "Duplication", category: "abnormality", definition: "Extra copy of a chromosome segment." },
    { term: "Euchromatin", category: "basic", definition: "Loosely packed chromatin that is usually active in transcription." },
    { term: "FISH", category: "technique", definition: "Fluorescence in situ hybridisation, a method using labelled probes to detect specific DNA sequences." },
    { term: "G-banding", category: "technique", definition: "Giemsa banding method commonly used in karyotyping." },
    { term: "Genomic imprinting", category: "basic", definition: "Gene expression pattern that depends on whether a gene is inherited from the mother or father." },
    { term: "Heterochromatin", category: "basic", definition: "Densely packed chromatin that is mostly transcriptionally inactive." },
    { term: "Inversion", category: "abnormality", definition: "A chromosome segment breaks and reinserts in the reverse direction." },
    { term: "Karyotype", category: "technique", definition: "The chromosome complement of an individual, tissue or cell line." },
    { term: "Kinetochore", category: "basic", definition: "Protein complex at the centromere that attaches chromosomes to spindle microtubules." },
    { term: "Klinefelter syndrome", category: "syndrome", definition: "Sex chromosome aneuploidy usually written as 47,XXY." },
    { term: "Mosaicism", category: "abnormality", definition: "Two or more different chromosome complements in one individual." },
    { term: "NIPT", category: "prenatal", definition: "Non-invasive prenatal testing using cell-free fetal DNA in maternal blood." },
    { term: "Nondisjunction", category: "abnormality", definition: "Failure of chromosomes or sister chromatids to separate correctly during cell division." },
    { term: "Nucleosome", category: "basic", definition: "DNA wrapped around histone proteins; the basic unit of chromatin." },
    { term: "Patau syndrome", category: "syndrome", definition: "Trisomy 13 syndrome." },
    { term: "q arm", category: "basic", definition: "Long arm of a chromosome." },
    { term: "p arm", category: "basic", definition: "Short arm of a chromosome." },
    { term: "Robertsonian translocation", category: "abnormality", definition: "Fusion of long arms of acrocentric chromosomes at or near the centromere." },
    { term: "SNP array", category: "technique", definition: "Genome-wide array that detects copy number changes and SNP patterns such as loss of heterozygosity." },
    { term: "Telomere", category: "basic", definition: "Protective repetitive sequence at chromosome ends, such as TTAGGG in humans." },
    { term: "Translocation", category: "abnormality", definition: "Transfer of a chromosomal segment to another chromosome." },
    { term: "Trisomy", category: "abnormality", definition: "Three copies of a chromosome instead of two." },
    { term: "Turner syndrome", category: "syndrome", definition: "Monosomy X syndrome, usually written as 45,X." },
    { term: "Whole-genome sequencing", category: "technique", definition: "DNA sequencing across the genome that can detect sequence changes and some chromosome-level abnormalities." },
    {"term": "Acetylation", "category": "basic", "definition": "Histone modification that neutralises lysine positive charge and usually opens chromatin for transcription."},
    {"term": "Alu element", "category": "abnormality", "definition": "A short interspersed nuclear element about 300 bp long; abundant in the human genome."},
    {"term": "Azoospermia", "category": "syndrome", "definition": "Failure to produce sperm; can occur in Klinefelter syndrome."},
    {"term": "Charcot-Marie-Tooth disease", "category": "syndrome", "definition": "Progressive neurological disorder associated with 17p12 duplication in the lecture notes."},
    {"term": "Colchicine", "category": "technique", "definition": "Agent used to arrest dividing cells at metaphase by disrupting spindle fibres."},
    {"term": "Colcemid", "category": "technique", "definition": "Colchicine-like agent used for metaphase arrest in cytogenetic preparation."},
    {"term": "Dicentric chromosome", "category": "abnormality", "definition": "A chromosome with two centromeres, often unstable during cell division."},
    {"term": "Dispermy", "category": "abnormality", "definition": "Double fertilisation of an ovum, which can produce triploidy."},
    {"term": "FMR1", "category": "syndrome", "definition": "Gene at Xq27.3 associated with fragile X syndrome when CGG repeats expand and silence expression."},
    {"term": "Fragile site", "category": "abnormality", "definition": "A non-staining gap or break-prone chromosome region associated with genomic instability."},
    {"term": "Haploinsufficiency", "category": "abnormality", "definition": "A situation where one functional copy of a gene is not enough for normal function."},
    {"term": "Histone H1", "category": "basic", "definition": "Linker histone that binds linker DNA and stabilises higher-order chromatin packing."},
    {"term": "Isochromosome", "category": "abnormality", "definition": "Abnormal chromosome with mirror-image arms; i(X)(q10) can be associated with Turner syndrome."},
    {"term": "LINE", "category": "abnormality", "definition": "Long interspersed nuclear element; L1 sequences are up to 6 kb and make up a large fraction of the human genome."},
    {"term": "Marker chromosome", "category": "abnormality", "definition": "Extra structurally abnormal chromosome whose origin may be unclear without further testing."},
    {"term": "Maternal serum AFP", "category": "prenatal", "definition": "Alpha-fetoprotein screening marker increased in neural tube defects and decreased in Down syndrome."},
    {"term": "Maternal serum estriol", "category": "prenatal", "definition": "Prenatal serum marker that may be decreased in Down syndrome and Edwards syndrome."},
    {"term": "Methylation", "category": "basic", "definition": "Epigenetic modification of DNA or histones; DNA methylation at CpG sites often represses transcription."},
    {"term": "Mitochondrial chromosome", "category": "basic", "definition": "Maternally inherited mitochondrial DNA molecule of about 16 kb encoding 37 genes."},
    {"term": "Pericentric inversion", "category": "abnormality", "definition": "Inversion that includes the centromere."},
    {"term": "Phytohaemagglutinin", "category": "technique", "definition": "Mitogen used to stimulate T lymphocytes to divide for chromosome culture."},
    {"term": "Preimplantation genetic diagnosis", "category": "prenatal", "definition": "Genetic testing of embryos before implantation during assisted reproduction."},
    {"term": "Q-banding", "category": "technique", "definition": "Fluorescent quinacrine chromosome banding method."},
    {"term": "R-banding", "category": "technique", "definition": "Reverse banding method compared with G-banding."},
    {"term": "Retrotransposon", "category": "abnormality", "definition": "Transposable element that copies itself through an RNA intermediate."},
    {"term": "SINE", "category": "abnormality", "definition": "Short interspersed nuclear element; Alu is an example in humans."},
    {"term": "Transposase", "category": "abnormality", "definition": "Enzyme that cuts and reinserts DNA transposons."},
    {"term": "Uniparental disomy", "category": "abnormality", "definition": "Both chromosome copies or chromosomal regions inherited from one parent; detectable by SNP array."},
    {"term": "Y-chromatin", "category": "basic", "definition": "Fluorescent heterochromatic region of the distal long arm of the Y chromosome."},
    {"term": "β-hCG", "category": "prenatal", "definition": "Prenatal serum marker often increased in Down syndrome and decreased in Edwards syndrome."}
  ],
  practice: {
    "Chromosome basics": [
      {
        q: "Which statement best defines chromatin?",
        options: ["DNA plus histone proteins", "Only the centromere of a chromosome", "Only mitochondrial DNA", "The spindle fibre during mitosis"],
        answer: 0,
        explain: "Chromatin is DNA combined with histone proteins."
      },
      {
        q: "Which chromatin type is usually loosely packed and transcriptionally active?",
        options: ["Heterochromatin", "Euchromatin", "Barr body", "Y-chromatin"],
        answer: 1,
        explain: "Euchromatin is less condensed and usually active in transcription."
      },
      {
        q: "The short arm of a chromosome is written as:",
        options: ["q", "p", "cen", "ter"],
        answer: 1,
        explain: "The p arm is the short arm; the q arm is the long arm."
      }
    ],
    "Karyotyping and techniques": [
      {
        q: "Why are cells arrested in metaphase for karyotyping?",
        options: ["Chromosomes are most condensed and visible", "DNA is completely absent", "The nuclear membrane is fully restored", "Chromosomes cannot be stained"],
        answer: 0,
        explain: "Metaphase chromosomes are condensed, making them suitable for visualisation and arrangement."
      },
      {
        q: "Which technique uses labelled DNA probes to detect a specific region?",
        options: ["FISH", "C-banding", "Standard light microscopy only", "Gram staining"],
        answer: 0,
        explain: "FISH uses fluorescent DNA probes to target specific sequences."
      },
      {
        q: "Which method can detect copy number changes across the genome?",
        options: ["Array CGH", "Only Q-banding", "Blood grouping", "ELISA"],
        answer: 0,
        explain: "Array CGH detects relative gains and losses across the genome."
      }
    ],
    "Aneuploidy syndromes": [
      {
        q: "What does 47,XX,+21 indicate?",
        options: ["Female with trisomy 21", "Male with Turner syndrome", "Female with monosomy X", "Male with trisomy 18"],
        answer: 0,
        explain: "47,XX,+21 means a female with an extra chromosome 21, which is Down syndrome."
      },
      {
        q: "Which karyotype is associated with Turner syndrome?",
        options: ["45,X", "47,XXY", "47,XYY", "47,XY,+13"],
        answer: 0,
        explain: "Turner syndrome is commonly written as 45,X."
      },
      {
        q: "Klinefelter syndrome is most commonly written as:",
        options: ["47,XXY", "45,X", "47,XYY", "69,XXX"],
        answer: 0,
        explain: "Klinefelter syndrome classically has an XXY sex chromosome complement."
      }
    ],
    "Structural abnormalities": [
      {
        q: "Which abnormality means loss of a chromosome segment?",
        options: ["Deletion", "Duplication", "Inversion", "Triploidy"],
        answer: 0,
        explain: "Deletion is the loss of a chromosomal segment."
      },
      {
        q: "Philadelphia chromosome t(9;22) is strongly associated with:",
        options: ["Chronic myeloid leukemia", "Turner syndrome", "Cri-du-chat syndrome", "Patau syndrome"],
        answer: 0,
        explain: "The t(9;22) translocation creates BCR-ABL and is linked to CML."
      },
      {
        q: "Robertsonian translocation commonly involves which chromosome type?",
        options: ["Acrocentric chromosomes", "Only metacentric chromosomes", "Only mitochondrial chromosomes", "Only chromatids without centromeres"],
        answer: 0,
        explain: "Robertsonian translocations involve fusion of long arms of acrocentric chromosomes."
      }
    ],
    "Telomeres and prenatal": [
      {
        q: "What is the main protective role of telomeres?",
        options: ["Protect chromosome ends", "Make spindle fibres", "Digest histones", "Create ribosomes"],
        answer: 0,
        explain: "Telomeres protect chromosome ends from degradation and fusion."
      },
      {
        q: "Cancer cells often reactivate telomerase because it helps them:",
        options: ["Maintain telomeres and divide repeatedly", "Remove all chromosomes", "Stop DNA replication", "Block every mutation"],
        answer: 0,
        explain: "Telomerase helps maintain telomere length, supporting continued cell division."
      },
      {
        q: "Which prenatal method uses cell-free fetal DNA in maternal blood?",
        options: ["NIPT", "C-banding", "Karyogram photography only", "Histone acetylation"],
        answer: 0,
        explain: "NIPT analyses cell-free fetal DNA found in maternal blood."
      }
    ]
  },
  examBank: [
    {
      topic: "Chromosome basics",
      q: "Which unit is described as about 147 bp of DNA wrapped around a histone octamer?",
      options: ["Nucleosome", "Kinetochore", "Telomere", "Barr body"],
      answer: 0,
      explain: "A nucleosome is the basic chromatin unit, made of DNA wrapped around histone proteins."
    },
    {
      topic: "Chromosome basics",
      q: "Which part of a chromosome protects the ends from degradation and end-to-end fusion?",
      options: ["Telomere", "Centromere", "p arm", "Kinetochore"],
      answer: 0,
      explain: "Telomeres are repetitive DNA sequences at chromosome ends with a protective role."
    },
    {
      topic: "Chromosome basics",
      q: "Which statement correctly compares euchromatin and heterochromatin?",
      options: ["Euchromatin is loosely packed; heterochromatin is densely packed", "Euchromatin is always inactive; heterochromatin is always active", "Both are mitochondrial structures", "Both lack histones"],
      answer: 0,
      explain: "Euchromatin is usually open and transcriptionally active, while heterochromatin is condensed and mostly inactive."
    },
    {
      topic: "Chromosome basics",
      q: "The kinetochore is important because it:",
      options: ["Anchors chromosomes to spindle fibres", "Produces histone proteins", "Shortens telomeres", "Converts RNA to DNA"],
      answer: 0,
      explain: "The kinetochore forms at the centromere and attaches chromosomes to spindle microtubules."
    },
    {
      topic: "Chromosome nomenclature",
      q: "In the notation 15q13, what does q mean?",
      options: ["Long arm", "Short arm", "Centromere only", "Mitochondrial chromosome"],
      answer: 0,
      explain: "q is the long arm of a chromosome; p is the short arm."
    },
    {
      topic: "Chromosome nomenclature",
      q: "Numbers in chromosome band notation increase as you move:",
      options: ["Away from the centromere", "Toward the centromere only", "Only around the telomere", "From chromosome 22 to 1"],
      answer: 0,
      explain: "Regions and bands are numbered outward from the centromere on each arm."
    },
    {
      topic: "Chromosome nomenclature",
      q: "What does 4q26-q27 mean?",
      options: ["A location spanning bands 26 to 27 on the long arm of chromosome 4", "A whole extra chromosome 4", "A missing Y chromosome", "A centromere on chromosome 26"],
      answer: 0,
      explain: "4q26-q27 refers to the long arm of chromosome 4, bands 26 through 27."
    },
    {
      topic: "Karyotyping and techniques",
      q: "Which chemical is used to arrest cells in metaphase during karyotyping?",
      options: ["Colchicine or colcemid", "Telomerase", "Reverse transcriptase", "DNA ligase only"],
      answer: 0,
      explain: "Colchicine or colcemid disrupts spindle formation and arrests cells in metaphase."
    },
    {
      topic: "Karyotyping and techniques",
      q: "In G-banding, dark bands are generally:",
      options: ["AT-rich and heterochromatic", "GC-rich and always actively transcribed", "Only mitochondrial DNA", "Made of RNA only"],
      answer: 0,
      explain: "G-positive dark bands are usually AT-rich and relatively heterochromatic."
    },
    {
      topic: "Karyotyping and techniques",
      q: "R-banding produces a pattern that is:",
      options: ["Reverse of G-banding", "Identical to C-banding", "Only visible on mitochondrial DNA", "Unrelated to staining"],
      answer: 0,
      explain: "R-banding is reverse banding and gives the opposite pattern of G-banding."
    },
    {
      topic: "Karyotyping and techniques",
      q: "Which technique is best described as DNA probe hybridization for a suspected region?",
      options: ["FISH", "SNP array only", "Amniocentesis", "C-banding only"],
      answer: 0,
      explain: "FISH uses fluorescent DNA probes to target specific regions."
    },
    {
      topic: "Karyotyping and techniques",
      q: "Which method can detect copy-number changes genome-wide but is not mainly used to target one suspected small region like FISH?",
      options: ["Array CGH", "Q-banding only", "Barr body staining", "Phytohemagglutinin stimulation"],
      answer: 0,
      explain: "Array CGH compares patient and control DNA across the genome to detect gains and losses."
    },
    {
      topic: "Karyotyping and techniques",
      q: "What additional findings can SNP arrays detect beyond array CGH?",
      options: ["Uniparental disomy and loss of heterozygosity", "Only G-bands", "Only centromere shape", "Only telomerase activity"],
      answer: 0,
      explain: "SNP arrays detect copy number plus genotype patterns such as UPD, LOH and homozygosity."
    },
    {
      topic: "Aneuploidy syndromes",
      q: "Which event most directly causes many aneuploidies?",
      options: ["Nondisjunction", "Histone acetylation", "DNA methylation only", "Telomerase reactivation"],
      answer: 0,
      explain: "Nondisjunction is failure of chromosomes or chromatids to separate correctly."
    },
    {
      topic: "Aneuploidy syndromes",
      q: "Which notation describes Down syndrome in a male?",
      options: ["47,XY,+21", "45,X", "47,XXY", "46,XX"],
      answer: 0,
      explain: "Down syndrome is trisomy 21; a male with trisomy 21 is 47,XY,+21."
    },
    {
      topic: "Aneuploidy syndromes",
      q: "Patau syndrome is associated with:",
      options: ["Trisomy 13", "Trisomy 18", "Monosomy X", "47,XYY"],
      answer: 0,
      explain: "Patau syndrome is trisomy 13."
    },
    {
      topic: "Aneuploidy syndromes",
      q: "Edwards syndrome is associated with:",
      options: ["Trisomy 18", "Trisomy 21", "47,XXY", "Deletion 5p"],
      answer: 0,
      explain: "Edwards syndrome is trisomy 18."
    },
    {
      topic: "Aneuploidy syndromes",
      q: "Which syndrome is described by 47,XYY?",
      options: ["Jacobs syndrome", "Turner syndrome", "Klinefelter syndrome", "Angelman syndrome"],
      answer: 0,
      explain: "Jacobs syndrome is associated with an extra Y chromosome: 47,XYY."
    },
    {
      topic: "Aneuploidy syndromes",
      q: "Which statement about Barr bodies is correct?",
      options: ["A normal 46,XX female has one Barr body", "A 45,X individual has two Barr bodies", "A 47,XXY male has zero Barr bodies", "Barr bodies are mitochondrial chromosomes"],
      answer: 0,
      explain: "Barr body number is generally the number of X chromosomes minus one."
    },
    {
      topic: "Structural abnormalities",
      q: "Cri-du-chat syndrome classically results from a deletion involving:",
      options: ["5p", "7q11.23", "15q11-q13", "17p12 duplication"],
      answer: 0,
      explain: "Cri-du-chat syndrome results from deletion of part of chromosome 5p."
    },
    {
      topic: "Structural abnormalities",
      q: "Williams syndrome is commonly linked to deletion at:",
      options: ["7q11.23", "5p", "Xq27.3", "17p12"],
      answer: 0,
      explain: "Williams syndrome is caused by a deletion at 7q11.23."
    },
    {
      topic: "Structural abnormalities",
      q: "Charcot-Marie-Tooth disease in the lecture is linked to:",
      options: ["Duplication of 17p12", "Deletion of 5p", "Trisomy 13", "Robertsonian translocation 14;21 only"],
      answer: 0,
      explain: "The lecture links CMT to duplication of the 17p12 region."
    },
    {
      topic: "Structural abnormalities",
      q: "An inversion that includes the centromere is called:",
      options: ["Pericentric", "Paracentric", "Robertsonian", "Triploid"],
      answer: 0,
      explain: "Pericentric inversions include the centromere; paracentric inversions do not."
    },
    {
      topic: "Structural abnormalities",
      q: "The Philadelphia chromosome is written as:",
      options: ["t(9;22)", "t(8;14)", "del(5p)", "47,XXY"],
      answer: 0,
      explain: "The Philadelphia chromosome is t(9;22), producing the BCR-ABL fusion associated with CML."
    },
    {
      topic: "Structural abnormalities",
      q: "Burkitt lymphoma is associated with:",
      options: ["t(8;14) and MYC overexpression", "45,X", "Trisomy 18", "Deletion of 5p only"],
      answer: 0,
      explain: "The lecture links Burkitt lymphoma to t(8;14), leading to MYC overexpression."
    },
    {
      topic: "Structural abnormalities",
      q: "Robertsonian translocations usually involve fusion of long arms of:",
      options: ["Acrocentric chromosomes", "Only metacentric chromosomes", "Only chromosome X", "Mitochondrial chromosomes"],
      answer: 0,
      explain: "Robertsonian translocations involve acrocentric chromosomes such as 13, 14, 15, 21 and 22."
    },
    {
      topic: "Mosaicism and epigenetics",
      q: "Mosaicism means:",
      options: ["Two or more different chromosome complements exist in one individual", "Every cell has the exact same mutation", "Only mitochondrial DNA is inherited", "All chromosomes are lost"],
      answer: 0,
      explain: "Mosaicism is the presence of two or more cell lines with different chromosome complements."
    },
    {
      topic: "Mosaicism and epigenetics",
      q: "Why may mosaic Down syndrome be less severe than non-mosaic Down syndrome?",
      options: ["Not all cells carry the trisomy", "All cells lose chromosome 21", "It always deletes chromosome 5p", "It prevents cell division completely"],
      answer: 0,
      explain: "Clinical severity can be reduced when only some cells carry the abnormal chromosome complement."
    },
    {
      topic: "Mosaicism and epigenetics",
      q: "DNA methylation usually affects gene expression by:",
      options: ["Recruiting proteins that silence transcription", "Adding an extra chromosome", "Creating spindle fibres", "Opening every gene permanently"],
      answer: 0,
      explain: "CpG methylation can recruit methyl-CpG binding proteins and chromatin modifiers that silence transcription."
    },
    {
      topic: "Mosaicism and epigenetics",
      q: "Histone acetylation generally:",
      options: ["Opens chromatin and supports transcription", "Always deletes genes", "Blocks all transcription permanently", "Creates a Barr body in males only"],
      answer: 0,
      explain: "Acetylation neutralizes lysine charge, loosening chromatin and often activating transcription."
    },
    {
      topic: "Telomeres and prenatal",
      q: "Critically short telomeres can lead to:",
      options: ["Senescence or apoptosis", "Immediate chromosome doubling", "Only stronger immunity", "Loss of all histones"],
      answer: 0,
      explain: "Cells with critically short telomeres may enter replicative senescence or apoptosis."
    },
    {
      topic: "Telomeres and prenatal",
      q: "Why can telomerase reactivation support cancer cell immortality?",
      options: ["It maintains telomere length during repeated divisions", "It destroys all telomeres", "It removes chromosomes 13 and 18", "It stops DNA replication"],
      answer: 0,
      explain: "Telomerase maintains telomeres, allowing cancer cells to keep dividing."
    },
    {
      topic: "Telomeres and prenatal",
      q: "Which prenatal test samples placental tissue?",
      options: ["Chorionic villus sampling", "Amniocentesis", "Q-banding", "C-banding"],
      answer: 0,
      explain: "Chorionic villus sampling analyses placental chorionic villi."
    },
    {
      topic: "Telomeres and prenatal",
      q: "Which prenatal test samples amniotic fluid?",
      options: ["Amniocentesis", "CVS", "FISH only", "G-banding only"],
      answer: 0,
      explain: "Amniocentesis obtains amniotic fluid containing fetal cells for testing."
    },
    {
      topic: "Telomeres and prenatal",
      q: "Why is genetic counselling important in chromosomal disorders?",
      options: ["It supports informed consent, confidentiality and reproductive decision-making", "It replaces all laboratory testing", "It makes karyotyping unnecessary", "It prevents every chromosomal mutation"],
      answer: 0,
      explain: "Counselling helps patients understand results, options, confidentiality and informed consent."
    },
    {"topic": "History and cell cycle", "q": "Who correctly established that humans have 46 chromosomes?", "options": ["Joe Hin Tjio and Albert Levan", "Theophilus Painter", "Karl von Nägeli", "Heinrich Waldeyer"], "answer": 0, "explain": "Tjio and Levan corrected the human chromosome number to 46 in 1956."},
    {"topic": "History and cell cycle", "q": "Which phase of interphase is responsible for programmed DNA synthesis?", "options": ["S phase", "G1 only", "G2 only", "Telophase"], "answer": 0, "explain": "S phase is the DNA synthesis phase."},
    {"topic": "History and cell cycle", "q": "Why is metaphase used for karyotyping?", "options": ["Chromosomes are maximally condensed and visible", "Chromosomes are absent", "DNA is not replicated", "Cells contain no cytoplasm"], "answer": 0, "explain": "Metaphase chromosomes are condensed and easy to visualise."},
    {"topic": "Karyotyping procedure", "q": "Which chemical is used to swell cells during chromosome preparation?", "options": ["0.075 M KCl", "Quinacrine only", "Methanol alone", "β-hCG"], "answer": 0, "explain": "Hypotonic KCl swells cells and helps chromosomes spread."},
    {"topic": "Karyotyping procedure", "q": "What is the usual fixative mixture in the lecture procedure?", "options": ["Methanol:acetic acid 3:1", "Water:ethanol 1:1", "Giemsa:saline 2:1", "KCl:trypsin 4:1"], "answer": 0, "explain": "Cold methanol:acetic acid 3:1 preserves chromosome structure."},
    {"topic": "Techniques", "q": "Which technique is multiplex PCR-based and detects small exon-level deletions and duplications?", "options": ["MLPA", "Q-banding", "Karyogram photography", "C-banding"], "answer": 0, "explain": "MLPA is used for targeted small copy number changes."},
    {"topic": "Techniques", "q": "Which array method can detect uniparental disomy and loss of heterozygosity?", "options": ["SNP array", "G-banding only", "Amniocentesis only", "Q-banding only"], "answer": 0, "explain": "SNP arrays provide SNP genotype patterns in addition to copy number data."},
    {"topic": "Banding", "q": "Which banding technique highlights centromeric heterochromatin?", "options": ["C-banding", "R-banding", "NIPT", "MLPA"], "answer": 0, "explain": "C-banding highlights constitutive heterochromatin, especially at centromeres."},
    {"topic": "Banding", "q": "What does Q-banding use?", "options": ["Quinacrine fluorescence", "Cell-free fetal DNA", "Hot alkaline solution only", "Methanol:acetic acid only"], "answer": 0, "explain": "Q-banding uses quinacrine or quinacrine mustard fluorescence."},
    {"topic": "Fragile sites", "q": "Fragile X syndrome is associated with which gene and region?", "options": ["FMR1 at Xq27.3", "MECP2 at Xq28 only", "BCR-ABL at 9;22", "MYC at 8;14"], "answer": 0, "explain": "The lecture identifies FMR1 on Xq27.3."},
    {"topic": "Fragile sites", "q": "A CGG repeat expansion greater than 200 in FMR1 usually causes:", "options": ["Gene silencing", "Extra chromosome 21", "Robertsonian fusion", "Mitochondrial inheritance"], "answer": 0, "explain": "Large CGG expansions can silence FMR1."},
    {"topic": "Mitochondrial chromosome", "q": "Mitochondrial genes are inherited mainly from:", "options": ["The mother", "The father only", "Both parents equally like autosomes", "Only the Y chromosome"], "answer": 0, "explain": "Mitochondrial genes show maternal inheritance."},
    {"topic": "Mitochondrial chromosome", "q": "How many genes does human mitochondrial DNA encode according to the lecture?", "options": ["37", "46", "23", "300"], "answer": 0, "explain": "The lecture states mtDNA is about 16 kb and encodes 37 genes."},
    {"topic": "Epigenetics", "q": "Which histone modification usually opens chromatin by neutralising lysine positive charge?", "options": ["Acetylation", "Deletion", "Nondisjunction", "Robertsonian translocation"], "answer": 0, "explain": "Histone acetylation neutralises lysine charge and usually activates transcription."},
    {"topic": "Epigenetics", "q": "DNA methylation usually occurs on cytosines in which dinucleotide context?", "options": ["CpG", "AT", "TTAGGG", "CGG only"], "answer": 0, "explain": "DNA methylation commonly occurs at CpG dinucleotides."},
    {"topic": "Clinical indications", "q": "Which of the following is a clinical indication for chromosome analysis?", "options": ["Developmental delay with dysmorphic features", "Normal adult height alone", "Preference for eye colour only", "Routine blood sugar check only"], "answer": 0, "explain": "Developmental delay, dysmorphic features and malformations are classic indications."},
    {"topic": "Clinical indications", "q": "Chromosome analysis in stillbirth may be useful mainly for:", "options": ["Accurate genetic counselling and future pregnancy planning", "Replacing antenatal care", "Preventing all miscarriages", "Changing blood type"], "answer": 0, "explain": "The lecture emphasises counselling and future prenatal diagnosis."},
    {"topic": "Numerical abnormalities", "q": "Triploidy has how many chromosomes?", "options": ["69", "45", "46", "47"], "answer": 0, "explain": "Triploidy means three full haploid sets, or 69 chromosomes."},
    {"topic": "Numerical abnormalities", "q": "Trisomy 16 most commonly results in:", "options": ["First-trimester pregnancy loss", "Normal adult phenotype", "Klinefelter syndrome", "Burkitt lymphoma"], "answer": 0, "explain": "Affected embryos usually do not survive past the first trimester."},
    {"topic": "Syndromes", "q": "Which syndrome is associated with 47,XYY?", "options": ["Jacobs syndrome", "Turner syndrome", "Patau syndrome", "Cri-du-chat syndrome"], "answer": 0, "explain": "Jacobs syndrome involves an extra Y chromosome."},
    {"topic": "Syndromes", "q": "Complete androgen insensitivity syndrome may have which karyotype?", "options": ["46,XY", "45,X", "47,XXY", "47,XYY"], "answer": 0, "explain": "The lecture includes a 46,XY individual with androgen insensitivity features."},
    {"topic": "Structural abnormalities", "q": "Which abnormality is described as fusion of long arms of acrocentric chromosomes?", "options": ["Robertsonian translocation", "Triploidy", "Q-banding", "DNA methylation"], "answer": 0, "explain": "Robertsonian translocations fuse long arms of acrocentric chromosomes."},
    {"topic": "Structural abnormalities", "q": "Philadelphia chromosome t(9;22) forms which fusion?", "options": ["BCR-ABL", "MYC-FMR1", "MECP2-IL21", "H2A-H2B"], "answer": 0, "explain": "The t(9;22) translocation creates BCR-ABL in CML."},
    {"topic": "Transposable elements", "q": "Which mobile element class moves through an RNA intermediate?", "options": ["Retrotransposons", "DNA transposons only", "Centromeres", "Telomeres"], "answer": 0, "explain": "Retrotransposons copy through RNA and reverse transcription."},
    {"topic": "Transposable elements", "q": "Alu elements are approximately how long?", "options": ["300 bp", "6 kb", "16 kb", "147 Mb"], "answer": 0, "explain": "Alu family members are about 300 bp long."},
    {"topic": "Transposable elements", "q": "LINE-1 elements account for approximately what proportion of the human genome in the lecture?", "options": ["Nearly 20%", "0.7%", "100%", "One gene only"], "answer": 0, "explain": "The lecture notes state LINE/L1 elements account for nearly 20% of the genome."},
    {"topic": "Deletions and duplications", "q": "Williams syndrome is associated with deletion at:", "options": ["7q11.23", "5p only", "17p12 duplication", "Xq27.3"], "answer": 0, "explain": "The lecture lists Williams syndrome as a 7q11.23 deletion disorder."},
    {"topic": "Deletions and duplications", "q": "Charcot-Marie-Tooth disease in the lecture is associated with duplication of:", "options": ["17p12", "15q11-q13", "5p", "14q21q"], "answer": 0, "explain": "CMT is described as duplication of 17p12."},
    {"topic": "Inversions", "q": "Which inversion type includes the centromere?", "options": ["Pericentric", "Paracentric", "Robertsonian", "Terminal deletion"], "answer": 0, "explain": "Pericentric inversions include the centromere."},
    {"topic": "Inversions", "q": "Which inversion type excludes the centromere?", "options": ["Paracentric", "Pericentric", "Isochromosome", "Triploidy"], "answer": 0, "explain": "Paracentric inversions do not include the centromere."},
    {"topic": "Prenatal diagnostics", "q": "Maternal serum AFP is increased in:", "options": ["Neural tube defects", "Down syndrome only", "Edwards syndrome only", "Klinefelter syndrome"], "answer": 0, "explain": "The lecture table states AFP is increased in neural tube defects."},
    {"topic": "Prenatal diagnostics", "q": "Maternal serum β-hCG is commonly increased in:", "options": ["Down syndrome", "Edwards syndrome", "Turner syndrome only", "Fragile X syndrome"], "answer": 0, "explain": "The lecture notes identify increased β-hCG in Down syndrome."},
    {"topic": "Prenatal diagnostics", "q": "Which test samples placental tissue?", "options": ["Chorionic villus sampling", "Amniocentesis", "C-banding", "Q-banding"], "answer": 0, "explain": "CVS samples chorionic villi from the placenta."},
    {"topic": "Prenatal diagnostics", "q": "Which test samples amniotic fluid?", "options": ["Amniocentesis", "CVS", "NIPT", "FISH alone"], "answer": 0, "explain": "Amniocentesis samples amniotic fluid containing fetal cells."},
    {"topic": "Ethics", "q": "Why is informed consent essential before prenatal diagnosis?", "options": ["Results affect reproductive decisions and personal privacy", "It guarantees a normal fetus", "It removes the need for counselling", "It prevents all chromosomal abnormalities"], "answer": 0, "explain": "Ethical testing requires consent, confidentiality and counselling."}
  ],
  checklist: [
    "Define cytogenetics, chromosome, chromatin, chromatid and nucleosome.",
    "Explain euchromatin and heterochromatin with one difference each.",
    "Describe telomere, centromere, kinetochore, p arm and q arm.",
    "Interpret chromosome notation such as 15q13, 4q26-q27, 47,XX,+21 and 45,X.",
    "Explain how DNA is packed into nucleosomes and higher-order chromatin.",
    "State the difference between autosomes and sex chromosomes.",
    "Compare metacentric, submetacentric and acrocentric chromosomes.",
    "Describe the steps of karyotyping from blood sample to chromosome arrangement.",
    "Compare G-banding, R-banding, Q-banding and C-banding.",
    "Explain when FISH, array CGH, SNP array and WGS are useful.",
    "Differentiate aneuploidy, polyploidy, trisomy and monosomy.",
    "Match Down, Patau, Edwards, Turner, Klinefelter and Jacobs syndromes to karyotypes.",
    "Explain deletion, duplication, inversion, insertion and translocation.",
    "Describe Robertsonian translocation and its relationship with familial Down syndrome.",
    "Explain mosaicism and why it can reduce or vary clinical severity.",
    "Link telomere shortening with aging and telomerase reactivation with cancer.",
    "Explain DNA methylation and histone modification as epigenetic mechanisms.",
    "Compare ultrasound, NIPT, amniocentesis and chorionic villus sampling.",
    "Explain why genetic counselling, informed consent and confidentiality matter.",
    "Teach one topic aloud without checking your notes.",
    "Recall the historical milestones from early chromosome observation to Philadelphia chromosome discovery.",
    "Explain mitochondrial chromosome size, gene count and maternal inheritance.",
    "Describe histone methylation, acetylation, ubiquitination and phosphorylation effects.",
    "Explain Barr body number using the rule: X chromosomes minus one.",
    "List the full karyotyping procedure from blood collection to microscopic analysis.",
    "Compare G-banding, R-banding, Q-banding and C-banding with examples of what each highlights.",
    "Explain fragile X syndrome using FMR1, Xq27.3 and CGG repeat expansion.",
    "State what MLPA detects and why it can be useful beyond basic karyotyping.",
    "List major clinical indications for chromosome analysis.",
    "Compare retrotransposons, DNA transposons, Alu and LINE elements.",
    "Explain trisomy 16 as a common first-trimester loss finding.",
    "Differentiate complete androgen insensitivity syndrome from Klinefelter syndrome.",
    "Explain Charcot-Marie-Tooth disease as a 17p12 duplication example.",
    "Compare pericentric and paracentric inversions.",
    "Interpret maternal serum AFP, β-hCG and estriol screening patterns.",
    "Explain the ethical role of consent, confidentiality and genetic counselling."
  ]
};
