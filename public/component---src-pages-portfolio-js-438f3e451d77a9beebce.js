(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{128:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(135),i=a(139),c=a(149),d=(a(151),a(134)),l=a.n(d);r.a.div.withConfig({displayName:"portfolio__CardsGroup",componentId:"sc-2toh3-0"})(["display:grid;"]);t.default=function(e){e.data;return o.a.createElement(i.a,null,o.a.createElement("div",{className:"HeroAlt"},o.a.createElement("div",{className:"HeroAltGroup"},o.a.createElement("h1",null,"Portfolio"),o.a.createElement("p",null,"Hecha un vistazo a algunos de nuestros proyectos hechos para clientes de Monterrey. Nuestro portfolio te permitirá ver nuestro trabajo previo. Pronto publicaremos más proyectos."))),o.a.createElement("div",{className:"Cards"},o.a.createElement("h2",null,"Algunos de nuestros proyectos"),o.a.createElement("div",{className:"CardGroup"},o.a.createElement(l.a,{to:"/project"},o.a.createElement(c.a,{title:"Tec de Monterrey",text:"Bee Working App",image:a(152)})),o.a.createElement(c.a,{title:"Banregio",text:"División Automotriz",image:a(180)}),o.a.createElement(c.a,{title:"AR Salud Integral",text:"iOS App",image:a(181)}),o.a.createElement(c.a,{title:"Hola Vecino",text:"Smart Mobile App",image:a(182)}),o.a.createElement(c.a,{title:"Prodynamics",text:"Android Material App",image:a(152)}),o.a.createElement(c.a,{title:"Oxxo Gas",text:"Desktop Web App",image:a(152)}))))}},136:function(e,t,a){var n;e.exports=(n=a(141))&&n.default||n},137:function(e,t,a){},138:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return m}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return g});var n=a(0),o=a.n(n),r=a(4),i=a.n(r),c=a(134),d=a.n(c);a.d(t,"Link",function(){return d.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var l=a(136),s=a.n(l);a.d(t,"PageRenderer",function(){return s.a});var u=a(29);a.d(t,"parsePath",function(){return u.a});var p=o.a.createContext({}),g=function(e){return o.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},139:function(e,t,a){"use strict";var n=a(140),o=a(0),r=a.n(o),i=a(4),c=a.n(i),d=a(144),l=a.n(d),s=a(138),u=a(6),p=a.n(u),g=a(134),m=a.n(g),f=(a(142),a(135)),A=f.a.a.withConfig({displayName:"header__QuoteBtn",componentId:"sc-31ozxh-0"})(["  background:linear-gradient(121deg,#015FDF,#1ED2FC);border-radius:15px;font-size:22px;line-height:40px;font-weight:500;width:138px;height:40px;text-align:center;vertical-align:middle;@media (max-width:576px){width:104px;}"]),h=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleScroll=function(e){window.pageYOffset>50?a.setState({hasScrolled:!0}):a.setState({hasScrolled:!1})},a.state={hasScrolled:!1},a}p()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},n.render=function(){return r.a.createElement("div",{className:this.state.hasScrolled?"Header HeaderScrolled":"Header"},r.a.createElement("div",{className:"HeaderGroup"},r.a.createElement(m.a,{className:"Logo",to:"/"}," ",r.a.createElement("img",{src:a(143),alt:"Interaction",width:"180"})," "),r.a.createElement(m.a,{to:"/servicios"},"Servicios"),r.a.createElement(m.a,{to:"/portfolio"},"Portfolio"),r.a.createElement(A,{href:"/contact"},"Cotizar")))},t}(r.a.Component),v=(a(137),f.a.div.withConfig({displayName:"Footer__FooterGroup",componentId:"sc-1xqajj9-0"})(["background-color:rgb(51,51,51);color:white;padding:50px 0;display:grid;grid-gap:20px;"])),x=f.a.div.withConfig({displayName:"Footer__Copyright",componentId:"sc-1xqajj9-1"})(['color:"#486791" max-width:500px;margin:0 auto;padding:0 20px;font-size:18px;']),E=function(e){e.data;var t=e.children;return r.a.createElement(v,null,r.a.createElement(x,null,t))},w=function(e){var t=e.children;return r.a.createElement(s.StaticQuery,{query:"1076631965",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:e.site.siteMetadata.keywords}]},r.a.createElement("html",{lang:"en"})),r.a.createElement(h,null),r.a.createElement("div",{style:{margin:"0 auto",paddingTop:0}},t,r.a.createElement(E,{data:e},"Creado en React por © Interaction")))},data:n})};w.propTypes={children:c.a.node.isRequired};t.a=w},140:function(e){e.exports={data:{site:{siteMetadata:{title:"Interaction",description:"Interaction es una empresa de Monterrey, Nuevo León que ayuda a los startups y empresas de software a diseñar y prototipar sus apps en alta fidelidad. Nos enfocamos en prototipos móviles para apps de iOS, Android ó React. Nuestro servicio es único en México, ya que nuestro enfoque es exclusivamente en entregar lo mejor en UI/UX, y prototipos de alta fidelidad realizados en herramientas modernas como Sketch, Origami Studio y Framer X.Podemos generar las especificaciones para ser utilizadas de referencia por tus desarrolladores.",keywords:"prototipos monterrey, diseño UI Monterrey, agencia UX Monterrey, Framer Monterrey, Sketch UI Monterrey, Diseño UX Monterrey, Origami Studio Monterrey, Interfaces Monterrey, Ux Mexico, UI Mexico, Framer Mexico, Prototipos Agencia, Prototipos Mexico"}},allContentfulLink:{edges:[{node:{title:"Home",url:"/",createdAt:"2018-10-11T18:46:39.077Z"}},{node:{title:"Principios",url:"/principios",createdAt:"2018-10-11T21:29:32.962Z"}},{node:{title:"Origen",url:"/nosotros",createdAt:"2018-10-11T21:29:49.996Z"}},{node:{title:"Contacto",url:"contacto",createdAt:"2018-10-11T21:30:00.646Z"}}]}}}},141:function(e,t,a){"use strict";a.r(t);a(30);var n=a(0),o=a.n(n),r=a(4),i=a.n(r),c=a(46),d=a(2),l=function(e){var t=e.location,a=d.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},142:function(e,t,a){},143:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAABmCAYAAAA9D2N2AAAO4UlEQVR4AezBAQ0AAADCIPunNsc3YAAAAAAAAAAAAAAA0HL26trMYSAIoLBLcQNm9tFmXrNKUGnucKaDFcwnluKjF/zCbOnJ+eDM3smlsKtct05LG3Nbt6yc3gtL81i0zJ0+M7OmaFoYdQEAgMEf4o/j1Culcj6Eyj7IpbCrXLdBSxtzW7esgt4LS/NYtMyDPjOzpmia0dRLo8k4NQIAAKb3o/i3OKXij6Hwc6JehH0SM4EAgAEEXU7vsZzegnjzg6MeiDoAAKYdc5cK5tdE3TGRAACCnrB3v8CNI1kcxx9HNicuc5A63+3N7mxmnIwz/+cud3vhQcJhooGGQ82MjcJFxCsgvMpV4cAjuqjv5407W+lkZ+R260nP+YHP1aFVutXq7ySWJR/zt4e9b+8Oq/ug24l6hZ+/B9IM+v333/swqUHuEZHqdUN0/38Q9Dkg4mAv6nMQasZm03E1CBHdU71uiDYxfzUAh6CD2agPQIhBJ2LQ6TkH/Su4H0S9RNBPQbQh6Jc1ov4VhBh0Igadnm/QT15X90F/OuoXIG1AyAdQ1fhN/RaEGHQiBp2eI0HMD8D94emon4O0pfryt3KLP78fgDxDDDoRg04M+vjyPuiPo/4VpC3Vl9HFlp+pX4JQWtyYiBh0shH0EtwTUb8FaUv1eTRA0Kstb5QrQZ4fBp2IQScGfTK+vQv6o6iftxv0v88j7n6/BXmGGHQiBp0Y9COHqLsg6hVIWxDz8Q5faZPniUEnYtCJQX8c9XnLQS9jv6cOkpCVi5IbExGvG16nwKA/jvopSBuqT/843+XhMyDpMOjcKIgYdCsY9DfH7omo99oL+k+3uzxRDiQhXiTcKIgYdEMY9IdRr0Ba8emn89jHxDLoDDoRg87rlEF/GPUSRN3Hf/agSvDsdwadQW8BEYPeOgb9zX3Qoc2gXyZ4oQuDzqC3hohBbx+D/jDqJYiqjy96UKV4SxtIQrxIuFEQMehGMOjHd0GH9oL+4cVlglevMugMenuIGPT2MegTF0S91I35zwOoUr1PHSQlTNIQ8h/jxgR5hCHIzoh43XCvAgb9YdRLEC2I+RzcnSRRl6To4caU3gRkzxC1dN0Qg35POejvfxnAXcwTRR0kJTISdCIGnRj0ExdEvQTRgJjPwaWMOgilxY2JiEEnC0E/OnFB1EuQxr1/eQB3MU8QdQadQSdi0IlBv4+6YtDfvSzvgp486hZDKN8xhAymUGxcwxKKjSnkMOLG9GjecgPzFnP+o+ct4nhLWEGxMYO8xs9Q1LwhTAyMBRj0+L1KZb7N77kJgv7WBVEvm4/5r2NwiLpLHfUuRDnB4hrCFJbgtrSCGUye4cY0hNzAvMWf/wTzprDeFIKuMBYD103M8To432cgMQzsufpBD6JegjQJMS/BNRF1kIS0gz6EGbhECsj2Puj25002RrDQmrfweAksIWsp6JMmxsKgG5hvA3uuatCDqJcgjXl7eP7t3eEm5jtFvQqibjnofZiCa0gBwz0M+r7MWx9myvM2a3jeRgpBVxsLg25gvu3vuQmCPn7ng76mEfRbcDtEfQ4HIAh6GUYdJCGtoC/BKcgbvkiKCLEX72iP5m2l+A+hiT+eglWTQVceS27gukkQdDvzbWXPVQ96EPUSpBFvX12AWwc9Iuo3cADi+aD/wXbQNc324JGSmfV5S2CiMW8KcmNroL8fj361P9+W9lz9oEOjQT953UPMK3ARUZ8j4D2Qh0F/UYafqYMks39B9wroGw16ZmDeuhj0GTjrQe/AWK6h/8yCPjUw3yb2XIWgv3dB1JsK+lfYxHyrqM9BnoSggw+6JwntY9C9hcGgZwbmrYtBz8F1VG5wDVzbD7qptVMYD7q3aD7or9+7IOolSFIn48E65t4WUZ+D/KUPPujAoMeYGQr6GbiOmFoJug+ggaBbG8vMftDtz7f9PbeJoPuoNxf0EtyWUZ+DfNeHn8vw7vd9DnrwQAOv2PFGlcxA0Iew6ti8nYEENM//0Oi8hXLDayCzH3T78216z00f9A8uiHraoE+Oxt8m65hD/ajfgNQKevCVNpCEuhD0omY8RjCLvBO53/GgF5HzlhmZt/hxWJu3+KAXHb12hjaDrrB29Ofb4p6bPuhB1EuQVBD0W3BbRP0WUe+B/IgPOsDeBX0ZeSfzMOJinHU46GcR83ZmbN5Snn8v019vUfIGxrLSv3bsB93I2lmAePb33AaCHkS9BEnizfHlOuZezagfgNTy/pcy/J46SDoJgq59R2T8zSzDjgZ9GX9HbJSpwrxpnP9lx9ebl+/BWEb2g25/vi3uuemD/uqjC6JeJor5ACpwW0T9AqQ2BB180D1JKG3Q9f/llhn9TSPm5y8MzJvW+c8MrDcvT/jfXHRgDVgPerYve5XxccQHPYh6CbKzN2/Kdcy9GlG/AtmGDzrYCXrEb5iKv3H2Oxb06xbnbaY4b+E4LM/bND7optfA0H7QTa2d/p7vuVFk5YMOyYJ+/OYUQXdrNaNeQW/7oL/0QQewH/QhSIthzDsU9GH0n+D0/9yfJTr/oz2Zt+tEQR+aunbsB93S2sn3es+ND/onF0S93C3mkx5UiLrbIuqnIFtD0MEH3ZOEEgVd/8TGPlO6Q0HP9f9sFT3uRYfOf25kvXn5noylsB90i/Ntf89NHvQg6iVILMT8CtxazahfgUR554MO9oPeB2nQtcI4JKFF/L+wTc2bN3ym85YnGEsfpBMMBN3E2uGeGxn0Qx902DXoRyeneN/5Jua1ol5BDyTC5r3qPuhgN+iLDj02ddKRoK/AGTLpyPlfGVtveWfGwqCv9n+vMjOO2KB/dkHUS5Bt4XntPQS9ArdF1E9Bdgl6+Ox3kIRSBT1+U9P/TPqsI0F3xpx14fwbXG95J8bCoPcNrp1sj/fc+KAHUS9BtoWgl+DWQa8Z9SuQXfigA5gO+gREgdmbewzIO3D+7a+3+LEw6NyrzI4jcdC9uKDjEa+X65h7NaJeIciD3YN+WIYvdAFJRy3ofRAFhULQGXTV829/vemNhUHnXqU/DuWgf3FB1EuQuhDzMbi1LaJ+CbKzt4dl+JY2kIS0LhJh0O0H3fiGbjXoooRB515lIOi/fnFB1EuQOvBEuAGe1175oNeM+i1IEgg6OESdQWfQGXQGnUHnXsWgB1Ev68X8Qw9BvwGEHOpHfZwu6K/KJ169KvEYdDufBTPoBj4/XPEz9E5eN/u7dhj0f7kg6mWdmMONf6HLFlG/AkkGQQ9fvQqSEoOufwesP54xmf75j563zMBd7h0Yi9r5yA3d5Z51/C53Bj2IegnyV/B98x5sYg71o17BACQVH3SAQ09SYtAVvqPK76ELv4f+WAeeFKh6PvSDrj/fCt/fZtCDqJcgT3r1qbdCzP1jYreM+iVIUievfdDXmg06g14o3D0ac7wzmHSA+vlXOE8aP0e+439jpTAWlfOhHnT7a0dCDPrLf7sg6k8H/fDTAEG/8U+U2zLqt9BrIujgg+5JSgx6a895zvlgET7LvSNjKWqYtT8GPssdGPQg6iXIA4efL6DyD5+JiPo5SGo+6NB80Bn0Uc2xrOKf9Rx/PAa9U/NWxAc9eix9hbGoXDcK601v7ejPN4PuPQ76l/O7z9Q/Oy8i6iVII07GPuhr6YPOoMe/K1n35QYFg/7AssV5y+O/HWB6LEP960b7fegG5ptBP3V/EfUquPs9NupjkEYg6OCD7klCDHrczSrxN88kOB6DHjFv+sf18j0Yy0JrDArrLTcw3wXIUxj0X07d01H3dor6HKQxEx90YNC1Ftdyywu+DxJN/3gjmNTV0aD3YdXVf3wF8gbG0lcey0RjHacPusLa0Z9vBr2hqFcwAGnM5KhE1BFxTyHoDHoObgvXNTe8lMcbRUZwseWxCv2g25+3QL4va0DhutEIuu35ZtD/4xqK+iVI00EHt4m6Jykx6PGfswVm0WGPP16dTWYIecT33lcw1N9czM9bKDc+lqHC+ZioBd3+fDPoDUT9FnogTfJBB1AMOoM+2mEjX8IM8o2+4vHONnKYwnWqEHX0/I/AJTpPWaJ5C+XKY8kU1oDmdROx3vTXjuJ8M+gNRP0cpGl4heqND7qPOkhKDHryz0xDE+XjpbAw9LKUzMYz8O2vAe3rRmG95dbmm0H/+b8ucdRLkKYh5j1w4IPuSUoM+nfNlILuTcG17Br6xjaXmeWgB2ZdWgORZkaCbnG+GfTEUT8AaRreh37qgw4MenuLa6YUdG/WxY3FwPmfGQi6vTUQb2Yk6Mbmm0G/SRj1ryAaEPQ5uCDqNwx6K4srVwq6l3dtYzFy/qeWgx6YGo65lxsIujczMd8M+m9zH/Qdo14htD2VmB9PBt+O1zH3jr05SEoMem1nsFIJenA8BVOFB31oyRTnbdXwZpYZWAPp17F+0A3NN4N+AS5B1E9BNCDoV+CeiPpFq0Hn4hrCQiHoEceLsvQ/3x4F3c9boTBvCpuZzlgUzsfCQNA7P98M+ovfBuug7xj1KxAFiPnJ+TrmXhD1AYPeicU1gSJt0COOF2/ZgbdfaZgk/graCvKWNrMzKBoYS1/5fBQdD7p3xmuug0Ff/w+ifrND1G+gpxLzo5NzQMThcdRvQBJj0HczgRms4oMef7wIC8isPMvdwLxpr7cUYykgM3A+9IPOa85K0P93jqi7yKjPEdvxn74AHK599uDTePXK+zj+5r3+4MF7gPHauz8dvT2HEhyCDk9G/RwkNQY9mQnksIDr2KAnOJ53DQXkcAZ9+y9nSTpvxQ/mbernTX+9Ra2B4gdjyRKsAcV1rB/0BNfcUueaY9B7UIVRT/+Vtsj3qQNi7j0V9Qp6IKltnphU1PD/9u2jwEEgAMPoSBkJSFhJSEMCksbB5k/vOVLf4aXQT3zUwlwA+ypuPxL0Pv5XGvU+CgDs1dOfBH1cYdTHKACwZ09/EvMabUVRb9nuGgUABP056t1Kot6ii7J3APBxYGJeF375fYwaZfcAIH6OTND/YkjU2wKi3mI4vtIW5Q4A+DYCABB0AEDQAQBBBwBBBwAEHQAQdABA0AFA0AEAQQcABB0AEHQAEHQAQNABAEEHAAQdADgAxxQWXZqAp5wAAAAASUVORK5CYII="},145:function(e,t,a){"use strict";var n=a(0),o=a.n(n);t.a=function(){return o.a.createElement("svg",{width:"100%",height:"172",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{fill:"white"},o.a.createElement("animate",{repeatCount:"indefinite",fill:"freeze",attributeName:"d",dur:"10s",values:"M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;  M0 87.1596C316 87.1597 444 160 884 52.0001C1324 -55.9999 1320.29 34.966 1538 71.251C1814 117.251 2156 189.252 2560 87.1597V233.161L0 233.161V87.1596Z; M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z; M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z "})))}},149:function(e,t,a){"use strict";var n=a(0),o=a.n(n);a(150);t.a=function(e){return o.a.createElement("div",{className:"Card"},o.a.createElement("img",{alt:"project",src:e.image}),o.a.createElement("h3",null," ",e.title),o.a.createElement("p",null,e.text))}},150:function(e,t,a){},151:function(e,t,a){"use strict";a(0);var n=a(135);a(145),n.a.div.withConfig({displayName:"Section__SectionGroup",componentId:"sc-3lfkv3-0"})(["background:url(",");height:1020px;background-size:cover;display:grid;grid-template-rows:300px auto;grid-gap:20px;position:relative;@media (max-width:720px){grid-template-columns:1fr;}"],function(e){return e.image}),n.a.img.withConfig({displayName:"Section__SectionLogo",componentId:"sc-3lfkv3-1"})(["align-self:end;width:128px;margin:0 auto;"]),n.a.div.withConfig({displayName:"Section__SectionTitleGroup",componentId:"sc-3lfkv3-2"})(["display:grid;margin:0 40px;grid-gap:20px;grid-template-rows:auto 100%;@media (max-width:720px){grid-template-columns:1fr;}"]),n.a.h3.withConfig({displayName:"Section__SectionTitle",componentId:"sc-3lfkv3-3"})(["color:white;font-size:60px;margin:0;line-height:1.2;align-self:center;text-align:center;@media (max-width:720px){font-size:40px;}"]),n.a.p.withConfig({displayName:"Section__SectionText",componentId:"sc-3lfkv3-4"})(["color:white;margin-top:50px;"]),n.a.div.withConfig({displayName:"Section__WaveBottom",componentId:"sc-3lfkv3-5"})(["  position:absolute;width:100%;bottom:-6px;"]),n.a.div.withConfig({displayName:"Section__WaveTop",componentId:"sc-3lfkv3-6"})(["position:absolute;width:100%;top:-6px;transform:rotate(180deg);"])},152:function(e,t,a){e.exports=a.p+"static/wallpaper-d737c672cf7193dbf709b825ea681376.jpg"},180:function(e,t,a){e.exports=a.p+"static/wallpaper2-50ab8e7c6285c1faf7b9622e76651892.jpg"},181:function(e,t,a){e.exports=a.p+"static/wallpaper3-accb270e2c93ddb80ca67db6011ea780.jpg"},182:function(e,t,a){e.exports=a.p+"static/wallpaper4-576eaabc2d1c0df2d4cdc7127a9e7626.jpg"}}]);
//# sourceMappingURL=component---src-pages-portfolio-js-438f3e451d77a9beebce.js.map