import { INCREMENT,DECREMENT } from "./constant";
// 该文件专门为 Count 组件生成 action 对象
export const createIncrementAction = data=>({type:INCREMENT,data})
export const createDecrementAction = data=>({type:DECREMENT,data})