import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

//<React.StrictMode>  用于检测 App 组件中的代码是否合理
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//记录页面性能
reportWebVitals();
