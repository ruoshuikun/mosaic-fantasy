import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css'
import './assets/styles/index.scss';
import App from './App';
import './utils/rem'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
