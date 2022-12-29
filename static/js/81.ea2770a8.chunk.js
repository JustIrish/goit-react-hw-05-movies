"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[81],{2529:function(n,r,e){e.d(r,{Hg:function(){return s},Jh:function(){return l},Ku:function(){return p},Pg:function(){return u},V0:function(){return d}});var t=e(5861),a=e(7757),c=e.n(a),o=e(2388);o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=new URLSearchParams({api_key:"12c5bb7038d66843aec293c82a0d8d17"}),s=function(){var n=(0,t.Z)(c().mark((function n(){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day?".concat(i));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(c().mark((function n(r){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(r,"?").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(c().mark((function n(r){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie?".concat(i,"&query=").concat(r));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(c().mark((function n(r){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(r,"/credits?").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(c().mark((function n(r){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(r,"/reviews?").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()},5081:function(n,r,e){e.r(r),e.d(r,{default:function(){return U}});var t,a,c,o,i,s,u,d=e(9439),p=e(9014),l=e(2529),f=e(2791),x=e(7689),h=e(8617),v=e(168),g=e(6444),m=e(1087),b=(0,g.ZP)(m.rU)(t||(t=(0,v.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 8px;\n  margin: 10px 0px 10px 10px;\n  color: #000;\n  border: 1px solid #000;\n  border-radius: 4px;\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  transition: color 300ms cubic-bezier(0.165, 0.84, 0.44, 1),\n    border-color 300ms cubic-bezier(0.165, 0.84, 0.44, 1);\n\n  :hover {\n    color: #d81d56;\n    border-color: #d81d56;\n  }\n"]))),w=e(184),j=function(n){var r=n.to,e=n.children;return(0,w.jsxs)(b,{to:r,children:[(0,w.jsx)(h.jTe,{size:"16"}),e]})},Z=e(4608),k=g.ZP.div(a||(a=(0,v.Z)(["\n  background-image: linear-gradient(\n      to right,\n      rgba(255, 255, 255, 0.7),\n      rgba(255, 255, 255, 0.7)\n    ),\n    url(",");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n"])),(function(n){return n.backdrop})),y=g.ZP.div(c||(c=(0,v.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),_=g.ZP.img(o||(o=(0,v.Z)(["\n  width: 300px;\n  margin-left: 10px;\n"]))),P=g.ZP.div(i||(i=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 12px;\n  width: 450px;\n"]))),z=g.ZP.div(s||(s=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 24px;\n\n  li {\n    padding: 2px;\n  }\n"]))),S=(0,g.ZP)(m.OL)(u||(u=(0,v.Z)(["\n  text-decoration: none;\n  color: #000;\n  font-weight: 500;\n  transition: color 300ms cubic-bezier(0.165, 0.84, 0.44, 1);\n\n  :hover,\n  :focus-visible {\n    color: #d81d56;\n  }\n\n  &.active {\n    color: #d81d56;\n  }\n"]))),U=function(){var n,r,e=(0,f.useState)(null),t=(0,d.Z)(e,2),a=t[0],c=t[1],o=(0,x.UO)().movieId,i=null!==(n=null===(r=(0,x.TH)().state)||void 0===r?void 0:r.from)&&void 0!==n?n:"/";if((0,f.useEffect)((function(){(0,l.Pg)(o).then((function(n){return c(n)})).catch((function(n){console.log("".concat(n.name,": ").concat(n.message)),p.ZP.error("Sorry, something went wrong...")}))}),[o]),a){var s=a.backdrop_path,u=a.poster_path,h=a.title,v=a.vote_average,g=a.overview,m=a.genres;return(0,w.jsxs)("main",{children:[(0,w.jsxs)(k,{backdrop:"https://image.tmdb.org/t/p/w1280".concat(s),children:[(0,w.jsx)(j,{to:i,children:"Go back"}),(0,w.jsxs)(y,{children:[(0,w.jsx)(_,{src:u?"".concat("https://image.tmdb.org/t/p/w500").concat(u):"https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-768x1129.jpg",alt:h,loading:"lazy"}),(0,w.jsxs)(P,{children:[(0,w.jsx)("h2",{children:h}),(0,w.jsxs)("p",{children:["User Score: ",Math.round(10*v),"%"]}),(0,w.jsx)("h3",{children:"Owerview"}),(0,w.jsx)("p",{children:g}),(0,w.jsx)("h3",{children:"Genres"}),(0,w.jsx)("p",{children:m?m.map((function(n){return n.name})).join(", "):""})]})]}),(0,w.jsxs)(z,{children:[(0,w.jsx)("h3",{children:"Additional information"}),(0,w.jsxs)("ul",{children:[(0,w.jsx)("li",{children:(0,w.jsx)(S,{to:"cast",state:{from:i},children:"Cast"})}),(0,w.jsx)("li",{children:(0,w.jsx)(S,{to:"reviews",state:{from:i},children:"Reviews"})})]})]})]}),(0,w.jsx)(f.Suspense,{fallback:(0,w.jsx)(Z.a,{}),children:(0,w.jsx)(x.j3,{})})]})}}}}]);
//# sourceMappingURL=81.ea2770a8.chunk.js.map