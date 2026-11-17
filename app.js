'use strict';
/* ---------- Ícones ---------- */
const IC=p=>`<svg class="i" viewBox="0 0 24 24" aria-hidden="true">${p}</svg>`;
const ICON={
  edit:IC('<path d="M4 20h4L19 9a2.1 2.1 0 00-3-3L5 17z"/><path d="M14.5 7.5l3 3"/>'),
  check:IC('<path d="M5 12.5l4.5 4.5L19 7.5"/>'),
  x:IC('<path d="M6 6l12 12M18 6L6 18"/>'),
  cal:IC('<rect x="4" y="5.5" width="16" height="14.5" rx="3"/><path d="M4 10h16M9 3.5v3M15 3.5v3"/>'),
  left:IC('<path d="M14.5 6l-6 6 6 6"/>'),
  right:IC('<path d="M9.5 6l6 6-6 6"/>'),
  plus:IC('<path d="M12 5v14M5 12h14"/>'),
  trash:IC('<path d="M5 7h14M9.5 7V5h5v2M7 7l.8 12h8.4L17 7"/>'),
  down:IC('<path d="M12 4v11M7 11l5 5 5-5M5 20h14"/>'),
  up:IC('<path d="M12 16V5M7 9l5-5 5 5M5 20h14"/>'),
  image:IC('<rect x="3.5" y="5" width="17" height="14" rx="2.5"/><circle cx="9" cy="10" r="1.6"/><path d="M4 17l5-4.5 3.5 3L16 12.5l4 4"/>'),
  minus:IC('<path d="M5 12h14"/>'),
  book:IC('<path d="M5.5 4.5h10A2.5 2.5 0 0118 7v12.5H8A2.5 2.5 0 015.5 17z"/><path d="M5.5 17A2.5 2.5 0 018 14.5h10"/>'),
  photo:IC('<path d="M4 8.5A2.5 2.5 0 016.5 6h1.2L9 4h6l1.3 2h1.2A2.5 2.5 0 0120 8.5v8a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 014 16.5z"/><circle cx="12" cy="12.5" r="3.3"/>'),
  print:IC('<path d="M7 9V4.5h10V9M7 17.5H5.5A1.5 1.5 0 014 16v-5a2 2 0 012-2h12a2 2 0 012 2v5a1.5 1.5 0 01-1.5 1.5H17"/><path d="M7 14h10v5.5H7z"/>'),
  back:IC('<path d="M9 6L4 11l5 5"/><path d="M4.5 11H14a5 5 0 010 10h-2"/>'),
  bom:IC('<circle cx="12" cy="12" r="3.6"/><path d="M12 3.5v2M12 18.5v2M3.5 12h2M18.5 12h2M6 6l1.4 1.4M16.6 16.6L18 18M18 6l-1.4 1.4M7.4 16.6L6 18"/>'),
  descoberta:IC('<path d="M9.5 17.5h5M10.5 20.5h3M12 3.5a5.7 5.7 0 00-3.4 10.3c.6.5.9 1.1.9 1.8v.4h5v-.4c0-.7.3-1.3.9-1.8A5.7 5.7 0 0012 3.5z"/>'),
  acao:IC('<path d="M12 19.5s-6.8-4.2-6.8-9.5A3.9 3.9 0 0112 7.6 3.9 3.9 0 0118.8 10c0 5.3-6.8 9.5-6.8 9.5z"/>'),
  acontecimento:IC('<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.4 2.4 3.4 5.2 3.4 8.5s-1 6.1-3.4 8.5c-2.4-2.4-3.4-5.2-3.4-8.5s1-6.1 3.4-8.5z"/>'),
  custom:IC('<path d="M12 4l1.9 5.1L19 11l-5.1 1.9L12 18l-1.9-5.1L5 11l5.1-1.9z"/>'),
  cloudok:IC('<path d="M7 18.5a4.5 4.5 0 01-.6-8.96A5.5 5.5 0 0117 8.6a4.6 4.6 0 01.5 9.9z"/><path d="M9.4 13.4l2 2 3.4-3.7"/>'),
  cloudup:IC('<path d="M7 18.5a4.5 4.5 0 01-.6-8.96A5.5 5.5 0 0117 8.6a4.6 4.6 0 01.5 9.9z"/><path d="M12 16v-4.6M9.9 13.4L12 11.2l2.1 2.2"/>'),
  cloudoff:IC('<path d="M7 18.5a4.5 4.5 0 01-.6-8.96A5.5 5.5 0 0117 8.6a4.6 4.6 0 01.5 9.9z"/><path d="M4.5 4.5l15 15"/>')
};
/* ---------- Dados ---------- */
const KINDS=[
  {k:'bom',t:'Uma coisa boa',h:'Algo digno para agradecer.'},
  {k:'descoberta',t:'Uma descoberta surpreendente',h:'Algo que você aprendeu, notou ou descobriu hoje e que te surpreendeu.'},
  {k:'acao',t:'Uma ação muito boa',h:'Caridade fraterna, prática de virtude, ação concreta: algo que foi feito.'},
  {k:'acontecimento',t:'Acontecimento relevante do dia',h:'O que aconteceu no dia que seja digno de menção e lembrança.'},
  {k:'custom',t:'Card livre',h:'Algo especial que não cabe nos outros.',custom:true}
];
const COLORS=['#d9534f','#3d7be8','#2fa56e','#9b5de5','#e8a317','#17a2b8','#d6428a','#7a8794'];
const MESES=['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
const DIAS=['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado'];
const STORE='meu-dia-em-cards-v1';
/* limites das fotos */
const MAX_PHOTOS_DAY=6;            // por pessoa, por dia
const MAX_INPUT_BYTES=25*1024*1024; // foto original aceita
const TARGET_BYTES=350*1024;       // alvo depois da redução
const MAX_EDGE=1280;               // maior lado, em pixels

const pad=n=>String(n).padStart(2,'0');
const uid=()=>(crypto.randomUUID?crypto.randomUUID():String(Date.now())+Math.random().toString(16).slice(2));
const isoOf=(y,m,d)=>`${y}-${pad(m+1)}-${pad(d)}`;
const todayIso=()=>{const n=new Date();return isoOf(n.getFullYear(),n.getMonth(),n.getDate())};
const fmt=iso=>{const [y,m,d]=iso.split('-');return `${d}/${m}/${y}`};
const parse=iso=>{const [y,m,d]=iso.split('-').map(Number);return new Date(y,m-1,d)};
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

const okAv=v=>typeof v==='string'&&v.length<=30000&&/^data:image\/jpeg;base64,[A-Za-z0-9+\/=]+$/.test(v);
const inkOn=c=>{const n=parseInt(String(c).slice(1),16),r=n>>16,g=(n>>8)&255,b=n&255;return (r*299+g*587+b*114)/1000>150?'#111':'#fff'};
const avatar=(p,cls='')=>okAv(p.avatar)
  ?`<img class="av ${cls}" src="${p.avatar}" alt="" style="--rc:${p.color}">`
  :`<span class="av ${cls}" style="--rc:${p.color};background:${p.color};color:${inkOn(p.color)}" aria-hidden="true">${esc((p.name||'?').trim().charAt(0).toUpperCase()||'?')}</span>`;
async function makeAvatar(file){
  if(!file.type.startsWith('image/'))throw new Error('Escolha uma imagem.');
  if(file.size>25*1024*1024)throw new Error('Imagem grande demais (máximo 25 MB).');
  let bmp;
  try{bmp=await createImageBitmap(file,{imageOrientation:'from-image'})}
  catch(e){bmp=await new Promise((res,rej)=>{const i=new Image();i.onload=()=>res(i);i.onerror=()=>rej(new Error('Não consegui abrir a imagem.'));i.src=URL.createObjectURL(file)})}
  const w=bmp.width||bmp.naturalWidth,h=bmp.height||bmp.naturalHeight,m=Math.min(w,h);
  const c=document.createElement('canvas');c.width=c.height=160;
  const x=c.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,160,160);
  x.drawImage(bmp,(w-m)/2,(h-m)/2,m,m,0,0,160,160);
  let q=.85,url='';
  for(let i=0;i<5;i++){url=c.toDataURL('image/jpeg',q);if(url.length<=24000)break;q-=.12}
  if(bmp.close)bmp.close();
  if(!okAv(url))throw new Error('Não consegui reduzir a imagem.');
  return url;
}
/* Só entra no app o que tem o formato esperado (vale para o que está guardado no aparelho e para backups importados) */
const RE_ID=/^[A-Za-z0-9-]{1,64}$/,RE_DATE=/^\d{4}-\d{2}-\d{2}$/,RE_COLOR=/^#[0-9a-fA-F]{6}$/;
const str=(v,n)=>typeof v==='string'?v.slice(0,n):'';
function clean(d){
  if(!d||typeof d!=='object'||!Array.isArray(d.profiles)||!d.days||typeof d.days!=='object')return null;
  const profiles=d.profiles.filter(p=>p&&RE_ID.test(p.id)).map((p,i)=>{
    const o={id:p.id,name:str(p.name,60).trim()||'Eu',color:RE_COLOR.test(p.color)?p.color:COLORS[i%COLORS.length]};
    if(okAv(p.avatar))o.avatar=p.avatar;
    ['remote','synced','blank'].forEach(k=>{if(p[k]===true)o[k]=true});
    return o;
  });
  if(!profiles.length)return null;
  const days={};
  profiles.forEach(p=>{
    const m=d.days[p.id],out={};if(!m||typeof m!=='object')return;
    Object.keys(m).forEach(k=>{
      const e=m[k];if(!RE_DATE.test(k)||!e||typeof e!=='object')return;
      const c=e.custom&&typeof e.custom==='object'?e.custom:{};
      out[k]={bom:str(e.bom,4000),descoberta:str(e.descoberta,4000),acao:str(e.acao,4000),acontecimento:str(e.acontecimento,4000),custom:{titulo:str(c.titulo,60),texto:str(c.texto,4000),...(c.priv===true?{priv:true}:{})}};
    });
    days[p.id]=out;
  });
  const dirty={};
  if(d.dirty&&typeof d.dirty==='object')Object.keys(d.dirty).forEach(k=>{if(/^(p|e|ph|phd|pd|bar):[A-Za-z0-9|-]{1,120}$/.test(k))dirty[k]=1});
  const o={v:1,profiles,active:profiles.some(p=>p.id===d.active)?d.active:profiles[0].id,days,font:Math.min(1.5,Math.max(.85,+d.font||1)),dirty};
  if(typeof d.cloudUser==='string'&&RE_ID.test(d.cloudUser))o.cloudUser=d.cloudUser;
  const b=d.bar&&typeof d.bar==='object'?d.bar:null,t=b&&b.t&&typeof b.t==='object'?b.t:null;
  if(typeof d.famName==='string')o.famName=d.famName.slice(0,60);
  if(+d.admSeen>0)o.admSeen=+d.admSeen;
  const k=d.bk&&typeof d.bk==='object'?d.bk:{};
  o.bk={auto:k.auto!==false,week:RE_DATE.test(k.week)?k.week:'',last:RE_DATE.test(k.last)?k.last:''};
  if(b){o.bar={color:str(b.color,20),cover:b.cover===true,hasSrc:b.hasSrc===true,at:+b.at||0};if(t)o.bar.t={z:+t.z||1,px:+t.px||0,py:+t.py||0}}
  return o;
}
const fresh=font=>{const id=uid();return {v:1,profiles:[{id,name:'Eu',color:COLORS[0],blank:true}],active:id,days:{},font:font||1,dirty:{},bk:{auto:true,week:'',last:''}}};
function load(){
  try{const s=clean(JSON.parse(localStorage.getItem(STORE)));if(s)return s}catch(e){}
  return fresh();
}
let S=load();
if(!S.dirty)S.dirty={};
if(!S.bk)S.bk={auto:true,week:'',last:''};
const save=()=>{try{localStorage.setItem(STORE,JSON.stringify(S))}catch(e){alert('Não foi possível salvar neste aparelho (armazenamento cheio ou bloqueado).')}};
const me=()=>S.profiles.find(p=>p.id===S.active)||S.profiles.find(p=>!p.remote)||S.profiles[0];
const entryOf=(pid,iso)=>(S.days[pid]||{})[iso];
const VERSION='1.4';
const stamp=()=>Date.now()+Math.random();
const hasContent=en=>!!en&&(['bom','descoberta','acao','acontecimento'].some(k=>(en[k]||'').trim())||((en.custom&&(en.custom.texto||'').trim())));

