// file: main.jsx
// import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

const mountNode = document.getElementById('app');

render(<App/>, mountNode);
