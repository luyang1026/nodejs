var http = require('http')

var server = http.createServer((req, res) => {
//    console.log(req.url)
      res.writeHead(200,{
        'content-type': 'text/plain;charset=utf-8'
      })
      res.write('<h1>hello</h1>')
      res.end()
    })

server.listen(80, 'localhost')

server.on('error', (err)=>{
    console.log(err)
})
server.on('listening',()=>{
    console.log('listening')
})
server.on('request',()=>{
    // console.log('got a request')
})
server.timeout = 2000
// console.log(server.address())