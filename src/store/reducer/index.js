// 引进map管理员
import mapReducer from './mapReducer'
// 引进仓库合并者
import {combineReducers} from 'redux'
// 导出
export default combineReducers({mapReducer})