import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import Translate from './Translate.component'
export default function Playground() {
	// const [services, getServices] = useState({})
	// const [result, getResult] = useState('')
	// useEffect(() => {
	// 	if (!services) {
	// 		let servicesNames = ['news', 'meaning', 'translate', 'weather', 'direction']
	// 		return servicesNames.map(service =>
	// 			getServices(services => ({
	// 				...services,
	// 				[services]: {
	// 					key: service,
	// 					name: service,
	// 					search: '',
	// 					url: `https://hejs./cf/api/${service}`,
	// 					method: 'GET',
	// 					response: {},
	// 				},
	// 			}))
	// 		)
	// 	}
	// }, [services])

	// function hendleInputsChanges(e) {
	// 	if (!services[e.target.name]) {
	// 		getServices({
	// 			...services,
	// 			[e.target.name]: {
	// 				key: e.target.name,
	// 				name: e.target.name,
	// 				search: '',
	// 				url: `http://localhost:4000/api/${e.target.name}`,
	// 				method: 'GET',
	// 				response: {},
	// 			},
	// 		})
	// 	} else {
	// 		getServices({
	// 			...services,
	// 			[e.target.name]: { ...services[e.target.name], search: e.target.value },
	// 		})
	// 	}
	// 	e.target.focus()
	// }
	// function Inputs({ name, text, placeholder, cb }) {
	// 	return (
	// 		<div>
	// 			{text}
	// 			<input
	// 				type='text'
	// 				name={name}
	// 				id={name}
	// 				maxLength='100'
	// 				value={services[name] ? services[name].search : ''}
	// 				onChange={e => cb(e)}
	// 				placeholder={placeholder}
	// 			/>
	// 			<button type='button' onClick={() => console.log(services)}>
	// 				הצג
	// 			</button>
	// 		</div>
	// 	)
	// }
	// async function handleData(type) {
	// 	let url = `${services[type].url}?q=${services[type].search}`
	// 	if (url) {
	// 		let { data } = await axios.get(url)
	// 		console.log(data)
	// 		getResult(JSON.stringify(data))
	// 	}
	// }
	return (
		<div className='container-fluid'>
			{/* <div className='container h-50'>
				<div className='row'>
					<div className='col-12'>
						<div>
							get
							<select onChange={e => getCurrentService(e.target.value)} className=''>
								<option />
								{servicesNames.map((service, i) => (
									<option key={i} value={service}>
										{service}
									</option>
								))}
							</select>
						</div>
						end point:
						<Link className='link' to={`/api/${currentService}`}>
							https://hejs.cf/api/{currentService}
						</Link>
					</div>
					<div>
						<input
							type='text'
							name='weather'
							id='weather'
							value={services['weather'] ? services['weather'].search : ''}
							onChange={hendleInputsChanges}
							placeholder='מזג אוויר'
						/>
						<button type='button' onClick={() => handleData('weather')}>
							הצג
						</button>
						<div>
							<input
								type='text'
								name='translate'
								id='translate'
								value={services['translate'] ? services['translate'].search : ''}
								onChange={hendleInputsChanges}
								placeholder='תרגום'
							/>
							<button type='button' onClick={() => handleData('translate')}>
								הצג
							</button>
						</div>
						<div>
							<input
								type='text'
								name='meaning'
								id='meaning'
								value={services['meaning'] ? services['meaning'].search : ''}
								onChange={hendleInputsChanges}
								placeholder='משמעות'
							/>
							<button type='button' onClick={() => handleData('meaning')}>
								הצג
							</button>
						</div>
						<div>
							<input
								type='text'
								name='news'
								id='news'
								value={services['news'] ? services['news'].search : ''}
								onChange={hendleInputsChanges}
								placeholder='חדשות'
							/>
							<button type='button' onClick={() => handleData('news')}>
								הצג
							</button>
						</div>
					</div>
				</div>
			</div> */}
			{/* <div className='container-fluid bg-light text-dark h-50 justify-content-center align-items-center d-flex'>
				<h1 className='p-3 text-light text-center bg-dark'>{result}</h1>
			</div> */}
			<Translate/>
		</div>
	)
}
