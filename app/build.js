// 热加载
var express = require('express')
var webpack = require('webpack')
var config = require('../webpack.config')
var path = require('path')

var compiler = webpack(config)
var app = express()

app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true, publicPath: '/'
}));

// Step 3: Attach the hot middleware to the compiler & the server
app.use(require("webpack-hot-middleware")(compiler, {
  log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
}));

compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})
// app.use(devMiddleware)
// app.use(hotMiddleware)

// app.get('/', function (req, res) {
//   return res.sendFile(path.resolve(__dirname, '../bundle/index.html'))
// })

app.listen(3002, function() {
  console.log('')
})
