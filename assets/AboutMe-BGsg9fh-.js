import{d as t,r as h,j as e,m as o,S as b,a as y,b as v,F as S,c as I,I as L,R as M,G as R}from"./index-g-MP4zXN.js";import{u as A,s as k,a as g}from"./useScrollAnimation-DCl4ZY4y.js";const $="/assets/about5-jU8IswgW.jpg",C=t.section`
  max-width: 1350px;
  margin: 0 auto;
  padding: 80px 24px;

  @media (max-width: 768px) {
    padding: 60px 16px;
  }
`,z=t.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  margin-top: 56px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
    margin-top: 36px;
  }
`,F=t.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,G=t.div`
  perspective: 1200px;

  img {
    width: 100%;
    max-height: 320px;
    border-radius: 24px;
    object-fit: cover;
    will-change: transform;
    transform-style: preserve-3d;
    transition: transform 0.15s ease-out, filter 0.4s ease, box-shadow 0.4s ease;
    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.3);
    filter: grayscale(80%);

    @media (max-width: 768px) {
      max-height: 260px;
      border-radius: 18px;
    }
  }
`,T=t(R)`
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 36px;

  @media (max-width: 480px) {
    padding: 22px;
    gap: 18px;
  }
`,_=t.h3`
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: ${({theme:i})=>i.textPrimary};

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`,u=t.p`
  font-size: 0.9375rem;
  line-height: 1.75;
  color: ${({theme:i})=>i.textSecondary};
`,f=t.div`
  height: 1px;
  background: ${({theme:i})=>i.border};
`,X=t.div`
  display: flex;
  gap: 28px;
  flex-wrap: wrap;
`,d=t.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,p=t.span`
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.04em;
  color: ${({theme:i})=>i.accent};
`,x=t.span`
  font-size: 0.8rem;
  color: ${({theme:i})=>i.textTertiary};
  font-weight: 500;
`,Y=t.div`
  display: flex;
  gap: 8px;
`,H=[{href:"https://www.linkedin.com/in/shaik-samee_r-mujahid/",icon:e.jsx(S,{}),label:"LinkedIn"},{href:"https://github.com/sameermujahid",icon:e.jsx(I,{}),label:"GitHub"},{href:"https://www.instagram.com/sameer.mujahid/",icon:e.jsx(L,{}),label:"Instagram"},{href:"https://x.com/sameer__mujahid",icon:e.jsx(M,{}),label:"Twitter"}],W=()=>{const{ref:i,isInView:l}=A(),a=h.useRef(null),c=h.useRef(null),j=n=>{a.current&&(cancelAnimationFrame(c.current),c.current=requestAnimationFrame(()=>{const r=a.current.getBoundingClientRect(),s=(n.clientX-r.left)/r.width-.5,m=(n.clientY-r.top)/r.height-.5;a.current.style.transition="transform 0.1s ease-out, filter 0.3s ease",a.current.style.transform=`perspective(1200px) rotateY(${s*14}deg) rotateX(${-m*14}deg) scale(1.04)`,a.current.style.filter="grayscale(0%)",a.current.style.boxShadow=`${s*-20}px ${m*-20}px 50px rgba(0,0,0,0.25)`}))},w=()=>{a.current&&(cancelAnimationFrame(c.current),a.current.style.transition="transform 0.6s cubic-bezier(0.22,1,0.36,1), filter 0.5s ease, box-shadow 0.5s ease",a.current.style.transform="perspective(1200px) rotateY(0deg) rotateX(0deg) scale(1)",a.current.style.filter="grayscale(80%)",a.current.style.boxShadow="0 12px 48px rgba(0,0,0,0.3)")};return e.jsx(C,{id:"about",ref:i,children:e.jsxs(z,{children:[e.jsxs(F,{children:[e.jsxs(o.div,{variants:k,initial:"hidden",animate:l?"visible":"hidden",children:[e.jsx(b,{variants:g,children:"About"}),e.jsxs(y,{variants:g,children:["Who I am,",e.jsx("br",{}),"and what I do."]})]}),e.jsx(o.div,{initial:{opacity:0,y:20},animate:l?{opacity:1,y:0}:{},transition:{duration:.7,delay:.2,ease:[.25,.46,.45,.94]},children:e.jsx(G,{onMouseMove:j,onMouseLeave:w,children:e.jsx("img",{ref:a,src:$,alt:"About SK Sameer Mujahid"})})})]}),e.jsx(o.div,{initial:{opacity:0,x:32},animate:l?{opacity:1,x:0}:{},transition:{duration:.75,delay:.15,ease:[.25,.46,.45,.94]},children:e.jsxs(T,{children:[e.jsx(_,{children:"SK Sameer Mujahid"}),e.jsx(u,{children:"Hello! I'm a passionate engineer specializing in AI, machine learning, and full-stack development. My work spans LLMs, RAG systems, data pipelines, and web applications turning complex problems into elegant, scalable solutions."}),e.jsx(u,{children:"I thrive at the intersection of data and software, always exploring new frameworks, contributing to projects, and growing both technically and creatively."}),e.jsx(f,{}),e.jsxs(X,{children:[e.jsxs(d,{children:[e.jsx(p,{children:"1+"}),e.jsx(x,{children:"Years experience"})]}),e.jsxs(d,{children:[e.jsx(p,{children:"15+"}),e.jsx(x,{children:"Projects built"})]}),e.jsxs(d,{children:[e.jsx(p,{children:"3+"}),e.jsx(x,{children:"Certifications"})]})]}),e.jsx(f,{}),e.jsx(Y,{children:H.map(({href:n,icon:r,label:s})=>e.jsx(v,{as:o.a,href:n,target:"_blank",rel:"noopener noreferrer","aria-label":s,whileHover:{scale:1.12,y:-3},whileTap:{scale:.93},children:r},s))})]})})]})})};export{W as default};
