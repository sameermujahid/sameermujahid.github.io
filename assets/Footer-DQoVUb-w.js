import{d as o,j as t,F as s,c as l,I as c,R as d}from"./index-GzOjqDbE.js";const p=o.footer`
  position: relative;
  padding: 60px 24px 40px;
  background: ${({theme:e})=>e.bgSecondary};
  overflow: hidden;

  /* Glass gradient glow */
  &::before {
    content: '';
    position: absolute;
    top: -100px;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    height: 300px;
    background: radial-gradient(
      circle,
      ${({theme:e})=>e.accentSubtle} 0%,
      transparent 70%
    );
    filter: blur(80px);
    opacity: 0.6;
    pointer-events: none;
  }
`,x=o.div`
  width: 100%;
  height: 1px;
  background: ${({theme:e})=>e.border};
  position: relative;
  margin-bottom: 40px;

  &::after {
    content: '';
    position: absolute;
    width: 120px;
    height: 2px;
    background: ${({theme:e})=>e.accent};
    top: -0.5px;
    left: 0;
    animation: slide 6s linear infinite;
  }

  @keyframes slide {
    0% { left: 0; }
    50% { left: calc(100% - 120px); }
    100% { left: 0; }
  }
`,h=o.div`
  max-width: 1350px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`,m=o.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,f=o.div`
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.textPrimary};
`,g=o.div`
  font-size: 0.8rem;
  color: ${({theme:e})=>e.textTertiary};
  opacity: 0.8;
`,b=o.div`
  display: flex;
  gap: 24px;
  // flex-wrap: wrap;
`,u=o.button`
  font-size: 0.85rem;
  color: ${({theme:e})=>e.textSecondary};
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  padding: 4px 0;
  transition: color 0.25s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0%;
    height: 1.5px;
    background: ${({theme:e})=>e.accent};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${({theme:e})=>e.accent};
  }

  &:hover::after {
    width: 100%;
  }
`,w=o.div`
  display: flex;
  gap: 10px;
`,j=o.a`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.textTertiary};
  border: 1px solid ${({theme:e})=>e.border};
  backdrop-filter: blur(10px);

  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-3px) scale(1.05);
    color: ${({theme:e})=>e.accent};
    border-color: ${({theme:e})=>e.accent};
    background: ${({theme:e})=>e.accentSubtle};
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  }
`;o.div`
  margin-top: 40px;
  text-align: center;
  font-size: 0.75rem;
  color: ${({theme:e})=>e.textTertiary};
  opacity: 0.7;
`;const v=[{label:"Home",id:"home"},{label:"About",id:"about"},{label:"Skills",id:"skills"},{label:"Work",id:"more"},{label:"Connect",id:"connect"}],k=[{href:"https://www.linkedin.com/in/shaik-sameer-mujahid/",icon:t.jsx(s,{})},{href:"https://github.com/sameermujahid",icon:t.jsx(l,{})},{href:"https://www.instagram.com/sameer.mujahid/",icon:t.jsx(c,{})},{href:"https://x.com/sameer__mujahid",icon:t.jsx(d,{})}],$=()=>{const e=n=>{const i=document.getElementById(n);if(i){const r=window.innerWidth<=768?60:80,a=i.getBoundingClientRect().top+window.scrollY-r;window.scrollTo({top:a,behavior:"smooth"})}};return t.jsxs(p,{children:[t.jsx(x,{}),t.jsxs(h,{children:[t.jsxs(m,{children:[t.jsx(f,{children:"SK Sameer Mujahid"}),t.jsx(g,{children:"Building AI × Full Stack Experiences"})]}),t.jsx(b,{children:v.map(({label:n,id:i})=>t.jsx(u,{onClick:()=>e(i),children:n},i))}),t.jsx(w,{children:k.map(({href:n,icon:i},r)=>t.jsx(j,{href:n,target:"_blank",children:i},r))})]})]})};export{$ as default};
