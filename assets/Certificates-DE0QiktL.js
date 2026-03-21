import{d as r,r as l,j as i,m as d,s as x,t as p,u as m,S as h,a as f,G as g}from"./index-DrDFpj_A.js";import{u as c,s as u,a as o}from"./useScrollAnimation-Rhz407ED.js";import{r as b}from"./resumeData-Czp3mtzo.js";const j=r.div`
  padding: 56px 0 60px;
`,w=r.div`
  margin-bottom: 40px;
`,y=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 992px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 16px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,v=r(g)`
  flex: 1 1 calc(33.333% - 20px);
  min-width: 300px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  box-sizing: border-box;
  height: 100%;

  @media (max-width: 992px) {
    flex: none;
    min-width: auto;
  }
`,$=r.div`
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: ${({theme:e})=>e.accentSubtle};
  color: ${({theme:e})=>e.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
`,C=r.h3`
  font-size: 0.9375rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: ${({theme:e})=>e.textPrimary};
  line-height: 1.4;
`,S=r.div`
  font-size: 0.8rem;
  color: ${({theme:e})=>e.textTertiary};
  font-weight: 500;
  margin-top: 2px;
`,z=r.p`
  font-size: 0.85rem;
  line-height: 1.6;
  color: ${({theme:e})=>e.textSecondary};
  flex: 1;
`,k=r.div`
  height: 1px;
  background: ${({theme:e})=>e.border};
`,D=r.div`
  display: flex;
  gap: 8px;
`,s=r.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  border-radius: 980px;
  font-size: 0.8rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  background: ${({theme:e})=>e.bgTertiary};
  color: ${({theme:e})=>e.textSecondary};
  border: 1px solid ${({theme:e})=>e.border};
  transition: all 0.2s ease;

  &:hover {
    background: ${({theme:e})=>e.accentSubtle};
    color: ${({theme:e})=>e.accent};
    border-color: ${({theme:e})=>e.accent};
  }

  @media (hover: none) {
    &:active {
      background: ${({theme:e})=>e.accentSubtle};
      color: ${({theme:e})=>e.accent};
      border-color: ${({theme:e})=>e.accent};
    }
  }
`,T=l.memo(({cert:e,index:a})=>{const{ref:n,isInView:t}=c(.08);return i.jsxs(v,{ref:n,as:d.div,initial:{opacity:0,y:18},animate:t?{opacity:1,y:0}:{},transition:{duration:.5,delay:a%3*.07,ease:[.25,.46,.45,.94]},whileHover:{y:-4,transition:{duration:.22}},whileTap:{y:0},children:[i.jsx($,{children:i.jsx(x,{})}),i.jsxs("div",{children:[i.jsx(C,{children:e.course}),i.jsx(S,{children:e.duration})]}),i.jsx(z,{children:e.description}),i.jsx(k,{}),i.jsxs(D,{children:[i.jsxs(s,{href:e.pdf,download:`${e.course.replace(/\s+/g,"-")}_certificate.pdf`,children:[i.jsx(p,{size:12}),"Download"]}),i.jsxs(s,{href:e.pdf,target:"_blank",rel:"noopener noreferrer",children:[i.jsx(m,{size:12}),"View"]})]})]})}),F=()=>{const{ref:e,isInView:a}=c();return i.jsxs(j,{children:[i.jsx(w,{children:i.jsxs(d.div,{ref:e,variants:u,initial:"hidden",animate:a?"visible":"hidden",children:[i.jsx(h,{variants:o,children:"Certificates"}),i.jsx(f,{variants:o,children:"Certifications & courses."})]})}),i.jsx(y,{children:b.courses_certificates.map((n,t)=>i.jsx(T,{cert:n,index:t},t))})]})};export{F as default};
