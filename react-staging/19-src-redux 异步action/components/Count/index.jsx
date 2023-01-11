import React, { Component } from "react"
import store from "../../redux/store"
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction,
} from "../../redux/count_action"
export default class Count extends Component {
    componentDidMount() {
        /*
         1.因为 redux 只是用来管理 state 的，所以需要在组件更新完毕的钩子中重新调用 render(),
         2. 由于调用 setState 后会自动调用 reder() 函数，所有可以传递一个空的对象给 setState
         3. 对于很多组件都需要 redux， 该方法还可以直接写在 index.js 中，
        */
        store.subscribe(() => {
            this.setState({})
        })
    }
    increment = () => {
        const value = this.selectNum.value
        // 调用
        store.dispatch(createIncrementAction(value * 1))
    }
    decrement = () => {
        const value = this.selectNum.value

        store.dispatch(createDecrementAction(value * 1))
    }
    incrementOdd = () => {
        const value = this.selectNum.value
        if (store.getState() % 2 !== 0) {
            store.dispatch(createIncrementAction(value * 1))
        }
    }

    incrementAsync = () => {
        const value = this.selectNum.value

        store.dispatch(createIncrementAsyncAction(value * 1, 500))
    }

    render() {
        return (
            <div>
                {/* store.getState()  获取redux 中的数据 */}
                <h1>当前求和为{store.getState()}</h1>
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
