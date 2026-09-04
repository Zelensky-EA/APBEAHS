import React from 'react';
import { courseData } from '../constants';

const examSource = 'https://apcentral.collegeboard.org/courses/ap-biology/exam';
const datesSource = 'https://apstudents.collegeboard.org/exam-dates';

const ExamGuide: React.FC = () => (
  <main className="mx-auto max-w-7xl px-4 py-8">
    <section className="mb-7 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
      <div className="flex h-2">{courseData.units.map(unit => <span key={unit.id} className="flex-1" style={{backgroundColor: unit.color}} />)}</div>
      <div className="p-6 sm:p-8">
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-cyan-600">2027 AP Biology Exam</p>
        <h2 className="text-3xl font-black text-slate-950 sm:text-4xl">Monday, May 3, 2027</h2>
        <p className="mt-2 text-lg font-semibold text-slate-600">Session 2 · Your AP coordinator will provide the exact local start time and room.</p>
      </div>
    </section>

    <section className="mb-6 grid gap-5 lg:grid-cols-2">
      <article className="rounded-2xl border-t-4 border-cyan-400 bg-white p-6 shadow-md">
        <div className="flex items-start justify-between gap-4"><div><p className="text-xs font-extrabold uppercase tracking-wider text-cyan-700">Section I</p><h3 className="mt-1 text-2xl font-black text-slate-950">Multiple Choice</h3></div><span className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-bold text-cyan-800">50%</span></div>
        <div className="my-5 grid grid-cols-2 gap-3"><div className="rounded-xl bg-slate-100 p-4"><p className="text-3xl font-black text-slate-950">60</p><p className="text-sm text-slate-600">questions</p></div><div className="rounded-xl bg-slate-100 p-4"><p className="text-3xl font-black text-slate-950">90</p><p className="text-sm text-slate-600">minutes</p></div></div>
        <ul className="list-disc space-y-2 pl-5 text-slate-700"><li>Completed in the Bluebook testing app.</li><li>Includes discrete questions and stimulus-based sets.</li><li>Stimulus sets typically contain 4–5 related questions.</li></ul>
      </article>

      <article className="rounded-2xl border-t-4 border-violet-400 bg-white p-6 shadow-md">
        <div className="flex items-start justify-between gap-4"><div><p className="text-xs font-extrabold uppercase tracking-wider text-violet-700">Section II</p><h3 className="mt-1 text-2xl font-black text-slate-950">Free Response</h3></div><span className="rounded-full bg-violet-100 px-3 py-1 text-sm font-bold text-violet-800">50%</span></div>
        <div className="my-5 grid grid-cols-2 gap-3"><div className="rounded-xl bg-slate-100 p-4"><p className="text-3xl font-black text-slate-950">6</p><p className="text-sm text-slate-600">questions</p></div><div className="rounded-xl bg-slate-100 p-4"><p className="text-3xl font-black text-slate-950">90</p><p className="text-sm text-slate-600">minutes</p></div></div>
        <ul className="list-disc space-y-2 pl-5 text-slate-700"><li>Questions are viewed in Bluebook; answers are handwritten in the exam booklet.</li><li>2 long questions worth 9 points each.</li><li>4 short questions worth 4 points each.</li></ul>
      </article>
    </section>

    <section className="mb-6 grid gap-4 md:grid-cols-2">
      <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><h3 className="mb-3 text-lg font-black text-slate-950">Long FRQ focus</h3><ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700"><li>Interpret and evaluate experimental results.</li><li>Interpret and evaluate experimental results with graphing.</li></ul></article>
      <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><h3 className="mb-3 text-lg font-black text-slate-950">Short FRQ focus</h3><ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700"><li>Scientific investigation</li><li>Conceptual analysis</li><li>Model or visual analysis</li><li>Data analysis</li></ul></article>
    </section>

    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-black text-slate-950">Exam-day essentials</h3>
      <div className="mt-4 grid gap-4 md:grid-cols-3"><div className="rounded-xl bg-slate-100 p-4"><p className="font-bold text-slate-900">Hybrid digital</p><p className="mt-1 text-sm text-slate-600">MCQs and FRQ prompts are delivered in Bluebook.</p></div><div className="rounded-xl bg-slate-100 p-4"><p className="font-bold text-slate-900">Calculator permitted</p><p className="mt-1 text-sm text-slate-600">Use a calculator allowed under the AP calculator policy.</p></div><div className="rounded-xl bg-slate-100 p-4"><p className="font-bold text-slate-900">Reference information</p><p className="mt-1 text-sm text-slate-600">Official reference materials are supplied for the exam.</p></div></div>
      <p className="mt-5 text-sm text-slate-500">Official sources: <a className="font-semibold text-cyan-700 underline" href={examSource} target="_blank" rel="noreferrer">AP Biology exam format</a> · <a className="font-semibold text-cyan-700 underline" href={datesSource} target="_blank" rel="noreferrer">2027 AP exam dates</a></p>
    </section>
  </main>
);

export default ExamGuide;
