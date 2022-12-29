"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[526],{7335:function(n,t,r){r.d(t,{O:function(){return v}});var e,a,c,o,u=r(1087),i=r(7689),s=r(168),p=r(6444),f=p.ZP.ul(e||(e=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 16px;\n"]))),x=p.ZP.li(a||(a=(0,s.Z)(["\n  width: calc(100% / 4 - 48px);\n  border-radius: 15px;\n  background-color: #e8e9ec;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n\n  scale: 1;\n  transition: scale 500ms cubic-bezier(0.165, 0.84, 0.44, 1),\n    box-shadow 500ms cubic-bezier(0.165, 0.84, 0.44, 1);\n\n  &:hover {\n    scale: 1.02;\n    box-shadow: 0 0 7px 2px #a8a6a5;\n  }\n"]))),d=p.ZP.img(c||(c=(0,s.Z)(["\n  height: 400px;\n  border-radius: 15px 15px 0px 0px;\n"]))),h=p.ZP.p(o||(o=(0,s.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n  color: #656870;\n  padding: 10px;\n"]))),l=r(184),v=function(n){var t=n.movies,r=(0,i.TH)();return(0,l.jsx)(f,{children:t.map((function(n){var t=n.id,e=n.title,a=n.poster_path;return(0,l.jsx)(x,{children:(0,l.jsxs)(u.rU,{to:"/movies/".concat(t),state:{from:r},children:[(0,l.jsx)(d,{src:a?"".concat("https://image.tmdb.org/t/p/w500").concat(a):"https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-768x1129.jpg",alt:e,loading:"lazy"}),(0,l.jsx)(h,{children:e})]})},t)}))})}},2529:function(n,t,r){r.d(t,{Hg:function(){return i},Jh:function(){return x},Ku:function(){return f},Pg:function(){return s},V0:function(){return p}});var e=r(5861),a=r(7757),c=r.n(a),o=r(2388);o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u=new URLSearchParams({api_key:"12c5bb7038d66843aec293c82a0d8d17"}),i=function(){var n=(0,e.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day?".concat(u));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(t,"?").concat(u));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie?".concat(u,"&query=").concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(t,"/credits?").concat(u));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(t,"/reviews?").concat(u));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},4526:function(n,t,r){r.r(t),r.d(t,{default:function(){return x}});var e,a=r(9439),c=r(2791),o=r(9014),u=r(2529),i=r(168),s=r(6444).ZP.h1(e||(e=(0,i.Z)(["\n  margin-bottom: 16px;\n  text-align: center;\n  color: #656870;\n"]))),p=r(7335),f=r(184),x=function(){var n=(0,c.useState)([]),t=(0,a.Z)(n,2),r=t[0],e=t[1];return(0,c.useEffect)((function(){(0,u.Hg)().then((function(n){return e(n.results)})).catch((function(n){console.log("".concat(n.name,": ").concat(n.message)),o.ZP.error("Sorry, something went wrong...")}))}),[]),(0,f.jsxs)("main",{children:[(0,f.jsx)(s,{children:"Trending today"}),r.length>0&&(0,f.jsx)(p.O,{movies:r})]})}}}]);
//# sourceMappingURL=526.0ae743e7.chunk.js.map