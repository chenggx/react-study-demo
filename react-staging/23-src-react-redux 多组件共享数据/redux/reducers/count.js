import { INCREMENT,DECREMENT } from "../constant";
/*
1. 该文件用于创建一个为 Count 组件服务的 reducer，reducer 为一个函数
2. reducer 会接到两个参数，之前的状态值（preState）、动作对象-包含数据和动作名（action）
*/
export default function countReducer(preState=0,action) {

    const {type,data} = action
    switch (type) {
        case INCREMENT:
           return preState + data
        case DECREMENT:
           return preState - data
        default:
            return preState
    }
}