/* ---------- Fotos: IndexedDB ---------- */
let _db;
const idb=()=>_db||(_db=new Promise((res,rej)=>{
  if(!window.indexedDB)return rej(new Error('Este navegador não permite guardar fotos.'));
  const r=indexedDB.open('meu-dia-em-cards',1);
  r.onupgradeneeded=()=>{const s=r.result.createObjectStore('photos',{keyPath:'id'});s.createIndex('pd',['pid','date']);s.createIndex('pid','pid')};
  r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error||new Error('Não foi possível abrir o banco de fotos.'));
}));
const rq=r=>new Promise((res,rej)=>{r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)});
async function store(mode){const db=await idb();const t=db.transaction('photos',mode);return {s:t.objectStore('photos'),done:new Promise((res,rej)=>{t.oncomplete=res;t.onerror=()=>rej(t.error);t.onabort=()=>rej(t.error)})}}
async function photosFor(pid,date){const {s}=await store('readonly');const l=await rq(s.index('pd').getAll(IDBKeyRange.only([pid,date])));return l.sort((a,b)=>a.ts-b.ts)}
async function getPhoto(id){const {s}=await store('readonly');return rq(s.get(id))}
async function allPhotos(){const {s}=await store('readonly');return rq(s.getAll())}
async function putPhoto(rec){const {s,done}=await store('readwrite');s.put(rec);await done}
async function delPhoto(id){const {s,done}=await store('readwrite');s.delete(id);await done}
async function delPhotosOf(pid){const {s,done}=await store('readwrite');const keys=await rq(s.index('pid').getAllKeys(IDBKeyRange.only(pid)));keys.forEach(k=>s.delete(k));await done}
async function clearPhotos(){const {s,done}=await store('readwrite');s.clear();await done}

/* Reduz a foto no próprio aparelho: lado maior ≤ 1280 px, JPEG, alvo ≈ 350 KB */
async function shrink(file){
  if(!file.type.startsWith('image/'))throw new Error('“'+file.name+'” não é uma imagem.');
  if(file.size>MAX_INPUT_BYTES)throw new Error('“'+file.name+'” é grande demais (máximo 25 MB).');
  let bmp;
  try{bmp=await createImageBitmap(file,{imageOrientation:'from-image'})}
  catch(e){bmp=await new Promise((res,rej)=>{const i=new Image();i.onload=()=>res(i);i.onerror=()=>rej(new Error('Não consegui abrir “'+file.name+'”.'));i.src=URL.createObjectURL(file)})}
  const w0=bmp.width||bmp.naturalWidth,h0=bmp.height||bmp.naturalHeight;
  let edge=MAX_EDGE,q=.76,blob,w,h;
  for(let i=0;i<6;i++){
    const sc=Math.min(1,edge/Math.max(w0,h0));w=Math.max(1,Math.round(w0*sc));h=Math.max(1,Math.round(h0*sc));
    const c=document.createElement('canvas');c.width=w;c.height=h;
    const x=c.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,w,h);x.drawImage(bmp,0,0,w,h);
    blob=await new Promise(r=>c.toBlob(r,'image/jpeg',q));
    if(blob&&blob.size<=TARGET_BYTES)break;
    q=Math.max(.5,q-.07);edge=Math.round(edge*.85);
  }
  if(bmp.close)bmp.close();
  if(!blob)throw new Error('Não consegui reduzir “'+file.name+'”.');
  return {blob,w,h};
}
const blobToDataURL=b=>new Promise((res,rej)=>{const r=new FileReader();r.onload=()=>res(r.result);r.onerror=rej;r.readAsDataURL(b)});

/* ---------- Nuvem (Supabase): login Google, sincronização e família ---------- */
const CLOUD={url:'https://pblqerecgcyyodbdcswe.supabase.co',key:'sb_publishable_Pso0Ju-3VNcaQTSKhmPVtg_YyxHAXYZ'};
const sb=(window.supabase&&CLOUD.url)?window.supabase.createClient(CLOUD.url,CLOUD.key,{auth:{flowType:'pkce',persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}}):null;
const C={user:null,family:null,members:[],msg:'',err:false,busy:false,pendingView:false};
let syncTimer=null;
const scheduleSync=()=>{if(!sb||!C.user)return;clearTimeout(syncTimer);syncTimer=setTimeout(syncNow,1200);renderSync()};
function renderSync(){
  const el=document.getElementById('syncst');if(!el)return;
  if(!sb||!C.user){el.hidden=true;return}
  const pend=Object.keys(S.dirty).length>0;
  const [ic,t]=!navigator.onLine?[ICON.cloudoff,'Sem conexão. Está guardado neste aparelho e será enviado quando a conexão voltar.']
    :C.busy||pend?[ICON.cloudup,'Enviando para a nuvem…']
    :C.err?[ICON.cloudoff,'Não consegui sincronizar agora. Tento de novo em instantes.']
    :[ICON.cloudok,'Tudo guardado na nuvem.'];
  el.hidden=false;el.innerHTML=ic;el.title=t;el.setAttribute('aria-label',t);
}
const famLabel=()=>{const n=((C.family&&C.family.name)||S.famName||'').trim();return !n?'Família':/^fam[ií]lia\b/i.test(n)?n:'Família '+n};
const cloudLine=()=>{const el=document.getElementById('cloudline');if(el){el.textContent=C.msg;el.style.color=C.err?'#c0392b':''}};
const hhmm=()=>{const n=new Date();return pad(n.getHours())+':'+pad(n.getMinutes())};

function markAllDirty(){
  S.profiles.forEach(p=>{if(!p.remote)S.dirty['p:'+p.id]=stamp()});
  Object.keys(S.days).forEach(pid=>{const p=S.profiles.find(x=>x.id===pid);if(p&&!p.remote)Object.keys(S.days[pid]).forEach(d=>{S.dirty['e:'+pid+'|'+d]=stamp()})});
  if(S.bar&&(S.bar.color||S.bar.cover))S.dirty['bar:1']=stamp();
  allPhotos().then(l=>{l.forEach(f=>{if(!f.synced)S.dirty['ph:'+f.id]=stamp()});save()}).catch(()=>{});
}

async function pushDirty(){
  const order=k=>({p:0,e:1,ph:2,phd:3,pd:4,bar:5})[k.slice(0,k.indexOf(':'))];
  const keys=Object.keys(S.dirty).sort((a,b)=>order(a)-order(b));
  let firstErr=null;
  for(const k of keys){
    const t=k.slice(0,k.indexOf(':')),rest=k.slice(k.indexOf(':')+1),st=S.dirty[k];
    try{
    if(t==='p'){
      const p=S.profiles.find(x=>x.id===rest);
      if(p&&!p.remote){const {error}=await sb.from('people').upsert({id:p.id,owner_id:C.user.id,name:p.name.slice(0,60),color:p.color,avatar:okAv(p.avatar)?p.avatar:null,family_id:C.family?C.family.id:null});if(error)throw error;p.synced=true;delete p.blank}
    }else if(t==='e'){
      const [pid,date]=rest.split('|'),p=S.profiles.find(x=>x.id===pid),en=entryOf(pid,date);
      if(p&&!p.remote){
        if(!p.synced){const pr=await sb.from('people').upsert({id:p.id,owner_id:C.user.id,name:p.name.slice(0,60),color:p.color,avatar:okAv(p.avatar)?p.avatar:null,family_id:C.family?C.family.id:null});if(pr.error)throw pr.error;p.synced=true;delete p.blank;delete S.dirty['p:'+p.id]}
        const c=(en&&en.custom)||{},priv=isPriv(en);
        // primeiro a parte que a família lê (sem o card reservado), depois a parte só do dono
        if(hasShared(en)){
          const {error}=await sb.from('entries').upsert({person_id:pid,date,bom:(en.bom||'').slice(0,4000),descoberta:(en.descoberta||'').slice(0,4000),acao:(en.acao||'').slice(0,4000),acontecimento:(en.acontecimento||'').slice(0,4000),custom_titulo:priv?'':(c.titulo||'').slice(0,60),custom_texto:priv?'':(c.texto||'').slice(0,4000)});
          if(error)throw error;
        }else{const {error}=await sb.from('entries').delete().eq('person_id',pid).eq('date',date);if(error)throw error}
        if(priv){const {error}=await sb.from('entries_private').upsert({person_id:pid,date,custom_titulo:(c.titulo||'').slice(0,60),custom_texto:(c.texto||'').slice(0,4000),updated_at:new Date().toISOString()});if(error)throw error}
        else{const {error}=await sb.from('entries_private').delete().eq('person_id',pid).eq('date',date);if(error)throw error}
      }
    }else if(t==='ph'){
      const rec=await getPhoto(rest);
      if(rec){
        const path=`${rec.pid}/${rec.id}.jpg`;
        const up=await sb.storage.from('photos').upload(path,rec.blob,{contentType:'image/jpeg',upsert:true});if(up.error)throw up.error;
        const ins=await sb.from('photos').upsert({id:rec.id,person_id:rec.pid,date:rec.date,path,w:rec.w,h:rec.h,bytes:rec.blob.size});if(ins.error)throw ins.error;
        rec.synced=true;await putPhoto(rec);
      }
    }else if(t==='phd'){
      const [pid,id]=rest.split('|');
      const r1=await sb.storage.from('photos').remove([`${pid}/${id}.jpg`]);if(r1.error)throw r1.error;
      const r2=await sb.from('photos').delete().eq('id',id);if(r2.error)throw r2.error;
    }else if(t==='bar'){
      const b=S.bar||(S.bar={});if(!b.at)b.at=Date.now();
      let cover=null,src=null;try{if(b.cover){cover=localStorage.getItem(BAR_KEY);if(b.hasSrc)src=localStorage.getItem(BAR_SRC)}}catch(e){}
      const {error}=await sb.from('user_prefs').upsert({user_id:C.user.id,bar:{color:b.color||'verde',t:cover&&src?(b.t||null):null,at:b.at},cover,src,updated_at:new Date().toISOString()});
      if(error)throw error;
    }else if(t==='pd'){
      const l=await sb.storage.from('photos').list(rest,{limit:1000});
      if(!l.error&&l.data&&l.data.length){await sb.storage.from('photos').remove(l.data.map(o=>`${rest}/${o.name}`))}
      const {error}=await sb.from('people').delete().eq('id',rest);if(error)throw error;
    }
    if(S.dirty[k]===st)delete S.dirty[k];   // se mudou durante o envio, continua pendente
    save();
    }catch(e){firstErr=firstErr||e}
  }
  if(firstErr)throw firstErr;
}

