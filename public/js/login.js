"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[535],{4178:(e,t,n)=>{n.d(t,{tp:()=>o,Qc:()=>f,vp:()=>v,p0:()=>F,Ux:()=>q});var r=n(6252),a=n(3577),l=["type"],u={inheritAttrs:!0};const o=Object.assign(u,{props:{type:{type:String,default:"submit"},text:{type:String,default:"Submit"}},setup:function(e){return function(t,n){return(0,r.wg)(),(0,r.iD)("button",(0,r.dG)({type:e.type},t.$attrs,{class:"px-2.5 py-1.5 border border-transparent text-xs rounded shadow-sm text-white bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-center transition"}),(0,a.zw)(e.text),17,l)}}});var i=n(2262),s=n(9963),p=["for"],c=["id","type","required","placeholder","autocomplete"],d={inheritAttrs:!0};const f=Object.assign(d,{props:{modelValue:{type:String,default:""},name:{type:String,required:!0},label:{type:String,default:""},type:{type:String,default:"text"},showLabel:{type:Boolean,default:!0},required:{type:Boolean,default:!1},placeholder:{type:String,default:null},autocomplete:{type:String,default:null}},emits:["update:modelValue"],setup:function(e,t){var n=t.emit,l=e,u=(0,i.Fl)({get:function(){return l.modelValue},set:function(e){n("update:modelValue",e)}});return function(t,n){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("label",{for:e.name,class:(0,a.C_)(["text-sm text-gray-500",{"sr-only":!e.showLabel}])},(0,a.zw)(e.label),11,p),(0,r.wy)((0,r._)("input",{id:e.name,"onUpdate:modelValue":n[0]||(n[0]=function(e){return(0,i.dq)(u)?u.value=e:null}),type:e.type,required:e.required,placeholder:e.placeholder,autocomplete:e.autocomplete,class:"block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"},null,8,c),[[s.YZ,(0,i.SU)(u)]])])}}});var m=n(4250),g=n(2119),y={"aria-label":"Pagination",class:"flex items-center justify-between py-4"},b={class:"text-sm text-gray-500"},h={class:"flex"};const v={props:{action:{type:String,required:!0},path:{type:String,default:null},meta:{type:Object,required:!0},links:{type:Object,required:!0}},setup:function(e){var t=e,n=(0,m.oR)(),l=(0,g.tv)();function u(){n.dispatch(t.action,t.links.first).then((function(){t.path&&l.push({name:t.path,query:{page:1}})}))}function o(){n.dispatch(t.action,t.links.prev).then((function(){t.path&&l.push({name:t.path,query:{page:t.meta.current_page-1}})}))}function i(){n.dispatch(t.action,t.links.next).then((function(){t.path&&l.push({name:t.path,query:{page:t.meta.current_page+1}})}))}function s(){n.dispatch(t.action,t.links.last).then((function(){t.path&&l.push({name:t.path,query:{page:t.meta.last_page}})}))}return function(t,n){return(0,r.wg)(),(0,r.iD)("div",y,[(0,r._)("p",b," Page "+(0,a.zw)(e.meta.current_page)+" of "+(0,a.zw)(e.meta.last_page),1),(0,r._)("div",h,[e.links.prev?((0,r.wg)(),(0,r.iD)("button",{key:0,rel:"first",type:"button",onClick:u,class:"px-2.5 py-1.5 m-1 text-sm text-pink-400 border rounded hover:text-pink-500"}," First ")):(0,r.kq)("",!0),e.links.prev?((0,r.wg)(),(0,r.iD)("button",{key:1,rel:"prev",type:"button",onClick:o,class:(0,a.C_)([{"rounded-r":!e.links.next},"px-2.5 py-1.5 m-1 text-sm text-pink-400 border rounded hover:text-pink-500"])}," Previous ",2)):(0,r.kq)("",!0),e.links.next?((0,r.wg)(),(0,r.iD)("button",{key:2,rel:"next",type:"button",onClick:i,class:(0,a.C_)([{"rounded-l":!e.links.prev},"px-2.5 py-1.5 m-1 text-sm text-pink-400 border rounded hover:text-pink-500"])}," Next ",2)):(0,r.kq)("",!0),e.links.next?((0,r.wg)(),(0,r.iD)("button",{key:3,rel:"last",type:"button",onClick:s,class:"px-2.5 py-1.5 m-1 text-sm text-pink-400 border rounded hover:text-pink-500"}," Last ")):(0,r.kq)("",!0)])])}}};var x={key:"message",class:"mt-2 text-sm text-green-500"},w={key:"error",class:"mt-2 text-sm text-red-500"},k={class:"mt-2 text-sm text-red-500",key:"error-list"},S={class:"font-bold capitalize"},_={class:"ml-2"};const q={props:{message:{type:String,default:null},error:{type:[Object,String],default:null}},setup:function(e){var t=e,n=(0,i.Fl)((function(){return t.error&&"string"!==u(t.error)?Object.keys(t.error):null}));function l(e){return t.error[e]}function u(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}return function(t,o){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(s.W3,{name:"fade"},{default:(0,r.w5)((function(){return[e.message?((0,r.wg)(),(0,r.iD)("p",x,(0,a.zw)(e.message),1)):(0,r.kq)("",!0),e.error&&"string"===u(e.error)?((0,r.wg)(),(0,r.iD)("p",w,(0,a.zw)(e.error),1)):(0,r.kq)("",!0),"object"===u(e.error)?((0,r.wg)(),(0,r.iD)("ul",k,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,i.SU)(n),(function(e){return(0,r.wg)(),(0,r.iD)("li",{key:e},[(0,r._)("span",S,(0,a.zw)((t=e,t.replace("_"," "))),1),(0,r._)("ul",_,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(l(e),(function(e,t){return(0,r.wg)(),(0,r.iD)("li",{key:"".concat(t,"-error")},(0,a.zw)(e),1)})),128))])]);var t})),128))])):(0,r.kq)("",!0)]})),_:1})])}}};var U=n(7181),D=n(6532);const C=function(e){return D.Z.post(e.endpoint,e.file)};var V=["onSubmit"],W={class:"mb-4"},j={for:"file",class:"sr-only"},z=["accept"];const F={props:{fileTypes:{type:Array,default:null},endpoint:{type:String,required:!0},label:{type:String,default:""}},emits:["file-uploaded"],setup:function(e,t){var n=t.emit,l=e,u=(0,i.iH)(null),p=(0,i.iH)(null),c=(0,i.iH)(null);function d(){c.value=null,p.value=null}function f(e){d(),u.value=e.target.files[0]}function m(){var e={},t=new FormData;t.append("file",u.value),e.file=t,e.endpoint=l.endpoint,d(),C(e).then((function(){p.value="File uploaded.",n("file-uploaded")})).catch((function(e){return c.value=(0,U.b)(e)}))}return function(t,n){return(0,r.wg)(),(0,r.iD)("form",{onSubmit:(0,s.iM)(m,["prevent"])},[(0,r._)("div",W,[(0,r._)("label",j,(0,a.zw)(e.label),1),(0,r._)("input",{type:"file",accept:e.fileTypes,onChange:f,id:"file"},null,40,z)]),(0,r.Wm)((0,i.SU)(o),{text:"Upload"}),(0,r.Wm)((0,i.SU)(q),{message:p.value,error:c.value},null,8,["message","error"])],40,V)}}}},6039:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var r=n(6252),a=n(7757),l=n.n(a),u=n(9963),o=n(2262),i=n(2119),s=n(4250),p=n(7181),c=n(2380),d=n(4178);function f(e,t,n,r,a,l,u){try{var o=e[l](u),i=o.value}catch(e){return void n(e)}o.done?t(i):Promise.resolve(i).then(r,a)}function m(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var l=e.apply(t,n);function u(e){f(l,r,a,u,o,"next",e)}function o(e){f(l,r,a,u,o,"throw",e)}u(void 0)}))}}var g=["onSubmit"],y={class:"flex justify-between"},b=(0,r.Uk)(" Forgot your password? ");const h={setup:function(e){var t=(0,i.tv)(),n=(0,s.oR)(),a=(0,o.iH)(null),f=(0,o.iH)(null),h=(0,o.iH)(null);function v(){return x.apply(this,arguments)}function x(){return(x=m(l().mark((function e(){var r,u;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h.value=null,r={email:a.value,password:f.value},e.prev=2,e.next=5,c.Z.login(r);case 5:return e.next=7,n.dispatch("auth/getAuthUser");case 7:if(!n.getters["auth/authUser"]){e.next=13;break}n.dispatch("auth/setGuest",{value:"isNotGuest"}),t.push({name:"Dashboard"}),e.next=16;break;case 13:throw(u=Error("Unable to fetch user after login, check your API settings.")).name="Fetch User",u;case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(2),h.value=(0,p.b)(e.t0);case 21:case"end":return e.stop()}}),e,null,[[2,18]])})))).apply(this,arguments)}return function(e,t){var n=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("form",{onSubmit:(0,u.iM)(v,["prevent"])},[(0,r.Wm)((0,o.SU)(d.Qc),{type:"email",label:"Email",name:"email",modelValue:(0,o.SU)(a),"onUpdate:modelValue":t[0]||(t[0]=function(e){return(0,o.dq)(a)?a.value=e:a=e}),autocomplete:"email",placeholder:"Your email",class:"mb-2"},null,8,["modelValue"]),(0,r.Wm)((0,o.SU)(d.Qc),{type:"password",label:"Password",name:"password",modelValue:(0,o.SU)(f),"onUpdate:modelValue":t[1]||(t[1]=function(e){return(0,o.dq)(f)?f.value=e:f=e}),placeholder:"Your password",class:"mb-4"},null,8,["modelValue"]),(0,r._)("div",y,[(0,r.Wm)((0,o.SU)(d.tp),{type:"submit",text:"Login"}),(0,r.Wm)(n,{to:{name:"ForgotPassword"},class:"text-sm base-link"},{default:(0,r.w5)((function(){return[b]})),_:1})]),(0,r.Wm)((0,o.SU)(d.Ux),{error:(0,o.SU)(h)},null,8,["error"])],40,g)}}};var v={class:"max-w-sm p-5 m-auto"},x=(0,r._)("h2",{class:"mb-4 text-xl font-bold text-center"},"Login",-1),w={class:"mt-2 text-center text-gray-500"},k=(0,r.Uk)(" Register for an account ");const S={setup:function(e){return function(e,t){var n=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",v,[x,(0,r.Wm)(h,{class:"p-5 bg-white border rounded shadow"}),(0,r._)("p",w,[(0,r.Wm)(n,{to:{name:"Register"},class:"text-pink-500 transition hover:text-pink-600"},{default:(0,r.w5)((function(){return[k]})),_:1})])])}}}}}]);