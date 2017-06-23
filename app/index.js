var express = require('express')
var app = express()
var path = require('path')

app.use(express.static(path.resolve(__dirname, '../bundle')))

app.get('/', function (req, res) {
  return res.sendFile(path.resolve(__dirname, '../index.html'))
})

app.get('/jsonp', function (req, res) {
  res.set('Content-Type', 'application/json;charset=utf-8')
  return res.send(req.query.cb + '(1)')
})

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  
  console.log('监听%s:%s', host, port)
})