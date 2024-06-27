require('dotenv').config()
const PORT = process.env.PORT
const express = require('express')


const app = express()

const data = {
  "_id": "667697d358fe36d65a0f2c49",
  "uId": "4d94501d1f78ac091dbc9b4d",
  "uNm": "Adrien Joly",
  "text": "thank you Béton Coton for the discovery!",
  "name": "🥬 Lettuce - The Lobbyist",
  "eId": "/yt/xRP56JQqe3w",
  "ctx": "bk",
  "pl": {
    "id": 11,
    "name": "🕶 soul / funk / jazz / etc..."
  },
  "img": "https://i.ytimg.com/vi/xRP56JQqe3w/default.jpg",
  "src": {
    "id": "https://www.youtube.com/watch?v=xRP56JQqe3w",
    "name": "🥬 Lettuce - The Lobbyist - YouTube"
  },
  "lov": [
    "518b5a447e91c862b2adea1a",
    "53f4ee46e04b7b4fca7dcea3"
  ],
  "nbP": 3,
  "nbR": 1
}


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

app.get('/github',(req,res)=>{
  res.json(data)
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})