(function(e){function a(a){for(var o,i,c=a[0],s=a[1],d=a[2],l=0,u=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&u.push(t[i][0]),t[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);m&&m(a);while(u.length)u.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,a=0;a<r.length;a++){for(var n=r[a],o=!0,i=1;i<n.length;i++){var c=n[i];0!==t[c]&&(o=!1)}o&&(r.splice(a--,1),e=s(s.s=n[0]))}return e}var o={},i={app:0},t={app:0},r=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"962a7288","chunk-0206bfa0":"9d64e2cb","chunk-0c047e41":"c1b5f948","chunk-13a6037e":"b6cc52b1","chunk-18f95272":"c2a5eee4","chunk-25b302c8":"26cfb7b2","chunk-26fc7596":"286ada91","chunk-2c06842c":"44a60f75","chunk-2d0c5615":"ebc1981a","chunk-2d0e96ec":"7b8875b5","chunk-2d208d90":"9c6a4a0e","chunk-2d21d0e2":"320e0a0d","chunk-2d22c123":"474e9714","chunk-2d2747e2":"55b9a2a1","chunk-2e80bb9a":"818f9add","chunk-319206de":"2b0a71fd","chunk-32334cb6":"4e06baf7","chunk-36769079":"f509823e","chunk-3c57cd7b":"d8fd3cb3","chunk-4cdd78c0":"21552dad","chunk-4f2d402a":"f52de32d","chunk-515a8379":"ad4b0488","chunk-53ccb27e":"e4c9c4d9","chunk-55d286b8":"984d19df","chunk-59974754":"4b536167","chunk-60cbc06b":"17f2bb4a","chunk-659152b8":"4c724f06","chunk-6e1e538a":"1656d117","chunk-766a929b":"4fd76fb0","chunk-c796899c":"b404a9ce","chunk-e8a7823a":"9ff4a1e8","chunk-f2df7d2c":"d2fe56d5","chunk-fde47172":"6ef31f8b",comple:"a016ec46",creditos:"e0a862ca",glosario:"927780f5",intro:"067ee451",referencias:"d8f0ded8",sintesis:"e87b4ea8",tema1:"dfc4ef93",tema2:"96adee88",tema3:"7a243c70",tema4:"bd41b0ac"}[e]+".js"}function s(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-60cbc06b":1,"chunk-6e1e538a":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,referencias:1};i[e]?a.push(i[e]):0!==i[e]&&n[e]&&a.push(i[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0c047e41":"3babef71","chunk-13a6037e":"31d6cfe0","chunk-18f95272":"31d6cfe0","chunk-25b302c8":"3babef71","chunk-26fc7596":"3babef71","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"3babef71","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"3babef71","chunk-36769079":"31d6cfe0","chunk-3c57cd7b":"3babef71","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"3babef71","chunk-515a8379":"8f9cd922","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"1c072bbf","chunk-60cbc06b":"09438581","chunk-659152b8":"31d6cfe0","chunk-6e1e538a":"3ba0a060","chunk-766a929b":"ffff255a","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"3babef71","chunk-fde47172":"31d6cfe0",comple:"e766caee",creditos:"9ca98631",glosario:"a8263125",intro:"31d6cfe0",referencias:"47f89f89",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0"}[e]+".css",t=s.p+o,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var d=r[c],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===o||l===t))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){d=u[c],l=d.getAttribute("data-href");if(l===o||l===t)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var o=a&&a.target&&a.target.src||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete i[e],m.parentNode.removeChild(m),n(r)},m.href=t;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){i[e]=0})));var o=t[e];if(0!==o)if(o)a.push(o[2]);else{var r=new Promise((function(a,n){o=t[e]=[a,n]}));a.push(o[2]=r);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var u=new Error;d=function(a){l.onerror=l.onload=null,clearTimeout(m);var n=t[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,n[1](u)}t[e]=void 0}};var m=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(a)},s.m=e,s.c=o,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)s.d(n,o,function(a){return e[a]}.bind(null,o));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=a,d=d.slice();for(var u=0;u<d.length;u++)a(d[u]);var m=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("68f3"),i=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},t=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,s=n("2877"),d=Object(s["a"])(c,i,t,!1,null,null,null),l=d.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),m=n("8c4f"),p=n("ae58"),f=n("7e58");u["a"].use(m["a"]);var b=new m["a"]({routes:[{path:"/",name:"inicio",component:p["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:f["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return n.e("tema4").then(n.bind(null,"3eb5"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return n.e("sintesis").then(n.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=b,g=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Investigación de accidentes de tránsito",descripcionCurso:"El presente componente formativo aborda conceptos y prácticas para la caracterización de los accidentes de tránsito. Con el estudio de este componente, el aprendiz podrá conocer y realizar los procedimientos y actuaciones que se derivan de la atención de siniestros viales, de acuerdo con la normatividad colombiana y con los protocolos de policía judicial, establecidos para tal fin.",imagenBannerPrincipal:n("74b5"),fondoBannerPrincipal:n("ce7c"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:n("71f8")},{clases:["banner-principal-decorativo-2","d-none","d-lg-block"],imagen:n("8f04")},{clases:["banner-principal-decorativo-3","d-none","d-lg-block"],imagen:n("7d72")},{clases:["banner-principal-decorativo-4","d-none","d-lg-block"],imagen:n("f53d")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",numero:"1",titulo:"Generalidades del accidente de tránsito",desarrolloContenidos:!0,subMenu:[{numero:"1.1",titulo:"Marco jurídico del accidente de tránsito",hash:"t_1_1"},{numero:"1.2",titulo:"Autoridades e intervinientes",hash:"t_1_2"},{numero:"1.3",titulo:"Clasificación de los accidentes de tránsito",hash:"t_1_3"},{numero:"1.4",titulo:"Accidente de tránsito con heridos y muertos",hash:"t_1_4"}]},{nombreRuta:"tema2",numero:"2",titulo:"Métodos de búsqueda",desarrolloContenidos:!0},{nombreRuta:"tema3",numero:"3",titulo:"Actuaciones de policía judicial en accidentes de tránsito",desarrolloContenidos:!0,subMenu:[{numero:"3.1",titulo:"Procedimientos judiciales en accidentes de tránsito",hash:"t_3_1"},{numero:"3.2",titulo:"Actuaciones del coordinador",hash:"t_3_2"},{numero:"3.3",titulo:"Actuaciones del fotógrafo judicial",hash:"t_3_3"},{numero:"3.4",titulo:"Actuaciones del topógrafo judicial",hash:"t_3_4"}]},{nombreRuta:"tema4",numero:"4",titulo:"El informe policial de accidentes de tránsito IPAT",desarrolloContenidos:!0}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis"},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-file-pdf",titulo:"Descargar PDF",download:"downloads/638100_CF01_DU.zip"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Ley 769 de 2002. Por la cual se expide el Código Nacional de Tránsito Terrestre y se dictan otras disposiciones.  Diario Oficial 44.893 de Agosto 07 de 2002.",link:"https://www.movilidadbogota.gov.co/web/sites/default/files/ley-769-de-2002-codigo-nacional-de-transito_3704_0.pdf"},{referencia:"Ley 906 de 2004. Código de Procedimiento Penal. Diario Oficial número 45.657 del 31 de agosto de 2004.",link:"https://perso.unifr.ch/derechopenal/assets/files/legislacion/l_20190708_03.pdf"},{referencia:"Ley 1503 de 2011. Por la cual se promueve la formación de hábitos, comportamientos y conductas seguros en la vía y se dictan otras disposiciones. Diario Oficial No. 48.298 de 30 de diciembre de 2011. ",link:"http://www.secretariasenado.gov.co/senado/basedoc/ley_1503_2011.html"},{referencia:"Decreto 1079 de 2015. [Ministerio de transporte].  Por medio del cual se expide el Decreto Único Reglamentario del Sector Transporte. 26 de mayo de 2015.",link:"https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77889#:~:text=Tiene%20por%20objeto%20la%20ejecución,por%20el%20Ministerio%20de%20Transporte"},{referencia:"Instituto Nacional de Medicina Legal y Ciencias Forenses. (2022). Boletines Estadísticos Mensuales.",link:"https://www.medicinalegal.gov.co/cifras-estadisticas/boletines-estadisticos-mensuales"},{referencia:"Limpert, R. (1999). Motor Vehicle Accident Reconstruction and Cause Analysis. Lexis Publishing."},{referencia:"Resolución 0011268 de 2012. [Ministerio de Transporte]. . Por la cual se adopta el nuevo informe policial de accidentes de tránsito (IPAT), su Manual de diligenciamiento y se dictan otras disposiciones. 06 de Diciembre de 2012. "},{referencia:"Ramos Enriquez, H., & Quiroga Amaya, L. (2017). Investigación de Accidentes de Tránsito en Colombia. Imprenta Nacional.",link:"https://www.policia.gov.co/contenido/investigacion-accidentes-transito-colombia"},{referencia:"Rivani , B., Brougham, D., & Mason, R. (1981). Pedestrian PostImpact Kinematics and Injury Patterns. SAE Technical Paper 811024, 42."}],glosario:[{termino:"Accidente de tránsito",significado:"Evento generalmente involuntario, generado al menos por un vehículo en movimiento, que causa daños a personas y bienes involucrados en él e igualmente afecta la normal circulación de los vehículos que se movilizan por la vía o vías comprendidas en el lugar o dentro de la zona de influencia del hecho."},{termino:"Acompañante",significado:"Persona que viaja con el conductor de un vehículo automotor."},{termino:"Croquis",significado:"Plano descriptivo de los pormenores de un accidente de tránsito donde resulten daños a personas, vehículos, inmuebles, muebles o animales, levantados en el sitio de los hechos por el agente, la policía de tránsito o por la autoridad competente."},{termino:"Tránsito",significado:"Es la movilización de personas, animales o vehículos por una vía pública o privada abierta al público."},{termino:"Transporte",significado:"Es el traslado de personas, animales o cosas de un punto a otro a través de un medio físico."},{termino:"Vehículo",significado:"Todo aparato montado sobre ruedas que permite el transporte de personas, animales o cosas de un punto a otro por vía terrestre pública o privada abierta al público."},{termino:"Vía",significado:"Zona de uso público o privado, abierta al público, destinada al tránsito de vehículos, personas y animales."}],complementario:[{tema:"1. Generalidades del accidente de tránsito",referencia:"Ramos Enriquez, H. F., & Quiroga Amaya, L. A. (2017). <em>Investigación de Accidentes de Tránsito en Colombia</em>. Bogotá: Imprenta Nacional.",tipo:"Libro",link:"https://www.policia.gov.co/sites/default/files/publicaciones-institucionales/libro-investigacion-accidentes-de-transito-en-colombia.pdf"},{tema:"1. Generalidades del accidente de tránsito",referencia:"Congreso de la República. (13 de Septiembre de 2002). Ley 769 de 2002. Código Nacional de Tránsito. Bogotá, Bogotá DC, Colombia: Secretaria del Senado.",tipo:"Ley",link:"http://www.secretariasenado.gov.co/senado/basedoc/ley_0769_2002.html#1"},{tema:"3. Actuaciones de policía judicial en accidentes de tránsito",referencia:"Fiscalía General de la Nación. (abril 18 de 2018). Manual del sistema de cadena de custodia. <em>Manual de cadena de custodia</em>. Bogotá , Colombia: Imprenta Nacional.",tipo:"Manual",link:"downloads/manual-del-sistema-de-cadena-de-custodia.pdf"},{tema:"4. El informe policial de accidentes de tránsito IPAT",referencia:"Ministerio de Transporte. (06 de Diciembre de 2012). Resolución 0011268 de 2012. <em>Por la cual se adopta el nuevo informe policial de accidentes de tránsito (IPAT), su Manual de diligenciamiento y se dictan otras disposiciones</em>. Bogotá, Bogotá DC., Colombia: Imprenta Nacional.",tipo:"Manual",link:"https://www.redjurista.com/Documents/resolucion_11268_de_2012_ministerio_de_transporte.aspx#/"}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Claudia Patricia Aristizabal",cargo:"Responsable del Ecosistema",centro:"Dirección General"},{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Responsable de Línea de Producción",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Hoover Fabián Ramos Enríquez",cargo:"Experto Temático",centro:"Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander "},{nombre:"Fabián Leonardo Correa Díaz",cargo:"Diseñador Instruccional",centro:"Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander "},{nombre:"Carolina Coca Salazar",cargo:"Asesora Metodológica",centro:"Centro de Diseño y Metrología  - Regional Distrito Capital"},{nombre:"Sandra Patricia Hoyos Sepúlveda",cargo:"Corrección de Estilo",centro:"Centro de Diseño y Metrología  - Regional Distrito Capital"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Juan Daniel Polanco",cargo:"Diseñador de Contenidos Digitales",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Francisco José Lizcano Reyes",cargo:"Desarrollador Fullstack",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Wilson Andrés Arenales Cáceres",cargo:"Storyboard e Ilustración",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Carlos Eduardo Garavito Parada",cargo:"Animador y Productor Multimedia",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Camilo Andrés Bolaño Rey",cargo:"Actividad Didáctica",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Zuleidy María Ruíz Torres",cargo:"Validador de Recursos Educativos Digitales",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Luis Gabriel Urueta Alvarez",cargo:"Validador de Recursos Educativos Digitales",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Daniel Ricardo Mutis Gómez",cargo:"Evaluador para Contenidos Inclusivos y Accesibles",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});o["a"].prototype.$config=v;var k=n("9224");o["a"].prototype.$package=k,new o["a"]({router:h,store:g["a"],render:function(e){return e(l)}}).$mount("#app")},"71f8":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-1.69d42a91.svg"},"74b5":function(e,a,n){e.exports=n.p+"img/banner-princiapal.d32759ba.png"},"7d72":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-3.70bc7586.svg"},"8f04":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-2.53778122.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.1","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},a00a:function(e,a,n){e.exports=n.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,a,n){},ce7c:function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.b7cb32c7.png"},f53d:function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-4.f85527ec.svg"}});
//# sourceMappingURL=app.57a80e72.js.map