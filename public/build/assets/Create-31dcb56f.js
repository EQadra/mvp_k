import{C as n,o as d,c as u,a as s,u as e,w as r,F as c,Z as f,b as a,i as _,q as m,z as p,n as x}from"./app-45ec4fab.js";import{_ as b}from"./AdminLayout-4a32c7f5.js";import{_ as g}from"./PrimaryButton-fee3ac8a.js";import{_ as h,a as v,b as w}from"./TextInput-791d5218.js";import"./sweetalert2.all-2a96c036.js";import"./_plugin-vue_export-helper-c27b6911.js";const C={class:"w-full mx-auto py-4"},V={class:"flex justify-between"},$={class:"mt-6 max-w-md mx-auto bg-slate-100 shadow-lg rounded-lg p-6"},y=a("h1",{class:"text-2xl p-4"},"Crear Nuevo Permiso",-1),N={class:"flex items-center mt-4"},A={__name:"Create",setup(k){const t=n({name:""});return(i,o)=>(d(),u(c,null,[s(e(f),{title:"Create new permission"}),s(b,null,{default:r(()=>[a("div",C,[a("div",V,[s(e(_),{href:i.route("permissions.index"),class:"px-3 py-2 text-white font-semibold bg-indigo-500 hover:bg-indigo-700 rounded"},{default:r(()=>[m("Atras")]),_:1},8,["href"])]),a("div",$,[y,a("form",{onSubmit:o[1]||(o[1]=p(l=>e(t).post(i.route("permissions.store")),["prevent"]))},[a("div",null,[s(h,{for:"name",value:"Nombre"}),s(v,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:e(t).name,"onUpdate:modelValue":o[0]||(o[0]=l=>e(t).name=l),autofocus:"",autocomplete:"username"},null,8,["modelValue"]),s(w,{class:"mt-2",message:e(t).errors.name},null,8,["message"])]),a("div",N,[s(g,{class:x(["ml-4",{"opacity-25":e(t).processing}]),disabled:e(t).processing},{default:r(()=>[m(" Crear ")]),_:1},8,["class","disabled"])])],32)])])]),_:1})],64))}};export{A as default};