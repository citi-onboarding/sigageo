(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{16:function(e,c,t){},54:function(e,c,t){},55:function(e,c,t){},71:function(e,c,t){},72:function(e,c,t){},73:function(e,c,t){},74:function(e,c,t){},75:function(e,c,t){},80:function(e,c,t){},81:function(e,c,t){},82:function(e,c,t){},83:function(e,c,t){"use strict";t.r(c);var n=t(0),i=t(1),s=t.n(i),a=t(28),o=t.n(a),l=t(6),r=t.n(l),d=t(10),j=t(3),u=t(5),O=t.n(u);t(54);t(55);var b=function(e){var c=e.titulo,t=e.subtitulo,i=e.texto,s=e.imagem;return Object(n.jsxs)("div",{className:"card-servico",children:[Object(n.jsx)("img",{src:s,alt:"icone-servico"}),Object(n.jsx)("h2",{children:c}),Object(n.jsx)("h3",{children:t}),Object(n.jsx)("div",{id:"texto-servico",children:Object(n.jsx)("p",{children:i})})]})},h=t(11),A=t.n(h);t(16);var m=function(){return Object(n.jsx)("div",{className:"slick-dot"})};var x=function(e){var c=e.dots,t=e.atual,i=e.total;return Object(n.jsxs)("div",{className:"slick-dots",children:[Object(n.jsx)("h2",{children:"0"+t}),Object(n.jsxs)("ul",{style:{width:"80%"},children:[" ",c," "]}),Object(n.jsx)("h2",{children:"0"+i})]})};var v=function(e){var c=e.direction,t=e.onClick;return Object(n.jsx)("div",{className:"slick-arrow ".concat(c),onClick:t,children:Object(n.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAtFBMVEUAAAAzZmYwc20vc2wwc2sramovcWgwc2wwc2wtcWw1dWowdGwwc2wyc24wc2wwc20wdW4wdGwwc2wwcHArcXEwc2wwc2wvcWsudGsycm0wc2wwc2wxc2sxcW0wc2wwc20xc2wudG0wc2wwc2wvcmwwc2wvc2wwc20wc2wteGkxcmwudW0wc2wwdGwwc2wycWoycGoxc20wc2wwc2wudG4zdW0wc2wwdGwydGkwcmwwc2wAAADL6NzCAAAAOnRSTlMABVuHZAwbzt4tGNbuM9rrJcD+EBLG8Cs3OPH0Pj/5yklN29Wc/Oeb9hHCPfrL4yQpKujpLCPB6i6GBKSG3QAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkDAcNDinNzwA9AAAA4ElEQVRYw+2X1xKCQAxF194bIvYuWLBiz/9/mKCjM6gvm6uOKOf93M0O2SERwud9BIKhcATwozEiiifYfjJFDukM9/wsXcjlMZ+oANR/RiliPikqUr9NCfS1MlQ/aRWP+1XMr3ncrzf+3G9+2ne/Pxla7c7D+ZIoXaH2AJ+oLwaQT7owsADCA4aYPxJj9kc8M0HawEY3oUaazswnrTxfyLbyfYKx/IKEFZpg/UaC9I/99QlrPGHjzQT327S2aAJnUkUHTXzUdd1ix/Hxcf92i/2B6V9XHr7vLF1HaOnykeAEs6//QHQCY+UAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMTItMDdUMTM6MTQ6NDErMDA6MDAqK1R8AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTEyLTA3VDEzOjE0OjQxKzAwOjAwW3bswAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=",alt:"",className:"arrow-img"})})};t(71);var w=function(){var e=Object(i.useState)([]),c=Object(j.a)(e,2),t=c[0],s=c[1],a=Object(i.useState)(1),o=Object(j.a)(a,2),l=o[0],r=o[1];return Object(i.useEffect)((function(){O.a.get("http://localhost:3001/api/servicos").then((function(e){s(e.data)}))}),[]),Object(n.jsx)("div",{className:"slick-servico",children:Object(n.jsx)(A.a,{afterChange:function(e){r((e||0)+1)},dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,centerMode:!0,arrows:!0,className:"slides",appendDots:function(e){return Object(n.jsx)(x,{dots:e,atual:l,total:t.length})},customPaging:function(){return Object(n.jsx)(m,{})},nextArrow:Object(n.jsx)(v,{direction:"next"}),prevArrow:Object(n.jsx)(v,{direction:"last"}),children:null===t||void 0===t?void 0:t.map((function(e,c){var t;return Object(n.jsx)(b,{titulo:e.titulo,subtitulo:e.subtitulo,texto:e.descricao,imagem:null===(t=e.image[0])||void 0===t?void 0:t.secure_url},c)}))})})};t(72);var f=function(e){var c=e.nome,t=e.cargo,i=e.texto,s=e.imagem;return Object(n.jsxs)("div",{className:"card-depoimento",children:[Object(n.jsxs)("div",{className:"depoimento-icone",children:[Object(n.jsx)("div",{className:"icone-bg"}),Object(n.jsx)("div",{className:"depoimento-foto",style:{backgroundImage:"url(".concat(s,")")}})]}),Object(n.jsxs)("div",{className:"depoimento-header",children:[Object(n.jsx)("h2",{children:c}),Object(n.jsx)("h3",{children:t})]}),Object(n.jsx)("div",{id:"texto-depoimento",children:Object(n.jsx)("p",{children:i})})]})};t(73);var p=function(){var e=Object(i.useState)([]),c=Object(j.a)(e,2),t=c[0],s=c[1],a=Object(i.useState)(1),o=Object(j.a)(a,2),l=o[0],r=o[1],d=function(){var e=Object(i.useState)({width:void 0,height:void 0}),c=Object(j.a)(e,2),t=c[0],n=c[1];return Object(i.useEffect)((function(){function e(){n({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),t}();return Object(i.useEffect)((function(){O.a.get("http://localhost:3001/api/depoimentos").then((function(e){s(e.data)}))}),[]),Object(n.jsx)("div",{className:"slick-depoimentos",children:Object(n.jsx)(A.a,{afterChange:function(e){r((e||0)+1)},dots:!0,infinite:!0,speed:500,slidesToShow:d.width>700?2:1,slidesToScroll:1,centerMode:!0,vertical:d.width>700,arrows:!0,className:"slides",appendDots:function(e){return Object(n.jsx)(x,{dots:e,atual:l,total:t.length})},customPaging:function(){return Object(n.jsx)(m,{})},nextArrow:Object(n.jsx)(v,{direction:"next"}),prevArrow:Object(n.jsx)(v,{direction:"last"}),children:null===t||void 0===t?void 0:t.map((function(e,c){var t;return Object(n.jsx)(f,{nome:e.name,cargo:e.cargo,texto:e.depoimento,imagem:null===(t=e.imagem)||void 0===t?void 0:t.url},c)}))})})};t(74);var g=t(12),N=t(17),E=t(96),C=t(97),S=t(98),M=t(99),k=t.p+"static/media/logo.35611127.png";t(75);var G=function(){var e,c,t,s,a,o,l=Object(i.useState)({nome:"",email:"",telefone:"",conheceu:"",assunto:"",mensagem:""}),u=Object(j.a)(l,2),b=u[0],h=u[1],A=function(e){h(Object(N.a)(Object(N.a)({},b),{},Object(g.a)({},e.target.name,e.target.value)))},m=function(){var e=Object(d.a)(r.a.mark((function e(c){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c.preventDefault(),e.next=4,O.a.post("http://localhost:3001/send",b);case 4:console.log("Email enviado com sucesso!"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log((null===e.t0||void 0===e.t0?void 0:e.t0.response)||e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(c){return e.apply(this,arguments)}}(),x=Object(i.useState)([]),v=Object(j.a)(x,2),w=v[0],f=v[1];return Object(i.useEffect)((function(){O.a.get("http://localhost:3001/api/contatos").then((function(e){f(e.data)}))}),[]),Object(n.jsxs)("div",{className:"contato-sec",children:[Object(n.jsx)("div",{className:"fale-conosco",children:Object(n.jsxs)("div",{className:"contato",children:[Object(n.jsx)("h2",{children:"FALE CONOSCO"}),Object(n.jsxs)("form",{onSubmit:m,children:[Object(n.jsx)("input",{required:!0,type:"text",name:"nome",id:"nome",value:b.nome,onChange:A,placeholder:"NOME"}),Object(n.jsx)("input",{required:!0,type:"email",name:"email",id:"email",value:b.email,onChange:A,placeholder:"EMAIL"}),Object(n.jsx)("input",{required:!0,type:"tel",name:"telefone",id:"telefone",value:b.telefone,onChange:A,placeholder:"TELEFONE"}),Object(n.jsxs)("select",{required:!0,name:"conheceu",id:"conheceu",value:b.conheceu,onChange:A,children:[Object(n.jsx)("option",{disabled:!0,defaultValue:!0,value:"",children:"COMO NOS CONHECEU"}),Object(n.jsx)("option",{value:"indica\xe7\xe3o",children:"INDICA\xc7\xc3O"}),Object(n.jsx)("option",{value:"google",children:"GOOGLE"}),Object(n.jsx)("option",{value:"linkedin",children:"LINKEDIN"}),Object(n.jsx)("option",{value:"instagram",children:"INSTAGRAM"}),Object(n.jsx)("option",{value:"facebook",children:"FACEBOOK"})]}),Object(n.jsxs)("select",{required:!0,name:"assunto",id:"assunto",value:b.assunto,onChange:A,children:[Object(n.jsx)("option",{disabled:!0,defaultValue:!0,value:"",children:"ASSUNTO"}),Object(n.jsx)("option",{value:"projeto",children:"PROJETO"}),Object(n.jsx)("option",{value:"parceria",children:"PARCERIA"}),Object(n.jsx)("option",{value:"outro",children:"OUTRO"})]}),Object(n.jsx)("textarea",{required:!0,name:"mensagem",id:"mensagem",value:b.mensagem,onChange:A,placeholder:"MENSAGEM"}),Object(n.jsx)("input",{type:"submit",value:"ENVIAR"})]})]})}),Object(n.jsxs)("div",{className:"infos",children:[Object(n.jsx)("h2",{children:"ENTRE EM CONTATO CONOSCO"}),Object(n.jsxs)("div",{className:"social",children:[Object(n.jsx)("div",{className:"separador"}),Object(n.jsxs)("div",{className:"endereco-info info",children:[Object(n.jsx)("p",{children:null===(e=w[0])||void 0===e?void 0:e.endereco}),Object(n.jsx)(E.a,{className:"info-icon pin-icon"})]}),Object(n.jsx)("div",{className:"separador"}),Object(n.jsxs)("div",{className:"email-info info",children:[Object(n.jsx)("p",{children:null===(c=w[0])||void 0===c?void 0:c.email}),Object(n.jsx)(C.a,{className:"info-icon mail-icon"})]}),Object(n.jsxs)("div",{className:"instagram-info info",children:[Object(n.jsx)("p",{children:null===(t=w[0])||void 0===t?void 0:t.instagram}),Object(n.jsx)(S.a,{className:"info-icon ig-icon"})]}),Object(n.jsxs)("div",{className:"facebook-info info",children:[Object(n.jsx)("p",{children:null===(s=w[0])||void 0===s?void 0:s.facebook}),Object(n.jsx)(M.a,{className:"info-icon fb-icon"})]}),Object(n.jsxs)("div",{className:"social-mobile",children:[Object(n.jsx)("a",{href:"https://www.instagram.com/".concat(null===(a=w[0])||void 0===a?void 0:a.instagram),children:Object(n.jsx)(S.a,{className:"mobile-icon"})}),Object(n.jsx)("a",{href:"https://www.".concat(null===(o=w[0])||void 0===o?void 0:o.facebook),children:Object(n.jsx)(M.a,{className:"mobile-icon"})})]})]}),Object(n.jsx)("img",{src:k,alt:"logo",className:"logo"})]})]})};t(80);var T=function(){return Object(n.jsxs)("div",{className:"secao-depoimentos",children:[Object(n.jsxs)("div",{className:"descricao-depoimentos",children:[Object(n.jsx)("h2",{children:"DEPOIMENTOS"}),Object(n.jsx)("p",{children:"Saiba quem trabalhou conosco e o que ele(a) achou da experi\xeancia."})]}),Object(n.jsx)("div",{className:"slick-depoimentos-div",children:Object(n.jsx)(p,{})})]})};t(81);var I=function(){return Object(n.jsxs)("div",{className:"footer",children:[Object(n.jsx)("span",{children:"\xa9 2020 | SigaGeo Jr"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{children:"Made with </> and \u2665 by "}),Object(n.jsx)("img",{src:"https://res.cloudinary.com/dupufkeck/image/upload/v1606959189/output-onlinepngtools_rzqfhs.png",alt:"logo citi"})]})]})};t(82);var R=function(){return Object(n.jsxs)("div",{className:"secao-servicos",children:[Object(n.jsx)("h2",{children:"NOSSOS SERVI\xc7OS"}),Object(n.jsx)(w,{})]})};var y=function(){return Object(n.jsxs)("div",{className:"site",children:[Object(n.jsx)(R,{}),Object(n.jsx)(T,{}),Object(n.jsx)(G,{}),Object(n.jsx)(I,{})]})};o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(y,{})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.d437cad0.chunk.js.map