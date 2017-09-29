var http = require('http')
var url = require('url')
var fs = require('fs')
var server = http.createServer()

var htmlDir = __dirname + '/html/'
server.on('request', (req, res) => {
  var urlStr = url.parse(req.url)
  switch (urlStr.pathname) {
    case '/user':
      res.end('用户')
      break
    case '/notice':
      res.end('通知')
      break
    default:
      res.end('404')

      break
  }
})

server.listen(80)