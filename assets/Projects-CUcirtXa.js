import{r as s,y as z,z as M,L as f,j as t,B as L,C as G,D as P,d as r,m as d,c as $,x as I,E as D,S as F,a as A,A as _,H as T,J as U}from"./index-pjwgMWYk.js";import{u as C,s as K,a as y}from"./useScrollAnimation-D5f_9v7Z.js";import{r as O}from"./resumeData-pHVEvbOx.js";const B=s.createContext(null);function H(){const e=s.useRef(!1);return z(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function X(){const e=H(),[i,o]=s.useState(0),n=s.useCallback(()=>{e.current&&o(i+1)},[i]);return[s.useCallback(()=>M.postRender(n),[n]),i]}const Y=e=>!e.isLayoutDirty&&e.willUpdate(!1);function w(){const e=new Set,i=new WeakMap,o=()=>e.forEach(Y);return{add:n=>{e.add(n),i.set(n,n.addEventListener("willUpdate",o))},remove:n=>{e.delete(n);const l=i.get(n);l&&(l(),i.delete(n)),o()},dirty:o}}const j=e=>e===!0,Z=e=>j(e===!0)||e==="id",N=({children:e,id:i,inherit:o=!0})=>{const n=s.useContext(f),l=s.useContext(B),[x,c]=X(),a=s.useRef(null),p=n.id||l;a.current===null&&(Z(o)&&p&&(i=i?p+"-"+i:p),a.current={id:i,group:j(o)&&n.group||w()});const u=s.useMemo(()=>({...a.current,forceRender:x}),[c]);return t.jsx(f.Provider,{value:u,children:e})};function V(){!L.current&&G();const[e]=s.useState(P.current);return e}const b=18,g=24,W=188,J=260,m={type:"spring",stiffness:260,damping:28,mass:1,restDelta:.001,restSpeed:.001},h={type:"spring",stiffness:200,damping:26,mass:1.1,restDelta:.001,restSpeed:.001},q=r.div`
  padding: 56px 0 60px;
`,Q=r.div`
  margin-bottom: 40px;
`,ee=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`,te=r(d.div)`
  border-radius: ${b}px;
  border: 1.5px dashed ${({theme:e})=>e.border||"rgba(255,255,255,0.1)"};
  min-height: 340px;
`,re=r(d.div)`
  border-radius: ${b}px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background: ${({theme:e})=>e.bgSecondary||"rgba(255,255,255,0.04)"};
  border: 1px solid ${({theme:e})=>e.border||"rgba(255,255,255,0.1)"};
  will-change: transform;
  /* overflow: hidden — REMOVED, this was killing mobile morph */
  /* Use border-radius + clip on children instead */
  -webkit-mask-image: -webkit-radial-gradient(white, black); /* iOS radius fix */
`,ie=r(d.div)`
  width: 100%;
  height: ${W}px;
  overflow: hidden;
  border-radius: ${b}px ${b}px 0 0;
  position: relative;
  flex-shrink: 0;
  background: ${({theme:e})=>e.bgTertiary};
  /* KEY FIX: transform3d forces GPU layer on mobile */
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
`,S=r(d.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  /* KEY FIX: GPU-accelerated on mobile */
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  will-change: transform;
`,R=r(d.span)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 0.68rem;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.55);
  color: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  letter-spacing: 0.04em;
  pointer-events: none;
`,oe=r.div`
  padding: 18px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`,ne=r(d.h3)`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.015em;
  color: ${({theme:e})=>e.textPrimary};
  line-height: 1.3;
  margin: 0;
`,ae=r.p`
  font-size: 0.84rem;
  line-height: 1.65;
  color: ${({theme:e})=>e.textSecondary};
  flex: 1;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,se=r.div`
  display: flex;
  gap: 7px;
  padding-top: 12px;
  border-top: 1px solid ${({theme:e})=>e.border||"rgba(255,255,255,0.08)"};
  margin-top: 4px;
  align-items: center;
  flex-wrap: wrap;
`,k=r.a`
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
`,de=r.button`
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

  &:hover { background: ${({theme:e})=>e.accent}; color: #fff; }
  &:active { transform: scale(0.96); }
`,le=r(d.div)`
  position: fixed;
  inset: 0;
  z-index: 9999;    /* KEY FIX: high z ensures it floats above everything */
  display: flex;
  align-items: center;
  justify-content: center;
  /* KEY FIX: padding adapts to mobile — no overflow clipping */
  padding: 16px;

  @media (min-width: 480px) {
    padding: 24px;
  }
`,ce=r(d.div)`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  /* KEY FIX: backdrop-filter only on a non-parent element
     Applying blur to a parent clips GPU compositing layer = jank */
  backdrop-filter: blur(16px) saturate(1.5);
  -webkit-backdrop-filter: blur(16px) saturate(1.5);
`,pe=r(d.div)`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  border-radius: ${g}px;
  background: ${({theme:e})=>e.bgSecondary||"#111118"};
  border: 1px solid ${({theme:e})=>e.border||"rgba(255,255,255,0.14)"};
  box-shadow:
    0 0 0 0.5px rgba(255,255,255,0.06) inset,
    0 30px 80px rgba(0,0,0,0.6),
    0 8px 24px rgba(0,0,0,0.35);
  will-change: transform, border-radius;
  /* GPU layer on mobile */
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  /* KEY FIX: No overflow:hidden here — use inner scroll div */
  -webkit-mask-image: -webkit-radial-gradient(white, black); /* iOS clip fix */
`,xe=r.div`
  max-height: 88vh;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  border-radius: ${g}px;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }

  @media (max-width: 480px) {
    max-height: 92vh;
  }
`,ue=r(d.div)`
  width: 100%;
  height: ${J}px;
  overflow: hidden;
  border-radius: ${g}px ${g}px 0 0;
  position: relative;
  flex-shrink: 0;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);

  &::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 90px;
    background: linear-gradient(
      to top,
      ${({theme:e})=>e.bgSecondary||"#111118"},
      transparent
    );
    pointer-events: none;
  }

  @media (max-width: 480px) {
    height: 210px;
  }
`,be=r(d.button)`
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
  /* KEY FIX: No CSS transition on hover for morphing buttons on mobile */
  transition: background 0.15s ease;
  /* Larger tap target on mobile */
  @media (max-width: 480px) {
    width: 38px;
    height: 38px;
    top: 12px;
    right: 12px;
  }

  &:hover {
    background: rgba(210, 40, 40, 0.8);
    border-color: rgba(210, 40, 40, 0.5);
  }
`,ge=r.div`
  padding: 8px 26px 30px;
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media (max-width: 480px) {
    padding: 8px 18px 24px;
  }
`,me=r(d.h2)`
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: ${({theme:e})=>e.textPrimary};
  line-height: 1.2;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`,he=r(d.p)`
  font-size: 0.91rem;
  line-height: 1.8;
  color: ${({theme:e})=>e.textSecondary};
  margin: 0;

  @media (max-width: 480px) {
    font-size: 0.87rem;
  }
`,fe=r(d.div)`
  display: flex;
  gap: 10px;
  padding-top: 20px;
  border-top: 1px solid ${({theme:e})=>e.border||"rgba(255,255,255,0.08)"};
  flex-wrap: wrap;
  align-items: center;
`,v=r.a`
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
  transition: all 0.18s ease;

  @media (max-width: 480px) {
    padding: 9px 16px;
    font-size: 0.82rem;
    flex: 1;
    justify-content: center;
  }

  &:hover {
    background: ${({theme:e})=>e.accentSubtle};
    color: ${({theme:e})=>e.accent};
    border-color: ${({theme:e})=>e.accent};
  }
`,ye=({project:e,cardId:i,onClose:o,reducedMotion:n})=>{s.useEffect(()=>{const c=document.body.style.overflow;return document.body.style.overflow="hidden",document.body.style.position="fixed",document.body.style.width="100%",()=>{document.body.style.overflow=c,document.body.style.position="",document.body.style.width=""}},[]),s.useEffect(()=>{const c=a=>{a.key==="Escape"&&o()};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[o]);const l=n?{duration:.2}:m,x=n?{duration:.18}:h;return T.createPortal(t.jsxs(le,{children:[t.jsx(ce,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.22,ease:"easeOut"},onClick:o}),t.jsxs(pe,{layoutId:i,layout:!0,transition:l,style:{borderRadius:g},onClick:c=>c.stopPropagation(),children:[t.jsx(be,{onClick:o,initial:{opacity:0,scale:.5,rotate:-80},animate:{opacity:1,scale:1,rotate:0},exit:{opacity:0,scale:.5,rotate:80},transition:{delay:n?0:.2,type:"spring",stiffness:380,damping:24},children:t.jsx(U,{size:14})}),t.jsxs(xe,{children:[t.jsxs(ue,{layoutId:`${i}-imgbox`,transition:l,children:[t.jsx(S,{layoutId:`${i}-img`,src:e.image,alt:e.name,transition:l,style:{height:"100%"}}),e.date&&t.jsx(R,{layoutId:`${i}-badge`,transition:x,children:e.date})]}),t.jsxs(ge,{children:[t.jsx(me,{layoutId:`${i}-title`,transition:x,children:e.name}),t.jsx(he,{initial:{opacity:0,y:14,filter:"blur(4px)"},animate:{opacity:1,y:0,filter:"blur(0px)"},exit:{opacity:0,y:8,filter:"blur(3px)"},transition:{delay:n?0:.16,duration:.32,ease:[.22,1,.36,1]},children:e.description}),t.jsxs(fe,{initial:{opacity:0,y:14,filter:"blur(4px)"},animate:{opacity:1,y:0,filter:"blur(0px)"},exit:{opacity:0,y:8,filter:"blur(3px)"},transition:{delay:n?0:.22,duration:.32,ease:[.22,1,.36,1]},children:[e.github&&t.jsxs(v,{href:e.github,target:"_blank",rel:"noopener noreferrer",children:[t.jsx($,{size:14})," View on GitHub"]}),e.view&&t.jsxs(v,{href:e.view,target:"_blank",rel:"noopener noreferrer",children:[t.jsx(I,{size:14})," Live Demo"]})]})]})]})]})]}),document.body)},we=s.memo(({project:e,index:i,onExpand:o,isExpanded:n,reducedMotion:l})=>{const{ref:x,isInView:c}=C(.08),a=`proj-${(e.name||i).replace(/\s+/g,"-")}`,p=s.useCallback(u=>{u.stopPropagation(),o(e,a)},[e,a,o]);return n?t.jsx(te,{initial:{opacity:0},animate:{opacity:.25},exit:{opacity:0},transition:{duration:.2},style:{minHeight:"340px"}}):t.jsxs(re,{ref:x,layoutId:a,layout:!0,initial:{opacity:0,y:24},animate:c?{opacity:1,y:0}:{opacity:0,y:24},transition:{opacity:{duration:.4,delay:i%3*.07},y:{duration:.4,delay:i%3*.07,ease:[.22,1,.36,1]},layout:m},whileHover:l?{}:{y:-6,scale:1.012,transition:{duration:.2,ease:"easeOut"}},whileTap:{scale:.975},onClick:p,style:{borderRadius:b},children:[t.jsxs(ie,{layoutId:`${a}-imgbox`,transition:m,children:[t.jsx(S,{layoutId:`${a}-img`,src:e.image,alt:e.name,loading:"lazy",transition:m,style:{height:"100%"}}),e.date&&t.jsx(R,{layoutId:`${a}-badge`,transition:h,children:e.date})]}),t.jsxs(oe,{children:[t.jsx(ne,{layoutId:`${a}-title`,transition:h,children:e.name}),t.jsx(ae,{children:e.description}),t.jsxs(se,{onClick:u=>u.stopPropagation(),children:[e.github&&t.jsxs(k,{as:"a",href:e.github,target:"_blank",rel:"noopener noreferrer",children:[t.jsx($,{size:12})," GitHub"]}),e.view&&t.jsxs(k,{as:"a",href:e.view,target:"_blank",rel:"noopener noreferrer",children:[t.jsx(I,{size:12})," Live"]}),t.jsxs(de,{onClick:p,children:["Know more ",t.jsx(D,{size:12})]})]})]})]})}),Ie=()=>{const{ref:e,isInView:i}=C(),[o,n]=s.useState(null),l=V(),x=s.useCallback((a,p)=>n({project:a,cardId:p}),[]),c=s.useCallback(()=>n(null),[]);return t.jsxs(N,{children:[t.jsxs(q,{children:[t.jsx(Q,{children:t.jsxs(d.div,{ref:e,variants:K,initial:"hidden",animate:i?"visible":"hidden",children:[t.jsx(F,{variants:y,children:"Projects"}),t.jsx(A,{variants:y,children:"Things I've built."})]})}),t.jsx(ee,{children:O.projects.map((a,p)=>{const u=`proj-${(a.name||p).replace(/\s+/g,"-")}`,E=(o==null?void 0:o.cardId)===u;return t.jsx(we,{project:a,index:p,onExpand:x,isExpanded:E,reducedMotion:l},a.name||p)})})]}),t.jsx(_,{mode:"popLayout",children:o&&t.jsx(ye,{project:o.project,cardId:o.cardId,onClose:c,reducedMotion:l},o.cardId)})]})};export{Ie as default};
