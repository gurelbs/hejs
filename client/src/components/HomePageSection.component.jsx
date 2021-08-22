import '../App.css'
import React from 'react'
import { Button } from '@material-ui/core'
import { Container } from '@material-ui/core'
import { Link } from 'react-router-dom'

export default function HomePageSection() {
	return (
		<div className='main'>
			<h1 className='big-header'>
				<code>he.js</code>
			</h1>
			<h6 className='text-secondary h3 text-center mb-3'>
				מידע בעברית בזמן אמת
			</h6>
			<div>
				<Button className='m-1' color='secondary' variant='outlined'>
					<Link to='/docs' className='text-decoration-none text-light'>
						Get Started
					</Link>
				</Button>
        <Button className='m-1' color='secondary' variant='outlined'>
					<Link to='/playground' className='text-decoration-none text-light'>
            playground
					</Link>
				</Button>
			</div>
			<div>
				<div className="m-1 p-3">
				<p className="text-center">or</p>
					<code className="h4">npm i hejs</code>
				</div>
			</div>
		</div>
	)
}
