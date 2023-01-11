// 引入 createStore，专门用于创建 redux 中最为核心的 store 对象
import {createStore,applyMiddleware,combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
// 引入为 Count 组件服务的 reducer
import countReducer from './reducers/count'
import personReducer from './reducers/person'
import thunk from 'redux-thunk'
//汇总 reducer 
const allReducer = combineReducers({countReducer,personReducer})
export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))