(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{136:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(142),i=t(149);n.default=function(){return a.a.createElement(i.a,null,a.a.createElement("h1",null,"Hi from the second page"),a.a.createElement("p",null,"Welcome to page 2"),a.a.createElement(o.Link,{to:"/"},"Go back to the homepage"))}},142:function(e,n,t){"use strict";t.r(n),t.d(n,"graphql",function(){return p}),t.d(n,"StaticQueryContext",function(){return g}),t.d(n,"StaticQuery",function(){return f});var r=t(0),a=t.n(r),o=t(4),i=t.n(o),c=t(139),u=t.n(c);t.d(n,"Link",function(){return u.a}),t.d(n,"withPrefix",function(){return c.withPrefix}),t.d(n,"navigate",function(){return c.navigate}),t.d(n,"push",function(){return c.push}),t.d(n,"replace",function(){return c.replace}),t.d(n,"navigateTo",function(){return c.navigateTo});var d=t(143),l=t.n(d);t.d(n,"PageRenderer",function(){return l.a});var s=t(34);t.d(n,"parsePath",function(){return s.a});var g=a.a.createContext({}),f=function(e){return a.a.createElement(g.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},143:function(e,n,t){var r;e.exports=(r=t(145))&&r.default||r},144:function(e){e.exports={data:{site:{siteMetadata:{title:"Interaction",description:"Interaction es una empresa de Monterrey, Nuevo León que ayuda a los startups y empresas de software a diseñar y prototipar sus apps en alta fidelidad. Nos enfocamos en prototipos móviles para apps de iOS, Android ó React. Nuestro servicio es único en México, ya que nuestro enfoque es exclusivamente en entregar lo mejor en UI/UX, y prototipos de alta fidelidad realizados en herramientas modernas como Sketch, Origami Studio y Framer X.Podemos generar las especificaciones para ser utilizadas de referencia por tus desarrolladores.",keywords:"prototipos monterrey, diseño UI Monterrey, agencia UX Monterrey, Framer Monterrey, Sketch UI Monterrey, Diseño UX Monterrey, Origami Studio Monterrey, Interfaces Monterrey, Ux Mexico, UI Mexico, Framer Mexico, Prototipos Agencia, Prototipos Mexico"}},allContentfulLink:{edges:[{node:{title:"Home",url:"/",createdAt:"2018-10-11T18:46:39.077Z"}},{node:{title:"Principios",url:"/principios",createdAt:"2018-10-11T21:29:32.962Z"}},{node:{title:"Origen",url:"/nosotros",createdAt:"2018-10-11T21:29:49.996Z"}},{node:{title:"Contacto",url:"contacto",createdAt:"2018-10-11T21:30:00.646Z"}}]}}}},145:function(e,n,t){"use strict";t.r(n);t(35);var r=t(0),a=t.n(r),o=t(4),i=t.n(o),c=t(49),u=t(2),d=function(e){var n=e.location,t=u.default.getResourcesForPathnameSync(n.pathname);return a.a.createElement(c.a,Object.assign({location:n,pageResources:t},t.json))};d.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},n.default=d},146:function(e,n,t){},147:function(e,n){e.exports="data:image/png;base64,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"},148:function(e,n,t){},149:function(e,n,t){"use strict";var r=t(144),a=t(0),o=t.n(a),i=t(4),c=t.n(i),u=t(150),d=t.n(u),l=t(142),s=t(7),g=t.n(s),f=t(140),p=t.n(f),A=t(139),m=t.n(A),h=(t(146),t(141));function v(){var e=p()([" \nbackground: linear-gradient(121deg, #015FDF, #1ED2FC);\nborder-radius: 15px;\nfont-size: 22px;\nline-height: 40px;\nfont-weight: 500;\nwidth: 138px;\nheight: 40px;\ntext-align: center;\nvertical-align: middle;\n\n\n"]);return v=function(){return e},e}var E=h.a.a(v()),x=function(e){function n(n){var t;return(t=e.call(this,n)||this).handleScroll=function(e){window.pageYOffset>50?t.setState({hasScrolled:!0}):t.setState({hasScrolled:!1})},t.state={hasScrolled:!1},t}g()(n,e);var r=n.prototype;return r.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},r.render=function(){return o.a.createElement("div",{className:this.state.hasScrolled?"Header HeaderScrolled":"Header"},o.a.createElement("div",{className:"HeaderGroup"},o.a.createElement(m.a,{to:"/"}," ",o.a.createElement("img",{src:t(147),alt:"Interaction",width:"200"})," "),o.a.createElement(m.a,null,"Servicios"),o.a.createElement(m.a,null,"Portfolio"),o.a.createElement(E,null,"Cotizar")))},n}(o.a.Component);t(148),t(48);function Q(){var e=p()(['\n    color: "#486791"\n    max-width: 500px; \n    margin: 0 auto;\n    padding: 0 20px;\n    font-size: 18px;\n']);return Q=function(){return e},e}function D(){var e=p()(["\n\nwidth: 500px;\nmargin: 50px auto;\ndisplay: grid;\ngrid-template-columns: repeat(2,1fr);\ngrid-gap: 10px;\n\na{\n    transition: 0.8s;\n}\n\na:hover{\n    color: #486791;\n}\n\n"]);return D=function(){return e},e}function B(){var e=p()(["\n    background: linear-gradient(109.57deg, #1E16A3 0%, #7E4270 100%);\n    box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);\n    border-radius: 30px;\n    color: white;\n    border: none;\n    padding: 16px 60px;\n    font-weight: 600;\n    font-size: 24px;\n    justify-self: center;\n    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n\n    &:hover{\n        box-shadow: 0 20px 40px rgba(0,0,0,0.15);\n        transform: translateY(-3px);\n    }\n"]);return B=function(){return e},e}function P(){var e=p()(['\n\ncolor: #486791;\n/* max-width: 500px; */\nmargin: 0 auto;\n/* font-family: "Poppins"; */\nfont-weight: 400;\n']);return P=function(){return e},e}function w(){var e=p()(["\n    background: #F1F3F5;\n    padding: 50px 0;\n    display: grid;\n    grid-gap: 20px;\n\n"]);return w=function(){return e},e}var M=h.a.div(w()),y=h.a.h2(P()),b=h.a.button(B()),j=h.a.div(D()),G=h.a.div(Q()),H=function(e){var n=e.data,t=e.children;return o.a.createElement(M,null,o.a.createElement(y,null,"Design is not just what it looks and feels like. Design is how it works."),o.a.createElement(b,null,"Cotizar Ya"),o.a.createElement(j,null,n.allContentfulLink.edges.map(function(e){return o.a.createElement("a",{href:e.node.url},e.node.title)})),o.a.createElement(G,null,t))},C=function(e){var n=e.children;return o.a.createElement(l.StaticQuery,{query:"1076631965",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:e.site.siteMetadata.keywords}]},o.a.createElement("html",{lang:"en"})),o.a.createElement(x,null),o.a.createElement("div",{style:{margin:"0 auto",paddingTop:0}},n,o.a.createElement(H,{data:e},"Sitio web hecho en React por © Interaction | Monterrey, México, 2018")))},data:r})};C.propTypes={children:c.a.node.isRequired};n.a=C}}]);
//# sourceMappingURL=component---src-pages-page-2-js-3f255e8ec5dd6d27677f.js.map