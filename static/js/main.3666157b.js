(()=>{"use strict";var e={7480:(e,t,o)=>{o.r(t);var r=o(4178),n=o(4942),i=o(2982),l=o(5861),a=o(885),d=o(5004),s=o(14),u=o(6792),c=o(9385),f=o(1054),g=o(6591),h=o(5288),b=o(3224),y=o(7602),p=o(9537),m=(o(9341),o(2629)),x=u.default.create({container:{width:16,height:16,borderWidth:1,borderColor:"#ccc",borderRadius:5},checked:{backgroundColor:"#eee"},icon:{margin:"auto",width:14,height:14}});const j=function(e){var t=e.checked,r=e.onToggleChecked;return(0,m.jsx)(h.default,{onPress:r,children:(0,m.jsx)(c.default,{style:[x.container,t&&x.checked],children:(0,m.jsx)(s.Image,{source:o(515),style:[x.icon,!t&&{display:"none"}]})})})};var I=o(2296),M=o(8950),v=u.default.create({dropdown:{flex:1,borderWidth:1,borderColor:"#ccc",padding:2},icon:{marginRight:5,width:16,height:16},label:{display:"none"},placeholderStyle:{fontSize:14,userSelect:"none",marginStart:6,fontFamily:"RobotoRegular"},containerStyle:{marginTop:6,borderRadius:4,borderColor:"#808080"},textStyle:{fontSize:14},selectedTextStyle:{fontSize:14,marginStart:6}});const D=function(e){var t=e.value,r=e.onTypeChange,n=e.options,i=void 0===n?[]:n,l=e.placeholder,u=e.rightIconName,c=e.style,f=(0,d.useState)(!1),g=(0,a.default)(f,2),h=g[0],b=g[1];return(0,m.jsx)(M.Dropdown,{style:[c,v.dropdown,h&&{borderColor:"#808080"}],placeholderStyle:v.placeholderStyle,selectedTextStyle:v.selectedTextStyle,data:i,search:!1,maxHeight:300,activeColor:"#eee",fontFamily:"RobotoLight",labelField:"label",valueField:"value",placeholder:l,itemContainerStyle:v.containerStyle,itemTextStyle:v.textStyle,renderRightIcon:function(){return(0,m.jsx)(s.Image,{style:[v.icon,h&&{transform:"rotate(180deg)"}],source:o("sort-icon.svg"===u?8676:7675)})},value:t,onFocus:function(){return b(!0)},onBlur:function(){return b(!1)},onChange:function(e){r(e.value),b(!1)},renderLeftIcon:function(){return null}})};function T(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function C(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?T(Object(o),!0).forEach((function(t){(0,n.default)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):T(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var w=u.default.create({fieldContainer:{marginBottom:16,gap:8},filedLabel:{fontSize:14,fontFamily:"RobotoMedium",color:"gray"},label:{flexDirection:"row",alignItems:"top",gap:3},requiredAsterisk:{color:"red"}});const O=function(e){var t=e.label,o=e.isRequired,r=e.children,n=e.style;return(0,m.jsxs)(c.default,{style:C(C({},w.fieldContainer),n),children:[(0,m.jsxs)(c.default,{style:w.label,children:[(0,m.jsx)(f.default,{style:w.filedLabel,children:t}),(0,m.jsx)(f.default,{style:w.requiredAsterisk,children:o?"*":null})]}),(0,m.jsx)(c.default,{children:r})]})};var k=o(9160),N=o(4354),z=d.memo((function(e){var t=e.value,o=e.type,r=e.onValueChange;return(0,m.jsx)(N.default,{value:t,onValueChange:r,selectedItemColor:"#eee",displayFullDays:!0,calendarTextStyle:{fontFamily:"RobotoLight"},selectedTextStyle:{fontFamily:"RobotoRegular",color:"black"},style:A.durationPicker,mode:o})})),A=u.default.create({modal:{position:"absolute",left:"50%",transform:[{translateX:-165}],borderWidth:1,backgroundColor:"white",borderRadius:8,paddingHorizontal:16,marginHorizontal:"auto",paddingVertical:8,borderColor:"#ccc",width:330},modalCloseBtn:{width:"20%"},datePicker:{borderColor:"#ccc",width:200,width:"100%",height:40},button:{padding:12,backgroundColor:"#eee",alignItems:"center",borderWidth:1,borderColor:"#808080",borderRadius:4,marginBottom:8}});const S=function(e){var t=e.visible,o=e.type,r=e.onClose,n=e.onSubmit,i=e.dateTime,l=e.onDateTimeChange;return(0,m.jsx)(k.default,{onBackdropPress:r,visible:t,transparent:!0,children:(0,m.jsxs)(c.default,{style:A.modal,children:[(0,m.jsx)(z,{style:A.datePicker,value:i,type:o,onValueChange:l,todayContainerStyle:{borderWidth:1}}),(0,m.jsx)(h.default,{style:A.button,onPress:n,children:(0,m.jsxs)(f.default,{style:A.buttonText,children:["Choose ",o]})})]})})};var L=o(7438),P=o.n(L),R=o(1639),Y=o(1263);function B(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function H(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?B(Object(o),!0).forEach((function(t){(0,n.default)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):B(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}Y.preventAutoHideAsync();var Z=u.default.create({button:{paddingHorizontal:16,height:40,justifyContent:"center",backgroundColor:"#eeeeee",paddingVertical:8,borderRadius:8,borderWidth:1,borderColor:"#808080",textTransform:"none"},buttonText:{color:"black",textAlign:"center"}}),W=u.default.create({input:{minHeight:40,borderColor:"#ccc",borderWidth:1,borderRadius:6,padding:6},inputText:{color:"gray"},textarea:{minHeight:120,borderColor:"#ccc",borderWidth:1,borderRadius:6,padding:6,paddingTop:12}}),U=u.default.create(H(H({durationPicker:{backgroundColor:"blue",width:200,width:"100%",height:40},container:{flex:1,maxWidth:800,marginHorizontal:"auto"},header:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",padding:12},h1:{fontSize:24,fontFamily:"RobotoLight"},subheader:{fontSize:16,fontFamily:"RobotoLight"},addTaskForm:{margin:16,marginBottom:64,gap:16},topFormRow:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",gap:16},taskTypeInput:{flex:8},taskTypePicker:{borderColor:"red",borderRadius:6},taskDurationInput:{flex:4},dateTimePicker:{alignItems:"center",flexDirection:"row",minHeight:40,borderColor:"#ccc",borderWidth:1,borderRadius:6,padding:8},dateTimePickerText:{color:"#808080"},dateTimeButtons:{flexDirection:"row",gap:6,marginLeft:"auto"},dateTimeButton:H(H({},Z.button),{},{backgroundColor:"#eee"}),dateTimeButtonText:{color:"black"},checkbox:{width:16,height:16}},Z),W)),E=u.default.create({container:{gap:12,marginBottom:4},sort:{},search:{position:"relative",paddingHorizontal:14},searchInput:{width:"100%",borderWidth:1,borderColor:"#ccc",borderRadius:4,paddingHorizontal:40,paddingVertical:12},searchIcon:{width:16,height:16,position:"absolute",top:"30%",left:26},crossIcon:{position:"absolute",width:8,height:8,transform:[{translateY:-8}],top:"50%",right:30},bottomRow:{flexDirection:"row",flex:1},filterContainer:{flexDirection:"row",paddingHorizontal:14,gap:8},filterButton:{flexDirection:"row",gap:8,height:28,alignItems:"center",paddingHorizontal:12,paddingVertical:6,borderWidth:1,borderColor:"#ccc",borderRadius:6},sortingContainer:{marginHorizontal:14,height:28},sorting:{borderRadius:6,width:"100%",backgroundColor:"#eee",height:28},sortingIcon:{width:20,height:20}}),F=u.default.create({list:{gap:12,margin:16,marginBottom:100},item:{minWidth:"80%",borderWidth:1,justifyContent:"space-between",backgroundColor:"white",borderColor:"#ccc",padding:12,gap:20,borderRadius:6,flexDirection:"row"},container:{flex:1,height:"fit-content"},topRow:{flexDirection:"row",alignItems:"center",height:16,gap:12},label:{flexDirection:"row",alignItems:"center",gap:4,color:"#808080",fontFamily:"RobotoRegular",fontSize:12},leftButtons:{alignItems:"center",height:51,justifyContent:"space-between"},rightButtons:{height:51,justifyContent:"center"},dotsIcon:{width:20,height:20},actionsModalButton:{position:"relative"},title:{fontSize:18,marginTop:16,fontFamily:"RobotoMedium",color:"#808080"},description:{fontFamily:"RobotoRegular",color:"#808080",marginTop:8,fontSize:16},actionsModal:{zIndex:999,position:"absolute",backgroundColor:"white",borderWidth:1,borderColor:"#808080",padding:8,borderRadius:6,width:200,height:90,transform:[{translateX:-200},{translateY:25}],left:15,top:-20},actionsModalItem:{backgroundColor:"white",padding:8,flexDirection:"row",alignItems:"center",justifyContent:"space-between"},actionsModalPopover:{position:"absolute",top:0,left:0}});const Q=function(){var e=(0,R.useFonts)({RobotoLight:o(7972),RobotoMedium:o(245),RobotoRegular:o(1698)}),t=(0,a.default)(e,2),r=t[0],n=t[1],u=(0,d.useCallback)((0,l.default)((function*(){(r||n)&&(yield Y.hideAsync())})),[r,n]),x=(0,d.useState)([{name:"blank",date:"12.01.2021",time:"00:00",duration:0,type:"blank",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",done:!1,favorite:!1,blank:!0},{name:"Task 1",date:"12.12.2025",time:"10:50",duration:20,type:"Work",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",done:!0,favorite:!1},{name:"Task 2",date:"12.12.2025",time:"00:20",duration:120,type:"Work",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",done:!1,favorite:!1},{name:"Task name",date:"12.12.2023",time:"15:15",duration:60,type:"Work",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",done:!1,favorite:!1}]),M=(0,a.default)(x,2),v=M[0],T=M[1],C=(0,d.useState)(""),w=(0,a.default)(C,2),k=w[0],N=w[1],z=(0,d.useState)(""),A=(0,a.default)(z,2),L=A[0],B=A[1],H=(0,d.useState)(""),Z=(0,a.default)(H,2),W=Z[0],Q=Z[1],G=(0,d.useState)(""),J=(0,a.default)(G,2),V=J[0],K=J[1],_=(0,d.useState)(""),X=(0,a.default)(_,2),q=X[0],$=X[1],ee=(0,d.useState)(""),te=(0,a.default)(ee,2),oe=te[0],re=te[1],ne=(0,d.useState)("date"),ie=(0,a.default)(ne,2),le=ie[0],ae=ie[1],de=(0,d.useState)(null),se=(0,a.default)(de,2),ue=se[0],ce=se[1],fe=(0,d.useState)("all"),ge=(0,a.default)(fe,2),he=ge[0],be=ge[1],ye=(0,d.useState)((0,i.default)(v)),pe=(0,a.default)(ye,2),me=pe[0],xe=pe[1];(0,d.useEffect)((function(){var e=(0,i.default)(v);"todo"===he?e=e.filter((function(e){return!e.done||e.blank})):"done"===he?e=e.filter((function(e){return e.done||e.blank})):"favorite"===he?e=e.filter((function(e){return e.favorite||e.blank})):"overdue"===he&&(e=e.filter((function(e){var t=P()(e.date+" "+e.time).add(e.duration,"minute");return P()(t).isBefore(P()())||e.blank}))),ue&&(e=e.filter((function(e){return e.name.toLowerCase().includes(ue.toLowerCase())}))),"date"===le?e=e.sort((function(e,t){return P()(e.date+e.time).isBefore(P()(t.date+t.time))?-1:P()(e.date+e.time).isAfter(P()(t.date+t.time))?1:0})):"duration"===le?e=e.sort((function(e,t){return P()(e.duration).isBefore(P()(t.duration))?-1:P()(e.duration).isAfter(P()(t.duration))?1:0})):"type"===le&&(e=e.sort((function(e,t){return e.type<t.type?-1:e.type>t.type?1:0}))),xe(e)}),[he,ue,le,v]);var je=(0,d.useState)(!1),Ie=(0,a.default)(je,2),Me=Ie[0],ve=Ie[1],De=(0,d.useState)(!1),Te=(0,a.default)(De,2),Ce=Te[0],we=Te[1],Oe=(0,d.useState)(P()()),ke=(0,a.default)(Oe,2),Ne=ke[0],ze=ke[1],Ae=(0,d.useState)(P()()),Se=(0,a.default)(Ae,2),Le=Se[0],Pe=Se[1],Re=(0,d.useCallback)((function(){re(P()(Ne).format("HH:mm")),ve(!1)}),[Ne]),Ye=(0,d.useCallback)((function(){$(P()(Le).format("DD.MM.YYYY")),we(!1)}),[Le]),Be=(0,d.useState)(null),He=(0,a.default)(Be,2),Ze=He[0],We=He[1],Ue=(0,d.useState)(null),Ee=(0,a.default)(Ue,2),Fe=Ee[0],Qe=Ee[1],Ge=!k||!q||!oe;return r||n?(0,m.jsx)(I.EventProvider,{children:(0,m.jsx)(y.default,{children:(0,m.jsxs)(b.default,{children:[(0,m.jsxs)(c.default,{style:U.container,onLayout:u,children:[(0,m.jsxs)(c.default,{style:U.header,children:[(0,m.jsx)(f.default,{style:U.h1,children:"Notes"}),(0,m.jsx)(f.default,{style:U.subheader,children:P()().format("DD.MM.YYYY")})]}),(0,m.jsxs)(c.default,{style:U.addTaskForm,children:[(0,m.jsx)(O,{label:"Title",isRequired:!0,children:(0,m.jsx)(g.default,{value:k,onChangeText:function(e){return N(e)},style:U.input})}),(0,m.jsx)(O,{label:"Description",isRequired:!1,children:(0,m.jsx)(g.default,{multiline:!0,numberOfLines:8,style:U.textarea,value:L,onChangeText:function(e){return B(e)}})}),(0,m.jsx)(O,{label:"Date & Time",isRequired:!0,children:(0,m.jsxs)(c.default,{style:U.dateTimePicker,children:[(0,m.jsxs)(f.default,{style:U.dateTimePickerText,children:[""!==q?q:"dd.mm.yyyy"," ",""!==oe?oe:"hh:mm"]}),(0,m.jsxs)(c.default,{style:U.dateTimeButtons,children:[(0,m.jsx)(h.default,{style:U.dateTimeButton,onPress:function(){return we(!0)},children:(0,m.jsx)(f.default,{style:U.dateTimeButtonText,children:"Date"})}),(0,m.jsx)(h.default,{style:U.dateTimeButton,onPress:function(){return ve(!0)},children:(0,m.jsx)(f.default,{style:U.dateTimeButtonText,children:"Time"})})]})]})}),(0,m.jsxs)(c.default,{style:U.topFormRow,children:[(0,m.jsx)(O,{style:U.taskDurationInput,label:"Duration",isRequired:!1,children:(0,m.jsx)(g.default,{value:V,onChangeText:function(e){return K(e)},style:U.input,placeholder:"minutes",placeholderTextColor:"#808080"})}),(0,m.jsx)(O,{style:U.taskTypeInput,label:"Type",isRequired:!1,children:(0,m.jsx)(D,{value:W,onTypeChange:Q,style:U.taskTypePicker,options:[{label:"Work",value:"work"},{label:"Education",value:"education"},{label:"Sport",value:"sport"},{label:"Other",value:"other"}],placeholder:"Select task",rightIconName:"arrow-icon.svg"})})]}),(0,m.jsx)(h.default,{style:[U.button,Ge&&{backgroundColor:"whitesmoke",borderColor:"#eee"}],disabled:!!Ge,onPress:function(){if(!Ge){var e={name:k,description:L,date:q,time:oe,duration:parseInt(V),type:W,done:!1,favorite:!1};T([].concat((0,i.default)(v),[e])),N(""),B(""),K(""),Q(""),$(""),re("")}},children:(0,m.jsx)(f.default,{style:[U.buttonText,Ge&&{color:"#ccc"}],children:"Add task"})})]}),(0,m.jsxs)(c.default,{style:E.container,children:[(0,m.jsxs)(c.default,{style:E.search,children:[(0,m.jsx)(g.default,{value:ue,onChangeText:function(e){return ce(e)},style:E.searchInput,placeholder:"Search",placeholderTextColor:"#808080"}),(0,m.jsx)(s.Image,{style:E.searchIcon,source:o(9508)}),(0,m.jsx)(c.default,{style:[ue?null:{display:"none"},E.crossIcon],children:(0,m.jsx)(h.default,{onPress:function(){return ce("")},children:(0,m.jsx)(s.Image,{style:[{width:16,height:16}],source:o(3565)})})})]}),(0,m.jsx)(c.default,{style:E.sortingContainer,children:(0,m.jsx)(D,{style:E.sorting,options:[{label:"Date",value:"date"},{label:"Duration",value:"duration"},{label:"Type",value:"type"}],onTypeChange:ae,value:le,rightIconName:"sort-icon.svg",placeholder:le})}),(0,m.jsx)(b.default,{showsHorizontalScrollIndicator:!1,showsVerticalScrollIndicator:!1,horizontal:!0,children:(0,m.jsxs)(c.default,{style:E.filterContainer,children:[(0,m.jsxs)(h.default,{style:["all"===he&&{backgroundColor:"#eee"},E.filterButton],onPress:function(){return be("all")},children:[(0,m.jsx)(s.Image,{style:{width:16,height:16},source:o(7329)}),(0,m.jsx)(f.default,{style:[{color:"#808080"},"all"===he&&{color:"#000"}],children:"All"})]}),(0,m.jsxs)(h.default,{style:["todo"===he&&{backgroundColor:"#eee"},E.filterButton],onPress:function(){return be("todo")},children:[(0,m.jsx)(s.Image,{style:{width:16,height:16},source:o(301)}),(0,m.jsx)(f.default,{style:[{color:"#808080"},"todo"===he&&{color:"#000"}],children:"TODO"})]}),(0,m.jsxs)(h.default,{style:["done"===he&&{backgroundColor:"#eee"},E.filterButton],onPress:function(){return be("done")},children:[(0,m.jsx)(s.Image,{style:{width:16,height:16},source:o(4511)}),(0,m.jsx)(f.default,{style:[{color:"#808080"},"done"===he&&{color:"#000"}],children:"Done"})]}),(0,m.jsxs)(h.default,{style:["favorite"===he&&{backgroundColor:"#eee"},E.filterButton],onPress:function(){return be("favorite")},children:[(0,m.jsx)(s.Image,{style:{width:16,height:16},source:o(3376)}),(0,m.jsx)(f.default,{style:[{color:"#808080"},"favorite"===he&&{color:"#000"}],children:"Favorite"})]}),(0,m.jsxs)(h.default,{style:["overdue"===he&&{backgroundColor:"#eee"},E.filterButton],onPress:function(){return be("overdue")},children:[(0,m.jsx)(s.Image,{style:{width:16,height:16},source:o(2389)}),(0,m.jsx)(f.default,{style:[{color:"#808080"},"overdue"===he&&{color:"#000"}],children:"Overdue"})]})]})})]}),(0,m.jsx)(c.default,{style:F.list,children:me.map((function(e,t,r){var n,l,a,d,u,g;return(0,m.jsx)(c.default,{style:[0!==t&&{zIndex:""+(r.length-t)},0===t&&{opacity:0,visibility:"hidden",zIndex:-100,height:0}],children:(0,m.jsxs)(c.default,{style:F.item,children:[(0,m.jsxs)(c.default,{style:F.leftButtons,children:[(0,m.jsx)(j,{checked:null==e?void 0:e.done,onToggleChecked:function(){return function(e){var t=(0,i.default)(v),o=t.findIndex((function(t){return t===e}));t[o].done=!e.done,T(t)}(e)},style:U.checkbox}),(0,m.jsx)(h.default,{onPress:function(){return Qe(Fe?null:e)},children:(0,m.jsx)(s.Image,{style:[{width:16,height:16},!e.description&&{display:"none"},Fe===e&&{transform:"rotate(180deg)"}],source:o(7675)})})]}),(0,m.jsxs)(c.default,{style:F.container,children:[(0,m.jsxs)(b.default,{horizontal:!0,showsHorizontalScrollIndicator:!1,contentContainerStyle:F.topRow,children:[(0,m.jsx)(f.default,{style:[F.label,!(null!=e&&e.date)&&{display:"none"}],children:null!=(n=null==e?void 0:e.date)?n:"\u2013"}),(0,m.jsx)(f.default,{style:[F.label,!(null!=e&&e.time)&&{display:"none"}],children:null!=(l=null==e?void 0:e.time)?l:"\u2013"}),(0,m.jsx)(f.default,{style:[F.label,!(null!=e&&e.type)&&{display:"none"}],children:null!=(a=null==e?void 0:e.type)?a:"\u2013"}),(0,m.jsxs)(f.default,{style:[F.label,!(null!=e&&e.duration)&&{display:"none"}],children:[null!=(d=null==e?void 0:e.duration)?d:"\u2013"," minutes"]}),(0,m.jsxs)(c.default,{style:[{flexDirection:"row",alignItems:"center",gap:2},!(null!=e&&e.favorite)&&{display:"none"}],children:[(0,m.jsx)(s.Image,{source:o(3376),style:{width:12,height:12}}),(0,m.jsx)(f.default,{style:[F.label,{color:"#808080"}],children:"favorite"})]})]}),(0,m.jsx)(c.default,{children:(0,m.jsx)(f.default,{style:F.title,children:null!=(u=null==e?void 0:e.name)?u:"\u2013"})}),(0,m.jsx)(p.default,{collapsed:!(Fe===e),children:(0,m.jsx)(f.default,{style:F.description,children:null!=(g=null==e?void 0:e.description)?g:"\u2013"})})]}),(0,m.jsxs)(c.default,{style:F.rightButtons,children:[(0,m.jsx)(h.default,{style:F.actionsModalButton,onPress:function(){return We(e)},children:(0,m.jsx)(s.Image,{style:F.dotsIcon,source:o(6254)})}),(0,m.jsx)(I.default,{disabled:!Ze,onOutsidePress:function(){return We(null)},children:(0,m.jsxs)(c.default,{style:[Ze===e?null:{display:"none"},F.actionsModal],children:[(0,m.jsxs)(h.default,{onPress:function(){return function(e){var t=(0,i.default)(v),o=t.findIndex((function(t){return t===e}));t[o].favorite=!t[o].favorite,T(t),We(null)}(e)},style:F.actionsModalItem,children:[(0,m.jsx)(s.Image,{style:{width:20,height:20},source:o(3376)}),(0,m.jsx)(f.default,{children:e.favorite?"Remove from favorite":"Add to favorite"})]}),(0,m.jsxs)(h.default,{onPress:function(){return function(e){var t=(0,i.default)(v),o=t.findIndex((function(t){return t===e}));t.splice(o,1),T(t),We(null)}(e)},style:F.actionsModalItem,children:[(0,m.jsx)(s.Image,{style:{width:20,height:20},source:o(9786)}),(0,m.jsx)(f.default,{children:"Delete"})]})]})})]})]})})}))})]}),(0,m.jsx)(S,{visible:Ce,dateTime:Le,onDateTimeChange:Pe,onClose:function(){return we(!1)},onSubmit:Ye,style:[Ce?null:{display:"none"}],type:"date"}),(0,m.jsx)(S,{visible:Me,dateTime:Ne,onDateTimeChange:ze,onClose:function(){return ve(!1)},onSubmit:Re,style:[Me?null:{display:"none"}],type:"time"})]})})}):null};(0,r.default)(Q)},7972:(e,t,o)=>{e.exports=o.p+"static/media/Roboto-Light.03e629f6348896ffa23a.ttf"},245:(e,t,o)=>{e.exports=o.p+"static/media/Roboto-Medium.d2d7f0c01bffaa5ec8f7.ttf"},1698:(e,t,o)=>{e.exports=o.p+"static/media/Roboto-Regular.f25bd05915c1a3468d3d.ttf"},7329:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoCiAgICAgICAgZD0iTTIgMTEuMzMzM1Y5Ljk5OTk2SDExLjMzMzNWMTEuMzMzM0gyWk0zLjMzMzMzIDguNjY2NjNWNy4zMzMyOUgxMi42NjY3VjguNjY2NjNIMy4zMzMzM1pNNC42NjY2NyA1Ljk5OTk2VjQuNjY2NjNIMTRWNS45OTk5Nkg0LjY2NjY3WiIKICAgICAgICBmaWxsPSJibGFjayIgLz4KPC9zdmc+Cg=="},7675:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iIzAwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoCiAgICAgICAgZD0iTTggMTAuNUM3LjkzNDQyIDEwLjUwMDggNy44Njk0MSAxMC40ODc5IDcuODA5MTMgMTAuNDYyQzcuNzQ4ODUgMTAuNDM2MiA3LjY5NDY1IDEwLjM5OCA3LjY1IDEwLjM1TDMuMTUgNS44NDk5OUMyLjk1IDUuNjQ5OTkgMi45NSA1LjMzOTk5IDMuMTUgNS4xMzk5OUMzLjM1IDQuOTM5OTkgMy42NiA0LjkzOTk5IDMuODYgNS4xMzk5OUw4LjAxIDkuMjg5OTlMMTIuMTUgNS4xNDk5OUMxMi4zNSA0Ljk0OTk5IDEyLjY2IDQuOTQ5OTkgMTIuODYgNS4xNDk5OUMxMy4wNiA1LjM0OTk5IDEzLjA2IDUuNjU5OTkgMTIuODYgNS44NTk5OUw4LjM2IDEwLjM2QzguMjYgMTAuNDYgOC4xMyAxMC41MSA4LjAxIDEwLjUxTDggMTAuNVoiCiAgICAgICAgZmlsbD0iIzgwODA4MCIgLz4KPC9zdmc+Cg=="},515:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuNjA0MTcgMi45MTY2M0wzLjk1ODM0IDcuMDgzMjlMMi4zOTU4NCA1LjUyMDc5IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjAuOTYxNTM4IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="},3565:(e,t,o)=>{e.exports=o.p+"static/media/cross-icon.bb9f2d7d43d013635dee.svg"},9786:(e,t,o)=>{e.exports=o.p+"static/media/delete-icon.2dfdcdff7fcda6158902.svg"},4511:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuODI5ODggMTAuODcxNkw0LjEwNzU2IDguMTQ5MjRMNC43ODgxNCA3LjQ2ODY2TDYuODI5ODggOS41MTA0TDExLjIxMTkgNS4xMjg0MkwxMS44OTI0IDUuODA5TDYuODI5ODggMTAuODcxNloiIGZpbGw9IiM4MDgwODAiLz4KPGNpcmNsZSBjeD0iOCIgY3k9IjguMDAwMDYiIHI9IjYuMDI1NyIgc3Ryb2tlPSIjODA4MDgwIi8+Cjwvc3ZnPgo="},6254:(e,t,o)=>{e.exports=o.p+"static/media/dots-icon.5efd2595deb3fac365c8.svg"},2389:(e,t,o)=>{e.exports=o.p+"static/media/overdue-icon.2494ee1453ebc3168e83.svg"},9508:(e,t,o)=>{e.exports=o.p+"static/media/search-icon.04036839b06553668315.svg"},8676:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguMDAwMDIgOS41MjM4M0wxMS4wNDc2IDEyLjY1M0wxNC4wOTUzIDkuNTIzODNNOC4wMDAwMiA2LjQ3NjIxTDQuOTUyNCAzLjQyODU5TTQuOTUyNCAzLjQyODU5TDEuOTA0NzkgNi40NzM5Mk00Ljk1MjQgMy40Mjg1OVYxMi41NzE0TTExLjA0NzYgMy40Mjg1OVYxMi41NzE0IiBzdHJva2U9ImJsYWNrIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="},3376:(e,t,o)=>{e.exports=o.p+"static/media/star-icon.c4a9647ae4beac62e225.svg"},301:(e,t,o)=>{e.exports=o.p+"static/media/todo-icon.358c183c53d8bcd736e5.svg"}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(i.exports,i,i.exports,o),i.loaded=!0,i.exports}o.m=e,(()=>{var e=[];o.O=(t,r,n,i)=>{if(!r){var l=1/0;for(u=0;u<e.length;u++){for(var[r,n,i]=e[u],a=!0,d=0;d<r.length;d++)(!1&i||l>=i)&&Object.keys(o.O).every((e=>o.O[e](r[d])))?r.splice(d--,1):(a=!1,i<l&&(l=i));if(a){e.splice(u--,1);var s=n();void 0!==s&&(t=s)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,n,i]}})(),o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;o.t=function(r,n){if(1&n&&(r=this(r)),8&n)return r;if("object"===typeof r&&r){if(4&n&&r.__esModule)return r;if(16&n&&"function"===typeof r.then)return r}var i=Object.create(null);o.r(i);var l={};e=e||[null,t({}),t([]),t(t)];for(var a=2&n&&r;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((e=>l[e]=()=>r[e]));return l.default=()=>r,o.d(i,l),i}})(),o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),o.p="/5sem-react-native-todo/",(()=>{var e={179:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var n,i,[l,a,d]=r,s=0;if(l.some((t=>0!==e[t]))){for(n in a)o.o(a,n)&&(o.m[n]=a[n]);if(d)var u=d(o)}for(t&&t(r);s<l.length;s++)i=l[s],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(u)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=o.O(void 0,[23],(()=>o(7480)));r=o.O(r)})();
//# sourceMappingURL=main.3666157b.js.map