const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')
const api = require('../routes/api')
require("dotenv").config({ path: "./../.env" });
require('./../mongoose')
const { languageCreator } = require('./../utils/languageCreator')
const prod = process.env.NODE_ENV === 'production'
languageCreator()

app.use(cors())
app.use(express.json())
app.use('/api', api)

if (prod) {
  app.use(express.static('client/build'))
	app.get('/*', (req, res) => {
    let file = path.join('/app/client/build', 'index.html')
		res.sendFile(file)
	})
}

app.use((req, res) => {
  let file = path.join(__dirname, prod 
    ? '../client/build' 
    : '../client/public', '404.html')
    res.sendFile(file)
  })

let port = process.env.PORT || 4000
app.listen(port, () => console.log(`server is listening on http://localhost:${port}`))