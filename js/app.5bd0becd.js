(function(a){function e(e){for(var i,n,s=e[0],c=e[1],l=e[2],d=0,m=[];d<s.length;d++)n=s[d],o[n]&&m.push(o[n][0]),o[n]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(a[i]=c[i]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,l||[]),t()}function t(){for(var a,e=0;e<r.length;e++){for(var t=r[e],i=!0,s=1;s<t.length;s++){var c=t[s];0!==o[c]&&(i=!1)}i&&(r.splice(e--,1),a=n(n.s=t[0]))}return a}var i={},o={0:0},r=[];function n(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=a,n.c=i,n.d=function(a,e,t){n.o(a,e)||Object.defineProperty(a,e,{enumerable:!0,get:t})},n.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},n.t=function(a,e){if(1&e&&(a=n(a)),8&e)return a;if(4&e&&"object"===typeof a&&a&&a.__esModule)return a;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var i in a)n.d(t,i,function(e){return a[e]}.bind(null,i));return t},n.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return n.d(e,"a",e),e},n.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},n.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;r.push([0,1]),t()})({"/2mM":function(a,e,t){},"/V2t":function(a,e,t){a.exports=t.p+"img/tedx-matias-laca.a3e49cd0.jpg"},0:function(a,e,t){a.exports=t("Vtdi")},"2Ctt":function(a,e,t){"use strict";var i=t("PGrL"),o=t.n(i);o.a},"42b/":function(a,e,t){a.exports=t.p+"img/tedx-eduardo-bauza.f4119f46.jpg"},"5qYp":function(a,e,t){a.exports=t.p+"img/choco-artesanal.33b4473d.jpg"},"9PVw":function(a,e,t){a.exports=t.p+"img/facundo.a24e8dfa.jpg"},"9dZs":function(a,e,t){},BP33:function(a,e,t){a.exports=t.p+"img/tedx-carmen.0dbdcb72.jpg"},Bqlp:function(a,e,t){a.exports=t.p+"img/tedx-winers.2ad5cc01.jpg"},Fl7p:function(a,e,t){a.exports=t.p+"img/tedx-ana-silva.58f3a643.jpg"},GNwH:function(a,e,t){a.exports=t.p+"img/horacio.1be5fb24.jpeg"},GZi4:function(a,e,t){a.exports=t.p+"img/TEDxSJ-small.029f45a9.png"},HYkn:function(a,e,t){"use strict";var i=t("k5dF"),o=t.n(i);o.a},IXW2:function(a,e,t){a.exports=t.p+"img/diego.d20a0002.jpeg"},KVXr:function(a,e,t){a.exports=t.p+"img/peraza-gonzales.b320068d.png"},M5lc:function(a,e,t){},N5h4:function(a,e,t){"use strict";var i=t("QetK"),o=t.n(i);o.a},PGrL:function(a,e,t){},PeN7:function(a,e,t){a.exports=t.p+"img/san-jose.bc3fc6ee.png"},QZgU:function(a,e,t){a.exports=t.p+"img/cantina-club-sj.3d2921aa.png"},QetK:function(a,e,t){},Vtdi:function(a,e,t){"use strict";t.r(e);t("55Il");var i=t("Kw5r"),o=t("zlta"),r=t.n(o);t("v0CA");i["default"].use(r.a,{});var n=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("v-app",{attrs:{fluid:""}},[t("router-view")],1)},s=[],c=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("tedx-header",{on:{confettiEv:a.activateConfetti,moveTo:a.moveToMain}}),t("tedx-carousel"),t("v-container",{attrs:{fluid:""}},[t("v-container",[t("v-layout",{ref:"ORADORES",staticClass:"title-layout",attrs:{row:"",wrap:""}},[t("h1",[a._v("Nuestros Oradores ")]),t("span",{staticClass:"spinEmoji",attrs:{id:"clapEmoji"}},[a._v("👏")])]),t("v-layout",{attrs:{row:"",wrap:""}},a._l(a.speakers,function(a){return t("tedex-speaker-detail",{key:a.id,attrs:{speaker:a}})}))],1),t("v-layout",{ref:"SPONSORS",staticClass:"title-layout",attrs:{row:"",wrap:""}},[t("h1",[a._v("Nuestros Sponsors ")]),t("span",{staticClass:"spinEmoji"},[a._v("⭐️")])]),t("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[t("tedx-sponsor")],1),t("v-layout",{ref:"EQUIPO",staticClass:"title-layout",attrs:{row:"",wrap:""}},[t("h1",[a._v("Nuestros Equipo ")]),t("span",{staticClass:"spinEmoji",attrs:{id:"hart"}},[a._v("❤️")])]),t("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[t("v-layout",{attrs:{row:"",wrap:""}},[a._l(a.teamMembers,function(e,i){return[i!=a.teamMembers.length-1?t("tedx-team-member",{key:e.id,attrs:{teamMember:e,"data-text":i}}):a._e()]}),t("v-flex",{attrs:{xs4:"",height:"382px"}}),t("tedx-team-member",{attrs:{teamMember:a.teamMembers[a.teamMembers.length-1]}})],2)],1),t("v-slide-y-transition",{attrs:{mode:"out-in"}},[t("v-layout",{attrs:{column:"","align-center":""}},[t("canvas",{ref:"confettiHolder",attrs:{id:"confetti-holder"}}),t("blockquote",[a._v("\n          “First, solve the problem. Then, write the code.”\n          "),t("footer",[t("small",[t("em",[a._v("—John Johnson")])])])])])],1)],1),t("tedx-footer")],1)},l=[],u=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("v-toolbar",{staticStyle:{"background-color":"white",color:"#e82a0f"},attrs:{dark:"",color:"darken-1"}},[t("v-toolbar-title",[t("img",{staticClass:"logo",attrs:{src:a.logo}})]),t("v-spacer"),t("v-toolbar-items",{staticClass:"red--text"},[t("v-btn",{attrs:{flat:""},on:{click:a.backHome}},[a._v("Inicio")]),t("v-btn",{staticClass:"red--text",attrs:{flat:""},on:{click:a.emitConfettiEv}},[a._v("🎊🎉")]),t("v-btn",{staticClass:"red--text",attrs:{slot:"activator",dark:"",flat:""},on:{click:a.moveTo},slot:"activator"},[a._v("\n          Oradores\n        ")]),t("v-btn",{staticClass:"red--text",attrs:{flat:""},on:{click:a.moveTo}},[a._v("Sponsors")]),t("v-btn",{staticClass:"red--text",attrs:{flat:""},on:{click:a.moveTo}},[a._v("Equipo")]),t("v-btn",{staticClass:"red--text",attrs:{flat:""},on:{click:a.moveTo}},[a._v("Contacto")])],1)],1)},d=[],m=t("GZi4"),f=t.n(m),p={data(){return{items:[{title:"2018"},{title:"2019?"}],logo:f.a}},methods:{backHome(){this.$router.push("/")},emitConfettiEv(){this.$emit("confettiEv")},moveTo(a){let e=a.target.innerText.toUpperCase();this.$emit("moveTo",e)}}},b=p,g=(t("pc5T"),t("nDQe"),t("KHd+")),v=Object(g["a"])(b,u,d,!1,null,"14f329e1",null),h=v.exports,w=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("v-footer",{attrs:{dark:"",height:"auto"}},[t("v-card",{staticClass:"darken-1 white--text text-xs-center width-100",staticStyle:{"background-color":"#e82a0f"},attrs:{flat:"",tile:""}},[t("v-card-text",a._l(a.iconsList,function(e){return t("v-btn",{key:e.id,staticClass:"mx-3 white--text",attrs:{icon:""}},[t("a",{attrs:{href:e.url,target:"_blank"}},[t("v-icon",{attrs:{size:"24px"}},[a._v(a._s(e.icon))])],1)])})),t("v-card-title",{staticClass:"white--text pt-0 jc-center"},[t("h2",[a._v("Ideas que conquistan")])]),t("v-divider"),t("v-card-text",{staticClass:"white--text black"},[t("strong",[t("a",{staticClass:"blue--text",attrs:{href:"https://www.linkedin.com/in/facundopetre/"}},[a._v("〈code〉with ❤️ by @facup3")])])])],1)],1)},x=[],y={data:()=>({iconsList:[{icon:"fab fa-facebook",url:"https://www.facebook.com/TEDxSanJosedeMayo/",id:"icon-facebook"},{icon:"fab fa-twitter",url:"https://twitter.com/TEDxSJdeM",id:"icon-twitter"},{icon:"fab fa-instagram",url:"https://www.instagram.com/tedxsanjosedemayo/",id:"icon-instagram"}]})},k=y,j=(t("N5h4"),Object(g["a"])(k,w,x,!1,null,"7ac04c00",null)),_=j.exports,C=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("v-carousel",a._l(a.items,function(a,e){return t("v-carousel-item",{key:e,attrs:{src:a.src}})}))},q=[],z={data(){return{items:[{src:t("e01T")},{src:t("e7ac")},{src:t("42b/")},{src:t("Fl7p")},{src:t("/V2t")},{src:t("BP33")},{src:t("jd/0")},{src:t("Bqlp")}]}}},M=z,E=Object(g["a"])(M,C,q,!1,null,null,null),S=E.exports,T=t("i+b0"),P=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("v-flex",{attrs:{xs12:"",sm6:"",height:"690px"}},[t("v-card",{staticClass:"speaker-card",attrs:{height:"100%"}},[t("v-container",{attrs:{height:"100%",fluid:"","grid-list-md":""}},[t("v-layout",{attrs:{row:"",wrap:""}},[t("v-flex",{attrs:{xs12:""}},[t("v-card",{attrs:{height:"650px"}},[t("v-card-media",{attrs:{height:"315px",width:"560px"}},[t("iframe",{attrs:{width:"100%",height:"100%",src:a.speaker.videoUrl,frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:""}})]),t("v-card-title",{attrs:{"primary-title":""}},[t("div",[t("h3",{staticClass:"headline mb-0"},[a._v(a._s(a.speaker.name))]),t("div",[a._v(a._s(a.speaker.summary))])])]),t("v-card-actions",[t("v-spacer"),a._l(a.socials,function(e){return e.url?t("v-btn",{key:e.icon,attrs:{icon:""}},[t("a",{attrs:{href:e.url,target:"_blanck"}},[t("v-icon",[a._v(a._s(e.icon))])],1)]):a._e()})],2)],1)],1)],1)],1)],1)],1)},O=[],A={data(){return{socials:this.$props.speaker.social}},props:["speaker"],mounted(){}},U=A,F=(t("jMwC"),Object(g["a"])(U,P,O,!1,null,"57d5ea31",null)),I=F.exports,L=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("v-layout",{attrs:{row:"",wrap:""}},a._l(a.images,function(e){return t("v-flex",{key:e.id,attrs:{xs12:"",sm4:""}},[t("a",{attrs:{href:e.url,target:"_blank"}},[e.src?t("v-avatar",{attrs:{tile:!0,size:200,color:"grey lighten-4"}},[t("img",{attrs:{src:e.src,alt:"avatar"}})]):a._e()],1)])}))},N=[],H={data(){return{images:[{src:"",id:"fill-1"},{src:t("PeN7"),url:"http://www.sanjose.gub.uy/",id:8},{src:"",id:"fill-2"},{src:t("th5U"),url:"http://www.opticaflorida.com.uy/v3/index.php",id:6},{src:t("bF43"),url:"https://utec.edu.uy/",id:9},{src:t("i7ZP"),url:"http://www.marcre.com.uy/",id:5},{src:t("oHWK"),url:"http://www.amsj.com.uy/",id:1},{src:t("KVXr"),url:"",id:7},{src:t("QZgU"),url:"https://www.facebook.com/CantinadelClubSanJose/",id:2},{src:t("5qYp"),url:"https://www.facebook.com/ChocoArtesanalsj/",id:3},{src:t("gFWi"),url:"http://www.hcentro.com/",id:4},{src:t("uxyP"),url:"http://www.enfrecuencia.com.uy/",id:10},{src:"",id:"fill-3"},{src:t("pu6A"),url:"http://www.enfrecuencia.com.uy/",id:11}]}},props:["sponsor"]},$=H,D=Object(g["a"])($,L,N,!1,null,null,null),G=D.exports,V=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("v-flex",{attrs:{xs12:"",sm4:"",height:"382px"}},[t("v-card",{staticClass:"member-card",attrs:{height:"100%"}},[t("v-card-media",{staticClass:"white--text",attrs:{height:"250px",width:"250px"}},[t("v-avatar",{staticStyle:{margin:"'auto'"},attrs:{size:"250",color:"grey lighten-4"}},[t("div",{staticClass:"team-image",staticStyle:{"background-position-y":"0"},style:{"background-image":"url('"+a.currentImage.image+"')","background-size":a.currentImage.size},attrs:{alt:"avatar"}})])],1),t("v-card-title",{attrs:{height:"289px"}},[t("div",[t("h3",[a._v(a._s(a.teamMember.name))]),t("br"),t("span",[a._v(a._s(a.teamMember.summary))])])]),t("v-card-actions",[t("v-spacer"),a._l(a.socials,function(e){return e.url?t("v-btn",{key:e.icon,attrs:{icon:""}},[t("a",{attrs:{href:e.url,target:"_blanck"}},[t("v-icon",[a._v(a._s(e.icon))])],1)]):a._e()})],2)],1)],1)},B=[],J={data(){return{socials:this.$props.teamMember.social,images:[{id:1,image:t("IXW2")},{id:2,image:t("hwek"),size:"265px"},{id:3,image:t("GNwH"),size:"250px"},{id:4,image:t("vI9I"),size:"269px"},{id:5,image:t("i0a/"),size:"250px"},{id:6,image:t("u0WW"),size:"301px"},{id:7,image:t("9PVw")}],currentImage:""}},props:["teamMember"],created(){this.currentImage=this.images.filter(a=>a.id==this.$props.teamMember.id)[0]}},Z=J,K=(t("2Ctt"),Object(g["a"])(Z,V,B,!1,null,"6fd39d61",null)),W=K.exports,Q={components:{TedxHeader:h,TedxFooter:_,TedxCarousel:S,TedexSpeakerDetail:I,TedxSponsor:G,TedxTeamMember:W},data(){return{speakers:T.speakers,teamMembers:T.teamMembers}},methods:{activateConfetti:function(){let a={target:"confetti-holder",max:"500",size:"1",animate:!0,props:["circle","square","triangle","line"],colors:[[165,104,246],[230,61,135],[0,199,228],[253,214,126]],clock:"5",width:"1680",height:"918"},e=new ConfettiGenerator(a);e.render(),setTimeout(()=>{e.clear()},6e3)},moveToMain(a){console.log(a);let e=this.$refs[a];this.$SmoothScroll(e,1e3)}},mounted(){this.activateConfetti()}},R=Q,X=(t("HYkn"),t("hLml"),Object(g["a"])(R,c,l,!1,null,"0fb04c14",null)),Y=X.exports,aa={name:"App",components:{TedxMain:Y},data(){return{clipped:!1,drawer:!0,fixed:!1,items:[{icon:"bubble_chart",title:"Inspire"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}}},ea=aa,ta=Object(g["a"])(ea,n,s,!1,null,null,null),ia=ta.exports,oa=t("jE9Z");const ra=[{path:"/",component:Y}];var na=ra,sa=(t("uie4"),t("xOjq")),ca=t.n(sa);i["default"].use(ca.a),i["default"].config.productionTip=!1,i["default"].use(r.a,{iconfont:"mdi"});const la=new oa["a"]({routes:na});i["default"].use(oa["a"]),new i["default"]({render:a=>a(ia),router:la}).$mount("#app")},bF43:function(a,e,t){a.exports=t.p+"img/utec.517e7fc5.png"},e01T:function(a,e,t){a.exports=t.p+"img/tedx-bunker-2.e14b6cb9.jpg"},e7ac:function(a,e,t){a.exports=t.p+"img/tedx-gonzalo-centurion.61e9c094.jpg"},gFWi:function(a,e,t){a.exports=t.p+"img/hotel-centro.e1549db4.png"},hLml:function(a,e,t){"use strict";var i=t("/2mM"),o=t.n(i);o.a},hwek:function(a,e,t){a.exports=t.p+"img/evangelina.7fc4091e.jpeg"},"i+b0":function(a){a.exports={speakers:[{name:"Carmen Corrales",id:1,image:"@/assets/images/speakers/carmen.jpg",videoUrl:"https://www.youtube.com/embed/KTVz-gBokrc","talk-title":"Quien canta sus males espanta... \n Animate... cantemos",summary:'Carmen nos demuestra que todos podemos cantar. Es músico y docente en dicha área. La música es una disciplina muy presente en su familia. Se desempeña como profesora en bachillerato de educación secundaria y en el Instituto de Profesores "Artigas". Es directora y arregladora de coros de adultos, jóvenes y niños. Lleva adelante un taller de sensibilización a la música con niños de 2 a 8 años, y de murga con todas las edades, a demás de Uruguay ha participado y dictado talleres para docentes de música en Argentina y Brasil, trabajando bajo la modalidad de ludopedagogía.',social:[{url:"",icon:"fab fa-facebook"},{url:"",icon:"fab fa-twitter"},{url:"",icon:"fab fa-linkedin-in"},{url:"",icon:"fab fa-github"},{url:"",icon:"fab fa-instagram"},{url:"",icon:"fas fa-globe-americas"}]},{name:"Eduardo Bauzá",id:2,image:"@/assets/images/speakers/eduardo.jpeg",videoUrl:"https://www.youtube.com/embed/CjUxdk0Tgvk","talk-title":"¿Por qué soy ecologista?",summary:"Eduardo reflexiona sobre la situación ambiental provocada por el sistema de producción agropecuaria dominante. Productor quesero artesanal orgánico, certificado, dedicado a la producción agroecológica desde hace veinte años. Cuenta con formación en bienestar animal de la Universidad de Milán y en certificación participativa de la producción agroecológica en la Red EcoVida de Brasil, además realizó una experiencia de apicultura ecológica en Valencia, España. Fue integrante de APODU (Asociación de productores orgánicos del Uruguay), luego pasó a formar parte desde su fundación, de la Red de Agroecología Nacional, actualmente milita en la Regional San José de dicha red. Lleva adelante su establecimiento productivo sin el uso de agrotóxicos, se define como un ambientalista con amor a la naturaleza.",social:[{url:"",icon:"fab fa-facebook"},{url:"",icon:"fab fa-twitter"},{url:"",icon:"fab fa-linkedin-in"},{url:"",icon:"fab fa-github"},{url:"",icon:"fab fa-instagram"},{url:"",icon:"fas fa-globe-americas"}]},{name:"Gonzalo Centurión",id:3,image:"@/assets/images/speakers/gonzalo.jpeg",videoUrl:"https://www.youtube.com/embed/D64BYErIKUA","talk-title":"3 horas en 18 minutos",summary:"Gonzalo nos trae recuerdos vinculados a la cocina y lo que significa para nuestra vida cocinar. Chef egresado del Instituto Crandon, apasionado de la Gastronomía. Se autodefine como una persona innovadora que busca inculcar la cocina como una experiencia para disfrutar y compartir. Organizador del Festival Gastronómico de San José. Trabajó con varios chef reconocidos como Ana Maria Bozzo (tenedor de oro en Francia), entre otros. Chef egresado del Instituto Crandon, apasionado de la Gastronomía. Se auto define como una persona innovadora que busca inculcar la cocina como una experiencia para disfrutar y compartir. Organizador del Festival Gastronómico de San José. Trabajó con varios chef reconocidos como con la Chef Ana Maria Bozzo (tenedor de oro en Francia) entre otros.",social:[{url:"",icon:"fab fa-facebook"},{url:"",icon:"fab fa-twitter"},{url:"",icon:"fab fa-linkedin-in"},{url:"",icon:"fab fa-github"},{url:"",icon:"fab fa-instagram"},{url:"",icon:"fas fa-globe-americas"}]},{name:"Ana de los Santos",id:4,image:"",videoUrl:"https://www.youtube.com/embed/UnGZxzl6Zek","talk-title":"Compartir la vida donando sangre",summary:"Ana nos demuestra lo importante de ser donante voluntario de sangre. Médico especialista en Hemoterapia y Medicina transfusional. Posgrado en Gestión y Administración en Políticas de Salud. Directora Técnica del Banco de Sangre Departamental de San José y de Flores. Integrante de la Sociedad de Hemoterapia del Uruguay y del grupo Comunidad, un grupo de promotoras de la donación voluntaria de sangre en San José. Completamente convencida de que la Donación de sangre voluntaria es uno de los mayores actos de solidaridad y altruismo en nuestra sociedad.",social:[{url:"",icon:"fab fa-facebook"},{url:"",icon:"fab fa-twitter"},{url:"",icon:"fab fa-linkedin-in"},{url:"",icon:"fab fa-github"},{url:"",icon:"fab fa-instagram"},{url:"",icon:"fas fa-globe-americas"}]},{name:"Pedro Peña",id:5,image:"",videoUrl:"https://www.youtube.com/embed/bkAVJAKaKyY","talk-title":"Los límites de tu lenguaje",summary:'Escritor y Profesor de Literatura, es cofundador de la revista La letra breve. En 2006 obtuvo el Premio Nacional de Narrativa. Recibió en 2012 la beca del Fondo de Estimulo a la Formación y Creación Artística y en 2015 el premio Morosoli a la cultura uruguaya en la categoría narrativa. A su vez ha publicado artículos, reseñas y ficción en el suplemento Cultural de El País (Uruguay). Es responsable de llevar adelante la Biblioteca Ambulante Maragata, recorriendo distintos barrios de la ciudad. Una de sus novelas, "La noche que no se repite", fue llevada al cine y será estrenada el próximo 12 de abril.',social:[{url:"",icon:"fab fa-facebook"},{url:"",icon:"fab fa-twitter"},{url:"",icon:"fab fa-linkedin-in"},{url:"",icon:"fab fa-github"},{url:"",icon:"fab fa-instagram"},{url:"",icon:"fas fa-globe-americas"}]},{name:"Matias Laca",id:6,image:"",videoUrl:"https://www.youtube.com/embed/iVZOAq4OO-U","talk-title":"Aprende seducción y mejora tu calidad de vida",summary:"Matias nos da algunos consejos sobre las habilidades sociales Conocido como Matías Love, es experto en dinámicas sociales, liderazgo y seducción. Apasionado por el comportamiento humano, la programación neurolingüística y las neurociencias. Desde hace dos años viene enseñando a personas principalmente de Uruguay y Argentina, habilidades sociales para convertirse en personas más atractivas e influyentes y a construir vínculos amorosos saludables. Su compromiso es inspirar a las personas a conquistar su mejor versión desde el desarrollo personal.",social:[{url:"https://www.facebook.com/soymatiaslove/",icon:"fab fa-facebook"},{url:"",icon:"fab fa-twitter"},{url:"",icon:"fab fa-linkedin-in"},{url:"",icon:"fab fa-github"},{url:"https://www.youtube.com/channel/UCa1aA-dXF-ZnkXpjS9QWKng",icon:"fab fa-youtube"},{url:"https://www.instagram.com/soymatiaslove/",icon:"fab fa-instagram"},{url:"https://matiaslove.com/",icon:"fas fa-globe"}]}],teamMembers:[{name:"Diego Barboza",id:1,image:"@/assets/images/team/diego.jpeg",videoUrl:"https://www.youtube.com/embed/iVZOAq4OO-U","talk-title":"Aprende seducción y mejora tu calidad de vida",summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla incidunt eos eum adipisci. Iusto in quod repellendus placeat laborum aliquid sequi voluptas natus nihil doloribus? Fugit quaerat sed accusantium quisquam!",social:[{url:"https://www.fb.com/diego.barboza.9026",icon:"fab fa-facebook"},{url:"",icon:"fab fa-twitter"},{url:"",icon:"fab fa-linkedin-in"},{url:"",icon:"fab fa-github"},{url:"",icon:"fab fa-youtube"},{url:"",icon:"fab fa-instagram"},{url:"",icon:"fas fa-globe"}]},{name:"Evangelina Hernández",id:2,image:"@/assets/images/team/evangelina.jpeg",summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla incidunt eos eum adipisci. Iusto in quod repellendus placeat laborum aliquid sequi voluptas natus nihil doloribus? Fugit quaerat sed accusantium quisquam!",social:[{url:"https://www.fb.com/evatota",icon:"fab fa-facebook"},{url:"",icon:"fab fa-twitter"},{url:"",icon:"fab fa-linkedin-in"},{url:"",icon:"fab fa-github"},{url:"",icon:"fab fa-youtube"},{url:"https://www.instagram.com/evatotah/",icon:"fab fa-instagram"},{url:"",icon:"fas fa-globe"}]},{name:"Horacio Piriz",id:3,image:"@/assets/images/team/horacio.jpeg",summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla incidunt eos eum adipisci. Iusto in quod repellendus placeat laborum aliquid sequi voluptas natus nihil doloribus? Fugit quaerat sed accusantium quisquam!",social:[{url:"https://www.fb.com/Horacio.maxx",icon:"fab fa-facebook"},{url:"",icon:"fab fa-twitter"},{url:"",icon:"fab fa-linkedin-in"},{url:"",icon:"fab fa-github"},{url:"",icon:"fab fa-youtube"},{url:"",icon:"fab fa-instagram"},{url:"",icon:"fas fa-globe"}]},{name:"Gonzalo Prado",id:4,image:"@/assets/images/team/gonzalo.jpeg",summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla incidunt eos eum adipisci. Iusto in quod repellendus placeat laborum aliquid sequi voluptas natus nihil doloribus? Fugit quaerat sed accusantium quisquam!",social:[{url:"https://www.fb.com/gonzaloprado8/",icon:"fab fa-facebook"},{url:"",icon:"fab fa-twitter"},{url:"",icon:"fab fa-linkedin-in"},{url:"",icon:"fab fa-github"},{url:"",icon:"fab fa-youtube"},{url:"https://www.instagram.com/gonzaloprado8/",icon:"fab fa-instagram"},{url:"",icon:"fas fa-globe"}]},{name:"Paola Alcorta",id:5,image:"@/assets/images/team/paola.jpeg",summary:"Fotografía Músicos 🎶 Teatro 🎭 Danza 💃 Espectáculos en gral 🎬🎤🎨👏",social:[{url:"https://www.facebook.com/paoliita.alcorta",icon:"fab fa-facebook"},{url:"",icon:"fab fa-twitter"},{url:"",icon:"fab fa-linkedin-in"},{url:"",icon:"fab fa-github"},{url:"",icon:"fab fa-youtube"},{url:"https://www.instagram.com/paoalcortafotografia/",icon:"fab fa-instagram"},{url:"",icon:"fas fa-globe"}]},{name:"Héctor Cotelo",id:6,image:"@/assets/images/team/paola.jpeg",summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla incidunt eos eum adipisci. Iusto in quod repellendus placeat laborum aliquid sequi voluptas natus nihil doloribus? Fugit quaerat sed accusantium quisquam!",social:[{url:"https://www.facebook.com/hcotelo",icon:"fab fa-facebook"},{url:"",icon:"fab fa-twitter"},{url:"",icon:"fab fa-linkedin-in"},{url:"",icon:"fab fa-github"},{url:"",icon:"fab fa-youtube"},{url:"",icon:"fab fa-instagram"},{url:"",icon:"fas fa-globe"}]},{name:"Facundo Petre",id:7,image:"@/assets/images/team/facundo.jpg",summary:"Chico apasionado por la tecnología, desarrollador de software en constante crecimiento. Siempre dispuesto a tomar nuevos retos y desafíos, creciendo en base al conocimiento que estos otorgan. 🚀",social:[{url:"https://www.fb.com/facundo.petre/",icon:"fab fa-facebook"},{url:"https://twitter.com/facup3",icon:"fab fa-twitter"},{url:"https://www.linkedin.com/in/facundopetre/",icon:"fab fa-linkedin-in"},{url:"https://github.com/facundop3",icon:"fab fa-github"},{url:"",icon:"fab fa-youtube"},{url:"",icon:"fab fa-instagram"},{url:"",icon:"fas fa-globe"}]}]}},"i0a/":function(a,e,t){a.exports=t.p+"img/paola.bb3c597a.jpeg"},i7ZP:function(a,e,t){a.exports=t.p+"img/marcre.541e64b6.png"},jMwC:function(a,e,t){"use strict";var i=t("9dZs"),o=t.n(i);o.a},"jd/0":function(a,e,t){a.exports=t.p+"img/tedx-pedro-peña.c856167f.jpg"},k5dF:function(a,e,t){},kClC:function(a,e,t){},nDQe:function(a,e,t){"use strict";var i=t("M5lc"),o=t.n(i);o.a},oHWK:function(a,e,t){a.exports=t.p+"img/amsj.134152ad.png"},pc5T:function(a,e,t){"use strict";var i=t("kClC"),o=t.n(i);o.a},pu6A:function(a,e,t){a.exports=t.p+"img/en-frecuencia.cc85dc77.jpeg"},th5U:function(a,e,t){a.exports=t.p+"img/optica-florida.866ffc1a.png"},u0WW:function(a,e,t){a.exports=t.p+"img/hector.351ecb39.jpeg"},uxyP:function(a,e,t){a.exports=t.p+"img/kroser.d692452d.jpeg"},vI9I:function(a,e,t){a.exports=t.p+"img/gonzalo.65949c40.jpeg"}});
//# sourceMappingURL=app.5bd0becd.js.map