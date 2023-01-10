import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter } from 'react-router-dom'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

//<React.StrictMode>  用于检测 App 组件中的代码是否合理
root.render(
  <React.StrictMode>
    <BrowserRouter><App /></BrowserRouter>
  </React.StrictMode>
);

