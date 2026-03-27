import{r as a,h as M,k as E,a5 as f,j as t,d as i,m as d,c as $,a4 as C,a6 as L,S as G,a as A,A as D,a7 as P,a8 as _}from"./index-XeEcX5ht.js";import{u as I,s as F,a as m}from"./useScrollAnimation-BrSjFOG4.js";import{r as T}from"./resumeData-pHVEvbOx.js";const H=a.createContext(null);function B(){const e=a.useRef(!1);return M(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function O(){const e=B(),[o,n]=a.useState(0),r=a.useCallback(()=>{e.current&&n(o+1)},[o]);return[a.useCallback(()=>E.postRender(r),[r]),o]}const U=e=>!e.isLayoutDirty&&e.willUpdate(!1);function y(){const e=new Set,o=new WeakMap,n=()=>e.forEach(U);return{add:r=>{e.add(r),o.set(r,r.addEventListener("willUpdate",n))},remove:r=>{e.delete(r);const c=o.get(r);c&&(c(),o.delete(r)),n()},dirty:n}}const j=e=>e===!0,K=e=>j(e===!0)||e==="id",V=({children:e,id:o,inherit:n=!0})=>{const r=a.useContext(f),c=a.useContext(H),[u,s]=O(),l=a.useRef(null),p=r.id||c;l.current===null&&(K(n)&&p&&(o=o?p+"-"+o:p),l.current={id:o,group:j(n)&&r.group||y()});const b=a.useMemo(()=>({...l.current,forceRender:u}),[s]);return t.jsx(f.Provider,{value:b,children:e})},h=18,R=26,N=188,W=300,x={type:"spring",stiffness:420,damping:34,mass:.8},g={type:"spring",stiffness:300,damping:30,mass:1},v=(e=0)=>({initial:{opacity:0,y:18,filter:"blur(5px)"},animate:{opacity:1,y:0,filter:"blur(0px)"},exit:{opacity:0,y:10,filter:"blur(3px)"},transition:{delay:e,duration:.35,ease:[.22,1,.36,1]}}),Y=i.div`
  padding: 56px 0 60px;
`,X=i.div`
  margin-bottom: 40px;
`,q=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`,J=i(d.div)`
  border-radius: ${h}px;
  background: ${({theme:e})=>e.border||"rgba(255,255,255,0.04)"};
  border: 1.5px dashed ${({theme:e})=>e.border||"rgba(255,255,255,0.1)"};
  min-height: 320px;
  opacity: 0.35;
`,Q=i(d.div)`
  border-radius: ${h}px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background: ${({theme:e})=>e.bgSecondary||"rgba(255,255,255,0.04)"};
  border: 1px solid ${({theme:e})=>e.border||"rgba(255,255,255,0.1)"};
  will-change: transform;
  position: relative;
`,Z=i(d.div)`
  width: 100%;
  height: ${N}px;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
  background: ${({theme:e})=>e.bgTertiary};
`,S=i(d.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transform-origin: center center;
`,z=i(d.span)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 0.68rem;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.55);
  color: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  letter-spacing: 0.04em;
  pointer-events: none;
`,ee=i.div`
  padding: 18px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`,te=i(d.h3)`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.015em;
  color: ${({theme:e})=>e.textPrimary};
  line-height: 1.3;
  margin: 0;
`,re=i.p`
  font-size: 0.84rem;
  line-height: 1.65;
  color: ${({theme:e})=>e.textSecondary};
  flex: 1;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,oe=i.div`
  display: flex;
  gap: 7px;
  padding-top: 12px;
  border-top: 1px solid ${({theme:e})=>e.border||"rgba(255,255,255,0.08)"};
  margin-top: 4px;
  align-items: center;
`,w=i.a`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 12px;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 500;
  text-decoration: none;
  border: 1px solid ${({theme:e})=>e.border||"rgba(255,255,255,0.12)"};
  background: ${({theme:e})=>e.bgTertiary||"rgba(255,255,255,0.05)"};
  color: ${({theme:e})=>e.textSecondary};
  transition: all 0.18s ease;
  cursor: pointer;

  &:hover {
    background: ${({theme:e})=>e.accentSubtle};
    color: ${({theme:e})=>e.accent};
    border-color: ${({theme:e})=>e.accent};
  }
`,ne=i.button`
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 14px;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 600;
  border: 1px solid ${({theme:e})=>e.accent};
  background: ${({theme:e})=>e.accentSubtle||"rgba(99,102,241,0.12)"};
  color: ${({theme:e})=>e.accent};
  cursor: pointer;
  letter-spacing: 0.01em;
  transition: all 0.18s ease;
  white-space: nowrap;

  &:hover {
    background: ${({theme:e})=>e.accent};
    color: #fff;
  }
  &:active {
    transform: scale(0.96);
  }
`,ie=i(d.div)`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  pointer-events: all;

  /* frosted backdrop */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(20px) saturate(1.6);
    -webkit-backdrop-filter: blur(20px) saturate(1.6);
  }
`,ae=i(d.div)`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 640px;
  max-height: 88vh;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  border-radius: ${R}px;
  background: ${({theme:e})=>e.bgSecondary||"#111118"};
  border: 1px solid ${({theme:e})=>e.border||"rgba(255,255,255,0.14)"};
  box-shadow:
    0 0 0 0.5px rgba(255,255,255,0.07) inset,
    0 40px 100px rgba(0,0,0,0.65),
    0 12px 32px rgba(0,0,0,0.4);
  will-change: transform, border-radius;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,se=i(d.div)`
  width: 100%;
  height: ${W}px;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 100px;
    background: linear-gradient(
      to top,
      ${({theme:e})=>e.bgSecondary||"#111118"},
      transparent
    );
    pointer-events: none;
  }
