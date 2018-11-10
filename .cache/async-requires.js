// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": () => import("/Users/javier/portfolio2018/javier/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-cotiza-js": () => import("/Users/javier/portfolio2018/javier/src/pages/cotiza.js" /* webpackChunkName: "component---src-pages-cotiza-js" */),
  "component---src-pages-index-js": () => import("/Users/javier/portfolio2018/javier/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-portfolio-js": () => import("/Users/javier/portfolio2018/javier/src/pages/portfolio.js" /* webpackChunkName: "component---src-pages-portfolio-js" */),
  "component---src-pages-project-js": () => import("/Users/javier/portfolio2018/javier/src/pages/project.js" /* webpackChunkName: "component---src-pages-project-js" */),
  "component---src-pages-servicios-js": () => import("/Users/javier/portfolio2018/javier/src/pages/servicios.js" /* webpackChunkName: "component---src-pages-servicios-js" */),
  "component---src-pages-success-js": () => import("/Users/javier/portfolio2018/javier/src/pages/success.js" /* webpackChunkName: "component---src-pages-success-js" */)
}

exports.data = () => import("/Users/javier/portfolio2018/javier/.cache/data.json")