async function pullAll(){
  const uid=C.user.id;
  const pr=await sb.from('people').select('id,owner_id,name,color,avatar');if(pr.error)throw pr.error;
  const remoteIds=new Set(pr.data.map(r=>r.id));
  const hasMine=pr.data.some(r=>r.owner_id===uid);
  for(const r of pr.data){
    let p=S.profiles.find(x=>x.id===r.id);
    if(!p){p={id:r.id,name:r.name,color:r.color};S.profiles.push(p)}
    else if(!S.dirty['p:'+r.id]){p.name=r.name;p.color=r.color}
    p.remote=r.owner_id!==uid;p.synced=true;delete p.blank;
    if(!S.dirty['p:'+r.id]){if(okAv(r.avatar))p.avatar=r.avatar;else delete p.avatar}
  }
  // conta nova (sem pessoas na nuvem): sobe a pessoa inicial
  if(!hasMine)S.profiles.forEach(p=>{if(!p.remote&&!p.synced)S.dirty['p:'+p.id]=stamp()});
  // cores diferentes dentro da família
  const taken=new Set(S.profiles.filter(p=>p.remote).map(p=>p.color));
  S.profiles.forEach(p=>{if(!p.remote&&taken.has(p.color)){const c=COLORS.find(c=>!S.profiles.some(q=>q.color===c));if(c){p.color=c;S.dirty['p:'+p.id]=stamp();setTimeout(scheduleSync,0)}}});
  // a pessoa inicial vazia some se a conta já tem pessoas na nuvem
  if(hasMine)S.profiles=S.profiles.filter(p=>!(p.blank&&!p.synced));
  // pessoas removidas em outro lugar (ou família deixada)
  S.profiles=S.profiles.filter(p=>!p.synced||remoteIds.has(p.id)||S.dirty['p:'+p.id]);
  if(!S.profiles.some(p=>!p.remote)){const id=uid();S.profiles.push({id,name:'Eu',color:COLORS[0]});S.active=id;S.dirty['p:'+id]=stamp()}
  else{delete (S.profiles.find(p=>p.blank)||{}).blank}
  if(!S.profiles.some(p=>p.id===S.active&&!p.remote))S.active=S.profiles.find(p=>!p.remote).id;
  const ids=[...remoteIds];
  // dias
  let rows=[];
  if(ids.length)for(let from=0;;from+=1000){
    const r=await sb.from('entries').select('*').in('person_id',ids).order('person_id').order('date').range(from,from+999);if(r.error)throw r.error;
    rows=rows.concat(r.data);if(r.data.length<1000)break;
  }
  const have=new Set();
  rows.forEach(r=>{
    const k=r.person_id+'|'+r.date;have.add(k);if(S.dirty['e:'+k])return;
    (S.days[r.person_id]=S.days[r.person_id]||{})[r.date]={bom:r.bom,descoberta:r.descoberta,acao:r.acao,acontecimento:r.acontecimento,custom:{titulo:r.custom_titulo,texto:r.custom_texto}};
  });
  // cards reservados (a nuvem só devolve os da própria conta)
  if(ids.length)for(let from=0;;from+=1000){
    const r=await sb.from('entries_private').select('person_id,date,custom_titulo,custom_texto').in('person_id',ids).order('person_id').order('date').range(from,from+999);if(r.error)throw r.error;
    r.data.forEach(x=>{
      const k=x.person_id+'|'+x.date,had=have.has(k);have.add(k);if(S.dirty['e:'+k])return;
      const m=S.days[x.person_id]=S.days[x.person_id]||{};
      if(!had||!m[x.date])m[x.date]={bom:'',descoberta:'',acao:'',acontecimento:''};
      m[x.date].custom={titulo:x.custom_titulo,texto:x.custom_texto,priv:true};
    });
    if(r.data.length<1000)break;
  }
  ids.forEach(pid=>{const m=S.days[pid]||{};Object.keys(m).forEach(d=>{if(!have.has(pid+'|'+d)&&!S.dirty['e:'+pid+'|'+d])delete m[d]})});
  Object.keys(S.days).forEach(pid=>{if(!S.profiles.some(p=>p.id===pid))delete S.days[pid]});
  // barra (cor e capa) da conta
  try{
    const r=await sb.from('user_prefs').select('bar,cover,src').maybeSingle();if(r.error)throw r.error;
    const row=r.data,loc=S.bar||{},rat=row?(row.bar&&row.bar.at)||0:-1;
    if(!S.dirty['bar:1']){
      if(row&&rat>(loc.at||0)){
        try{
          if(row.cover){localStorage.setItem(BAR_KEY,row.cover);if(row.src)localStorage.setItem(BAR_SRC,row.src);else localStorage.removeItem(BAR_SRC)}
          else{localStorage.removeItem(BAR_KEY);localStorage.removeItem(BAR_SRC)}
          S.bar={color:row.bar.color||'verde',cover:!!row.cover,hasSrc:!!(row.cover&&row.src),t:row.bar.t||undefined,at:rat};
        }catch(e){console.warn('barra: armazenamento cheio')}
      }else if((loc.color||loc.cover)&&(!row||(loc.at||0)>rat))S.dirty['bar:1']=stamp();
    }
    applyBar();
  }catch(e){console.warn('barra',e)}
  // fotos
  try{
    let prow=[];
    if(ids.length)for(let from=0;;from+=1000){
      const r=await sb.from('photos').select('id,person_id,date,path,w,h,created_at').in('person_id',ids).order('id').range(from,from+999);if(r.error)throw r.error;
      prow=prow.concat(r.data);if(r.data.length<1000)break;
    }
    const local=await allPhotos(),localIds=new Set(local.map(f=>f.id)),remoteP=new Set(prow.map(r=>r.id));
    for(const r of prow){
      if(localIds.has(r.id)||S.dirty['phd:'+r.person_id+'|'+r.id])continue;
      const d=await sb.storage.from('photos').download(r.path);
      if(!d.error&&d.data)await putPhoto({id:r.id,pid:r.person_id,date:r.date,w:r.w,h:r.h,ts:Date.parse(r.created_at),blob:d.data,synced:true});
    }
    for(const f of local){if(f.synced&&!remoteP.has(f.id)&&!S.dirty['ph:'+f.id])await delPhoto(f.id)}
  }catch(e){console.warn('fotos',e)}
}

async function syncNow(){
  if(!sb||!C.user||C.busy)return;
  C.busy=true;C.msg='Sincronizando…';C.err=false;cloudLine();renderSync();
  let failure=null;
  try{await pushDirty()}catch(e){failure=e}
  try{await pullAll()}catch(e){failure=failure||e}
  try{const r=await sb.rpc('get_my_family');if(!r.error){C.family=r.data||null;S.famName=C.family?C.family.name:'';
    if(C.family){const m=await sb.rpc('get_family_members');if(!m.error&&Array.isArray(m.data))C.members=m.data}else C.members=[]}}catch(e){}
  // painel de uso: o banco só responde para quem mantém o app; para as outras contas vem vazio e não se pergunta de novo
  if(C.admin!==false){try{const a=await sb.rpc('admin_overview');if(!a.error){C.admin=Array.isArray(a.data)?a.data:false;if(C.admin&&!S.admSeen)S.admSeen=Date.now()}}catch(e){}}
  if(failure){console.warn(failure);C.err=true;C.msg=navigator.onLine?'Não consegui sincronizar agora. Tento de novo em instantes.':'Sem conexão. Vai sincronizar quando voltar.'}
  else{C.msg='Sincronizado às '+hhmm()}
  C.busy=false;save();cloudLine();safeRender();renderSync();
  if(!failure)autoBackup();
  if(failure)setTimeout(syncNow,30000);
  else if(Object.keys(S.dirty).length)setTimeout(syncNow,300);   // a leitura criou pendências (ex.: pessoa inicial)
}
function editing(){
  const a=document.activeElement,typing=a&&/^(TEXTAREA|INPUT)$/.test(a.tagName)&&$app.contains(a);
  const compose=document.getElementById('compose'),composing=compose&&[...compose.querySelectorAll('[data-f]')].some(x=>x.type!=='checkbox'&&x.value.trim());
  return !!(typing||composing||document.querySelector('.flip.flipped'));
}
function safeRender(){
  // não redesenha enquanto a pessoa está escrevendo ou editando um card
  if(editing()){C.pendingView=true;return}
  C.pendingView=false;render(true);
}
async function afterLogin(user){
  C.user=user;C.admin=undefined;C.admBase=null;
  if(S.cloudUser&&S.cloudUser!==user.id){
    const pend=Object.keys(S.dirty).length>0;
    if(!confirm('Este aparelho está ligado a outra conta Google. Entrar com esta conta troca os dados do aparelho pelos dela.\n\n'+(pend?'ATENÇÃO: há alterações da outra conta que ainda não foram enviadas para a nuvem e serão perdidas.':'Os dados da outra conta continuam guardados na nuvem.')+'\n\nContinuar?')){C.user=null;await sb.auth.signOut();return}
    try{await clearPhotos()}catch(e){}
    try{localStorage.removeItem(BAR_KEY);localStorage.removeItem(BAR_SRC)}catch(e){}
    try{localStorage.removeItem(DRAFT)}catch(e){}
    S=fresh(S.font);
  }
  try{navigator.storage&&navigator.storage.persist&&navigator.storage.persist()}catch(e){}
  const gname=String((user.user_metadata&&(user.user_metadata.name||user.user_metadata.full_name))||'').trim().split(/\s+/)[0];
  if(!S.cloudUser){
    const bp=S.profiles.find(p=>p.blank&&p.name==='Eu');if(bp&&gname)bp.name=gname.slice(0,30);
    S.cloudUser=user.id;
    let photos=[];try{photos=await allPhotos()}catch(e){}
    const hasData=Object.values(S.days).some(m=>Object.keys(m).length)||S.profiles.length>1||photos.length>0||S.profiles.some(p=>!p.blank);
    if(hasData)markAllDirty();
  }
  save();render(true);syncNow();
}
async function cloudSignIn(){
  C.msg='';
  const {error}=await sb.auth.signInWithOAuth({provider:'google',options:{redirectTo:location.origin+location.pathname}});
  if(error){C.err=true;C.msg='Não foi possível iniciar o login: '+error.message;cloudLine()}
}
let leaving=false;
async function wipeDevice(msg){
  clearTimeout(syncTimer);C.user=null;C.family=null;C.members=[];C.admin=undefined;C.admBase=null;C.msg='';C.err=false;
  try{localStorage.removeItem(BAR_KEY);localStorage.removeItem(BAR_SRC)}catch(e){}
  try{await clearPhotos()}catch(e){}
  try{localStorage.removeItem(DRAFT)}catch(e){}
  S=fresh(S.font);save();V.tab='hoje';V.date=todayIso();V.dwho=null;V.acct=false;render();applyBar();renderSync();
  if(msg)live(msg);
}
async function cloudSignOut(everywhere){
  // envia o que falta antes de sair; os dados continuam na conta e saem deste aparelho
  if(everywhere&&!confirm('Sair da conta em todos os aparelhos? Cada um vai pedir o login de novo.'))return;
  if(Object.keys(S.dirty).length&&!C.busy){try{await pushDirty()}catch(e){}}
  if(Object.keys(S.dirty).length&&!confirm('Há alterações que ainda não foram enviadas para a nuvem. Se sair agora, elas serão perdidas. Sair mesmo assim?'))return;
  leaving=true;
  try{await sb.auth.signOut({scope:everywhere?'global':'local'})}catch(e){}
  await wipeDevice(everywhere?'Você saiu de todos os aparelhos.':'Você saiu. Seus dias continuam guardados na sua conta.');
  leaving=false;
}
async function deleteAccount(){
  if(prompt('Isto apaga para sempre a sua conta: pessoas, dias, fotos e capa, em todos os aparelhos. Não pode ser desfeito.\n\nPara confirmar, digite APAGAR')!=='APAGAR')return;
  C.err=false;C.msg='Apagando a conta…';cloudLine();
  try{
    const pr=await sb.from('people').select('id').eq('owner_id',C.user.id);if(pr.error)throw pr.error;
    for(const p of pr.data){
      const l=await sb.storage.from('photos').list(p.id,{limit:1000});if(l.error)throw l.error;
      if(l.data.length){const r=await sb.storage.from('photos').remove(l.data.map(o=>`${p.id}/${o.name}`));if(r.error)throw r.error}
    }
    const r=await sb.rpc('delete_my_account');if(r.error)throw r.error;
  }catch(e){console.warn(e);C.err=true;C.msg='Não consegui apagar a conta agora. Tente de novo.';cloudLine();return}
  leaving=true;
  try{await sb.auth.signOut({scope:'local'})}catch(e){}
  await wipeDevice('Conta apagada.');
  leaving=false;
}
async function famAct(fn,okMsg){
  C.err=false;C.msg='Aguarde…';cloudLine();
  const r=await fn();
  if(r.error){C.err=true;C.msg=(r.error.message||'Erro').replace(/^.*?:\s*/,'');cloudLine();return}
  C.msg=okMsg;await syncNow();
}
if(sb){
  sb.auth.onAuthStateChange((ev,session)=>{
    if(session&&session.user){if(!C.user||C.user.id!==session.user.id)setTimeout(()=>afterLogin(session.user),0)}
    else if(ev==='SIGNED_OUT'&&!leaving){
      // sessão encerrada de fora (ex.: "sair de todos os aparelhos"): o diário sai deste aparelho, salvo se houver algo ainda não enviado
      C.user=null;C.family=null;
      if(S.cloudUser&&!Object.keys(S.dirty).length)wipeDevice();else{renderAccount();renderSync()}
    }
  });
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)syncNow()});
  window.addEventListener('online',()=>{renderSync();syncNow()});
  window.addEventListener('offline',renderSync);
  setInterval(()=>{if(!document.hidden)syncNow()},60000);
}

/* Card livre "só para mim": não é publicado na família */
const isPriv=en=>!!(en&&en.custom&&en.custom.priv&&(en.custom.texto||'').trim());
const hasShared=en=>!!en&&(['bom','descoberta','acao','acontecimento'].some(k=>(en[k]||'').trim())||(!isPriv(en)&&!!(en.custom&&(en.custom.texto||'').trim())));
const PUBHINT='Desmarque para guardar este card só para você.';
const pubBox=on=>`<label class="pub" title="${PUBHINT}"><input type="checkbox" data-f="custom-p" ${on?'checked':''}><span>Publicar na família</span></label>`;

/* ---------- Estado de tela ---------- */
let now=new Date();
const V={acct:false,dmonth:null,dmonths:[],avTarget:null,tab:'hoje',date:todayIso(),scope:'eu',dwho:null,photoTarget:null,
  cal:{lvl:'month',y:now.getFullYear(),m:now.getMonth(),d:null},saving:false,msg:''};
const $app=document.getElementById('app');
const live=t=>{const l=document.getElementById('live');l.textContent='';setTimeout(()=>l.textContent=t,30)};
const ibtn=(a,icon,label,extra='',cls='')=>`<button class="ibtn ${cls}" data-a="${a}" ${extra} aria-label="${esc(label)}" title="${esc(label)}">${icon}</button>`;

