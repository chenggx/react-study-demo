//引入 Count 的 UI 组件
import CountUI from "../../components/Count"
//引入 connect 用于连接 UI 组件和 redux
import { connect } from "react-redux"

import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction,
} from "../../redux/count_action"

//mapStateToProps 用于传递状态
function mapStateToProps(state) {
    return { count: state }
}
//mapDispatchToProps 用于传递操作状态方法
function mapDispatchToProps(dispatch) {
    return {
        jia: (num) => dispatch(createIncrementAction(num)),
        jian: (num) => dispatch(createDecrementAction(num)),
        jiaAsync: (num, time) =>
            dispatch(createIncrementAsyncAction(num, time)),
    }
}
//使用 connect 创建并暴露一个 Count 的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
