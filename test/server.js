var express = require('express');
var axios = require('axios');
var path = require('path')

var app = express();
console.log(path.join(__dirname,'public'))
app.use('/public',express.static(path.join(__dirname,'public')))
// async function getData(req, res, next) {
//  try{
//   var data = await axios.get('http://127.0.0.1/phptest/sql.php');//http://127.0.0.1/phptest/sql.php
//  }catch(err){
//     console.log(err)
//  }
//   res.send(data);
// }
// app.get('/', getData);
app.get('/',(req,res)=>{
  axios.get('http://127.0.0.1/phptest/sql.php').then((data)=>{
    console.log(data.data);
    res.json(data.data)
  }).catch((err)=>{
    console.log(err)
  })
})
app.listen(3002, () => {
  console.log('listening');
});