(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[0],{89:function(t,e,a){"use strict";a.r(e);var n=a(13),c=a(0),r=a.n(c),o=a(17),l=a(90),u=a.n(l);e.default=function(t){var e=Object(c.useState)([]),a=Object(n.a)(e,2),l=a[0],i=a[1],s=t.match.params.movieId;return Object(c.useEffect)((function(){Object(o.b)(s).then((function(t){return i(t.data.cast)}))}),[s]),r.a.createElement("ul",null,l.map((function(t){var e=t.id,a=t.character,n=t.name,c=t.profile_path;return r.a.createElement("li",{key:e},c&&r.a.createElement("img",{src:"".concat(o.g).concat(c),alt:n,className:u.a.photo})||r.a.createElement("p",null,"no photo"),r.a.createElement("p",null,n),r.a.createElement("p",null,"Character: ",a))})))}},90:function(t,e,a){t.exports={photo:"Cast_photo__3jWwk"}}}]);
//# sourceMappingURL=Cast.dd985d79.chunk.js.map