const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Certificates-CUw_dJ3v.js","assets/index-CVNZGQc9.js","assets/index-DFLsGMz3.css","assets/useScrollAnimation-BtxTy7Mk.js","assets/resumeData-pHVEvbOx.js","assets/Education-BeNbU8Nf.js","assets/Experience-BwdgEdnn.js","assets/Projects-Bvgbqiu3.js"])))=>i.map(i=>d[i]);
import{r as a,_ as o,d as t,m as n,j as i,A as c}from"./index-CVNZGQc9.js";import{h as x,i as l,j as m,k as b}from"./index-BDLYZGFi.js";const u=a.lazy(()=>o(()=>import("./Certificates-CUw_dJ3v.js"),__vite__mapDeps([0,1,2,3,4]))),j=a.lazy(()=>o(()=>import("./Education-BeNbU8Nf.js"),__vite__mapDeps([5,1,2,3]))),g=a.lazy(()=>o(()=>import("./Experience-BwdgEdnn.js"),__vite__mapDeps([6,1,2,3]))),h=a.lazy(()=>o(()=>import("./Projects-Bvgbqiu3.js"),__vite__mapDeps([7,1,2,3,4]))),f=[{id:"Projects",label:"Projects",icon:i.jsx(x,{size:14})},{id:"Experience",label:"Experience",icon:i.jsx(l,{size:14})},{id:"Education",label:"Education",icon:i.jsx(m,{size:14})},{id:"Certificates",label:"Certificates",icon:i.jsx(b,{size:14})}],y=t.section`
  padding: 0 0 120px;
  max-width: 1350px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 0 80px;
  }
`,_=t.div`
  position: sticky;
  top: 80px;
  z-index: 100;
  display: flex;
  justify-content: center;
  padding: 16px 24px;

  @media (max-width: 768px) {
    top: 64px;
    padding: 12px 16px;
  }
`,v=t.div`
  display: flex;
  align-items: center;
  gap: 2px;
  background: ${({theme:e})=>e.glass};
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid ${({theme:e})=>e.glassBorder};
  border-radius: 980px;
  padding: 6px;
  box-shadow: ${({theme:e})=>e.shadowMd};
  overflow-x: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,E=t.button`
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 18px;
  border: none;
  background: transparent;
  border-radius: 980px;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e,$active:r})=>r?"black":e.textSecondary};
  cursor: pointer;
  white-space: nowrap;
  transition: color 0.2s ease;
  z-index: 1;

  &:hover {
    color: ${({theme:e})=>e.textSecondary};
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 0.8125rem;
    gap: 4px;

    span.label {
      display: none;
    }
  }
`,w=t(n.div)`
  position: absolute;
  inset: 0;
  background: white;
  border-radius: 980px;
  z-index: 0;
  box-shadow: ${({theme:e})=>e.shadowSm};
  border: 1px solid ${({theme:e})=>e.glassBorder};
`,z=t.div`
  padding: 0 24px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`,k=t.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  color: ${({theme:e})=>e.textTertiary};
  font-size: 0.875rem;
`,A=()=>{const[e,r]=a.useState("Projects");return i.jsxs(y,{id:"more",children:[i.jsx(_,{children:i.jsx(v,{children:f.map(({id:s,label:d,icon:p})=>i.jsxs(E,{$active:e===s,onClick:()=>r(s),children:[e===s&&i.jsx(w,{layoutId:"active-pill",transition:{type:"spring",stiffness:400,damping:35}}),i.jsxs("span",{style:{position:"relative",zIndex:1,display:"flex",alignItems:"center",gap:6},children:[p,i.jsx("span",{className:"label",children:d})]})]},s))})}),i.jsx(z,{children:i.jsx(c,{mode:"wait",children:i.jsx(n.div,{initial:{opacity:0,y:16},animate:{opacity:1,y:0},exit:{opacity:0,y:-16},transition:{duration:.35,ease:[.25,.46,.45,.94]},children:i.jsxs(a.Suspense,{fallback:i.jsx(k,{children:"Loading…"}),children:[e==="Certificates"&&i.jsx(u,{}),e==="Education"&&i.jsx(j,{}),e==="Experience"&&i.jsx(g,{}),e==="Projects"&&i.jsx(h,{})]})},e)})})]})};export{A as default};
