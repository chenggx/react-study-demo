import React, { Component } from "react"

export default class Count extends Component {
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
                {/* store.getState()  获取redux 中的数据 */}
                <h1>当前求和为{this.props.count}</h1>
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
