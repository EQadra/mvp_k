import{h as r,e as Y,k as J,o as E,c as j,b as e,s as K,q as k,a as _,u as f,w as Q,j as s,v as I,t as u,z as C,A as n,F as X,B as ee}from"./app-45ec4fab.js";import{S as te}from"./sweetalert2.all-2a96c036.js";import{P as c,D as v,c as oe,s as x,a as M}from"./dataTables.select-0eae1207.js";import{L as R}from"./vue3-datepicker-7c15d454.js";const ae={className:"flex justify-center"},le={className:"w-full"},se={className:"bg-blue-400 border border-blue-400 text-blue-700 px-4 py-3 rounded relative",role:"alert"},ne={className:"flex justify-around items-center"},de=e("i",{className:"fa-solid fa-circle-plus mx-1"},null,-1),re=e("i",{className:"fa-solid fa-circle-plus mx-1"},null,-1),ie=e("i",{className:"fa-solid fa-circle-plus mx-1"},null,-1),ue={class:"flex justify-center my-3"},me={class:"w-full"},ce={class:"bg-gray-400 border border-blue-400 text-blue-700 px-4 py-3 rounded relative",role:"alert"},pe={class:"flex justify-between items-center"},be=e("label",{for:"datepicker",class:"block text-sm font-medium text-gray-700 mr-3"},"Selecciona una fecha",-1),ge={class:"flex items-center"},_e=e("button",{type:"button",class:"ml-2 px-4 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:ring-blue-300"}," Botón ",-1),fe={class:"flex justify-center my-3"},ve={class:"w-full"},xe={class:"bg-gray-400 border border-blue-400 text-blue-700 px-4 py-3 rounded relative",role:"alert"},ye={class:"flex justify-between items-center"},he=e("label",{for:"startDate",class:"block text-sm font-medium text-gray-700 mr-3"},"Desde",-1),Ne=e("label",{for:"endDate",class:"block text-sm font-medium text-gray-700 ml-4 mr-3"},"Hasta",-1),we={className:"flex justify-end my-3 mr-9"},ke={className:"md:col-span-12 lg:col-span-12 col-span-12"},Ie={class:"overflow-x-auto my-5"},Ce=e("thead",null,[e("tr",null,[e("th",{className:"px-4 py-2"},"Id"),e("th",{className:"px-4 py-2"},"codigo"),e("th",{className:"px-4 py-2"},"grupo"),e("th",{className:"px-4 py-2"}," administrador "),e("th",{className:"px-4 py-2"},"dni"),e("th",{className:"px-4 py-2"},"asociado"),e("th",{className:"px-4 py-2"},"modelo"),e("th",{className:"px-4 py-2"},"interior_del_local "),e("th",{className:"px-4 py-2"},"garantia"),e("th",{className:"px-4 py-2"},"estado")])],-1),Re={id:"default-modal",class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto"},Ue={class:"bg-white rounded-lg shadow-lg max-w-md w-full h-full overflow-y-auto"},Ve={class:"flex items-center justify-between p-4 border-b"},Oe={class:"text-xl font-semibold text-gray-900"},De=e("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})],-1),Ae=e("span",{class:"sr-only"},"Cerrar Modal",-1),Se=[De,Ae],Ee={class:"p-4 space-y-4 overflow-y-auto"},je={className:"my-2"},Me={className:"text-xl font-thin mb-4"},Le={className:"mb-4"},Te=e("label",{for:"codigo",className:"block mb-1"},"CODIGO",-1),Be=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese el nombre del codigo.",-1),$e={className:"mb-4"},ze=e("label",{for:"grupo",className:"block mb-1"},"GRUPO",-1),Pe=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese el nombre del grupo.",-1),Fe={className:"mb-4"},qe=e("label",{for:"administrador",className:"block mb-1"},"ADMINISTRADOR",-1),Ge=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese el nombre del administrador.",-1),He={className:"mb-4"},Ze=e("label",{for:"dni",className:"block mb-1"},"DNI",-1),We=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese dni.",-1),Ye={className:"mb-4"},Je=e("label",{for:"ruc",className:"block mb-1"},"RUC",-1),Ke=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese ruc.",-1),Qe={className:"mb-4"},Xe=e("label",{for:"asociado",className:"block mb-1"},"ASOCIADO",-1),et=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese el nombre del asociado.",-1),tt={className:"mb-4"},ot=e("label",{for:"modelo",className:"block mb-1"},"MODELO",-1),at=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese el nombre del modelo.",-1),lt={className:"mb-4"},st=e("label",{for:"fachada",className:"block mb-1"},"FACHADA",-1),nt=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese fachada.",-1),dt={className:"mb-4"},rt=e("label",{for:"interior_del_local",className:"block mb-1"},"INTERIOR DEL LOCAL",-1),it=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese Interior del Local.",-1),ut={className:"mb-4"},mt=e("label",{for:"correo",className:"block mb-1"},"CORREO",-1),ct=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese garantia.",-1),pt={className:"mb-4"},bt=e("label",{for:"numero_operacion",className:"block mb-1"},"CELULAR",-1),gt=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese el número de operación.",-1),_t={className:"mb-4"},ft=e("label",{for:"monto_garantia",className:"block mb-1"},"RUC",-1),vt=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese el monto de garantia.",-1),xt={className:"mb-4"},yt=e("label",{for:"tipo_negocio",className:"block mb-1"},"RAZON SOCIAL",-1),ht=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese el tipo de negocio.",-1),Nt={className:"mb-4"},wt=e("label",{for:"estado",className:"block mb-1"},"CORREO",-1),kt=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese el estado.",-1),It={className:"mb-4"},Ct=e("label",{for:"detalle_nombre",className:"block mb-1"},"RAZON SOCIAL",-1),Rt=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese el detalle del nombre.",-1),Ut={className:"mb-4"},Vt=e("label",{for:"detalle_nombre",className:"block mb-1"},"CORREO",-1),Ot=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese el agente encargado de la venta.",-1),Dt={class:"flex items-center justify-end p-4 border-t"},At=e("button",{type:"submit",class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"},"Aceptar",-1),St={id:"default-modal",class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto"},Et={class:"bg-white rounded-lg shadow-lg max-w-md w-full h-full overflow-y-auto"},jt={class:"flex items-center justify-between p-4 border-b"},Mt={class:"text-xl font-semibold text-gray-900"},Lt=e("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})],-1),Tt=e("span",{class:"sr-only"},"Cerrar Modal",-1),Bt=[Lt,Tt],$t={class:"p-4 space-y-4 overflow-y-auto"},zt={className:"my-2"},Pt={className:"text-xl font-thin mb-4"},Ft={className:"mb-4"},qt=e("label",{for:"codigo",className:"block mb-1"},"CODIGO",-1),Gt=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese el nombre del codigo.",-1),Ht={className:"mb-4"},Zt=e("label",{for:"grupo",className:"block mb-1"},"GRUPO",-1),Wt=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese el nombre del grupo.",-1),Yt={className:"mb-4"},Jt=e("label",{for:"administrador",className:"block mb-1"},"ADMINISTRADOR",-1),Kt=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese el nombre del administrador.",-1),Qt={className:"mb-4"},Xt=e("label",{for:"dni",className:"block mb-1"},"DNI",-1),eo=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese dni.",-1),to={className:"mb-4"},oo=e("label",{for:"ruc",className:"block mb-1"},"RUC",-1),ao=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese ruc.",-1),lo={className:"mb-4"},so=e("label",{for:"asociado",className:"block mb-1"},"ASOCIADO",-1),no=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese el nombre del asociado.",-1),ro={className:"mb-4"},io=e("label",{for:"modelo",className:"block mb-1"},"MODELO",-1),uo=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese el nombre del modelo.",-1),mo={className:"mb-4"},co=e("label",{for:"fachada",className:"block mb-1"},"FACHADA",-1),po=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese fachada.",-1),bo={className:"mb-4"},go=e("label",{for:"interior_del_local",className:"block mb-1"},"INTERIOR DEL LOCAL",-1),_o=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese Interior del Local.",-1),fo={className:"mb-4"},vo=e("label",{for:"correo",className:"block mb-1"},"CORREO",-1),xo=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese garantia.",-1),yo={className:"mb-4"},ho=e("label",{for:"numero_operacion",className:"block mb-1"},"CELULAR",-1),No=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese el número de operación.",-1),wo={className:"mb-4"},ko=e("label",{for:"monto_garantia",className:"block mb-1"},"RUC",-1),Io=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese el monto de garantia.",-1),Co={className:"mb-4"},Ro=e("label",{for:"tipo_negocio",className:"block mb-1"},"RAZON SOCIAL",-1),Uo=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese el tipo de negocio.",-1),Vo={className:"mb-4"},Oo=e("label",{for:"estado",className:"block mb-1"},"CORREO",-1),Do=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese el estado.",-1),Ao={className:"mb-4"},So=e("label",{for:"detalle_nombre",className:"block mb-1"},"RAZON SOCIAL",-1),Eo=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese el detalle del nombre.",-1),jo={className:"mb-4"},Mo=e("label",{for:"detalle_nombre",className:"block mb-1"},"CORREO",-1),Lo=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese el agente encargado de la venta.",-1),To={class:"flex items-center justify-end p-4 border-t"},Bo=e("button",{type:"submit",class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"},"Aceptar",-1),$o={id:"default-modal",class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto"},zo={class:"bg-white rounded-lg shadow-lg max-w-md w-full h-screen-70 overflow-y-auto"},Po={class:"flex items-center justify-between p-4 border-b"},Fo={class:"text-xl font-semibold text-gray-900"},qo=e("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})],-1),Go=e("span",{class:"sr-only"},"Cerrar Modal",-1),Ho=[qo,Go],Zo={class:"p-4 space-y-4 overflow-y-auto"},Wo={class:"my-2"},Yo={class:"text-xl font-thin mb-4"},Jo=e("div",{class:"mb-4"},[e("label",{for:"documento",class:"block text-sm font-medium text-gray-700"},"Subir documento"),e("input",{type:"file",id:"documento",name:"documento",class:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"})],-1),Ko={class:"flex items-center justify-end p-4 border-t"},Qo=e("button",{type:"submit",class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"},"Subir Documento",-1),aa={__name:"Index",props:{datos:Array},setup(L){c.use(v),c.use(v);const T=L,i=r(),U=r([]),V=r([]),y=r([]),B=r(!1),p=r(!1),O=r(""),m=r(!1),b=r(""),h=r(!1),D=r(new Date),N=r(new Date),w=r(new Date),g=r(!1),$=d=>{modalTitleUpload.value=d,g.value=!0,console.log("mensjae de exito")};Y(()=>{B.value=!0,i.value.dt.on("deselect",q),i.value.dt.on("deselect",A)}),J(()=>{y.value=T.datos,console.log(y)});const l=r({id:"",codigo:"",grupo:"",administrador:"",dni:"",ruc:"",asociado:"",modelo:"",fachada:"",interior_del_local:"",garantia:"",numero_operacion:"",monto_garantia:"",tipo_negocio:"",estado:"",detalle_nombre:"",agente_encargado_de_venta:""}),a=r({id:"",codigo:"",grupo:"",administrador:"",dni:"",ruc:"",asociado:"",modelo:"",fachada:"",interior_del_local:"",garantia:"",numero_operacion:"",monto_garantia:"",tipo_negocio:"",estado:"",detalle_nombre:"",agente_encargado_de_venta:""});c.use(v),c.use(v),U.value=[{data:null,render:function(d,t,o,S){return S.row+1}},{data:"codigo"},{data:"grupo"},{data:"administrador"},{data:"dni"},{data:"asociado"},{data:"modelo"},{data:"interior_del_local"},{data:"garantia"},{data:"estado"}],V.value=[{title:"Tiendas",extend:"excelHtml5",text:'<i class="fa-solid fa-file-excel"></i> Excel',className:"bg-green-500 text-white px-4 py-2 rounded my-2 hover:bg-green-600 focus:outline-none"},{title:"Tiendas",extend:"print",text:'<i class="fa-solid fa-print"></i> PRINT',className:"bg-gray-800 text-white px-4 py-2 rounded my-2 hover:bg-gray-900 focus:outline-none"},{title:"Tiendas",extend:"copy",text:'<i class="fa-solid fa-copy"></i> COPY',className:"bg-gray-400 text-white px-4 py-2 rounded my-2 hover:bg-gray-500 focus:outline-none"}];const z=()=>{const d=i.value.dt.rows({selected:!0}).data().toArray();if(d.length>0){const t=d[0].id,o=d[0].contacto;te.mixin({buttonStyling:!0}).fire({title:"¿Está seguro de querer borrar el registro "+o+":"+t+"?",icon:"question",showCancelButton:!0,confirmButtonText:'<i class="fa fa-solid fa-check"></i> Sí, borrar',cancelButtonText:'<i class="fa fa-solid fa-times"></i> Cancelar'}).then(W=>{W.isConfirmed&&oe(plataforma,"https://reportes.kingtech.pe/stores"+t,"")})}else x("Debe seleccionar una fila antes de poder borrarla","error")},P=d=>{O.value=d,p.value=!0,console.log("mensjae de exito")},F=d=>{if(i.value.dt.rows({selected:!0}).count()===0){x("Debe seleccionar una fila antes de editar","error");return}const o=i.value.dt.rows({selected:!0}).data().toArray()[0];if(!o){x("No se encontraron datos para la fila seleccionada","error");return}a.value.codigo=o.codigo,a.value.grupo=o.grupo,a.value.administrador=o.administrador,a.value.dni=o.dni,a.value.ruc=o.ruc,a.value.asociado=o.asociado,a.value.modelo=o.modelo,a.value.fachada=o.fachada,a.value.interior_del_local=o.interior_del_local,a.value.garantia=o.garantia,a.value.numero_operacion=o.numero_operacion,a.value.monto_garantia=o.monto_garantia,a.value.tipo_negocio=o.tipo_negocio,a.value.estado=o.estado,a.value.detalle_nombre=o.detalle_nombre,a.value.agente_encargado_de_venta=o.agente_encargado_de_venta,console.log(a),b.value=d,m.value=!0},A=d=>{const t=i.value.dt.rows({selected:!0}).count();h.value=t>0},q=d=>{const t=i.value.dt.rows({selected:!0}).count();h.value=t>0},G=()=>{const d=i.value.dt.rows({selected:!0}).data().toArray();if(d.length>0){const t=d[0];a.value.codigo=t.codigo,a.value.grupo=t.grupo,a.value.administrador=t.administrador,a.value.dni=t.dni,a.value.ruc=t.ruc,a.value.asociado=t.asociado,a.value.estado=t.estado,a.value.fachada=t.fachada,a.value.interior_del_local=t.interior_del_local,a.value.garantia=t.garantia,a.value.numero_operacion=t.numero_operacion,a.value.monto_garantia=t.monto_garantia,a.value.tipo_negocio=t.tipo_negocio,a.value.estado=t.estado,a.value.detalle_nombre=t.detalle_nombre,a.value.agente_encargado_de_venta=t.agente_encargado_de_venta,console.log(a),M("PUT",a.value,"https://reportes.kingtech.pe/stores/"+id,"")}else x("debe selccionar uan fila antes de poder editarla","error")},H=()=>{console.log(l),M("POST",l.value,"https://reportes.kingtech.pe/stores",""),l.value.id,l.value.codigo,l.value.grupo,l.value.administrador,l.value.dni,l.value.ruc,l.value.asociado,l.value.estado,l.value.modelo,l.value.fachada,l.value.interior_del_local,l.value.garantia,l.value.numero_operacion,l.value.monto_garantia,l.value.tipo_negocio,l.value.garantia,l.value.estado,l.value.detalle_nombre,l.value.agente_encargado_de_venta,p.value=!1},Z=()=>{const d=new FormData;d.append("file",fileInput.value.files[0]),ee.post("/api/importar-clientes",d,{headers:{"Content-Type":"multipart/form-data"}}).then(t=>{console.log("Archivo importado correctamente:",t.data.message)}).catch(t=>{console.error("Error al importar archivo:",t)})};return(d,t)=>(E(),j(X,null,[e("div",ae,[e("div",le,[e("div",se,[e("div",ne,[h.value?K("",!0):(E(),j("button",{key:0,"data-modal-target":"default-modal",onClick:t[0]||(t[0]=o=>P("Crear")),"data-modal-toggle":"default-modal",className:"block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",type:"button"}," Crear Registro ")),e("button",{onClick:t[1]||(t[1]=o=>F("Editar")),className:" btn btn-lg block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",type:"button"},[de,k("Editar Registro ")]),e("button",{onClick:t[2]||(t[2]=o=>$("Subir Documento en Excel")),className:" btn btn-lg block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",type:"button"},[re,k("Subir Excel ")]),e("button",{onClick:t[3]||(t[3]=o=>z()),className:"btn btn-lg block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",type:"button"},[ie,k(" Borrar Registro ")])])])])]),e("div",ue,[e("div",me,[e("div",ce,[e("div",pe,[be,e("div",ge,[_(f(R),{modelValue:D.value,"onUpdate:modelValue":t[4]||(t[4]=o=>D.value=o),id:"datepicker",class:"block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},null,8,["modelValue"]),_e])])])])]),e("div",fe,[e("div",ve,[e("div",xe,[e("div",ye,[he,_(f(R),{modelValue:N.value,"onUpdate:modelValue":t[5]||(t[5]=o=>N.value=o),id:"startDate",class:"block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},null,8,["modelValue"]),Ne,_(f(R),{modelValue:w.value,"onUpdate:modelValue":t[6]||(t[6]=o=>w.value=o),id:"endDate",class:"block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},null,8,["modelValue"]),e("button",{type:"button",class:"ml-4 px-4 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:ring-blue-300",onClick:t[7]||(t[7]=o=>d.filterByDates(N.value,w.value))}," Filtrar ")])])])]),e("div",we,[e("div",ke,[e("div",Ie,[_(f(c),{data:y.value,columns:U.value,ref_key:"table",ref:i,class:"display",options:{select:!0,responsive:!0,autoWidth:!1,dom:"Bfrtip",buttons:V.value,pageLength:10},onSelect:A},{default:Q(()=>[Ce]),_:1},8,["data","columns","options"])])])]),s(e("div",Re,[e("div",Ue,[e("div",Ve,[e("h3",Oe,u(b.value),1),e("button",{onClick:t[8]||(t[8]=o=>m.value=!1),type:"button",class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center"},Se)]),e("div",Ee,[e("form",{onSubmit:C(G,["prevent"]),classNaem:"max-w-lg mx-auto border border-gray-300 p-6 my-5 rounded-lg overflow-y-auto"},[e("div",je,[e("h2",Me,u(b.value),1)]),e("div",Le,[Te,s(e("input",{type:"text",id:"codigo",className:"form-input w-full","onUpdate:modelValue":t[9]||(t[9]=o=>a.value.codigo=o)},null,512),[[n,a.value.codigo]]),Be]),e("div",$e,[ze,s(e("input",{type:"text",id:"grupo",className:"form-input w-full","onUpdate:modelValue":t[10]||(t[10]=o=>a.value.grupo=o)},null,512),[[n,a.value.grupo]]),Pe]),e("div",Fe,[qe,s(e("input",{type:"text",id:"administrador",className:"form-input w-full","onUpdate:modelValue":t[11]||(t[11]=o=>a.value.administrador=o)},null,512),[[n,a.value.administrador]]),Ge]),e("div",He,[Ze,s(e("input",{type:"text",id:"dni",className:"form-input w-full","onUpdate:modelValue":t[12]||(t[12]=o=>a.value.dni=o)},null,512),[[n,a.value.dni]]),We]),e("div",Ye,[Je,s(e("input",{type:"text",id:"ruc",className:"form-input w-full","onUpdate:modelValue":t[13]||(t[13]=o=>a.value.ruc=o)},null,512),[[n,a.value.ruc]]),Ke]),e("div",Qe,[Xe,s(e("input",{type:"text",id:"asociado",className:"form-input w-full","onUpdate:modelValue":t[14]||(t[14]=o=>a.value.asociado=o)},null,512),[[n,a.value.asociado]]),et]),e("div",tt,[ot,s(e("input",{type:"text",id:"modelo",className:"form-input w-full","onUpdate:modelValue":t[15]||(t[15]=o=>a.value.modelo=o)},null,512),[[n,a.value.modelo]]),at]),e("div",lt,[st,s(e("input",{type:"text",id:"fachada",className:"form-input w-full","onUpdate:modelValue":t[16]||(t[16]=o=>a.value.fachada=o)},null,512),[[n,a.value.fachada]]),nt]),e("div",dt,[rt,s(e("input",{type:"text",id:"interior_del_local",className:"form-input w-full","onUpdate:modelValue":t[17]||(t[17]=o=>a.value.interior_del_local=o)},null,512),[[n,a.value.interior_del_local]]),it]),e("div",ut,[mt,s(e("input",{type:"text",id:"correo",className:"form-input w-full","onUpdate:modelValue":t[18]||(t[18]=o=>a.value.garantia=o)},null,512),[[n,a.value.garantia]]),ct]),e("div",pt,[bt,s(e("input",{type:"text",id:"numero_operacion",className:"form-input w-full","onUpdate:modelValue":t[19]||(t[19]=o=>a.value.numero_operacion=o)},null,512),[[n,a.value.numero_operacion]]),gt]),e("div",_t,[ft,s(e("input",{type:"text",id:"monto_garantia",className:"form-input w-full","onUpdate:modelValue":t[20]||(t[20]=o=>a.value.monto_garantia=o)},null,512),[[n,a.value.monto_garantia]]),vt]),e("div",xt,[yt,s(e("input",{type:"text",id:"tipo_negocio",className:"form-input w-full","onUpdate:modelValue":t[21]||(t[21]=o=>a.value.tipo_negocio=o)},null,512),[[n,a.value.tipo_negocio]]),ht]),e("div",Nt,[wt,s(e("input",{type:"text",id:"estado",className:"form-input w-full","onUpdate:modelValue":t[22]||(t[22]=o=>a.value.estado=o)},null,512),[[n,a.value.estado]]),kt]),e("div",It,[Ct,s(e("input",{type:"text",id:"detalle_nombre",className:"form-input w-full","onUpdate:modelValue":t[23]||(t[23]=o=>a.value.detalle_nombre=o)},null,512),[[n,a.value.detalle_nombre]]),Rt]),e("div",Ut,[Vt,s(e("input",{type:"text",id:"detalle_nombre",className:"form-input w-full","onUpdate:modelValue":t[24]||(t[24]=o=>a.value.agente_encargado_de_venta=o)},null,512),[[n,a.value.agente_encargado_de_venta]]),Ot]),e("div",Dt,[At,e("button",{onClick:t[25]||(t[25]=o=>m.value=!1),type:"button",class:"ml-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 px-5 py-2.5"},"Rechazar")])],32)])])],512),[[I,m.value]]),s(e("div",St,[e("div",Et,[e("div",jt,[e("h3",Mt,u(O.value),1),e("button",{onClick:t[26]||(t[26]=o=>p.value=!1),type:"button",class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center"},Bt)]),e("div",$t,[e("form",{onSubmit:C(H,["prevent"]),classNaem:"max-w-lg mx-auto border border-gray-300 p-6 my-5 rounded-lg overflow-y-auto"},[e("div",zt,[e("h2",Pt,u(b.value),1)]),e("div",Ft,[qt,s(e("input",{type:"text",id:"codigo",className:"form-input w-full","onUpdate:modelValue":t[27]||(t[27]=o=>l.value.codigo=o)},null,512),[[n,l.value.codigo]]),Gt]),e("div",Ht,[Zt,s(e("input",{type:"text",id:"grupo",className:"form-input w-full","onUpdate:modelValue":t[28]||(t[28]=o=>l.value.grupo=o)},null,512),[[n,l.value.grupo]]),Wt]),e("div",Yt,[Jt,s(e("input",{type:"text",id:"administrador",className:"form-input w-full","onUpdate:modelValue":t[29]||(t[29]=o=>l.value.administrador=o)},null,512),[[n,l.value.administrador]]),Kt]),e("div",Qt,[Xt,s(e("input",{type:"text",id:"dni",className:"form-input w-full","onUpdate:modelValue":t[30]||(t[30]=o=>l.value.dni=o)},null,512),[[n,l.value.dni]]),eo]),e("div",to,[oo,s(e("input",{type:"text",id:"ruc",className:"form-input w-full","onUpdate:modelValue":t[31]||(t[31]=o=>l.value.ruc=o)},null,512),[[n,l.value.ruc]]),ao]),e("div",lo,[so,s(e("input",{type:"text",id:"asociado",className:"form-input w-full","onUpdate:modelValue":t[32]||(t[32]=o=>l.value.asociado=o)},null,512),[[n,l.value.asociado]]),no]),e("div",ro,[io,s(e("input",{type:"text",id:"modelo",className:"form-input w-full","onUpdate:modelValue":t[33]||(t[33]=o=>l.value.modelo=o)},null,512),[[n,l.value.modelo]]),uo]),e("div",mo,[co,s(e("input",{type:"text",id:"fachada",className:"form-input w-full","onUpdate:modelValue":t[34]||(t[34]=o=>l.value.fachada=o)},null,512),[[n,l.value.fachada]]),po]),e("div",bo,[go,s(e("input",{type:"text",id:"interior_del_local",className:"form-input w-full","onUpdate:modelValue":t[35]||(t[35]=o=>l.value.interior_del_local=o)},null,512),[[n,l.value.interior_del_local]]),_o]),e("div",fo,[vo,s(e("input",{type:"text",id:"correo",className:"form-input w-full","onUpdate:modelValue":t[36]||(t[36]=o=>l.value.garantia=o)},null,512),[[n,l.value.garantia]]),xo]),e("div",yo,[ho,s(e("input",{type:"text",id:"numero_operacion",className:"form-input w-full","onUpdate:modelValue":t[37]||(t[37]=o=>l.value.numero_operacion=o)},null,512),[[n,l.value.numero_operacion]]),No]),e("div",wo,[ko,s(e("input",{type:"text",id:"monto_garantia",className:"form-input w-full","onUpdate:modelValue":t[38]||(t[38]=o=>l.value.monto_garantia=o)},null,512),[[n,l.value.monto_garantia]]),Io]),e("div",Co,[Ro,s(e("input",{type:"text",id:"tipo_negocio",className:"form-input w-full","onUpdate:modelValue":t[39]||(t[39]=o=>l.value.tipo_negocio=o)},null,512),[[n,l.value.tipo_negocio]]),Uo]),e("div",Vo,[Oo,s(e("input",{type:"text",id:"estado",className:"form-input w-full","onUpdate:modelValue":t[40]||(t[40]=o=>l.value.estado=o)},null,512),[[n,l.value.estado]]),Do]),e("div",Ao,[So,s(e("input",{type:"text",id:"detalle_nombre",className:"form-input w-full","onUpdate:modelValue":t[41]||(t[41]=o=>l.value.detalle_nombre=o)},null,512),[[n,l.value.detalle_nombre]]),Eo]),e("div",jo,[Mo,s(e("input",{type:"text",id:"detalle_nombre",className:"form-input w-full","onUpdate:modelValue":t[42]||(t[42]=o=>l.value.agente_encargado_de_venta=o)},null,512),[[n,l.value.agente_encargado_de_venta]]),Lo]),e("div",To,[Bo,e("button",{onClick:t[43]||(t[43]=o=>m.value=!1),type:"button",class:"ml-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 px-5 py-2.5"},"Rechazar")])],32)])])],512),[[I,p.value]]),s(e("div",$o,[e("div",zo,[e("div",Po,[e("h3",Fo,u(d.modalTitleUpload),1),e("button",{onClick:t[44]||(t[44]=o=>g.value=!1),type:"button",class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center"},Ho)]),e("div",Zo,[e("form",{onSubmit:C(Z,["prevent"]),enctype:"multipart/form-data",class:"max-w-lg mx-auto border border-gray-300 p-6 my-5 rounded-lg overflow-y-auto"},[e("div",Wo,[e("h2",Yo,u(d.modalTitleUpload),1)]),Jo,e("div",Ko,[Qo,e("button",{onClick:t[45]||(t[45]=o=>g.value=!1),type:"button",class:"ml-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 px-5 py-2.5"},"Rechazar")])],32)])])],512),[[I,g.value]])],64))}};export{aa as default};
