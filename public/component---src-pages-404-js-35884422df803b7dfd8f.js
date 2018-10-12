(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{138:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(155);n.default=function(){return r.a.createElement(o.a,null,r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},143:function(e,n,t){"use strict";t.r(n),t.d(n,"graphql",function(){return h}),t.d(n,"StaticQueryContext",function(){return f}),t.d(n,"StaticQuery",function(){return m});var a=t(0),r=t.n(a),o=t(4),i=t.n(o),c=t(142),u=t.n(c);t.d(n,"Link",function(){return u.a}),t.d(n,"withPrefix",function(){return c.withPrefix}),t.d(n,"navigate",function(){return c.navigate}),t.d(n,"push",function(){return c.push}),t.d(n,"replace",function(){return c.replace}),t.d(n,"navigateTo",function(){return c.navigateTo});var s=t(27);t.d(n,"waitForRouteChange",function(){return s.c});var l=t(144),d=t.n(l);t.d(n,"PageRenderer",function(){return d.a});var p=t(38);t.d(n,"parsePath",function(){return p.a});var f=r.a.createContext({}),m=function(e){return r.a.createElement(f.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},144:function(e,n,t){var a;e.exports=(a=t(148))&&a.default||a},147:function(e){e.exports={data:{site:{siteMetadata:{title:"Interaction",description:"Interaction es una empresa de Monterrey, Nuevo León que ayuda a los startups y empresas de software a diseñar y prototipar sus apps en alta fidelidad. Nos enfocamos en prototipos móviles para apps de iOS, Android ó React. Nuestro servicio es único en México, ya que nuestro enfoque es exclusivamente en entregar lo mejor en UI/UX, y prototipos de alta fidelidad realizados en herramientas modernas como Sketch, Origami Studio y Framer X.Podemos generar las especificaciones para ser utilizadas de referencia por tus desarrolladores.",keywords:"prototipos monterrey, diseño UI Monterrey, agencia UX Monterrey, Framer Monterrey, Sketch UI Monterrey, Diseño UX Monterrey, Origami Studio Monterrey, Interfaces Monterrey, Ux Mexico, UI Mexico, Framer Mexico, Prototipos Agencia, Prototipos Mexico"}},allContentfulLink:{edges:[{node:{title:"Home",url:"/",createdAt:"2018-10-11T18:46:39.077Z"}},{node:{title:"Principios",url:"/principios",createdAt:"2018-10-11T21:29:32.962Z"}},{node:{title:"Interaction",url:"/nosotros",createdAt:"2018-10-11T21:29:49.996Z"}},{node:{title:"Contacto",url:"contacto",createdAt:"2018-10-11T21:30:00.646Z"}}]}}}},148:function(e,n,t){"use strict";t.r(n);t(39);var a=t(0),r=t.n(a),o=t(4),i=t.n(o),c=t(53),u=t(1),s=function(e){var n=e.location,t=u.default.getResourcesForPathnameSync(n.pathname);return r.a.createElement(c.a,Object.assign({key:n.pathname,location:n,pageResources:t},t.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},n.default=s},149:function(e,n,t){},151:function(e,n,t){},155:function(e,n,t){"use strict";var a=t(147),r=t(0),o=t.n(r),i=t(4),c=t.n(i),u=t(157),s=t.n(u),l=t(143),d=t(8),p=t.n(d),f=t(142),m=t.n(f),h=(t(149),function(e){function n(n){var t;return(t=e.call(this,n)||this).handleScroll=function(e){window.pageYOffset>50?t.setState({hasScrolled:!0}):t.setState({hasScrolled:!1})},t.state={hasScrolled:!1},t}p()(n,e);var t=n.prototype;return t.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},t.render=function(){return o.a.createElement("div",{className:this.state.hasScrolled?"Header HeaderScrolled":"Header"},o.a.createElement("div",{className:"HeaderGroup"},o.a.createElement(m.a,{to:"/"}," ",o.a.createElement("img",{src:"",alt:"Logo"})," "),o.a.createElement(m.a,null,"Principios"),o.a.createElement(m.a,null,"Interaction"),o.a.createElement(m.a,null,"Contacto")))},n}(o.a.Component)),g=(t(151),t(52),t(145)),y=t.n(g),v=t(146);function x(){var e=y()(['\n    color: "#486791"\n    max-width: 500px; \n    margin: 0 auto;\n    padding: 0 20px;\n    font-size: 18px;\n']);return x=function(){return e},e}function w(){var e=y()(["\n\nwidth: 500px;\nmargin: 50px auto;\ndisplay: grid;\ngrid-template-columns: repeat(2,1fr);\ngrid-gap: 10px;\n\na{\n    transition: 0.8s;\n}\n\na:hover{\n    color: #486791;\n}\n\n"]);return w=function(){return e},e}function E(){var e=y()(["\n    background: linear-gradient(109.57deg, #1E16A3 0%, #7E4270 100%);\n    box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);\n    border-radius: 30px;\n    color: white;\n    border: none;\n    padding: 16px 60px;\n    font-weight: 600;\n    font-size: 24px;\n    justify-self: center;\n    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n\n    &:hover{\n        box-shadow: 0 20px 40px rgba(0,0,0,0.15);\n        transform: translateY(-3px);\n    }\n"]);return E=function(){return e},e}function b(){var e=y()(['\n\ncolor: #486791;\n/* max-width: 500px; */\nmargin: 0 auto;\n/* font-family: "Poppins"; */\nfont-weight: 400;\n']);return b=function(){return e},e}function M(){var e=y()(["\n    background: #F1F3F5;\n    padding: 50px 0;\n    display: grid;\n    grid-gap: 20px;\n\n"]);return M=function(){return e},e}var S=v.a.div(M()),k=v.a.h2(b()),q=v.a.button(E()),I=v.a.div(w()),P=v.a.div(x()),T=function(e){var n=e.data,t=e.children;return o.a.createElement(S,null,o.a.createElement(k,null,"Design is not just what it looks and feels like. Design is how it works."),o.a.createElement(q,null,"Cotizar Ya"),o.a.createElement(I,null,n.allContentfulLink.edges.map(function(e){return o.a.createElement("a",{href:e.node.url},e.node.title)})),o.a.createElement(P,null,t))},U=function(e){var n=e.children;return o.a.createElement(l.StaticQuery,{query:"1076631965",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:e.site.siteMetadata.keywords}]},o.a.createElement("html",{lang:"en"})),o.a.createElement(h,null),o.a.createElement("div",{style:{margin:"0 auto",paddingTop:0}},n,o.a.createElement(T,{data:e},"Sitio web hecho en React por © Interaction | Monterrey, México, 2018")))},data:a})};U.propTypes={children:c.a.node.isRequired};n.a=U}}]);
//# sourceMappingURL=component---src-pages-404-js-35884422df803b7dfd8f.js.map