/* ---------- Cards ---------- */
function titleOf(kind,en){return kind.custom?((en&&en.custom&&en.custom.titulo)||'Card livre'):kind.t}
function head(kind,en){return `<h3><span class="kic" aria-hidden="true">${ICON[kind.k]}</span><span class="ttl" title="${esc(titleOf(kind,en))}">${esc(titleOf(kind,en))}</span></h3>`}
function valueOf(kind,en){
  if(!en)return kind.custom?{titulo:'',texto:''}:'';
  if(kind.custom)return en.custom||{titulo:'',texto:''};
  return en[kind.k]||'';
}
function composeCard(kind,idp){
  const lab=`${idp}-${kind.k}`;
  if(kind.custom){
    return `<article class="card k-${kind.k}" data-k="${kind.k}">
      <h3><span class="kic" aria-hidden="true">${ICON[kind.k]}</span><label class="ttl" for="${lab}-t">${kind.t}</label></h3>
      <input class="t" id="${lab}-t" data-f="custom-t" maxlength="40" placeholder="Dê um título (opcional)">
      <label class="sr" for="${lab}">Texto do card livre</label>
      <textarea class="ruled" maxlength="4000" id="${lab}" data-f="custom-x" placeholder="${esc(kind.h)}"></textarea>${pubBox(true)}</article>`;
  }
  return `<article class="card k-${kind.k}" data-k="${kind.k}">
    <h3><span class="kic" aria-hidden="true">${ICON[kind.k]}</span><label class="ttl" for="${lab}">${kind.t}</label></h3>
    <textarea class="ruled" maxlength="4000" id="${lab}" data-f="${kind.k}" placeholder="${esc(kind.h)}"></textarea></article>`;
}
function flipCard(kind,en,pid,iso,editable){
  const v=valueOf(kind,en);
  const text=kind.custom?v.texto:v;
  const key=`${pid}|${iso}|${kind.k}`;
  const lab='f'+key.replace(/[^a-z0-9]/gi,'');
  const ttl=titleOf(kind,en);
  const front=`<div class="face front">${head(kind,en)}
      ${text.trim()?`<p class="txt">${esc(text)}</p>`:`<p class="txt empty">Em branco</p>`}
      ${kind.custom&&editable?`<span class="privtag" ${v.priv&&text.trim()?'':'hidden'}>Só para mim</span>`:''}
      ${editable?`<span class="corner">${ibtn('flip',ICON.edit,`Editar “${ttl}” (virar o card)`)}</span>`:''}</div>`;
  if(!editable)return `<div class="flip"><div class="inner">${front}</div></div>`;
  const back=`<div class="face back" inert>
      ${kind.custom?`<h3><span class="kic" aria-hidden="true">${ICON.custom}</span><input class="t" data-f="custom-t" maxlength="40" aria-label="Título do card livre" placeholder="Card livre" value="${esc(v.titulo)}" style="padding-bottom:0;border:0;min-width:0"></h3>`:`<h3><span class="kic" aria-hidden="true">${ICON[kind.k]}</span><label class="ttl" for="${lab}">${kind.t}</label></h3>`}
      <textarea class="ruled" maxlength="4000" id="${lab}" data-f="${kind.custom?'custom-x':kind.k}" ${kind.custom?'aria-label="Texto do card livre"':''} placeholder="${esc(kind.h)}">${esc(text)}</textarea>
      <div class="actions">${kind.custom?pubBox(!v.priv):''}${ibtn('flip',ICON.x,'Cancelar')}${ibtn('fixsave',ICON.check,'Salvar correção',`data-pid="${pid}" data-date="${iso}" data-k="${kind.k}"`,'go lg')}</div></div>`;
  return `<div class="flip" data-key="${key}"><div class="inner">${front}${back}</div></div>`;
}
function readCards(pid,iso,editable,fam){
  const en=entryOf(pid,iso);
  return KINDS.filter(k=>!(fam&&k.custom&&isPriv(en))).filter(k=>editable||(k.custom?(en&&en.custom&&(en.custom.texto||'').trim()):(en&&(en[k.k]||'').trim())))
    .map(k=>flipCard(k,en,pid,iso,editable)).join('');
}

/* Rascunho: o que está sendo escrito e ainda não foi guardado sobrevive a trocar de aba, recarregar ou o sistema fechar o app */
const DRAFT='gd-draft';let draftT=null;
const drafts=()=>{try{const d=JSON.parse(localStorage.getItem(DRAFT));return d&&typeof d==='object'?d:{}}catch(e){return {}}};
function saveDraft(){
  clearTimeout(draftT);
  const c=document.getElementById('compose'),k=c&&c.dataset.dk;if(!k)return;
  const f=readFields(c),any=Object.keys(f).some(x=>typeof f[x]==='string'&&f[x].trim()),d=drafts();
  if(any)d[k]=f;else delete d[k];
  try{if(Object.keys(d).length)localStorage.setItem(DRAFT,JSON.stringify(d));else localStorage.removeItem(DRAFT)}catch(e){}
}
function dropDraft(k){const d=drafts();delete d[k];try{if(Object.keys(d).length)localStorage.setItem(DRAFT,JSON.stringify(d));else localStorage.removeItem(DRAFT)}catch(e){}}
function restoreDraft(){
  const c=document.getElementById('compose'),f=c&&drafts()[c.dataset.dk];if(!f||typeof f!=='object')return;
  c.querySelectorAll('[data-f]').forEach(el=>{const v=f[el.dataset.f];if(el.type==='checkbox'){if(typeof v==='boolean')el.checked=v}else if(typeof v==='string')el.value=v.slice(0,4000)});
}
document.addEventListener('input',e=>{if(e.target.closest&&e.target.closest('#compose')){clearTimeout(draftT);draftT=setTimeout(saveDraft,400)}});
document.addEventListener('visibilitychange',()=>{if(document.hidden)saveDraft();else rollDay()});
window.addEventListener('pagehide',saveDraft);
/* Virada do dia com o app aberto: "Hoje" acompanha a data, a não ser que haja algo sendo escrito */
let dayMark=todayIso();
function rollDay(){
  const t=todayIso();if(t===dayMark)return;
  const was=dayMark;dayMark=t;now=new Date();
  if(V.date===was&&!editing()){V.date=t;V.msg='';if(!gated())render(true)}
}
setInterval(rollDay,60000);
/* Outra aba ou janela do app gravou neste aparelho: esta passa a usar os mesmos dados */
window.addEventListener('storage',e=>{
  if(e.key!==STORE||!e.newValue)return;
  try{const d=clean(JSON.parse(e.newValue));if(d){S=d;safeRender();renderSync()}}catch(_){}
});

/* ---------- Views ---------- */
function viewHoje(){
  const p=me(),iso=V.date,en=entryOf(p.id,iso),d=parse(iso),away=iso!==todayIso();
  const saved=hasContent(en);
  let h=`<div class="dateline"><h2 class="title date">${fmt(iso)}</h2>
    <span class="wd">${DIAS[d.getDay()]}</span></div>`;
  if(saved){
    h+=`<div class="okline"><b><span class="tick">${ICON.check}</span>Guardado</b><span>Vire um card para corrigir.</span>
    <span class="row"><button class="linkbtn" data-a="opencal" data-date="${iso}">${ICON.cal}Ver no calendário</button><button class="linkbtn" data-a="tab" data-v="diario">${ICON.book}Ver no diário</button></span></div>
    <div class="cards">${readCards(p.id,iso,true)}</div>`;
  }else{
    h+=`<div class="cards" id="compose" data-dk="${p.id}|${iso}">${KINDS.map(k=>composeCard(k,'new')).join('')}</div>
    <div class="row"><button class="btn" data-a="guardar" ${V.saving?'disabled':''}>Guardar</button><span class="status" id="status" role="status">${esc(V.msg)}</span></div>`;
  }
  return h;
}

