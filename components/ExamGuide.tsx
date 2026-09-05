import React from 'react';
import { courseData } from '../constants';

const examSource = 'https://apcentral.collegeboard.org/courses/ap-biology/exam';
const datesSource = 'https://apstudents.collegeboard.org/exam-dates';

const taskVerbs = [
  ['Calculate', 'Show the mathematical steps, substitute values, and include correct units and significant figures.'],
  ['Construct / Draw', 'Create the requested graph, model, diagram, or representation. Include accurate labels when needed.'],
  ['Describe', 'Give the relevant characteristics, patterns, or observations. Say what is happening.'],
  ['Determine', 'Reach a conclusion using reasoning, observations, data, or calculations.'],
  ['Evaluate', 'Judge the importance, accuracy, or quality of information or a claim using evidence.'],
  ['Explain', 'State how or why something occurs and connect the outcome to biological evidence or reasoning.'],
  ['Identify', 'Name or indicate the requested information. Extra explanation is not required.'],
  ['Justify', 'Give evidence and explain how that evidence supports, qualifies, or defends the claim.'],
  ['Make a claim', 'State a defensible answer based on biological knowledge or evidence.'],
  ['Predict', 'State the likely effect of a change or disruption to a biological system.'],
  ['Represent', 'Use a graph, model, symbols, words, illustrations, or a table to show a biological relationship.'],
  ['State a null hypothesis', 'State that there is no meaningful difference or relationship between the experimental variables.'],
  ['Support a claim', 'Use evidence and reasoning to show why the claim is valid or should be qualified.'],
];

const mcqTips = [
  'Read the question stem before studying a long graph, passage, or diagram so you know what evidence to find.',
  'Translate the question into a simpler sentence: “What changed, and what biological process explains it?”',
  'Predict an answer before reading the choices, then eliminate choices that contradict the data or a core principle.',
  'Treat unfamiliar organisms and experiments as applications of familiar biology; the needed evidence is usually in the stimulus.',
  'Use units, axis labels, legends, controls, and error bars. Do not answer from the graph’s overall appearance alone.',
  'Do not spend too long on one item. Choose the best answer, flag it, and return if time remains. There is no guessing penalty.',
];

const frqTips = [
  'Circle or underline each task verb and answer every requested part in the labeled space.',
  'Start with a direct answer. Then add only the evidence and reasoning needed for that verb.',
  'Use specific biological language. Name the molecule, structure, process, direction of change, and consequence when relevant.',
  'For data questions, cite a value or trend and include units. Do not merely say that one result is “higher.”',
  'For calculations, show your setup and work. For graphs, include the correct type, labels, units, scale, and accurately plotted data.',
  'For predictions, state the direction of change and explain the mechanism. Do not contradict your answer with extra possibilities.',
  'If stuck, write what you can justify from the stimulus. FRQs are scored point by point, so one missed part does not ruin the question.',
];

