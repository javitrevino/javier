(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{136:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(143),o=t(150);n.default=function(){return r.a.createElement(o.a,null,r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.Link,{to:"/"},"Go back to the homepage"))}},143:function(e,n,t){"use strict";t.r(n),t.d(n,"graphql",function(){return f}),t.d(n,"StaticQueryContext",function(){return s}),t.d(n,"StaticQuery",function(){return p});var a=t(0),r=t.n(a),i=t(4),o=t.n(i),A=t(140),u=t.n(A);t.d(n,"Link",function(){return u.a}),t.d(n,"withPrefix",function(){return A.withPrefix}),t.d(n,"navigate",function(){return A.navigate}),t.d(n,"push",function(){return A.push}),t.d(n,"replace",function(){return A.replace}),t.d(n,"navigateTo",function(){return A.navigateTo});var c=t(144),l=t.n(c);t.d(n,"PageRenderer",function(){return l.a});var d=t(34);t.d(n,"parsePath",function(){return d.a});var s=r.a.createContext({}),p=function(e){return r.a.createElement(s.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},144:function(e,n,t){var a;e.exports=(a=t(146))&&a.default||a},145:function(e){e.exports={data:{site:{siteMetadata:{title:"Interaction",description:"Interaction es una empresa de Monterrey, Nuevo León que ayuda a los startups y empresas de software a diseñar y prototipar sus apps en alta fidelidad. Nos enfocamos en prototipos móviles para apps de iOS, Android ó React. Nuestro servicio es único en México, ya que nuestro enfoque es exclusivamente en entregar lo mejor en UI/UX, y prototipos de alta fidelidad realizados en herramientas modernas como Sketch, Origami Studio y Framer X.Podemos generar las especificaciones para ser utilizadas de referencia por tus desarrolladores.",keywords:"prototipos monterrey, diseño UI Monterrey, agencia UX Monterrey, Framer Monterrey, Sketch UI Monterrey, Diseño UX Monterrey, Origami Studio Monterrey, Interfaces Monterrey, Ux Mexico, UI Mexico, Framer Mexico, Prototipos Agencia, Prototipos Mexico"}},allContentfulLink:{edges:[{node:{title:"Home",url:"/",createdAt:"2018-10-11T18:46:39.077Z"}},{node:{title:"Principios",url:"/principios",createdAt:"2018-10-11T21:29:32.962Z"}},{node:{title:"Origen",url:"/nosotros",createdAt:"2018-10-11T21:29:49.996Z"}},{node:{title:"Contacto",url:"contacto",createdAt:"2018-10-11T21:30:00.646Z"}}]}}}},146:function(e,n,t){"use strict";t.r(n);t(35);var a=t(0),r=t.n(a),i=t(4),o=t.n(i),A=t(49),u=t(2),c=function(e){var n=e.location,t=u.default.getResourcesForPathnameSync(n.pathname);return r.a.createElement(A.a,Object.assign({location:n,pageResources:t},t.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},n.default=c},147:function(e,n,t){},148:function(e,n){e.exports="data:image/png;base64,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"},149:function(e,n,t){},150:function(e,n,t){"use strict";var a=t(145),r=t(0),i=t.n(r),o=t(4),A=t.n(o),u=t(151),c=t.n(u),l=t(143),d=t(7),s=t.n(d),p=t(141),f=t.n(p),m=t(140),g=t.n(m),h=(t(147),t(142));function b(){var e=f()([" \nbackground: linear-gradient(121deg, #015FDF, #1ED2FC);\nborder-radius: 15px;\nfont-size: 22px;\nline-height: 40px;\nfont-weight: 500;\nwidth: 138px;\nheight: 40px;\ntext-align: center;\nvertical-align: middle;\n\n\n"]);return b=function(){return e},e}var v=h.a.a(b()),w=function(e){function n(n){var t;return(t=e.call(this,n)||this).handleScroll=function(e){window.pageYOffset>50?t.setState({hasScrolled:!0}):t.setState({hasScrolled:!1})},t.state={hasScrolled:!1},t}s()(n,e);var a=n.prototype;return a.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},a.render=function(){return i.a.createElement("div",{className:this.state.hasScrolled?"Header HeaderScrolled":"Header"},i.a.createElement("div",{className:"HeaderGroup"},i.a.createElement(g.a,{to:"/"}," ",i.a.createElement("img",{src:t(148),alt:"Interaction",width:"200"})," "),i.a.createElement(g.a,null,"Servicios"),i.a.createElement(g.a,null,"Portfolio"),i.a.createElement(v,null,"Cotizar")))},n}(i.a.Component);t(149),t(48);function x(){var e=f()(['\n    color: "#486791"\n    max-width: 500px; \n    margin: 0 auto;\n    padding: 0 20px;\n    font-size: 18px;\n']);return x=function(){return e},e}function y(){var e=f()(["\n\nwidth: 500px;\nmargin: 50px auto;\ndisplay: grid;\ngrid-template-columns: repeat(2,1fr);\ngrid-gap: 10px;\n\na{\n    transition: 0.8s;\n}\n\na:hover{\n    color: #486791;\n}\n\n"]);return y=function(){return e},e}function E(){var e=f()(["\n    background: linear-gradient(109.57deg, #1E16A3 0%, #7E4270 100%);\n    box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);\n    border-radius: 30px;\n    color: white;\n    border: none;\n    padding: 16px 60px;\n    font-weight: 600;\n    font-size: 24px;\n    justify-self: center;\n    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n\n    &:hover{\n        box-shadow: 0 20px 40px rgba(0,0,0,0.15);\n        transform: translateY(-3px);\n    }\n"]);return E=function(){return e},e}function P(){var e=f()(['\n\ncolor: #486791;\n/* max-width: 500px; */\nmargin: 0 auto;\n/* font-family: "Poppins"; */\nfont-weight: 400;\n']);return P=function(){return e},e}function H(){var e=f()(["\n    background: #F1F3F5;\n    padding: 50px 0;\n    display: grid;\n    grid-gap: 20px;\n\n"]);return H=function(){return e},e}var q=h.a.div(H()),M=h.a.h2(P()),X=h.a.button(E()),L=h.a.div(y()),N=h.a.div(x()),Q=function(e){var n=e.data,t=e.children;return i.a.createElement(q,null,i.a.createElement(M,null,"Design is not just what it looks and feels like. Design is how it works."),i.a.createElement(X,null,"Cotizar Ya"),i.a.createElement(L,null,n.allContentfulLink.edges.map(function(e){return i.a.createElement("a",{href:e.node.url},e.node.title)})),i.a.createElement(N,null,t))},Z=function(e){var n=e.children;return i.a.createElement(l.StaticQuery,{query:"1076631965",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:e.site.siteMetadata.keywords}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(w,null),i.a.createElement("div",{style:{margin:"0 auto",paddingTop:0}},n,i.a.createElement(Q,{data:e},"Sitio web hecho en React por © Interaction | Monterrey, México, 2018")))},data:a})};Z.propTypes={children:A.a.node.isRequired};n.a=Z}}]);
//# sourceMappingURL=component---src-pages-page-2-js-9fa219931d701b292980.js.map