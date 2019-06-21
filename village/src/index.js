import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';




import './index.css';
import App from './App';







const getRoot = document.getElementById('root');
ReactDOM.render(
    <Router>
        <App />
    </Router>,
    getRoot
);