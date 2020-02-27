import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// 引入全局式样图标
import  './assets/fonts/iconfont.css';
// 引入初始化样式
import './index.css'
// 引进仓库
import store from './store';
// 引进供给者，分配页面数据
import {Provider} from "react-redux"
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));