import React, { useEffect, useMemo, useState } from 'react';
import snapshot from '../data/calendar.json';
import { courseData } from '../constants';

interface CalendarEntry { week: number; day: string; date: string; cedTopic: string; learningTarget: string; classwork: string; campbell: string; biozone: string; homework: string; apTarget: string; teacherNote: string; }

const CSV_URL = (import.meta.env.VITE_NAVIGATOR_CSV_URL as string | undefined) || 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSQmAQUeLO19pcXizo9fhfSULh1KEewdq4Og3vnTLBxgrA7QYpKq_NNwcqoFDaf57OMiFf7FQx3MM5E/pub?gid=135989314&single=true&output=csv';

function parseCsv(text: string): CalendarEntry[] {
  const rows:string[][]=[]; let row:string[]=[]; let cell=''; let quoted=false;
  for(let i=0;i<text.length;i++){const c=text[i],n=text[i+1];if(c==='"'&&quoted&&n==='"'){cell+='"';i++;}else if(c==='"')quoted=!quoted;else if(c===','&&!quoted){row.push(cell);cell='';}else if((c==='\n'||c==='\r')&&!quoted){if(c==='\r'&&n==='\n')i++;row.push(cell);if(row.some(Boolean))rows.push(row);row=[];cell='';}else cell+=c;}
  if(cell||row.length){row.push(cell);rows.push(row);} const header=rows.findIndex(r=>r.some(v=>v.trim().toLowerCase()==='week')); if(header<0)return [];
  const isoDate=(value:string)=>{const d=new Date(value);return Number.isNaN(d.getTime())?value:d.toISOString().slice(0,10);};
  return rows.slice(header+1).map(r=>({week:Number(r[0])||0,day:r[1]||'',date:isoDate(r[2]||''),cedTopic:r[3]||'',learningTarget:r[4]||'',classwork:r[5]||'',campbell:r[6]||'',biozone:r[7]||'',homework:r[8]||'',apTarget:r[9]||'',teacherNote:r[10]||''})).filter(e=>e.date&&Object.values(e).some(Boolean));
}

