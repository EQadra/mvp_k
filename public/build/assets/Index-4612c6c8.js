import{h as d,k as Y,e as K,o as E,c as S,b as e,s as Q,q as N,a as p,u as _,w as X,j as l,v as h,t as b,z as w,A as n,F as ee,B as te}from"./app-45ec4fab.js";import{S as oe}from"./sweetalert2.all-2a96c036.js";import{P as k,D as M,c as se,s as f,a as z}from"./dataTables.select-0eae1207.js";import{L as I}from"./vue3-datepicker-7c15d454.js";const ae={className:"flex justify-center"},le={className:"w-full"},ne={className:"bg-blue-400 border border-blue-400 text-blue-700 px-4 py-3 rounded relative",role:"alert"},ie={className:"flex justify-around items-center"},de=e("i",{className:"fa-solid fa-circle-plus mx-1"},null,-1),re=e("i",{className:"fa-solid fa-circle-plus mx-1"},null,-1),ue=e("i",{className:"fa-solid fa-circle-plus mx-1"},null,-1),ce={class:"flex justify-center my-3"},me={class:"w-full"},pe={class:"bg-gray-400 border border-blue-400 text-blue-700 px-4 py-3 rounded relative",role:"alert"},_e={class:"flex justify-between items-center"},be=e("label",{for:"datepicker",class:"block text-sm font-medium text-gray-700 mr-3"},"Selecciona una fecha",-1),fe={class:"flex items-center"},ge=e("button",{type:"button",class:"ml-2 px-4 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:ring-blue-300"}," Botón ",-1),xe={class:"flex justify-center my-3"},ve={class:"w-full"},ye={class:"bg-gray-400 border border-blue-400 text-blue-700 px-4 py-3 rounded relative",role:"alert"},Ne={class:"flex justify-between items-center"},he=e("label",{for:"startDate",class:"block text-sm font-medium text-gray-700 mr-3"},"Desde",-1),we=e("label",{for:"endDate",class:"block text-sm font-medium text-gray-700 ml-4 mr-3"},"Hasta",-1),ke={className:"flex justify-center my-3"},Ie={className:"md:col-span-6 lg:col-span-6 col-span-6"},Ue={className:"table-responsive my-5"},Ce=e("thead",null,[e("tr",{class:"bg-gray-100"},[e("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Id"),e("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Periodo"),e("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Administrador"),e("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Utilidad Bruta 100"),e("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Impuesto 12"),e("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Utilidad Impuesto"),e("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Porcentaje Base"),e("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Utilidad Neta"),e("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Total a Depositar"),e("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Pago"),e("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Documento Atribucion")])],-1),Ae={id:"default-modal",class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto"},Oe={class:"bg-white rounded-lg shadow-lg max-w-md w-full h-full overflow-y-auto"},je={class:"flex items-center justify-between p-4 border-b"},Re={class:"text-xl font-semibold text-gray-900"},Ve=e("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})],-1),Te=e("span",{class:"sr-only"},"Cerrar Modal",-1),De=[Ve,Te],Ee={class:"p-4 space-y-4 overflow-y-auto"},Se=e("div",{className:"my-2"},[e("h2",{className:"text-xl font-thin mb-4"},"Título fino")],-1),Me={className:"mb-4"},ze=e("label",{for:"fecha",className:"block mb-1"},"CODIGO SEDE",-1),Pe=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese codigo.",-1),Be={className:"mb-4"},Le=e("label",{for:"dni",className:"block mb-1"},"PLATAFORMA ",-1),Ge=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese sistema.",-1),$e={className:"mb-4"},Fe=e("label",{for:"medio_de_contacto",className:"block mb-1"},"JUEGO",-1),qe=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese juego.",-1),Ze={className:"mb-4"},He=e("label",{for:"medio_de_respuesta",className:"block mb-1"},"PERIODO",-1),Je=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese periodo.",-1),We={className:"mb-4"},Ye=e("label",{for:"como_llego_a_la_marca",className:"block mb-1"},"ADMINISTRADOR",-1),Ke=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese el nombre del administrador.",-1),Qe={className:"mb-4"},Xe=e("label",{for:"fecha",className:"block mb-1"},"SEDE",-1),et=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese sede.",-1),tt={className:"mb-4"},ot=e("label",{for:"tipo_negocio",className:"block mb-1"},"INGRESE RAZON SOCIAL",-1),st=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese razon social.",-1),at={className:"mb-4"},lt=e("label",{for:"estado",className:"block mb-1"},"INGRESE RUC",-1),nt=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese RUC.",-1),it={className:"mb-4"},dt=e("label",{for:"respuesta_asesor",className:"block mb-1"},"INGRESE UTILIDAD BRUTA",-1),rt=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese utilidad bruta.",-1),ut={className:"mb-4"},ct=e("label",{for:"primer_contacto",className:"block mb-1"},"PRIMER CONTACTO",-1),mt=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese primer contacto.",-1),pt={className:"mb-4"},_t=e("label",{for:"segundo_contacto",className:"block mb-1"},"SEGUNDO CONTACTO",-1),bt=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese segundo contacto.",-1),ft={className:"mb-4"},gt=e("label",{for:"tercer_contacto",className:"block mb-1"},"TERCER CONTACTO",-1),xt=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese tercer contacto.",-1),vt={className:"mb-4"},yt=e("label",{for:"realizo_la_venta",className:"block mb-1"},"¿REALIZO LA VENTA?",-1),Nt=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese conclusión de venta.",-1),ht={className:"mb-4"},wt=e("label",{for:"futuro_socio",className:"block mb-1"},"¿FUTURO SOCIO?",-1),kt=e("p",{className:"text-sm text-gray-500 mt-1"},"¿es futuro socio?.",-1),It={className:"mb-4"},Ut=e("label",{for:"estado",className:"block mb-1"},"TOTAL A DEPOSITAR",-1),Ct=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese el nombre del administrador.",-1),At={className:"mb-4"},Ot=e("label",{for:"respuesta_asesor",className:"block mb-1"},"PAGO",-1),jt=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese el pago.",-1),Rt={className:"mb-4"},Vt=e("label",{for:"primer_contacto",className:"block mb-1"},"% COMISION ADMIN",-1),Tt=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese % comisión admin.",-1),Dt={className:"mb-4"},Et=e("label",{for:"segundo_contacto",className:"block mb-1"},"% COMISION S",-1),St=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese % comisión s.",-1),Mt={className:"mb-4"},zt=e("label",{for:"tercer_contacto",className:"block mb-1"},"% PARTICIPACIÓN ",-1),Pt=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese % participación.",-1),Bt={className:"mb-4"},Lt=e("label",{for:"documento_atribucion",className:"block mb-1"},"DOCUMENTO ATRIBUCION",-1),Gt=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese el nombre del administrador.",-1),$t={className:"mb-4"},Ft=e("label",{for:"plataforma_id",className:"block mb-1"},"PLATAFORMA ID",-1),qt=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese plataforma.",-1),Zt={className:"mb-4"},Ht=e("label",{for:"transaccion_id",className:"block mb-1"},"ID TRANSACCIÓN",-1),Jt=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese transacción id.",-1),Wt={class:"flex items-center justify-end p-4 border-t"},Yt=e("button",{type:"submit",class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"},"Aceptar",-1),Kt={id:"default-modal",class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto"},Qt={class:"bg-white rounded-lg shadow-lg max-w-md w-full h-full overflow-y-auto"},Xt={class:"flex items-center justify-between p-4 border-b"},eo={class:"text-xl font-semibold text-gray-900"},to=e("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})],-1),oo=e("span",{class:"sr-only"},"Cerrar Modal",-1),so=[to,oo],ao={class:"p-4 space-y-4 overflow-y-auto"},lo=e("div",{className:"my-2"},[e("h2",{className:"text-xl font-thin mb-4"},"Título fino")],-1),no={className:"mb-4"},io=e("label",{for:"fecha",className:"block mb-1"},"CODIGO",-1),ro=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese codigo.",-1),uo={className:"mb-4"},co=e("label",{for:"dni",className:"block mb-1"},"SISTEMA",-1),mo=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese sistema.",-1),po={className:"mb-4"},_o=e("label",{for:"medio_de_contacto",className:"block mb-1"},"JUEGO",-1),bo=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese juego.",-1),fo={className:"mb-4"},go=e("label",{for:"medio_de_respuesta",className:"block mb-1"},"PERIODO",-1),xo=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese periodo.",-1),vo={className:"mb-4"},yo=e("label",{for:"como_llego_a_la_marca",className:"block mb-1"},"ADMINISTRADOR",-1),No=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese el nombre del administrador.",-1),ho={className:"mb-4"},wo=e("label",{for:"fecha",className:"block mb-1"},"SEDE",-1),ko=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese sede.",-1),Io={className:"mb-4"},Uo=e("label",{for:"tipo_negocio",className:"block mb-1"},"INGRESE RAZON SOCIAL",-1),Co=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese razon social.",-1),Ao={className:"mb-4"},Oo=e("label",{for:"estado",className:"block mb-1"},"INGRESE RUC",-1),jo=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese RUC.",-1),Ro={className:"mb-4"},Vo=e("label",{for:"respuesta_asesor",className:"block mb-1"},"INGRESE UTILIDAD BRUTA",-1),To=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese utilidad bruta.",-1),Do={className:"mb-4"},Eo=e("label",{for:"primer_contacto",className:"block mb-1"},"PRIMER CONTACTO",-1),So=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese primer contacto.",-1),Mo={className:"mb-4"},zo=e("label",{for:"segundo_contacto",className:"block mb-1"},"SEGUNDO CONTACTO",-1),Po=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese segundo contacto.",-1),Bo={className:"mb-4"},Lo=e("label",{for:"tercer_contacto",className:"block mb-1"},"TERCER CONTACTO",-1),Go=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese tercer contacto.",-1),$o={className:"mb-4"},Fo=e("label",{for:"realizo_la_venta",className:"block mb-1"},"¿REALIZO LA VENTA?",-1),qo=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese conclusión de venta.",-1),Zo={className:"mb-4"},Ho=e("label",{for:"futuro_socio",className:"block mb-1"},"¿FUTURO SOCIO?",-1),Jo=e("p",{className:"text-sm text-gray-500 mt-1"},"¿es futuro socio?.",-1),Wo={className:"mb-4"},Yo=e("label",{for:"estado",className:"block mb-1"},"TOTAL A DEPOSITAR",-1),Ko=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese el nombre del administrador.",-1),Qo={className:"mb-4"},Xo=e("label",{for:"respuesta_asesor",className:"block mb-1"},"PAGO",-1),es=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese el pago.",-1),ts={className:"mb-4"},os=e("label",{for:"primer_contacto",className:"block mb-1"},"% COMISION ADMIN",-1),ss=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese % comisión admin.",-1),as={className:"mb-4"},ls=e("label",{for:"segundo_contacto",className:"block mb-1"},"% COMISION S",-1),ns=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese % comisión s.",-1),is={className:"mb-4"},ds=e("label",{for:"tercer_contacto",className:"block mb-1"},"% PARTICIPACIÓN ",-1),rs=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese % participación.",-1),us={className:"mb-4"},cs=e("label",{for:"documento_atribucion",className:"block mb-1"},"DOCUMENTO ATRIBUCION",-1),ms=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese el nombre del administrador.",-1),ps={className:"mb-4"},_s=e("label",{for:"plataforma_id",className:"block mb-1"},"PLATAFORMA ID",-1),bs=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese plataforma.",-1),fs={className:"mb-4"},gs=e("label",{for:"transaccion_id",className:"block mb-1"},"ID TRANSACCIÓN",-1),xs=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese transacción id.",-1),vs={class:"flex items-center justify-end p-4 border-t"},ys=e("button",{type:"submit",class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"},"Aceptar",-1),Ns={id:"default-modal",class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto"},hs={class:"bg-white rounded-lg shadow-lg max-w-md w-full h-screen-70 overflow-y-auto"},ws={class:"flex items-center justify-between p-4 border-b"},ks={class:"text-xl font-semibold text-gray-900"},Is=e("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})],-1),Us=e("span",{class:"sr-only"},"Cerrar Modal",-1),Cs=[Is,Us],As={class:"p-4 space-y-4 overflow-y-auto"},Os={class:"my-2"},js={class:"text-xl font-thin mb-4"},Rs=e("div",{class:"mb-4"},[e("label",{for:"documento",class:"block text-sm font-medium text-gray-700"},"Subir documento"),e("input",{type:"file",id:"documento",name:"documento",class:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"})],-1),Vs={class:"flex items-center justify-end p-4 border-t"},Ts=e("button",{type:"submit",class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"},"Subir Documento",-1),zs={__name:"Index",props:{datos:Array},setup(U){k.use(M),k.use(M);const P=U,r=d(),C=d([]),A=d([]),O=d([]),B=d(!1),u=d(!1),j=d(""),c=d(!1),R=d(""),g=d(!1),x=d(""),V=d(new Date),v=d(new Date),y=d(new Date),m=d(!1),L=i=>{x.value=i,m.value=!0,console.log("mensjae de exito")};Y(()=>{O.value=P.datos}),K(()=>{B.value=!0,r.value.dt.on("deselect",q),r.value.dt.on("deselect",T)});const a=d({id:"",codigo_sede:"",plataforma_id:"",juego:"",periodo:"",administrador:"",shop:"",sede_id:"",razon_social:"",ruc:"",utilidad_bruta_100:"",impuesto_12:"",utilidad_impuesto:"",porcentaje_base:"",utilidad_neta:"",total_a_depositar:"",pago:"",porcentaje_com_adm:"",com_adm_s:"",porcentaje_participacion:"",documento_atribucion:"",plataforma_id:"",transaccion_id:""}),s=d({id:"",codigo_sede:"",plataforma_id:"",juego:"",periodo:"",administrador:"",shop:"",sede_id:"",razon_social:"",ruc:"",utilidad_bruta_100:"",impuesto_12:"",utilidad_impuesto:"",porcentaje_base:"",utilidad_neta:"",total_a_depositar:"",pago:"",porcentaje_com_adm:"",com_adm_s:"",porcentaje_participacion:"",documento_atribucion:"",plataforma_id:"",transaccion_id:""});C.value=[{data:null,render:function(i,t,o,D){return D.row+1}},{data:"periodo"},{data:"administrador"},{data:"utilidad_bruta_100"},{data:"impuesto_12"},{data:"utilidad_impuesto"},{data:"porcentaje_base"},{data:"utilidad_neta"},{data:"total_a_depositar"},{data:"pago"},{data:"documento_atribucion"}],A.value=[{title:"Utilidad",extend:"excelHtml5",text:'<i class="fa-solid fa-file-excel"></i> Excel',className:"bg-green-500 text-white px-4 py-2 rounded my-2 hover:bg-green-600 focus:outline-none"},{title:"Utilidad",extend:"print",text:'<i class="fa-solid fa-print"></i> PRINT',className:"bg-gray-800 text-white px-4 py-2 rounded my-2 hover:bg-gray-900 focus:outline-none"},{title:"Utilidad",extend:"copy",text:'<i class="fa-solid fa-copy"></i> COPY',className:"bg-gray-400 text-white px-4 py-2 rounded my-2 hover:bg-gray-500 focus:outline-none"}];const G=()=>{const i=r.value.dt.rows({selected:!0}).data().toArray();if(i.length>0){const t=i[0].id,o=i[0].administrador;oe.mixin({buttonStyling:!0}).fire({title:"¿Está seguro de querer borrar el registro "+o+":"+t+"?",icon:"question",showCancelButton:!0,confirmButtonText:'<i className="fa fa-solid fa-check"></i> Sí, borrar',cancelButtonText:'<i className="fa fa-solid fa-check"></i> Cancelar'}).then(W=>{W.isConfirmed&&se(plataforma,"https://reportes.kingtech.pe/utility"+t,"")})}else f("Debe seleccionar una fila antes de poder borrarla","error")},$=i=>{j.value=i,u.value=!0,console.log("mensjae de exito")},F=i=>{if(r.value.dt.rows({selected:!0}).count()===0){f("Debe seleccionar una fila antes de editar","error");return}const o=r.value.dt.rows({selected:!0}).data().toArray()[0];if(!o){f("No se encontraron datos para la fila seleccionada","error");return}s.value.cod=o.cod,s.value.sistema=o.sistema,s.value.juego=o.juego,s.value.periodo=o.periodo,s.value.administrador=o.administrador,s.value.shop=o.shop,s.value.sede=o.sede,s.value.razon_social=o.razon_social,s.value.ruc=o.ruc,s.value.utilidad_bruta_100=o.utilidad_bruta_100,s.value.impuesto_12=o.impuesto_12,s.value.utilidad_impuesto=o.utilidad_impuesto,s.value.porcentaje_base=o.porcentaje_base,s.value.utilidad_neta=o.utilidad_neta,s.value.total_a_depositar=o.total_a_depositar,s.value.pago=o.pago,s.value.porcentaje_com_adm=o.porcentaje_com_adm,s.value.com_adm_s=o.com_adm_s,s.value.porcentaje_participacion=o.porcentaje_participacion,s.value.documento_atribucion=o.documento_atribucion,s.value.plataforma_id=o.plataforma_id,s.value.transaccion_id=o.transaccion_id,console.log(O),R.value=i,c.value=!0},T=i=>{const t=r.value.dt.rows({selected:!0}).count();g.value=t>0},q=i=>{const t=r.value.dt.rows({selected:!0}).count();g.value=t>0},Z=()=>{const i=r.value.dt.rows({selected:!0}).data().toArray();if(i.length>0){const t=i[0];s.value.fecha=t.fecha,s.value.dni=t.dni,s.value.medio_de_contacto=t.medio_de_contacto,s.value.medio_de_respuesta=t.medio_de_respuesta,s.value.como_llego_a_la_marca=t.como_llego_a_la_marca,s.value.tipo_negocio=t.tipo_negocio,s.value.estado=t.estado,s.value.respuesta_asesor=t.respuesta_asesor,s.value.primer_contacto=t.primer_contacto,s.value.segundo_contacto=t.segundo_contacto,s.value.tercer_contacto=t.tercer_contacto,s.value.contacto=t.contacto,s.value.realizo_la_venta=t.realizo_la_venta,s.value.futuro_socio=t.futuro_socio,console.log(s),z("PUT",s.value,"https://reportes.kingtech.pe/utility/"+id,"")}else f("debe selccionar uan fila antes de poder editarla","error")},H=()=>{console.log(a),z("POST",a.value,"https://reportes.kingtech.pe/alerts",""),a.value.fecha,u.value=!1},J=()=>{const i=new FormData;i.append("file",fileInput.value.files[0]),te.post("/api/importar-clientes",i,{headers:{"Content-Type":"multipart/form-data"}}).then(t=>{console.log("Archivo importado correctamente:",t.data.message)}).catch(t=>{console.error("Error al importar archivo:",t)})};return(i,t)=>(E(),S(ee,null,[e("div",ae,[e("div",le,[e("div",ne,[e("div",ie,[g.value?Q("",!0):(E(),S("button",{key:0,"data-modal-target":"default-modal",onClick:t[0]||(t[0]=o=>$("Crear")),"data-modal-toggle":"default-modal",className:"block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",type:"button"}," Crear Registro ")),e("button",{onClick:t[1]||(t[1]=o=>F("Editar")),className:" btn btn-lg block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",type:"button"},[de,N("Editar Registro ")]),e("button",{onClick:t[2]||(t[2]=o=>L("Subir Documento en Excel")),className:" btn btn-lg block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",type:"button"},[re,N("Subir Excel ")]),e("button",{onClick:t[3]||(t[3]=o=>G()),className:"btn btn-lg block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",type:"button"},[ue,N(" Borrar Registro ")])])])])]),e("div",ce,[e("div",me,[e("div",pe,[e("div",_e,[be,e("div",fe,[p(_(I),{modelValue:V.value,"onUpdate:modelValue":t[4]||(t[4]=o=>V.value=o),id:"datepicker",class:"block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},null,8,["modelValue"]),ge])])])])]),e("div",xe,[e("div",ve,[e("div",ye,[e("div",Ne,[he,p(_(I),{modelValue:v.value,"onUpdate:modelValue":t[5]||(t[5]=o=>v.value=o),id:"startDate",class:"block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},null,8,["modelValue"]),we,p(_(I),{modelValue:y.value,"onUpdate:modelValue":t[6]||(t[6]=o=>y.value=o),id:"endDate",class:"block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},null,8,["modelValue"]),e("button",{type:"button",class:"ml-4 px-4 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:ring-blue-300",onClick:t[7]||(t[7]=o=>i.filterByDates(v.value,y.value))}," Filtrar ")])])])]),e("div",ke,[e("div",Ie,[e("div",Ue,[p(_(k),{data:U.datos,columns:C.value,ref_key:"table",ref:r,class:"display",options:{select:!0,responsive:!0,autoWidth:!1,dom:"Bfrtip",buttons:A.value,pageLength:10},onSelect:T},{default:X(()=>[Ce]),_:1},8,["data","columns","options"])])])]),l(e("div",Ae,[e("div",Oe,[e("div",je,[e("h3",Re,b(R.value),1),e("button",{onClick:t[8]||(t[8]=o=>c.value=!1),type:"button",class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center"},De)]),e("div",Ee,[e("form",{onSubmit:w(Z,["prevent"]),classNaem:"max-w-lg mx-auto border border-gray-300 p-6 my-5 rounded-lg overflow-y-auto"},[Se,e("div",Me,[ze,l(e("input",{type:"text",id:"fecha",className:"form-input w-full","onUpdate:modelValue":t[9]||(t[9]=o=>s.value.codigo_sede=o)},null,512),[[n,s.value.codigo_sede]]),Pe]),e("div",Be,[Le,l(e("input",{type:"text",id:"dni",className:"form-input w-full","onUpdate:modelValue":t[10]||(t[10]=o=>s.value.plataforma_id=o)},null,512),[[n,s.value.plataforma_id]]),Ge]),e("div",$e,[Fe,l(e("input",{type:"text",id:"medio_de_contacto",className:"form-input w-full","onUpdate:modelValue":t[11]||(t[11]=o=>s.value.juego=o)},null,512),[[n,s.value.juego]]),qe]),e("div",Ze,[He,l(e("input",{type:"text",id:"medio_de_respuesta",className:"form-input w-full","onUpdate:modelValue":t[12]||(t[12]=o=>s.value.periodo=o)},null,512),[[n,s.value.periodo]]),Je]),e("div",We,[Ye,l(e("input",{type:"text",id:"como_llego_a_la_marca",className:"form-input w-full","onUpdate:modelValue":t[13]||(t[13]=o=>s.value.administrador=o)},null,512),[[n,s.value.administrador]]),Ke]),e("div",Qe,[Xe,l(e("input",{type:"text",id:"fecha",className:"form-input w-full","onUpdate:modelValue":t[14]||(t[14]=o=>s.value.sede_id=o)},null,512),[[n,s.value.sede_id]]),et]),e("div",tt,[ot,l(e("input",{type:"text",id:"tipo_negocio",className:"form-input w-full","onUpdate:modelValue":t[15]||(t[15]=o=>s.value.razon_social=o)},null,512),[[n,s.value.razon_social]]),st]),e("div",at,[lt,l(e("input",{type:"text",id:"estado",className:"form-input w-full","onUpdate:modelValue":t[16]||(t[16]=o=>s.value.ruc=o)},null,512),[[n,s.value.ruc]]),nt]),e("div",it,[dt,l(e("input",{type:"text",id:"respuesta_asesor",className:"form-input w-full","onUpdate:modelValue":t[17]||(t[17]=o=>s.value.utilidad_bruta_100=o)},null,512),[[n,s.value.utilidad_bruta_100]]),rt]),e("div",ut,[ct,l(e("input",{type:"text",id:"primer_contacto",className:"form-input w-full","onUpdate:modelValue":t[18]||(t[18]=o=>s.value.impuesto_12=o)},null,512),[[n,s.value.impuesto_12]]),mt]),e("div",pt,[_t,l(e("input",{type:"text",id:"segundo_contacto",className:"form-input w-full","onUpdate:modelValue":t[19]||(t[19]=o=>s.value.utilidad_impuesto=o)},null,512),[[n,s.value.utilidad_impuesto]]),bt]),e("div",ft,[gt,l(e("input",{type:"text",id:"tercer_contacto",className:"form-input w-full","onUpdate:modelValue":t[20]||(t[20]=o=>s.value.porcentaje_base=o)},null,512),[[n,s.value.porcentaje_base]]),xt]),e("div",vt,[yt,l(e("input",{type:"text",id:"realizo_la_venta",className:"form-input w-full","onUpdate:modelValue":t[21]||(t[21]=o=>s.value.utilidad_neta=o)},null,512),[[n,s.value.utilidad_neta]]),Nt]),e("div",ht,[wt,l(e("input",{type:"text",id:"futuro_socio",className:"form-input w-full","onUpdate:modelValue":t[22]||(t[22]=o=>s.value.futuro_socio=o)},null,512),[[n,s.value.futuro_socio]]),kt]),e("div",It,[Ut,l(e("input",{type:"text",id:"estado",className:"form-input w-full","onUpdate:modelValue":t[23]||(t[23]=o=>s.value.total_a_depositar=o)},null,512),[[n,s.value.total_a_depositar]]),Ct]),e("div",At,[Ot,l(e("input",{type:"text",id:"respuesta_asesor",className:"form-input w-full","onUpdate:modelValue":t[24]||(t[24]=o=>s.value.pago=o)},null,512),[[n,s.value.pago]]),jt]),e("div",Rt,[Vt,l(e("input",{type:"text",id:"primer_contacto",className:"form-input w-full","onUpdate:modelValue":t[25]||(t[25]=o=>s.value.porcentaje_com_adm=o)},null,512),[[n,s.value.porcentaje_com_adm]]),Tt]),e("div",Dt,[Et,l(e("input",{type:"text",id:"segundo_contacto",className:"form-input w-full","onUpdate:modelValue":t[26]||(t[26]=o=>s.value.com_adm_s=o)},null,512),[[n,s.value.com_adm_s]]),St]),e("div",Mt,[zt,l(e("input",{type:"text",id:"tercer_contacto",className:"form-input w-full","onUpdate:modelValue":t[27]||(t[27]=o=>s.value.porcentaje_participacion=o)},null,512),[[n,s.value.porcentaje_participacion]]),Pt]),e("div",Bt,[Lt,l(e("input",{type:"text",id:"documento_atribucion",className:"form-input w-full","onUpdate:modelValue":t[28]||(t[28]=o=>s.value.documento_atribucion=o)},null,512),[[n,s.value.documento_atribucion]]),Gt]),e("div",$t,[Ft,l(e("input",{type:"text",id:"plataforma_id",className:"form-input w-full","onUpdate:modelValue":t[29]||(t[29]=o=>s.value.plataforma_id=o)},null,512),[[n,s.value.plataforma_id]]),qt]),e("div",Zt,[Ht,l(e("input",{type:"text",id:"transaccion_id",className:"form-input w-full","onUpdate:modelValue":t[30]||(t[30]=o=>s.value.transaccion_id=o)},null,512),[[n,s.value.transaccion_id]]),Jt]),e("div",Wt,[Yt,e("button",{onClick:t[31]||(t[31]=o=>c.value=!1),type:"button",class:"ml-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 px-5 py-2.5"},"Rechazar")])],32)])])],512),[[h,c.value]]),l(e("div",Kt,[e("div",Qt,[e("div",Xt,[e("h3",eo,b(j.value),1),e("button",{onClick:t[32]||(t[32]=o=>u.value=!1),type:"button",class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center"},so)]),e("div",ao,[e("form",{onSubmit:w(H,["prevent"]),classNaem:"max-w-lg mx-auto border border-gray-300 p-6 my-5 rounded-lg overflow-y-auto"},[lo,e("div",no,[io,l(e("input",{type:"text",id:"fecha",className:"form-input w-full","onUpdate:modelValue":t[33]||(t[33]=o=>a.value.codigo_sede=o)},null,512),[[n,a.value.codigo_sede]]),ro]),e("div",uo,[co,l(e("input",{type:"text",id:"dni",className:"form-input w-full","onUpdate:modelValue":t[34]||(t[34]=o=>a.value.plataforma_id=o)},null,512),[[n,a.value.plataforma_id]]),mo]),e("div",po,[_o,l(e("input",{type:"text",id:"medio_de_contacto",className:"form-input w-full","onUpdate:modelValue":t[35]||(t[35]=o=>a.value.juego=o)},null,512),[[n,a.value.juego]]),bo]),e("div",fo,[go,l(e("input",{type:"text",id:"medio_de_respuesta",className:"form-input w-full","onUpdate:modelValue":t[36]||(t[36]=o=>a.value.periodo=o)},null,512),[[n,a.value.periodo]]),xo]),e("div",vo,[yo,l(e("input",{type:"text",id:"como_llego_a_la_marca",className:"form-input w-full","onUpdate:modelValue":t[37]||(t[37]=o=>a.value.administrador=o)},null,512),[[n,a.value.administrador]]),No]),e("div",ho,[wo,l(e("input",{type:"text",id:"fecha",className:"form-input w-full","onUpdate:modelValue":t[38]||(t[38]=o=>a.value.sede_id=o)},null,512),[[n,a.value.sede_id]]),ko]),e("div",Io,[Uo,l(e("input",{type:"text",id:"tipo_negocio",className:"form-input w-full","onUpdate:modelValue":t[39]||(t[39]=o=>a.value.razon_social=o)},null,512),[[n,a.value.razon_social]]),Co]),e("div",Ao,[Oo,l(e("input",{type:"text",id:"estado",className:"form-input w-full","onUpdate:modelValue":t[40]||(t[40]=o=>a.value.ruc=o)},null,512),[[n,a.value.ruc]]),jo]),e("div",Ro,[Vo,l(e("input",{type:"text",id:"respuesta_asesor",className:"form-input w-full","onUpdate:modelValue":t[41]||(t[41]=o=>a.value.utilidad_bruta_100=o)},null,512),[[n,a.value.utilidad_bruta_100]]),To]),e("div",Do,[Eo,l(e("input",{type:"text",id:"primer_contacto",className:"form-input w-full","onUpdate:modelValue":t[42]||(t[42]=o=>a.value.impuesto_12=o)},null,512),[[n,a.value.impuesto_12]]),So]),e("div",Mo,[zo,l(e("input",{type:"text",id:"segundo_contacto",className:"form-input w-full","onUpdate:modelValue":t[43]||(t[43]=o=>a.value.utilidad_impuesto=o)},null,512),[[n,a.value.utilidad_impuesto]]),Po]),e("div",Bo,[Lo,l(e("input",{type:"text",id:"tercer_contacto",className:"form-input w-full","onUpdate:modelValue":t[44]||(t[44]=o=>a.value.porcentaje_base=o)},null,512),[[n,a.value.porcentaje_base]]),Go]),e("div",$o,[Fo,l(e("input",{type:"text",id:"realizo_la_venta",className:"form-input w-full","onUpdate:modelValue":t[45]||(t[45]=o=>a.value.utilidad_neta=o)},null,512),[[n,a.value.utilidad_neta]]),qo]),e("div",Zo,[Ho,l(e("input",{type:"text",id:"futuro_socio",className:"form-input w-full","onUpdate:modelValue":t[46]||(t[46]=o=>a.value.futuro_socio=o)},null,512),[[n,a.value.futuro_socio]]),Jo]),e("div",Wo,[Yo,l(e("input",{type:"text",id:"estado",className:"form-input w-full","onUpdate:modelValue":t[47]||(t[47]=o=>a.value.total_a_depositar=o)},null,512),[[n,a.value.total_a_depositar]]),Ko]),e("div",Qo,[Xo,l(e("input",{type:"text",id:"respuesta_asesor",className:"form-input w-full","onUpdate:modelValue":t[48]||(t[48]=o=>a.value.pago=o)},null,512),[[n,a.value.pago]]),es]),e("div",ts,[os,l(e("input",{type:"text",id:"primer_contacto",className:"form-input w-full","onUpdate:modelValue":t[49]||(t[49]=o=>a.value.porcentaje_com_adm=o)},null,512),[[n,a.value.porcentaje_com_adm]]),ss]),e("div",as,[ls,l(e("input",{type:"text",id:"segundo_contacto",className:"form-input w-full","onUpdate:modelValue":t[50]||(t[50]=o=>a.value.com_adm_s=o)},null,512),[[n,a.value.com_adm_s]]),ns]),e("div",is,[ds,l(e("input",{type:"text",id:"tercer_contacto",className:"form-input w-full","onUpdate:modelValue":t[51]||(t[51]=o=>a.value.porcentaje_participacion=o)},null,512),[[n,a.value.porcentaje_participacion]]),rs]),e("div",us,[cs,l(e("input",{type:"text",id:"documento_atribucion",className:"form-input w-full","onUpdate:modelValue":t[52]||(t[52]=o=>a.value.documento_atribucion=o)},null,512),[[n,a.value.documento_atribucion]]),ms]),e("div",ps,[_s,l(e("input",{type:"text",id:"plataforma_id",className:"form-input w-full","onUpdate:modelValue":t[53]||(t[53]=o=>a.value.plataforma_id=o)},null,512),[[n,a.value.plataforma_id]]),bs]),e("div",fs,[gs,l(e("input",{type:"text",id:"transaccion_id",className:"form-input w-full","onUpdate:modelValue":t[54]||(t[54]=o=>a.value.transaccion_id=o)},null,512),[[n,a.value.transaccion_id]]),xs]),e("div",vs,[ys,e("button",{onClick:t[55]||(t[55]=o=>u.value=!1),type:"button",class:"ml-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 px-5 py-2.5"},"Rechazar")])],32)])])],512),[[h,u.value]]),l(e("div",Ns,[e("div",hs,[e("div",ws,[e("h3",ks,b(x.value),1),e("button",{onClick:t[56]||(t[56]=o=>m.value=!1),type:"button",class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center"},Cs)]),e("div",As,[e("form",{onSubmit:w(J,["prevent"]),enctype:"multipart/form-data",class:"max-w-lg mx-auto border border-gray-300 p-6 my-5 rounded-lg overflow-y-auto"},[e("div",Os,[e("h2",js,b(x.value),1)]),Rs,e("div",Vs,[Ts,e("button",{onClick:t[57]||(t[57]=o=>m.value=!1),type:"button",class:"ml-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 px-5 py-2.5"},"Rechazar")])],32)])])],512),[[h,m.value]])],64))}};export{zs as default};