function peopleInScope(){return V.scope==='familia'?S.profiles:[me()]}
function daysWith(iso){const has=V.scope==='familia'?hasShared:hasContent;return peopleInScope().filter(p=>has(entryOf(p.id,iso)))}
function monthCount(y,m){
  const n=new Date(y,m+1,0).getDate();let c=0;
  for(let d=1;d<=n;d++)if(daysWith(isoOf(y,m,d)).length)c++;
  return c;
}
function scopeSeg(){
  if(S.profiles.length<2)return '';
  return `<div class="seg" role="group" aria-label="Quem mostrar">
    <button data-a="scope" data-v="eu" aria-pressed="${V.scope==='eu'}">Só ${esc(me().name)}</button>
    <button data-a="scope" data-v="familia" aria-pressed="${V.scope==='familia'}">${esc(famLabel())}</button></div>`;
}
function legend(){
  if(V.scope!=='familia')return '';
  return `<div class="legend">${S.profiles.map(p=>`<span>${avatar(p,'xs')}${esc(p.name)}</span>`).join('')}</div>`;
}
function viewCal(){
  const c=V.cal,t=todayIso();let h='';
  const back=c.lvl==='month'?`<button class="linkbtn" data-a="calgo" data-l="year">${ICON.left}${c.y}</button>`
    :c.lvl==='day'?`<button class="linkbtn" data-a="calgo" data-l="month">${ICON.left}${MESES[c.m]}</button>`:'';
  const thisMonth=c.lvl==='month'&&(c.y!==now.getFullYear()||c.m!==now.getMonth());
  h+=`<div class="bar-top">${back}${scopeSeg()}${thisMonth?`<button class="linkbtn" data-a="calnow">Este mês</button>`:''}</div>`;
  h+=legend();
  if(c.lvl==='year'){
    let done=0;
    const cells=MESES.map((nm,m)=>{
      const n=new Date(c.y,m+1,0).getDate(),cnt=monthCount(c.y,m),off=new Date(c.y,m,1).getDay();if(cnt>0)done++;
      let mini='';for(let i=0;i<off;i++)mini+='<i class="sp"></i>';
      for(let d=1;d<=n;d++)mini+=`<i class="${daysWith(isoOf(c.y,m,d)).length?'on':''}"></i>`;
      return `<button class="mtile" data-a="openmonth" data-m="${m}" aria-label="${nm} de ${c.y}: ${cnt} de ${n} dias registrados${cnt>0?', mês completo':''}">
        <span class="nm">${nm}${cnt>0?'<i class="tick" aria-hidden="true"></i>':''}</span><span class="mini" aria-hidden="true">${mini}</span><span class="cnt">${cnt} de ${n} dias</span></button>`;
    }).join('');
    h+=`<div class="heading">${ibtn('yr',ICON.left,'Ano anterior','data-v="-1"','lg')}
      <h3>${c.y}<small>${done} de 12 meses com registros${done===12?' · ano completo':''}</small></h3>
      ${ibtn('yr',ICON.right,'Próximo ano','data-v="1"','lg')}</div>
      <div class="months">${cells}</div>
      <p class="hint-cal">Um mês conta como completo quando tem pelo menos 1 dia guardado.</p>`;
  }else if(c.lvl==='month'){
    const n=new Date(c.y,c.m+1,0).getDate(),off=new Date(c.y,c.m,1).getDay();
    let cells='';
    for(let i=0;i<off;i++)cells+='<div></div>';
    for(let d=1;d<=n;d++){
      const iso=isoOf(c.y,c.m,d),who=daysWith(iso),future=iso>t;
      const cc=who.length===1?who[0].color:'var(--muted)';
      cells+=`<button class="day ${who.length?'has':''} ${iso===t?'today':''}" style="--cc:${cc}" data-a="openday" data-d="${d}" ${future?'disabled':''}
        aria-label="${d} de ${MESES[c.m]}, ${iso===t?'hoje, ':''}${who.length?'registrado'+(V.scope==='familia'?' por '+esc(who.map(p=>p.name).join(', ')):''):'sem registro'}">
        <span>${d}</span><span class="dots" aria-hidden="true">${V.scope==='familia'?who.map(p=>`<i class="dot" style="background:${p.color}"></i>`).join(''):''}</span></button>`;
    }
    h+=`<div class="heading">${ibtn('mo',ICON.left,'Mês anterior','data-v="-1"','lg')}
      <h3>${MESES[c.m]} ${c.y}<small>${monthCount(c.y,c.m)} de ${n} dias guardados</small></h3>
      ${ibtn('mo',ICON.right,'Próximo mês','data-v="1"','lg')}</div>
      <div class="grid">${DIAS.map(x=>`<div class="wdh" aria-hidden="true">${x.slice(0,3)}</div>`).join('')}${cells}</div>
      <p class="hint-cal">Toque em um dia para ver ou preencher os cards dele.</p>`;
  }else{
    const iso=isoOf(c.y,c.m,c.d),d=parse(iso),next=iso>=t;
    h+=`<div class="heading">${ibtn('dy',ICON.left,'Dia anterior','data-v="-1"','lg')}
      <h3>${fmt(iso)}<small>${DIAS[d.getDay()]}</small></h3>
      ${ibtn('dy',ICON.right,'Próximo dia','data-v="1"'+(next?' disabled':''),'lg')}</div>`;
    let shown=false;
    const famS=V.scope==='familia',has=famS?hasShared:hasContent;
    peopleInScope().forEach(p=>{
      const en=entryOf(p.id,iso),editable=p.id===S.active;
      if(!has(en)&&!editable)return;
      shown=true;
      if(famS||!has(en))h+=`<div class="person"><i class="dot" style="background:${p.color}"></i>${esc(p.name)}</div>`;
      if(has(en))h+=`<div class="cards" style="margin-top:14px">${readCards(p.id,iso,editable,famS)}</div>`;
      else h+=`<p class="sub" style="margin-top:6px">Nada guardado neste dia.</p><button class="btn sm" data-a="gohoje" data-date="${iso}">Preencher este dia</button>`;
    });
    if(!shown)h+='<p class="sub" style="margin-top:14px">Nada guardado neste dia.</p>';
  }
  return h;
}
function viewPessoas(){
  let h=`<h2 class="title">Pessoas</h2><p class="sub">Cada pessoa tem o próprio calendário. Quem usa o mesmo aparelho escolhe aqui quem está escrevendo agora.</p><div class="plist">`;
  S.profiles.forEach(p=>{
    const on=p.id===S.active;
    if(p.remote){h+=`<div class="pitem">${avatar(p,'lg')}<span class="pname">${esc(p.name)}</span><span class="badge" style="color:var(--muted)">da família</span></div>`;return}
    h+=`<div class="pitem"><button class="avbtn" data-a="avpick" data-pid="${p.id}" aria-label="Trocar a foto de ${esc(p.name)}" title="Trocar a foto">${avatar(p,'lg')}<span class="avedit">${ICON.photo}</span></button>
      ${p.avatar?ibtn('avdel',ICON.x,'Remover a foto',`data-pid="${p.id}"`):''}
      <label class="sr" for="n-${p.id}">Nome</label><input type="text" id="n-${p.id}" value="${esc(p.name)}" maxlength="30" data-a="rename" data-pid="${p.id}">
      ${on?`<span class="badge">${ICON.check}Escrevendo agora</span>`:`<button class="btn sec sm" data-a="setme" data-pid="${p.id}">Usar esta pessoa</button>`}
      ${S.profiles.filter(x=>!x.remote).length>1?ibtn('delp',ICON.trash,`Remover ${p.name}`,`data-pid="${p.id}"`):''}</div>`;
  });
  h+=`</div><button class="btn sec sm" data-a="addp">${ICON.plus}Adicionar pessoa</button>
  ${cloudSection()}
  ${adminSection()}
  <h2 class="sec-t">Seus dados</h2>
  <p class="sub" style="margin-bottom:6px">${C.user?'Seus dias ficam neste aparelho e na nuvem.':'Tudo fica guardado neste aparelho.'} Faça backup de tempos em tempos.</p>
  <p class="sub" style="margin-bottom:14px" id="photoinfo"></p>
  <div class="row"><button class="btn sec sm" data-a="export">${ICON.down}Exportar</button>
  <label class="btn sec sm" style="cursor:pointer">${ICON.up}Importar<input type="file" accept="application/json" id="imp" class="sr"></label></div>
  <label class="check"><input type="checkbox" id="bkauto" ${S.bk.auto?'checked':''}><span>Backup automático toda semana<small>Aos domingos, ou na primeira vez que o app for aberto na semana, um arquivo de backup é salvo na pasta de downloads deste aparelho.${S.bk.last?' Último backup: '+fmt(S.bk.last)+'.':''}</small></span></label>
  ${sb?'':'<p class="note">A sincronização com a nuvem não está disponível agora.</p>'}
  <p class="sub ver">Graças do Dia · versão ${VERSION} · <a href="privacidade.html">Privacidade</a></p>`;
  return h;
}
/* Uso do app (só para quem mantém): contas, datas e números. Nenhum texto de card chega aqui. */
const admNew=(a,since)=>a.me?'':Date.parse(a.created)>since?'nova':(a.days>0&&Date.parse(a.first_write||0)>since)?'primeiro card':'';
const adminNews=()=>Array.isArray(C.admin)&&!!S.admSeen&&C.admin.some(a=>admNew(a,S.admSeen));
function adminSection(){
  const l=C.admin;if(!Array.isArray(l))return '';
  if(C.admBase==null)C.admBase=S.admSeen||Date.now();
  if(S.admSeen!==undefined&&adminNews()){S.admSeen=Date.now();save()}
  const dt=t=>{if(!t)return '—';const d=new Date(t);return fmt(isoOf(d.getFullYear(),d.getMonth(),d.getDate()))};
  const others=l.filter(a=>!a.me),wrote=others.filter(a=>a.days>0).length;
  return `<h2 class="sec-t">Uso do app</h2>
    <p class="sub" style="margin-bottom:6px">${l.length} ${l.length===1?'conta':'contas'}${others.length?` · ${wrote} de ${others.length} ${others.length===1?'convidado já escreveu':'convidados já escreveram'}`:''}.</p>
    <p class="sub" style="margin-bottom:10px;font-size:.85rem">Só você vê esta lista. Ela mostra quem entrou e quanto usou, nunca os textos.</p>
    <ul class="members">${l.map(a=>{const tag=admNew(a,C.admBase);return `<li><span><b>${esc(a.name)}</b>${a.me?' (você)':''}${tag?` <i class="tagnew">${tag}</i>`:''}<small>${esc(a.email||'')}</small>
      <small>Entrou em ${dt(a.created)} · último acesso em ${dt(a.last_login)} · ${a.days} ${a.days===1?'dia':'dias'} · ${a.photos} ${a.photos===1?'foto':'fotos'}${a.family_size>1?' · família de '+a.family_size:''}</small></span></li>`}).join('')}</ul>`;
}
function cloudSection(){
  if(!sb)return '';
  if(!C.user)return `<h2 class="sec-t">Conta e família</h2>
    <p class="sub" style="margin-bottom:14px">Entre com sua conta Google para sincronizar entre aparelhos e compartilhar o diário com a família.</p>
    <button class="btn" data-a="gsignin">Entrar com Google</button><p class="sub" id="cloudline" role="status" aria-live="polite" style="margin:10px 0 0">${esc(C.msg)}</p>`;
  const f=C.family;
  let h=`<h2 class="sec-t">Conta e família</h2>
    <div class="row" style="margin-bottom:4px"><span>${esc(C.user.email||'Conta Google')}</span>
    <button class="linkbtn" data-a="syncnow">Sincronizar agora</button><button class="linkbtn" data-a="gsignout">Sair da conta</button></div>
    <p class="sub" id="cloudline" role="status" aria-live="polite" style="margin:0 0 16px">${esc(C.msg)}</p>`;
  if(f){
    const ms=C.members||[];
    h+=`<div class="famcard"><div><b>${esc(famLabel())}</b></div>
      <ul class="members">${ms.map(m=>`<li><span><b>${esc(m.name||m.email||'Sem nome')}</b>${m.me?' (você)':''}${m.creator?' · criou a família':''}<small>${esc(m.email)}</small></span>
        ${f.creator&&!m.me?`<button class="linkbtn" data-a="famkick" data-id="${esc(m.id)}" data-n="${esc(m.name||m.email)}">Remover</button>`:''}</li>`).join('')}</ul>
      ${f.creator?`<div class="famrow"><label for="famrename">Sobrenome</label><input id="famrename" maxlength="60" value="${esc(f.name)}"><button class="btn sec sm" data-a="famrename">Salvar</button></div>`:''}
      <div class="row" style="margin-top:6px">Código de convite: <code>${esc(f.code)}</code><button class="linkbtn" data-a="famcopy">Copiar</button><button class="linkbtn" data-a="famrotate">Gerar novo código</button></div>
      <p class="sub" style="margin:8px 0 10px;font-size:.85rem">Quem entrar com este código passa a ver os dias de todos, menos os cards livres guardados só para quem escreveu. Cada pessoa edita só o que é dela.</p>
      <button class="linkbtn" data-a="famleave">Sair da família</button></div>`;
  }else{
    h+=`<div class="famrow"><label class="sr" for="famname">Sobrenome da família</label><input id="famname" maxlength="60" placeholder="Sobrenome da família (ex.: Silva)"><button class="btn sec sm" data-a="famcreate">Criar família</button></div>
      <div class="famrow"><label class="sr" for="famcode">Código de convite</label><input id="famcode" maxlength="12" placeholder="Código de convite" autocapitalize="characters" autocomplete="off"><button class="btn sec sm" data-a="famjoin">Entrar na família</button></div>`;
  }
  h+=`<p style="margin:18px 0 0"><button class="linkbtn danger" data-a="delacct">Apagar minha conta</button></p>`;
  return h;
}

function renderAccount(){
  renderSync();
  const w=document.getElementById('acctwrap');if(!w)return;
  const p=me(),chip=`${avatar(p,'sm')}<span>${esc(p.name)}</span>`;
  if(!sb||!C.user){
    w.innerHTML=`<button class="ghost person-chip" data-a="tab" data-v="pessoas" aria-label="Pessoa atual: ${esc(p.name)} (abrir Pessoas)">${chip}</button>`+(sb?`<button class="ghost acct-in" data-a="gsignin" title="Entrar com Google para sincronizar e compartilhar">Entrar</button>`:'');
    return;
  }
  const u=C.user;
  w.innerHTML=`<span class="menuwrap"><button class="ghost person-chip" data-a="acctmenu" aria-haspopup="menu" aria-expanded="${!!V.acct}" aria-label="${esc(p.name)}, menu da conta">${chip}</button>
    ${V.acct?`<div class="menu" role="menu"><span class="who">${esc(p.name)}</span><small>${esc(u.email||'Conta Google')}</small><button role="menuitem" data-a="tab" data-v="pessoas">Pessoas e família</button><button role="menuitem" data-a="gsignout">Sair da conta</button><button role="menuitem" data-a="gsignoutall">Sair de todos os aparelhos</button></div>`:''}</span>`;
}
/* Sem conta, o app não abre: só a tela de entrada. (S.cloudUser marca o aparelho já ligado a uma conta, então o diário segue abrindo sem internet.) */
const gated=()=>!!sb&&!S.cloudUser;
function viewEntrar(){
  const back=/[?&]code=/.test(location.search);
  return `<section class="gate"><h2 class="title">Bem-vindo</h2>
    <p class="sub">Um lugar para guardar, a cada dia, as graças recebidas.</p>
    <p class="sub">Não é um diário secreto nem oculto: é uma reunião de pequenas memórias da família, escritas para não esquecer e lembradas juntos, à mesa do jantar ou na oração da noite.</p>
    ${back?'<p class="sub" role="status">Entrando…</p>':'<button class="btn" data-a="gsignin">Entrar com Google</button>'}
    <p class="sub" id="cloudline" role="status" aria-live="polite">${esc(C.msg)}</p>
    <p class="sub small">Seus dias ficam guardados na sua conta e só você e a sua família podem vê-los. O card livre pode ficar só para você. Quem mantém o app vê apenas o nome da conta e números de uso (dias e fotos guardados), nunca os textos.</p>
    <p class="sub small ver">Versão ${VERSION} · <a href="privacidade.html">Privacidade</a></p></section>`;
}
function render(keepFocus){
  saveDraft();
  const g=gated();document.body.classList.toggle('gated',g);
  if(g){$app.innerHTML=viewEntrar();return}
  renderAccount();
  const away=V.tab==='hoje'&&V.date!==todayIso();
  document.querySelectorAll('nav.tabs button').forEach(b=>{
    const cur=b.dataset.v===V.tab&&!(b.dataset.v==='hoje'&&away);
    if(cur)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current');
  });
  {const tp=document.querySelector('nav.tabs [data-v=pessoas]');if(tp){const nw=V.tab!=='pessoas'&&adminNews();tp.classList.toggle('news',nw);tp.title=nw?'Há novidades no uso do app':''}}
  document.getElementById('tab-hoje').title=away?`Voltar para hoje (${fmt(todayIso())})`:'';
  $app.innerHTML=V.tab==='hoje'?viewHoje():V.tab==='cal'?viewCal():V.tab==='diario'?viewDiario():viewPessoas();
  restoreDraft();
  document.documentElement.style.setProperty('--fs',S.font||1);
  const imp=document.getElementById('imp');if(imp)imp.addEventListener('change',doImport);
  if(V.tab==='pessoas')photoInfo();
  if(V.tab==='diario')fillDiary();
  if(!keepFocus)window.scrollTo(0,0);
}
async function photoInfo(){
  const el=document.getElementById('photoinfo');if(!el)return;
  try{
    const l=await allPhotos(),mb=l.reduce((a,p)=>a+p.blob.size,0)/1048576;
    if(document.getElementById('photoinfo'))document.getElementById('photoinfo').textContent=l.length?`${l.length} ${l.length===1?'foto':'fotos'} no diário · ${mb.toFixed(1)} MB neste aparelho. As fotos são reduzidas automaticamente (até ${MAX_PHOTOS_DAY} por pessoa em cada dia).`:`Fotos do diário são reduzidas automaticamente (até ${MAX_PHOTOS_DAY} por pessoa em cada dia).`;
  }catch(e){}
}

