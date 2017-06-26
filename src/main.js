// var fs = require('fs')
// console.log('before module b')
// var b = require('./b')
// require('style-loader!css-loader!./main.css')
import './main.css'
import './my.css'
var btn = document.getElementById('btn')
// var b = require('./b')
// var a = require('./a')
// var c = require('./c')
var old = require('./old')
console.log(name)
console.log(20)
btn.onclick = function () { 
  
  // require.ensure([], function () {
  //   var a = require('./a')
  // })
  // require.ensure([], function () {
  //   var b = require('./b')
  // })
  // require.ensure([], function () {
  //   var c = require('./c')
  // })

  // require(['./c'], function (c) {

  // })
  // require(['./a'], function (c) {
    
  // })
  // require(['./b.js'], function (c) {

  // })
  // require(['./c.js'], function (c) {

  // })
}

require('eventsource-polyfill')
var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true')

hotClient.subscribe(function (event) {
  if (event.action === 'reload') {
    window.location.reload()
  }
})