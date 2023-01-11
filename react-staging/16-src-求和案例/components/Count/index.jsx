import React, { Component } from "react"

export default class Count extends Component {
    state = { count: 0 }
    increment = () => {
        const value = this.selectNum.value

        this.setState({ count: this.state.count + value * 1 })
    }
    decrement = () => {
        const value = this.selectNum.value

        this.setState({ count: this.state.count - value * 1 })
    }
    incrementOdd = () => {
        const value = this.selectNum.value
        if (this.state.count % 2 !== 0) {
            this.setState({ count: this.state.count + value * 1 })
        }
    }

    incrementAsync = () => {
        const value = this.selectNum.value

        setTimeout(() => {
            this.setState({ count: this.state.count + value * 1 })
        }, 500)
    }
    render() {
        return (
            <div>
                <h1>当前求和为{this.state.count}</h1>
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
