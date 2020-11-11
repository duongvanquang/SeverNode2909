const express = require('express')
const app = express()
var bodyParser = require('body-parser')


app.use(bodyParser.json())
 
{/*app.get('/', function (req, res) {
  res.send('Hello World')
  res.send('xin chao')
})*/}
app.post('/cong',(req,res) =>{
  console.log(req.body)
})
 
app.listen(3002)