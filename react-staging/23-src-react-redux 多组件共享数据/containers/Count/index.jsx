//引入 connect 用于连接 UI 组件和 redux
import { connect } from "react-redux"

import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction,
} from "../../redux/actions/count"

import React, { Component } from "react"

 class Count extends Component {
    increment = () => {
        const value = this.selectNum.value
        this.props.jia(value * 1)
    }
    decrement = () => {
        const value = this.selectNum.value
        this.props.jian(value * 1)
    }
    incrementOdd = () => {
        const value = this.selectNum.value
        if (this.props.count % 2 !== 0) {
            this.props.jia(value * 1)
        }
    }

    incrementAsync = () => {
        const value = this.selectNum.value
        this.props.jiaAsync(value * 1, 500)
    }

    render() {
        return (
            <div>
                <h2>我是 Count 组件</h2>
                <h3>下方组件的人数为：{this.props.countMan}</h3>
                {/* store.getState()  获取redux 中的数据 */}
                <h3>当前求和为{this.props.count}</h3>
                <select ref={(c) => (this.selectNum = c)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment}>加</button>
                <button onClick={this.decrement}>减</button>
                <button onClick={this.incrementOdd}>奇数时加</button>
                <button onClick={this.incrementAsync}>等一等在加</button>
            </div>
        )
    }
}

//使用 connect 创建并暴露一个 Count 的容器组件
export default connect(
    (state) => ({
         count: state.countReducer ,
         countMan:state.personReducer.length
        }),
    //精简写法
    {
        jia: createIncrementAction,
        jian: createDecrementAction,
        jiaAsync: createIncrementAsyncAction,
    }
)(Count)
