import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/Main.js';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css'

window.onload = function() {
    ReactDOM.render(
        <Main/>,
        document.getElementById('root')
    );
};
