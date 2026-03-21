import{d as a,m as o,r as x,j as i,c as m,x as h,S as b,a as f,A as v,G as y}from"./index-DrDFpj_A.js";import{u,s as w,a as c}from"./useScrollAnimation-Rhz407ED.js";import{r as j}from"./resumeData-Czp3mtzo.js";const $=a.div`
  padding: 56px 0 60px;
`,k=a.div`
  margin-bottom: 40px;
`;a(o.div)`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-top: 18px;
`;a.button`
  padding: 5px 14px;
  border-radius: 999px;
  border: 1px solid ${({$active:e,theme:t})=>e?t.accent:t.border};
  background: ${({$active:e,theme:t})=>e?t.accentSubtle:"transparent"};
  color: ${({$active:e,theme:t})=>e?t.accent:t.textTertiary};
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({theme:e})=>e.accent};
    color: ${({theme:e})=>e.accent};
  }
`;const S=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`,s=a(y)`
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: default;
`,z=a.div`
  width: 100%;
  height: 188px;
  overflow: hidden;
  background: ${({theme:e})=>e.bgTertiary};
  flex-shrink: 0;
  position: relative;
`,C=a.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${s}:hover & {
    transform: scale(1.07);
  }
`,I=a.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.25), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;

  ${s}:hover & {
    opacity: 1;
  }
`,A=a.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 3px 9px;
  border-radius: 999px;
  background: rgba(0,0,0,0.5);
  color: rgba(255,255,255,0.85);
  backdrop-filter: blur(6px);
`,P=a.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
`,T=a.h3`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: ${({theme:e})=>e.textPrimary};
  line-height: 1.3;
`,G=a.p`
  font-size: 0.85rem;
  line-height: 1.65;
  color: ${({theme:e})=>e.textSecondary};
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,L=a.div`
  display: flex;
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid ${({theme:e})=>e.border};
  margin-top: auto;
`,p=a.a`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 6px 13px;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 500;
  text-decoration: none;
  border: 1px solid ${({theme:e})=>e.border};
  background: ${({theme:e})=>e.bgTertiary};
  color: ${({theme:e})=>e.textSecondary};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({theme:e})=>e.accentSubtle};
    color: ${({theme:e})=>e.accent};
    border-color: ${({theme:e})=>e.accent};
  }
`,F=x.memo(({project:e,index:t})=>{const{ref:r,isInView:d}=u(.08);return i.jsxs(s,{ref:r,as:o.div,initial:{opacity:0,y:22},animate:d?{opacity:1,y:0}:{},transition:{duration:.55,delay:t%3*.08,ease:[.25,.46,.45,.94]},whileHover:{y:-5,transition:{duration:.25}},children:[i.jsxs(z,{children:[i.jsx(C,{src:e.image,alt:e.name,loading:"lazy"}),i.jsx(I,{}),e.date&&i.jsx(A,{children:e.date})]}),i.jsxs(P,{children:[i.jsx(T,{children:e.name}),i.jsx(G,{children:e.description}),i.jsxs(L,{children:[e.github&&i.jsxs(p,{href:e.github,target:"_blank",rel:"noopener noreferrer",children:[i.jsx(m,{size:12}),"GitHub"]}),e.view&&i.jsxs(p,{href:e.view,target:"_blank",rel:"noopener noreferrer",children:[i.jsx(h,{size:12}),"Live"]})]})]})]})}),B=(e,t)=>{if(t==="All")return!0;const r=(e.name+e.description).toLowerCase();return t==="AI/ML"?r.includes("ai")||r.includes("ml")||r.includes("model")||r.includes("yolo")||r.includes("deep")||r.includes("llm")||r.includes("rag"):t==="Data"?r.includes("data")||r.includes("analysis")||r.includes("scraper")||r.includes("predict"):t==="Web"?r.includes("portfolio")||r.includes("web")||r.includes("chatbot"):!0},W=()=>{const{ref:e,isInView:t}=u(),[r,d]=x.useState("All"),g=j.projects.filter(n=>B(n,r));return i.jsxs($,{children:[i.jsx(k,{children:i.jsxs(o.div,{ref:e,variants:w,initial:"hidden",animate:t?"visible":"hidden",children:[i.jsx(b,{variants:c,children:"Projects"}),i.jsx(f,{variants:c,children:"Things I've built."})]})}),i.jsx(v,{mode:"wait",children:i.jsx(o.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.22},children:i.jsx(S,{children:g.map((n,l)=>i.jsx(F,{project:n,index:l},n.name||l))})},r)})]})};export{W as default};
