// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/javier/portfolio2018/javier/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/javier/portfolio2018/javier/src/pages/index.js")),
  "component---src-pages-servicios-js": preferDefault(require("/Users/javier/portfolio2018/javier/src/pages/servicios.js"))
}

