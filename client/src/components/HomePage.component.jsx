import '../App.css'
import React from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

// import { Container } from '@material-ui/core'
// import Weather from './Weather.component'
// import * as Realm from "realm-web";
// const REALM_APP_ID = "hejs-ujawx"; // e.g. myapp-abcde
// export const app = new Realm.App({ id: REALM_APP_ID });

export default function HomePage() {
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
				<Button className='m-1' color='secondary' variant='outlined'>
					<Link to='/editor' className='text-decoration-none text-light'>
						עורך טקסט קולי
					</Link>
				</Button>
			</div>
			<div>
				<div className="m-1 p-3">
				<p className="text-center">or</p>
					<code className="h4">npm i hejs</code>
				</div>
			</div>
			{/* <Weather /> */}
		</div>
	)
}
