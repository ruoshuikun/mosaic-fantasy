import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css'
import {Provider} from 'react-redux'
import store from './store'

import './assets/styles/index.scss';
import App from './App';
import './utils/rem'

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);
