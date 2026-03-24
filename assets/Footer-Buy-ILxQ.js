import{d as o,j as t,q as s,F as l,c,I as d,R as x}from"./index-Dq9sHIEi.js";const p=o.footer`
  padding: 40px 24px;
  border-top: 1px solid ${({theme:e})=>e.border};
  background: ${({theme:e})=>e.bgSecondary};

  @media (max-width: 640px) {
    padding: 32px 16px;
  }
`,m=o.div`
  max-width: 1350px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 24px;
  }
`,h=o.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,f=o.div`
  font-size: 0.9375rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: ${({theme:e})=>e.textPrimary};
`,g=o.div`
  font-size: 0.8rem;
  color: ${({theme:e})=>e.textTertiary};
  display: flex;
  align-items: center;
  gap: 4px;

  svg { color: #ff3b30; }
`,b=o.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 480px) {
    gap: 14px;
  }
`,u=o.button`
  font-size: 0.875rem;
  color: ${({theme:e})=>e.textSecondary};
  cursor: pointer;
  text-decoration: none;
  background: none;
  border: none;
  transition: color 0.2s ease;
  padding: 0;

  &:hover { color: ${({theme:e})=>e.accent}; }
`,w=o.div`
  display: flex;
  gap: 8px;
`,j=o.a`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid ${({theme:e})=>e.border};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.textTertiary};
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    color: ${({theme:e})=>e.accent};
    border-color: ${({theme:e})=>e.accent};
    background: ${({theme:e})=>e.accentSubtle};
    transform: translateY(-2px);
  }
`,y=[{label:"Home",id:"home"},{label:"About",id:"about"},{label:"Skills",id:"skills"},{label:"Work",id:"more"},{label:"Connect",id:"connect"}],k=[{href:"https://www.linkedin.com/in/shaik-sameer-mujahid/",icon:t.jsx(l,{}),label:"LinkedIn"},{href:"https://github.com/sameermujahid",icon:t.jsx(c,{}),label:"GitHub"},{href:"https://www.instagram.com/sameer.mujahid/",icon:t.jsx(d,{}),label:"Instagram"},{href:"https://x.com/sameer__mujahid",icon:t.jsx(x,{}),label:"Twitter"}],I=()=>{const e=r=>{const n=document.getElementById(r);if(n){const i=window.innerWidth<=768?60:80,a=n.getBoundingClientRect().top+window.scrollY-i;window.scrollTo({top:a,behavior:"smooth"})}};return t.jsx(p,{children:t.jsxs(m,{children:[t.jsxs(h,{children:[t.jsx(f,{children:"SK Sameer Mujahid"}),t.jsxs(g,{children:["Made with ",t.jsx(s,{size:11,fill:"currentColor"})," · ",new Date().getFullYear()]})]}),t.jsx(b,{children:y.map(({label:r,id:n})=>t.jsx(u,{onClick:()=>e(n),children:r},n))}),t.jsx(w,{children:k.map(({href:r,icon:n,label:i})=>t.jsx(j,{href:r,target:"_blank",rel:"noopener noreferrer","aria-label":i,children:n},i))})]})})};export{I as default};
