import React, { useEffect, useState } from 'react'
import axios from 'axios'
import fetchData from './../utils/fetchData.js';

export default function QuickAnswer() {
  const [disableBtn, setDisableBtn] = useState(false)
	const [q, setQ] = useState('')
	const [answers, setAnswers] = useState()

  async function hendleQuickAnswer(){
    try {
      let data = await fetchData('weather',q)
      setAnswers(data)
      setDisableBtn(false)
    } catch (error) {
      console.log(error);
      setDisableBtn(false)
    }
  }
  return (
    <div className="bg-dark container-fluid text-center d-flex flex-column ">
			<h2 className="my-5">מזג אוויר</h2>
			<code className="bg-light text-center text-dark rounded px-2 py-1">https://hejs.cf/api/weather?q={q}</code>
			<br />
			<input
				name='q'
				id='q'
				autoFocus={true}
				value={q}
				onChange={e => setQ(e.target.value)}
				placeholder='עיר, יישוב או מדינה'
			/>
			<br />

      <button 
        disabled={q.length < 1 || disableBtn} 
        onClick={hendleQuickAnswer}>
          מצא מזג אוויר {q ? `ב${q}` : ''}
      </button>
      <br />
      <span>{answers}</span>
	  </div>
  )
}
