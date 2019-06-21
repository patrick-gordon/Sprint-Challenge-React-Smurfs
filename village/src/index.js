import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';


import './index.css';
import App from './App';

// Global Styles

const GlobalStyle = createGlobalStyle`
    body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background-color: #88CCFF;
    color: #FFF;
}
`



const getRoot = document.getElementById('root');
ReactDOM.render(
    <Router>
        <App />
    </Router>,
    getRoot
);