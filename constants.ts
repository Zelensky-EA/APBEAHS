
import { CourseData, Unit } from './types';

export const vocabularyDefs: Record<string, string> = {
    "polarity": "A molecule's uneven distribution of electrical charge, leading to a positive and a negative end. Water's polarity is crucial for life.",
    "hydrogen bonding": "A weak attraction between a slightly positive hydrogen atom on one molecule and a slightly negative atom (like oxygen or nitrogen) on another.",
    "cohesion": "The attraction between molecules of the same substance. In water, it creates surface tension.",
    "adhesion": "The attraction between different kinds of molecules. It's why water sticks to glass.",
    "surface tension": "A measure of how difficult it is to stretch or break the surface of a liquid, caused by cohesion.",
    "carbon": "The fundamental element of life, able to form four stable covalent bonds, creating complex organic molecules.",
    "carbohydrates": "Macromolecules including sugars and starches, used for energy and structural support. Monomer: monosaccharide.",
    "proteins": "Complex macromolecules made of amino acids, performing a vast array of functions like catalyzing reactions (enzymes) and providing structure.",
    "lipids": "A diverse group of hydrophobic molecules including fats, oils, and steroids, used for energy storage and membrane structure.",
    "nucleic acids": "Macromolecules like DNA and RNA that store and transmit genetic information. Monomer: nucleotide.",
    "sulfur": "An element found in some amino acids (like cysteine and methionine), crucial for the structure of many proteins.",
    "phosphorus": "A key component of nucleic acids (in the phosphate group) and phospholipids (in cell membranes).",
    "nitrogen": "An essential element in proteins (in the amino group of amino acids) and nucleic acids (in the nitrogenous bases).",
    "hydrolysis": "A chemical reaction that breaks down polymers into monomers by adding a water molecule.",
    "dehydration synthesis": "A chemical reaction that links monomers together to form polymers by removing a water molecule.",
    "polymerization": "The process of joining monomers to form a polymer.",
    "monosaccharides": "Simple sugars (like glucose) that are the monomers of carbohydrates.",
    "polysaccharides": "Complex carbohydrates (polymers) made of many monosaccharides linked together, such as starch, glycogen, and cellulose.",
    "amino acids": "The monomers of proteins, each with a central carbon, an amino group, a carboxyl group, and a variable R group.",
    "R group": "The variable side chain of an amino acid that determines its unique chemical properties (hydrophobic, hydrophilic, ionic).",
    "hydrophobic": "'Water-fearing'; describes nonpolar molecules that do not dissolve in water.",
    "hydrophilic": "'Water-loving'; describes polar or charged molecules that dissolve in water.",
    "ionic": "Relating to ions; describes molecules or parts of molecules that carry a full positive or negative charge.",
    "primary structure": "The unique sequence of amino acids in a polypeptide chain.",
    "secondary structure": "Localized folding of a polypeptide chain into structures like alpha-helices and beta-pleated sheets, stabilized by hydrogen bonds.",
    "alpha-helices": "A common secondary structure of proteins, where the polypeptide chain is coiled into a spiral.",
    "beta-pleated sheets": "A common secondary structure where the polypeptide chain folds back and forth on itself.",
    "tertiary structure": "The overall three-dimensional shape of a single polypeptide, resulting from interactions between R groups.",
    "quaternary structure": "The overall protein structure that results from the aggregation of two or more polypeptide subunits.",
    "peptide bonds": "The covalent bond formed between the carboxyl group of one amino acid and the amino group of another.",
    "nucleotides": "The monomers of nucleic acids, composed of a five-carbon sugar, a phosphate group, and a nitrogenous base.",
    "five-carbon sugar": "The sugar component of a nucleotide, either deoxyribose (in DNA) or ribose (in RNA).",
    "phosphate": "A functional group that is a key component of nucleotides and phospholipids.",
    "nitrogenous base": "A nitrogen-containing molecule that is part of a nucleotide. In DNA: adenine, guanine, cytosine, thymine. In RNA: uracil replaces thymine.",
    "adenine": "A purine (double-ring) nitrogenous base found in DNA and RNA; pairs with thymine (or uracil).",
    "thymine": "A pyrimidine (single-ring) nitrogenous base found only in DNA; pairs with adenine.",
    "guanine": "A purine (double-ring) nitrogenous base found in DNA and RNA; pairs with cytosine.",
    "cytosine": "A pyrimidine (single-ring) nitrogenous base found in DNA and RNA; pairs with guanine.",
    "uracil": "A pyrimidine (single-ring) nitrogenous base found only in RNA; pairs with adenine.",
    "deoxyribose": "The five-carbon sugar found in DNA nucleotides.",
    "ribose": "The five-carbon sugar found in RNA nucleotides.",
    "antiparallel double helix": "The structure of DNA, where two strands run in opposite 5' to 3' directions and twist around each other.",
    "3' end": "The end of a DNA or RNA strand that has a hydroxyl group attached to the 3rd carbon of the sugar.",
    "5' end": "The end of a DNA or RNA strand that has a phosphate group attached to the 5th carbon of the sugar.",
    "saturated fatty acids": "A fatty acid in which all carbons in the hydrocarbon tail are connected by single bonds.",
    "unsaturated fatty acids": "A fatty acid that has one or more double bonds between carbons in the hydrocarbon tail, causing kinks.",
    "phospholipids": "A lipid made up of a glycerol joined to two fatty acids and a phosphate group. Forms the bilayer of cell membranes.",
    "fats": "Lipids used for long-term energy storage.",
    "steroids": "Lipids characterized by a carbon skeleton consisting of four fused rings, such as cholesterol and certain hormones.",
    "cholesterol": "A steroid that is an essential component of animal cell membranes and acts as a precursor molecule for other steroids.",
    "ribosomes": "Cellular structures responsible for protein synthesis. Composed of rRNA and protein.",
    "rRNA": "Ribosomal RNA; the type of RNA that makes up the major part of ribosomes.",
    "mRNA": "Messenger RNA; type of RNA that carries instructions from DNA in the nucleus to the ribosome.",
    "common ancestry": "The concept that a group of organisms share a most recent common ancestor.",
    "endoplasmic reticulum (ER)": "A network of membranes inside a eukaryotic cell, involved in protein and lipid synthesis.",
    "smooth ER": "The portion of the endoplasmic reticulum that is free of ribosomes; involved in lipid synthesis and detoxification.",
    "rough ER": "The portion of the endoplasmic reticulum studded with ribosomes; involved in protein synthesis and modification.",
    "Golgi complex": "An organelle in eukaryotic cells that modifies, sorts, and packages proteins and lipids for storage or transport out of the cell.",
    "mitochondria": "Organelle that is the site of ATP (energy) production through cellular respiration.",
    "lysosomes": "An organelle containing digestive enzymes to break down waste and cellular debris.",
    "vacuole": "A cell organelle that stores materials such as water, salts, proteins, and carbohydrates.",
    "chloroplasts": "Organelles found in plant and algae cells where photosynthesis occurs.",
    "glycosylation": "The process of adding carbohydrate chains to proteins or lipids.",
    "surface area-to-volume ratio": "A variable that decreases as cells grow, so that it sets a limit to the size of cells.",
    "plasma membrane": "The selectively permeable membrane forming the boundary of the cells.",
    "cell size": "The physical dimensions of a cell, which is limited by the surface area-to-volume ratio.",
    "cell shape": "The form of a cell, which is often related to its function.",
    "membrane folds": "Infoldings of a membrane that increase its surface area, such as cristae in mitochondria.",
    "root hair cells": "Specialized cells in the epidermis of plant roots that increase surface area for water and mineral absorption.",
    "guard cells": "The two cells that flank the stomatal pore and regulate the opening and closing of the pore.",
    "gut epithelial cells": "Cells lining the intestine that have microvilli to increase surface area for nutrient absorption.",
    "cilia": "Hairlike projections that extend from the plasma membrane and are used for locomotion.",
    "stomata": "Small openings on the underside of a leaf through which oxygen and carbon dioxide can move.",
    "phospholipid": "A lipid that is a structural component in cell membranes.",
    "hydrophobic fatty acids": "The nonpolar tails of a phospholipid that are repelled by water.",
    "hydrophilic phosphate": "The polar head of a phospholipid that is attracted to water.",
    "embedded proteins": "Proteins that are embedded within the lipid bilayer of a cell membrane.",
    "fluid mosaic model": "The model that describes the arrangement and movement of the molecules that make up a cell membrane.",
    "glycoproteins": "Membrane carbohydrates that are covalently bonded to proteins.",
    "glycolipids": "Membrane carbohydrates that are covalently bonded to lipids.",
    "selective permeability": "A property of a plasma membrane that allows some substances to cross more easily than others.",
    "nonpolar molecules": "Molecules that have an equal sharing of electrons and do not have positive or negative poles.",
    "polar molecules": "Molecules that have an unequal sharing of electrons, resulting in a molecule with a positive and a negative pole.",
    "ions": "Positively and negatively charged atoms.",
    "channel proteins": "Proteins that provide passageways through the membrane for certain hydrophilic substances such as polar and charged molecules.",
    "transport proteins": "Membrane proteins that help move substances across a cell membrane.",
    "cell walls": "A rigid layer of polysaccharides lying outside the plasma membrane of the cells of plants, fungi, and bacteria.",
    "passive transport": "The movement of substances across a cell membrane without the use of energy by the cell.",
    "active transport": "Energy-requiring process that moves material across a cell membrane against a concentration difference.",
    "endocytosis": "Process by which a cell takes material into the cell by infolding of the cell membrane.",
    "exocytosis": "Process by which a cell releases large amounts of material.",
    "concentration gradient": "A difference in the concentration of a substance across a distance.",
    "facilitated diffusion": "Movement of specific molecules across cell membranes through protein channels.",
    "aquaporins": "Channel proteins that facilitate the passage of water.",
    "Na+/K+ pump": "A protein pump that actively transports sodium out of the cell and potassium into the cell.",
    "ATPase": "An enzyme that catalyzes the hydrolysis of ATP.",
    "membrane potential": "The voltage difference across a membrane.",
    "hypotonic": "Having a lower concentration of solute than another solution.",
    "hypertonic": "Having a higher concentration of solute than another solution.",
    "isotonic": "Having the same solute concentration as another solution.",
    "osmosis": "Diffusion of water through a selectively permeable membrane.",
    "water potential": "The physical property predicting the direction in which water will flow, governed by solute concentration and applied pressure.",
    "osmolarity": "The total solute concentration of a solution.",
    "solute concentration": "The amount of solutes or dissolved substances in a solution.",
    "osmoregulation": "The control of water balance.",
    "contractile vacuole": "The cell structure that collects extra water from the cytoplasm and then expels it from the cell.",
    "central vacuole": "A large vacuole that rests at the center of most plant cells and is filled with a solution that contains a high concentration of solutes.",
    "compartmentalization": "The formation of compartments within the cell by membrane-bound organelles.",
    "intracellular metabolic processes": "All the chemical reactions that occur inside a living cell.",
    "enzymatic reactions": "Chemical reactions controlled by enzymes.",
    "endosymbiosis": "A theory that states that certain kinds of prokaryotes began living inside of larger cells and evolved into the organelles of modern-day eukaryotes.",
    "prokaryotic cells": "Cells that do not have a nucleus or other membrane-bound organelles.",
    "eukaryotic cells": "Cells that contain a nucleus and other organelles that are bound by membranes.",
    "enzyme structure": "The three-dimensional arrangement of atoms in an enzyme molecule.",
    "active site": "The specific region of an enzyme where a substrate binds and catalysis takes place.",
    "substrate": "The reactant on which an enzyme works.",
    "enzyme-mediated chemical reaction": "A chemical reaction catalyzed by an enzyme.",
    "catalyst": "A substance that increases the rate of a chemical reaction without itself undergoing any permanent chemical change.",
    "activation energy": "The minimum amount of energy required to start a chemical reaction.",
    "denaturation": "A process in which a protein unravels and loses its native shape, thereby becoming biologically inactive.",
    "environmental temperature": "The temperature of the surroundings.",
    "pH": "A measure of acidity or alkalinity of a solution.",
    "inhibitors": "Substances that slow down or prevent a particular chemical reaction or other process.",
    "competitive inhibitors": "Inhibitors that reduce the productivity of enzymes by blocking substrates from entering active sites.",
    "noncompetitive inhibitors": "Inhibitors that reduce the activity of an enzyme by binding to a location remote from the active site, changing its conformation so that it no longer binds to the substrate.",
    "allosteric site": "A specific receptor site on some part of an enzyme molecule remote from the active site.",
    "energy input": "The energy that is put into a system or process.",
    "energy loss": "Energy that is not converted into a useful form and is lost from a system, often as heat.",
    "cellular processes": "The activities that occur inside a cell to keep it alive.",
    "metabolic pathways": "A series of chemical reactions that either builds a complex molecule or breaks down a complex molecule into simpler compounds.",
    "glycolysis": "The breakdown of glucose by enzymes, releasing energy and pyruvic acid.",
    "oxidative phosphorylation": "The production of ATP using energy derived from the redox reactions of an electron transport chain.",
    "photosynthesis": "The process by which plants and other autotrophs capture and use light energy to make food from carbon dioxide and water.",
    "prokaryotic organisms": "Organisms whose cells lack a nucleus and other membrane-bound organelles.",
    "cyanobacterial photosynthesis": "A form of photosynthesis that is oxygenic, meaning it produces oxygen.",
    "light-dependent reactions": "Reactions of photosynthesis that use energy from light to produce ATP and NADPH.",
    "ATP": "Adenosine triphosphate, the main energy source that cells use for most of their work.",
    "NADPH": "An electron carrier involved in photosynthesis.",
    "organic molecules": "Molecules that contain carbon.",
    "Calvin cycle": "Reactions of photosynthesis in which energy from ATP and NADPH is used to build high-energy compounds such as sugars.",
    "stroma": "The fluid of the chloroplast surrounding the thylakoid membrane; involved in the synthesis of organic molecules from carbon dioxide and water.",
    "thylakoids": "A flattened membrane sac inside the chloroplast, used to convert light energy into chemical energy.",
    "grana": "Stacks of thylakoids.",
    "chlorophylls": "Green pigments that absorb light to provide energy for photosynthesis.",
    "photosystems I and II": "Clusters of chlorophyll and proteins in the thylakoid membrane that absorb light energy.",
    "electron transport chain (ETC)": "A series of electron carrier proteins that shuttle high-energy electrons during ATP-generating reactions.",
    "electrochemical gradient": "The diffusion gradient of an ion, representing a type of potential energy that accounts for both the concentration difference of the ion across a membrane and its tendency to move relative to the membrane potential.",
    "direct contact": "A mode of cell-cell communication where cells are in direct physical contact.",
    "chemical signaling": "Communication between cells through the release and reception of chemical substances.",
    "local regulators": "A secreted molecule that influences cells near where it is secreted.",
    "neurotransmitters": "Chemical messengers that cross the synaptic gaps between neurons.",
    "plant immune response": "A defense response in plants to pathogens.",
    "quorum sensing": "The ability of bacteria to sense the presence of other bacteria via secreted chemical signals.",
    "morphogens": "Signaling molecules that stimulate cell differentiation and development.",
    "hormones": "Chemical messengers, mostly those manufactured by the endocrine glands, that are produced in one tissue and affect another.",
    "insulin": "A protein hormone synthesized in the pancreas that regulates blood sugar levels by facilitating the uptake of glucose into tissues.",
    "human growth hormone": "A hormone that stimulates growth, cell reproduction, and cell regeneration.",
    "thyroid hormone": "Hormone that regulates metabolism.",
    "testosterone": "Male sex hormone.",
    "estrogen": "Female sex hormone.",
    "immune cells": "Cells of the immune system that are involved in protecting the body against infectious disease and foreign invaders.",
    "antigen-presenting cells (APCs)": "Cells that process protein antigens and present them on their surface in a form that can be recognized by lymphocytes.",
    "helper T-cells": "A type of T cell that plays an important role in the immune system by activating other immune cells.",
    "killer T-cells": "A type of T cell that kills infected or cancerous cells.",
    "signal transduction pathway": "The process by which a signal on a cell's surface is converted into a specific cellular response.",
    "protein modification": "The process of changing a protein's structure and function after translation.",
    "phosphorylation cascades": "A series of chemical reactions during cell signaling mediated by enzymes (kinases), in which each kinase in turn phosphorylates and activates another, ultimately leading to phosphorylation of many proteins.",
    "ligand": "A molecule that binds specifically to another molecule, usually a larger one.",
    "receptor protein": "A protein that binds to a specific signal molecule, enabling the cell to respond to the signal molecule.",
    "G protein-coupled receptor": "A signal receptor protein in the plasma membrane that responds to the binding of a signaling molecule by activating a G protein.",
    "ligand-binding domain": "The site on a receptor at which a ligand binds.",
    "ligand-gated channels": "Transmembrane protein that opens to allow the passage of a specific ion across the membrane when a specific signal molecule (ligand) binds to the extracellular side of the protein.",
    "intracellular domain": "The part of a receptor protein that extends into the cytoplasm.",
    "second messengers": "Small, nonprotein, water-soluble molecules or ions that send messages throughout the cells by diffusion.",
    "cyclic AMP (cAMP)": "A common second messenger.",
    "cell growth": "The process by which a cell increases in size.",
    "secretion of molecules": "The process of releasing molecules from a cell.",
    "gene expression": "The process by which information encoded in DNA directs the synthesis of proteins or, in some cases, RNAs that are not translated into proteins and instead function as RNAs.",
    "apoptosis": "Programmed cell death.",
    "mutations": "A random error in gene replication that leads to a change.",
    "feedback mechanisms": "Processes that use the conditions of one component to regulate the function of the other.",
    "homeostasis": "The process by which organisms maintain a relatively stable internal environment.",
    "negative feedback": "A primary mechanism of homeostasis, whereby a change in a physiological variable that is being monitored triggers a response that counteracts the initial fluctuation.",
    "positive feedback": "A type of regulation that responds to a change in conditions by initiating responses that will amplify the change.",
    "blood sugar regulation": "The process of maintaining a stable level of glucose in the blood.",
    "lactation": "The secretion of milk by the mammary glands.",
    "childbirth": "The process of bringing forth a child from the uterus, or womb.",
    "fruit ripening": "A process in plants that causes fruit to become more palatable.",
    "cell cycle": "The series of events that take place in a cell leading to its division and duplication of its DNA (DNA replication) to produce two daughter cells.",
    "eukaryotic cell": "A type of cell with a membrane-enclosed nucleus and membrane-enclosed organelles.",
    "interphase": "The period of the cell cycle between cell divisions, in which the cell grows and DNA is replicated.",
    "G1 phase": "The first gap, or growth phase, of the cell cycle, consisting of the portion of interphase before DNA synthesis begins.",
    "S phase": "The synthesis phase of the cell cycle; the portion of interphase during which DNA is replicated.",
    "G2 phase": "The second gap, or growth phase, of the cell cycle, consisting of the portion of interphase after DNA synthesis occurs.",
    "mitosis": "Cell division in which the nucleus divides into nuclei containing the same number of chromosomes.",
    "cytokinesis": "Division of the cytoplasm to form two separate daughter cells.",
    "G0": "A non-dividing state in which a cell has left the cell cycle.",
    "prophase": "The first and longest phase of mitosis, during which the chromosomes become visible and the centrioles separate and take up positions on the opposite sides of the nucleus.",
    "metaphase": "The second phase of mitosis, during which the chromosomes line up across the center of the cell.",
    "anaphase": "The third phase of mitosis, during which the chromosome pairs separate and move toward opposite poles.",
    "telophase": "The final phase of cell division, between anaphase and interphase, in which the chromatids or chromosomes move to opposite ends of the cell and two nuclei are formed.",
    "cleavage furrow": "The first sign of cleavage in an animal cell; a shallow groove in the cell surface near the old metaphase plate.",
    "cell plate": "A double membrane across the midline of a dividing plant cell, between which the new cell wall forms during cytokinesis.",
    "checkpoints": "Points in the cell cycle that regulate its progression.",
    "cyclins": "Proteins that regulate the timing of the cell cycle in eukaryotic cells.",
    "cyclin-dependent kinases (CdKs)": "A protein kinase that is active only when attached to a particular cyclin.",
    "cancer": "Any malignant growth or tumor caused by abnormal and uncontrolled cell division.",
    "genetic information": "The information encoded in the nucleotide sequences of DNA or RNA.",
    "chromosomes": "Structures of nucleic acids and protein found in the nucleus of most living cells, carrying genetic information in the form of genes.",
    "meiosis": "A type of cell division that results in four daughter cells each with half the number of chromosomes of the parent cell, as in the production of gametes.",
    "genetic diversity": "The total number of different genetic characteristics in the genetic makeup of a species.",
    "Mendelian genetics": "The pattern of inheriting characteristics that follows the laws formulated by Gregor Mendel.",
    "non-Mendelian genetics": "Inheritance patterns that do not follow Mendelian genetic laws.",
    "chromosomal inheritance": "The inheritance of traits that are determined by genes located on the chromosomes.",
    "environmental factors": "Factors in the environment that can influence the expression of traits.",
    "nondisjunction": "An error in meiosis or mitosis in which members of a pair of homologous chromosomes or a pair of sister chromatids fail to separate properly from each other.",
    "phenotype": "The set of observable characteristics of an individual resulting from the interaction of its genotype with the environment.",
    "genotype": "The genetic makeup of an organism.",
    "DNA": "A complex molecule containing the genetic information that makes up the chromosomes.",
    "RNA": "A single-stranded nucleic acid that passes along genetic messages.",
    "genetic code": "The universal code of three-base codons that encodes the genetic instructions for the amino acid sequence of proteins.",
    "laws of segregation": "Mendel's first law, stating that the two alleles in a pair segregate (separate from each other) into different gametes during gamete formation.",
    "independent assortment": "Mendel's second law, stating that each pair of alleles segregates independently of each other pair of alleles during gamete formation.",
    "fertilization": "The process of combining the male gamete, or sperm, with the female gamete, or ovum.",
    "haploid gametes": "Sex cells that contain a single set of chromosomes.",
    "diploid number": "The total number of chromosomes in a diploid cell.",
    "genetic variation": "The variety of different types of genes in a species or population.",
    "alleles": "Different forms of a gene.",
    "zygote": "A fertilized egg.",
    "rules of probability": "The mathematical rules that can be used to predict the results of simple genetic crosses.",
    "single-gene traits": "Traits that are determined by a single gene.",
    "monohybrid cross": "A cross between individuals that involves one pair of contrasting traits.",
    "dihybrid cross": "A cross between two individuals, concentrating on two definable traits.",
    "test cross": "The crossing of an individual of unknown genotype with a homozygous recessive individual to determine the unknown genotype.",
    "homozygous": "Having two identical alleles for a particular gene.",
    "heterozygous": "Having two different alleles for a particular gene.",
    "autosomal": "Pertaining to a chromosome that is not a sex chromosome.",
    "genetically linked": "Genes that are located close together on the same chromosome and are often inherited together.",
    "sex-linked traits": "Traits that are inherited with sex chromosomes.",
    "pedigrees": "A chart that shows the presence or absence of a trait within a family across generations.",
    "Punnett squares": "A chart that shows all the possible combinations of alleles that can result from a genetic cross.",
    "quantitative analysis": "The process of using statistical analysis to analyze data.",
    "map distance (map units)": "The distance between genes on a chromosome, measured in terms of the frequency of recombination.",
    "gene mapping": "The process of determining the location of genes on chromosomes.",
    "codominance": "A condition in which both alleles for a gene are fully expressed.",
    "incomplete dominance": "A situation in which one allele is not completely dominant over another allele.",
    "pleiotropy": "The ability of a single gene to have multiple effects.",
    "non-nuclear inheritance": "The inheritance of genetic information from sources other than the nucleus (e.g., mitochondria, chloroplasts).",
    "maternally inherited": "Traits that are inherited from the mother.",
    "sex determination": "The mechanism by which sex is established.",
    "X-linked recessive traits": "Recessive traits that are located on the X chromosome.",
    "phenotypic plasticity": "The ability of a single genotype to produce different phenotypes in different environments.",
    "mutated allele": "An allele that has been altered by a mutation.",
    "triploidy": "A chromosomal condition in which each cell has three sets of chromosomes.",
    "aneuploidy": "A chromosomal aberration in which one or more chromosomes are present in extra copies or are deficient in number.",
    "Down syndrome/Trisomy 21": "A genetic disorder caused by the presence of all or part of a third copy of chromosome 21.",
    "Turner syndrome": "A chromosomal disorder in females in which either an X chromosome is missing, making the person XO instead of XX, or part of one X chromosome is deleted.",
    "protein synthesis": "The formation of proteins by using information contained in DNA and carried by mRNA.",
    "transcription": "The process whereby the DNA sequence in a gene is copied into mRNA.",
    "translation": "The process whereby genetic information coded in messenger RNA directs the formation of a specific protein at a ribosome in the cytoplasm.",
    "gene regulation": "The process of turning genes on and off.",
    "cell specialization": "The process in which cells develop in different ways to perform different tasks.",
    "hereditary information": "The genetic information passed from one generation to the next.",
    "circular chromosomes": "The structure of the genetic material in prokaryotic cells.",
    "linear chromosomes": "The structure of the genetic material in eukaryotic cells.",
    "histones": "Protein molecules around which DNA is tightly coiled in chromatin.",
    "plasmids": "Small circular DNA molecules that replicate separately from the bacterial chromosome.",
    "extra-chromosomal DNA": "DNA found outside the chromosome, for example, in mitochondria or plasmids.",
    "nucleotide base pairing": "The pairing of a purine with a pyrimidine in DNA (A-T, G-C) and RNA (A-U, G-C).",
    "purines": "Nitrogenous bases with a double-ring structure (adenine and guanine).",
    "pyrimidines": "Nitrogenous bases with a single-ring structure (cytosine, thymine, and uracil).",
    "5' to 3' direction": "The direction in which DNA and RNA are synthesized.",
    "semiconservative replication": "The process in which the DNA molecule uncoils and separates into two strands, and each original strand becomes a template on which a new strand is constructed.",
    "helicase": "An enzyme that untwists the double helix of DNA at the replication forks.",
    "topoisomerase": "An enzyme that corrects 'overwinding' ahead of replication forks by breaking, swiveling, and rejoining DNA strands.",
    "DNA polymerase": "An enzyme involved in DNA replication that joins individual nucleotides to produce a DNA molecule.",
    "RNA primers": "Small segments of RNA that are required to initiate DNA replication.",
    "leading strand": "The new continuous complementary DNA strand synthesized along the template strand in the mandatory 5' to 3' direction.",
    "lagging strand": "The discontinuously synthesized DNA strand that elongates by means of Okazaki fragments, each synthesized in a 5' to 3' direction away from the replication fork.",
    "Okazaki fragments": "Small fragments of DNA produced on the lagging strand during DNA replication, joined later by DNA ligase to form a complete strand.",
    "ligase": "An enzyme that connects two fragments of DNA to make a single fragment.",
    "central dogma": "The theory that states that, in cells, information only flows from DNA to RNA to proteins.",
    "transfer RNA (tRNA)": "An RNA molecule that functions as an interpreter between nucleic acid and protein language by picking up specific amino acids and recognizing the appropriate codons in the mRNA.",
    "anticodon": "A group of three bases on a tRNA molecule that are complementary to an mRNA codon.",
    "ribosomal RNA (rRNA)": "The type of RNA that combines with proteins to form ribosomes.",
    "RNA polymerases": "Enzymes that link together the growing chain of RNA nucleotides during transcription using a DNA strand as a template.",
    "template DNA strand": "The strand of DNA that is used as a template for transcription.",
    "poly-A tail": "A sequence of 50-250 adenine nucleotides added onto the 3' end of a pre-mRNA molecule.",
    "GTP cap": "A specially altered nucleotide on the 5' end of some primary transcripts such as precursor messenger RNA.",
    "introns": "A noncoding, intervening sequence within a eukaryotic gene.",
    "exons": "Expressed sequence of DNA; codes for a protein.",
    "splicing": "The process of removing introns and reconnecting exons in a pre-mRNA.",
    "alternative splicing": "A post-transcriptional gene regulation mechanism in eukaryotes in which multiple protein products are produced by a single gene through alternative splicing of the RNA transcript.",
    "cytoplasm": "The portion of the cell outside the nucleus.",
    "rough endoplasmic reticulum": "An endomembrane system covered with ribosomes where many proteins for transport are assembled.",
    "initiation": "The first stage of transcription or translation.",
    "elongation": "The process of adding amino acids to the growing polypeptide chain.",
    "termination": "The final stage of transcription or translation.",
    "start codon (AUG)": "The codon that signals to ribosomes to begin translation; codes for the first amino acid in a protein, methionine.",
    "methionine": "The amino acid coded for by the start codon AUG.",
    "codons": "A three-nucleotide sequence of DNA or mRNA that specifies a particular amino acid or termination signal; the basic unit of the genetic code.",
    "genetic code chart": "A chart that shows the relationship between the 64 possible codons and the 20 amino acids.",
    "stop codon": "A codon that signals the termination of translation.",
    "polypeptide": "A polymer (chain) of many amino acids linked together by peptide bonds.",
    "retroviruses": "Viruses that contain RNA as their genetic information.",
    "reverse transcriptase": "An enzyme encoded by some certain viruses (retroviruses) that uses RNA as a template for DNA synthesis.",
    "host genome": "The complete genetic material of a host organism.",
    "viral progeny": "The new viruses produced by a host cell.",
    "regulatory sequences": "Stretches of DNA that interact with regulatory proteins to control transcription.",
    "regulatory proteins": "Proteins that bind to regulatory sequences of DNA to control gene expression.",
    "constitutively expressed": "Genes that are expressed at all times.",
    "inducible": "Genes that are expressed only when certain conditions are present.",
    "epigenetic changes": "Changes to the chemical groups that associate with DNA that are transmitted to daughter cells after cell division.",
    "reversible modifications": "Changes to DNA or histones that can be reversed.",
    "differential gene expression": "The expression of different sets of genes by cells with the same genome.",
    "cell differentiation": "The process by which a cell becomes specialized for a specific structure or function.",
    "tissue-specific proteins": "Proteins that are found only in a specific type of tissue.",
    "transcription factors": "A collection of proteins that mediate the binding of RNA polymerase and the initiation of transcription.",
    "operons": "A group of genes that are regulated together.",
    "lac operon": "An operon required for the transport and metabolism of lactose in E. coli and many other enteric bacteria.",
    "repressible system": "A system in which the product of a metabolic pathway represses the operon.",
    "small RNA molecules": "RNA molecules that are not translated into proteins but have regulatory functions.",
    "point mutations": "Gene mutations involving changes in one or a few nucleotides.",
    "frameshift mutations": "A mutation that shifts the 'reading' frame of the genetic message by inserting or deleting a nucleotide.",
    "nonsense mutations": "A mutation that changes an amino acid codon to one of the three stop codons, resulting in a shorter and usually nonfunctional protein.",
    "silent mutations": "A mutation that changes a single nucleotide, but does not change the amino acid created.",
    "DNA replication errors": "Errors that occur during the process of DNA replication.",
    "DNA repair mechanisms": "Mechanisms that correct errors in DNA.",
    "radiation": "The transfer of energy by electromagnetic waves.",
    "reactive chemicals": "Chemicals that can react with DNA and cause mutations.",
    "chromosome number changes": "Changes in the number of chromosomes in a cell.",
    "human disorders": "Diseases or conditions that affect the human body.",
    "chromosome structure alterations": "Changes in the structure of a chromosome.",
    "natural selection": "A process in which individuals that have certain inherited traits tend to survive and reproduce at higher rates than other individuals because of those traits.",
    "horizontal acquisition of genetic information": "The transfer of genetic material from one organism to another that is not its offspring.",
    "transformation": "The process in which one strain of bacteria is changed by a gene or genes from another strain of bacteria.",
    "transduction": "The process by which foreign DNA is introduced into a cell by a virus or viral vector.",
    "conjugation": "The process in which paramecia and some prokaryotes exchange genetic information.",
    "transposition": "The movement of a transposable element from one location to another in the genome.",
    "genetic recombination": "The regrouping of genes in an offspring that results in a genetic makeup that is different from that of the parents.",
    "CFTR gene": "The gene that is mutated in cystic fibrosis.",
    "cystic fibrosis": "A genetic disorder that is present at birth and affects both the respiratory and digestive systems.",
    "MC1R gene": "A gene that helps determine skin and hair color.",
    "adaptive melanism": "The evolution of dark coloration in a population of organisms in response to a change in the environment.",
    "pocket mice": "A species of mouse that has evolved to have different coat colors depending on its environment.",
    "antibiotic resistance": "The ability of bacteria to withstand the effects of an antibiotic.",
    "pesticide resistance": "The ability of a pest to withstand exposure to a given pesticide.",
    "herbicide resistance": "The ability of a plant to survive and reproduce following exposure to a dose of herbicide normally lethal to the wild type.",
    "chemotherapy drugs": "Drugs that are used to treat cancer.",
    "sickle cell anemia": "A genetic disorder that causes abnormal hemoglobin, resulting in some red blood cells assuming an abnormal sickle shape.",
    "heterozygote advantage": "A situation in which the heterozygous genotype has a higher relative fitness than either the homozygous dominant or homozygous recessive genotype.",
    "genetic engineering": "The direct manipulation of genes for practical purposes.",
    "gel electrophoresis": "A procedure used to separate and analyze DNA fragments by placing a mixture of DNA fragments at one end of a porous gel and applying an electrical voltage to the gel.",
    "polymerase chain reaction (PCR)": "A technique for amplifying DNA in vitro by incubating with special primers, DNA polymerase molecules, and nucleotides.",
    "bacterial transformation": "The ability of bacteria to alter their genetic makeup by uptaking foreign DNA from another bacterial cell and incorporating it into their own.",
    "DNA sequencing": "The process of determining the precise order of nucleotides within a DNA molecule.",
    "DNA fingerprint": "A unique pattern of DNA fragments from an individual's DNA.",
    "phylogenetic analysis": "The study of the evolutionary relationships among a group of organisms.",
    "forensic identification": "The use of scientific techniques to identify individuals involved in a crime.",
    "genetically modified organisms": "Organisms that have had their DNA altered in a way that does not occur naturally.",
    "transgenic animals": "Animals that contain genes transferred from other animals, usually from a different species.",
    "gene cloning": "The production of multiple copies of a single gene.",
    "evolution": "The process by which different kinds of living organisms are thought to have developed and diversified from earlier forms during the history of the earth.",
    "populations": "Groups of individuals that belong to the same species and live in the same area.",
    "genetic makeup": "The set of genes that an organism carries.",
    "Hardy-Weinberg equilibrium": "The condition describing a non-evolving population (one that is in genetic equilibrium).",
    "allele frequencies": "The number of times an allele occurs in a gene pool, compared to the total number of alleles in that pool for the same gene.",
    "phenotypic variation": "The differences in appearance or function that are passed from generation to generation.",
    "evolutionary fitness": "The success in passing genes to the next generation.",
    "reproductive success": "The number of offspring an individual produces and rears to reproductive age; an individual's genetic contribution to the next generation.",
    "biotic environment": "The living components of an ecosystem.",
    "abiotic environment": "The non-living components of an ecosystem.",
    "selective pressures": "Factors in the environment that influence reproductive success in individuals.",
    "flowering time": "The time at which a plant flowers.",
    "global climate change": "Changes in the average weather that occurs in an area over a period of years or decades.",
    "peppered moth": "A species of moth that has evolved to have different colors depending on the environment.",
    "DDT resistance": "The ability of an insect to withstand the effects of DDT.",
    "artificial selection": "The process of breeding organisms with specific traits in order to produce offspring with identical traits.",
    "convergent evolution": "The process by which unrelated organisms independently evolve similarities when adapting to similar environments.",
    "random occurrences": "Events that happen by chance.",
    "mutation": "A change in a gene or chromosome.",
    "genetic drift": "A change in the allele frequency of a population as a result of chance events rather than natural selection.",
    "nonselective process": "A process that does not favor any particular trait.",
    "small populations": "Populations that are more susceptible to genetic drift.",
    "bottleneck effect": "A change in allele frequency following a dramatic reduction in the size of a population.",
    "founder effect": "A change in allele frequencies as a result of the migration of a small subgroup of a population.",
    "migration": "The movement of individuals from one population to another.",
    "gene flow": "The movement of alleles from one population to another.",
    "geographical data": "Data related to the Earth's surface.",
    "geological data": "Data related to the Earth's physical structure and substance.",
    "physical data": "Data that can be measured or observed without changing the composition of the matter.",
    "biochemical data": "Data related to the chemical processes of living organisms.",
    "mathematical data": "Data that is represented by numbers.",
    "molecular evidence": "Evidence based on changes in DNA sequences.",
    "morphological evidence": "Evidence based on the physical structure of organisms.",
    "genetic evidence": "Evidence based on the genetic material of organisms.",
    "extant organisms": "Organisms that are still alive today.",
    "extinct organisms": "Organisms that are no longer alive.",
    "fossils": "The preserved remains or traces of organisms that once lived on Earth.",
    "carbon-14": "A radioactive isotope of carbon used for dating fossils.",
    "morphological homologies": "Similarities in physical structure that result from common ancestry.",
    "vestigial structures": "A structure that is present in an organism but no longer serves its original purpose.",
    "DNA nucleotide sequences": "The order of nucleotides in a DNA molecule.",
    "protein amino acid sequences": "The order of amino acids in a protein molecule.",
    "membrane-bound organelles": "Organelles that are surrounded by a membrane.",
    "genomic changes": "Changes in the genetic material of an organism.",
    "fossil record": "The chronological collection of life's remains in sedimentary rock layers.",
    "pathogens": "Disease-causing agents.",
    "emergent diseases": "Diseases that are new, increasing in incidence, or showing a potential to increase in the near future.",
    "phylogenetic trees": "A branching diagram that represents a hypothesis about the evolutionary history of a group of organisms.",
    "cladograms": "A diagram that is based on patterns of shared, derived traits and that shows the evolutionary relationships between groups of organisms.",
    "hypothetical evolutionary relationships": "The proposed evolutionary relationships between organisms.",
    "lineages": "Lines of descent.",
    "molecular clock": "A model that uses DNA comparisons to estimate the length of time that two species have been evolving independently.",
    "shared derived characters": "Characters that are shared by a group of organisms and are derived from a common ancestor.",
    "out-group": "A group of organisms that is closely related to the ingroup, but not as closely related as the members of the ingroup are to each other.",
    "nodes": "The points on a phylogenetic tree where a lineage splits.",
    "speciation": "The formation of new and distinct species in the course of evolution.",
    "reproductively isolated": "Unable to interbreed and produce fertile offspring.",
    "biological species concept": "A definition of a species as a population or group of populations whose members have the ability to interbreed in nature and produce viable, fertile offspring, but are unable to produce viable, fertile offspring with members of other populations.",
    "viable": "Capable of living.",
    "fertile offspring": "Offspring that can reproduce.",
    "punctuated equilibrium": "A pattern of evolution in which long stable periods are interrupted by brief periods of more rapid change.",
    "stasis": "A period of no change.",
    "gradualism": "The theory that evolution occurs slowly but steadily.",
    "divergent evolution": "The process by which two or more related but reproductively isolated populations become more and more dissimilar.",
    "adaptive radiation": "The evolution of many diversely adapted species from a common ancestor upon introduction to new environmental opportunities.",
    "new habitats": "New environments that are available for organisms to colonize.",
    "sympatric speciation": "The formation of new species in populations that live in the same geographic area.",
    "allopatric speciation": "The formation of new species in populations that are geographically isolated from one another.",
    "pre-zygotic mechanisms": "Mechanisms that prevent the formation of a zygote.",
    "post-zygotic mechanisms": "Mechanisms that prevent a zygote from developing into a viable, fertile adult.",
    "population dynamics": "The study of how complex interactions between biotic and abiotic factors influence variations in population size.",
    "decline": "A decrease in the size of a population.",
    "extinction": "The disappearance of a species from Earth.",
    "resilience": "The ability to adapt effectively in the face of threats.",
    "environmental perturbation": "A disturbance in the environment.",
    "adaptive alleles": "Alleles that provide an advantage in a particular environment.",
    "deleterious alleles": "Alleles that are harmful to an organism.",
    "RNA world hypothesis": "A hypothesis that proposes that RNA was the first genetic material.",
    "genetic continuity": "The passing of genetic information from one generation to the next.",
    "RNA replication": "The process of making a copy of an RNA molecule.",
    "base-pairing": "The principle that hydrogen bonds can form only between certain bases in nucleic acids.",
    "genetically encoded proteins": "Proteins that are encoded by genes.",
    "behavioral response": "The response of an organism to a stimulus.",
    "physiological response": "The response of an organism's body to a stimulus.",
    "internal environment": "The environment within the body of an organism.",
    "external environment": "The environment outside the body of an organism.",
    "environmental cues": "Signals from the environment that can trigger a response.",
    "photoperiodism": "A plant's response to seasonal changes in length of night and day.",
    "phototropism": "A growth response to light.",
    "taxis": "Movement toward or away from a stimulus.",
    "kinesis": "Random movement in response to a stimulus.",
    "nocturnal activity": "Activity that occurs at night.",
    "diurnal activity": "Activity that occurs during the day.",
    "fight-or-flight response": "A physiological reaction that occurs in response to a perceived harmful event, attack, or threat to survival.",
    "predator warnings": "Signals that warn of the presence of a predator.",
    "plant responses to herbivory": "Responses of plants to being eaten by herbivores.",
    "communication mechanisms": "The ways in which organisms communicate with each other.",
    "visual signals": "Signals that can be seen.",
    "audible signals": "Signals that can be heard.",
    "tactile signals": "Signals that can be felt.",
    "electrical signals": "Signals that are transmitted by electrical currents.",
    "chemical signals": "Signals that are transmitted by chemical substances.",
    "signaling behaviors": "Behaviors that are used to communicate with other organisms.",
    "differential reproductive success": "The difference in the number of offspring produced by individuals in a population.",
    "dominance": "A social ranking that determines who has access to resources.",
    "food location": "The location of food.",
    "territory establishment": "The process of establishing a territory.",
    "territorial marking": "The marking of a territory to warn other individuals.",
    "coloration": "The color of an organism.",
    "bird songs": "Songs that are sung by birds to communicate with each other.",
    "pack behaviors": "Behaviors that are exhibited by animals that live in packs.",
    "innate behaviors": "Behaviors that are inherited.",
    "learned behaviors": "Behaviors that are learned from experience.",
    "survival": "The ability to stay alive.",
    "cooperative behavior": "Behavior that involves working together with other individuals.",
    "kin selection": "The process by which evolution selects for individuals who cooperate with their relatives.",
    "energy acquisition": "The process of obtaining energy.",
    "energy use": "The process of using energy.",
    "body temperature regulation": "The process of maintaining a stable body temperature.",
    "metabolism": "All of the chemical reactions that occur within an organism.",
    "endotherms": "Animals that can regulate their own body temperature.",
    "ectotherms": "Animals that rely on external sources of heat to regulate their body temperature.",
    "energy storage": "The process of storing energy for later use.",
    "organismal growth": "The process of an organism increasing in size.",
    "reproductive output": "The number of offspring an individual produces.",
    "mass loss": "The loss of mass.",
    "death": "The end of life.",
    "reproductive strategies": "The different ways in which organisms reproduce.",
    "asexual reproduction": "A type of reproduction that involves only one parent and produces offspring that are genetically identical to the parent.",
    "sexual reproduction": "A type of reproduction that involves two parents and produces offspring that are genetically different from both parents.",
    "metabolic rate per unit body mass": "The rate at which an organism uses energy per unit of body mass.",
    "population": "A group of individuals of the same species that live in the same area.",
    "community": "All the different populations that live together in an area.",
    "ecosystem": "A biological community of interacting organisms and their physical environment.",
    "biome": "A group of ecosystems that share similar climates and typical organisms.",
    "energy flow": "The flow of energy through an ecosystem.",
    "matter cycles": "The movement of matter through an ecosystem.",
    "nutrients": "Substances in food that your body needs to grow, to repair itself, and to supply you with energy.",
    "biogeochemical cycles": "The movement of abiotic factors between the living and nonliving components within ecosystems.",
    "conservation of matter": "The principle stating that matter is not created or destroyed during a chemical reaction.",
    "interdependent cycles": "Cycles that are dependent on each other.",
    "abiotic reservoirs": "The parts of an ecosystem where abiotic factors are stored.",
    "biotic reservoirs": "The parts of an ecosystem where biotic factors are stored.",
    "hydrologic (water) cycle": "The cycle through which water in the hydrosphere moves; includes such processes as evaporation, precipitation, and surface and groundwater runoff.",
    "evaporation": "The change of a substance from a liquid to a gas.",
    "condensation": "The change of state from a gas to a liquid.",
    "precipitation": "Any form of water that falls from clouds and reaches Earth's surface.",
    "transpiration": "The evaporation of water from the leaves of a plant.",
    "carbon cycle": "The organic circulation of carbon from the atmosphere into organisms and back again.",
    "decomposition": "The breakdown of organic matter.",
    "combustion": "The process of burning something.",
    "nitrogen cycle": "The transfer of nitrogen from the atmosphere to the soil, to living organisms, and back to the atmosphere.",
    "nitrogen fixation": "The process of changing free nitrogen gas into a usable form.",
    "assimilation": "The process by which plants and animals incorporate the NO3- and ammonia formed through nitrogen fixation and nitrification.",
    "ammonification": "The process by which fungal and bacterial decomposers break down the organic nitrogen found in dead bodies and waste products and convert it into inorganic ammonium.",
    "nitrification": "The process by which bacteria in soil and water oxidize ammonia and ammonium ions and form nitrites and nitrates.",
    "denitrification": "The process by which bacteria convert nitrates into nitrogen gas.",
    "microorganisms": "Living creatures that are too small to see with the naked eye.",
    "phosphorus cycle": "The movement of phosphorus atoms from rocks through the biosphere and hydrosphere and back to rocks.",
    "weathering rocks": "The process of breaking down rocks into smaller pieces.",
    "producers": "Organisms that make their own food.",
    "consumers": "Organisms that eat other organisms.",
    "decomposers": "Organisms that break down the dead remains of other organisms.",
    "excretion": "The process by which wastes are removed from the body.",
    "energy availability": "The amount of energy that is available to an organism.",
    "population size": "The number of individuals in a population.",
    "trophic levels": "The hierarchical levels of the food chain through which energy flows from primary producers to primary consumers, secondary consumers and so on.",
    "primary productivity": "The rate at which organic matter is created by producers in an ecosystem.",
    "autotrophs": "Organisms that are able to make their own food.",
    "heterotrophs": "Organisms that obtain food by consuming other living things.",
    "carnivores": "Consumers that eat only animals.",
    "herbivores": "Consumers that eat only plants.",
    "omnivores": "Consumers that eat both plants and animals.",
    "scavengers": "Animals that consume the carcasses of other animals.",
    "carbon compounds": "Compounds that contain carbon.",
    "food chains": "A series of steps in which organisms transfer energy by eating and being eaten.",
    "food webs": "A community of organisms where there are several interrelated food chains.",
    "trophic pyramids/diagrams": "Diagrams that show the amount of energy or matter at each trophic level.",
    "population growth dynamics": "The study of how populations change in size and composition over time.",
    "birth rate": "The number of births in a population in a certain amount of time.",
    "death rate": "The number of deaths in a population in a certain amount of time.",
    "exponential growth": "Growth pattern in which the individuals in a population reproduce at a constant rate.",
    "limiting constraints": "Factors that limit the growth of a population.",
    "carrying capacity": "The largest population that an area can support.",
    "density-dependent factors": "Factors that limit population growth as population density increases.",
    "density-independent factors": "Factors that limit population growth regardless of population density.",
    "logistic growth model": "A growth model that describes a population whose growth is initially exponential, but slows as the population approaches the carrying capacity of the environment.",
    "species composition": "The number of different species in a community.",
    "species diversity": "The variety of different kinds of organisms that make up the community.",
    "interacting populations": "Populations that interact with each other.",
    "competition": "The struggle between organisms to survive in a habitat with limited resources.",
    "predation": "An interaction in which one organism kills another for food.",
    "symbioses": "Close, long-term relationships between two different species.",
    "parasitism": "A relationship between two organisms of different species where one benefits and the other is harmed.",
    "mutualism": "A relationship between two species in which both species benefit.",
    "commensalism": "A relationship between two organisms in which one organism benefits and the other is unaffected.",
    "trophic cascades": "The effects on subsequent trophic levels after the elimination or reduction in numbers of individuals in one trophic level.",
    "niche partitioning": "The process by which competing species use the environment differently in a way that helps them to coexist.",
    "ecosystem diversity": "The variety of ecosystems in a given region.",
    "artificial ecosystems": "Ecosystems that are created and maintained by humans.",
    "keystone species": "A species that has an unusually large effect on its ecosystem.",
    "abiotic factors": "The non-living parts of an ecosystem.",
    "biotic factors": "The living parts of an ecosystem.",
    "short-term structure": "The structure of an ecosystem over a short period of time.",
    "long-term structure": "The structure of an ecosystem over a long period of time.",
    "adaptation": "A trait that helps an organism survive and reproduce.",
    "invasive species": "A species that is not native to a particular region and has a tendency to spread to a degree believed to cause damage to the environment, human economy or human health.",
    "new niche": "A new role or position that an organism has in its environment.",
    "resource competition": "Competition for resources.",
    "uncontrolled population growth": "Population growth that is not limited by any factors.",
    "ecological changes": "Changes in the environment that affect living organisms.",
    "human activities": "Activities that are performed by humans.",
    "biomagnification": "The accumulation of pollutants at successive levels of the food chain.",
    "eutrophication": "A process by which nutrients, particularly phosphorus and nitrogen, become highly concentrated in a body of water, leading to increased growth of organisms such as algae or cyanobacteria.",
    "extinctions": "The disappearance of a species from Earth.",
    "Dutch elm disease": "A fungal disease of elm trees that is spread by elm bark beetles.",
    "potato blight": "A fungal disease of potatoes.",
    "geological activity": "The movement of the Earth's plates.",
    "meteorological activity": "The weather.",
    "habitat change": "The process by which a natural habitat is rendered unable to support the species present.",
    "ecosystem distribution": "The way in which ecosystems are distributed across the Earth.",
    "biogeographical studies": "The study of the distribution of species and ecosystems in geographic space and through geological time.",
    "mono-cropping": "The practice of growing a single crop year after year on the same land.",
    "El Niño events": "The warming of the surface waters of the eastern and central Pacific Ocean.",
    "continental drift": "The gradual movement of the continents across the earth's surface through geological time.",
    "meteor impacts on dinosaurs": "The impact of a meteor that is believed to have caused the extinction of the dinosaurs."
};

