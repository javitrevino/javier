// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/javier/portfolio2018/javier/src/pages/404.js")),
  "component---src-pages-cotiza-js": preferDefault(require("/Users/javier/portfolio2018/javier/src/pages/cotiza.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/javier/portfolio2018/javier/src/pages/index.js")),
  "component---src-pages-portfolio-js": preferDefault(require("/Users/javier/portfolio2018/javier/src/pages/portfolio.js")),
  "component---src-pages-project-js": preferDefault(require("/Users/javier/portfolio2018/javier/src/pages/project.js")),
  "component---src-pages-servicios-js": preferDefault(require("/Users/javier/portfolio2018/javier/src/pages/servicios.js")),
  "component---src-pages-success-js": preferDefault(require("/Users/javier/portfolio2018/javier/src/pages/success.js"))
}

