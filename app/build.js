// 热加载
var express = require('express')
var webpack = require('webpack')
var config = require('../webpack.config')
var path = require('path')

var compiler = webpack(config)
var app = express()

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: 'xuxule.top',
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})

app.use(devMiddleware)
app.use(hotMiddleware)

// app.get('/', function (req, res) {
//   return res.sendFile(path.resolve(__dirname, '../bundle/index.html'))
// })

app.listen(3002, function() {
  console.log('')
})