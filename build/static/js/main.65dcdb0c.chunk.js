(this.webpackJsonptypescripttuto=this.webpackJsonptypescripttuto||[]).push([[0],{155:function(e,t,n){},156:function(e,t,n){},321:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(24),i=n.n(a),o=(n(155),n(156),n(53)),s=n(45),j=n(105),u=n(18),l=function(){return{name:"Jorge",privileges:"professor"}},d={backgroundColor:"#E1E2E3",color:"#585858"},b={backgroundColor:"#D6D6D6",color:"#585858"},O=function(){var e;return"Light"===(null!==(e=localStorage.getItem("theme"))&&void 0!==e?e:"Light")?d:b},h=Object(c.createContext)(l()),f=Object(c.createContext)(O()),x=Object(c.createContext)({visibleDrawer:!1,setVisibleDrawer:Object()}),p=n(44),g=n.n(p),m=n(330),v=n(332),y=n(148),C=n(329),D=n(6),S=function(e){var t=e.children,n=Object(c.useContext)(x),r=n.visibleDrawer,a=n.setVisibleDrawer,i=Object(c.useState)(!1),o=Object(s.a)(i,2),j=o[0],u=o[1];Object(c.useEffect)((function(){u(r)}),[r]);return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)(C.a,{title:"Basic drawer",visible:j,onClose:function(){a(!1)},children:t})})},k=n(326),w=n(333),F=n(334),E=n(145),L=n.n(E),z=function(e){var t=e.path,n=Object(u.g)(),r=Object(c.useState)("/calendar"),a=Object(s.a)(r,2),i=a[0],o=a[1];return Object(c.useEffect)((function(){o(t)}),[t]),Object(D.jsxs)(m.a,{align:"middle",justify:"space-between",style:{padding:5},children:[Object(D.jsx)(w.a,{style:{fontSize:35,color:"#1890FF"},onClick:function(){return n.push("/")}}),Object(D.jsx)(k.a,{triggerSubMenuAction:"click",expandIcon:Object(D.jsx)(F.a,{style:{color:"666666",fontSize:25}}),selectedKeys:[i],mode:"vertical",children:Object(D.jsx)(L.a,{popupOffset:[-50,50],children:U().map((function(e){return e.name&&Object(D.jsx)(k.a.Item,{onClick:function(e){return function(e){console.log(e),n.push(e)}(e.key)},children:e.name},e.path)}))},"submenu")})]})},T=n(331),I=function(){return Object(D.jsxs)(T.b,{align:"center",size:"middle",children:[Object(D.jsx)(w.a,{style:{fontSize:45,color:"#1890FF"}}),Object(D.jsx)(g.a,{strong:!0,style:{fontSize:30,color:"grey"},children:"D & D Calendar"})]})},P=n(325),B=n(328),R=function(){return Object(D.jsx)(B.a,{type:"primary",danger:!0,size:"large",style:{marginLeft:30},children:"Salir"})},V=P.a.TabPane,J=function(e){var t=e.handleOnClick,n=e.activeTab;return Object(D.jsx)(P.a,{activeKey:n,style:{paddingLeft:20},size:"large",onTabClick:function(e,n){return t(e)},tabBarExtraContent:Object(D.jsx)(R,{}),children:U().map((function(e){return e.name&&Object(D.jsx)(V,{tab:e.name},e.path)}))})},M=function(e){var t=e.path,n=Object(u.g)(),r=Object(c.useState)("/calendar"),a=Object(s.a)(r,2),i=a[0],o=a[1],j=function(e){n.push(e)};return Object(c.useEffect)((function(){o(t)}),[t]),Object(D.jsxs)(m.a,{align:"middle",justify:"space-between",style:{paddingLeft:20,paddingRight:20},children:[Object(D.jsx)("div",{id:"mainLogo",onClick:function(){return j("/")},style:{cursor:"pointer"},children:Object(D.jsx)(I,{})}),Object(D.jsx)(J,{activeTab:i,handleOnClick:j})]})},K=n(335),q=function(){var e=Object(c.useContext)(x).setVisibleDrawer;return Object(D.jsx)("div",{style:{paddingTop:10,paddingBottom:10,backgroundColor:"#D6D6D6",height:"100vh",borderLeft:"2px solid #1890FF"},children:Object(D.jsx)("div",{style:{display:"grid"},children:Object(D.jsx)(K.a,{onClick:function(){e(!0)},style:{fontSize:30,color:"purple"}})})})},A=function(e){var t=e.children,n=(e.user,e.theme),c=e.path,r=Object(y.useMediaQuery)({query:"(max-width: 800px)"});return Object(D.jsxs)(D.Fragment,{children:[r?Object(D.jsx)(z,{path:c}):Object(D.jsx)(M,{path:c}),Object(D.jsxs)(m.a,{children:[Object(D.jsx)(v.a,{flex:50,children:Object(D.jsx)("div",{style:Object(o.a)(Object(o.a)({},n),{},{height:"100vh"}),children:t})}),Object(D.jsx)(v.a,{flex:"auto",children:Object(D.jsx)(q,{})})]}),Object(D.jsx)(S,{})]})},H={index:{path:"/",exact:!0,layout:A,component:function(){return Object(D.jsx)(u.a,{to:"/scheduler"})}},scheduler:{name:"Horario",path:"/scheduler",layout:A,component:function(){return Object(D.jsx)(g.a,{children:"Scheduler"})}},calendar:{name:"Calendario",path:"/calendar",layout:A,component:function(){return Object(D.jsx)(g.a,{children:"Calendar"})}},data:{name:"Datos",path:"/data",layout:A,component:function(){return Object(D.jsx)(g.a,{children:"Data"})}},error:{path:"",layout:function(){return Object(D.jsx)("div",{})},component:function(){return Object(D.jsx)("div",{style:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(D.jsx)(g.a,{type:"danger",strong:!0,children:"ERROR"})})}}},Q=function(){return[H.index,H.scheduler,H.calendar,H.data,H.error]},G=function(){return[H.index,H.scheduler,H.calendar,H.data,H.error]},N=function(){return[H.index,H.error]},U=function(e){if(e)switch(e.privileges){case"coordinator":return N();case"professor":return G()}return Q()},W=function(){var e=Object(c.useState)(l()),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(O()),i=Object(s.a)(a,2),d=i[0],b=i[1],p=Object(c.useState)(!1),g=Object(s.a)(p,2),m=g[0],v=g[1];return Object(c.useEffect)((function(){r(l()),b(O())}),[]),Object(D.jsx)(h.Provider,{value:n,children:Object(D.jsx)(f.Provider,{value:d,children:Object(D.jsx)(x.Provider,{value:{visibleDrawer:m,setVisibleDrawer:v},children:Object(D.jsx)(j.a,{children:Object(D.jsx)(u.d,{children:U(n).map((function(e,t){return Object(D.jsx)(u.b,{exact:e.exact,path:e.path,component:function(t){return Object(D.jsx)(e.layout,Object(o.a)(Object(o.a)({},t),{},{theme:d,path:e.path,children:Object(D.jsx)(e.component,Object(o.a)(Object(o.a)({},t),{},{user:n,theme:d}))}))}},t)}))})})})})})};var X=function(){return Object(D.jsx)(W,{})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,336)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(D.jsx)(r.a.StrictMode,{children:Object(D.jsx)(X,{})}),document.getElementById("root")),Y()}},[[321,1,2]]]);
//# sourceMappingURL=main.65dcdb0c.chunk.js.map