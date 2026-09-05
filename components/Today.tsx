import React, { useEffect, useMemo, useState } from 'react';
import snapshot from '../data/calendar.json';
import { courseData } from '../constants';

interface CalendarEntry { week: number; day: string; date: string; cedTopic: string; learningTarget: string; classwork: string; campbell: string; biozone: string; homework: string; apTarget: string; teacherNote: string; }
interface Article { id: string; source: string; title: string; authorString?: string; journalTitle?: string; firstPublicationDate?: string; abstractText?: string; doi?: string; pmcid?: string; }

const CSV_URL = (import.meta.env.VITE_NAVIGATOR_CSV_URL as string | undefined) || 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSQmAQUeLO19pcXizo9fhfSULh1KEewdq4Og3vnTLBxgrA7QYpKq_NNwcqoFDaf57OMiFf7FQx3MM5E/pub?gid=135989314&single=true&output=csv';
const unitSearches = ['biochemistry biomolecules water proteins', 'cell structure membrane transport organelles', 'cellular respiration photosynthesis enzymes metabolism', 'cell signaling communication cell cycle', 'genetics heredity meiosis', 'gene expression regulation biotechnology', 'evolution natural selection phylogeny', 'ecology populations communities ecosystems'];

function parseCsv(text: string): CalendarEntry[] {
  const rows: string[][]=[]; let row:string[]=[]; let cell=''; let quoted=false;
  for(let i=0;i<text.length;i++){const c=text[i],n=text[i+1];if(c==='"'&&quoted&&n==='"'){cell+='"';i++;}else if(c==='"')quoted=!quoted;else if(c===','&&!quoted){row.push(cell);cell='';}else if((c==='\n'||c==='\r')&&!quoted){if(c==='\r'&&n==='\n')i++;row.push(cell);if(row.some(Boolean))rows.push(row);row=[];cell='';}else cell+=c;}
  if(cell||row.length){row.push(cell);rows.push(row);} const header=rows.findIndex(r=>r.some(v=>v.trim().toLowerCase()==='week')); if(header<0)return [];
  const isoDate=(value:string)=>{const d=new Date(value);return Number.isNaN(d.getTime())?value:d.toISOString().slice(0,10);};
  return rows.slice(header+1).map(r=>({week:Number(r[0])||0,day:r[1]||'',date:isoDate(r[2]||''),cedTopic:r[3]||'',learningTarget:r[4]||'',classwork:r[5]||'',campbell:r[6]||'',biozone:r[7]||'',homework:r[8]||'',apTarget:r[9]||'',teacherNote:r[10]||''})).filter(e=>e.date&&Object.values(e).some(Boolean));
}