/* ---------- Diário contínuo: todos os dias com registro, sempre atualizado ---------- */
let diaryUrls=[];
const topicsOf=(en,fam)=>{
  const o=[];
  ['bom','descoberta','acao','acontecimento'].forEach(k=>{const t=((en&&en[k])||'').trim();if(t)o.push({t})});
  const c=en&&en.custom;if(c&&(c.texto||'').trim()&&!(fam&&c.priv))o.push({lead:(c.titulo||'').trim(),t:c.texto.trim(),priv:!!c.priv});
  return o;
};
function viewDiario(){
  // os dias dos outros da família aparecem só em "Família"
  const own=S.profiles.filter(p=>!p.remote);
  if(V.dwho!=='family'&&!own.some(p=>p.id===V.dwho))V.dwho=S.active;
  const seg=S.profiles.length>1?`<div class="seg" role="group" aria-label="Diário de">${own.map(p=>`<button data-a="dwho" data-v="${p.id}" aria-pressed="${V.dwho===p.id}">${own.length===1?'Só ':''}${esc(p.name)}</button>`).join('')}<button data-a="dwho" data-v="family" aria-pressed="${V.dwho==='family'}">${esc(famLabel())}</button></div>`:'';
  return `<div class="dbar"><h2 class="title">Diário</h2><div class="row">${seg}${ibtn('dprint',ICON.print,'Imprimir ou salvar em PDF','','lg')}</div></div>
    <p class="sub" id="dsub" style="margin:4px 0 0"></p><div id="dnav"></div><div class="dnote" id="dnote" role="status" aria-live="polite"></div><div id="diary" aria-busy="true"></div>`;
}
const dnote=t=>{const n=document.getElementById('dnote');if(n)n.textContent=t};
async function fillDiary(note){
  const box=document.getElementById('diary');if(!box)return;
  const fam=V.dwho==='family';
  const people=fam?S.profiles:[S.profiles.find(p=>p.id===V.dwho)||me()];
  const photos={};let err='';
  people.forEach(p=>photos[p.id]={});
  try{(await allPhotos()).forEach(f=>{if(photos[f.pid])(photos[f.pid][f.date]=photos[f.pid][f.date]||[]).push(f)})}catch(e){err=e.message}
  if(document.getElementById('diary')!==box)return;
  diaryUrls.forEach(u=>URL.revokeObjectURL(u));diaryUrls=[];
  const set=new Set();
  people.forEach(p=>{
    Object.keys(S.days[p.id]||{}).forEach(d=>{if((fam?hasShared:hasContent)(entryOf(p.id,d)))set.add(d)});
    Object.keys(photos[p.id]).forEach(d=>set.add(d));
  });
  const allDates=[...set].sort();
  const months=[...new Set(allDates.map(d=>d.slice(0,7)))];
  V.dmonths=months;
  if(!months.includes(V.dmonth))V.dmonth=months[months.length-1]||null;
  const dates=allDates.filter(d=>V.dmonth&&d.startsWith(V.dmonth));
  const target=fam?me():people[0];
  let html='',last='';
  dates.forEach(iso=>{
    const [y,m]=iso.split('-'),d=parse(iso);
    if(y+m!==last){html+=`<h3 class="dmonth">${MESES[+m-1]} ${y}</h3>`;last=y+m}
    const cnt=((photos[target.id]||{})[iso]||[]).length;
    html+=`<section class="dday" aria-label="${d.getDate()} de ${MESES[d.getMonth()]} de ${d.getFullYear()}"><header class="dhead">
      <div><span class="dd">${fmt(iso)}</span><span class="dw">${DIAS[d.getDay()]}</span></div>
      <span class="row"><button class="linkbtn" data-a="phadd" data-date="${iso}" data-pid="${target.id}" ${cnt>=MAX_PHOTOS_DAY||target.remote?'disabled':''} title="${cnt>=MAX_PHOTOS_DAY?'Limite de '+MAX_PHOTOS_DAY+' fotos neste dia':'Adicionar foto'+(fam&&S.profiles.length>1?' ('+esc(target.name)+')':'')}" aria-label="Adicionar foto a ${fmt(iso)}">${ICON.photo}<span>${cnt?cnt+'/'+MAX_PHOTOS_DAY:''}</span></button>
      ${ibtn('opencal',ICON.edit,'Editar este dia no calendário',`data-date="${iso}"`)}</span></header>`;
    people.forEach(p=>{
      const tp=topicsOf(entryOf(p.id,iso),fam),ph=(photos[p.id]||{})[iso]||[];
      if(!tp.length&&!ph.length)return;
      if(fam)html+=`<div class="sd-who">${avatar(p,'xs')}${esc(p.name)}</div>`;
      if(tp.length)html+=`<ul class="topics">${tp.map(x=>`<li>${x.lead?`<b>${esc(x.lead)}.</b> `:''}${esc(x.t)}${x.priv?' <small class="privnote">(só para mim)</small>':''}</li>`).join('')}</ul>`;
      if(ph.length){
        ph.sort((a,b)=>a.ts-b.ts);
        html+=`<div class="photos ${ph.length>1?'two':''}">${ph.map(f=>{const u=URL.createObjectURL(f.blob);diaryUrls.push(u);
          return `<figure><img src="${u}" width="${f.w}" height="${f.h}" loading="lazy" alt="Foto de ${esc(p.name)} em ${fmt(iso)}">${p.remote?'':`<button class="ibtn rm" data-a="phdel" data-id="${f.id}" data-pid="${p.id}" aria-label="Remover esta foto" title="Remover esta foto">${ICON.x}</button>`}</figure>`}).join('')}</div>`;
      }
    });
    html+='</section>';
  });
  box.removeAttribute('aria-busy');
  box.innerHTML=allDates.length?`<article class="sheet">${html}<div class="sd-foot">Graças do dia</div></article>`
    :`<article class="sheet"><p class="sd-empty">O diário começa quando você guardar o primeiro dia.</p></article>`;
  const sub=document.getElementById('dsub');if(sub)sub.textContent=allDates.length?`${allDates.length} ${allDates.length===1?'dia':'dias'} · atualizado automaticamente a cada novo registro`:'';
  const nav=document.getElementById('dnav');
  if(nav){
    const idx=months.indexOf(V.dmonth);
    nav.innerHTML=months.length?`<div class="heading" style="margin:20px 0 0">${ibtn('dmo',ICON.left,'Mês anterior','data-v="-1"'+(idx<=0?' disabled':''),'lg')}
      <h3>${MESES[+V.dmonth.slice(5)-1]} ${V.dmonth.slice(0,4)}<small>${idx+1} de ${months.length} ${months.length===1?'mês':'meses'} com registros</small></h3>
      ${ibtn('dmo',ICON.right,'Próximo mês','data-v="1"'+(idx>=months.length-1?' disabled':''),'lg')}</div>`:'';
  }
  if(note||err)dnote(note||err);
}
async function addPhotos(files){
  const T=V.photoTarget;if(!T||!files.length)return;
  const target=S.profiles.find(p=>p.id===T.pid)||me();
  let cur;try{cur=(await photosFor(target.id,T.date)).length}catch(e){dnote(e.message);return}
  const room=MAX_PHOTOS_DAY-cur;
  if(room<=0){dnote(`Limite de ${MAX_PHOTOS_DAY} fotos neste dia para ${target.name}.`);return}
  const list=[...files].slice(0,room),skipped=files.length-list.length;
  try{navigator.storage&&navigator.storage.persist&&navigator.storage.persist()}catch(e){}
  let ok=0,errs=[];
  for(let i=0;i<list.length;i++){
    dnote(`Reduzindo foto ${i+1} de ${list.length}…`);
    try{const r=await shrink(list[i]);const nid=uid();await putPhoto({id:nid,pid:target.id,date:T.date,blob:r.blob,w:r.w,h:r.h,ts:Date.now()+i,synced:false});S.dirty['ph:'+nid]=stamp();ok++}
    catch(e){errs.push(e.message||'Falha ao guardar a foto.')}
  }
  const parts=[];
  if(ok)parts.push(ok===1?'1 foto adicionada.':`${ok} fotos adicionadas.`);
  if(skipped>0)parts.push(`${skipped} ficou de fora: limite de ${MAX_PHOTOS_DAY} por dia.`);
  if(errs.length)parts.push(errs[0]);
  save();scheduleSync();
  await fillDiary(parts.join(' '));live(parts.join(' '));
}