const ExamGuide: React.FC = () => (
  <main className="min-h-screen bg-slate-100 px-4 py-8">
    <div className="mx-auto max-w-7xl">
      <section className="mb-7 overflow-hidden rounded-3xl border-2 border-slate-200 bg-white shadow-xl">
        <div className="flex h-2">{courseData.units.map(unit => <span key={unit.id} className="flex-1" style={{backgroundColor: unit.color}} />)}</div>
        <div className="p-6 sm:p-8">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-cyan-600">2027 AP Biology Exam</p>
          <h2 className="text-3xl font-black text-slate-950 sm:text-4xl">Monday, May 3, 2027</h2>
          <p className="mt-2 text-lg font-semibold text-slate-600">Session 2 · Your AP coordinator will provide the exact local start time and room.</p>
        </div>
      </section>

      <section className="mb-7 grid gap-5 lg:grid-cols-2">
        <article className="rounded-2xl border-2 border-slate-200 border-t-cyan-400 bg-white p-6 shadow-md">
          <div className="flex items-start justify-between gap-4"><div><p className="text-xs font-extrabold uppercase tracking-wider text-cyan-700">Section I</p><h3 className="mt-1 text-2xl font-black text-slate-950">Multiple Choice</h3></div><span className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-bold text-cyan-800">50%</span></div>
          <div className="my-5 grid grid-cols-2 gap-3"><div className="rounded-xl bg-slate-100 p-4"><p className="text-3xl font-black text-slate-950">60</p><p className="text-sm text-slate-600">questions</p></div><div className="rounded-xl bg-slate-100 p-4"><p className="text-3xl font-black text-slate-950">90</p><p className="text-sm text-slate-600">minutes</p></div></div>
          <ul className="list-disc space-y-2 pl-5 text-slate-700"><li>Completed in the Bluebook testing app.</li><li>Includes discrete questions and stimulus-based sets.</li><li>Stimulus sets typically contain 4–5 related questions.</li></ul>
        </article>
        <article className="rounded-2xl border-2 border-slate-200 border-t-violet-400 bg-white p-6 shadow-md">
          <div className="flex items-start justify-between gap-4"><div><p className="text-xs font-extrabold uppercase tracking-wider text-violet-700">Section II</p><h3 className="mt-1 text-2xl font-black text-slate-950">Free Response</h3></div><span className="rounded-full bg-violet-100 px-3 py-1 text-sm font-bold text-violet-800">50%</span></div>
          <div className="my-5 grid grid-cols-2 gap-3"><div className="rounded-xl bg-slate-100 p-4"><p className="text-3xl font-black text-slate-950">6</p><p className="text-sm text-slate-600">questions</p></div><div className="rounded-xl bg-slate-100 p-4"><p className="text-3xl font-black text-slate-950">90</p><p className="text-sm text-slate-600">minutes</p></div></div>
          <ul className="list-disc space-y-2 pl-5 text-slate-700"><li>Questions are viewed in Bluebook; answers are handwritten in the exam booklet.</li><li>2 long questions worth 9 points each.</li><li>4 short questions worth 4 points each.</li></ul>
        </article>
      </section>

      <section className="mb-7 rounded-3xl border-2 border-slate-200 bg-white p-6 shadow-lg sm:p-8">
        <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-emerald-700">Write what the verb requires</p>
        <h3 className="mt-1 text-2xl font-black text-slate-950">AP Biology Task Verbs</h3>
        <p className="mt-2 text-slate-600">These verbs tell you exactly what earns the point. Match the type and length of your response to the verb.</p>
        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {taskVerbs.map(([verb, meaning]) => <article key={verb} className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-4"><h4 className="font-black text-emerald-900">{verb}</h4><p className="mt-1 text-sm leading-6 text-slate-700">{meaning}</p></article>)}
        </div>
        <p className="mt-4 text-xs text-slate-500">Student-friendly summaries based on the 2025 AP Biology CED task-verb definitions.</p>
      </section>

      <section className="mb-7 grid gap-5 lg:grid-cols-2">
        <article className="rounded-2xl border-2 border-cyan-200 bg-white p-6 shadow-md"><p className="text-xs font-extrabold uppercase tracking-wider text-cyan-700">Work efficiently</p><h3 className="mt-1 text-2xl font-black text-slate-950">MCQ Tips & Tricks</h3><ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-6 text-slate-700">{mcqTips.map(tip => <li key={tip}>{tip}</li>)}</ol></article>
        <article className="rounded-2xl border-2 border-violet-200 bg-white p-6 shadow-md"><p className="text-xs font-extrabold uppercase tracking-wider text-violet-700">Earn each point</p><h3 className="mt-1 text-2xl font-black text-slate-950">FRQ Tips & Tricks</h3><ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-6 text-slate-700">{frqTips.map(tip => <li key={tip}>{tip}</li>)}</ol></article>
      </section>

      <section className="mb-7 rounded-3xl border-2 border-slate-200 bg-white p-6 shadow-lg sm:p-8">
        <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-amber-700">Learn actively</p><h3 className="mt-1 text-2xl font-black text-slate-950">How to Study and Prepare</h3>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          <article className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5"><h4 className="text-lg font-black text-slate-950">What should I highlight?</h4><ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700"><li>Highlight sparingly: cause-and-effect relationships matter more than isolated definitions.</li><li>Mark the structure, function, input, output, location, regulation, and consequence of disruption for each process.</li><li>Highlight comparisons, exceptions, experimental evidence, and sentences explaining <em>how</em> or <em>why</em>.</li><li>Use one system: key idea, evidence/example, and question/confusion. If most of a page is highlighted, nothing stands out.</li></ul></article>
          <article className="rounded-2xl border border-sky-200 bg-sky-50/60 p-5"><h4 className="text-lg font-black text-slate-950">How to “read” Campbell</h4><ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-700"><li><strong>Preview:</strong> Read objectives, headings, figure titles, and the summary first.</li><li><strong>Question:</strong> Turn each heading into a question the section should answer.</li><li><strong>Read in chunks:</strong> Stop after each subsection and explain it without looking.</li><li><strong>Read figures:</strong> Follow arrows, labels, inputs, outputs, and captions. Ask what happens if one part changes.</li><li><strong>Retrieve:</strong> Close the book and write or sketch the process from memory before checking.</li></ol></article>
          <article className="rounded-2xl border border-fuchsia-200 bg-fuchsia-50/60 p-5"><h4 className="text-lg font-black text-slate-950">Move Campbell notes into BIOZONE</h4><ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-700"><li>Complete the BIOZONE page using class learning and your first attempt.</li><li>Use Campbell to correct an error, fill a missing mechanism, or add an example—not to copy paragraphs.</li><li>Add a short margin note, labeled sketch, arrow, or cause → mechanism → effect chain beside the matching BIOZONE item.</li><li>Use a different color for additions so you can see what Campbell contributed.</li><li>Finish with one AP-style question or “What if?” prediction connected to that page.</li></ol></article>
          <article className="rounded-2xl border border-lime-200 bg-lime-50/60 p-5"><h4 className="text-lg font-black text-slate-950">Take useful self-notes</h4><ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700"><li>Write from memory first, then check and correct. Copying while looking creates weak recall.</li><li>Favor diagrams, comparison tables, annotated graphs, and process chains over complete sentences.</li><li>For every process, record: purpose, location, inputs, steps, outputs, regulation, and what happens when disrupted.</li><li>End each topic with: “I can explain…,” “I still confuse…,” and “I predict…because….”</li></ul></article>
        </div>
      </section>

      <section className="mb-7 rounded-3xl border-2 border-indigo-200 bg-indigo-950 p-6 text-white shadow-lg sm:p-8">
        <h3 className="text-2xl font-black">A Study Cycle That Works</h3>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{[
          ['1', 'Retrieve', 'Write or sketch what you remember with notes closed.'], ['2', 'Check', 'Compare with the CED, BIOZONE, Campbell, and class materials.'], ['3', 'Correct', 'Fix misconceptions in a different color and explain the mechanism.'], ['4', 'Apply', 'Complete mixed MCQs, data analysis, or an FRQ part.'], ['5', 'Return', 'Repeat after a delay; do not study a topic only once.'],
        ].map(([number, title, text]) => <article key={number} className="rounded-xl bg-white/10 p-4 ring-1 ring-white/20"><span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white font-black text-indigo-950">{number}</span><h4 className="mt-3 font-black">{title}</h4><p className="mt-1 text-sm leading-5 text-indigo-100">{text}</p></article>)}</div>
        <p className="mt-5 text-sm text-indigo-100"><strong>Best evidence of readiness:</strong> You can explain an unfamiliar scenario, interpret its data, and justify a prediction without relying on recognition alone.</p>
      </section>

      <section className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-black text-slate-950">Exam-day essentials</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3"><div className="rounded-xl bg-slate-100 p-4"><p className="font-bold text-slate-900">Hybrid digital</p><p className="mt-1 text-sm text-slate-600">MCQs and FRQ prompts are delivered in Bluebook.</p></div><div className="rounded-xl bg-slate-100 p-4"><p className="font-bold text-slate-900">Calculator permitted</p><p className="mt-1 text-sm text-slate-600">Use a calculator allowed under the AP calculator policy.</p></div><div className="rounded-xl bg-slate-100 p-4"><p className="font-bold text-slate-900">Reference information</p><p className="mt-1 text-sm text-slate-600">Official reference materials are supplied for the exam.</p></div></div>
        <p className="mt-5 text-sm text-slate-500">Official sources: <a className="font-semibold text-cyan-700 underline" href={examSource} target="_blank" rel="noreferrer">AP Biology exam format</a> · <a className="font-semibold text-cyan-700 underline" href={datesSource} target="_blank" rel="noreferrer">2027 AP exam dates</a></p>
      </section>
    </div>
  </main>
);

export default ExamGuide;
