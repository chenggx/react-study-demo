/*
1. 该文件用于创建一个为 Count 组件服务的 reducer，reducer 为一个函数
2. reducer 会接到两个参数，之前的状态值（preState）、动作对象-包含数据和动作名（action）
*/
export default function countReducer(preState=0,action) {
    console.log(preState)
    const {type,data} = action
    switch (type) {
        case 'increment':
           return preState + data
    case 'decrement':
           return preState - data
        default:
            return preState
    }
}