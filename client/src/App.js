import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';

function App() {
  return <>
    <section 
      style={{minHeight: "100vh"}} 
      className="container-fluid h-100 bg-dark d-flex flex-column justify-content-center align-items-center">
      <h1>
        <code>Wellcome to hejs</code>
      </h1>
      <div>
        <button type="button" class="btn btn-outline-secondary m-1">documentation</button>
        <button type="button" class="btn btn-secondary m-1">playground</button>
      </div>
    </section>
        <section 
        style={{minHeight: "100vh"}} 
        className="container-fluid h-100 bg-dark d-flex flex-column justify-content-center align-items-center">
        <h1>
          <code>Wellcome to hebrew-js</code>
        </h1>
        <div>
          <button type="button" class="btn btn-outline-secondary m-1">documentation</button>
          <button type="button" class="btn btn-secondary m-1">playground</button>
        </div>
      </section>
          <section 
          style={{minHeight: "100vh"}} 
          className="container-fluid h-100 bg-dark d-flex flex-column justify-content-center align-items-center">
          <h1>
            <code>Wellcome to hebrew-js</code>
          </h1>
          <div>
            <button type="button" class="btn btn-outline-secondary m-1">documentation</button>
            <button type="button" class="btn btn-secondary m-1">playground</button>
          </div>
        </section>
            <section 
            style={{minHeight: "100vh"}} 
            className="container-fluid h-100 bg-dark d-flex flex-column justify-content-center align-items-center">
            <h1>
              <code>Wellcome to hebrew-js</code>
            </h1>
            <div>
              <button type="button" class="btn btn-outline-secondary m-1">documentation</button>
              <button type="button" class="btn btn-secondary m-1">playground</button>
            </div>
          </section>
  </>
}

export default App;
