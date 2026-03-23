import{r as o,y as j,z as E,L as b,j as t,d as n,m as s,c as w,x as k,B as S,S as z,a as R,A as L,C as P,D as G}from"./index-CVNZGQc9.js";import{u as v,s as F,a as f}from"./useScrollAnimation-BtxTy7Mk.js";import{r as B}from"./resumeData-pHVEvbOx.js";const T=o.createContext(null);function D(){const e=o.useRef(!1);return j(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function M(){const e=D(),[r,i]=o.useState(0),a=o.useCallback(()=>{e.current&&i(r+1)},[r]);return[o.useCallback(()=>E.postRender(a),[a]),r]}const A=e=>!e.isLayoutDirty&&e.willUpdate(!1);function m(){const e=new Set,r=new WeakMap,i=()=>e.forEach(A);return{add:a=>{e.add(a),r.set(a,a.addEventListener("willUpdate",i))},remove:a=>{e.delete(a);const l=r.get(a);l&&(l(),r.delete(a)),i()},dirty:i}}const $=e=>e===!0,_=e=>$(e===!0)||e==="id",H=({children:e,id:r,inherit:i=!0})=>{const a=o.useContext(b),l=o.useContext(T),[c,d]=M(),p=o.useRef(null),g=a.id||l;p.current===null&&(_(i)&&g&&(r=r?g+"-"+r:g),p.current={id:r,group:$(i)&&a.group||m()});const I=o.useMemo(()=>({...p.current,forceRender:c}),[d]);return t.jsx(b.Provider,{value:I,children:e})},O=n.div`
  padding: 56px 0 60px;
`,U=n.div`
  margin-bottom: 40px;
`,N=n.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`,V=n(s.div)`
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border-radius: 18px;
  background: ${({theme:e})=>e.bgSecondary||"rgba(255,255,255,0.04)"};
  border: 1px solid ${({theme:e})=>e.border||"rgba(255,255,255,0.1)"};
  will-change: transform;
`,Y=n(s.div)`
  width: 100%;
  height: 188px;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
  background: ${({theme:e})=>e.bgTertiary};
`,K=n(s.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  will-change: transform;
`,C=n(s.span)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 0.68rem;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.52);
  color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  letter-spacing: 0.03em;
`,W=n(s.div)`
  padding: 18px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`,X=n(s.h3)`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.015em;
  color: ${({theme:e})=>e.textPrimary};
  line-height: 1.3;
  margin: 0;
`,q=n.p`
  font-size: 0.84rem;
  line-height: 1.65;
  color: ${({theme:e})=>e.textSecondary};
  flex: 1;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,J=n.div`
  display: flex;
  gap: 7px;
  padding-top: 12px;
  border-top: 1px solid ${({theme:e})=>e.border||"rgba(255,255,255,0.08)"};
  margin-top: 4px;
  align-items: center;
`,h=n.a`
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

  &:hover {
    background: ${({theme:e})=>e.accentSubtle};
    color: ${({theme:e})=>e.accent};
    border-color: ${({theme:e})=>e.accent};
  }
`,Q=n.button`
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 14px;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 600;
  border: 1px solid ${({theme:e})=>e.accent};
  background: ${({theme:e})=>e.accentSubtle||"rgba(99,102,241,0.1)"};
  color: ${({theme:e})=>e.accent};
  cursor: pointer;
  letter-spacing: 0.01em;
  transition: all 0.18s ease;
  white-space: nowrap;

  &:hover {
    background: ${({theme:e})=>e.accent};
    color: #fff;
    transform: scale(1.03);
  }
`,Z=n(s.div)`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    backdrop-filter: blur(18px) saturate(1.4);
    -webkit-backdrop-filter: blur(18px) saturate(1.4);
  }
`,ee=n(s.div)`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 620px;
  max-height: 90vh;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 26px;
  display: flex;
  flex-direction: column;
  background: ${({theme:e})=>e.bgSecondary||"#1a1a2e"};
  border: 1px solid ${({theme:e})=>e.border||"rgba(255,255,255,0.12)"};
  box-shadow:
    0 0 0 0.5px rgba(255,255,255,0.06) inset,
    0 32px 80px rgba(0, 0, 0, 0.55),
    0 8px 24px rgba(0, 0, 0, 0.3);
  will-change: transform;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,te=n(s.div)`
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 80px;
    background: linear-gradient(to top, ${({theme:e})=>e.bgSecondary||"#1a1a2e"}, transparent);
    pointer-events: none;
  }
