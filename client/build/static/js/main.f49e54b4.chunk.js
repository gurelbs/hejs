(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{197:function(e,t,n){},204:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(13),i=n.n(r),s=n(8),o=n(9),l=n(21),u=n(4),j=(n(137),n(240)),d=n(230),b=(n(81),n(228),n(19)),h=n(2);var p=n(231),O=n(232),f=n(68),x=n(233),m=n(117),g=n.n(m),v=Object(d.a)((function(e){return{root:{display:"flex"},appBar:{backgroundColor:"rgb(40, 44, 52)",transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(k,"px)"),marginLeft:k,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},title:{flexGrow:1}}})),k=240;function S(e){var t=e.handleDrawerOpen,n=e.open,a=v();return Object(h.jsx)(p.a,{position:"fixed",className:Object(u.a)(a.appBar,Object(s.a)({},a.appBarShift,n)),children:Object(h.jsxs)(O.a,{children:[Object(h.jsx)(f.a,{variant:"h6",noWrap:!0,className:a.title,children:Object(h.jsx)(b.b,{style:{textDecoration:"none"},to:"/",children:Object(h.jsx)("code",{className:"text-light",children:"HeJS"})})}),Object(h.jsx)(x.a,{color:"inherit","aria-label":"open drawer",edge:"end",onClick:t,className:Object(u.a)(n&&a.hide),children:Object(h.jsx)(g.a,{})})]})})}var w=n(242),y=n(234),N=n(235),C=n(236),T=n(237),E=n(238),q=n(38),B=n(118),I=n.n(B),L=n(119),D=n.n(L),H=n(120),R=n.n(H),F=n(121),G=n.n(F),J=240,P=Object(d.a)((function(e){return{root:{display:"flex"},appBar:{backgroundColor:"rgb(40, 44, 52)",transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(J,"px)"),marginLeft:J,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:J,flexShrink:0},drawerPaper:{width:J},drawerHeader:Object(l.a)(Object(l.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),link:{textDecoration:"none",color:"#222"}}}));function U(e){var t=e.handleDrawerClose,n=e.open,a=P(),c=Object(q.a)();return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(w.a,{className:a.drawer,variant:"persistent",anchor:"left",open:n,classes:{paper:a.drawerPaper},children:[Object(h.jsx)("div",{className:a.drawerHeader,children:Object(h.jsx)(x.a,{onClick:t,children:"rtl"===c.direction?Object(h.jsx)(I.a,{}):Object(h.jsx)(D.a,{})})}),Object(h.jsx)(y.a,{}),Object(h.jsx)(N.a,{children:[{name:"Docs",link:"/docs"},{name:"API",link:"/api"}].map((function(e,t){return Object(h.jsx)(b.b,{className:a.link,to:e.link,children:Object(h.jsxs)(C.a,{button:!0,className:a.icon,children:[Object(h.jsx)(T.a,{children:t%2===0?Object(h.jsx)(R.a,{}):Object(h.jsx)(G.a,{})}),Object(h.jsx)(E.a,{primary:e.name})]},e.name)},t)}))})]})})}function z(){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"Not Found"})})}function A(){return Object(h.jsx)("div",{className:"container-fluid",children:Object(h.jsx)("h1",{className:"text-light display-1",children:"Getting Started"})})}var M=n(3),W=n(32),K=n.n(W),Q=n(56),V=n(36),X=n.n(V);n(93);function Y(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([]),i=Object(o.a)(r,2),s=i[0],l=i[1],u=Object(a.useState)(""),j=Object(o.a)(u,2),d=j[0],b=j[1],p=Object(a.useState)("en"),O=Object(o.a)(p,2),f=O[0],x=O[1],m=Object(a.useState)({}),g=Object(o.a)(m,2),v=g[0],k=g[1],S=X.a.CancelToken.source();function w(){return(w=Object(Q.a)(K.a.mark((function e(){var t,n;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.a.get("http://localhost:4000/api/languages");case 2:t=e.sent,n=t.data,l(n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=Object(Q.a)(K.a.mark((function e(){var t,n,a,r,i;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c(!0),n=null!==(t=s.find((function(e){return e.name===f})))&&void 0!==t?t:f,e.next=5,X.a.get("http://localhost:4000/api/translate?q=".concat(d,"&to=").concat(n),{cancelToken:S.token});case 5:a=e.sent,(r=a.data).translate&&(i=new SpeechSynthesisUtterance(r.translate),speechSynthesis.speak(i)),k(r),c(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),X.a.isCancel(e.t0)?console.log("Request canceled",e.t0.message):console.log(e.t0.name,e.t0.message),c(!1);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){return function(){return w.apply(this,arguments)}()}),[]),Object(h.jsxs)("div",{className:"translate-container bg-dark container-fluid text-center",children:[Object(h.jsx)("h2",{className:"my-5",children:"\u05ea\u05e8\u05d2\u05d5\u05dd \u05d7\u05d5\u05e4\u05e9\u05d9"}),Object(h.jsxs)("code",{className:"bg-light text-center rounded px-2 py-1",children:["https://hejs.cf/api/translate?q=",d]}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{name:"q",id:"q",autoFocus:!0,value:d,onChange:function(e){return b(e.target.value)},placeholder:"\u05de\u05e9\u05e4\u05d8 \u05dc\u05ea\u05e8\u05d2\u05d5\u05dd"}),Object(h.jsx)("br",{}),"\u05ea\u05e8\u05d2\u05dd \u05dc:",Object(h.jsx)("select",{value:f,onChange:function(e){return x(e.target.value)},children:s&&s.map((function(e,t){return Object(h.jsx)("option",{value:e.code,children:e.name},t)}))}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{disabled:n,onClick:function(){return y.apply(this,arguments)},children:"\u05ea\u05e8\u05d2\u05dd"}),v&&v.translate?v.translate:"",Object(h.jsx)("ol",{children:v.alternative&&v.alternative.map((function(e,t){return Object(h.jsx)("li",{children:e},t)}))}),n?Object(h.jsx)("div",{className:"spinner"}):"",!v.alternative&&v.translate?"\u05dc\u05d0 \u05e0\u05de\u05e6\u05d0\u05d5 \u05ea\u05e8\u05d2\u05d5\u05de\u05d9\u05dd":""]})}var Z=n(67);function $(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),i=Object(o.a)(r,2),s=i[0],l=i[1],u=Object(a.useState)(),j=Object(o.a)(u,2),d=j[0],b=j[1],p=Object(a.useState)(),O=Object(o.a)(p,2),f=O[0],x=O[1],m=X.a.CancelToken.source(),g="https://hejs.cf";function v(){return(v=Object(Q.a)(K.a.mark((function e(){var t,n,a;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c(!0),e.next=4,X.a.get("http://localhost:4000/api/nakdan?q=".concat(s),{cancelToken:m.token});case 4:t=e.sent,n=t.data,console.log(n),n&&(a=new SpeechSynthesisUtterance(n.translate),speechSynthesis.speak(a)),b(n),c(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),X.a.isCancel(e.t0)?console.log("Request canceled",e.t0.message):console.log(e.t0.name,e.t0.message),c(!1);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){var e=Object(Z.io)(g);return x(e),function(){return e.disconnect()}}),[g]),Object(a.useEffect)((function(){f&&f.on("nakdan",(function(e){return console.log(e)}))}),[f]),Object(h.jsxs)("div",{className:"translate-container bg-dark container-fluid text-center",children:[Object(h.jsx)("h2",{className:"my-5",children:"\u05e0\u05e7\u05d3\u05df \u05d0\u05d5\u05d8\u05d5\u05de\u05d8\u05d9"}),Object(h.jsxs)("code",{className:"bg-light text-center text-dark rounded px-2 py-1",children:["https://hejs.cf/api/nakdan?q=",s]}),Object(h.jsx)("br",{}),Object(h.jsx)("textarea",{cols:"30",rows:"3",name:"q",id:"q",autoFocus:!0,value:s,onChange:function(e){return l(e.target.value)},placeholder:"\u05de\u05e9\u05e4\u05d8 \u05dc\u05ea\u05e8\u05d2\u05d5\u05dd"}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{disabled:n,onClick:function(){return v.apply(this,arguments)},children:"\u05e0\u05e7\u05d3"}),d&&"string"===typeof d&&d]})}var _=n(243),ee=n(239),te=n(241),ne=["children","value","index"];function ae(e){var t=e.children,n=e.value,a=e.index,c=Object(M.a)(e,ne);return Object(h.jsx)("div",Object(l.a)(Object(l.a)({role:"tabpanel",hidden:n!==a,id:"simple-tabpanel-".concat(a),"aria-labelledby":"simple-tab-".concat(a)},c),{},{children:n===a&&Object(h.jsx)(te.a,{p:0,children:Object(h.jsx)(h.Fragment,{children:t})})}))}function ce(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var re=Object(d.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper}}}));function ie(){var e=re(),t=Object(a.useState)(0),n=Object(o.a)(t,2),c=n[0],r=n[1];return Object(h.jsxs)("div",{className:e.root,children:[Object(h.jsx)(p.a,{position:"static",className:"bg-dark",children:Object(h.jsxs)(_.a,{value:c,onChange:function(e,t){r(t)},"aria-label":"simple tabs example",children:[Object(h.jsx)(ee.a,Object(l.a)({label:"\u05ea\u05e8\u05d2\u05d5\u05dd"},ce(0))),Object(h.jsx)(ee.a,Object(l.a)({label:"\u05e0\u05e7\u05d3\u05df"},ce(1))),Object(h.jsx)(ee.a,Object(l.a)({label:"Item Three"},ce(2)))]})}),Object(h.jsx)(ae,{value:c,index:0,children:Object(h.jsx)(Y,{})}),Object(h.jsx)(ae,{value:c,index:1,children:Object(h.jsx)($,{})}),Object(h.jsx)(ae,{value:c,index:2,children:"Item Three"})]})}var se=n(12),oe=n(57),le=n.n(oe),ue=n(122),je=n.n(ue),de=(n(196),n(197),[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:["right"]}],["clean"]]);function be(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=(t[0],t[1],Object(a.useState)()),c=Object(o.a)(n,2),r=c[0],i=c[1],s=Object(a.useState)(),l=Object(o.a)(s,2),u=l[0],j=l[1],d=Object(a.useState)(""),b=Object(o.a)(d,2),p=b[0],O=b[1],f=Object(se.f)().id,x=[{command:"\u05db\u05ea\u05d9\u05d1\u05d4",callback:function(e){return O("\u05db\u05ea\u05d9\u05d1\u05d4")}},{command:"\u05e2\u05e8\u05d9\u05db\u05d4",callback:function(e){return O("\u05e2\u05e8\u05d9\u05db\u05d4")}},{command:"\u05e2\u05d1\u05d5\u05e8 \u05e9\u05d5\u05e8\u05d4",callback:function(){return function(){if(!u||!r)return;"\u05e2\u05e8\u05d9\u05db\u05d4"===p&&(console.log("\u05de\u05e6\u05d1 \u05e2\u05e8\u05d9\u05db\u05d4 \u05e4\u05e2\u05d9\u05dc"),w(),u.insertText(u.getLength(),"\n"),u.focus())}()}},{command:"\u05de\u05d7\u05d9\u05e7\u05ea \u05d4\u05db\u05dc",callback:function(){return function(){if(!u||!r)return;w(),u.setText("")}()}}],m=Object(oe.useSpeechRecognition)({commands:x}),g=m.transcript,v=m.interimTranscript,k=m.finalTranscript,S=m.listening,w=m.resetTranscript,y=(m.browserSupportsSpeechRecognition,{start:function(){return le.a.startListening({language:"he",continuous:!0,interimResults:!0})},stop:function(){return le.a.stopListening()},abort:function(){return le.a.abortListening()}});Object(a.useEffect)((function(){var e=Object(Z.io)("https://hejs.cf");return i(e),function(){return e.disconnect()}}),[]),Object(a.useEffect)((function(){if(u&&r){var e=function(e){return u.updateContents(e)};return r.on("receive-chenges",e),function(){return r.off("receive-change",e)}}}),[u,r]),Object(a.useEffect)((function(){if(u&&r){var e=function(e,t,n){"user"===n&&r.emit("send-chenges",e)};return u.on("text-change",e),function(){return u.off("text-change",e)}}}),[u,r]),Object(a.useEffect)((function(){u&&r&&(r.once("load-document",(function(e){u.setContents(e),u.enable()})),r.emit("get-document",f))}),[u,r,f]),Object(a.useEffect)((function(){if(u&&r){var e=setInterval((function(){r.emit("save-document",u.getContents())}),2e3);return function(){return clearInterval(e)}}}),[r,u]);var N=Object(a.useCallback)((function(e){if(e){e.innerHTML="";var t=document.createElement("div");t.classList.add("editor-container"),e.append(t);var n=new je.a(t,{theme:"snow",modules:{toolbar:de}});n.disable(),n.setText("\u05d8\u05d5\u05e2\u05df..."),j(n)}}),[]);return Object(a.useEffect)((function(){u&&r&&u.focus()}),[u]),Object(a.useEffect)((function(){["\u05e2\u05e8\u05d9\u05db\u05d4","\u05db\u05ea\u05d9\u05d1\u05d4","\u05e9\u05d5\u05e8\u05d4 \u05d7\u05d3\u05e9\u05d4"].some((function(e){return k.includes(e)||g.includes(e)}))&&w()}),[k,g]),Object(a.useEffect)((function(){if(u&&r&&k){var e=u.getLength()-1;u.insertText(e,"".concat(k," ").trimStart()),w()}}),[u,p,k]),Object(a.useEffect)((function(){k&&(console.log({transcript:g,finalTranscript:k}),w())}),[g,k]),Object(a.useEffect)((function(){v&&console.log({interimTranscript:v})}),[v]),Object(h.jsxs)("div",{className:"text-center bg-light text-dark",children:[Object(h.jsxs)("div",{className:"reco-btn",children:[Object(h.jsxs)("p",{children:["\u05de\u05e6\u05d1 \u05e0\u05d5\u05db\u05d7\u05d9: ",p]}),Object(h.jsxs)("button",{onClick:S?y.abort:y.start,children:[S?"\u05d4\u05e4\u05e1\u05e7\u05ea":"\u05d4\u05ea\u05d7\u05dc\u05ea"," \u05ea\u05de\u05dc\u05d5\u05dc \u05e7\u05d5\u05dc\u05d9"]})]}),Object(h.jsx)("div",{id:"container",ref:N})]})}var he=n(123);function pe(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"\u05de\u05e2\u05d1\u05d3 \u05ea\u05de\u05dc\u05d9\u05dc\u05d9\u05dd \u05e7\u05d5\u05dc\u05d9 \u05d1\u05e2\u05d1\u05e8\u05d9\u05ea"}),Object(h.jsx)(b.b,{to:function(e){return"".concat(e.pathname,"/").concat(Object(he.generate)())},children:"\u05d9\u05e6\u05d9\u05e8\u05ea \u05de\u05e1\u05de\u05da \u05d7\u05d3\u05e9"})]})}var Oe=n(245),fe=n(244),xe=Object(d.a)((function(e){return{content:{flexGrow:1,padding:0,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},drawerHeader:Object(l.a)(Object(l.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),mainSection:{minHeight:"calc(100vh - 64px)",alignItems:"center",scroll:"auto"}}}));function me(){var e=xe(),t=c.a.useState(!1),n=Object(o.a)(t,2),a=n[0],r=n[1],i=[{path:"/",component:ie},{path:"/docs",component:A},{path:"/playground",component:ie},{path:"/editor",component:pe},{path:"/editor/:id",component:be}];return Object(h.jsx)(b.a,{children:Object(h.jsxs)("div",{className:e.root,children:[Object(h.jsx)(j.a,{}),Object(h.jsx)(S,{handleDrawerOpen:function(){r(!0)},open:a}),Object(h.jsx)("div",{className:e.drawerHeader}),Object(h.jsx)(se.a,{render:function(t){var n=t.location;return Object(h.jsx)("main",{className:Object(u.a)(e.content,Object(s.a)({},e.contentShift,a)),children:Object(h.jsx)(Oe.a,{children:Object(h.jsx)(fe.a,{timeout:300,classNames:"page",children:Object(h.jsx)("section",{className:"".concat(e.mainSection," mainSection "),children:Object(h.jsxs)(se.c,{location:n,children:[i.map((function(e){var t=e.path,n=e.component;return Object(h.jsx)(se.a,{path:t,component:n,exact:!0},t)})),Object(h.jsx)(se.a,{component:z})]})})},n.key)})})}}),Object(h.jsx)(U,{handleDrawerClose:function(){r(!1)},open:a})]})})}n(202);i.a.render(Object(h.jsx)(me,{}),document.getElementById("root"))},81:function(e,t,n){},93:function(e,t,n){}},[[204,1,2]]]);
//# sourceMappingURL=main.f49e54b4.chunk.js.map