const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')
const api = require('../routes/api')
require('./../mongoose')
const {Language} = require('./../modules/Languages')
const getLanguages = require('./../controllers/translate/getLanguages')
const prod = process.env.NODE_ENV === 'production'

app.use(cors())
app.use(express.json())
app.use(express.static('client/build'))
app.use('/api', api)

app.use((req, res) => {
	let file = path.join(__dirname, prod 
    ? '../client/build' 
    : '../client/public', '404.html')
	res.sendFile(file)
})

if (prod) {
	app.get('/*', (req, res) => {
		let file = path.join('/app/client/build', 'index.html')
		res.sendFile(file)
	})
}
const languageCreator = async () => {
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

languageCreator()

let port = process.env.PORT || 4000
app.listen(port, () => console.log(`server is listening on http://localhost:${port}`))
