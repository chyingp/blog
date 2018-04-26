var proxyMiddleware = require('http-proxy-middleware')
var express = require('express')
var app = express()

var config = require('../config')
var proxyTable = config.dev.proxyTable

Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

app.listen(3131, 'localhost');
