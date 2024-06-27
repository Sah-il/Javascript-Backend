require('dotenv').config()
const PORT = process.env.PORT
const express = require('express')


const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res) => {
  res.send("SahilAggarwal.com")
})

app.get('/login',(req,res) =>{
  res.send(`<h1>Please login </h1>`)
})

app.get('/youtube',(req,res)=>{
  res.send(`<h2>Backend Practise</h2>`)
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})