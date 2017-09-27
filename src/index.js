import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import {App} from './views';
import registerServiceWorker from './service/registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
