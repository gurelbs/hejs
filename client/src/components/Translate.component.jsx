import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './translate-container.css'
import api from './../api/api.js'
export default function Translate() {
  const [disableBtn, setDisableBtn] = useState(false)
  const [list, setList] = useState([])
	const [q, setQ] = useState('')
	const [select, setSelect] = useState('en')
	const [answers, setAnswers] = useState({})

  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

	useEffect(() => fetchLanguages(), [])

	async function fetchLanguages() {
		const { data } = await api.get(`/languages`)
		if (!data) return
		setList(data)
	}
	async function handleTranslate() {
    try {
			setDisableBtn(true)
      let code = list.find(item => item.code === select).code
			console.log({
				"select":select,
				"code":code,
				url:`/translate?q=${q}&to=${code}`

			})
      let {data} = await api.get(`/translate?q=${q}&to=${code}`, {
        cancelToken: source.token
      })
      setAnswers(data)
      setDisableBtn(false)
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Request canceled', error.message);
      } else {
        console.log(error.name, error.message)
      }
      setDisableBtn(false)
    }
	}

	return (
    <div className="bg-dark container-fluid text-center d-flex flex-column ">
			<h2 className="my-5">תרגום חופשי</h2>
			<code className="bg-light text-center rounded px-2 py-1">https://hejs.cf/api/translate?q={q}&to={select}</code>
			<br />
			<input
				name='q'
				id='q'
				autoFocus={true}
				value={q}
				onChange={e => setQ(e.target.value)}
				placeholder='משפט לתרגום'
			/>
			<br />
			תרגם ל:
			<select value={select} onChange={e => setSelect(e.target.value)}>
				{list &&
					list.map((item, index) => (
						<option key={index} value={item.code}>
							{item.name}
						</option>
					))}
			</select>
			<br />
			<button disabled={disableBtn || q.length < 1} onClick={handleTranslate}>תרגם</button>
			{answers.translate ? answers.translate  : '' }
      <ol>
        {
				answers.alternative && 
				answers.alternative.map((answer,i) => <li key={i}>{answer}</li>)
				}
      </ol>
        {
				answers.alternative && 
				!answers.alternative.length && 
				!answers?.translate.length 
				? 'לא נמצאו תרגומים' 
				: ''
				}
		</div>
	)
}