/* ---------- Barra superior: cor, imagem de capa e máscara ---------- */
const BAR_COLORS=[{k:'verde',n:'Verde',c:'#2f5d47'},{k:'roxo',n:'Roxo',c:'#4b3a6b'},{k:'vermelho',n:'Vermelho',c:'#8a2b2b'},{k:'azul',n:'Azul',c:'#234a7d'},{k:'dourado',n:'Dourado',c:'#8a6a1f'},{k:'rosa',n:'Rosa',c:'#a5476b'},{k:'grafite',n:'Grafite',c:'#2a2c33'}];
const BAR_KEY='gd-bar-cover',BAR_SRC='gd-bar-src',BAR_AR=6;
const barColor=k=>(BAR_COLORS.find(x=>x.k===k)||BAR_COLORS[0]).c;
function applyBar(){
  const b=document.getElementById('banner');if(!b)return;
  const bar=S.bar||{};b.style.setProperty('--bar',barColor(bar.color));
  let cover=null;try{cover=bar.cover?localStorage.getItem(BAR_KEY):null}catch(e){}
  if(cover&&/^data:image\/jpeg;base64,[A-Za-z0-9+\/=]+$/.test(cover)){b.classList.add('has-cover');b.style.backgroundImage=`url("${cover}")`}
  else{b.classList.remove('has-cover');b.style.backgroundImage=''}
  const tc=document.querySelector('meta[name=theme-color]');if(tc)tc.content=barColor(bar.color);
}
let M=null,barReturn=null;
const loadImg=src=>new Promise((res,rej)=>{const i=new Image();i.onload=()=>res(i);i.onerror=()=>rej(new Error('Não consegui abrir a imagem.'));i.src=src});
async function readBarFile(file){
  if(!file.type.startsWith('image/'))throw new Error('Escolha uma imagem.');
  if(file.size>25*1024*1024)throw new Error('Imagem grande demais (máximo 25 MB).');
  let bmp;
  try{bmp=await createImageBitmap(file,{imageOrientation:'from-image'})}
  catch(e){bmp=await new Promise((res,rej)=>{const i=new Image();i.onload=()=>res(i);i.onerror=()=>rej(new Error('Não consegui abrir a imagem.'));i.src=URL.createObjectURL(file)})}
  const w=bmp.width||bmp.naturalWidth,h=bmp.height||bmp.naturalHeight,k=Math.min(1,1800/Math.max(w,h));
  const c=document.createElement('canvas');c.width=Math.round(w*k);c.height=Math.round(h*k);
  c.getContext('2d').drawImage(bmp,0,0,c.width,c.height);
  let q=.85,url='';for(let i=0;i<5;i++){url=c.toDataURL('image/jpeg',q);if(url.length<=330000)break;q-=.1}
  if(bmp.close)bmp.close();return url;
}
function barModalHTML(){
  const sw=BAR_COLORS.map(c=>`<button type="button" class="swc" style="--c:${c.c}" data-a="barcolor" data-v="${c.k}" aria-pressed="${M.color===c.k}" aria-label="${c.n}" title="${c.n}"></button>`).join('');
  const cover=M.img?`<div class="stage" id="stage" tabindex="0" role="group" aria-label="Enquadramento da capa. Arraste a imagem. Setas movem, mais e menos ampliam."><img id="stimg" alt="" draggable="false"><div class="frame"><div class="phone"></div></div></div>
      <p class="hint2">Moldura clara: a barra. Linhas tracejadas: o que aparece no celular.</p>
      <div class="zoomrow">${ibtn('barzoom',ICON.minus,'Reduzir','data-v="-1"')}<input type="range" id="zoomr" min="100" max="500" value="${Math.round(M.z*100)}" aria-label="Ampliação da imagem">${ibtn('barzoom',ICON.plus,'Ampliar','data-v="1"')}</div>
      <div class="row"><button class="btn sec sm" data-a="barpick">Trocar imagem</button><button class="btn sec sm" data-a="barnoimg">Remover imagem</button></div>`
    :`<button class="btn sec sm" data-a="barpick">${ICON.photo}Escolher imagem</button>`;
  return `<h3 id="bartitle">Personalizar a barra</h3>
    <fieldset><legend>Cor</legend><div class="sws" role="group" aria-label="Cor da barra">${sw}</div></fieldset>
    <fieldset><legend>Imagem de capa <span class="opt">(opcional)</span></legend>${cover}</fieldset>
    <div class="row" style="justify-content:flex-end"><button class="btn sec" data-a="barcancel">Cancelar</button><button class="btn" data-a="barsave">Salvar</button></div>`;
}
function barLayout(){
  const st=document.getElementById('stage'),im=document.getElementById('stimg');if(!st||!im||!M||!M.img)return;
  const W=st.clientWidth,H=st.clientHeight,fw=W*.84,fh=fw/BAR_AR,w0=M.w0,h0=M.h0;
  const smin=Math.max(fw/w0,fh/h0);M.z=Math.min(5,Math.max(1,M.z));
  const sc=smin*M.z,mx=(w0*sc-fw)/2,my=(h0*sc-fh)/2;
  let ox=Math.max(-mx,Math.min(mx,M.px*fw)),oy=Math.max(-my,Math.min(my,M.py*fw));
  M.px=ox/fw;M.py=oy/fw;M.fw=fw;M.fh=fh;M.s=sc;
  im.style.width=w0*sc+'px';im.style.height=h0*sc+'px';
  im.style.left=(W/2+ox-w0*sc/2)+'px';im.style.top=(H/2+oy-h0*sc/2)+'px';
  const zr=document.getElementById('zoomr');if(zr)zr.value=Math.round(M.z*100);
}
function barRender(){const box=document.querySelector('#barmodal .modal');if(!box)return;box.innerHTML=barModalHTML();if(M.img){const i=document.getElementById('stimg');i.src=M.src;barLayout()}}
async function openBarEditor(trigger){
  const bar=S.bar||{};barReturn=trigger||document.activeElement;
  M={color:bar.color||'verde',img:null,src:null,w0:0,h0:0,z:1,px:0,py:0,fw:0,fh:0,s:1,touched:false,removed:false};
  const host=document.createElement('div');host.className='modal-wrap';host.id='barmodal';
  host.innerHTML='<div class="modal" role="dialog" aria-modal="true" aria-labelledby="bartitle"></div>';
  document.body.appendChild(host);document.querySelector('header.top').inert=true;$app.inert=true;document.body.style.overflow='hidden';
  host.addEventListener('mousedown',e=>{if(e.target===host)closeBar(false)});
  if(bar.cover){
    try{
      const keep=localStorage.getItem(BAR_SRC),src=keep||localStorage.getItem(BAR_KEY);
      if(src){M.src=src;M.img=await loadImg(src);M.w0=M.img.naturalWidth;M.h0=M.img.naturalHeight;
        if(keep&&bar.t){M.z=bar.t.z||1;M.px=bar.t.px||0;M.py=bar.t.py||0}}
    }catch(e){M.img=null}
  }
  barRender();const f=document.querySelector('#barmodal .swc[aria-pressed=true]')||document.querySelector('#barmodal button');f&&f.focus();
}
function closeBar(){
  const h=document.getElementById('barmodal');if(h)h.remove();M=null;
  document.querySelector('header.top').inert=false;$app.inert=false;document.body.style.overflow='';
  applyBar();if(barReturn&&document.contains(barReturn))barReturn.focus();
}
function barExport(){
  const sc=M.s,sw=M.fw/sc,sh=M.fh/sc,sx=M.w0/2-M.px*M.fw/sc-sw/2,sy=M.h0/2-M.py*M.fw/sc-sh/2;
  const W=1800,H=Math.round(W/BAR_AR),c=document.createElement('canvas');c.width=W;c.height=H;
  const x=c.getContext('2d');x.fillStyle='#000';x.fillRect(0,0,W,H);x.drawImage(M.img,sx,sy,sw,sh,0,0,W,H);
  let q=.84,url='';for(let i=0;i<5;i++){url=c.toDataURL('image/jpeg',q);if(url.length<=280000)break;q-=.1}
  return url;
}
function barSave(){
  const old=S.bar||{},bar={color:M.color};
  try{
    if(M.removed||!M.img){localStorage.removeItem(BAR_KEY);localStorage.removeItem(BAR_SRC)}
    else if(!M.touched&&old.cover){bar.cover=true;bar.t=old.t;bar.hasSrc=old.hasSrc}
    else{
      localStorage.setItem(BAR_KEY,barExport());
      try{localStorage.setItem(BAR_SRC,M.src);bar.hasSrc=true}catch(e){localStorage.removeItem(BAR_SRC);bar.hasSrc=false}
      bar.cover=true;bar.t={z:M.z,px:M.px,py:M.py};
    }
  }catch(e){alert('Não foi possível guardar a imagem neste aparelho (armazenamento cheio).');return}
  bar.at=Date.now();S.bar=bar;S.dirty['bar:1']=stamp();save();closeBar();scheduleSync();live('Barra atualizada.');
}
const barPtrs=new Map();let barLast=0;
document.addEventListener('pointerdown',e=>{const st=e.target.closest&&e.target.closest('#stage');if(!st||!M)return;try{st.setPointerCapture(e.pointerId)}catch(_){}barPtrs.set(e.pointerId,{x:e.clientX,y:e.clientY});barLast=0});
document.addEventListener('pointermove',e=>{
  if(!M||!barPtrs.has(e.pointerId))return;const p=barPtrs.get(e.pointerId);
  if(barPtrs.size===1){M.px+=(e.clientX-p.x)/M.fw;M.py+=(e.clientY-p.y)/M.fw;M.touched=true;barLayout()}
  barPtrs.set(e.pointerId,{x:e.clientX,y:e.clientY});
  if(barPtrs.size===2){const [a,b]=[...barPtrs.values()],d=Math.hypot(a.x-b.x,a.y-b.y);if(barLast){M.z*=d/barLast;M.touched=true;barLayout()}barLast=d}
});
const barEnd=e=>{barPtrs.delete(e.pointerId);barLast=0};
document.addEventListener('pointerup',barEnd);document.addEventListener('pointercancel',barEnd);
document.addEventListener('wheel',e=>{const st=e.target.closest&&e.target.closest('#stage');if(!st||!M)return;e.preventDefault();M.z*=Math.exp(-e.deltaY*.0015);M.touched=true;barLayout()},{passive:false});
document.addEventListener('input',e=>{if(e.target.id==='zoomr'&&M){M.z=e.target.value/100;M.touched=true;barLayout()}});
document.addEventListener('keydown',e=>{
  if(!M)return;
  if(e.key==='Escape'){e.preventDefault();closeBar();return}
  if(e.target.id!=='stage')return;
  const st=12/(M.fw||1);let used=true;
  if(e.key==='ArrowLeft')M.px-=st;else if(e.key==='ArrowRight')M.px+=st;else if(e.key==='ArrowUp')M.py-=st;else if(e.key==='ArrowDown')M.py+=st;
  else if(e.key==='+'||e.key==='=')M.z*=1.08;else if(e.key==='-')M.z/=1.08;else used=false;
  if(used){e.preventDefault();M.touched=true;barLayout()}
});
document.addEventListener('change',async e=>{
  if(e.target.id!=='barin')return;
  const f=e.target.files[0];e.target.value='';if(!f||!M)return;
  try{const src=await readBarFile(f),img=await loadImg(src);
    M.src=src;M.img=img;M.w0=img.naturalWidth;M.h0=img.naturalHeight;M.z=1;M.px=0;M.py=0;M.touched=true;M.removed=false;barRender()}
  catch(err){alert(err.message||'Não consegui usar essa imagem.')}
});

/* ---------- Ações ---------- */
function readFields(root){
  const o={};
  root.querySelectorAll('[data-f]').forEach(el=>{o[el.dataset.f]=el.type==='checkbox'?el.checked:el.value});
  return o;
}
function applyFields(pid,iso,f){
  S.days[pid]=S.days[pid]||{};
  const en=S.days[pid][iso]||{};
  ['bom','descoberta','acao','acontecimento'].forEach(k=>{if(k in f)en[k]=f[k].trim()});
  if('custom-x' in f||'custom-t' in f||'custom-p' in f){
    const old=en.custom||{};
    en.custom={titulo:('custom-t' in f?f['custom-t']:old.titulo||'').trim(),texto:('custom-x' in f?f['custom-x']:old.texto||'').trim()};
    if('custom-p' in f?!f['custom-p']:old.priv)en.custom.priv=true;
  }
  S.days[pid][iso]=en;
  if(!hasContent(en))delete S.days[pid][iso];
  S.dirty['e:'+pid+'|'+iso]=stamp();scheduleSync();
}
function guardar(){
  const root=document.getElementById('compose');
  const f=readFields(root);
  const filled=['bom','descoberta','acao','acontecimento'].some(k=>(f[k]||'').trim())||(f['custom-x']||'').trim();
  if(!filled){V.msg='Escreva em pelo menos um card para guardar.';document.getElementById('status').textContent=V.msg;live(V.msg);return}
  const p=me(),iso=V.date,ex=entryOf(p.id,iso);
  if(ex){
    ['bom','descoberta','acao','acontecimento'].forEach(k=>{const n=(f[k]||'').trim(),o=(ex[k]||'').trim();if(!n)delete f[k];else if(o&&o!==n)f[k]=o+'\n'+n});
    const oc=ex.custom||{},nx=(f['custom-x']||'').trim(),ox=(oc.texto||'').trim();
    if(!nx){delete f['custom-x'];delete f['custom-t'];delete f['custom-p']}
    else{if(ox&&ox!==nx)f['custom-x']=ox+'\n'+nx;if(!(f['custom-t']||'').trim())f['custom-t']=oc.titulo||'';if(oc.priv&&ox)f['custom-p']=false}
  }
  applyFields(p.id,iso,f);save();dropDraft(root.dataset.dk);root.dataset.dk='';V.saving=true;V.msg='';
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  root.querySelectorAll('.card').forEach(c=>c.classList.add('sending'));
  setTimeout(()=>{V.saving=false;render();live(`Dia ${fmt(iso)} guardado no calendário.`)},reduce?0:900);
}
function toggleFlip(btn){
  const fl=btn.closest('.flip'),on=fl.classList.toggle('flipped');
  if(!on&&fl.dataset.key){
    const [pid,iso,k]=fl.dataset.key.split('|'),kind=KINDS.find(x=>x.k===k),v=valueOf(kind,entryOf(pid,iso));
    fl.querySelector('.back textarea').value=kind.custom?v.texto:v;
    if(kind.custom){fl.querySelector('.back [data-f=custom-t]').value=v.titulo||'';fl.querySelector('.back [data-f=custom-p]').checked=!v.priv}
    if(C.pendingView)setTimeout(safeRender,800);
  }
  fl.querySelector('.front').toggleAttribute('inert',on);
  fl.querySelector('.back').toggleAttribute('inert',!on);
  const target=on?fl.querySelector('.back textarea'):fl.querySelector('.front .ibtn');
  setTimeout(()=>target&&target.focus(),on?350:0);
}
function fixsave(btn){
  const fl=btn.closest('.flip'),f=readFields(fl),{pid,date,k}=btn.dataset;
  applyFields(pid,date,f);save();
  live('Correção salva.');
  if(!hasContent(entryOf(pid,date))){render(true);return}
  const kind=KINDS.find(x=>x.k===k),en=entryOf(pid,date),v=valueOf(kind,en);
  const text=kind.custom?v.texto:v,p=fl.querySelector('.front p.txt');
  p.textContent=text.trim()?text:'Em branco';p.classList.toggle('empty',!text.trim());
  if(kind.custom){const t=titleOf(kind,en),el=fl.querySelector('.front .ttl');el.textContent=t;el.title=t;const tg=fl.querySelector('.front .privtag');if(tg)tg.hidden=!(v.priv&&text.trim())}
  toggleFlip(btn);
}
function addPerson(){
  const used=S.profiles.map(p=>p.color);
  const color=COLORS.find(c=>!used.includes(c))||COLORS[S.profiles.length%COLORS.length];
  const id=uid();S.profiles.push({id,name:'Pessoa '+(S.profiles.length+1),color});S.dirty['p:'+id]=stamp();save();scheduleSync();render(true);
  setTimeout(()=>{const i=document.getElementById('n-'+id);if(i){i.focus();i.select()}},30);
}
async function exportData(auto){
  try{
    const own=new Set(S.profiles.filter(p=>!p.remote).map(p=>p.id));
    const parts=[JSON.stringify(S).slice(0,-1),',"photos":['];let lost=0,first=true;
    let list=[];try{list=(await allPhotos()).filter(p=>own.has(p.pid))}catch(e){lost=-1}
    for(const p of list){
      try{const data=await blobToDataURL(p.blob);parts.push((first?'':',')+JSON.stringify({id:p.id,pid:p.pid,date:p.date,w:p.w,h:p.h,ts:p.ts,data}));first=false}catch(e){lost++}
    }
    parts.push(']}');
    const blob=new Blob(parts,{type:'application/json'});
    const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`gracas-do-dia-${auto?'backup-':''}${todayIso()}.json`;a.click();
    setTimeout(()=>URL.revokeObjectURL(a.href),60000);
    S.bk.last=todayIso();S.bk.week=weekStart();save();
    const warn=lost?' Atenção: '+(lost<0?'as fotos':lost+(lost===1?' foto':' fotos'))+' não entraram neste arquivo.':'';
    if(auto)live('Backup semanal salvo na pasta de downloads.'+warn);else if(warn)alert('Backup salvo.'+warn);
  }catch(e){
    console.warn(e);
    if(auto){S.bk.week=weekStart();save()}else alert('Não consegui gerar o backup agora. Tente de novo.');
  }
}
/* Backup semanal: uma vez por semana (a semana começa no domingo), na primeira abertura do app com tudo sincronizado */
const weekStart=()=>{const n=new Date();n.setDate(n.getDate()-n.getDay());return isoOf(n.getFullYear(),n.getMonth(),n.getDate())};
function autoBackup(){
  if(!S.bk.auto||gated()||document.hidden||S.bk.week===weekStart())return;
  const has=S.profiles.some(p=>!p.remote&&Object.keys(S.days[p.id]||{}).length);
  if(!has){S.bk.week=weekStart();save();return}   // nada para guardar ainda
  exportData(true);
}
const dataToBlob=u=>{const b=atob(u.slice(u.indexOf(',')+1)),a=new Uint8Array(b.length);for(let i=0;i<b.length;i++)a[i]=b.charCodeAt(i);return new Blob([a],{type:'image/jpeg'})};
function doImport(e){
  const file=e.target.files[0];if(!file)return;
  const r=new FileReader();
  r.onload=async()=>{
    try{
      const raw=JSON.parse(r.result),d=clean(raw);
      if(!d)throw 0;
      // pessoas da família não entram: elas chegam pela sincronização
      d.profiles=d.profiles.filter(p=>!p.remote);if(!d.profiles.length)throw 0;
      Object.keys(d.days).forEach(pid=>{if(!d.profiles.some(p=>p.id===pid))delete d.days[pid]});
      if(!confirm('Importar vai substituir os dados deste aparelho (incluindo fotos). Continuar?'))return;
      const photos=(Array.isArray(raw.photos)?raw.photos:[]).filter(p=>p&&RE_ID.test(p.id)&&d.profiles.some(x=>x.id===p.pid)&&RE_DATE.test(p.date)
        &&typeof p.data==='string'&&p.data.length<=2000000&&/^data:[a-z\/-]*;base64,[A-Za-z0-9+\/=]+$/.test(p.data));
      try{await clearPhotos();for(const p of photos)await putPhoto({id:p.id,pid:p.pid,date:p.date,w:Math.max(1,p.w|0),h:Math.max(1,p.h|0),ts:+p.ts||Date.now(),blob:dataToBlob(p.data)})}catch(err){}
      d.dirty={};d.profiles.forEach(p=>{delete p.synced});
      if(C.user)d.cloudUser=C.user.id;else delete d.cloudUser;
      d.bar=S.bar&&S.bar.cover?S.bar:(d.bar?{color:d.bar.color,at:Date.now()}:undefined);   // o backup não leva a imagem da capa
      if(!d.profiles.some(p=>p.id===d.active))d.active=d.profiles[0].id;
      d.bk=S.bk;S=d;
      if(C.user)markAllDirty();save();render();applyBar();live('Dados importados.');
    }catch(err){alert('Este arquivo não parece ser um backup válido do app.')}
  };
  r.readAsText(file);
}
function goToday(){V.date=todayIso();V.tab='hoje';V.msg='';render();live('Hoje, '+fmt(V.date))}
function moveDay(delta){
  const c=V.cal,d=new Date(c.y,c.m,c.d+delta),iso=isoOf(d.getFullYear(),d.getMonth(),d.getDate());
  if(iso>todayIso())return;
  c.y=d.getFullYear();c.m=d.getMonth();c.d=d.getDate();render(true);
}