const rawCourseData: Omit<CourseData, 'units'> & { units: Omit<Unit, 'color' | 'normalizedWeight'>[] } = {
  units: [
    {
      id: 'u1',
      name: 'Unit 1: Chemistry of Life',
      examWeighting: '8-11%',
      classPeriods: '~9-11',
      keyUnderstanding: "This unit lays the essential chemical groundwork for understanding life. You'll explore the elements vital for carbon-based systems, the unique properties of water that sustain life, and how monomers form complex biological macromolecules. This foundational knowledge is crucial for understanding cellular processes and energy transfer in later units.",
      bigIdeas: [
        { title: 'Energetics (ENE)', question: 'What is the role of energy in the making and breaking of polymers?' },
        { title: 'Information Storage and Transmission (IST)', question: 'How do living systems transmit information to ensure their survival?' },
        { title: 'Systems Interactions (SYI)', question: 'How would living systems function without the polarity of the water molecule?' }
      ],
      sciencePractices: "You'll focus on describing biological concepts (1.A), analyzing visual representations (2.A), and predicting the effects of disruptions in biological systems (6.E).",
      examTips: "Be precise with terminology (e.g., 'protein' vs. 'proton'). Understand that disruptions in biological relationships can have far-reaching consequences from molecules to ecosystems. The molecular structures of specific carbohydrate polymers, nucleotides, and amino acids are beyond the scope of the AP Exam.",
      vocabulary: ['polarity', 'hydrogen bonding', 'cohesion', 'adhesion', 'surface tension', 'carbon', 'carbohydrates', 'proteins', 'lipids', 'nucleic acids', 'sulfur', 'phosphorus', 'nitrogen', 'hydrolysis', 'dehydration synthesis', 'polymerization', 'monosaccharides', 'polysaccharides', 'amino acids', 'R group', 'hydrophobic', 'hydrophilic', 'ionic', 'primary structure', 'secondary structure', 'alpha-helices', 'beta-pleated sheets', 'tertiary structure', 'quaternary structure', 'peptide bonds', 'nucleotides', 'five-carbon sugar', 'phosphate', 'nitrogenous base', 'adenine', 'thymine', 'guanine', 'cytosine', 'uracil', 'deoxyribose', 'ribose', 'antiparallel double helix', "3' end", "5' end", 'saturated fatty acids', 'unsaturated fatty acids', 'phospholipids', 'fats', 'steroids', 'cholesterol'],
      topics: [
        {
          id: 'u1t1',
          name: 'Topic 1.1: Structure of Water and Hydrogen Bonding',
          iCanStatements: [
            {
              id: 'u1t1ic1',
              text: 'Explain how the properties of water that result from its polarity and hydrogen bonding affect its biological function.',
              keyConcepts: [
                { id: 'u1t1ic1kc1', text: "Living systems depend on water's properties." },
                { id: 'u1t1ic1kc2', text: "Water's polarity (polar covalent bonds) enables hydrogen bonding." },
                { id: 'u1t1ic1kc3', text: "High specific heat capacity helps maintain body temperature." },
                { id: 'u1t1ic1kc4', text: "High heat of vaporization allows for evaporative cooling." },
                { id: 'u1t1ic1kc5', text: "Hydrogen bonds lead to cohesion, adhesion, and surface tension." }
              ]
            }
          ]
        },
        {
          id: 'u1t2',
          name: 'Topic 1.2: Elements of Life',
          iCanStatements: [
            {
              id: 'u1t2ic1',
              text: 'Describe the composition of macromolecules required by living organisms.',
              keyConcepts: [
                 { id: 'u1t2ic1kc1', text: "Organisms need atoms and molecules from the environment for growth, reproduction, and organization." },
                 { id: 'u1t2ic1kc2', text: "Carbon, hydrogen, and oxygen are prevalent in carbohydrates, proteins, lipids, and nucleic acids." },
                 { id: 'u1t2ic1kc3', text: "Sulfur is in proteins, phosphorus in phospholipids and nucleic acids, and nitrogen in proteins and nucleic acids." }
              ]
            }
          ]
        },
        {
          id: 'u1t3',
          name: 'Topic 1.3: Introduction to Macromolecules',
          iCanStatements: [
            {
              id: 'u1t3ic1',
              text: 'Describe the chemical reactions that build and break biological macromolecules.',
              keyConcepts: [
                 { id: 'u1t3ic1kc1', text: "Hydrolysis breaks covalent bonds by adding water." },
                 { id: 'u1t3ic1kc2', text: "Dehydration synthesis forms covalent bonds by removing water." },
                 { id: 'u1t3ic1kc3', text: "Polymerization is the repeated connection of monomers via dehydration synthesis." }
              ]
            }
          ]
        },
         {
          id: 'u1t4',
          name: 'Topic 1.4: Carbohydrates',
          iCanStatements: [
            {
              id: 'u1t4ic1',
              text: 'Describe the structure and function of carbohydrates.',
              keyConcepts: [
                 { id: 'u1t4ic1kc1', text: "Monosaccharides are monomers for polysaccharides." },
                 { id: 'u1t4ic1kc2', text: "These monomers link via covalent bonds to form linear or branched polymers (e.g., cellulose, starch, glycogen)." }
              ]
            }
          ]
        },
        {
          id: 'u1t5',
          name: 'Topic 1.5: Lipids',
          iCanStatements: [
            {
              id: 'u1t5ic1',
              text: 'Describe the structure and function of lipids.',
              keyConcepts: [
                 { id: 'u1t5ic1kc1', text: "Lipids are nonpolar, hydrophobic. Their structure depends on subcomponent assembly." },
                 { id: 'u1t5ic1kc2', text: "Fatty acids are saturated (single bonds, straight chain) or unsaturated (double bonds, kinked chain)." },
                 { id: 'u1t5ic1kc3', text: "More unsaturation means more liquid at room temperature." },
                 { id: 'u1t5ic1kc4', text: "Functions include energy storage (fats), hormonal regulation (steroids like cholesterol), and membrane structure (phospholipids)." }
              ]
            }
          ]
        },
        {
          id: 'u1t6',
          name: 'Topic 1.6: Nucleic Acids',
          iCanStatements: [
             {
              id: 'u1t6ic1',
              text: 'Describe the structure and function of DNA and RNA.',
              keyConcepts: [
                {id: 'u1t6ic1kc1', text: 'Biological information is encoded in nucleotide sequences.'},
                {id: 'u1t6ic1kc2', text: 'Nucleotides have a five-carbon sugar, phosphate, and nitrogenous base.'},
                {id: 'u1t6ic1kc3', text: "Nucleic acids are linear with 3' (hydroxyl) and 5' (phosphate) ends; new nucleotides add to the 3' end."},
                {id: 'u1t6ic1kc4', text: "DNA is an antiparallel double helix (A-T, C-G)."},
                {id: 'u1t6ic1kc5', text: "RNA uses ribose, uracil (A-U), and is typically single-stranded, while DNA uses deoxyribose and thymine."}
              ]
             }
          ]
        },
        {
            id: 'u1t7',
            name: 'Topic 1.7: Proteins',
            iCanStatements: [
                {
                    id: 'u1t7ic1',
                    text: 'Describe the structure and function of proteins.',
                    keyConcepts: [
                        {id: 'u1t7ic1kc1', text: 'Proteins are linear chains of amino acids linked by peptide bonds.'},
                        {id: 'u1t7ic1kc2', text: 'Amino acids have a variable R group whose chemical properties (hydrophobic/nonpolar, hydrophilic/polar, ionic) determine protein structure and function.'},
                        {id: 'u1t7ic1kc3', text: 'Primary structure (amino acid sequence) dictates overall shape.'},
                        {id: 'u1t7ic1kc4', text: 'Secondary structures (alpha-helices, beta-pleated sheets) form from backbone hydrogen bonds.'},
                        {id: 'u1t7ic1kc5', text: 'Tertiary structure is the overall 3D shape from various interactions.'},
                        {id: 'u1t7ic1kc6', text: 'Quaternary structure results from multiple polypeptide interactions. All four levels determine function.'}
                    ]
                }
            ]
        }
      ]
    },
    {
        id: 'u2',
        name: 'Unit 2: Cell Structure and Function',
        examWeighting: '10-13%',
        classPeriods: '~14-16',
        keyUnderstanding: "The cell is the fundamental unit of life, with organelles performing specialized functions and contributing to compartmentalization. Cells use membranes to maintain distinct internal environments and control material exchange, which is vital for homeostasis. This unit is foundational for understanding cellular products, by-products, and energy/material exchange in later units.",
        bigIdeas: [
            { title: 'Evolution (EVO)', question: 'Defend the origin of eukaryotic cells.' },
            { title: 'Energetics (ENE)', question: 'How do the mechanisms for transport across membranes support energy conservation? What are the advantages and disadvantages of cellular compartmentalization?' },
            { title: 'Systems Interactions (SYI)', question: 'How are living systems affected by the presence or absence of subcellular components?' }
        ],
        sciencePractices: "You'll explain structure-function relationships of organelles (1.A, 1.B, 6.A), perform calculations with data (5.A), and construct graphs (4.A). Practice analyzing data, identifying patterns, and statistical analysis.",
        examTips: "Don't just identify organelles; accurately describe their function. Avoid simplistic analogies (e.g., 'cell city'). Master graphing skills: correctly label axes with units, plot data accurately with appropriate scaling, and choose the correct graph type (line for continuous, bar for categorical). Understand how to draw and interpret error bars for statistical conclusions.",
        vocabulary: ['ribosomes', 'rRNA', 'protein', 'mRNA', 'common ancestry', 'endoplasmic reticulum (ER)', 'smooth ER', 'rough ER', 'Golgi complex', 'mitochondria', 'lysosomes', 'vacuole', 'chloroplasts', 'glycosylation', 'surface area-to-volume ratio', 'plasma membrane', 'cell size', 'cell shape', 'membrane folds', 'root hair cells', 'guard cells', 'gut epithelial cells', 'cilia', 'stomata', 'phospholipid', 'hydrophobic fatty acids', 'hydrophilic phosphate', 'embedded proteins', 'fluid mosaic model', 'steroids', 'cholesterol', 'glycoproteins', 'glycolipids', 'selective permeability', 'nonpolar molecules', 'polar molecules', 'ions', 'channel proteins', 'transport proteins', 'cell walls', 'passive transport', 'active transport', 'endocytosis', 'exocytosis', 'concentration gradient', 'facilitated diffusion', 'aquaporins', 'Na+/K+ pump', 'ATPase', 'membrane potential', 'hypotonic', 'hypertonic', 'isotonic', 'osmosis', 'water potential', 'osmolarity', 'solute concentration', 'osmoregulation', 'contractile vacuole', 'central vacuole', 'compartmentalization', 'intracellular metabolic processes', 'enzymatic reactions', 'endosymbiosis', 'prokaryotic cells', 'eukaryotic cells'],
        topics: [
            {
                id: 'u2t1',
                name: 'Topic 2.1: Cell Structure and Function',
                iCanStatements: [
                    {
                        id: 'u2t1ic1',
                        text: 'Explain how the structure and function of subcellular components and organelles contribute to the function of cells.',
                        keyConcepts: [
                            {id: 'u2t1ic1kc1', text: 'Ribosomes (rRNA + protein) synthesize proteins.'},
                            {id: 'u2t1ic1kc2', text: "The endomembrane system (ER, Golgi, lysosomes, vacuoles, vesicles, nuclear envelope, plasma membrane) modifies, packages, and transports molecules."},
                            {id: 'u2t1ic1kc3', text: "ER provides support and transport (rough ER for protein synthesis, smooth ER for detoxification/lipid synthesis)."},
                            {id: 'u2t1ic1kc4', text: "Golgi complex folds, modifies, and packages proteins."},
                            {id: 'u2t1ic1kc5', text: "Mitochondria (double membrane, convoluted inner membrane) are for aerobic respiration and ATP synthesis."},
                            {id: 'u2t1ic1kc6', text: "Lysosomes (hydrolytic enzymes) digest material and aid apoptosis."},
                            {id: 'u2t1ic1kc7', text: "Vacuoles store materials (large central vacuole in plants for turgor)."},
                            {id: 'u2t1ic1kc8', text: "Chloroplasts (double membrane) are sites of photosynthesis."}
                        ]
                    }
                ]
            },
            {
                id: 'u2t2',
                name: 'Topic 2.2: Cell Size',
                iCanStatements: [
                    {
                        id: 'u2t2ic1',
                        text: 'Explain the effect of surface area-to-volume ratios on the exchange of materials between cells or organisms and the environment.',
                        keyConcepts: [
                            {id: 'u2t2ic1kc1', text: "SA/V ratios affect nutrient acquisition, waste elimination, thermal energy exchange, and chemical/energy exchange."},
                            {id: 'u2t2ic1kc2', text: "Smaller cells have higher SA/V, more efficient exchange."},
                            {id: 'u2t2ic1kc3', text: "As volume increases, SA/V decreases, increasing resource demand."},
                            {id: 'u2t2ic1kc4', text: "Complex structures (membrane folds) aid exchange."},
                            {id: 'u2t2ic1kc5', text: "Larger organisms have lower SA/V, affecting heat exchange."},
                            {id: 'u2t2ic1kc6', text: "Smaller multicellular organisms typically have higher metabolic rates per unit body mass."}
                        ]
                    }
                ]
            },
            {
                id: 'u2t3',
                name: 'Topic 2.3: Plasma Membrane',
                iCanStatements: [
                     {
                        id: 'u2t3ic1',
                        text: "Describe the roles of each of the components of the cell membrane in maintaining the internal environment of the cell.",
                        keyConcepts: [
                            {id: 'u2t3ic1kc1', text: "Phospholipids have hydrophilic (polar) heads facing aqueous environments and hydrophobic (nonpolar) tails facing inward."},
                            {id: 'u2t3ic1kc2', text: "Embedded proteins can be hydrophilic, hydrophobic, or both."}
                        ]
                     },
                     {
                        id: 'u2t3ic2',
                        text: 'Describe the fluid mosaic model of cell membranes.',
                        keyConcepts: [
                           {id: 'u2t3ic2kc1', text: "The Fluid Mosaic Model describes membranes as a dynamic framework of phospholipids with embedded proteins, steroids (cholesterol), glycoproteins, and glycolipids, all capable of lateral movement."}
                        ]
                     }
                ]
            },
            {
              id: 'u2t4',
              name: 'Topic 2.4: Membrane Permeability',
              iCanStatements: [
                {
                  id: 'u2t4ic1',
                  text: 'Explain how the structure of biological membranes influences selective permeability.',
                  keyConcepts: [
                    { id: 'u2t4ic1kc1', text: "Plasma membranes separate internal/external environments. Selective permeability results from the hydrophobic interior." },
                    { id: 'u2t4ic1kc2', text: "Small nonpolar molecules (N2, O2, CO2) pass freely. Hydrophilic substances (large polar molecules, ions) need transport proteins." },
                    { id: 'u2t4ic1kc3', text: "Small polar, uncharged molecules (H2O, NH3) pass in small amounts." }
                  ]
                },
                {
                  id: 'u2t4ic2',
                  text: 'Describe the role of the cell wall in maintaining cell structure and function.',
                  keyConcepts: [
                    { id: 'u2t4ic2kc1', text: "Cell walls (Bacteria, Archaea, Fungi, plants) provide structural boundaries, permeability barriers, and protection from osmotic lysis." }
                  ]
                }
              ]
            },
            {
              id: 'u2t5',
              name: 'Topic 2.5: Membrane Transport',
              iCanStatements: [
                {
                  id: 'u2t5ic1',
                  text: 'Describe the mechanisms that organisms use to maintain solute and water balance.',
                  keyConcepts: [
                    { id: 'u2t5ic1kc1', text: "Selective permeability creates concentration gradients." },
                    { id: 'u2t5ic1kc2', text: "Passive transport (high to low concentration) requires no metabolic energy." },
                    { id: 'u2t5ic1kc3', text: "Active transport (low to high concentration) requires direct energy input." }
                  ]
                },
                {
                  id: 'u2t5ic2',
                  text: 'Describe the mechanisms that organisms use to transport large molecules across the plasma membrane.',
                  keyConcepts: [
                    { id: 'u2t5ic2kc1', text: "Endocytosis and exocytosis (both require energy) transport large molecules or large amounts of substances." }
                  ]
                }
              ]
            },
            {
              id: 'u2t6',
              name: 'Topic 2.6: Facilitated Diffusion',
              iCanStatements: [
                {
                  id: 'u2t6ic1',
                  text: "Explain how the structure of a molecule affects its ability to pass through the plasma membrane.",
                  keyConcepts: [
                    { id: 'u2t6ic1kc1', text: "Facilitated diffusion uses transport/channel proteins for charged ions (Na+, K+) and large polar molecules, moving them down their concentration gradient without energy input." },
                    { id: 'u2t6ic1kc2', text: "Aquaporins transport large quantities of water." }
                  ]
                }
              ]
            },
            {
              id: 'u2t7',
              name: 'Topic 2.7: Tonicity and Osmoregulation',
              iCanStatements: [
                {
                  id: 'u2t7ic1',
                  text: 'Explain how concentration gradients affect the movement of molecules across membranes.',
                  keyConcepts: [
                    { id: 'u2t7ic1kc1', text: "External environments can be hypotonic, hypertonic, or isotonic. Water moves by osmosis from high water potential (low osmolarity/solute concentration) to low water potential (high osmolarity/solute concentration)." },
                  ]
                },
                {
                  id: 'u2t7ic2',
                  text: 'Explain how osmoregulatory mechanisms contribute to the health and survival of organisms.',
                  keyConcepts: [
                    { id: 'u2t7ic2kc1', text: "Constant molecular movement maintains growth and homeostasis." },
                    { id: 'u2t7ic2kc2', text: "Osmoregulation maintains water balance and controls internal solute composition/water potential (e.g., contractile vacuole, central vacuole)." },
                  ]
                }
              ]
            },
            {
              id: 'u2t8',
              name: 'Topic 2.8: Mechanisms of Transport',
              iCanStatements: [
                {
                  id: 'u2t8ic1',
                  text: 'Describe the processes that allow ions and other molecules to move across membranes.',
                  keyConcepts: [
                    { id: 'u2t8ic1kc1', text: "Active transport and electrochemical gradient maintenance require metabolic energy (ATP)." },
                    { id: 'u2t8ic1kc2', text: "Membrane proteins are essential for active transport (e.g., Na+/K+ pump, ATPase maintain membrane potential)." }
                  ]
                }
              ]
            },
            {
              id: 'u2t9',
              name: 'Topic 2.9: Cell Compartmentalization',
              iCanStatements: [
                {
                  id: 'u2t9ic1',
                  text: 'Explain how internal membranes and membrane bound organelles contribute to compartmentalization of eukaryotic cell functions.',
                  keyConcepts: [
                    { id: 'u2t9ic1kc1', text: "Eukaryotic membranes and organelles compartmentalize metabolic processes and enzymatic reactions." },
                    { id: 'u2t9ic1kc2', text: "Internal membranes minimize competing interactions and increase surface area for reactions." }
                  ]
                }
              ]
            },
            {
              id: 'u2t10',
              name: 'Topic 2.10: Origins of Cell Compartmentalization',
              iCanStatements: [
                {
                  id: 'u2t10ic1',
                  text: 'Describe similarities and/or differences in compartmentalization between prokaryotic and eukaryotic cells.',
                  keyConcepts: [
                    { id: 'u2t10ic1kc1', text: "Membrane-bound organelles (mitochondria, chloroplasts) evolved from free-living prokaryotes via endosymbiosis." },
                    { id: 'u2t10ic1kc2', text: "Prokaryotes lack internal membrane-bound organelles but have specialized internal regions." },
                    { id: 'u2t10ic1kc3', text: "Eukaryotes have extensive internal membrane systems for specialized regions." }
                  ]
                }
              ]
            }
        ]
    },
    {
      "id": "u3",
      "name": "Unit 3: Cellular Energetics",
      "examWeighting": "12-16%",
      "classPeriods": "~12-14",
      "keyUnderstanding": "Building on cell structure, this unit focuses on how living systems capture and use energy. You'll learn about enzyme structure and function, how environmental factors affect them, and the fundamental processes of photosynthesis and cellular respiration. This knowledge will be applied in Unit 6 to understand how cells fuel life processes.",
      "bigIdeas": [
        {
          "title": "Energetics (ENE)",
          "question": "How is energy captured and then used by a living system?"
        }
      ],
      "sciencePractices": "You'll support scientific claims with evidence (6.B, 6.C), understanding that evidence can come from principles, concepts, processes, or data. Focus on structure-function relationships, especially for enzymes, and how environmental factors affect reaction rates.",
      "examTips": "Understand metabolic pathways' inputs and outputs, and predict how changes affect them, organisms, and ecosystems. Avoid misconceptions like 'only animals respire'. Be ready to graph data and calculate reaction rates. Memorization of specific steps/molecules in Calvin cycle, glycolysis, Krebs cycle is beyond scope.",
      "vocabulary": [
        "enzyme structure", "active site", "substrate", "enzyme-mediated chemical reaction", "catalyst", "activation energy", "denaturation", "environmental temperature", "pH", "inhibitors", "competitive inhibitors", "noncompetitive inhibitors", "allosteric site", "energy input", "energy loss", "cellular processes", "metabolic pathways", "glycolysis", "oxidative phosphorylation", "common ancestry", "photosynthesis", "prokaryotic organisms", "cyanobacterial photosynthesis", "light-dependent reactions", "ATP", "NADPH", "organic molecules", "Calvin cycle", "stroma", "thylakoids", "grana", "chlorophylls", "photosystems I and II", "electron transport chain (ETC)", "electrochemical gradient"
      ],
      "topics": [
        {
            "id": "u3t1",
            "name": "Topic 3.1: Enzymes",
            "iCanStatements": [
                {
                    "id": "u3t1ic1",
                    "text": "Explain how enzymes affect the rate of biological reactions.",
                    "keyConcepts": [
                        {"id": "u3t1ic1kc1", "text": "Enzymes are protein catalysts that lower activation energy."},
                        {"id": "u3t1ic1kc2", "text": "For a reaction to occur, the substrate's shape and charge must be compatible with the enzyme's active site (enzyme-substrate complex model)."}
                    ]
                }
            ]
        },
        {
            "id": "u3t2",
            "name": "Topic 3.2: Environmental Impacts on Enzyme Function",
            "iCanStatements": [
                {
                    "id": "u3t2ic1",
                    "text": "Explain how changes to the structure of an enzyme may affect its function.",
                    "keyConcepts": [
                        {"id": "u3t2ic1kc1", "text": "Changes to enzyme molecular structure alter function/efficiency. Denaturation (by temperature, pH, chemicals) disrupts protein structure, eliminating catalytic ability."}
                    ]
                },
                {
                    "id": "u3t2ic2",
                    "text": "Explain how the cellular environment affects enzyme activity.",
                    "keyConcepts": [
                        {"id": "u3t2ic2kc1", "text": "Environmental temperatures and pH outside optimal range disrupt hydrogen bonds, altering efficiency."},
                        {"id": "u3t2ic2kc2", "text": "Substrate/product concentrations affect efficiency."},
                        {"id": "u3t2ic2kc3", "text": "Higher temperatures increase collision frequency, increasing reaction rate until optimum is passed."},
                        {"id": "u3t2ic2kc4", "text": "Competitive inhibitors bind to the active site; noncompetitive inhibitors bind to allosteric sites, changing enzyme activity."}
                    ]
                }
            ]
        },
        {
            "id": "u3t3",
            "name": "Topic 3.3: Cellular Energy",
            "iCanStatements": [
                {
                    "id": "u3t3ic1",
                    "text": "Describe the role of energy in living organisms.",
                    "keyConcepts": [
                        {"id": "u3t3ic1kc1", "text": "All living systems need continuous energy input. Life is highly ordered and follows thermodynamics laws; energy input must exceed loss to maintain order."},
                        {"id": "u3t3ic1kc2", "text": "Loss of order/energy flow leads to death."},
                        {"id": "u3t3ic1kc3", "text": "Energy pathways are sequential for controlled transfer."}
                    ]
                },
                {
                    "id": "u3t3ic2",
                    "text": "Explain how shared, conserved, and fundamental processes and features support the concept of common ancestry for all organisms.",
                    "keyConcepts": [
                        {"id": "u3t3ic2kc1", "text": "Core metabolic pathways (glycolysis, oxidative phosphorylation) are conserved across Archaea, Bacteria, Eukarya, supporting common ancestry."}
                    ]
                }
            ]
        },
        {
            "id": "u3t4",
            "name": "Topic 3.4: Photosynthesis",
            "iCanStatements": [
                {
                    "id": "u3t4ic1",
                    "text": "Describe the photosynthetic processes and structural features of the chloroplast that allow organisms to capture and store energy.",
                    "keyConcepts": [
                        {"id": "u3t4ic1kc1", "text": "Photosynthesis uses CO2, H2O, light to make carbohydrates and O2."},
                        {"id": "u3t4ic1kc2", "text": "Photosynthesis evolved in prokaryotes (cyanobacteria oxygenated early Earth)."},
                        {"id": "u3t4ic1kc3", "text": "In eukaryotes, chloroplasts have stroma (Calvin cycle) and thylakoid membranes (grana, chlorophyll, photosystems I & II, ETC)."}
                    ]
                },
                {
                    "id": "u3t4ic2",
                    "text": "Explain how cells capture energy from light and transfer it to biological molecules for storage and use.",
                    "keyConcepts": [
                        {"id": "u3t4ic2kc1", "text": "Light reactions (in grana) capture light energy to produce ATP and NADPH."},
                        {"id": "u3t4ic2kc2", "text": "Chlorophylls absorb light, exciting electrons. Water splits to replace electrons in Photosystem II."},
                        {"id": "u3t4ic2kc3", "text": "ETC transfers electrons, creating a proton gradient across thylakoid membrane."},
                        {"id": "u3t4ic2kc4", "text": "Proton flow through ATP synthase (chemiosmosis/photophosphorylation) synthesizes ATP."},
                        {"id": "u3t4ic2kc5", "text": "ATP and NADPH power Calvin cycle (in stroma) to produce carbohydrates."}
                    ]
                }
            ]
        },
        {
            "id": "u3t5",
            "name": "Topic 3.5: Cellular Respiration",
            "iCanStatements": [
                {
                    "id": "u3t5ic1",
                    "text": "Describe the processes and structural features of mitochondria that allow organisms to use energy stored in biological macromolecules.",
                    "keyConcepts": [
                        {"id": "u3t5ic1kc1", "text": "Cellular respiration and fermentation (universal processes) use energy from macromolecules to make ATP."},
                        {"id": "u3t5ic1kc2", "text": "Aerobic respiration in eukaryotes involves enzyme-catalyzed reactions."},
                        {"id": "u3t5ic1kc3", "text": "ETC transfers electrons (from NADH, FADH2) to establish an electrochemical gradient across membranes."}
                    ]
                },
                {
                    "id": "u3t5ic2",
                    "text": "Explain how cells obtain energy from biological macromolecules in order to power cellular functions.",
                    "keyConcepts": [
                        {"id": "u3t5ic2kc1", "text": "In aerobic respiration, oxygen is the terminal electron acceptor; anaerobic prokaryotes use others."},
                        {"id": "u3t5ic2kc2", "text": "Proton gradient forms across inner mitochondrial membrane (or plasma membrane in prokaryotes). Inner membrane folding increases surface area for ATP synthesis."},
                        {'id': 'u3t5ic2kc3', text: 'Proton flow through ATP synthase (chemiosmosis/oxidative phosphorylation) makes ATP.'},
                        {'id': 'u3t5ic2kc4', text: 'Decoupling generates heat (for endotherms).'},
                        {'id': 'u3t5ic2kc5', text: 'Glycolysis breaks glucose to ATP, NADH, pyruvate.'},
                        {'id': 'u3t5ic2kc6', text: 'Pyruvate enters mitochondrion for further oxidation (Krebs cycle), releasing CO2, ATP, NADH, FADH2. Electrons from glycolysis/Krebs go to ETC in inner mitochondrial membrane.'},
                        {'id': 'u3t5ic2kc7', text: 'Fermentation allows glycolysis without oxygen, producing alcohol/lactic acid.'}
                    ]
                }
            ]
        }
      ]
    },
    {
      "id": "u4",
      "name": "Unit 4: Cell Communication and Cell Cycle",
      "examWeighting": "10-15%",
      "classPeriods": "~12-14",
      "keyUnderstanding": "This unit explores how cells use energy and information to communicate and replicate. Cells communicate via complex signal transduction pathways, allowing them to generate/receive signals, coordinate growth, and respond to environmental cues for homeostasis. You'll also learn about cell replication and cell cycle regulation, which are fundamental for life's continuity and lead into Unit 5 on heredity.",
      "bigIdeas": [
        {
          "title": "Energetics (ENE)",
          "question": "In what ways do cells use energy to communicate with one another?"
        },
        {
          "title": "Information Storage and Transmission (IST)",
          "question": "How does the cell cycle aid in the conservation of genetic information? How do different types of cells communicate with one another?"
        }
      ],
      "sciencePractices": "You'll describe and explain cell cycle regulation (1.A, 1.B). Lab investigations on the cell cycle will help you formulate and devise plans for scientific questions.",
      "examTips": "Understand the significance of each step in cell signaling pathways. Use cell signaling principles to explain drug function or disease symptoms. Be prepared to predict effects of cell cycle disruptions and explain checkpoint purpose/timing. Be ready for comparative questions on mitosis and meiosis.",
      "vocabulary": [
        "direct contact", "chemical signaling", "local regulators", "neurotransmitters", "plant immune response", "quorum sensing", "morphogens", "hormones", "insulin", "human growth hormone", "thyroid hormone", "testosterone", "estrogen", "immune cells", "antigen-presenting cells (APCs)", "helper T-cells", "killer T-cells", "signal transduction pathway", "protein modification", "phosphorylation cascades", "ligand", "receptor protein", "G protein-coupled receptor", "ligand-binding domain", "ligand-gated channels", "intracellular domain", "second messengers", "cyclic AMP (cAMP)", "cell growth", "secretion of molecules", "gene expression", "apoptosis", "mutations", "feedback mechanisms", "homeostasis", "negative feedback", "positive feedback", "blood sugar regulation", "lactation", "childbirth", "fruit ripening", "cell cycle", "eukaryotic cell", "interphase", "G1 phase", "S phase", "G2 phase", "mitosis", "cytokinesis", "G0", "prophase", "metaphase", "anaphase", "telophase", "cleavage furrow", "cell plate", "checkpoints", "cyclins", "cyclin-dependent kinases (CdKs)", "cancer"
      ],
      "topics": [
        {
          "id": "u4t1",
          "name": "Topic 4.1: Cell Communication",
          "iCanStatements": [
            {
              "id": "u4t1ic1",
              "text": "Explain how cells communicate with one another over short and long distances.",
              "keyConcepts": [
                {"id": "u4t1ic1kc1", "text": "Cells communicate via direct contact or chemical signaling."},
                {"id": "u4t1ic1kc2", "text": "Short-distance communication uses local regulators (e.g., neurotransmitters, quorum sensing)."},
                {"id": "u4t1ic1kc3", "text": "Long-distance communication uses signals like hormones (e.g., insulin, estrogen)."},
                {"id": "u4t1ic1kc4", "text": "Cell-to-cell contact examples include immune cell interactions."}
              ]
            }
          ]
        },
        {
          "id": "u4t2",
          "name": "Topic 4.2: Introduction to Signal Transduction",
          "iCanStatements": [
            {
              "id": "u4t2ic1",
              "text": "Describe the components of a signal transduction pathway.",
              "keyConcepts": [
                  {"id": "u4t2ic1kc1", "text": "Signal transduction pathways link signal reception to cellular responses, often involving protein modifications and phosphorylation cascades."}
              ]
            },
             {
              "id": "u4t2ic2",
              "text": "Describe the role of components of a signal transduction pathway in producing a cellular response.",
              "keyConcepts": [
                  {"id": "u4t2ic2kc1", "text": "Signaling begins when a ligand binds to a specific receptor protein (on surface or inside cell)."},
                  {"id": "u4t2ic2kc2", "text": "Ligand binding changes receptor shape, initiating signal transduction."},
                  {"id": "u4t2ic2kc3", "text": "Enzymes and second messengers (like cAMP) relay and amplify the signal, leading to responses like cell growth or gene expression."},
                  {"id": "u4t2ic2kc4", "text": "Ligand-gated channels open/close upon ligand binding."}
              ]
            }
          ]
        },
        {
            "id": "u4t3",
            "name": "Topic 4.3: Signal Transduction Pathways",
            "iCanStatements": [
                {
                    "id": "u4t3ic1",
                    "text": "Describe the different types of cellular responses elicited by a signal transduction pathway.",
                    "keyConcepts": [
                        {"id": "u4t3ic1kc1", "text": "Signal transduction can change gene expression, cell function, phenotype, or lead to apoptosis."}
                    ]
                },
                {
                    "id": "u4t3ic2",
                    "text": "Explain how a change in the structure of any signaling molecule affects the activity of the signaling pathway.",
                    "keyConcepts": [
                        {"id": "u4t3ic2kc1", "text": "Mutations or changes in any signaling pathway component (e.g., receptor protein domain) can alter signal transduction."},
                        {"id": "u4t3ic2kc2", "text": "Chemicals can activate or inhibit pathways."}
                    ]
                }
            ]
        },
        {
            "id": "u4t4",
            "name": "Topic 4.4: Feedback",
            "iCanStatements": [
                {
                    "id": "u4t4ic1",
                    "text": "Explain how positive and negative feedback helps maintain homeostasis.",
                    "keyConcepts": [
                        {"id": "u4t4ic1kc1", "text": "Organisms use feedback to maintain internal environments."},
                        {"id": "u4t4ic1kc2", "text": "Negative feedback reduces initial stimulus to return a system to a set point (e.g., blood sugar regulation)."},
                        {"id": "u4t4ic1kc3", "text": "Positive feedback amplifies responses, moving the variable further from the set point (e.g., lactation, labor, fruit ripening)."}
                    ]
                }
            ]
        },
        {
            "id": "u4t5",
            "name": "Topic 4.5: Cell Cycle",
            "iCanStatements": [
                {
                    "id": "u4t5ic1",
                    "text": "Describe the events that occur in the cell cycle.",
                    "keyConcepts": [
                        {"id": "u4t5ic1kc1", "text": "The cell cycle (eukaryotic growth/reproduction) has interphase (G1, S, G2), mitosis, and cytokinesis."},
                        {"id": "u4t5ic1kc2", "text": "G1: cell metabolically active, organelle duplication. S: DNA replicates (chromatin to sister chromatids). G2: protein synthesis, ATP production, centrosome replication."},
                        {"id": "u4t5ic1kc3", "text": "Cells can enter non-dividing G0."}
                    ]
                },
                {
                    "id": "u4t5ic2",
                    "text": "Explain how mitosis results in the transmission of chromosomes from one generation of cells to the next.",
                    "keyConcepts": [
                        {"id": "u4t5ic2kc1", "text": "Mitosis (prophase, metaphase, anaphase, telophase) ensures complete genome transfer to two identical daughter cells, vital for growth, repair, asexual reproduction."},
                        {"id": "u4t5ic2kc2", "text": "Cytokinesis divides cytoplasm (cleavage furrow/cell plate)."}
                    ]
                }
            ]
        },
        {
            "id": "u4t6",
            "name": "Topic 4.6: Regulation of Cell Cycle",
            "iCanStatements": [
                {
                    "id": "u4t6ic1",
                    "text": "Describe the role of checkpoints in regulating the cell cycle.",
                    "keyConcepts": [
                        {"id": "u4t6ic1kc1", "text": "Cell cycle progression is regulated by internal checkpoints."},
                        {"id": "u4t6ic1kc2", "text": "Cyclins and cyclin-dependent kinases (CdKs) control the cycle."}
                    ]
                },
                {
                    "id": "u4t6ic2",
                    "text": "Describe the effects of disruptions to the cell cycle on the cell or organism.",
                    "keyConcepts": [
                        {"id": "u4t6ic2kc1", "text": "Disruptions can lead to uncontrolled cell proliferation (cancer) or programmed cell death (apoptosis)."}
                    ]
                }
            ]
        }
      ]
    },
    {
      "id": "u5",
      "name": "Unit 5: Heredity",
      "examWeighting": "8-11%",
      "classPeriods": "~8-10",
      "keyUnderstanding": "This unit explores heredity and the processes ensuring life's continuity. You'll learn how genetic information is transmitted via chromosomes through meiosis, a process crucial for genetic diversity. You'll also delve into Mendelian and non-Mendelian genetics, and the roles of chromosomal inheritance, environmental factors, and nondisjunction in shaping phenotype.",
      "bigIdeas": [
        {
          "title": "Evolution (EVO)",
          "question": "How is our understanding of evolution influenced by our knowledge of genetics?"
        },
        {
          "title": "Information Storage and Transmission (IST)",
          "question": "Why is it important that not all inherited characteristics get expressed in the next generation? How might Mendel's laws have been affected if he had studied a different type of plant?"
        },
        {
          "title": "Systems Interactions (SYI)",
          "question": "How does the diversity of a species affect inheritance?"
        }
      ],
      "sciencePractices": "You'll describe data (4.B), identify patterns/trends, formulate testable questions (3.A), and apply chi-square tests (5.C) to genetic data. Understand the null hypothesis and when to reject/fail to reject it.",
      "examTips": "Analyze and construct models of chromosomal exchange to predict outcomes. Accurately calculate genotypic and phenotypic ratios. Expect to calculate and interpret chi-square values. Clearly identify the null hypothesis and understand criteria for rejecting/failing to reject it.",
      "vocabulary": [
        "genetic information", "chromosomes", "meiosis", "genetic diversity", "Mendelian genetics", "non-Mendelian genetics", "chromosomal inheritance", "environmental factors", "nondisjunction", "phenotype", "genotype", "DNA", "RNA", "ribosomes", "genetic code", "metabolic pathways", "common ancestry", "laws of segregation", "independent assortment", "fertilization", "haploid gametes", "diploid number", "genetic variation", "alleles", "zygote", "rules of probability", "single-gene traits", "monohybrid cross", "dihybrid cross", "test cross", "homozygous", "heterozygous", "autosomal", "genetically linked", "sex-linked traits", "pedigrees", "Punnett squares", "quantitative analysis", "map distance (map units)", "gene mapping", "codominance", "incomplete dominance", "pleiotropy", "non-nuclear inheritance", "chloroplasts", "mitochondria", "maternally inherited", "sex determination", "X-linked recessive traits", "phenotypic plasticity", "gene expression", "mutated allele", "triploidy", "aneuploidy", "Down syndrome/Trisomy 21", "Turner syndrome"
      ],
      "topics": [
          {
              "id": "u5t1",
              "name": "Topic 5.1: Meiosis",
              "iCanStatements": [
                  {
                      "id": "u5t1ic1",
                      "text": "Explain how meiosis results in the transmission of chromosomes from one generation to the next.",
                      "keyConcepts": [
                          {"id": "u5t1ic1kc1", "text": "Meiosis forms haploid gamete cells in sexually reproducing diploid organisms."},
                          {"id": "u5t1ic1kc2", "text": "Meiosis I (Prophase I, Metaphase I, Anaphase I, Telophase I/Cytokinesis) produces two haploid daughter cells."},
                          {"id": "u5t1ic1kc3", "text": "Meiosis II (Prophase II, Metaphase II, Anaphase II, Telophase II/Cytokinesis) produces four haploid daughter cells, each with unduplicated chromatids."}
                      ]
                  },
                  {
                      "id": "u5t1ic2",
                      "text": "Describe similarities and differences between the phases and outcomes of mitosis and meiosis.",
                      "keyConcepts": [
                          {"id": "u5t1ic2kc1", "text": "Both mitosis and meiosis use a spindle apparatus for chromosome movement but differ in cell number and genetic content of resulting daughter cells."}
                      ]
                  }
              ]
          },
          {
              "id": "u5t2",
              "name": "Topic 5.2: Meiosis and Genetic Diversity",
              "iCanStatements": [
                  {
                      "id": "u5t2ic1",
                      "text": "Explain how the process of meiosis generates genetic diversity.",
                      "keyConcepts": [
                          {"id": "u5t2ic1kc1", "text": "Correct separation in Meiosis I/II ensures haploid gametes with maternal/paternal chromosome assortment."},
                          {"id": "u5t2ic1kc2", "text": "Nondisjunction leads to non-haploid gametes."},
                          {"id": "u5t2ic1kc3", "text": "Crossing over (recombination) in Prophase I increases genetic diversity."},
                          {"id": "u5t2ic1kc4", "text": "Sexual reproduction (crossing over, random assortment, random fertilization) enhances genetic variation."}
                      ]
                  }
              ]
          },
          {
              "id": "u5t3",
              "name": "Topic 5.3: Mendelian Genetics",
              "iCanStatements": [
                  {
                      "id": "u5t3ic1",
                      "text": "Explain the inheritance of genes and traits as described by Mendel's laws.",
                      "keyConcepts": [
                          {"id": "u5t3ic1kc1", "text": "Mendel's laws (segregation, independent assortment) apply to genes on different chromosomes."},
                          {"id": "u5t3ic1kc2", "text": "Fertilization restores diploid number and increases variation."},
                          {"id": "u5t3ic1kc3", "text": "Probability rules analyze single-gene traits."},
                          {"id": "u5t3ic1kc4", "text": "Monohybrid, dihybrid, test crosses determine dominance."},
                          {"id": "u5t3ic1kc5", "text": "Genotype (alleles) can be homozygous/heterozygous; phenotype is observable trait."},
                          {"id": "u5t3ic1kc6", "text": "Inheritance patterns (autosomal, linked, sex-linked, dominant/recessive) are predicted from data (pedigrees, Punnett squares)."}
                      ]
                  }
              ]
          },
          {
              "id": "u5t4",
              "name": "Topic 5.4: Non-Mendelian Genetics",
              "iCanStatements": [
                  {
                      "id": "u5t4ic1",
                      "text": "Explain deviations from Mendel's model of the inheritance of traits.",
                      "keyConcepts": [
                          {"id": "u5t4ic1kc1", "text": "Many traits don't follow Mendelian ratios (identified by quantitative analysis)."},
                          {"id": "u5t4ic1kc2", "text": "Genetically linked genes (on same chromosome) segregate together; map distance calculated by gene mapping."},
                          {"id": "u5t4ic1kc3", "text": "Codominance: both alleles fully expressed. Incomplete dominance: blended phenotype."},
                          {"id": "u5t4ic1kc4", "text": "Sex-linked traits (X/Y-linked) on sex chromosomes (e.g., X-linked recessive in males)."},
                          {"id": "u5t4ic1kc5", "text": "Pleiotropy: single gene affects multiple traits."},
                          {"id": "u5t4ic1kc6", "text": "Non-nuclear inheritance: chloroplast/mitochondrial DNA traits don't follow Mendelian rules (maternally inherited in animals/plants)."}
                      ]
                  }
              ]
          },
          {
              "id": "u5t5",
              "name": "Topic 5.5: Environmental Effects on Phenotype",
              "iCanStatements": [
                  {
                      "id": "u5t5ic1",
                      "text": "Explain how the same genotype can result in multiple phenotypes under different environmental conditions.",
                      "keyConcepts": [
                          {"id": "u5t5ic1kc1", "text": "Environmental conditions influence gene expression, leading to phenotypic plasticity (same genotype, different phenotypes in different environments)."},
                          {"id": "u5t5ic1kc2", "text": "Examples: human height/weight, flower color (soil pH), seasonal fur color, reptile sex determination, UV effect on melanin, mating type influence on yeast pheromones."}
                      ]
                  }
              ]
          }
      ]
    },
    {
      "id": "u6",
      "name": "Unit 6: Gene Expression and Regulation",
      "examWeighting": "12-16%",
      "classPeriods": "~18-20",
      "keyUnderstanding": "Progressing from the continuity of life to gene expression, students gain in-depth knowledge about nucleic acids and their role in gene expression in this unit. There is also a finer focus on the comparison between the structures of DNA and RNA. This unit highlights how an individual's genotype is physically expressed through their phenotype, thus emphasizing the importance of protein synthesis (transcription and translation) in gene expression. Regulation of gene expression and cell specialization are instrumental in ensuring survival within an individual and across populations. Unit 7 moves on to cover natural selection.",
      "bigIdeas": [
        {
          "title": "Information Storage and Transmission (IST)",
          "question": "How does gene regulation relate to the continuity of life? How is the genetic information of a species diversified from generation to generation?"
        }
      ],
      "sciencePractices": "You'll describe, analyze, and create models/representations (2.B, 2.C, 2.D) to explain biological processes and make predictions. You'll make scientific claims, support them with evidence, and provide reasoning (6.A, 6.B, 6.D, 6.E), including predicting effects of disruptions.",
      "examTips": "Understand the difference between a 'gene' and an 'allele.' Gene expression occurs at multiple levels. Use the lac operon as an example of positive gene regulation. When connecting molecular changes to phenotypic changes, provide clear reasoning. Understand that mutation location affects protein structure/function. Not all mutations cause denaturation or frameshifts, and not all are negative. Be exposed to neutral/beneficial mutations.",
      "vocabulary": [
        "nucleic acids", "gene expression", "DNA", "RNA", "genotype", "phenotype", "protein synthesis", "transcription", "translation", "gene regulation", "cell specialization", "hereditary information", "circular chromosomes", "linear chromosomes", "histones", "associated proteins", "plasmids", "extra-chromosomal DNA", "nucleotide base pairing", "purines", "pyrimidines", "adenine", "guanine", "cytosine", "thymine", "uracil", "5' to 3' direction", "semiconservative replication", "helicase", "topoisomerase", "DNA polymerase", "RNA primers", "leading strand", "lagging strand", "Okazaki fragments", "ligase", "central dogma", "messenger RNA (mRNA)", "transfer RNA (tRNA)", "anticodon", "ribosomal RNA (rRNA)", "RNA polymerases", "template DNA strand", "poly-A tail", "GTP cap", "introns", "exons", "splicing", "alternative splicing", "ribosomes", "cytoplasm", "rough endoplasmic reticulum", "initiation", "elongation", "termination", "start codon (AUG)", "methionine", "codons", "genetic code chart", "stop codon", "polypeptide", "retroviruses", "reverse transcriptase", "host genome", "viral progeny", "regulatory sequences", "regulatory proteins", "transcription", "constitutively expressed", "inducible", "epigenetic changes", "reversible modifications", "histones", "differential gene expression", "cell differentiation", "tissue-specific proteins", "transcription factors", "operons", "lac operon", "repressible system", "small RNA molecules", "mutations", "point mutations", "frameshift mutations", "nonsense mutations", "silent mutations", "genetic variation", "DNA replication errors", "DNA repair mechanisms", "radiation", "reactive chemicals", "mitosis", "meiosis", "chromosome number changes", "nondisjunction", "triploidy", "aneuploidy", "human disorders", "chromosome structure alterations", "natural selection", "horizontal acquisition of genetic information", "transformation", "transduction", "conjugation", "transposition", "genetic recombination", "CFTR gene", "cystic fibrosis", "MC1R gene", "adaptive melanism", "pocket mice", "antibiotic resistance", "pesticide resistance", "herbicide resistance", "chemotherapy drugs", "sickle cell anemia", "heterozygote advantage", "genetic engineering", "gel electrophoresis", "polymerase chain reaction (PCR)", "bacterial transformation", "DNA sequencing", "DNA fingerprint", "phylogenetic analysis", "forensic identification", "genetically modified organisms", "transgenic animals", "gene cloning"
      ],
      "topics": [
        {
          "id": "u6t1",
          "name": "Topic 6.1: DNA and RNA Structure",
          "iCanStatements": [
              {
                  "id": "u6t1ic1",
                  "text": "Describe the structures involved in passing hereditary information from one generation to the next.",
                  "keyConcepts": [
                      {"id": "u6t1ic1kc1", "text": "Genetic information is stored/passed via DNA (sometimes RNA)."},
                      {"id": "u6t1ic1kc2", "text": "Prokaryotes have circular chromosomes; eukaryotes have multiple linear chromosomes (DNA condensed with histones). Both can have plasmids."}
                  ]
              },
              {
                  "id": "u6t1ic2",
                  "text": "Describe the characteristics of DNA that allow it to be used as hereditary material.",
                  "keyConcepts": [
                      {"id": "u6t1ic2kc1", "text": "Nucleic acids show conserved base pairing: purines (G, A) are double-ring; pyrimidines (C, T, U) are single-ring."},
                      {"id": "u6t1ic2kc2", "text": "A pairs with T (or U in RNA); G pairs with C."}
                  ]
              }
          ]
        },
        {
          "id": "u6t2",
          "name": "Topic 6.2: DNA Replication",
          "iCanStatements": [
            {
              "id": "u6t2ic1",
              "text": "Describe the mechanisms by which genetic information is copied for transmission between generations.",
              "keyConcepts": [
                { "id": "u6t2ic1kc1", "text": "DNA replication ensures hereditary continuity. DNA synthesis is 5' to 3'." },
                { "id": "u6t2ic1kc2", "text": "Replication is semiconservative (one old, one new strand)." },
                { "id": "u6t2ic1kc3", "text": "Helicase unwinds DNA; topoisomerase relaxes supercoiling." },
                { "id": "u6t2ic1kc4", "text": "DNA polymerase needs RNA primers, synthesizes continuously on leading strand, discontinuously (Okazaki fragments) on lagging strand." },
                { "id": "u6t2ic1kc5", "text": "Ligase joins fragments." }
              ]
            }
          ]
        },
        {
          "id": "u6t3",
          "name": "Topic 6.3: Transcription and RNA Processing",
          "iCanStatements": [
            {
              "id": "u6t3ic1",
              "text": "Describe the mechanisms by which genetic information flows from DNA to RNA to protein.",
              "keyConcepts": [
                { "id": "u6t3ic1kc1", "text": "RNA function depends on base sequence and structure." },
                { "id": "u6t3ic1kc2", "text": "mRNA carries info from DNA to ribosome. tRNA brings specific amino acids to ribosome (anticodon pairs with mRNA codon). rRNA is a ribosomal building block." },
                { "id": "u6t3ic1kc3", "text": "RNA polymerases synthesize mRNA (5' to 3') from DNA template (3' to 5')." },
                { "id": "u6t3ic1kc4", "text": "Eukaryotic mRNA undergoes modifications: poly-A tail (stability), GTP cap (ribosomal recognition), intron excision, exon splicing (alternative splicing creates different mRNA versions)." }
              ]
            }
          ]
        },
        {
          "id": "u6t4",
          "name": "Topic 6.4: Translation",
          "iCanStatements": [
            {
              "id": "u6t4ic1",
              "text": "Explain how the phenotype of an organism is determined by its genotype.",
              "keyConcepts": [
                { "id": "u6t4ic1kc1", "text": "Translation (polypeptide synthesis from mRNA) occurs on ribosomes (cytoplasm, rough ER). In prokaryotes, translation can begin during transcription." },
                { "id": "u6t4ic1kc2", "text": "Translation has initiation, elongation, termination. Initiation: rRNA interacts with mRNA at start codon (AUG)." },
                { "id": "u6t4ic1kc3", "text": "mRNA codons (triplets) specify amino acids (genetic code chart). Genetic code is nearly universal (common ancestry evidence)." },
                { "id": "u6t4ic1kc4", "text": "Elongation: tRNA brings correct amino acid. Termination: stop codon reached, polypeptide released." },
                { "id": "u6t4ic1kc5", "text": "Retroviruses have alternate flow (RNA to DNA via reverse transcriptase); viral DNA integrates into host genome for replication." }
              ]
            }
          ]
        },
        {
          "id": "u6t5",
          "name": "Topic 6.5: Regulation of Gene Expression",
          "iCanStatements": [
            {
              "id": "u6t5ic1",
              "text": "Describe the types of interactions that regulate gene expression.",
              "keyConcepts": [
                { "id": "u6t5ic1kc1", "text": "Gene expression is regulated by DNA regulatory sequences interacting with proteins (some genes constitutive, some inducible)." },
                { "id": "u6t5ic1kc2", "text": "Epigenetic changes (reversible DNA/histone modifications) affect expression." },
                { "id": "u6t5ic1kc3", "text": "Phenotype is determined by expressed genes and their levels." },
                { "id": "u6t5ic1kc4", "text": "Cell differentiation results from tissue-specific gene expression." }
              ]
            },
            {
              "id": "u6t5ic2",
              "text": "Explain how the location of regulatory sequences relates to their function.",
              "keyConcepts": [
                { "id": "u6t5ic2kc1", "text": "Coordinated gene regulation exists in prokaryotes (operons, e.g., lac operon) and eukaryotes (same transcription factors)." }
              ]
            }
          ]
        },
        {
          "id": "u6t6",
          "name": "Topic 6.6: Gene Expression and Cell Specialization",
          "iCanStatements": [
            {
              "id": "u6t6ic1",
              "text": "Explain how the binding of transcription factors to promoter regions affects gene expression and the phenotype of the organism.",
              "keyConcepts": [
                { "id": "u6t6ic1kc1", "text": "RNA polymerase and transcription factors bind to promoter/enhancer DNA sequences (upstream/downstream) to initiate transcription." },
                { "id": "u6t6ic1kc2", "text": "Negative regulatory molecules inhibit expression by blocking transcription." }
              ]
            },
            {
              "id": "u6t6ic2",
              "text": "Explain the connection between the regulation of gene expression and phenotypic differences in cells and organisms.",
              "keyConcepts": [
                { "id": "u6t6ic2kc1", "text": "Gene regulation leads to differential gene expression, influencing cell products/functions and phenotypic differences." },
                { "id": "u6t6ic2kc2", "text": "Small RNA molecules also regulate gene expression." }
              ]
            }
          ]
        },
        {
          "id": "u6t7",
          "name": "Topic 6.7: Mutations",
          "iCanStatements": [
            {
              "id": "u6t7ic1",
              "text": "Describe the various types of mutation.",
              "keyConcepts": [
                { "id": "u6t7ic1kc1", "text": "DNA sequence alterations (mutations) change protein type/amount, affecting phenotype. Mutations can be beneficial, detrimental, or neutral." },
                { "id": "u6t7ic1kc2", "text": "Types: point (substitution), frameshift (insertion/deletion), nonsense (premature stop), silent (no amino acid change)." }
              ]
            },
            {
              "id": "u6t7ic2",
              "text": "Explain how changes in genotype may result in changes in phenotype.",
              "keyConcepts": [
                { "id": "u6t7ic2kc1", "text": "Random mutations arise from replication/repair errors or external factors (radiation, chemicals); they are primary source of genetic variation." },
                { "id": "u6t7ic2kc2", "text": "Errors in mitosis/meiosis (e.g., nondisjunction leading to triploidy/aneuploidy, chromosome structural changes) cause phenotypic changes." }
              ]
            },
            {
              "id": "u6t7ic3",
              "text": "Explain how alterations in DNA sequences contribute to variation that can be subject to natural selection.",
              "keyConcepts": [
                { "id": "u6t7ic3kc1", "text": "Genotype changes affect phenotypes subject to natural selection." },
                { "id": "u6t7ic3kc2", "text": "Horizontal gene transfer in prokaryotes (transformation, transduction, conjugation, transposition) increases variation." },
                { "id": "u6t7ic3kc3", "text": "Viruses can recombine genetic info. Reproductive processes increasing variation are conserved." }
              ]
            }
          ]
        },
        {
          "id": "u6t8",
          "name": "Topic 6.8: Biotechnology",
          "iCanStatements": [
            {
              "id": "u6t8ic1",
              "text": "Explain the use of genetic engineering techniques in analyzing or manipulating DNA.",
              "keyConcepts": [
                { "id": "u6t8ic1kc1", "text": "Genetic engineering techniques analyze/manipulate DNA/RNA." },
                { "id": "u6t8ic1kc2", "text": "Gel electrophoresis separates DNA by size/charge. PCR amplifies DNA fragments." },
                { "id": "u6t8ic1kc3", "text": "Bacterial transformation introduces foreign DNA. DNA sequencing determines nucleotide order (DNA fingerprint for comparison, forensic ID, phylogenetic analysis)." },
                { "id": "u6t8ic1kc4", "text": "Applications include genetically modified organisms (transgenic animals) and gene cloning." }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "u7",
      "name": "Unit 7: Natural Selection",
      "examWeighting": "13-20%",
      "classPeriods": "~19-21",
      "keyUnderstanding": "This unit introduces natural selection as the main driver of evolution, where better-adapted populations survive and reproduce, changing their genetic makeup. You'll explore evidence and mechanisms of evolutionary change, and consequences of failing to adapt. The Hardy-Weinberg equilibrium is a model for non-evolving populations, allowing you to calculate and interpret allele frequencies. This unit's principles connect directly to Unit 8 on ecology.",
      "bigIdeas": [
        {
          "title": "Evolution (EVO)",
          "question": "What conditions in a population make it more or less likely to evolve? Scientifically defend the theory of evolution."
        },
        {
          "title": "Systems Interactions (SYI)",
          "question": "How does species interaction encourage or slow changes in species?"
        }
      ],
      "sciencePractices": "You'll describe visual models (2.A), and analyze/create phylogenetic trees and cladograms (2.D) to discuss biological phenomena. Apply Hardy-Weinberg equations (5.A), distinguishing allele from genotype frequencies. Predict changes in populations and justify predictions with reasoning.",
      "examTips": "Use precise language for evolution, avoiding Lamarckian statements or buzzwords like 'fitness' without explanation. Understand that genetic variation is necessary for natural selection. Natural selection acts on individuals, but populations evolve. Clearly differentiate reproductive isolating mechanisms leading to speciation.",
      "vocabulary": [
        "natural selection", "evolution", "populations", "genetic makeup", "Hardy-Weinberg equilibrium", "allele frequencies", "phenotypic variation", "evolutionary fitness", "reproductive success", "biotic environment", "abiotic environment", "genetic variations", "selective pressures", "flowering time", "global climate change", "peppered moth", "sickle cell anemia", "DDT resistance", "artificial selection", "convergent evolution", "random occurrences", "mutation", "genetic drift", "nonselective process", "small populations", "bottleneck effect", "founder effect", "migration", "gene flow", "genetic variation", "geographical data", "geological data", "physical data", "biochemical data", "mathematical data", "molecular evidence", "morphological evidence", "genetic evidence", "extant organisms", "extinct organisms", "fossils", "carbon-14", "morphological homologies", "vestigial structures", "DNA nucleotide sequences", "protein amino acid sequences", "common ancestry", "membrane-bound organelles", "linear chromosomes", "introns", "genomic changes", "fossil record", "antibiotic resistance", "pesticide resistance", "herbicide resistance", "chemotherapy drugs", "pathogens", "emergent diseases", "phylogenetic trees", "cladograms", "hypothetical evolutionary relationships", "lineages", "molecular clock", "shared derived characters", "out-group", "nodes", "speciation", "reproductively isolated", "biological species concept", "viable", "fertile offspring", "punctuated equilibrium", "stasis", "gradualism", "divergent evolution", "adaptive radiation", "new habitats", "convergent evolution", "sympatric speciation", "allopatric speciation", "pre-zygotic mechanisms", "post-zygotic mechanisms", "population dynamics", "decline", "extinction", "resilience", "environmental perturbation", "adaptive alleles", "deleterious alleles", "RNA world hypothesis", "genetic continuity", "RNA replication", "base-pairing", "genetically encoded proteins", "catalysts"
      ],
      "topics": [
        {
          "id": "u7t1",
          "name": "Topic 7.1: Introduction to Natural Selection",
          "iCanStatements": [
            {
              "id": "u7t1ic1",
              "text": "Describe the causes of natural selection.",
              "keyConcepts": [
                {"id": "u7t1ic1kc1", "text": "Natural selection is a major mechanism of evolution."},
                {"id": "u7t1ic1kc2", "text": "Competition for limited resources leads to differential survival. Individuals with favorable phenotypes survive and reproduce more, passing traits."}
              ]
            },
            {
              "id": "u7t1ic2",
              "text": "Explain how natural selection affects populations.",
              "keyConcepts": [
                {"id": "u7t1ic2kc1", "text": "Evolutionary fitness is measured by reproductive success."},
                {"id": "u7t1ic2kc2", "text": "Fluctuating biotic/abiotic environments affect evolution rate/direction, selecting different genetic variations."}
              ]
            }
          ]
        },
        {
          "id": "u7t2",
          "name": "Topic 7.2: Natural Selection",
          "iCanStatements": [
            {
              "id": "u7t2ic1",
              "text": "Describe the importance of phenotypic variation in a population.",
              "keyConcepts": [
                {"id": "u7t2ic1kc1", "text": "Natural selection acts on phenotypic variations. Changing environments apply selective pressures. Phenotypic variations can increase/decrease fitness (e.g., flowering time, sickle cell anemia, DDT resistance)."}
              ]
            },
            {
              "id": "u7t2ic2",
              "text": "Explain how variation in molecules within cells connects to the fitness of an organism.",
              "keyConcepts": [
                {"id": "u7t2ic2kc1", "text": "Variation in cellular molecules (number/types) enhances survival/reproduction in diverse environments."}
              ]
            }
          ]
        },
        {
            "id": "u7t3",
            "name": "Topic 7.3: Artificial Selection",
            "iCanStatements": [
                {
                    "id": "u7t3ic1",
                    "text": "Explain how humans can affect diversity within a population.",
                    "keyConcepts": [
                        {"id": "u7t3ic1kc1", "text": "Humans influence variation via artificial selection, selectively favoring desirable traits, changing genetic makeup/diversity."}
                    ]
                }
            ]
        },
        {
            "id": "u7t4",
            "name": "Topic 7.4: Population Genetics",
            "iCanStatements": [
                {
                    "id": "u7t4ic1",
                    "text": "Explain how random occurrences affect the genetic makeup of a population.",
                    "keyConcepts": [
                        {"id": "u7t4ic1kc1", "text": "Evolution is driven by random occurrences: mutation (new genetic variation), genetic drift (random allele frequency changes, impactful in small populations; bottleneck effect, founder effect), migration/gene flow (adding/removing alleles)."}
                    ]
                },
                {
                    "id": "u7t4ic2",
                    "text": "Describe the role of random processes in the evolution of specific populations.",
                    "keyConcepts": [
                      {"id": "u7t4ic2kc1", "text": "These processes change allele frequencies. Mutations provide raw variation for natural selection. Genetic drift causes divergence in small populations; gene flow prevents it."}
                    ]
                },
                {
                    "id": "u7t4ic3",
                    "text": "Describe the change in the genetic makeup of a population over time.",
                    "keyConcepts": [
                        {"id": "u7t4ic3kc1", "text": "Changes in allele frequencies over time show evolution."}
                    ]
                }
            ]
        },
        {
            "id": "u7t5",
            "name": "Topic 7.5: Hardy-Weinberg Equilibrium",
            "iCanStatements": [
                {
                    "id": "u7t5ic1",
                    "text": "Describe the conditions under which allele and genotype frequencies will change in populations.",
                    "keyConcepts": [
                        {"id": "u7t5ic1kc1", "text": "Hardy-Weinberg Equilibrium is a model for non-evolving populations."},
                        {"id": "u7t5ic1kc2", "text": "Conditions for equilibrium: large population, no migration, no new mutations, random mating, no natural selection."},
                        {"id": "u7t5ic1kc3", "text": "These are rarely met but provide a null hypothesis."},
                        {"id": "u7t5ic1kc4", "text": "Allele frequencies in non-evolving populations can be calculated from genotype frequencies."}
                    ]
                }
            ]
        },
        {
            "id": "u7t6",
            "name": "Topic 7.6: Evidence of Evolution",
            "iCanStatements": [
                {
                    "id": "u7t6ic1",
                    "text": "Describe the types of data that provide evidence for evolution.",
                    "keyConcepts": [
                        {"id": "u7t6ic1kc1", "text": "Evolution is supported by geographical, geological, physical, biochemical, and mathematical data."}
                    ]
                },
                {
                    "id": "u7t6ic2",
                    "text": "Explain how morphological, biochemical, and geological data provide evidence that organisms have changed over time.",
                    "keyConcepts": [
                        {"id": "u7t6ic2kc1", "text": "Molecular, morphological, and genetic evidence from living/extinct organisms supports evolution."},
                        {"id": "u7t6ic2kc2", "text": "Fossils are dated by rock age, isotope decay (e.g., carbon-14), and geographical data."},
                        {"id": "u7t6ic2kc3", "text": "Morphological homologies (including vestigial structures) show common ancestry."},
                        {"id": "u7t6ic2kc4", "text": "DNA/protein sequence comparisons provide biochemical evidence for relationships and common ancestry."}
                    ]
                }
            ]
        },
        {
            "id": "u7t7",
            "name": "Topic 7.7: Common Ancestry",
            "iCanStatements": [
                {
                    "id": "u7t7ic1",
                    "text": "Describe structural and functional evidence on cellular and molecular levels that provides evidence for the common ancestry of all eukaryotes.",
                    "keyConcepts": [
                        {"id": "u7t7ic1kc1", "text": "Structural and functional evidence (cellular/molecular) indicates common ancestry of all eukaryotes: membrane-bound organelles, linear chromosomes, genes with introns."}
                    ]
                }
            ]
        },
        {
            "id": "u7t8",
            "name": "Topic 7.8: Continuing Evolution",
            "iCanStatements": [
                {
                    "id": "u7t8ic1",
                    "text": "Explain how evolution is an ongoing process in all living organisms.",
                    "keyConcepts": [
                        {"id": "u7t8ic1kc1", "text": "Evolution is continuous. Evidence includes genomic changes, fossil record changes, resistance evolution (antibiotics, pesticides, herbicides, chemotherapy), and evolving pathogens causing emergent diseases."}
                    ]
                }
            ]
        },
        {
            "id": "u7t9",
            "name": "Topic 7.9: Phylogeny",
            "iCanStatements": [
                {
                    "id": "u7t9ic1",
                    "text": "Describe the types of evidence that can be used to infer an evolutionary relationship.",
                    "keyConcepts": [
                        {"id": "u7t9ic1kc1", "text": "Phylogenetic trees/cladograms show hypothetical evolutionary relationships."},
                        {"id": "u7t9ic1kc2", "text": "Traits gained/lost are used. Out-group is least related. Shared derived characters indicate common ancestry."}
                    ]
                },
                {
                    "id": "u7t9ic2",
                    "text": "Explain how phylogenetic trees and cladograms can be used to infer evolutionary relatedness.",
                    "keyConcepts": [
                        {"id": "u7t9ic2kc1", "text": "Trees show evolutionary change over time (calibrated by fossils/molecular clock); cladograms show shared ancestry patterns."},
                        {"id": "u7t9ic2kc2", "text": "Molecular data is generally more accurate than morphological."},
                        {"id": "u7t9ic2kc3", "text": "Trees/cladograms are hypotheses, revised with new evidence. Nodes represent most recent common ancestor."}
                    ]
                }
            ]
        },
        {
            "id": "u7t10",
            "name": "Topic 7.10: Speciation",
            "iCanStatements": [
                {
                    "id": "u7t10ic1",
                    "text": "Describe the conditions under which new species may arise.",
                    "keyConcepts": [
                        {"id": "u7t10ic1kc1", "text": "Speciation occurs when populations become reproductively isolated. Biological species concept: interbreeding group producing viable, fertile offspring."}
                    ]
                },
                {
                    "id": "u7t10ic2",
                    "text": "Describe the rate of evolution and speciation under different ecological conditions.",
                    "keyConcepts": [
                        {"id": "u7t10ic2kc1", "text": "Evolution/speciation rates vary: punctuated equilibrium (rapid change after stasis), gradualism (slow change)."},
                        {"id": "u7t10ic2kc2", "text": "Divergent evolution (adaptation to new habitats) leads to phenotypic diversification; rapid speciation during adaptive radiation."},
                        {"id": "u7t10ic2kc3", "text": "Convergent evolution: similar selective pressures lead to similar adaptations in unrelated groups."}
                    ]
                },
                {
                    "id": "u7t10ic3",
                    "text": "Explain the processes and mechanisms that drive speciation.",
                    "keyConcepts": [
                        {"id": "u7t10ic3kc1", "text": "Speciation (sympatric or allopatric) creates life diversity. Pre-zygotic and post-zygotic mechanisms maintain reproductive isolation."}
                    ]
                }
            ]
        },
        {
            "id": "u7t11",
            "name": "Topic 7.11: Variations in Populations",
            "iCanStatements": [
                {
                    "id": "u7t11ic1",
                    "text": "Explain how the genetic diversity of a species or population affects its ability to withstand environmental pressures.",
                    "keyConcepts": [
                        {"id": "u7t11ic1kc1", "text": "Genetic variation affects population dynamics and response to environmental pressures."},
                        {"id": "u7t11ic1kc2", "text": "Low diversity populations are at higher risk of decline/extinction. Genetically diverse populations are more resilient, more likely to have individuals with alleles to withstand pressure."},
                        {"id": "u7t11ic1kc3", "text": "Adaptive alleles in one environment may be deleterious in another."}
                    ]
                }
            ]
        },
        {
            "id": "u7t12",
            "name": "Topic 7.12: Origins of Life on Earth",
            "iCanStatements": [
                {
                    "id": "u7t12ic1",
                    "text": "Describe the scientific evidence that supports models of the origin of life on Earth.",
                    "keyConcepts": [
                        {"id": "u7t12ic1kc1", "text": "Origin of life supported by geological evidence: Earth formed ~4.6 bya, hostile until ~3.9 bya, earliest fossils ~3.5 bya."},
                        {"id": "u7t12ic1kc2", "text": "RNA world hypothesis: RNA was earliest genetic material, genetic continuity by RNA replication, base-pairing essential, genetically encoded proteins not initially catalysts."}
                    ]
                }
            ]
        }
      ]
    },
    {
      "id": "u8",
      "name": "Unit 8: Ecology",
      "examWeighting": "10-15%",
      "classPeriods": "~19-21",
      "keyUnderstanding": "This unit synthesizes all previous learning, showing how system interactions relate to energy, evolution, and environmental responses. Complex living systems interact, causing dynamic changes in communities and ecosystems. Biodiversity is crucial for system health and resilience. Energy flow rate dictates species success. You should be able to determine and explain consequences of disruptions in biological systems.",
      "bigIdeas": [
        {
          "title": "Evolution (EVO)",
          "question": "How does diversity among and between species in a biological system affect the evolution of species within the system?"
        },
        {
          "title": "Energetics (ENE)",
          "question": "How does the acquisition of energy relate to the health of a biological system? How do communities and ecosystems change, for better or worse, due to biological disruption?"
        },
        {
          "title": "Information Storage and Transmission (IST)",
          "question": "How does a disruption of a biological system affect genetic information storage and transmission?"
        },
        {
          "title": "Systems Interactions (SYI)",
          "question": "How do organisms use energy or conserve energy to respond to environmental stimuli?"
        }
      ],
      "sciencePractices": "You'll design and evaluate experimental plans (3.C) to test biological systems. Interpret experimental results (6.D) in relation to hypotheses and plan data collection. Understand how to modify procedures for valid results and identify/explain outliers.",
      "examTips": "Practice constructing food webs from data, accurately depicting energy flow with arrows. Understand energy and carbon transfer (from Unit 3) to predict environmental impacts. Practice supporting claims about biological systems, making explicit connections to ecological principles.",
      "vocabulary": [
        "behavioral response", "physiological response", "internal environment", "external environment", "environmental cues", "photoperiodism", "phototropism", "taxis", "kinesis", "nocturnal activity", "diurnal activity", "fight-or-flight response", "predator warnings", "plant responses to herbivory", "communication mechanisms", "visual signals", "audible signals", "tactile signals", "electrical signals", "chemical signals", "signaling behaviors", "differential reproductive success", "dominance", "food location", "territory establishment", "reproductive success", "territorial marking", "coloration", "bird songs", "pack behaviors", "predatory warnings", "innate behaviors", "learned behaviors", "survival", "reproductive fitness", "cooperative behavior", "kin selection", "energy acquisition", "energy use", "homeostasis", "body temperature regulation", "metabolism", "endotherms", "ectotherms", "energy storage", "organismal growth", "reproductive output", "mass loss", "death", "reproductive strategies", "asexual reproduction", "sexual reproduction", "metabolic rate per unit body mass", "population", "community", "ecosystem", "biome", "energy flow", "matter cycles", "nutrients", "biogeochemical cycles", "conservation of matter", "interdependent cycles", "abiotic reservoirs", "biotic reservoirs", "hydrologic (water) cycle", "evaporation", "condensation", "precipitation", "transpiration", "carbon cycle", "photosynthesis", "cellular respiration", "decomposition", "combustion", "nitrogen cycle", "nitrogen fixation", "assimilation", "ammonification", "nitrification", "denitrification", "microorganisms", "phosphorus cycle", "weathering rocks", "phosphate", "producers", "consumers", "decomposers", "excretion", "energy availability", "population size", "trophic levels", "primary productivity", "autotrophs", "heterotrophs", "carnivores", "herbivores", "omnivores", "decomposers", "scavengers", "carbon compounds", "food chains", "food webs", "trophic pyramids/diagrams", "population growth dynamics", "birth rate", "death rate", "population size", "exponential growth", "limiting constraints", "carrying capacity", "density-dependent factors", "density-independent factors", "logistic growth model", "species composition", "species diversity", "interacting populations", "competition", "predation", "symbioses", "parasitism", "mutualism", "commensalism", "trophic cascades", "niche partitioning", "ecosystem diversity", "resilience", "artificial ecosystems", "keystone species", "abiotic factors", "biotic factors", "short-term structure", "long-term structure", "adaptation", "genetic variation", "heterozygote advantage", "mutations", "environmental pressures", "invasive species", "new niche", "predators", "competitors", "resource competition", "uncontrolled population growth", "ecological changes", "human activities", "biomagnification", "eutrophication", "extinctions", "Dutch elm disease", "potato blight", "geological activity", "meteorological activity", "habitat change", "ecosystem distribution", "biogeographical studies", "global climate change", "logging", "urbanization", "mono-cropping", "El Niño events", "continental drift", "meteor impacts on dinosaurs"
      ],
      "topics": [
        {
          "id": "u8t1",
          "name": "Topic 8.1: Responses to the Environment",
          "iCanStatements": [
            {
              "id": "u8t1ic1",
              "text": "Explain how the behavioral and physiological response of an organism is related to changes in internal or external environment.",
              "keyConcepts": [
                {"id": "u8t1ic1kc1", "text": "Organisms respond to internal/external environmental changes via behavioral/physiological mechanisms."},
                {"id": "u8t1ic1kc2", "text": "Information exchange leads to behavioral changes (e.g., photoperiodism, taxis, fight-or-flight)."}
              ]
            },
            {
              "id": "u8t1ic2",
              "text": "Explain how the behavioral responses of organisms affect their overall fitness and may contribute to the success of a population.",
              "keyConcepts": [
                {"id": "u8t1ic2kc1", "text": "Organisms communicate via visual, audible, tactile, electrical, chemical signals, affecting others' behavior and reproductive success."},
                {"id": "u8t1ic2kc2", "text": "Animals use signals for dominance, food, territory, reproduction."},
                {"id": "u8t1ic2kc3", "text": "Responses/communication are vital for natural selection/evolution."},
                {"id": "u8t1ic2kc4", "text": "Innate/learned behaviors increasing fitness are favored. Cooperative behaviors increase individual/population fitness."}
              ]
            }
          ]
        },
        {
          "id": "u8t2",
          "name": "Topic 8.2: Energy Flow Through Ecosystems",
          "iCanStatements": [
            {
              "id": "u8t2ic1",
              "text": "Describe the strategies organisms use to acquire and use energy.",
              "keyConcepts": [
                {"id": "u8t2ic1kc1", "text": "Organisms need energy for organization, growth, reproduction, homeostasis. Strategies regulate temperature/metabolism (endotherms vs. ectotherms)."},
                {"id": "u8t2ic1kc2", "text": "Net energy gain leads to storage/growth/reproduction; net loss leads to mass loss/death."},
                {"id": "u8t2ic1kc3", "text": "Reproductive strategies vary with energy availability."}
              ]
            },
            {
              "id": "u8t2ic2",
              "text": "Explain how energy flows and matter cycles through trophic levels.",
              "keyConcepts": [
                {"id": "u8t2ic2kc1", "text": "Ecological levels: populations, communities, ecosystems, biomes."},
                {"id": "u8t2ic2kc2", "text": "Energy flows unidirectionally; matter/nutrients cycle (biogeochemical cycles: hydrologic, carbon, nitrogen, phosphorus)."}
              ]
            },
            {
              "id": "u8t2ic3",
              "text": "Explain how changes in energy availability affect populations, communities, and ecosystems.",
              "keyConcepts": [
                {"id": "u8t2ic3kc1", "text": "Changes in energy affect population size and disrupt ecosystems (e.g., sunlight affecting trophic levels, producer biomass affecting other levels)."}
              ]
            },
            {
              "id": "u8t2ic4",
              "text": "Explain how the activities of autotrophs and heterotrophs enable the flow of energy within an ecosystem.",
              "keyConcepts": [
                {"id": "u8t2ic4kc1", "text": "Autotrophs capture energy (photosynthesis, chemosynthesis); heterotrophs consume organic matter."}
              ]
            }
          ]
        },
        {
          "id": "u8t3",
          "name": "Topic 8.3: Population Ecology",
          "iCanStatements": [
            {
              "id": "u8t3ic1",
              "text": "Describe factors that influence growth dynamics of populations.",
              "keyConcepts": [
                {"id": "u8t3ic1kc1", "text": "Populations are interacting organisms of same species. Adaptations relate to energy/matter use."},
                {"id": "u8t3ic1kc2", "text": "Growth dynamics depend on birth rate, death rate, population size."},
                {"id": "u8t3ic1kc3", "text": "Unconstrained reproduction leads to exponential growth."}
              ]
            }
          ]
        },
        {
          "id": "u8t4",
          "name": "Topic 8.4: Effect of Density on Populations",
          "iCanStatements": [
            {
              "id": "u8t4ic1",
              "text": "Explain how the density of a population affects and is determined by resource availability in the environment.",
              "keyConcepts": [
                {"id": "u8t4ic1kc1", "text": "Carrying capacity is maximum sustainable abundance."},
                {"id": "u8t4ic1kc2", "text": "As population nears carrying capacity, density-dependent/independent factors limit growth, leading to logistic growth model."}
              ]
            }
          ]
        },
        {
          "id": "u8t5",
          "name": "Topic 8.5: Community Ecology",
          "iCanStatements": [
            {
              "id": "u8t5ic1",
              "text": "Describe the structure of a community according to its species composition and diversity.",
              "keyConcepts": [
                {"id": "u8t5ic1kc1", "text": "Community structure measured by species composition/diversity."}
              ]
            },
            {
              "id": "u8t5ic2",
              "text": "Explain how interactions within and among populations influence community structure.",
              "keyConcepts": [
                {"id": "u8t5ic2kc1", "text": "Communities are dynamic, influenced by interactions. Interactions determine energy/matter access."},
                {"id": "u8t5ic2kc2", "text": "Relationships (predator/prey, cooperation, trophic cascades, niche partitioning) can be modeled."},
                {"id": "u8t5ic2kc3", "text": "Competition, predation, symbioses (parasitism, mutualism, commensalism) drive population dynamics."}
              ]
            }
          ]
        },
        {
          "id": "u8t6",
          "name": "Topic 8.6: Biodiversity",
          "iCanStatements": [
            {
              "id": "u8t6ic1",
              "text": "Describe the relationship between ecosystem diversity and its resilience to changes in the environment.",
              "keyConcepts": [
                {"id": "u8t6ic1kc1", "text": "Ecosystems with fewer parts/less diversity are less resilient."},
                {"id": "u8t6ic1kc2", "text": "Keystone species, producers, essential abiotic/biotic factors maintain diversity."}
              ]
            },
            {
              "id": "u8t6ic2",
              "text": "Explain how the addition or removal of any component of an ecosystem will affect its overall short-term and long-term structure.",
              "keyConcepts": [
                {"id": "u8t6ic2kc1", "text": "Keystone species have disproportionately large effects; their removal often collapses the ecosystem."}
              ]
            }
          ]
        },
        {
          "id": "u8t7",
          "name": "Topic 8.7: Disruptions in Ecosystems",
          "iCanStatements": [
            {
              "id": "u8t7ic1",
              "text": "Explain the interaction between the environment and random or preexisting variations in populations.",
              "keyConcepts": [
                {"id": "u8t7ic1kc1", "text": "Adaptation is a genetic variation favored by selection, providing an advantage."},
                {"id": "u8t7ic1kc2", "text": "Heterozygote advantage: heterozygous genotype has higher fitness."},
                {"id": "u8t7ic1kc3", "text": "Mutations are random, not directed by environment."}
              ]
            },
            {
              "id": "u8t7ic2",
              "text": "Explain how invasive species affect ecosystem dynamics.",
              "keyConcepts": [
                {"id": "u8t7ic2kc1", "text": "Invasive species exploit new niches or outcompete natives, causing uncontrolled growth/ecological changes (e.g., kudzu, zebra mussels)."}
              ]
            },
            {
              "id": "u8t7ic3",
              "text": "Describe human activities that lead to changes in ecosystem structure and dynamics.",
              "keyConcepts": [
                {"id": "u8t7ic3kc1", "text": "Human activities accelerate changes, leading to extinctions (e.g., biomagnification, eutrophication, Dutch elm disease, potato blight)."}
              ]
            },
            {
              "id": "u8t7ic4",
              "text": "Explain how geological and meteorological activity leads to changes in ecosystem structure and dynamics.",
              "keyConcepts": [
                {"id": "u8t7ic4kc1", "text": "Geological/meteorological events affect habitat/ecosystem distribution (e.g., climate change, logging, urbanization, El Niño, continental drift, meteor impacts)."}
              ]
            }
          ]
        }
      ]
    }
  ]
};

const unitColors = [
  '#34d399', // emerald-400
  '#fbbf24', // amber-400
  '#60a5fa', // blue-400
  '#f472b6', // pink-400
  '#a78bfa', // violet-400
  '#22d3ee', // cyan-400
  '#f87171', // red-400
  '#84cc16'  // lime-500
];

const totalWeight = rawCourseData.units.reduce((acc, unit) => {
    const weightRange = unit.examWeighting.replace('%', '').split('-').map(Number);
    const avgWeight = (weightRange[0] + (weightRange[1] || weightRange[0])) / 2;
    return acc + avgWeight;
}, 0);


export const courseData: CourseData = {
  units: rawCourseData.units.map((unit, index) => {
    const weightRange = unit.examWeighting.replace('%', '').split('-').map(Number);
    const avgWeight = (weightRange[0] + (weightRange[1] || weightRange[0])) / 2;
    return {
      ...unit,
      color: unitColors[index % unitColors.length],
      normalizedWeight: avgWeight / totalWeight,
    };
  }),
};
