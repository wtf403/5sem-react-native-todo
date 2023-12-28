(()=>{"use strict";var e={7970:(e,t,r)=>{r.r(t);var n=r(4178),l=r(4942),a=r(2982),o=r(885),i=r(5004),d=r(2812),u=r(9385),s=r(1054),c=r(6591),f=r(1601),h=r(5945),b=r(2629),p=d.default.create({fieldContainer:{marginBottom:16,gap:8},filedLabel:{fontSize:16,color:"gray",fontWeight:"bold"},requiredAsterisk:{color:"red"}});const y=function(e){var t=e.label,r=e.isRequired,n=e.children;return(0,b.jsxs)(u.default,{style:p.fieldContainer,children:[(0,b.jsxs)(s.default,{style:p.filedLabel,children:[t," ",r&&(0,b.jsx)(s.default,{style:p.requiredAsterisk,children:"*"})]}),n]})};var g=r(7438),j=r.n(g);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,l.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=d.default.create({button:{paddingHorizontal:16,backgroundColor:"#1247fc",paddingVertical:8,border:"1px solid #ccc",paddingVertical:8,textTransform:"none"},buttonText:{color:"white"}}),O=d.default.create({input:{width:"100%",height:40,borderColor:"#ccc",borderWidth:1,padding:8},inputText:{color:"gray"}}),w=d.default.create({modal:{borderWidth:1,backgroundColor:"white",margin:"auto",paddingHorizontal:32,paddingVertical:16,borderColor:"#ccc",width:200,width:"50%"},modalCloseBtn:{width:"20%"}}),k=d.default.create(x(x(x({durationModal:{backgroundColor:"red"},durationPicker:{backgroundColor:"blue",width:200,width:"100%",height:40},container:{flex:1,padding:16,maxWidth:800,marginHorizontal:"auto"},header:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",padding:16},h1:{fontSize:24,fontWeight:"bold"},subheader:{fontSize:18,color:"gray"},addTaskForm:{margin:16,gap:16},tasksList:{margin:16,border:"1px solid #ccc"},tasksListItem:{flexDirection:"row",justifyContent:"space-between",flexGrow:1,padding:16,marginBottom:4,borderBottom:"1px solid #ccc",backgroundColor:"lightgray"}},v),O),w));const S=function(){var e=(0,i.useState)([{name:"work",duration:"2h",type:"Work",date:"12.12.2021"}]),t=(0,o.default)(e,2),r=t[0],n=t[1],l=(0,i.useState)(null),d=(0,o.default)(l,2),p=d[0],g=d[1],m=(0,i.useState)(null),x=(0,o.default)(m,2),v=x[0],O=x[1],w=(0,i.useState)(null),S=(0,o.default)(w,2),C=S[0],P=S[1],T=(0,i.useState)(null),D=(0,o.default)(T,2),Y=D[0],M=D[1],H=(0,i.useState)(!1),L=(0,o.default)(H,2),W=(L[0],L[1]),q=(0,i.useState)(!1),z=(0,o.default)(q,2),B=(z[0],z[1]),F=(0,i.useState)("01.01.1999 00:00"),I=(0,o.default)(F,2),R=I[0],_=(I[1],(0,i.useState)(null)),A=(0,o.default)(_,2);A[0],A[1],(0,i.useCallback)((function(){O(j()(R).format("HH:mm")),W(!1)}),[R]),(0,i.useCallback)((function(){M(j()(Y).format("DD.MM.YYYY HH:mm")),B(!1)}),[Y]);return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(u.default,{style:k.container,children:[(0,b.jsxs)(u.default,{style:k.header,children:[(0,b.jsx)(s.default,{style:k.h1,children:"TODO List"}),(0,b.jsx)(s.default,{style:k.subheader,children:j()().format("DD.MM.YYYY")})]}),(0,b.jsxs)(u.default,{style:k.addTaskForm,children:[(0,b.jsx)(y,{label:"Task duration",isRequired:!0,children:(0,b.jsx)(f.default,{style:k.input,onPress:function(){return W(!0)},children:(0,b.jsx)(s.default,{style:k.inputText,children:v||"Set duration"})})}),(0,b.jsx)(y,{label:"Choose date",isRequired:!0,children:(0,b.jsx)(f.default,{style:k.input,onPress:function(){return B(!0)},children:(0,b.jsx)(s.default,{style:k.inputText,children:Y||"Choose date"})})}),(0,b.jsx)(y,{label:"Task name",isRequired:!0,children:(0,b.jsx)(c.default,{value:C,onChangeText:function(e){return P(e)},style:k.input,placeholder:"Your text here"})}),(0,b.jsx)(f.default,{style:k.button,onPress:function(){var e={type:p,duration:v,name:C,date:Y};console.log(e),n([].concat((0,a.default)(r),[e])),g(null),O(null),P(null),M(j()().format("DD.MM.YYYY"))},children:(0,b.jsx)(s.default,{style:k.buttonText,children:"Add task"})})]}),(0,b.jsx)(h.default,{data:r,style:k.tasksList,renderItem:function(e){var t,r,n,l,a=e.item;return(0,b.jsxs)(u.default,{style:k.tasksListItem,children:[(0,b.jsx)(s.default,{style:k.item,children:null!=(t=a.type)?t:"\u2013"}),(0,b.jsx)(s.default,{style:k.item,children:null!=(r=a.duration)?r:"\u2013"}),(0,b.jsx)(s.default,{style:k.item,children:null!=(n=a.name)?n:"\u2013"}),(0,b.jsx)(s.default,{style:k.item,children:null!=(l=a.date)?l:"\u2013"})]})}}),(0,b.jsx)(u.default,{style:k.listWrapper})]})})};(0,n.default)(S)}},t={};function r(n){var l=t[n];if(void 0!==l)return l.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,n,l,a)=>{if(!n){var o=1/0;for(s=0;s<e.length;s++){for(var[n,l,a]=e[s],i=!0,d=0;d<n.length;d++)(!1&a||o>=a)&&Object.keys(r.O).every((e=>r.O[e](n[d])))?n.splice(d--,1):(i=!1,a<o&&(o=a));if(i){e.splice(s--,1);var u=l();void 0!==u&&(t=u)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[n,l,a]}})(),r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var l,a,[o,i,d]=n,u=0;if(o.some((t=>0!==e[t]))){for(l in i)r.o(i,l)&&(r.m[l]=i[l]);if(d)var s=d(r)}for(t&&t(n);u<o.length;u++)a=o[u],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(s)},n=self.webpackChunkweb=self.webpackChunkweb||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[303],(()=>r(7970)));n=r.O(n)})();
//# sourceMappingURL=main.efcd07e8.js.map