`,de=i(d.button)`
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 20;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.2);
  background: rgba(0,0,0,0.55);
  color: rgba(255,255,255,0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: background 0.18s ease;

  &:hover {
    background: rgba(220, 50, 50, 0.75);
    border-color: rgba(220, 50, 50, 0.5);
  }
`,le=i.div`
  padding: 4px 30px 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,ce=i(d.h2)`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: ${({theme:e})=>e.textPrimary};
  line-height: 1.2;
  margin: 0;
`,pe=i(d.p)`
  font-size: 0.93rem;
  line-height: 1.82;
  color: ${({theme:e})=>e.textSecondary};
  margin: 0;
`,xe=i(d.div)`
  display: flex;
  gap: 10px;
  padding-top: 22px;
  border-top: 1px solid ${({theme:e})=>e.border||"rgba(255,255,255,0.08)"};
  flex-wrap: wrap;
  align-items: center;
`,k=i.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 22px;
  border-radius: 999px;
  font-size: 0.88rem;
  font-weight: 500;
  text-decoration: none;
  border: 1px solid ${({theme:e})=>e.border||"rgba(255,255,255,0.12)"};
  background: ${({theme:e})=>e.bgTertiary||"rgba(255,255,255,0.05)"};
  color: ${({theme:e})=>e.textSecondary};
  transition: all 0.2s ease;

  &:hover {
    background: ${({theme:e})=>e.accentSubtle};
    color: ${({theme:e})=>e.accent};
    border-color: ${({theme:e})=>e.accent};
    transform: translateY(-2px);
  }
`,ue=({project:e,cardId:o,onClose:n})=>(a.useEffect(()=>{const r=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=r}},[]),a.useEffect(()=>{const r=c=>{c.key==="Escape"&&n()};return window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)},[n]),P.createPortal(t.jsx(ie,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.22,ease:"easeOut"},onClick:n,children:t.jsxs(ae,{layoutId:o,layout:!0,transition:x,style:{borderRadius:R},onClick:r=>r.stopPropagation(),children:[t.jsx(de,{onClick:n,initial:{opacity:0,scale:.4,rotate:-90},animate:{opacity:1,scale:1,rotate:0},exit:{opacity:0,scale:.4,rotate:90},transition:{delay:.18,type:"spring",stiffness:400,damping:22},children:t.jsx(_,{size:14})}),t.jsxs(se,{layoutId:`${o}-imgbox`,transition:x,children:[t.jsx(S,{layoutId:`${o}-img`,src:e.image,alt:e.name,transition:x,style:{height:"100%"}}),e.date&&t.jsx(z,{layoutId:`${o}-badge`,transition:g,children:e.date})]}),t.jsxs(le,{children:[t.jsx(ce,{layoutId:`${o}-title`,transition:g,children:e.name}),t.jsx(pe,{...v(.13),children:e.description}),t.jsxs(xe,{...v(.2),children:[e.github&&t.jsxs(k,{href:e.github,target:"_blank",rel:"noopener noreferrer",children:[t.jsx($,{size:15})," View on GitHub"]}),e.view&&t.jsxs(k,{href:e.view,target:"_blank",rel:"noopener noreferrer",children:[t.jsx(C,{size:15})," Live Demo"]})]})]})]})}),document.body)),ge=a.memo(({project:e,index:o,onExpand:n,isExpanded:r})=>{const{ref:c,isInView:u}=I(.08),s=`proj-${(e.name||o).replace(/\s+/g,"-")}`,l=a.useCallback(p=>{p.stopPropagation(),n(e,s)},[e,s,n]);return r?t.jsx(J,{initial:{opacity:0},animate:{opacity:.3},exit:{opacity:0},transition:{duration:.25},style:{minHeight:"340px"}}):t.jsxs(Q,{ref:c,layoutId:s,layout:!0,initial:{opacity:0,y:28},animate:u?{opacity:1,y:0}:{opacity:0,y:28},transition:{opacity:{duration:.42,delay:o%3*.08},y:{duration:.42,delay:o%3*.08,ease:[.22,1,.36,1]},layout:x},whileHover:{y:-7,scale:1.015,transition:{duration:.2,ease:"easeOut"}},whileTap:{scale:.978},onClick:l,style:{borderRadius:h},children:[t.jsxs(Z,{layoutId:`${s}-imgbox`,transition:x,children:[t.jsx(S,{layoutId:`${s}-img`,src:e.image,alt:e.name,loading:"lazy",transition:x,style:{height:"100%"}}),e.date&&t.jsx(z,{layoutId:`${s}-badge`,transition:g,children:e.date})]}),t.jsxs(ee,{children:[t.jsx(te,{layoutId:`${s}-title`,transition:g,children:e.name}),t.jsx(re,{children:e.description}),t.jsxs(oe,{onClick:p=>p.stopPropagation(),children:[e.github&&t.jsxs(w,{as:"a",href:e.github,target:"_blank",rel:"noopener noreferrer",children:[t.jsx($,{size:12})," GitHub"]}),e.view&&t.jsxs(w,{as:"a",href:e.view,target:"_blank",rel:"noopener noreferrer",children:[t.jsx(C,{size:12})," Live"]}),t.jsxs(ne,{onClick:l,children:["Know more ",t.jsx(L,{size:12})]})]})]})]})}),me=()=>{const{ref:e,isInView:o}=I(),[n,r]=a.useState(null),c=a.useCallback((s,l)=>r({project:s,cardId:l}),[]),u=a.useCallback(()=>r(null),[]);return t.jsxs(V,{children:[t.jsxs(Y,{children:[t.jsx(X,{children:t.jsxs(d.div,{ref:e,variants:F,initial:"hidden",animate:o?"visible":"hidden",children:[t.jsx(G,{variants:m,children:"Projects"}),t.jsx(A,{variants:m,children:"Things I've built."})]})}),t.jsx(q,{children:T.projects.map((s,l)=>{const p=`proj-${(s.name||l).replace(/\s+/g,"-")}`,b=(n==null?void 0:n.cardId)===p;return t.jsx(ge,{project:s,index:l,onExpand:c,isExpanded:b},s.name||l)})})]}),t.jsx(D,{mode:"popLayout",children:n&&t.jsx(ue,{project:n.project,cardId:n.cardId,onClose:u},n.cardId)})]})};export{me as default};
