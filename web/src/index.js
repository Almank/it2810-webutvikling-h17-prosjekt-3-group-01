import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/Index.css';
import {App} from './views/App';
import registerServiceWorker from './service/registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
