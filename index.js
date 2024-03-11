const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('自動更新しました！')
})
 
app.listen(80)