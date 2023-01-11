import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from "./redux/store"
import {Provider} from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));

//<React.StrictMode>  用于检测 App 组件中的代码是否合理
root.render(
  <React.StrictMode>
    {/* 此处使用provider 包裹 app，目的是让app 的所有后代容器组件都能接受到store */}
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);