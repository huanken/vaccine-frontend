(this["webpackJsonpappstack-react"]=this["webpackJsonpappstack-react"]||[]).push([[4],{1025:function(e,t,a){},1030:function(e,t,a){"use strict";a.r(t);var n=a(27),r=a(0),l=a.n(r),c=a(5),i=a(11),s=a(1),o=a.n(s),u=a(2),m=a.n(u),d=l.a.createContext({}),b=a(3),p={tag:b.o,activeTab:o.a.any,className:o.a.string,cssModule:o.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={activeTab:a.props.activeTab},a}return Object(i.a)(t,e),t.getDerivedStateFromProps=function(e,t){return t.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},t.prototype.render=function(){var e=this.props,t=e.className,a=e.cssModule,n=e.tag,r=Object(b.l)(this.props,Object.keys(p)),i=Object(b.k)(m()("tab-content",t),a);return l.a.createElement(d.Provider,{value:{activeTabId:this.state.activeTab}},l.a.createElement(n,Object(c.a)({},r,{className:i})))},t}(r.Component),E=g;g.propTypes=p,g.defaultProps={tag:"div"};var f=a(6),h={tag:b.o,className:o.a.string,cssModule:o.a.object,tabId:o.a.any};function v(e){var t=e.className,a=e.cssModule,n=e.tabId,r=e.tag,i=Object(f.a)(e,["className","cssModule","tabId","tag"]),s=function(e){return Object(b.k)(m()("tab-pane",t,{active:n===e}),a)};return l.a.createElement(d.Consumer,null,(function(e){var t=e.activeTabId;return l.a.createElement(r,Object(c.a)({},i,{className:s(t)}))}))}v.propTypes=h,v.defaultProps={tag:"div"};a(1025);var z=a(17),I=a.n(z),j=a(39),y=a(862),k=a(865),x=a(866),O=a(870),T=a(863),N=a(873),C=a(367),M=a(20),S=a(26),w=a(42),D={register:function(e,t,a,n,r){var l={fullname:e,age:t,address:a,citizenId:n,dateInjection:r+" 00:00"};return w.a.post("relative",l)}},F=a(41),q=a(60),R=a(16),B=Object(R.connect)((function(e){return{}}),null)((function(e){var t=function(e,t){q.toastr.error(e,t,{timeOut:5e3,showCloseButton:!1,progressBar:!1,position:"top-right"})},a=Object(r.useState)({fullname:"",age:"",address:"",citizenId:"",date:""}),c=Object(n.a)(a,2),i=c[0],s=c[1];return l.a.createElement(y.a,{fluid:!0,className:"p-0"},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h1",{className:"h3 mb-3"},"\u0110\u0103ng k\xfd cho ng\u01b0\u1eddi th\xe2n"),l.a.createElement(k.a,null,l.a.createElement(x.a,{tyle:{paddingBottom:"3px"}},l.a.createElement("br",null),l.a.createElement("h4",{className:"card-subtitle text-muted"},"L\u01b0u \xfd:"),l.a.createElement("ul",{style:{marginLeft:"15px",marginTop:"15px"}},l.a.createElement("li",null," ",l.a.createElement("h6",null,"Vi\u1ec7c \u0111\u0103ng k\xfd th\xf4ng tin ho\xe0n to\xe0n b\u1ea3o m\u1eadt v\xe0 ph\u1ee5c v\u1ee5 cho chi\u1ebfn d\u1ecbch ti\xeam ch\u1ee7ng V\u1eafc xin COVID - 19")," "),l.a.createElement("li",null," ",l.a.createElement("h6",null,"Xin vui l\xf2ng ki\u1ec3m tra k\u1ef9 c\xe1c th\xf4ng tin b\u1eaft bu\u1ed9c")," "),l.a.createElement("li",null," ",l.a.createElement("h6",null,'B\u1eb1ng vi\u1ec7c nh\u1ea5n n\xfat "Confirm", b\u1ea1n ho\xe0n to\xe0n hi\u1ec3u v\xe0 \u0111\u1ed3ng \xfd ch\u1ecbu tr\xe1ch nhi\u1ec7m v\u1edbi c\xe1c th\xf4ng tin \u0111\xe3 cung c\u1ea5p.')," "))),l.a.createElement(O.a,{style:{paddingTop:"0px"}},l.a.createElement(M.d,{enableReinitialize:!0,initialValues:{fullname:i.fullname,age:i.age,address:i.address,citizenId:i.citizenId,date:i.date,startDate:new Date},validationSchema:S.c({fullname:S.e().required("Required").max(50,"Must be between 5 to 50 characters").min(5,"Must be between 5 to 50 characters"),address:S.e().required("Required").max(255,"Must be between 5 to 255").min(5,"Must be between 5 to 255"),age:S.b().required("Required").min(12,"Must be higher than 12"),citizenId:S.e().required().matches(/^[0-9]+$/,"Must be only digits").min(9,"Must be from 9 to 20 digits").max(20,"Must be from 9 to 20  digits"),date:S.a().min(S.d("startDate"),"Expiry Date must be in the future")}),onSubmit:function(){var e=Object(j.a)(I.a.mark((function e(a){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(a),e.prev=1,e.next=4,D.register(a.fullname,a.age,a.address,a.citizenId,a.date);case 4:n="Register For Injection",r="Register For Injection Successfully!",q.toastr.success(n,r,{timeOut:5e3,showCloseButton:!1,progressBar:!1,position:"top-right"}),s({fullname:"",age:"",address:"",citizenId:"",date:""}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),t("Register For Injection Fail!",e.t0.data.message);case 12:case"end":return e.stop()}var n,r}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},(function(e){var t=e.isSubmitting;return l.a.createElement(M.c,null,l.a.createElement(l.a.Fragment,null,l.a.createElement(T.a,null,l.a.createElement(N.a,{md:{size:"10",offset:1}},l.a.createElement(M.b,{label:"Fullname",bsSize:"lg",type:"text",name:"fullname",placeholder:"Enter Fullname",component:F.a}))),l.a.createElement(T.a,null,l.a.createElement(N.a,{md:{size:"10",offset:1}},l.a.createElement(M.b,{label:"Age",bsSize:"lg",type:"number",name:"age",placeholder:"Enter Age",component:F.a}))),l.a.createElement(T.a,null,l.a.createElement(N.a,{md:{size:"10",offset:1}},l.a.createElement(M.b,{label:"Address",bsSize:"lg",type:"text",name:"address",placeholder:"Enter Address",component:F.a}))),l.a.createElement(T.a,null,l.a.createElement(N.a,{md:{size:"10",offset:1}},l.a.createElement(M.b,{label:"CitizenID",bsSize:"lg",type:"number",name:"citizenId",placeholder:"Enter CitizenID",component:F.a}))),l.a.createElement(T.a,null,l.a.createElement(N.a,{md:{size:"10",offset:1}},l.a.createElement(M.b,{label:"Desired date to be injected",bsSize:"lg",type:"date",name:"date",component:F.a}))),l.a.createElement(T.a,{style:{marginTop:"20px"}},l.a.createElement(N.a,{md:"12",align:"center"},l.a.createElement(C.a,{className:"align-middle mr-5",color:"outline-danger",size:"lg",type:"button",onClick:function(){return s({fullname:"",age:"",address:"",citizenId:"",date:""})}},"Cancel"),l.a.createElement(C.a,{className:"align-middle mr-5",color:"outline-dark",size:"lg",type:"submit",disabled:t},"Confirm")))))})))))}));t.default=function(e){var t=Object(r.useState)("1"),a=Object(n.a)(t,2),c=a[0],i=a[1],s=function(e){c!==e&&i(e)};return l.a.createElement("div",null,l.a.createElement("div",{tabs:!0,className:"tabs"},l.a.createElement("button",{id:"nav-tabs1",className:m()({active:"1"===c}),onClick:function(){s("1")}},"\u0110\u0103ng k\xed cho b\u1ea3n th\xe2n"),l.a.createElement("button",{id:"nav-tabs2",className:m()({active:"2"===c}),onClick:function(){s("2")}},"\u0110\u0103ng k\xed cho ng\u01b0\u1eddi th\xe2n")),l.a.createElement(E,{activeTab:c},l.a.createElement(v,{tabId:"1"}),l.a.createElement(v,{tabId:"2"},l.a.createElement(B,null))))}}}]);
//# sourceMappingURL=4.a342da28.chunk.js.map