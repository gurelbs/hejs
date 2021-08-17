import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';

const classes = {
  section: `container-fluid h-100 bg-dark d-flex flex-column justify-content-center align-items-center`,
  nav: `navbar navbar-expand-lg navbar-dark bg-dark`
}
function App() {
  return <>
    <section style={{minHeight: "100vh"}} className={classes.section}>
      <h1><code>Wellcome to hejs</code></h1>
      <div>
        <button type="button" className="btn btn-outline-secondary m-1">documentation</button>
        <button type="button" className="btn btn-secondary m-1">playground</button>
      </div>
    </section>
  </>
}

export default App;
