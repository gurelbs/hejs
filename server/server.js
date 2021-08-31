import dotenv from 'dotenv'
dotenv.config({ path: './../.env' })
import './../mongoose.js';
import express from 'express';
import cors from 'cors';
const app = express()
import path from 'path';
import http from 'http';
const server = http.createServer(app);
import api from '../routes/api.js';
import Document from './../modules/Document.js';
import findOrCreateDoc from './../utils/findOrCreateDoc.js';
import { languageCreator } from './../utils/languageCreator.js';

import { Server }  from 'socket.io';

const prod = process.env.NODE_ENV === 'production'
const serverOptions = {
  cors: {
      origins: ['*:*'],
      methods: ["GET", "POST"]
    }
}
const io = new Server(server, serverOptions);
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
	let file = path.join(path.resolve(path.dirname('')), prod ? '../client/build' : '../client/public', '404.html')
	res.sendFile(file)
});
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
