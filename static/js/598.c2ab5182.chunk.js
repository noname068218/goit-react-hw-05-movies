"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[598],{75:(n,t,e)=>{e.d(t,{Bt:()=>c,LI:()=>d,Sg:()=>r,wL:()=>s,wr:()=>o});var a=e(294);const i="517b052a4f931bad1801acfa9e9ff07e";a.Z.defaults.baseURL="https://api.themoviedb.org";const o=async()=>await a.Z.get("/3/trending/movie/day?api_key=".concat(i)).then((n=>n.data.results)).catch((n=>console.log(n))),r=async n=>await a.Z.get("/3/movie/".concat(n,"?api_key=").concat(i)).then((n=>n.data)),s=async n=>await a.Z.get("/3/movie/".concat(n,"/credits?api_key=").concat(i)).then((n=>n.data.cast)),c=async n=>await a.Z.get("/3/movie/".concat(n,"/reviews?api_key=").concat(i)).then((n=>n.data.results)),d=async n=>await a.Z.get("/3/search/movie?query=".concat(n,"&api_key=").concat(i)).then((n=>n.data.results))},598:(n,t,e)=>{e.r(t),e.d(t,{default:()=>P});var a=e(87),i=e(791),o=e(75);const r=()=>{const[n,t]=(0,i.useState)([]),[e,a]=(0,i.useState)(!1);(0,i.useEffect)((()=>{(async()=>{try{a(!0);const n=await(0,o.wr)();t(n)}catch(n){console.error("Error",n)}finally{a(!1)}})()}),[]);const r=Array.from(new Set(n.map((n=>n.id))));return{trendingMovies:n,isLoading:e,uniqueMovies:r}};var s,c,d,l,p,h,u,f,g=e(168),v=e(867);const y=v.ZP.div(s||(s=(0,g.Z)(["\n  position: relative;\n  width: 300px;\n  height: 400px;\n  margin: 20px;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  transition: transform 0.3s ease-in-out;\n\n  &:hover {\n    transform: scale(1.05);\n  }\n"]))),w=v.ZP.div(c||(c=(0,g.Z)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border-radius: 10px;\n  overflow: hidden;\n"]))),x=v.ZP.ul(d||(d=(0,g.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  list-style-type: none;\n  padding: 0;\n"]))),m=v.ZP.li(l||(l=(0,g.Z)(["\n  list-style-type: none;\n"]))),b=v.ZP.div(p||(p=(0,g.Z)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border-radius: 10px;\n  overflow: hidden;\n"]))),Z=v.ZP.img(h||(h=(0,g.Z)(["\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n"]))),k=v.ZP.p(u||(u=(0,g.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 20px;\n  font-weight: bold;\n  color: #fff;\n  text-align: center;\n  z-index: 2;\n  opacity: 0;\n  transition: opacity 0.3s ease-in-out;\n\n  ",":hover & {\n    opacity: 1;\n  }\n"])),y),j=v.ZP.div(f||(f=(0,g.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  z-index: 1;\n  opacity: 0;\n  transition: opacity 0.3s ease-in-out;\n\n  ",":hover & {\n    opacity: 1;\n  }\n"])),y);var _=e(184);function P(){const{trendingMovies:n,isLoading:t,uniqueMovies:e}=r();return(0,_.jsx)(x,{children:t?(0,_.jsx)("p",{children:"Loading..."}):e.map(((t,e)=>{const i=n.find((n=>n.id===t));return(0,_.jsx)(m,{children:(0,_.jsx)(y,{children:(0,_.jsx)(w,{children:(0,_.jsx)(b,{children:(0,_.jsxs)(a.rU,{to:"/movies/".concat(i.id),state:{from:"/"},children:[i.backdrop_path?(0,_.jsx)(Z,{src:"https://image.tmdb.org/t/p/original".concat(i.backdrop_path),alt:i.title}):(0,_.jsx)("span",{children:"No Image Available"}),(0,_.jsx)(j,{}),(0,_.jsx)(k,{children:i.title})]})})})})},e)}))})}}}]);
//# sourceMappingURL=598.c2ab5182.chunk.js.map