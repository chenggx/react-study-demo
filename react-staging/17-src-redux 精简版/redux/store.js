// 引入 createStore，专门用于创建 redux 中最为核心的 store 对象
import {createStore} from 'redux'
// 引入为 Count 组件服务的 reducer
import countReducer from './count_reducer'

export default createStore(countReducer)