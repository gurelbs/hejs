const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')
const api = require('../routes/api')
require('./../mongoose')
const mongoose = require('mongoose')
const {Languages,Language} = require('./../modules/Languages')
const findOrCreateLanguages = require('./../utils/findOrCreateLanguages')
const getLanguages = require('./../controllers/translate/getLanguages')

app.use(cors())
app.use(express.json())
app.use('/api', api)
let prod = process.env.NODE_ENV === 'production'
if (prod) {
	app.use(express.static('/app/client/build'))
	app.get('/*', (req, res) => {
		let file = path.join('/client/build', 'index.html')
		res.sendFile(file, { root: __dirname })
	})
}
app.use((req, res) => {
	res.status(404)
	let file = path.join(__dirname, prod ? '/client/build' : '../client/public', '404.html')
	res.sendFile(file)
})

const created = async () => {
  let count = await Language.countDocuments( (err,res) => res)
  console.log(`Language count: ${count}`)
  if (count > 0){
    console.log(`Language already created.`)
    return
  }
  let language = await getLanguages()
  Language.collection.insertMany(
    language.map( lang => ({
      name: Object.keys(lang)[0],
      code: Object.values(lang)[0]
  })))
  console.log(`Language Uploaded Successfully!`)
}

let port = process.env.PORT || 4000
app.listen(port, () => console.log(`server is listening on http://localhost:${port}`))