document.addEventListener('click',e=>{
  if(V.acct&&!e.target.closest('.menuwrap')){V.acct=false;renderAccount()}
  const el=e.target.closest('[data-a]');if(!el||el.tagName==='INPUT')return;
  const a=el.dataset.a,v=el.dataset.v,c=V.cal;
  switch(a){
    case 'tab':V.acct=false;if(v==='hoje')goToday();else{if(v==='diario')V.dmonth=null;V.tab=v;render()}break;
    case 'acctmenu':V.acct=!V.acct;renderAccount();{const b=document.querySelector('[data-a=acctmenu]');b&&b.focus()}break;
    case 'avpick':V.avTarget=el.dataset.pid;document.getElementById('avin').click();break;
    case 'avdel':{const pp=S.profiles.find(x=>x.id===el.dataset.pid);if(pp&&!pp.remote){delete pp.avatar;S.dirty['p:'+pp.id]=stamp();save();scheduleSync();render(true);live('Foto removida.')}break}
    case 'dmo':{const i=V.dmonths.indexOf(V.dmonth)+ +v;if(V.dmonths[i]){V.dmonth=V.dmonths[i];fillDiary();window.scrollTo(0,0)}break}
    case 'font':S.font=Math.min(1.5,Math.max(.85,+((S.font||1)+v*.1).toFixed(2)));save();render(true);break;
    case 'guardar':guardar();break;
    case 'flip':toggleFlip(el);break;
    case 'fixsave':fixsave(el);break;
    case 'opencal':{const d=parse(el.dataset.date);V.cal={lvl:'day',y:d.getFullYear(),m:d.getMonth(),d:d.getDate()};V.tab='cal';render();break}
    case 'gohoje':V.date=el.dataset.date;V.tab='hoje';V.msg='';render();break;
    case 'scope':V.scope=v;render(true);break;
    case 'calgo':c.lvl=el.dataset.l;render();break;
    case 'calnow':c.y=now.getFullYear();c.m=now.getMonth();render(true);break;
    case 'yr':c.y+=+v;render(true);break;
    case 'openmonth':c.m=+el.dataset.m;c.lvl='month';render();break;
    case 'mo':{let m=c.m+ +v,y=c.y;if(m<0){m=11;y--}if(m>11){m=0;y++}c.m=m;c.y=y;render(true);break}
    case 'openday':c.d=+el.dataset.d;c.lvl='day';render();break;
    case 'dy':moveDay(+v);break;
    case 'setme':if((S.profiles.find(x=>x.id===el.dataset.pid)||{}).remote)break;S.active=el.dataset.pid;save();render(true);live('Agora escrevendo como '+me().name);break;
    case 'addp':addPerson();break;
    case 'delp':{
      const p=S.profiles.find(x=>x.id===el.dataset.pid);
      if(!confirm(`Remover ${p.name} e todos os cards e fotos dessa pessoa? Isso não pode ser desfeito.`))break;
      S.profiles=S.profiles.filter(x=>x.id!==p.id);delete S.days[p.id];Object.keys(S.dirty).forEach(k=>{if(k.includes(p.id))delete S.dirty[k]});if(p.synced)S.dirty['pd:'+p.id]=stamp();
      if(S.active===p.id)S.active=S.profiles[0].id;save();scheduleSync();delPhotosOf(p.id).catch(()=>{});render(true);break}
    case 'export':exportData();break;
    case 'baredit':openBarEditor(el);break;
    case 'barcolor':if(M){M.color=v;document.querySelectorAll('#barmodal .swc').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.v===v)));document.getElementById('banner').style.setProperty('--bar',barColor(v))}break;
    case 'barzoom':if(M){M.z*=v>0?1.15:1/1.15;M.touched=true;barLayout()}break;
    case 'barpick':document.getElementById('barin').click();break;
    case 'barnoimg':if(M){M.img=null;M.src=null;M.removed=true;M.touched=true;barRender()}break;
    case 'barcancel':closeBar();break;
    case 'barsave':barSave();break;
    case 'gsignin':cloudSignIn();break;
    case 'gsignout':V.acct=false;cloudSignOut();break;
    case 'gsignoutall':V.acct=false;renderAccount();cloudSignOut(true);break;
    case 'delacct':deleteAccount();break;
    case 'syncnow':syncNow();break;
    case 'famcreate':{const n=(document.getElementById('famname').value||'').trim();if(!n){C.err=true;C.msg='Escreva o sobrenome da família.';cloudLine();break}famAct(()=>sb.rpc('create_family',{fname:n}),'Família criada. Compartilhe o código de convite.');break}
    case 'famjoin':{const c=(document.getElementById('famcode').value||'').trim();if(!c){C.err=true;C.msg='Digite o código de convite.';cloudLine();break}famAct(()=>sb.rpc('join_family',{fcode:c}),'Você entrou na família.');break}
    case 'famrename':{const n=(document.getElementById('famrename').value||'').trim();if(!n){C.err=true;C.msg='Escreva o sobrenome da família.';cloudLine();break}famAct(()=>sb.rpc('rename_family',{fname:n}),'Sobrenome salvo.');break}
    case 'famkick':if(confirm(`Remover ${el.dataset.n} da família? Essa pessoa deixa de ver os dias de todos, e todos deixam de ver os dela. Gere um novo código se não quiser que ela volte.`))famAct(()=>sb.rpc('remove_family_member',{target:el.dataset.id}),'Pessoa removida da família.');break;
    case 'famleave':if(confirm('Sair da família? Você deixa de ver os dias dos outros e eles deixam de ver os seus. Seus dados continuam com você.'))famAct(()=>sb.rpc('leave_family'),'Você saiu da família.');break;
    case 'famrotate':if(confirm('Gerar um novo código de convite? O código atual deixa de funcionar. Quem já está na família continua.'))famAct(()=>sb.rpc('rotate_family_code'),'Novo código gerado.');break;
    case 'famcopy':navigator.clipboard&&C.family&&navigator.clipboard.writeText(C.family.code).then(()=>{C.err=false;C.msg='Código copiado.';cloudLine()});break;
    case 'dwho':V.dwho=v;render(true);break;
    case 'dprint':window.print();break;
    case 'phadd':V.photoTarget={date:el.dataset.date,pid:el.dataset.pid};document.getElementById('phin').click();break;
    case 'phdel':if(confirm('Remover esta foto do diário?')){const id=el.dataset.id,pid=el.dataset.pid;delPhoto(id).then(()=>{if(S.dirty['ph:'+id])delete S.dirty['ph:'+id];else S.dirty['phd:'+pid+'|'+id]=stamp();save();scheduleSync();return fillDiary('Foto removida.')}).catch(()=>{})}break;
  }
});
document.addEventListener('change',e=>{
  const el=e.target;
  if(el.id==='avin'){const f=el.files[0];el.value='';if(!f)return;
    const pp=S.profiles.find(x=>x.id===V.avTarget);if(!pp||pp.remote)return;
    makeAvatar(f).then(url=>{pp.avatar=url;S.dirty['p:'+pp.id]=stamp();save();scheduleSync();render(true);live('Foto atualizada.')}).catch(err=>{alert(err.message||'Não consegui usar essa imagem.')});return}
  if(el.id==='bkauto'){S.bk.auto=el.checked;save();live(el.checked?'Backup semanal ligado.':'Backup semanal desligado.');return}
  if(el.id==='phin'){const files=[...el.files];el.value='';addPhotos(files);return}
  if(el.dataset.a==='rename'){const p=S.profiles.find(x=>x.id===el.dataset.pid);if(p.remote)return;p.name=el.value.trim()||p.name;S.dirty['p:'+p.id]=stamp();save();scheduleSync();render(true)}
});
document.addEventListener('keydown',e=>{
  if(e.key!=='Escape')return;
  if(V.acct){V.acct=false;renderAccount();return}
  const fl=e.target.closest&&e.target.closest('.flip.flipped');
  if(fl){const b=fl.querySelector('.back [data-a=flip]');b&&toggleFlip(b)}
});
render();
applyBar();
// se a volta do Google falhar, a tela de entrada reaparece com o botão
if(/[?&]code=/.test(location.search))setTimeout(()=>{if(gated()){history.replaceState(null,'',location.pathname);render()}},10000);
document.getElementById('baredit').innerHTML=ICON.image;
if('serviceWorker' in navigator&&location.protocol.startsWith('http'))navigator.serviceWorker.register('sw.js').catch(()=>{});
