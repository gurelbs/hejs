import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import {Button} from '@material-ui/core'
const classes = {
  section: `container-fluid h-100 bg-dark d-flex flex-column justify-content-center align-items-center`
}
function App() {
  return <>
    <section style={{minHeight: "100vh"}} className={classes.section}>
      <h1 className="display-1"><code>hejs</code></h1>
      <h6  className="text-info">a API for real-time data in hebrew.</h6>
      <div>
        <Button className="m-1 text-light" color="#666" variant="outlined">Get Started</Button>
        <Button className="m-1" color="#666" variant="contained">playground</Button>
      </div>
    </section>
  </>
}

export default App;
