import React, { useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { io } from 'socket.io-client'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import Quill from 'quill'

import 'quill/dist/quill.snow.css'
import './editor.css'

const TOOLBAR_OPTIONS = [
	['bold', 'italic', 'underline', 'strike'], // toggled buttons
	['blockquote', 'code-block'], // blocks
	[{ header: 1 }, { header: 2 }], // custom button values
	[{ list: 'ordered' }, { list: 'bullet' }], // lists
	[{ script: 'sub' }, { script: 'super' }], // superscript/subscript
	[{ indent: '-1' }, { indent: '+1' }], // outdent/indent
	[{ direction: 'rtl' }], // text direction
	[{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
	[{ header: [1, 2, 3, 4, 5, 6, false] }], // header dropdown
	[{ color: [] }, { background: [] }], // dropdown with defaults
	[{ font: [] }], // font family
	[{ align: ['right'] }], // text align
	['clean'], // remove formatting
]

export default function VoiceEditor() {
	const [message, setMessage] = useState('')
	const [socket, setSocket] = useState()
	const [quill, setQuill] = useState()
	const [editorMode, setEditorMode] = useState('')
	const { id: documentId } = useParams()
	const ENDPOINT =
		process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : 'https://hejs.cf'
	const commands = [
		{
			command: 'כתיבה',
			callback: mode => setEditorMode('כתיבה'),
		},
		{
			command: 'עריכה',
			callback: mode => setEditorMode('עריכה'),
		},
		{
			command: 'עבור שורה',
			callback: () => EditorNewLine(),
		},
    {
			command: 'מחיקת הכל',
			callback: () => DeleteAllEditorText(),
		},
	]
	const {
		transcript,
		interimTranscript,
		finalTranscript,
		listening,
		resetTranscript,
		browserSupportsSpeechRecognition,
	} = useSpeechRecognition({ commands })
	const reco = {
		start: () => SpeechRecognition.startListening({
      language: 'he',
      continuous: true,
      interimResults: true,
    }),
		stop: () => SpeechRecognition.stopListening(),
		abort: () => SpeechRecognition.abortListening(),
	}

	useEffect(() => {
		const s = io(ENDPOINT)
		setSocket(s)
		return () => s.disconnect()
	}, [])

	useEffect(() => {
		if (!quill || !socket) return
		const handler = delta => quill.updateContents(delta)
		socket.on('receive-chenges', handler)
		return () => socket.off('receive-change', handler)
	}, [quill, socket])

	useEffect(() => {
		if (!quill || !socket) return
		const handler = (delta, oldDelta, source) => {
			if (source !== 'user') return
			socket.emit('send-chenges', delta)
		}
		quill.on('text-change', handler)
		return () => quill.off('text-change', handler)
	}, [quill, socket])

	useEffect(() => {
		if (!quill || !socket) return
		socket.once('load-document', document => {
			quill.setContents(document)
			quill.enable()
		})
		socket.emit('get-document', documentId)
	}, [quill, socket, documentId])

	useEffect(() => {
		if (!quill || !socket) return
		const interval = setInterval(() => {
			socket.emit('save-document', quill.getContents())
		}, 2000)
		return () => clearInterval(interval)
	}, [socket, quill])

	const textEditorRef = useCallback(wrapp => {
		if (!wrapp) return
		wrapp.innerHTML = ''
		const editor = document.createElement('div')
		editor.classList.add('editor-container')
		wrapp.append(editor)
		let q = new Quill(editor, { theme: 'snow', modules: { toolbar: TOOLBAR_OPTIONS } })
		q.disable()
		q.setText('טוען...')
		setQuill(q)
	}, [])

	// 	useEffect(() => {
	//     if (!quill) return
	//     resetTranscript()
	//     let quillLength = quill.getLength() - 1
	//     quill.insertText(quillLength,`${finalTranscript} `.trimStart())
	//     quill.focus()
	// },[finalTranscript,resetTranscript,quill])

	useEffect(() => {
		if (!quill || !socket) return
		quill.focus()
	}, [quill])

	function EditorNewLine() {
		if (!quill || !socket) return
    if (editorMode === 'עריכה'){
      console.log('מצב עריכה פעיל')
      resetTranscript()
      quill.insertText(quill.getLength(), '\n')
      quill.focus()
    }
	}
  function DeleteAllEditorText(){
    if (!quill || !socket) return
    resetTranscript()
    quill.setText('')
  }
  useEffect(() => {
    const resetWords = [
      'עריכה',
      'כתיבה',
      'שורה חדשה'
    ]
    const reset = resetWords.some( word => finalTranscript.includes(word) || transcript.includes(word))
    
		if (reset){
			resetTranscript()
		}

  },[finalTranscript,transcript])
	useEffect(() => {
		if (!quill || !socket) return
		if (finalTranscript){
			let quillLength = quill.getLength() - 1
			quill.insertText(
				quillLength,
				`${finalTranscript} `.trimStart()
			)
			resetTranscript()
		}
	}, [quill,editorMode,finalTranscript])

  useEffect(() => {
    if (finalTranscript){
      console.log({
        transcript,
        finalTranscript
      });
      resetTranscript()
    }
  },[transcript,finalTranscript])

  useEffect(() => {
    if (interimTranscript){
      console.log({ interimTranscript});
    }
  },[interimTranscript])
	return (
		<div className='text-center bg-light text-dark'>
			<div className='reco-btn'>
        <p>מצב נוכחי: {editorMode}</p>
				<button onClick={!listening ? reco.start : reco.abort}>
					{listening ? 'הפסקת' : 'התחלת'} תמלול קולי
				</button>
			</div>
			<div id='container' ref={textEditorRef} />
		</div>
	)
}
