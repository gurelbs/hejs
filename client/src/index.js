import React from 'react';
import ReactDOM from 'react-dom';
import HejsApp from './HejsApp';

import './App.css'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  // <react.StrictMode>
    <HejsApp />,
  // </react.StrictMode>,
  document.getElementById('root')
);