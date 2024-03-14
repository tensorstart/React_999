//项目的入口

//react必要的核心app
import React from 'react';
import ReactDOM from 'react-dom/client';

//导入根组件
import App from './App';

//把app根组件渲染到id为root的dom节点上
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);


