import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function Translate() {
  const [disableBtn, setDisableBtn] = useState(false)
  const [list, setList] = useState([])
	const [q, setQ] = useState('')
	const [select, setSelect] = useState('en')
	const [answers, setAnswers] = useState({})

  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

	useEffect(() => fetchData(), [])

	async function fetchData() {
		const { data } = await axios.get('http://localhost:4000/api/languages')
		setList(data)
	}
	async function handleTranslate() {
    try {
      setDisableBtn(true)
      let toLangCode = list.find(item => item.name === select) ?? select
      let {data}  = await axios.get(`http://localhost:4000/api/translate?q=${q}&to=${toLangCode}`, {
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
		<div className="translate-container card bg-dark">
			<h2 className="text-center">Translate</h2>
			<input
				type='q'
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
			<button disabled={disableBtn} onClick={handleTranslate}>תרגם</button>
			{answers && answers.translate ? <p> {answers.translate}</p>  : '' }
      <ol>
        {answers.alternative && answers.alternative.map((answer,i) => <li key={i}>{answer}</li>)}
      </ol>
        {disableBtn ? <div className="spinner"/> : ''}
        {!answers.alternative && answers.translate ? 'לא נמצאו תרגומים' : ''}
		</div>
	)
}
