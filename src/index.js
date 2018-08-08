import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/index4'
import registerServiceWorker from './registerServiceWorker';
import './assets/css/reset.css'

const render = (Component) => {
    ReactDOM.render(
        <Component/>,
        document.getElementById('root'));
}

render(Router);
registerServiceWorker();