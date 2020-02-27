// 引进仓库创造者和中间件
import {createStore,applyMiddleware} from 'redux';
// 引进管理员
import reducer from './reducer'
// 引进增加联系功能
import reduxThunk from 'redux-thunk'
// 导出
export default createStore(reducer,applyMiddleware(reduxThunk))