(()=>{"use strict";var e={7328:(e,t,r)=>{r.r(t),r.d(t,{buttonStyles:()=>k,default:()=>D,inputStyles:()=>C,modalStyles:()=>P});var l=r(4942),n=r(2982),a=r(885),o=r(5004),i=r(6792),d=r(9385),u=r(1054),s=r(6591),c=r(5288),f=r(9294),h=r(3645),p=r(8391),y=r(6720),b=r(2629),g=i.default.create({container:{backgroundColor:"white"},dropdown:{height:50,borderColor:"gray",borderWidth:.5,paddingHorizontal:8},icon:{marginRight:5},label:{display:"none"},placeholderStyle:{fontSize:16,color:"gray"},selectedTextStyle:{fontSize:16},iconStyle:{width:20,height:20},inputSearchStyle:{height:40,fontSize:16}});const x=function(e){var t=e.type,r=e.onTypeChange,l=e.list,n=void 0===l?[]:l,i=e.placeholder,s=void 0===i?"Select item":i,c=(0,o.useState)(!1),f=(0,a.default)(c,2),h=f[0],p=f[1];return(0,b.jsxs)(d.default,{style:g.container,children:[t||h?(0,b.jsx)(u.default,{style:[g.label,h&&{color:"blue"}],children:"Dropdown label"}):null,(0,b.jsx)(y.Dropdown,{style:[g.dropdown,h&&{borderColor:"blue"}],placeholderStyle:g.placeholderStyle,selectedTextStyle:g.selectedTextStyle,inputSearchStyle:g.inputSearchStyle,iconStyle:g.iconStyle,data:n,search:!1,maxHeight:300,labelField:"label",valueField:"value",placeholder:s,value:t,onFocus:function(){return p(!0)},onBlur:function(){return p(!1)},onChange:function(e){r(e.value),p(!1)},renderLeftIcon:function(){return null}})]})};var j=i.default.create({fieldContainer:{marginBottom:16,gap:8},filedLabel:{fontSize:16,color:"gray",fontWeight:"bold"},requiredAsterisk:{color:"red"}});const m=function(e){var t=e.label,r=e.isRequired,l=e.children;return(0,b.jsxs)(d.default,{style:j.fieldContainer,children:[(0,b.jsxs)(u.default,{style:j.filedLabel,children:[t," ",r&&(0,b.jsx)(u.default,{style:j.requiredAsterisk,children:"*"})]}),l]})};var v=r(7438),S=r.n(v);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){(0,l.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var k=i.default.create({button:{paddingHorizontal:16,backgroundColor:"#1247fc",paddingVertical:8,border:"1px solid #ccc",paddingVertical:8,textTransform:"none"},buttonText:{color:"white"}}),C=i.default.create({input:{width:"100%",height:40,borderColor:"#ccc",borderWidth:1,padding:8},inputText:{color:"gray"}}),P=i.default.create({modal:{borderWidth:1,backgroundColor:"white",margin:"auto",paddingHorizontal:32,paddingVertical:16,borderColor:"#ccc",width:200,width:"50%"},modalCloseBtn:{width:"20%"}}),T=i.default.create(w(w(w({durationModal:{backgroundColor:"red"},durationPicker:{backgroundColor:"blue",width:200,width:"100%",height:40},container:{flex:1,padding:16,maxWidth:800,marginHorizontal:"auto"},header:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",padding:16},h1:{fontSize:24,fontWeight:"bold"},subheader:{fontSize:18,color:"gray"},addTaskForm:{margin:16,gap:16},tasksList:{margin:16,border:"1px solid #ccc"},tasksListItem:{flexDirection:"row",justifyContent:"space-between",flexGrow:1,padding:16,marginBottom:4,borderBottom:"1px solid #ccc",backgroundColor:"lightgray"}},k),C),P));const D=function(){var e=(0,o.useState)([{name:"work",duration:"2h",type:"Work",date:"12.12.2021"}]),t=(0,a.default)(e,2),r=t[0],l=t[1],i=(0,o.useState)(null),y=(0,a.default)(i,2),g=y[0],j=y[1],v=(0,o.useState)(null),O=(0,a.default)(v,2),w=O[0],k=O[1],C=(0,o.useState)(null),P=(0,a.default)(C,2),D=P[0],Y=P[1],M=(0,o.useState)(null),z=(0,a.default)(M,2),W=z[0],_=z[1],H=(0,o.useState)(!1),L=(0,a.default)(H,2),q=L[0],F=L[1],R=(0,o.useState)(!1),B=(0,a.default)(R,2),E=B[0],I=B[1],V=(0,o.useState)("01.01.1999 00:00"),A=(0,a.default)(V,2),G=A[0],N=A[1],J=(0,o.useState)(null),K=(0,a.default)(J,2),Q=(K[0],K[1],(0,o.useCallback)((function(){k(S()(G).format("HH:mm")),F(!1)}),[G])),U=(0,o.useCallback)((function(){_(S()(W).format("DD.MM.YYYY HH:mm")),I(!1)}),[W]),X=o.memo((function(e){var t=e.value,r=e.onChange;return(0,b.jsx)(p.default,{value:t,onValueChange:r,mode:"time",style:T.durationPicker})}));return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(d.default,{style:T.container,children:[(0,b.jsxs)(d.default,{style:T.header,children:[(0,b.jsx)(u.default,{style:T.h1,children:"TODO List"}),(0,b.jsx)(u.default,{style:T.subheader,children:S()().format("DD.MM.YYYY")})]}),(0,b.jsxs)(d.default,{style:T.addTaskForm,children:[(0,b.jsx)(m,{label:"Task type",isRequired:!0,children:(0,b.jsx)(x,{type:g,onTypeChange:j,list:[{label:"Work",value:"work"},{label:"Education",value:"education"},{label:"Sport",value:"sport"},{label:"Other",value:"other"}],placeholder:"Select task"})}),(0,b.jsx)(m,{label:"Task duration",isRequired:!0,children:(0,b.jsx)(c.default,{style:T.input,onPress:function(){return F(!0)},children:(0,b.jsx)(u.default,{style:T.inputText,children:w||"Set duration"})})}),(0,b.jsx)(m,{label:"Choose date",isRequired:!0,children:(0,b.jsx)(c.default,{style:T.input,onPress:function(){return I(!0)},children:(0,b.jsx)(u.default,{style:T.inputText,children:W||"Choose date"})})}),(0,b.jsx)(m,{label:"Task name",isRequired:!0,children:(0,b.jsx)(s.default,{value:D,onChangeText:function(e){return Y(e)},style:T.input,placeholder:"Your text here"})}),(0,b.jsx)(c.default,{style:T.button,onPress:function(){var e={type:g,duration:w,name:D,date:W};console.log(e),l([].concat((0,n.default)(r),[e])),j(null),k(null),Y(null),_(S()().format("DD.MM.YYYY"))},children:(0,b.jsx)(u.default,{style:T.buttonText,children:"Add task"})})]}),(0,b.jsx)(h.default,{data:r,style:T.tasksList,renderItem:function(e){var t,r,l,n,a=e.item;return(0,b.jsxs)(d.default,{style:T.tasksListItem,children:[(0,b.jsx)(u.default,{style:T.item,children:null!=(t=a.type)?t:"\u2013"}),(0,b.jsx)(u.default,{style:T.item,children:null!=(r=a.duration)?r:"\u2013"}),(0,b.jsx)(u.default,{style:T.item,children:null!=(l=a.name)?l:"\u2013"}),(0,b.jsx)(u.default,{style:T.item,children:null!=(n=a.date)?n:"\u2013"})]})}}),(0,b.jsx)(d.default,{style:T.listWrapper})]}),(0,b.jsx)(f.default,{visible:q,transparent:!0,children:(0,b.jsxs)(d.default,{style:T.modal,children:[(0,b.jsx)(c.default,{onPress:function(){return F(!1)},children:(0,b.jsx)(u.default,{children:"Close"})}),(0,b.jsx)(X,{value:G,onChange:function(e){return N(e)}}),(0,b.jsx)(c.default,{style:T.button,onPress:Q,children:(0,b.jsx)(u.default,{style:T.buttonText,children:"Set duration"})})]})}),(0,b.jsx)(f.default,{visible:E,transparent:!0,children:(0,b.jsxs)(d.default,{style:T.modal,children:[(0,b.jsx)(c.default,{onPress:function(){return I(!1)},children:(0,b.jsx)(u.default,{children:"Close"})}),(0,b.jsx)(p.default,{value:W,mode:"datetime",onValueChange:function(e){return _(e)},style:T.durationPicker,todayContainerStyle:{borderWidth:1}}),(0,b.jsx)(c.default,{style:T.button,onPress:U,children:(0,b.jsx)(u.default,{style:T.buttonText,children:"Set date and time"})})]})})]})}}},t={};function r(l){var n=t[l];if(void 0!==n)return n.exports;var a=t[l]={id:l,loaded:!1,exports:{}};return e[l].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=e,(()=>{var e=[];r.O=(t,l,n,a)=>{if(!l){var o=1/0;for(s=0;s<e.length;s++){for(var[l,n,a]=e[s],i=!0,d=0;d<l.length;d++)(!1&a||o>=a)&&Object.keys(r.O).every((e=>r.O[e](l[d])))?l.splice(d--,1):(i=!1,a<o&&(o=a));if(i){e.splice(s--,1);var u=n();void 0!==u&&(t=u)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[l,n,a]}})(),r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(l,n){if(1&n&&(l=this(l)),8&n)return l;if("object"===typeof l&&l){if(4&n&&l.__esModule)return l;if(16&n&&"function"===typeof l.then)return l}var a=Object.create(null);r.r(a);var o={};e=e||[null,t({}),t([]),t(t)];for(var i=2&n&&l;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((e=>o[e]=()=>l[e]));return o.default=()=>l,r.d(a,o),a}})(),r.d=(e,t)=>{for(var l in t)r.o(t,l)&&!r.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),r.p="/",(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,l)=>{var n,a,[o,i,d]=l,u=0;if(o.some((t=>0!==e[t]))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(d)var s=d(r)}for(t&&t(l);u<o.length;u++)a=o[u],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(s)},l=self.webpackChunkweb=self.webpackChunkweb||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var l=r.O(void 0,[468],(()=>r(6271)));l=r.O(l)})();
//# sourceMappingURL=main.2998fba7.js.map