const localIso = (date: Date) => `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
const formatDate = (value:string) => new Intl.DateTimeFormat('en-US',{weekday:'long',month:'long',day:'numeric'}).format(new Date(`${value}T12:00:00`));
const cleanText = (value='') => value.replace(/<[^>]*>/g,' ').replace(/&[a-z]+;/gi,' ').replace(/\s+/g,' ').trim();
const seedFor = (value:string) => [...value].reduce((total,char)=>((total*31)+char.charCodeAt(0))>>>0,7);

const Today: React.FC = () => {
  const [entries,setEntries]=useState<CalendarEntry[]>(snapshot as CalendarEntry[]);
  const [live,setLive]=useState(false);
  const [articles,setArticles]=useState<Article[]>([]);
  const [articleOffset,setArticleOffset]=useState(0);
  const [articleStatus,setArticleStatus]=useState<'idle'|'loading'|'ready'|'error'>('idle');
  const todayIso=localIso(new Date());

  useEffect(()=>{fetch(CSV_URL).then(r=>{if(!r.ok)throw new Error();return r.text();}).then(t=>{const parsed=parseCsv(t);if(parsed.length){setEntries(parsed);setLive(true);}}).catch(()=>setLive(false));},[]);

  const featured=useMemo(()=>{
    const dated=[...entries].filter(e=>e.date).sort((a,b)=>a.date.localeCompare(b.date));
    return dated.find(e=>e.date===todayIso) || dated.find(e=>e.date>todayIso) || dated[dated.length-1];
  },[entries,todayIso]);
  const isToday=featured?.date===todayIso;
  const unitNumber=Number(featured?.cedTopic?.split('.')[0])||0;
  const unit=courseData.units[unitNumber-1];
  const color=unit?.color||'#06b6d4';
  const searchTerm=unitSearches[unitNumber-1] || cleanText(featured?.learningTarget).split(' ').slice(0,8).join(' ') || 'biology';

  useEffect(()=>{
    if(!featured)return;
    const controller=new AbortController(); setArticleStatus('loading'); setArticleOffset(0);
    const query=`(${searchTerm}) AND FIRST_PDATE:[2021 TO 2026] sort_date:y`;
    const url=`https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=${encodeURIComponent(query)}&format=json&resultType=core&pageSize=20`;
    fetch(url,{signal:controller.signal}).then(r=>{if(!r.ok)throw new Error();return r.json();}).then(data=>{
      const results=(data?.resultList?.result||[]).filter((item:Article)=>item.title&&item.id);
      setArticles(results); setArticleStatus(results.length?'ready':'error');
    }).catch(error=>{if(error.name!=='AbortError')setArticleStatus('error');});
    return()=>controller.abort();
  },[featured?.date,searchTerm]);

  const article=articles.length?articles[(seedFor(`${todayIso}-${featured?.cedTopic}`)+articleOffset)%articles.length]:undefined;
  const articleUrl=article?.doi?`https://doi.org/${article.doi}`:article?`https://europepmc.org/article/${article.source}/${article.id}`:'#';
  const fields: Array<[string,string|undefined]> = [['Learning target',featured?.learningTarget],['In class',featured?.classwork],['HOME After Class',featured?.homework],['Teacher Notes',featured?.teacherNote],['Campbell',featured?.campbell],['BIOZONE',featured?.biozone],['AP target',featured?.apTarget]];

  return <main className="min-h-[calc(100vh-73px)] bg-slate-100 px-4 py-8"><div className="mx-auto max-w-7xl">
    <section className="mb-6 overflow-hidden rounded-3xl border-2 border-slate-200 bg-white shadow-xl"><div className="flex h-2">{courseData.units.map(item=><span key={item.id} className="flex-1" style={{backgroundColor:item.color}} />)}</div><div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-8"><div><p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-cyan-600">Your AP Biology day at a glance</p><h2 className="text-3xl font-black text-slate-950 sm:text-4xl">{isToday?'Today':featured?.date?'Next Class Day':'Today'}</h2><p className="mt-2 text-lg font-semibold text-slate-600">{featured?.date?formatDate(featured.date):'No calendar information is available.'}</p></div><span className="w-fit rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-800">{live?'Live Google Sheet':'Saved schedule'}</span></div></section>

    {featured?<div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,.65fr)]">
      <section className="overflow-hidden rounded-3xl border-2 border-slate-300 bg-white shadow-lg" style={{borderTopWidth:7,borderTopColor:color}}>
        <header className="flex flex-col gap-3 border-b-2 border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between" style={{backgroundColor:`${color}18`}}><div><p className="text-xs font-extrabold uppercase tracking-wider" style={{color}}>Week {featured.week}</p><h3 className="mt-1 text-2xl font-black text-slate-950">{unit?.name||'AP Biology'}</h3></div>{featured.cedTopic&&<span className="w-fit rounded-full border px-3 py-1 text-sm font-bold text-slate-900" style={{backgroundColor:`${color}40`,borderColor:color}}>CED {featured.cedTopic}</span>}</header>
        <div className="grid gap-4 bg-slate-100 p-5 md:grid-cols-2">{fields.map(([label,value],index)=><article key={label} className={`${index<4?'md:col-span-2':''} rounded-xl border-2 border-slate-300 bg-white p-4 shadow-sm`}><h4 className="mb-2 text-xs font-extrabold uppercase tracking-wider" style={{color}}>{label}</h4><p className={`whitespace-pre-line text-sm leading-6 ${value?'text-slate-700':'italic text-slate-400'}`}>{value||`No ${label.toLowerCase()} posted.`}</p></article>)}</div>
      </section>

      <aside className="overflow-hidden rounded-3xl border-2 border-indigo-200 bg-white shadow-lg">
        <div className="bg-indigo-950 p-5 text-white"><p className="text-xs font-extrabold uppercase tracking-[0.16em] text-indigo-200">Today in Science</p><h3 className="mt-1 text-2xl font-black">Research Connection</h3><p className="mt-2 text-sm text-indigo-100">A recent scientific article connected to today’s AP Biology topic.</p></div>
        <div className="p-5">{articleStatus==='loading'?<div className="animate-pulse space-y-3"><div className="h-4 w-1/3 rounded bg-slate-200"/><div className="h-7 rounded bg-slate-200"/><div className="h-20 rounded bg-slate-100"/></div>:article?<><div className="mb-3 flex flex-wrap gap-2"><span className="rounded-full px-2.5 py-1 text-xs font-bold text-slate-900" style={{backgroundColor:`${color}40`}}>Unit {unitNumber}</span>{article.firstPublicationDate&&<span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">{article.firstPublicationDate.slice(0,4)}</span>}</div><h4 className="text-xl font-black leading-snug text-slate-950">{cleanText(article.title)}</h4><p className="mt-2 text-sm font-semibold text-slate-500">{article.journalTitle||'Scientific literature'}{article.authorString?` · ${article.authorString.split(',').slice(0,2).join(', ')}`:''}</p><p className="mt-4 line-clamp-6 text-sm leading-6 text-slate-700">{cleanText(article.abstractText)||'Open the article to explore how this research connects with today’s biological concepts.'}</p><div className="mt-5 flex flex-col gap-2 sm:flex-row"><a href={articleUrl} target="_blank" rel="noreferrer" className="rounded-xl bg-indigo-600 px-4 py-2.5 text-center text-sm font-bold text-white hover:bg-indigo-700">Read the article ↗</a><button onClick={()=>setArticleOffset(value=>value+1)} className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-50">Show another</button></div><div className="mt-5 rounded-xl bg-amber-50 p-4"><p className="text-xs font-extrabold uppercase tracking-wider text-amber-800">Think about it</p><p className="mt-1 text-sm leading-6 text-slate-700">How does this research connect to today’s learning target? Identify one concept you recognize and one question the article raises.</p></div></>:<div className="rounded-xl bg-slate-100 p-4 text-sm leading-6 text-slate-600">A research connection could not be loaded right now. Today’s class information is still available.</div>}</div>
        <footer className="border-t border-slate-200 px-5 py-3 text-xs text-slate-500">Articles supplied by <a className="font-semibold text-indigo-700 underline" href="https://europepmc.org" target="_blank" rel="noreferrer">Europe PMC</a>. Article selection changes daily.</footer>
      </aside>
    </div>:<div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center text-slate-500">No calendar entry is available yet.</div>}
  </div></main>;
};

export default Today;
