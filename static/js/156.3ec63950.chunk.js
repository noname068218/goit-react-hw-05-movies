"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[156],{476:(t,a,i)=>{i.d(a,{Bt:()=>r,LI:()=>F,Sg:()=>h,wL:()=>s,wr:()=>n});var e=i(294);const o="517b052a4f931bad1801acfa9e9ff07e";e.Z.defaults.baseURL="https://api.themoviedb.org";const n=async()=>await e.Z.get("/3/trending/movie/day?api_key=".concat(o)).then((t=>t.data.results)).catch((t=>console.log(t))),h=async t=>await e.Z.get("/3/movie/".concat(t,"?api_key=").concat(o)).then((t=>t.data)),s=async t=>await e.Z.get("/3/movie/".concat(t,"/credits?api_key=").concat(o)).then((t=>t.data.cast)),r=async t=>await e.Z.get("/3/movie/".concat(t,"/reviews?api_key=").concat(o)).then((t=>t.data.results)),F=async t=>await e.Z.get("/3/search/movie?query=".concat(t,"&api_key=").concat(o)).then((t=>t.data.results))},766:(t,a,i)=>{i.d(a,{z:()=>h});var e=i(791),o=i(689),n=i(476);const h=t=>{const{movieId:a}=(0,o.UO)(),[i,h]=(0,e.useState)([]),[s,r]=(0,e.useState)(!1);return(0,e.useEffect)((()=>{(async()=>{try{switch(r(!0),t){case"actors":const t=await(0,n.wL)(a);h(t);break;case"movieDetails":const i=await(0,n.Sg)(a);h(i);break;case"trendingMovies":const e=await(0,n.wr)();h(e);break;case"reviews":const o=await(0,n.Bt)(a);h(o)}}catch(i){console.error("Error",i)}finally{r(!1)}})()}),[a,t]),{data:i,isLoading:s}}},156:(t,a,i)=>{i.r(a),i.d(a,{default:()=>Y});var e,o,n,h,s,r,F,C,w=i(766),p=i(168),I=i(867);const l=I.ZP.div(e||(e=(0,p.Z)(["\n  position: relative;\n  width: 300px;\n  height: 400px;\n  margin: 20px;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  transition: transform 0.3s ease-in-out;\n\n  &:hover {\n    transform: scale(1.05);\n  }\n"]))),c=I.ZP.div(o||(o=(0,p.Z)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border-radius: 10px;\n  overflow: hidden;\n"]))),E=I.ZP.ul(n||(n=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  list-style-type: none;\n  padding: 0;\n"]))),u=I.ZP.li(h||(h=(0,p.Z)(["\n  list-style-type: none;\n"]))),d=I.ZP.div(s||(s=(0,p.Z)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border-radius: 10px;\n  overflow: hidden;\n"]))),g=I.ZP.img(r||(r=(0,p.Z)(["\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n"]))),L=I.ZP.p(F||(F=(0,p.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 20px;\n  font-weight: bold;\n  color: #fff;\n  text-align: center;\n  z-index: 2;\n  opacity: 0;\n  transition: opacity 0.3s ease-in-out;\n\n  ",":hover & {\n    opacity: 1;\n  }\n"])),l),U=I.ZP.div(C||(C=(0,p.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  z-index: 1;\n  opacity: 0;\n  transition: opacity 0.3s ease-in-out;\n\n  ",":hover & {\n    opacity: 1;\n  }\n"])),l),K="data:image/png;base64,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";var Q=i(184);function Y(){const{data:t,isLoading:a}=(0,w.z)("actors");return(0,Q.jsx)("div",{children:a?(0,Q.jsx)("p",{children:"Loading..."}):(0,Q.jsx)(E,{children:t.map((t=>(0,Q.jsx)(u,{children:(0,Q.jsx)(l,{children:(0,Q.jsx)(c,{children:(0,Q.jsxs)(d,{children:[t.profile_path?(0,Q.jsx)(g,{src:"https://image.tmdb.org/t/p/w300".concat(t.profile_path),alt:t.name}):(0,Q.jsx)(g,{src:K,alt:"not available"}),(0,Q.jsx)(U,{}),(0,Q.jsx)(L,{children:t.character})]})})})},t.id)))})})}}}]);
//# sourceMappingURL=156.3ec63950.chunk.js.map