// var fs = require('fs')
// console.log('before module b')
// var b = require('./b')

var btn = document.getElementById('btn')

btn.onclick = function () { 
  require.ensure([], function() {  
    var c = require('./c')
  }, 'test')
  require.ensure([], function() {  
    var c = require('./b')
  }, 'test')
  // require(['./c.js'], function (c) {

  // })
  // require(['./b.js'], function (c) {

  // })
}
