import{u as V,j as m,o as f,c as b,b as l,k as u,l as n,m as h,a as v}from"./vendor.0b20d460.js";import{_ as d,a as x,b as g}from"./FlashMessage.84c4b894.js";import{A as y,g as U}from"./index.744f18bf.js";const j=["onSubmit"],R={setup(_){const p=V();let s=m(null),o=m(null),r=m(null),t=m(null),i=m(null);function w(){i.value=null;const c={name:s.value,email:o.value,password:r.value,password_confirmation:t.value};y.registerUser(c).then(()=>p.push({name:"Dashboard"})).catch(a=>i.value=U(a))}return(c,a)=>(f(),b("form",{onSubmit:h(w,["prevent"])},[l(d,{type:"text",label:"Name",name:"name",modelValue:u(s),"onUpdate:modelValue":a[0]||(a[0]=e=>n(s)?s.value=e:s=e),placeholder:"Your name",class:"mb-2"},null,8,["modelValue"]),l(d,{type:"email",label:"Email",name:"email",modelValue:u(o),"onUpdate:modelValue":a[1]||(a[1]=e=>n(o)?o.value=e:o=e),placeholder:"Your email",class:"mb-2"},null,8,["modelValue"]),l(d,{type:"password",label:"Password",name:"password",modelValue:u(r),"onUpdate:modelValue":a[2]||(a[2]=e=>n(r)?r.value=e:r=e),placeholder:"Your password",class:"mb-2"},null,8,["modelValue"]),l(d,{type:"password",label:"Confirm Password",name:"password-confirm",modelValue:u(t),"onUpdate:modelValue":a[3]||(a[3]=e=>n(t)?t.value=e:t=e),placeholder:"Confirm your password",class:"mb-4"},null,8,["modelValue"]),l(x,{type:"submit",text:"Register"}),l(g,{error:u(i)},null,8,["error"])],40,j))}},k={class:"max-w-sm p-5 m-auto"},B=v("h2",{class:"mb-4 text-xl font-bold text-center"},"Register",-1),S={setup(_){return(p,s)=>(f(),b("div",k,[B,l(R,{class:"p-5 bg-white border rounded shadow"})]))}};export{S as default};
