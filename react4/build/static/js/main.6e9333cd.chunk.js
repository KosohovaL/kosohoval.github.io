(this.webpackJsonpplaylist=this.webpackJsonpplaylist||[]).push([[0],{139:function(t,e,n){},143:function(t,e,n){},441:function(t,e,n){},442:function(t,e,n){},443:function(t,e,n){"use strict";n.r(e);var a=n(1),s=n.n(a),o=n(10),c=n.n(o),i=(n(138),n(139),n(22)),u=n(50),r=n(62),l=n(25),m=n(26),d=n(134),j=(n(143),n(144),n(2));var b=function(t){var e=Object(a.useRef)(),n=Object(a.useState)(!1),s=Object(i.a)(n,2),o=(s[0],s[1]),c=Object(d.a)(document.querySelectorAll("audio")),u=Object(a.useCallback)((function(){t.onChange(t.id,t.author,t.song,t.mp3,t.status),c.map((function(t){return t.pause()})),"stop"===t.status?(c.map((function(t){return t.pause()})),e.current.play(),o(!0)):(e.current.pause(),o(!1))}),[t]),r=(Object(a.useCallback)((function(){t.onChange(t.id,t.author,t.song,t.mp3,"play"),e.current.pause(),e.current.currentTime=0,o(!1)}),[t]),Object(a.useCallback)((function(){t.onDelete(t.id)}),[t]));return Object(j.jsxs)("div",{className:"song-item is-".concat(t.status),children:[Object(j.jsx)("div",{className:"status",children:"stop"==t.status?Object(j.jsx)(l.a,{icon:m.c}):Object(j.jsx)(l.a,{icon:m.d})}),Object(j.jsx)("audio",{ref:e,src:t.mp3,id:t.id,volume:"0.1"}),Object(j.jsxs)("div",{className:"song-item-name",children:[Object(j.jsx)("span",{className:"song-author",children:t.author}),Object(j.jsx)("span",{className:"song-title",children:t.song})]}),Object(j.jsx)("button",{className:"sound-btn",onClick:u,children:"stop"===t.status?Object(j.jsx)(l.a,{icon:m.d}):Object(j.jsx)(l.a,{icon:m.c})}),Object(j.jsx)("button",{className:"sound-btn",onClick:r,children:Object(j.jsx)(l.a,{icon:m.a})})]})},p=(n(441),function(t){var e=Object(a.useState)(""),n=Object(i.a)(e,2),s=n[0],o=n[1],c=Object(a.useState)(""),u=Object(i.a)(c,2),l=u[0],m=u[1],d=Object(a.useState)(""),b=Object(i.a)(d,2),p=b[0],h=b[1],O=Object(a.useState)("stop"),f=Object(i.a)(O,2),g=f[0],x=f[1],v=Object(a.useCallback)((function(e){e.preventDefault(),x("stop"),t.onSave(s,l,p,g)}),[s,l,p,g,t]);return Object(j.jsxs)("form",{className:"sound-item-form",onSubmit:v,children:[Object(j.jsxs)("div",{className:"form-item",children:[Object(j.jsx)("label",{className:"form-label",htmlFor:"author",children:"Author"}),Object(j.jsx)("input",{className:"form-control",type:"text",name:"author",id:"author",onChange:function(t){return o(t.target.value)}})]}),Object(j.jsxs)("div",{className:"form-item",children:[Object(j.jsx)("label",{className:"form-label",htmlFor:"song",children:"Song"}),Object(j.jsx)("input",{className:"form-control",type:"text",name:"song",id:"song",onChange:function(t){return m(t.target.value)}})]}),Object(j.jsxs)("div",{className:"form-item",children:[Object(j.jsx)("label",{className:"form-label",htmlFor:"mp3",children:"Mp3"}),Object(j.jsx)("input",{className:"form-control",type:"text",name:"mp3",id:"mp3",onChange:function(t){return h(t.target.value)}})]}),Object(j.jsx)("div",{className:"centered",children:Object(j.jsx)(r.a,{type:"submit",variant:"outline-info mb-2",children:"Add \ud83c\udfb6"})})]})});n(442);var h=function(){var t=Object(a.useState)(!1),e=Object(i.a)(t,2),n=e[0],s=e[1],o=Object(a.useState)([{id:"todo-0001",author:"Led Zeppelin",song:"Stairway To Heaven",mp3:"../mp3/audio1.mp3",status:"stop"},{id:"todo-0002",author:"Queen",song:"Bohemian Rhapsody",mp3:"../mp3/audio2.mp3",status:"stop"},{id:"todo-0003",author:"Lynyrd Skynyrd",song:"Free Bird",mp3:"../mp3/audio3.mp3",status:"stop"},{id:"todo-0004",author:"Deep Purple",song:"Smoke on the Water",mp3:"../mp3/audio4.mp3",status:"stop"},{id:"todo-0005",author:"Jimi Hendrix",song:"All Along The Watchtower",mp3:"../mp3/audio5.mp3",status:"stop"},{id:"todo-0006",author:"AC/DC",song:"Back In Black",mp3:"../mp3/audio6.mp3",status:"stop"},{id:"todo-0007",author:"Queen",song:"We Will Rock You ",mp3:"../mp3/audio7.mp3",status:"stop"},{id:"todo-0008",author:"Metallica",song:"Enter Sandman",mp3:"../mp3/audio8.mp3",status:"stop"}]),c=Object(i.a)(o,2),d=c[0],h=c[1],O=Object(a.useCallback)((function(t,e,n,a,s){h((function(o){return o.map((function(o){return o.status="stop",o.id===t?{id:t,author:e,song:n,mp3:a,status:(c=s,"stop"===c?"play":"stop")}:o;var c}))}))}),[]),f=Object(a.useCallback)((function(){s(!n)}),[]);console.log(!n);var g=Object(a.useCallback)((function(t,e,n,a){h((function(s){return s.concat([{id:"todo-".concat(Math.random().toString(36).substr(2,9)),author:t,song:e,mp3:n,status:a}])})),s(!1)}),[]),x=Object(a.useCallback)((function(t){h((function(e){return e.filter((function(e){return e.id!==t}))}))}),[]);return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(u.a,{bg:"info",children:Object(j.jsxs)(u.a.Brand,{className:"text-light",href:"#home",children:[Object(j.jsx)(l.a,{icon:m.b,className:"logo-icon mr-3"}),"Audio list"]})}),d.map((function(t){return Object(j.jsx)(b,{id:t.id,author:t.author,song:t.song,mp3:t.mp3,status:t.status,onChange:O,onDelete:x},t.id)})),Object(j.jsx)("div",{className:"centered",children:Object(j.jsx)(r.a,{variant:"outline-info mb-2",onClick:f,children:"New \ud83c\udfb6"})}),n?Object(j.jsx)(p,{onSave:g}):null,Object(j.jsx)(u.a,{bg:"info",children:Object(j.jsxs)(u.a.Brand,{className:"text-light",href:"#home",children:[Object(j.jsx)(l.a,{icon:m.b,className:"logo-icon mr-3"}),"Audio list"]})})]})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,445)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,o=e.getLCP,c=e.getTTFB;n(t),a(t),s(t),o(t),c(t)}))};c.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root")),O()}},[[443,1,2]]]);
//# sourceMappingURL=main.6e9333cd.chunk.js.map