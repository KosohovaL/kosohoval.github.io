(this.webpackJsonpplaylist=this.webpackJsonpplaylist||[]).push([[0],{62:function(e,t,c){},72:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},80:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(25),l=c.n(s),i=(c(61),c(62),c(46)),r=c(9),o=c(12),u=c(51),j=(c(63),c(65),c(81),u.a.initializeApp({apiKey:"AIzaSyCRw_UlgWdCdZD0OpRewTly3XWR0hEhwpk",authDomain:"playlistreact.firebaseapp.com",databaseURL:"https://playlistreact-default-rtdb.europe-west1.firebasedatabase.app",projectId:"playlistreact",storageBucket:"playlistreact.appspot.com",messagingSenderId:"954697040092",appId:"1:954697040092:web:bbb5b38d78f683e0b73419",measurementId:"G-LBWKFBZJFQ"})),d=c(15),b=c(54),m=c(31),h=c(13),O=c(14),x=(c(72),c(2)),f=j.storage().ref();var p=function(e){var t=Object(a.useRef)(),c=Object(a.useRef)(),n=Object(a.useCallback)((function(){e.onChange(e.id,e.author,e.song,e.mp3,e.status);var c=Object(b.a)(document.querySelectorAll("audio"));c.map((function(e){return e.pause()})),"stop"===e.status?(c.map((function(e){return e.pause()})),t.current.play()):t.current.pause()}),[e]),s=Object(a.useCallback)((function(){e.onChange(e.id,e.author,e.song,e.mp3,"play"),t.current.pause(),t.current.currentTime=0}),[e]),l=Object(a.useCallback)((function(){f.child("".concat(j.auth().currentUser.uid,"/")+e.mp3).delete().then((function(){console.log("Deleted successfully!")})).catch((function(e){console.log(e)})),j.database().ref("playlist").child(e.id).remove(),e.onDelete(e.id)}),[e]),i=Object(a.useState)(e.mp3),r=Object(o.a)(i,2),u=r[0],p=r[1];Object(a.useEffect)((function(){f.child("".concat(j.auth().currentUser.uid,"/")+e.mp3).getDownloadURL().then((function(e){p(e)}),[])}));var v=Object(a.useState)(!1),g=Object(o.a)(v,2),N=g[0],y=g[1],w=function(){return y(!1)};return Object(x.jsx)("div",{className:"row",children:Object(x.jsxs)("div",{className:"song-item is-".concat(e.status),children:[Object(x.jsx)("div",{className:"col-1   text-left",children:Object(x.jsx)("div",{className:"status",children:"stop"===e.status?Object(x.jsx)(h.a,{icon:O.d}):Object(x.jsx)(h.a,{icon:O.e})})}),Object(x.jsxs)("div",{className:"col-5 text-left",children:[Object(x.jsx)("audio",{ref:t,src:u,id:e.id,volume:"0.1"}),Object(x.jsxs)("div",{className:"song-item-name",children:[Object(x.jsx)("span",{className:"song-author",children:e.author}),Object(x.jsx)("br",{}),Object(x.jsx)("span",{className:"song-title",children:e.song})]})]}),Object(x.jsx)("div",{className:"col-2 text-left",children:Object(x.jsx)("button",{className:"sound-btn",onClick:n,children:"stop"===e.status?Object(x.jsx)(h.a,{icon:O.e}):Object(x.jsx)(h.a,{icon:O.d})})}),Object(x.jsx)("div",{className:"col-2 text-left",children:"play"===e.status?Object(x.jsx)("button",{ref:c,className:"sound-btn",id:"stop",onClick:s,children:Object(x.jsx)(h.a,{icon:O.h})}):null}),Object(x.jsx)("div",{className:"col-2 text-left",children:Object(x.jsx)("button",{className:"sound-btn",onClick:function(){return y(!0)},children:Object(x.jsx)(h.a,{icon:O.b})})}),Object(x.jsx)("div",{children:Object(x.jsxs)(m.a,{size:"lg",animation:!1,"aria-labelledby":"contained-modal-title-vcenter",centered:!0,show:N,onHide:w,className:"my-modal",children:[Object(x.jsx)(m.a.Header,{closeButton:!0,className:"my-modal-header",children:Object(x.jsx)(m.a.Title,{id:"contained-modal-title-vcenter",children:"Delete music track"})}),Object(x.jsx)(m.a.Body,{children:Object(x.jsxs)("h5",{children:["You really want to delete the track: ",e.author," ",e.song,"?"]})}),Object(x.jsxs)(m.a.Footer,{children:[Object(x.jsx)(d.a,{variant:"info",onClick:l,children:"Delete"}),Object(x.jsx)(d.a,{variant:"outline-info",onClick:w,children:"Cancel"})]})]})})]})})},v=c(56),g=(c(75),j.storage().ref()),N=function(e){var t=Object(a.useState)(""),c=Object(o.a)(t,2),n=c[0],s=c[1],l=Object(a.useState)(""),i=Object(o.a)(l,2),r=i[0],u=i[1],b=Object(a.useState)(""),m=Object(o.a)(b,2),h=m[0],O=m[1],f=Object(a.useState)("stop"),p=Object(o.a)(f,2),N=p[0],y=p[1],w=Object(a.useState)(0),C=Object(o.a)(w,2),k=C[0],S=C[1],F=Object(a.useCallback)((function(t){t.preventDefault(),y("stop");var c=document.querySelector('input[type="file"]').files[0],a=g.child("".concat(j.auth().currentUser.uid)).child(c.name);a.put(c).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;t<=100&&S(Math.round(t))})),a.put(c).then((function(){console.log("Uploaded a file"),e.onSave(n,r,h,N)}))}),[n,r,h,N,e]);return Object(x.jsx)("div",{children:Object(x.jsxs)("form",{className:"sound-item-form",onSubmit:F,children:[Object(x.jsxs)("div",{className:"row mt-2",children:[Object(x.jsx)("div",{className:"col-3   text-left",children:Object(x.jsx)("label",{className:"form-label",htmlFor:"author",children:"Author"})}),Object(x.jsx)("div",{className:"col-9   text-right",children:Object(x.jsx)("input",{className:"form-control my-input",type:"text",name:"author",id:"author",required:!0,onChange:function(e){return s(e.target.value)}})})]}),Object(x.jsxs)("div",{className:"row mt-2",children:[Object(x.jsx)("div",{className:"col-3   text-left",children:Object(x.jsx)("label",{className:"form-label",htmlFor:"song",children:"Song"})}),Object(x.jsx)("div",{className:"col-9   text-right",children:Object(x.jsx)("input",{className:"form-control my-input",type:"text",name:"song",id:"song",required:!0,onChange:function(e){return u(e.target.value)}})})]}),Object(x.jsxs)("div",{className:"row mt-2",children:[Object(x.jsx)("div",{className:"col-3 text-left",children:Object(x.jsx)("label",{className:"form-label",htmlFor:"mp3",children:"Mp3"})}),Object(x.jsx)("div",{className:"col-9 text-right",children:Object(x.jsx)("input",{className:"form-control-file",type:"file",name:"mp3",id:"mp3",accept:"audio/*",required:!0,onChange:function(e){return O(e.target.files[0].name)}})})]}),Object(x.jsxs)("div",{className:"row mt-2",children:[Object(x.jsx)("div",{className:"col-3 text-left",children:Object(x.jsx)("label",{className:"form-label",htmlFor:"progress"})}),Object(x.jsx)("div",{className:"col-5 text-right",children:Object(x.jsx)(v.a,{striped:!0,variant:"info",now:k,label:"".concat(k,"%"),name:"progress"})})]}),Object(x.jsxs)("div",{className:"text-center",children:[Object(x.jsx)(d.a,{type:"submit",variant:"outline-info mb-2 mt-3",children:"Add \ud83c\udfb6"}),Object(x.jsx)(d.a,{type:"button",variant:"outline-info mb-2 mt-3 ml-2",onClick:function(){e.onVisible(!1)},children:"Cancel \ud83c\udfb6"})]})]})})};var y=function(e){var t=Object(a.useState)(!1),c=Object(o.a)(t,2),n=c[0],s=c[1],l=Object(a.useCallback)((function(t,c,a,n,s){e.onChange((function(e){return e.map((function(e){return e.status="stop",e.id===t?{id:t,author:c,song:a,mp3:n,status:(l=s,"stop"===l?"play":"stop")}:e;var l}))}))}),[e]),i=Object(a.useCallback)((function(){s(!0)}),[]),r=Object(a.useCallback)((function(t,c,a,n){fetch("https://playlistreact-default-rtdb.europe-west1.firebasedatabase.app/playlist.json",{method:"POST",body:JSON.stringify({author:t,song:c,mp3:a,status:"stop",user:j.auth().currentUser.uid})}).then((function(e){return e.json()})).then((function(s){e.onChange((function(e){return e.concat([{id:s.name,author:t,song:c,mp3:a,status:n}])}))})),s(!1)}),[e]),u=Object(a.useCallback)((function(t){e.onChange((function(e){return e.filter((function(e){return e.id!==t}))}))}),[e]),b=Object(a.useCallback)((function(e){s(e)}),[]);return Object(x.jsxs)("div",{className:"container-fluid",children:[e.list.map((function(e){return Object(x.jsx)(p,{id:e.id,author:e.author,song:e.song,mp3:e.mp3,status:e.status,onChange:l,onDelete:u},e.id)})),Object(x.jsx)("div",{className:"text-center",children:Object(x.jsx)(d.a,{variant:"outline-info mt-3 mb-3",onClick:i,children:"New \ud83c\udfb6"})}),n?Object(x.jsx)(N,{onSave:r,onVisible:b}):null]})},w=c(35);c(76);var C=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){fetch("https://playlistreact-default-rtdb.europe-west1.firebasedatabase.app/playlist.json").then((function(e){return e.json()})).then((function(e){n(function(e){return Object.keys(e).map((function(t){return{id:t,author:e[t].author,song:e[t].song,mp3:e[t].mp3,status:e[t].status,user:e[t].user}}))}(e).filter((function(e){return e.user===j.auth().currentUser.uid})))}))}),[]),Object(x.jsxs)("div",{className:"home",children:[Object(x.jsxs)(w.a,{bg:"info",className:"w-100 justify-content-between",children:[Object(x.jsxs)(w.a.Brand,{className:"text-light",href:"#home",children:[Object(x.jsx)(h.a,{icon:O.c,className:"logo-icon mr-3"}),"Playlist React"]}),Object(x.jsxs)(d.a,{variant:"outline-light",className:"btn-sign-out",onClick:function(){return j.auth().signOut()},children:["Sign out",Object(x.jsx)(h.a,{icon:O.g,className:"logo-icon ml-3"})]})]}),Object(x.jsx)(y,{list:c,onChange:n}),Object(x.jsx)(w.a,{bg:"info",className:"justify-content-end footer",children:Object(x.jsxs)(w.a.Brand,{className:"text-light",href:"#home",children:[Object(x.jsx)(h.a,{icon:O.a,className:"logo-icon mr-3"}),"2021"]})})]})},k=c(30),S=c.n(k),F=c(41),P=n.a.createContext(),U=function(e){var t=e.children,c=Object(a.useState)(null),n=Object(o.a)(c,2),s=n[0],l=n[1],i=Object(a.useState)(!0),r=Object(o.a)(i,2),u=r[0],d=r[1];return Object(a.useEffect)((function(){j.auth().onAuthStateChanged((function(e){l(e),d(!1)}))}),[]),u?Object(x.jsx)(x.Fragment,{children:"Loading..."}):Object(x.jsx)(P.Provider,{value:{currentUser:s},children:t})},D=Object(r.f)((function(e){var t=e.history,c=Object(a.useCallback)(function(){var e=Object(F.a)(S.a.mark((function e(c){var a,n,s;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),a=c.target.elements,n=a.email,s=a.password,e.prev=2,e.next=5,j.auth().signInWithEmailAndPassword(n.value,s.value);case 5:t.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(a.useContext)(P).currentUser?Object(x.jsx)(r.a,{to:"/"}):Object(x.jsxs)("div",{className:"login-form",children:[Object(x.jsx)("h1",{className:"text-info",children:"Playlist React"}),Object(x.jsx)("h2",{className:"text-info",children:"Log in"}),Object(x.jsxs)("form",{onSubmit:c,children:[Object(x.jsxs)("div",{className:"row mt-4",children:[Object(x.jsx)("div",{className:"col-2 text-left",children:Object(x.jsx)("label",{className:"text-info",htmlFor:"email",children:"Email"})}),Object(x.jsx)("div",{className:"col-10 text-right",children:Object(x.jsx)("input",{name:"email",type:"email",placeholder:"Email",className:"my-input"})})]}),Object(x.jsxs)("div",{className:"row mt-3",children:[Object(x.jsx)("div",{className:"col-2 text-left",children:Object(x.jsx)("label",{className:"text-info",htmlFor:"password",children:"Password "})}),Object(x.jsx)("div",{className:"col-10 text-right",children:Object(x.jsx)("input",{name:"password",type:"password",placeholder:"Password",className:"my-input"})})]}),Object(x.jsxs)(d.a,{variant:"outline-info mt-3 mr-5 mb-1",type:"submit",children:["Log in",Object(x.jsx)(h.a,{icon:O.f,className:"logo-icon ml-3"})]}),Object(x.jsxs)(d.a,{variant:"outline-info mt-3 mb-1",onClick:function(){t.push("/signup")},children:["Create user",Object(x.jsx)(h.a,{icon:O.i,className:"logo-icon ml-3"})]})]})]})})),E=Object(r.f)((function(e){var t=e.history,c=Object(a.useCallback)(function(){var e=Object(F.a)(S.a.mark((function e(c){var a,n,s;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),a=c.target.elements,n=a.email,s=a.password,e.prev=2,e.next=5,j.auth().createUserWithEmailAndPassword(n.value,s.value);case 5:t.push("/"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0),t.push("/login");case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(x.jsxs)("div",{className:"login-form",children:[Object(x.jsx)("h1",{className:"text-info",children:"Playlist React"}),Object(x.jsx)("h2",{className:"text-info",children:"Sign up"}),Object(x.jsxs)("form",{onSubmit:c,children:[Object(x.jsxs)("div",{className:"row mt-4",children:[Object(x.jsx)("div",{className:"col-2 text-left",children:Object(x.jsx)("label",{className:"text-info",htmlFor:"email",children:"Email"})}),Object(x.jsx)("div",{className:"col-10 text-right",children:Object(x.jsx)("input",{name:"email",type:"email",placeholder:"Email",className:"my-input"})})]}),Object(x.jsxs)("div",{className:"row mt-3",children:[Object(x.jsx)("div",{className:"col-2 text-left",children:Object(x.jsx)("label",{className:"text-info",htmlFor:"password",children:"Password "})}),Object(x.jsx)("div",{className:"col-10 text-right",children:Object(x.jsx)("input",{name:"password",type:"password",placeholder:"Password",className:"my-input"})})]}),Object(x.jsxs)(d.a,{variant:"outline-info mt-3 mb-1",type:"submit",children:["Create user",Object(x.jsx)(h.a,{icon:O.i,className:"logo-icon ml-3"})]})]})]})})),B=c(42),R=c(55),A=function(e){var t=e.component,c=Object(R.a)(e,["component"]),n=Object(a.useContext)(P).currentUser;return Object(x.jsx)(r.b,Object(B.a)(Object(B.a)({},c),{},{render:function(e){return n?Object(x.jsx)(t,Object(B.a)({},e)):Object(x.jsx)(r.a,{to:"/login"})}}))},I=function(){return Object(x.jsx)(U,{children:Object(x.jsx)(i.a,{children:Object(x.jsxs)("div",{children:[Object(x.jsx)(A,{exact:!0,path:"/",component:C}),Object(x.jsx)(r.b,{exact:!0,path:"/login",component:D}),Object(x.jsx)(r.b,{exact:!0,path:"/signup",component:E})]})})})},L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,83)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,l=t.getTTFB;c(e),a(e),n(e),s(e),l(e)}))};l.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(I,{})}),document.getElementById("root")),L()}},[[80,1,2]]]);
//# sourceMappingURL=main.006aaf11.chunk.js.map