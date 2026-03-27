import{d as t,m as r,r as p,j as e,a2 as l,S as x,a as h,G as m}from"./index-Ba8WK-Zy.js";import{u as d,s as g,a as s}from"./useScrollAnimation-BOBs6-wV.js";const f=[{id:1,degree:"B.Tech – Computer Science & Engineering",institution:"Adikavi Nannaya University, Rajanagaram",period:"2020 – 2024",gpa:8.61,maxGpa:10,description:"Focused on ML, data science, and full-stack development with various projects and internships.",color:"#2997ff"},{id:2,degree:"Intermediate (MPC)",institution:"Tirumala Junior College, Katheru",period:"2018 – 2020",gpa:9.5,maxGpa:10,description:"Mathematics, Physics, and Chemistry with a strong academic foundation.",color:"#34c759"},{id:3,degree:"SSC",institution:"Keshava Reddy High School",period:"2017 – 2018",gpa:10,maxGpa:10,description:"Completed secondary school with outstanding performance.",color:"#ff9f0a"}],u=t.div`
  padding: 56px 0 60px;
`,v=t.div`
  margin-bottom: 40px;
`,j=t.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 19px;
    top: 24px;
    bottom: 24px;
    width: 2px;
    background: ${({theme:i})=>i.border};
    border-radius: 1px;

    @media (max-width: 480px) {
      left: 15px;
    }
  }
`,c=t.div`
  display: flex;
  gap: 18px;
  padding-bottom: 20px;
  position: relative;

  &:last-child {
    padding-bottom: 0;
  }
`,w=t.div`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  position: relative;
  margin-top: 8px;
  z-index: 1;

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
  }
`,y=t.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({$color:i})=>i}15;
  border: 2px solid ${({$color:i})=>i};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 700;
  color: ${({$color:i})=>i};
  transition: background 0.25s ease, transform 0.25s ease;

  ${c}:hover & {
    background: ${({$color:i})=>i}28;
    transform: scale(1.08);
  }

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
    font-size: 0.75rem;
  }
`,b=t(m)`
  flex: 1;
  padding: 22px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 0;

  @media (max-width: 480px) {
    padding: 16px 18px;
  }
`,$=t.h3`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: ${({theme:i})=>i.textPrimary};
  line-height: 1.3;
`,C=t.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({$color:i})=>i};
`,G=t.div`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.8rem;
  color: ${({theme:i})=>i.textTertiary};
`,S=t.p`
  font-size: 0.85rem;
  line-height: 1.6;
  color: ${({theme:i})=>i.textSecondary};
`,k=t.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,z=t.div`
  flex: 1;
  height: 5px;
  border-radius: 3px;
  background: ${({theme:i})=>i.bgTertiary};
  overflow: hidden;
`,T=t(r.div)`
  height: 100%;
  border-radius: 3px;
  background: ${({$color:i})=>i};
`,I=t.span`
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({theme:i})=>i.textSecondary};
  white-space: nowrap;
`,A=p.memo(({edu:i,index:a})=>{const{ref:n,isInView:o}=d(.08);return e.jsxs(c,{ref:n,children:[e.jsx(w,{children:e.jsx(y,{$color:i.color,children:i.id})}),e.jsxs(b,{as:r.div,initial:{opacity:0,x:18},animate:o?{opacity:1,x:0}:{},transition:{duration:.55,delay:a*.08,ease:[.25,.46,.45,.94]},children:[e.jsxs("div",{children:[e.jsx($,{children:i.degree}),e.jsx(C,{$color:i.color,children:i.institution})]}),e.jsxs(G,{children:[e.jsx(l,{size:11}),i.period]}),e.jsx(S,{children:i.description}),e.jsxs(k,{children:[e.jsx(z,{children:e.jsx(T,{$color:i.color,initial:{width:0},animate:o?{width:`${i.gpa/i.maxGpa*100}%`}:{},transition:{duration:.9,delay:a*.08+.25,ease:"easeOut"}})}),e.jsxs(I,{children:["GPA ",i.gpa]})]})]})]})}),M=()=>{const{ref:i,isInView:a}=d();return e.jsxs(u,{children:[e.jsx(v,{children:e.jsxs(r.div,{ref:i,variants:g,initial:"hidden",animate:a?"visible":"hidden",children:[e.jsx(x,{variants:s,children:"Education"}),e.jsx(h,{variants:s,children:"Academic journey."})]})}),e.jsx(j,{children:f.map((n,o)=>e.jsx(A,{edu:n,index:o},n.id))})]})};export{M as default};
