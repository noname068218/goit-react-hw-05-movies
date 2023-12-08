"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[122],{476:(n,e,t)=>{t.d(e,{Bt:()=>c,LI:()=>d,Sg:()=>r,wL:()=>o,wr:()=>s});var i=t(294);const a="517b052a4f931bad1801acfa9e9ff07e";i.Z.defaults.baseURL="https://api.themoviedb.org";const s=async()=>await i.Z.get("/3/trending/movie/day?api_key=".concat(a)).then((n=>n.data.results)).catch((n=>console.log(n))),r=async n=>await i.Z.get("/3/movie/".concat(n,"?api_key=").concat(a)).then((n=>n.data)),o=async n=>await i.Z.get("/3/movie/".concat(n,"/credits?api_key=").concat(a)).then((n=>n.data.cast)),c=async n=>await i.Z.get("/3/movie/".concat(n,"/reviews?api_key=").concat(a)).then((n=>n.data.results)),d=async n=>await i.Z.get("/3/search/movie?query=".concat(n,"&api_key=").concat(a)).then((n=>n.data.results))},766:(n,e,t)=>{t.d(e,{z:()=>r});var i=t(791),a=t(689),s=t(476);const r=n=>{const{movieId:e}=(0,a.UO)(),[t,r]=(0,i.useState)([]),[o,c]=(0,i.useState)(!1);return(0,i.useEffect)((()=>{(async()=>{try{switch(c(!0),n){case"actors":const n=await(0,s.wL)(e);r(n);break;case"movieDetails":const t=await(0,s.Sg)(e);r(t);break;case"trendingMovies":const i=await(0,s.wr)();r(i);break;case"reviews":const a=await(0,s.Bt)(e);r(a)}}catch(t){console.error("Error",t)}finally{c(!1)}})()}),[e,n]),{data:t,isLoading:o}}},122:(n,e,t)=>{t.r(e),t.d(e,{default:()=>U});var i=t(689),a=t(87),s=t(791),r=t(184);const o=()=>(0,r.jsxs)("div",{className:"loop cubes",children:[(0,r.jsx)("div",{className:"item cubes"}),(0,r.jsx)("div",{className:"item cubes"}),(0,r.jsx)("div",{className:"item cubes"}),(0,r.jsx)("div",{className:"item cubes"}),(0,r.jsx)("div",{className:"item cubes"}),(0,r.jsx)("div",{className:"item cubes"})]});var c,d,p,x,l,h,m,g,b,f,u=t(766),v=t(168),w=t(867);const j=w.ZP.button(c||(c=(0,v.Z)(["\n  position: fixed;\n  top: 0;\n  right: 90%;\n  color: #090909;\n  padding: 0.7em 1.7em;\n  font-size: 18px;\n  border-radius: 0.5em;\n  background: #e8e8e8;\n  border: 1px solid #e8e8e8;\n  transition: all 0.3s;\n  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;\n\n  &:active {\n    color: #666;\n    box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;\n  }\n"]))),y=w.ZP.div(d||(d=(0,v.Z)(["\n  width: 800px;\n  height: 400px;\n  background: transparent;\n  position: relative;\n  top: 0;\n  left: 0;\n  margin: 0;\n  padding: 0;\n  top: 0;\n  bottom: 0;\n  border-radius: 10px;\n  -webkit-border-radius: 10px;\n  -moz-border-radius: 10px;\n  box-shadow: 0px 20px 30px 3px rgba(0, 0, 0, 0.55);\n  display: flex;\n  flex-direction: row;\n  overflow: hidden;\n"]))),Z=w.ZP.div(p||(p=(0,v.Z)(["\n  width: 40%;\n  height: 100%;\n  overflow: hidden;\n  background: transparent;\n  img {\n    width: 100%;\n    height: 100%;\n    border-radius: 10px 0 0 10px;\n    -webkit-border-radius: 10px 0 0 10px;\n    -moz-border-radius: 10px 0 0 10px;\n  }\n"]))),k=w.ZP.div(x||(x=(0,v.Z)(["\n  width: 60%;\n  background: #000000;\n  height: auto;\n  border-radius: 0 10px 10px 0;\n  -webkit-border-radius: 0 10px 10px 0;\n  -moz-border-radius: 0 10px 10px 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  h2 {\n    color: white;\n    font-family: 'Montserrat', sans-serif;\n    font-weight: 400;\n    text-align: center;\n    font-size: 40px;\n    margin-top: 0;\n    margin-bottom: 0;\n\n    padding: 0 0 0 40px;\n    letter-spacing: 1px;\n  }\n  p {\n    text-align: center;\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n"]))),_=w.ZP.h2(l||(l=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 0;\n  margin-bottom: 0;\n"]))),P=w.ZP.div(h||(h=(0,v.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: center;\n  margin-top: 0;\n  margin-bottom: 0;\n"]))),z=w.ZP.div(m||(m=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n"]))),N=w.ZP.ul(g||(g=(0,v.Z)(["\n  list-style-type: none;\n  padding: 0;\n  display: flex;\n  gap: 20px;\n"]))),L=w.ZP.li(b||(b=(0,v.Z)(["\n  margin: 12px;\n  height: 50px;\n  width: 120px;\n  border-radius: 10px;\n  background: #333;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: -5px -5px 15px #444, 5px 5px 15px #222, inset 5px 5px 10px #444,\n    inset -5px -5px 10px #222;\n  font-family: 'Damion', cursive;\n  border: none;\n  font-size: 16px;\n  color: rgb(161, 161, 161);\n  transition: 500ms;\n\n  &:hover {\n    box-shadow: -5px -5px 15px #444, 5px 5px 15px #222, inset 5px 5px 10px #222,\n      inset -5px -5px 10px #444;\n    color: #d6d6d6;\n    transition: 500ms;\n  }\n  padding-left: 30px;\n  padding-right: 30px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n"]))),S=(0,w.ZP)(a.rU)(f||(f=(0,v.Z)(["\n  color: white;\n  text-align: center;\n  width: 100%;\n  height: 100%;\n  text-decoration: none;\n"]))),U=()=>{var n,e;const{data:t,isLoading:c}=(0,u.z)("movieDetails"),d=(0,i.TH)(),p=(0,s.useRef)(null!==(n=null===(e=d.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");return(0,r.jsxs)("div",{children:[c?(0,r.jsx)(o,{}):(0,r.jsxs)("div",{children:[(0,r.jsx)(a.rU,{to:p.current,children:(0,r.jsx)(j,{children:"Go Home"})}),(0,r.jsxs)(y,{children:[(0,r.jsx)(Z,{children:t.backdrop_path?(0,r.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path),alt:t.title}):(0,r.jsx)("span",{children:"No Image Available"})}),(0,r.jsxs)(k,{children:[(0,r.jsx)("h2",{children:t.title}),(0,r.jsx)("p",{children:t.overview}),(0,r.jsx)(_,{children:"Gener"}),(0,r.jsx)(P,{children:t.genres&&t.genres.map((n=>(0,r.jsx)("p",{children:n.name},n.id)))})]})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(z,{children:(0,r.jsxs)(N,{children:[(0,r.jsx)(L,{children:(0,r.jsx)(S,{to:"cast",children:"Cast"})}),(0,r.jsx)(L,{children:(0,r.jsx)(S,{to:"reviews",children:"Reviews"})})]})}),(0,r.jsx)(i.j3,{})]})]})}}}]);
//# sourceMappingURL=122.5278bc77.chunk.js.map