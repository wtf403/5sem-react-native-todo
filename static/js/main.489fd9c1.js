(()=>{"use strict";var e={7480:(e,t,o)=>{o.r(t);var r=o(4178),i=o(4942),n=o(2982),l=o(5861),a=o(885),d=o(5004),u=o(14),s=o(6792),c=o(9385),g=o(1054),M=o(6591),f=o(5288),j=o(3224),h=o(7602),y=o(4584),x=o(7129),b=o(9537),p=(o(9341),o(2629)),m=s.default.create({container:{width:16,height:16,borderWidth:1,borderColor:"#ccc",borderRadius:5},checked:{backgroundColor:"#eee"},icon:{margin:"auto",width:14,height:14}});const I=function(e){var t=e.checked,r=e.onToggleChecked;return(0,p.jsx)(f.default,{onPress:r,children:(0,p.jsx)(c.default,{style:[m.container,t&&m.checked],children:(0,p.jsx)(u.Image,{source:o(515),style:[m.icon,!t&&{display:"none"}]})})})};var D=o(7766),T=o(8950),N=s.default.create({dropdown:{flex:1,borderWidth:1,borderColor:"#ccc",padding:2},icon:{marginRight:5,width:16,height:16},label:{display:"none"},placeholderStyle:{fontSize:14,userSelect:"none",marginStart:6,fontFamily:"RobotoRegular"},containerStyle:{marginTop:6,borderRadius:4,borderColor:"#808080"},textStyle:{fontSize:14},selectedTextStyle:{fontSize:14,marginStart:6}});const z=function(e){var t=e.value,r=e.onTypeChange,i=e.options,n=void 0===i?[]:i,l=e.placeholder,s=e.rightIconName,c=e.style,g=(0,d.useState)(!1),M=(0,a.default)(g,2),f=M[0],j=M[1];return(0,p.jsx)(T.Dropdown,{style:[c,N.dropdown,f&&{borderColor:"#808080"}],placeholderStyle:N.placeholderStyle,selectedTextStyle:N.selectedTextStyle,data:n,search:!1,maxHeight:300,activeColor:"#eee",fontFamily:"RobotoLight",labelField:"label",valueField:"value",placeholder:l,itemContainerStyle:N.containerStyle,itemTextStyle:N.textStyle,renderRightIcon:function(){return(0,p.jsx)(u.Image,{style:[N.icon,f&&{transform:"rotate(180deg)"}],source:o("sort-icon.svg"===s?8676:7675)})},value:t,onFocus:function(){return j(!0)},onBlur:function(){return j(!1)},onChange:function(e){r(e.value),j(!1)},renderLeftIcon:function(){return null}})};function O(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function w(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?O(Object(o),!0).forEach((function(t){(0,i.default)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):O(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var C=s.default.create({fieldContainer:{marginBottom:16,gap:8},filedLabel:{fontSize:14,fontFamily:"RobotoMedium",color:"gray"},label:{flexDirection:"row",alignItems:"top",gap:3},requiredAsterisk:{color:"red"}});const k=function(e){var t=e.label,o=e.isRequired,r=e.children,i=e.style;return(0,p.jsxs)(c.default,{style:w(w({},C.fieldContainer),i),children:[(0,p.jsxs)(c.default,{style:C.label,children:[(0,p.jsx)(g.default,{style:C.filedLabel,children:t}),(0,p.jsx)(g.default,{style:C.requiredAsterisk,children:o?"*":null})]}),(0,p.jsx)(c.default,{children:r})]})};var v=o(9160),A=o(4354),L=d.memo((function(e){var t=e.value,o=e.type,r=e.onValueChange;return(0,p.jsx)(A.default,{value:t,onValueChange:r,selectedItemColor:"#eee",displayFullDays:!0,calendarTextStyle:{fontFamily:"RobotoLight"},selectedTextStyle:{fontFamily:"RobotoRegular",color:"black"},style:S.durationPicker,mode:o})})),S=s.default.create({modal:{borderWidth:1,backgroundColor:"white",borderRadius:8,paddingHorizontal:16,marginHorizontal:"auto",paddingVertical:8,borderColor:"#ccc",width:330},modalCloseBtn:{width:"20%"},datePicker:{borderColor:"#ccc",width:200,width:"100%",height:40},button:{padding:12,backgroundColor:"#eee",alignItems:"center",borderWidth:1,borderColor:"#808080",borderRadius:4,marginBottom:8}});const Y=function(e){var t=e.visible,o=e.type,r=e.onClose,i=e.onSubmit,n=e.dateTime,l=e.onDateTimeChange;return(0,p.jsx)(v.default,{onBackdropPress:r,visible:t,transparent:!0,children:(0,p.jsxs)(c.default,{style:S.modal,children:[(0,p.jsx)(L,{style:S.datePicker,value:n,type:o,onValueChange:l,todayContainerStyle:{borderWidth:1}}),(0,p.jsx)(f.default,{style:S.button,onPress:i,children:(0,p.jsxs)(g.default,{style:S.buttonText,children:["Choose ",o]})})]})})};var P=o(7438),R=o.n(P),E=o(1639),Z=o(1263);function U(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function H(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?U(Object(o),!0).forEach((function(t){(0,i.default)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):U(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}Z.preventAutoHideAsync();y.default.get("window").width,y.default.get("window").height;var B=s.default.create({button:{paddingHorizontal:16,height:40,justifyContent:"center",backgroundColor:"#eeeeee",paddingVertical:8,borderRadius:8,borderWidth:1,borderColor:"#808080",textTransform:"none"},buttonText:{color:"black",textAlign:"center"}}),W=s.default.create({input:{minHeight:40,borderColor:"#ccc",borderWidth:1,borderRadius:6,padding:6},inputText:{color:"gray"},textarea:{minHeight:120,borderColor:"#ccc",borderWidth:1,borderRadius:6,padding:6,paddingTop:12}}),Q=s.default.create(H(H({durationModal:{backgroundColor:"red"},durationPicker:{backgroundColor:"blue",width:200,width:"100%",height:40},container:{flex:1,maxWidth:800,marginHorizontal:"auto"},header:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",padding:12},h1:{fontSize:24,fontFamily:"RobotoLight"},subheader:{fontSize:16,fontFamily:"RobotoLight"},addTaskForm:{margin:16,marginBottom:64,gap:16},topFormRow:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",gap:16},taskTypeInput:{flex:8},taskTypePicker:{borderColor:"red",borderRadius:6},taskDurationInput:{flex:4},dateTimePicker:{alignItems:"center",flexDirection:"row",minHeight:40,borderColor:"#ccc",borderWidth:1,borderRadius:6,padding:8},dateTimePickerText:{color:"#808080"},dateTimeButtons:{flexDirection:"row",gap:6,marginLeft:"auto"},dateTimeButton:H(H({},B.button),{},{backgroundColor:"#eee"}),dateTimeButtonText:{color:"black"},checkbox:{width:16,height:16}},B),W)),F=s.default.create({container:{gap:12,marginBottom:4},sort:{},search:{position:"relative",paddingHorizontal:14},searchInput:{width:"100%",borderWidth:1,borderColor:"#ccc",borderRadius:4,paddingHorizontal:40,paddingVertical:12},searchIcon:{width:16,height:16,position:"absolute",top:"30%",left:26},crossIcon:{position:"absolute",width:8,height:8,transform:[{translateY:-8}],top:"50%",right:30},bottomRow:{flexDirection:"row",flex:1},filterContainer:{flexDirection:"row",paddingHorizontal:14,gap:8},filterButton:{flexDirection:"row",gap:8,height:28,alignItems:"center",paddingHorizontal:12,paddingVertical:6,borderWidth:1,borderColor:"#ccc",borderRadius:6},sortingContainer:{marginHorizontal:14,height:28},sorting:{borderRadius:6,width:"100%",backgroundColor:"#eee",height:28},sortingIcon:{width:20,height:20}}),G=s.default.create({list:{gap:12,margin:16,marginBottom:100},item:{borderWidth:1,justifyContent:"space-between",backgroundColor:"white",borderColor:"#ccc",padding:12,gap:20,borderRadius:6,flexDirection:"row"},container:{flex:1,height:"fit-content"},topRow:{flexDirection:"row",alignItems:"center",height:16,gap:20},label:{flexDirection:"row",alignItems:"center",gap:4,color:"#808080",fontFamily:"RobotoRegular",fontSize:14},leftButtons:{alignItems:"center",height:53,justifyContent:"space-between"},rightButtons:{height:53,justifyContent:"center"},dotsIcon:{width:20,height:20},actionsModalButton:{position:"relative"},title:{fontSize:18,marginTop:18,fontFamily:"RobotoMedium",color:"#808080"},description:{fontFamily:"RobotoRegular",color:"#808080",marginTop:8,fontSize:16},actionsModal:{zIndex:999,position:"absolute",backgroundColor:"white",borderWidth:1,borderColor:"#808080",padding:8,borderRadius:6,width:200,height:90,transform:[{translateX:-200},{translateY:60}],left:15,top:-20},actionsModalItem:{backgroundColor:"white",padding:8,flexDirection:"row",alignItems:"center",justifyContent:"space-between"},actionsModalPopover:{position:"absolute",top:0,left:0}});const J=function(){var e=(0,E.useFonts)({RobotoLight:o(7972),RobotoMedium:o(245),RobotoRegular:o(1698)}),t=(0,a.default)(e,2),r=t[0],i=t[1],s=(0,d.useCallback)((0,l.default)((function*(){(r||i)&&(yield Z.hideAsync())})),[r,i]),y=(0,d.useState)([{name:"Task 1",date:"12.12.2021",time:"10:50",duration:20,type:"Work",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",done:!0,favorite:!1},{name:"Task 2",date:"12.12.2022",time:"00:20",duration:120,type:"Work",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",done:!1,favorite:!1},{name:"Task name",date:"12.12.2023",time:"15:15",duration:60,type:"Work",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",done:!1,favorite:!1}]),m=(0,a.default)(y,2),T=m[0],N=m[1],O=(0,d.useState)(""),w=(0,a.default)(O,2),C=w[0],v=w[1],A=(0,d.useState)(""),L=(0,a.default)(A,2),S=L[0],P=L[1],U=(0,d.useState)(""),H=(0,a.default)(U,2),B=H[0],W=H[1],J=(0,d.useState)(""),V=(0,a.default)(J,2),K=V[0],X=V[1],_=(0,d.useState)(""),q=(0,a.default)(_,2),$=q[0],ee=q[1],te=(0,d.useState)(""),oe=(0,a.default)(te,2),re=oe[0],ie=oe[1],ne=(0,d.useState)("date"),le=(0,a.default)(ne,2),ae=le[0],de=le[1],ue=(0,d.useState)(null),se=(0,a.default)(ue,2),ce=se[0],ge=se[1],Me=(0,d.useState)("all"),fe=(0,a.default)(Me,2),je=fe[0],he=fe[1],ye=(0,d.useState)((0,n.default)(T)),xe=(0,a.default)(ye,2),be=xe[0],pe=xe[1];(0,d.useEffect)((function(){var e=(0,n.default)(T);"favorite"===je?e=e.filter((function(e){return e.favorite})):"new"===je?e=e.filter((function(e){return!e.done})):"done"===je&&(e=e.filter((function(e){return e.done}))),ce&&(e=e.filter((function(e){return e.name.toLowerCase().includes(ce.toLowerCase())}))),"date"===ae?e=e.sort((function(e,t){return R()(e.date+e.time).isBefore(R()(t.date+t.time))?-1:R()(e.date+e.time).isAfter(R()(t.date+t.time))?1:0})):"duration"===ae?e=e.sort((function(e,t){return R()(e.duration).isBefore(R()(t.duration))?-1:R()(e.duration).isAfter(R()(t.duration))?1:0})):"type"===ae&&(e=e.sort((function(e,t){return e.type<t.type?-1:e.type>t.type?1:0}))),pe(e)}),[je,ce,ae,T]);var me=(0,d.useState)(!1),Ie=(0,a.default)(me,2),De=Ie[0],Te=Ie[1],Ne=(0,d.useState)(!1),ze=(0,a.default)(Ne,2),Oe=ze[0],we=ze[1],Ce=(0,d.useState)(R()()),ke=(0,a.default)(Ce,2),ve=ke[0],Ae=ke[1],Le=(0,d.useState)(R()()),Se=(0,a.default)(Le,2),Ye=Se[0],Pe=Se[1],Re=(0,d.useCallback)((function(){ie(R()(ve).format("HH:mm")),Te(!1)}),[ve]),Ee=(0,d.useCallback)((function(){ee(R()(Ye).format("DD.MM.YYYY")),we(!1)}),[Ye]),Ze=(0,d.useState)(null),Ue=(0,a.default)(Ze,2),He=Ue[0],Be=Ue[1],We=(0,d.useState)(null),Qe=(0,a.default)(We,2),Fe=Qe[0],Ge=Qe[1],Je=!C||!$||!re;(0,D.useClickOutside)((function(){return Be(null)}));return r||i?(0,p.jsx)(D.ClickOutsideProvider,{children:(0,p.jsxs)(h.default,{children:[(0,p.jsxs)(j.default,{children:[(0,p.jsxs)(c.default,{style:Q.container,onLayout:s,children:[(0,p.jsxs)(c.default,{style:Q.header,children:[(0,p.jsx)(g.default,{style:Q.h1,children:"Notes"}),(0,p.jsx)(g.default,{style:Q.subheader,children:R()().format("DD.MM.YYYY")})]}),(0,p.jsxs)(c.default,{style:Q.addTaskForm,children:[(0,p.jsx)(k,{label:"Title",isRequired:!0,children:(0,p.jsx)(M.default,{value:C,onChangeText:function(e){return v(e)},style:Q.input})}),(0,p.jsx)(k,{label:"Description",isRequired:!1,children:(0,p.jsx)(M.default,{multiline:!0,numberOfLines:8,style:Q.textarea,value:S,onChangeText:function(e){return P(e)}})}),(0,p.jsx)(k,{label:"Date & Time",isRequired:!0,children:(0,p.jsxs)(c.default,{style:Q.dateTimePicker,children:[(0,p.jsxs)(g.default,{style:Q.dateTimePickerText,children:[null!=$?$:"dd.mm.yyyy"," ",null!=re?re:"hh:mm"]}),(0,p.jsxs)(c.default,{style:Q.dateTimeButtons,children:[(0,p.jsx)(f.default,{style:Q.dateTimeButton,onPress:function(){return we(!0)},children:(0,p.jsx)(g.default,{style:Q.dateTimeButtonText,children:"Date"})}),(0,p.jsx)(f.default,{style:Q.dateTimeButton,onPress:function(){return Te(!0)},children:(0,p.jsx)(g.default,{style:Q.dateTimeButtonText,children:"Time"})})]})]})}),(0,p.jsxs)(c.default,{style:Q.topFormRow,children:[(0,p.jsx)(k,{style:Q.taskDurationInput,label:"Duration",isRequired:!1,children:(0,p.jsx)(M.default,{value:K,onChangeText:function(e){return X(e)},style:Q.input,placeholder:"minutes",placeholderTextColor:"#808080"})}),(0,p.jsx)(k,{style:Q.taskTypeInput,label:"Type",isRequired:!1,children:(0,p.jsx)(z,{value:B,onTypeChange:W,style:Q.taskTypePicker,options:[{label:"Work",value:"work"},{label:"Education",value:"education"},{label:"Sport",value:"sport"},{label:"Other",value:"other"}],placeholder:"Select task",rightIconName:"arrow-icon.svg"})})]}),(0,p.jsx)(f.default,{style:[Q.button,Je&&{backgroundColor:"whitesmoke",borderColor:"#eee"}],disabled:!!Je,onPress:function(){if(!Je){var e={name:C,description:S,date:$,time:re,duration:parseInt(K),type:B,done:!1,favorite:!1};N([].concat((0,n.default)(T),[e])),v(""),P(""),X(""),W(""),ee(""),ie("")}},children:(0,p.jsx)(g.default,{style:[Q.buttonText,Je&&{color:"#ccc"}],children:"Add task"})})]}),(0,p.jsxs)(c.default,{style:F.container,children:[(0,p.jsxs)(c.default,{style:F.search,children:[(0,p.jsx)(M.default,{value:ce,onChangeText:function(e){return ge(e)},style:F.searchInput,placeholder:"Search",placeholderTextColor:"#808080"}),(0,p.jsx)(u.Image,{style:F.searchIcon,source:o(9508)}),(0,p.jsx)(c.default,{style:[ce?null:{display:"none"},F.crossIcon],children:(0,p.jsx)(f.default,{onPress:function(){return ge("")},children:(0,p.jsx)(u.Image,{style:[{width:16,height:16}],source:o(3565)})})})]}),(0,p.jsx)(c.default,{style:F.sortingContainer,children:(0,p.jsx)(z,{style:F.sorting,options:[{label:"Date",value:"date"},{label:"Duration",value:"duration"},{label:"Type",value:"type"}],onTypeChange:de,value:ae,rightIconName:"sort-icon.svg",placeholder:ae})}),(0,p.jsx)(j.default,{showsHorizontalScrollIndicator:!1,showsVerticalScrollIndicator:!1,horizontal:!0,children:(0,p.jsxs)(c.default,{style:F.filterContainer,children:[(0,p.jsxs)(f.default,{style:["all"===je&&{backgroundColor:"#eee"},F.filterButton],onPress:function(){return he("all")},children:[(0,p.jsx)(g.default,{children:"All"}),(0,p.jsx)(u.Image,{style:{width:16,height:16},source:o(7329)})]}),(0,p.jsxs)(f.default,{style:["favorite"===je&&{backgroundColor:"#eee"},F.filterButton],onPress:function(){return he("favorite")},children:[(0,p.jsx)(g.default,{children:"Favorite"}),(0,p.jsx)(u.Image,{style:{width:16,height:16},source:o(3376)})]}),(0,p.jsxs)(f.default,{style:["new"===je&&{backgroundColor:"#eee"},F.filterButton],onPress:function(){return he("new")},children:[(0,p.jsx)(g.default,{children:"New"}),(0,p.jsx)(u.Image,{style:{width:16,height:16},source:o(1625)})]}),(0,p.jsxs)(f.default,{style:["done"===je&&{backgroundColor:"#eee"},F.filterButton],onPress:function(){return he("done")},children:[(0,p.jsx)(g.default,{children:"Done"}),(0,p.jsx)(u.Image,{style:{width:16,height:16},source:o(4511)})]}),(0,p.jsxs)(f.default,{style:["done"===je&&{backgroundColor:"#eee"},F.filterButton],onPress:function(){return he("done")},children:[(0,p.jsx)(g.default,{children:"Done"}),(0,p.jsx)(u.Image,{style:{width:16,height:16},source:o(4511)})]})]})})]}),(0,p.jsx)(c.default,{style:G.list,children:be.map((function(e,t,r){var i,l,a,d,s,M;return(0,p.jsx)(c.default,{style:{zIndex:""+(r.length-t)},children:(0,p.jsxs)(c.default,{style:G.item,children:[(0,p.jsxs)(c.default,{style:G.leftButtons,children:[(0,p.jsx)(I,{checked:null==e?void 0:e.done,onToggleChecked:function(){return function(e){var t=(0,n.default)(T),o=t.findIndex((function(t){return t===e}));t[o].done=!e.done,N(t)}(e)},style:Q.checkbox}),(0,p.jsx)(f.default,{onPress:function(){return Ge(Fe?null:e)},children:(0,p.jsx)(u.Image,{style:[{width:16,height:16},!e.description&&{display:"none"},Fe===e&&{transform:[{rotate:"180deg"}]}],source:o(7675)})})]}),(0,p.jsxs)(c.default,{style:G.container,children:[(0,p.jsxs)(c.default,{style:G.topRow,children:[(0,p.jsx)(g.default,{style:[G.label,!(null!=e&&e.date)&&{display:"none"}],children:null!=(i=null==e?void 0:e.date)?i:"\u2013"}),(0,p.jsx)(g.default,{style:[G.label,!(null!=e&&e.time)&&{display:"none"}],children:null!=(l=null==e?void 0:e.time)?l:"\u2013"}),(0,p.jsx)(g.default,{style:[G.label,!(null!=e&&e.type)&&{display:"none"}],children:null!=(a=null==e?void 0:e.type)?a:"\u2013"}),(0,p.jsxs)(g.default,{style:[G.label,!(null!=e&&e.duration)&&{display:"none"}],children:[null!=(d=null==e?void 0:e.duration)?d:"\u2013"," minutes"]}),(0,p.jsxs)(c.default,{style:[G.label,!(null!=e&&e.favorite)&&{display:"none"}],children:[(0,p.jsx)(u.Image,{source:o(3376),style:{width:12,height:12}}),(0,p.jsx)(g.default,{style:{color:"#808080"},children:"favorite"})]})]}),(0,p.jsx)(c.default,{children:(0,p.jsx)(g.default,{style:G.title,children:null!=(s=null==e?void 0:e.name)?s:"\u2013"})}),(0,p.jsx)(b.default,{collapsed:!(Fe===e),children:(0,p.jsx)(g.default,{style:G.description,children:null!=(M=null==e?void 0:e.description)?M:"\u2013"})})]}),(0,p.jsxs)(c.default,{style:G.rightButtons,children:[(0,p.jsx)(f.default,{style:G.actionsModalButton,onPress:function(){return Be(e)},children:(0,p.jsx)(u.Image,{style:G.dotsIcon,source:o(6254)})}),(0,p.jsxs)(c.default,{style:[He===e?null:{display:"none"},G.actionsModal],children:[(0,p.jsxs)(f.default,{onPress:function(){return function(e){var t=(0,n.default)(T),o=t.findIndex((function(t){return t===e}));t[o].favorite=!t[o].favorite,N(t),Be(null)}(e)},style:G.actionsModalItem,children:[(0,p.jsx)(u.Image,{style:{width:20,height:20},source:o(3376)}),(0,p.jsx)(g.default,{children:e.favorite?"Remove from favorite":"Add to favorite"})]}),(0,p.jsxs)(f.default,{onPress:function(){return function(e){var t=(0,n.default)(T),o=t.findIndex((function(t){return t===e}));t.splice(o,1),N(t),Be(null)}(e)},style:G.actionsModalItem,children:[(0,p.jsx)(u.Image,{style:{width:20,height:20},source:o(9786)}),(0,p.jsx)(g.default,{children:"Delete"})]})]})]})]})})}))})]}),(0,p.jsx)(Y,{visible:Oe,dateTime:Ye,onDateTimeChange:Pe,onClose:function(){return we(!1)},onSubmit:Ee,style:[Oe?null:{display:"none"}],type:"date"}),(0,p.jsx)(Y,{visible:De,dateTime:ve,onDateTimeChange:Ae,onClose:function(){return Te(!1)},onSubmit:Re,style:[De?null:{display:"none"}],type:"time"})]}),(0,p.jsx)(x.default,{onPress:function(){return Be(null)},children:(0,p.jsx)(c.default,{style:[He?null:{display:"none"},{position:"absolute",backgroundColor:"red",top:0,left:0,width:"100%",height:"100%"}],children:"Text"})})]})}):null};(0,r.default)(J)},7972:(e,t,o)=>{e.exports=o.p+"static/media/Roboto-Light.03e629f6348896ffa23a.ttf"},245:(e,t,o)=>{e.exports=o.p+"static/media/Roboto-Medium.d2d7f0c01bffaa5ec8f7.ttf"},1698:(e,t,o)=>{e.exports=o.p+"static/media/Roboto-Regular.f25bd05915c1a3468d3d.ttf"},7329:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgMTEuMzMzM1Y5Ljk5OTk2SDExLjMzMzNWMTEuMzMzM0gyWk0zLjMzMzMzIDguNjY2NjNWNy4zMzMyOUgxMi42NjY3VjguNjY2NjNIMy4zMzMzM1pNNC42NjY2NyA1Ljk5OTk2VjQuNjY2NjNIMTRWNS45OTk5Nkg0LjY2NjY3WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg=="},7675:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iIzAwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoCiAgICAgICAgZD0iTTggMTAuNUM3LjkzNDQyIDEwLjUwMDggNy44Njk0MSAxMC40ODc5IDcuODA5MTMgMTAuNDYyQzcuNzQ4ODUgMTAuNDM2MiA3LjY5NDY1IDEwLjM5OCA3LjY1IDEwLjM1TDMuMTUgNS44NDk5OUMyLjk1IDUuNjQ5OTkgMi45NSA1LjMzOTk5IDMuMTUgNS4xMzk5OUMzLjM1IDQuOTM5OTkgMy42NiA0LjkzOTk5IDMuODYgNS4xMzk5OUw4LjAxIDkuMjg5OTlMMTIuMTUgNS4xNDk5OUMxMi4zNSA0Ljk0OTk5IDEyLjY2IDQuOTQ5OTkgMTIuODYgNS4xNDk5OUMxMy4wNiA1LjM0OTk5IDEzLjA2IDUuNjU5OTkgMTIuODYgNS44NTk5OUw4LjM2IDEwLjM2QzguMjYgMTAuNDYgOC4xMyAxMC41MSA4LjAxIDEwLjUxTDggMTAuNVoiCiAgICAgICAgZmlsbD0iIzgwODA4MCIgLz4KPC9zdmc+Cg=="},515:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuNjA0MTcgMi45MTY2M0wzLjk1ODM0IDcuMDgzMjlMMi4zOTU4NCA1LjUyMDc5IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjAuOTYxNTM4IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="},3565:(e,t,o)=>{e.exports=o.p+"static/media/cross-icon.bb9f2d7d43d013635dee.svg"},9786:(e,t,o)=>{e.exports=o.p+"static/media/delete-icon.2dfdcdff7fcda6158902.svg"},4511:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuMDAwMDIgNi42NjY1OUw4LjE3MjAyIDguMjk1OTJDOC4zMDY1OCA4LjM5Njg0IDguNDc0MzEgOC40NDMxNiA4LjY0MTU5IDguNDI1NkM4LjgwODg4IDguNDA4MDUgOC45NjMzNCA4LjMyNzkxIDkuMDc0MDIgOC4yMDEyNUwxMy4zMzMzIDMuMzMzMjUiIHN0cm9rZT0iIzgwODA4MCIgc3Ryb2tlLXdpZHRoPSIxLjMyMzMzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTE0IDcuOTk5ODlDMTQgOS4yNTM1OCAxMy42MDczIDEwLjQ3NTggMTIuODc3MSAxMS40OTQ4QzEyLjE0NjkgMTIuNTEzOSAxMS4xMTU4IDEzLjI3ODYgOS45Mjg2MSAxMy42ODE2QzguNzQxNDYgMTQuMDg0NiA3LjQ1NzkgMTQuMTA1NiA2LjI1ODIgMTMuNzQxNkM1LjA1ODUxIDEzLjM3NzcgNC4wMDI5NSAxMi42NDcxIDMuMjM5NzggMTEuNjUyNEMyLjQ3NjYxIDEwLjY1NzggMi4wNDQxOCA5LjQ0OTEgMi4wMDMyMSA4LjE5NjA5QzEuOTYyMjMgNi45NDMwNyAyLjMxNDc5IDUuNzA4NyAzLjAxMTM1IDQuNjY2MzNDMy43MDc5MSAzLjYyMzk3IDQuNzEzNDkgMi44MjU5OCA1Ljg4Njg0IDIuMzg0NDRDNy4wNjAyIDEuOTQyOSA4LjM0MjM5IDEuODc5OTkgOS41NTMzMyAyLjIwNDU2IiBzdHJva2U9IiM4MDgwODAiIHN0cm9rZS13aWR0aD0iMS4zMjMzMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo="},6254:(e,t,o)=>{e.exports=o.p+"static/media/dots-icon.5efd2595deb3fac365c8.svg"},1625:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjMzMzMgNy45OTk5NEwxMy43MDY3IDYuMTQ2NjFMMTMuOTMzMyAzLjY5MzI4TDExLjUyNjcgMy4xNDY2MUwxMC4yNjY3IDEuMDI2NjFMOCAxLjk5OTk0TDUuNzMzMzMgMS4wMjY2MUw0LjQ3MzMzIDMuMTQ2NjFMMi4wNjY2NiAzLjY4NjYxTDIuMjkzMzMgNi4xMzk5NUwwLjY2NjY2NCA3Ljk5OTk0TDIuMjkzMzMgOS44NTMyOEwyLjA2NjY2IDEyLjMxMzNMNC40NzMzMyAxMi44NTk5TDUuNzMzMzMgMTQuOTc5OUw4IDEzLjk5OTlMMTAuMjY2NyAxNC45NzMzTDExLjUyNjcgMTIuODUzM0wxMy45MzMzIDEyLjMwNjZMMTMuNzA2NyA5Ljg1MzI4TDE1LjMzMzMgNy45OTk5NFpNMTIuMzI2NyA5LjQwNjYxTDEyLjUgMTEuMjY2NkwxMC42NzMzIDExLjY3OTlMOS43MiAxMy4yODY2TDggMTIuNTQ2Nkw2LjI4IDEzLjI4NjZMNS4zMjY2NiAxMS42Nzk5TDMuNSAxMS4yNjY2TDMuNjczMzMgOS4zOTk5NUwyLjQ0IDcuOTk5OTRMMy42NzMzMyA2LjU4NjYxTDMuNSA0LjczMzI4TDUuMzI2NjYgNC4zMjY2MUw2LjI4IDIuNzE5OTRMOCAzLjQ1MzI4TDkuNzIgMi43MTMyOEwxMC42NzMzIDQuMzE5OTRMMTIuNSA0LjczMzI4TDEyLjMyNjcgNi41OTMyOEwxMy41NiA3Ljk5OTk0TDEyLjMyNjcgOS40MDY2MVpNNy4zMzMzMyA5Ljk5OTk0SDguNjY2NjZWMTEuMzMzM0g3LjMzMzMzVjkuOTk5OTRaTTcuMzMzMzMgNC42NjY2MUg4LjY2NjY2VjguNjY2NjFINy4zMzMzM1Y0LjY2NjYxWiIgZmlsbD0iIzgwODA4MCIvPgo8L3N2Zz4K"},9508:(e,t,o)=>{e.exports=o.p+"static/media/search-icon.04036839b06553668315.svg"},8676:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguMDAwMDIgOS41MjM4M0wxMS4wNDc2IDEyLjY1M0wxNC4wOTUzIDkuNTIzODNNOC4wMDAwMiA2LjQ3NjIxTDQuOTUyNCAzLjQyODU5TTQuOTUyNCAzLjQyODU5TDEuOTA0NzkgNi40NzM5Mk00Ljk1MjQgMy40Mjg1OVYxMi41NzE0TTExLjA0NzYgMy40Mjg1OVYxMi41NzE0IiBzdHJva2U9ImJsYWNrIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="},3376:(e,t,o)=>{e.exports=o.p+"static/media/star-icon.c4a9647ae4beac62e225.svg"}},t={};function o(r){var i=t[r];if(void 0!==i)return i.exports;var n=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.loaded=!0,n.exports}o.m=e,(()=>{var e=[];o.O=(t,r,i,n)=>{if(!r){var l=1/0;for(s=0;s<e.length;s++){for(var[r,i,n]=e[s],a=!0,d=0;d<r.length;d++)(!1&n||l>=n)&&Object.keys(o.O).every((e=>o.O[e](r[d])))?r.splice(d--,1):(a=!1,n<l&&(l=n));if(a){e.splice(s--,1);var u=i();void 0!==u&&(t=u)}}return t}n=n||0;for(var s=e.length;s>0&&e[s-1][2]>n;s--)e[s]=e[s-1];e[s]=[r,i,n]}})(),o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;o.t=function(r,i){if(1&i&&(r=this(r)),8&i)return r;if("object"===typeof r&&r){if(4&i&&r.__esModule)return r;if(16&i&&"function"===typeof r.then)return r}var n=Object.create(null);o.r(n);var l={};e=e||[null,t({}),t([]),t(t)];for(var a=2&i&&r;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((e=>l[e]=()=>r[e]));return l.default=()=>r,o.d(n,l),n}})(),o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),o.p="/5sem-react-native-todo/",(()=>{var e={179:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var i,n,[l,a,d]=r,u=0;if(l.some((t=>0!==e[t]))){for(i in a)o.o(a,i)&&(o.m[i]=a[i]);if(d)var s=d(o)}for(t&&t(r);u<l.length;u++)n=l[u],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(s)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=o.O(void 0,[397],(()=>o(7480)));r=o.O(r)})();
//# sourceMappingURL=main.489fd9c1.js.map