const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')
const http = require('http')
const server = http.createServer(app);
const api = require('../routes/api')
require('dotenv').config({ path: './../.env' })
require('./../mongoose')
const Document = require('./../modules/Document')
const findOrCreateDoc = require('./../utils/findOrCreateDoc')
const { languageCreator } = require('./../utils/languageCreator')
const prod = process.env.NODE_ENV === 'production'
const serverOptions = {
  cors: {
      origins: ['*:*'],
      methods: ["GET", "POST"]
    }
}
const io = require('socket.io')(server,serverOptions);
languageCreator()

app.use(cors())
app.use(express.json())
app.use('/api', api)

if (prod) {
	app.use(express.static('/build'))
	app.get('/*', (req, res) => {
		let file = path.join('/app/build', 'index.html')
		res.sendFile(file)
	})
}

app.use((req, res) => {
	let file = path.join(__dirname, prod ? '../build' : '../client/public', '404.html')
	res.sendFile(file)
})

io.on('connection', socket => {
	try {
		console.log('New client connected')
		socket.on('get-document', async documentId => {
			const document = await findOrCreateDoc(documentId, defaultData = '')
			socket.join(documentId)
			socket.emit('load-document', document.data)
			socket.on('send-chenges', delta => {
				socket.broadcast.to(documentId).emit('receive-chenges', delta)
			})
			socket.on('disconnect', () => {
				console.log('Client disconnected')
			})
			socket.on('save-document', async data => {
				await Document.findByIdAndUpdate(documentId, { data })
			})
		})
	} catch (error) {
		console.log(error)
	}
})

let port = process.env.PORT || 4000
server.listen(port, () => console.log(`server is listening on http://localhost:${port}`))