const localIso=(date:Date)=>`${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
const shortDay=(entry:CalendarEntry)=>entry.day?.slice(0,3)||new Intl.DateTimeFormat('en-US',{weekday:'short'}).format(new Date(`${entry.date}T12:00:00`));
const shortDate=(value:string)=>new Intl.DateTimeFormat('en-US',{month:'short',day:'numeric'}).format(new Date(`${value}T12:00:00`));

const Navigator:React.FC=()=>{
  const [entries,setEntries]=useState<CalendarEntry[]>(snapshot as CalendarEntry[]);
  const [search,setSearch]=useState('');
  const [topic,setTopic]=useState('all');
  const [week,setWeek]=useState('');
  const [showPast,setShowPast]=useState(true);
  const [live,setLive]=useState(false);
  const todayIso=localIso(new Date());

  useEffect(()=>{fetch(CSV_URL).then(r=>{if(!r.ok)throw new Error();return r.text();}).then(t=>{const parsed=parseCsv(t);if(parsed.length){setEntries(parsed);setLive(true);}}).catch(()=>setLive(false));},[]);

  const topics=useMemo(()=>[...new Set(entries.map(e=>e.cedTopic).filter(Boolean))].sort((a,b)=>a.localeCompare(b,undefined,{numeric:true})),[entries]);
  const weeks=useMemo(()=>[...new Set(entries.map(e=>e.week).filter(Boolean))].sort((a,b)=>a-b),[entries]);
  const currentWeek=useMemo(()=>entries.find(e=>e.date===todayIso)?.week||[...entries].filter(e=>e.date>todayIso).sort((a,b)=>a.date.localeCompare(b.date))[0]?.week||weeks[weeks.length-1],[entries,todayIso,weeks]);

  useEffect(()=>{if(!week&&currentWeek)setWeek(String(currentWeek));},[week,currentWeek]);

  const selectedWeek=week==='all'?null:Number(week||currentWeek);
  const selectedIndex=selectedWeek===null?-1:weeks.indexOf(selectedWeek);
  const goWeek=(direction:number)=>{if(!weeks.length)return;const start=selectedIndex<0?weeks.indexOf(currentWeek):selectedIndex;const next=Math.max(0,Math.min(weeks.length-1,start+direction));setWeek(String(weeks[next]));};

  const visible=useMemo(()=>entries.filter(entry=>(showPast||entry.date>=todayIso)&&(selectedWeek===null||entry.week===selectedWeek)&&(topic==='all'||entry.cedTopic===topic)&&(!search||Object.values(entry).join(' ').toLowerCase().includes(search.toLowerCase()))).sort((a,b)=>selectedWeek===null?b.date.localeCompare(a.date):a.date.localeCompare(b.date)),[entries,search,topic,selectedWeek,showPast,todayIso]);

  return <main className="min-h-[calc(100vh-73px)] bg-[#f7f5ef] px-4 py-8"><div className="mx-auto max-w-[1800px]">
    <section className="mb-6 overflow-hidden rounded-3xl border-2 border-slate-200 bg-white shadow-lg"><div className="flex h-2">{courseData.units.map(unit=><span key={unit.id} className="flex-1" style={{backgroundColor:unit.color}} />)}</div><div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-end sm:justify-between"><div><p className="mb-2 text-xs font-extrabold uppercase tracking-[0.18em] text-cyan-700">2025 CED aligned</p><h2 className="text-3xl font-black text-slate-950">Weekly Learning Navigator</h2><p className="mt-2 text-slate-600">Your complete AP Biology week—classwork, readings, assignments, teacher notes, and AP targets.</p></div><span className="w-fit rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">● {live?'Live from the course sheet':'Saved schedule'}</span></div></section>

    <section className="mb-5 rounded-2xl border-2 border-slate-200 bg-white p-4 shadow-sm">
      <div className="grid gap-3 md:grid-cols-[1fr_150px_180px_auto]">
        <label className="text-sm font-semibold text-slate-700">Search<input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Lab, reading, assignment, topic…" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 font-normal outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100" /></label>
        <label className="text-sm font-semibold text-slate-700">Week<select value={week||String(currentWeek)} onChange={e=>setWeek(e.target.value)} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 font-normal"><option value="all">All weeks</option>{weeks.map(value=><option key={value} value={value}>Week {value}</option>)}</select></label>
        <label className="text-sm font-semibold text-slate-700">CED topic<select value={topic} onChange={e=>setTopic(e.target.value)} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 font-normal"><option value="all">All topics</option>{topics.map(value=><option key={value}>{value}</option>)}</select></label>
        <label className="flex items-center gap-2 self-end rounded-lg bg-slate-100 px-3 py-2 text-sm font-semibold"><input type="checkbox" checked={showPast} onChange={e=>setShowPast(e.target.checked)} className="accent-cyan-600" />Show past days</label>
      </div>
    </section>

    <section className="mb-5 flex flex-wrap items-center justify-between gap-3">
      <div className="flex items-center gap-3"><button onClick={()=>goWeek(-1)} disabled={selectedIndex<=0} aria-label="Previous week" className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-slate-300 bg-white text-xl font-black text-slate-800 shadow-sm hover:border-cyan-500 disabled:cursor-not-allowed disabled:opacity-35">←</button><div className="min-w-28 text-center"><p className="text-xs font-bold uppercase tracking-wider text-slate-500">Viewing</p><h3 className="text-xl font-black text-slate-950">{selectedWeek===null?'All Weeks':`Week ${selectedWeek}`}</h3></div><button onClick={()=>goWeek(1)} disabled={selectedIndex===weeks.length-1} aria-label="Next week" className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-slate-300 bg-white text-xl font-black text-slate-800 shadow-sm hover:border-cyan-500 disabled:cursor-not-allowed disabled:opacity-35">→</button></div>
      <div className="flex items-center gap-3"><button onClick={()=>setWeek(String(currentWeek))} className="rounded-xl border border-cyan-300 bg-cyan-50 px-4 py-2 text-sm font-bold text-cyan-800 hover:bg-cyan-100">Current week</button><span className="text-sm font-semibold text-slate-600">{visible.length} school day{visible.length===1?'':'s'}</span></div>
    </section>

    <section className={`grid items-stretch gap-4 ${selectedWeek===null?'md:grid-cols-2 xl:grid-cols-5':'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'}`}>
      {visible.map((entry,index)=>{const isToday=entry.date===todayIso;const unit=courseData.units[Number(entry.cedTopic.split('.')[0])-1];const color=unit?.color||'#0891b2';const sections:Array<[string,string,string?]>=[['Class',entry.classwork],['HOME After Class',entry.homework,'always'],['Teacher Notes',entry.teacherNote,'always'],['Campbell',entry.campbell],['BIOZONE',entry.biozone],['AP Target',entry.apTarget]];return <article key={`${entry.date}-${index}`} className={`flex min-w-0 flex-col overflow-hidden rounded-2xl border-2 bg-white shadow-md ${isToday?'border-cyan-500 ring-4 ring-cyan-100':'border-slate-300'}`} style={{borderTopWidth:6,borderTopColor:color}}>
        <header className="border-b border-slate-200 p-5" style={{backgroundColor:isToday?'#ecfeff':`${color}12`}}><div className="flex items-start justify-between gap-2"><h3 className="font-serif text-3xl font-black text-slate-950">{shortDay(entry)}</h3><span className="text-sm font-semibold text-slate-500">{shortDate(entry.date)}</span></div><div className="mt-4 flex flex-wrap items-center gap-2">{entry.cedTopic&&<span className="rounded-full px-2.5 py-1 text-xs font-black text-slate-900" style={{backgroundColor:`${color}35`}}>CED {entry.cedTopic}</span>}{isToday&&<span className="rounded-full bg-cyan-600 px-2.5 py-1 text-xs font-black text-white">Today</span>}</div><h4 className="mt-3 text-base font-black leading-snug text-slate-950">{unit?.name||'AP Biology'}</h4>{entry.learningTarget&&<p className="mt-3 text-sm leading-6 text-slate-600">{entry.learningTarget}</p>}</header>
        <div className="flex flex-1 flex-col p-5">{sections.map(([label,value,always])=>(value||always)?<div key={label} className="border-b border-slate-200 py-4 first:pt-0 last:border-0"><h5 className="mb-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em]" style={{color}}>{label}</h5><p className={`whitespace-pre-line text-sm leading-6 ${value?'text-slate-700':'italic text-slate-400'}`}>{value||`No ${label.toLowerCase()} posted.`}</p></div>:null)}</div>
      </article>})}
      {!visible.length&&<div className="col-span-full rounded-2xl border-2 border-dashed border-slate-300 bg-white p-12 text-center text-slate-500">No calendar entries match those filters.</div>}
    </section>
  </div></main>;
};

export default Navigator;
