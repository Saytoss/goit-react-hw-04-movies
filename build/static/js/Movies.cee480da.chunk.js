(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[1],{85:function(e,t,a){e.exports={searchForm:"Movies_searchForm__3WrrQ",list:"Movies_list__3QfxK",link:"Movies_link__1VK49"}},92:function(e,t,a){"use strict";a.r(t);var n=a(80),r=a.n(n),c=a(79),s=a(82),l=a(13),o=a(0),i=a.n(o),u=a(2),m=a(8),p=a(83),f=a.n(p),h=a(17),b=a(85),v=a.n(b),E=a(19),j=a.n(E),O=(a(31),Object(o.lazy)((function(){return a.e(8).then(a.bind(null,87))})));t.default=function(){var e=Object(o.useState)(""),t=Object(l.a)(e,2),a=t[0],n=t[1],p=Object(o.useState)([]),b=Object(l.a)(p,2),E=b[0],d=b[1],_=Object(u.f)(),k=Object(u.g)(),g=function(e){var t=e.target.value;n(t)},w=function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),_.push(Object(c.a)(Object(c.a)({},k),{},{search:"?query=".concat(a)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){var e=f.a.parse(k.search).query;e||(d([]),n("")),k.search&&(Object(h.e)(e).then((function(e){return d(e.data.results)})),n(e))}),[k.search]),i.a.createElement(o.Suspense,{fallback:i.a.createElement(j.a,{type:"TailSpin",color:"#red"})},i.a.createElement(u.c,null,i.a.createElement(u.a,{path:"/movies/:movieId",component:O}),i.a.createElement(u.a,{exact:!0,path:"/movies",render:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("form",{onSubmit:w,className:v.a.searchForm},i.a.createElement("input",{placeholder:"enter movie",value:a,onChange:g}),i.a.createElement("button",null,"Search")),i.a.createElement("ul",{className:v.a.list},E.map((function(e){return i.a.createElement(m.b,{key:e.id,to:{pathname:"/movies/".concat(e.id),state:{from:k}},className:v.a.link},i.a.createElement("li",null,e.title||e.name))}))))}})))}}}]);
//# sourceMappingURL=Movies.cee480da.chunk.js.map