`,ne=n(s.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  will-change: transform;
`,re=n(s.button)`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 10;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(0, 0, 0, 0.5);
  color: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition: background 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
    transform: scale(1.08) rotate(90deg);
  }
`,ie=n(s.div)`
  padding: 6px 28px 30px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`,ae=n(s.h2)`
  font-size: 1.45rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: ${({theme:e})=>e.textPrimary};
  line-height: 1.2;
  margin: 0;
`,oe=n(s.p)`
  font-size: 0.92rem;
  line-height: 1.8;
  color: ${({theme:e})=>e.textSecondary};
  margin: 0;
`,se=n(s.div)`
  display: flex;
  gap: 10px;
  padding-top: 20px;
  border-top: 1px solid ${({theme:e})=>e.border||"rgba(255,255,255,0.08)"};
  align-items: center;
  flex-wrap: wrap;
`,y=n.a`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 10px 20px;
  border-radius: 999px;
  font-size: 0.875rem;
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
    transform: translateY(-1px);
  }
`,x={type:"spring",stiffness:400,damping:32,mass:.85},u={type:"spring",stiffness:300,damping:28,mass:1},de=({project:e,onClose:r})=>(o.useEffect(()=>{const i=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=i}},[]),o.useEffect(()=>{const i=a=>{a.key==="Escape"&&r()};return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[r]),P.createPortal(t.jsx(Z,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.25,ease:"easeOut"},onClick:r,children:t.jsxs(ee,{layoutId:`card-${e.name}`,layout:!0,transition:x,onClick:i=>i.stopPropagation(),style:{borderRadius:26},children:[t.jsx(re,{onClick:r,initial:{opacity:0,scale:.5,rotate:-60},animate:{opacity:1,scale:1,rotate:0},exit:{opacity:0,scale:.5,rotate:60},transition:{delay:.16,duration:.26,ease:[.34,1.56,.64,1]},children:t.jsx(G,{size:15})}),t.jsxs(te,{layoutId:`imgbox-${e.name}`,transition:x,children:[t.jsx(ne,{layoutId:`img-${e.name}`,src:e.image,alt:e.name,transition:x}),e.date&&t.jsx(C,{layoutId:`badge-${e.name}`,transition:u,children:e.date})]}),t.jsxs(ie,{children:[t.jsx(ae,{layoutId:`title-${e.name}`,transition:u,children:e.name}),t.jsx(oe,{initial:{opacity:0,y:16,filter:"blur(4px)"},animate:{opacity:1,y:0,filter:"blur(0px)"},exit:{opacity:0,y:8,filter:"blur(4px)"},transition:{delay:.15,duration:.32,ease:[.22,1,.36,1]},children:e.description}),t.jsxs(se,{initial:{opacity:0,y:16,filter:"blur(4px)"},animate:{opacity:1,y:0,filter:"blur(0px)"},exit:{opacity:0,y:8,filter:"blur(4px)"},transition:{delay:.21,duration:.32,ease:[.22,1,.36,1]},children:[e.github&&t.jsxs(y,{href:e.github,target:"_blank",rel:"noopener noreferrer",children:[t.jsx(w,{size:15}),"View on GitHub"]}),e.view&&t.jsxs(y,{href:e.view,target:"_blank",rel:"noopener noreferrer",children:[t.jsx(k,{size:15}),"Live Demo"]})]})]})]})}),document.body)),le=o.memo(({project:e,index:r,onExpand:i})=>{const{ref:a,isInView:l}=v(.08),c=o.useCallback(d=>{d.stopPropagation(),i(e)},[e,i]);return t.jsxs(V,{ref:a,layoutId:`card-${e.name}`,layout:!0,initial:{opacity:0,y:28},animate:l?{opacity:1,y:0}:{opacity:0,y:28},transition:{opacity:{duration:.42,delay:r%3*.07},y:{duration:.42,delay:r%3*.07,ease:[.22,1,.36,1]},layout:x},whileHover:{y:-6,scale:1.012,transition:{duration:.22,ease:"easeOut"}},whileTap:{scale:.985},onClick:c,style:{borderRadius:18},children:[t.jsxs(Y,{layoutId:`imgbox-${e.name}`,transition:x,children:[t.jsx(K,{layoutId:`img-${e.name}`,src:e.image,alt:e.name,loading:"lazy",transition:x}),e.date&&t.jsx(C,{layoutId:`badge-${e.name}`,transition:u,children:e.date})]}),t.jsxs(W,{children:[t.jsx(X,{layoutId:`title-${e.name}`,transition:u,children:e.name}),t.jsx(q,{children:e.description}),t.jsxs(J,{onClick:d=>d.stopPropagation(),children:[e.github&&t.jsxs(h,{href:e.github,target:"_blank",rel:"noopener noreferrer",children:[t.jsx(w,{size:12}),"GitHub"]}),e.view&&t.jsxs(h,{href:e.view,target:"_blank",rel:"noopener noreferrer",children:[t.jsx(k,{size:12}),"Live"]}),t.jsxs(Q,{onClick:c,children:["Know more ",t.jsx(S,{size:12})]})]})]})]})}),ue=()=>{const{ref:e,isInView:r}=v(),[i,a]=o.useState(null),l=o.useCallback(d=>a(d),[]),c=o.useCallback(()=>a(null),[]);return t.jsxs(H,{children:[t.jsxs(O,{children:[t.jsx(U,{children:t.jsxs(s.div,{ref:e,variants:F,initial:"hidden",animate:r?"visible":"hidden",children:[t.jsx(z,{variants:f,children:"Projects"}),t.jsx(R,{variants:f,children:"Things I've built."})]})}),t.jsx(N,{children:B.projects.map((d,p)=>t.jsx(le,{project:d,index:p,onExpand:l},d.name||p))})]}),t.jsx(L,{mode:"popLayout",children:i&&t.jsx(de,{project:i,onClose:c},i.name)})]})};export{ue as default};
