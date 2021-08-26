import React,{useEffect,useState,useCallback} from 'react';
import Quill from 'quill';
import "quill/dist/quill.snow.css" 
import {useParams} from 'react-router-dom'
import { io } from 'socket.io-client'

const TOOLBAR_OPTIONS = [
    ['bold', 'italic', 'underline', 'strike'],       // toggled buttons
    ['blockquote', 'code-block'],                    // blocks
    [{ 'header': 1 }, { 'header': 2 }],              // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],    // lists
    [{ 'script': 'sub'}, { 'script': 'super' }],     // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],         // outdent/indent
    [{ 'direction': 'rtl' }],                        // text direction
    [{ 'size': ['small', false, 'large', 'huge'] }], // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],       // header dropdown
    [{ 'color': [] }, { 'background': [] }],         // dropdown with defaults
    [{ 'font': [] }],                                // font family
    [{ 'align': [] }],                               // text align
    ['clean'],                                       // remove formatting
  ]
export default function VoiceEditor() {
    const [textData,setTextData] = useState({})
    const [socket,setSocket] = useState()
    const [quill,setQuill] = useState()
    const {id: documentId} = useParams()
    const ENDPOINT =  process.env.NODE_ENV === "prodection" ? "https://hejs.cf" : "http://localhost:4000"
    console.log(ENDPOINT);
    useEffect(() => {
        const s = io(ENDPOINT)
        setSocket(s)
        return () => s.disconnect()
    },[])

    useEffect(() => {
        if (!quill || !socket) return 
        const handler = delta => quill.updateContents(delta)
        socket.on('receive-chenges',handler)
        return () => socket.off('receive-change',handler)
    },[quill,socket])

    useEffect(() => {
        if (!quill || !socket) return
        const handler = (delta, oldDelta, source) => {
            if (source !== 'user') return
            socket.emit("send-chenges",delta)
        }
        quill.on('text-change',handler)
        return () => quill.off('text-change',handler)
    },[quill,socket])

    useEffect(() => {
        if (!quill || !socket) return
        socket.once("load-document", document => {
            quill.setContents(document)
            quill.enable()
        })
        socket.emit('get-document',documentId)
    },[quill,socket,documentId])

    useEffect(() => {
        if (!quill || !socket) return
        const interval = setInterval(() => {
            socket.emit("save-document", quill.getContents())
        }, 2000);
        return () => clearInterval(interval)
    },[socket,quill])

    const textEditorRef = useCallback((wrapp) => {
        if (!wrapp) return
        wrapp.innerHTML = ''
        const editor = document.createElement('div')
        editor.classList.add('editor-container')
        wrapp.append(editor)
        let q = new Quill(editor, { theme: "snow", modules: { toolbar: TOOLBAR_OPTIONS }})
        q.disable()
        q.setText('טוען...')
        setQuill(q)
    },[])
    

    useEffect(() => {
        if (!quill || !socket) return
        quill.focus()
    },[quill])
    
    return (
        <div className="text-center bg-light text-dark">
            <div id="container" ref={textEditorRef}/>
        </div>
    )
}