import { INCREMENT,DECREMENT } from "./constant";
// 该文件专门为 Count 组件生成 action 对象
export const createIncrementAction = data=>({type:INCREMENT,data})
export const createDecrementAction = data=>({type:DECREMENT,data})
//异步action，就是只action 的值为函数，值为对象就是同步action
//异步action 中一般都会调用同步action
export const createIncrementAsyncAction = (data,time)=>{
    return (dispatch)=>{
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, time);
    }
}