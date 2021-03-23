const path = require("path")
const webpack = require("webpack")

const express = require("express")
const app = express()

const validUrl = require('valid-url')
const fetch = require('node-fetch');
const bodyParser = require('body-parser')
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const cors = require('cors')
app.use(cors())

const dotenv = require('dotenv')
dotenv.config()

app.use(express.static('dist'))

endPoint= {}

const apiKey = process.env.API_KEY
const baseURL = "https://api.meaningcloud.com/sentiment-2.1?key="

app.get('/', function (req, res) {
    res.sendFile('/dist/index.html', { root: __dirname + '/..' })
})

const port = 8888

app.listen(port, (req, res) => {
  console.log(`Server is Running on port number: ${port}`)
})

// Get data route
app.get('/allData', (req, res)=>{
  res.send(endPoint);
})

endURL= {}
app.post('/url', async (req, res)=>{
  try{
    const userURL = req.body.url
  const fetchURL = `${baseURL}${apiKey}&url=${userURL}&lang=en`
  fetch(fetchURL,{
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    }
    ,
  })
  .then(response => response.json())
  .then((data) => {
    newEntry = {
      "score_tag": data.score_tag ,
      "agreement": data.agreement ,
      "subjectivity": data.subjectivity ,
      "confidence": data.confidence ,
      "irony": data.irony
    }
    endPoint = newEntry;
    res.send(endPoint)
  })
}catch(e){
  console.log("error", e)
}
})
