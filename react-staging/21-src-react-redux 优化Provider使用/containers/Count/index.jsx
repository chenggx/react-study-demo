//引入 Count 的 UI 组件
import CountUI from "../../components/Count"
//引入 connect 用于连接 UI 组件和 redux
import { connect } from "react-redux"

import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction,
} from "../../redux/count_action"

//使用 connect 创建并暴露一个 Count 的容器组件
export default connect(
    (state) => ({ count: state }),
    // 一般写法
    // (dispatch) => ({
    //     jia: (num) => dispatch(createIncrementAction(num)),
    //     jian: (num) => dispatch(createDecrementAction(num)),
    //     jiaAsync: (num, time) =>
    //         dispatch(createIncrementAsyncAction(num, time)),
    // })
    //精简写法
    {
        jia: createIncrementAction,
        jian: createDecrementAction,
        jiaAsync: createIncrementAsyncAction,
    }
)(CountUI)
