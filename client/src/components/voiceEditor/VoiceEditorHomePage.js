import React from 'react'
import {Link} from 'react-router-dom'
import {generate as newId} from 'short-uuid'

export default function VoiceEditorHomePage() {
  return (
    <div>
      <h1>מעבד תמלילים קולי בעברית</h1>
      <Link to={location => `${location.pathname}/${newId()}`}>יצירת מסמך חדש</Link>
    </div>
  )
}
