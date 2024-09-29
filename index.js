const express = require('express')
const env=require('dotenv').config()
const app = express()
// const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/flipkart',(req,res)=>{
    res.send("<h1>this is the flipkart page</h1>")
})

app.listen(process.env.PORT||3000, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})