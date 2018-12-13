import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import '../scss/style.scss';

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});