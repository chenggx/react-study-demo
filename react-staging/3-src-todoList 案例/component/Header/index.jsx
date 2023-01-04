import React, { Component } from "react"
import PropTypes from "prop-types"
import "./index.css"
import { nanoid } from "nanoid"

export default class Header extends Component {
    //对接收数据进行限制
    static propTypes = {
        add: PropTypes.func.isRequired,
    }

    handleKeyUp = (event) => {
        //判断是否按了回车
        if (event.keyCode !== 13) return
        //添加的内容不能为空
        if (event.target.value.trim() === "") {
            alert("不能为空")
            return
        }
        // 准备好一个对象
        const todoObj = { id: nanoid(), name: event.target.value, done: false }
        this.props.add(todoObj)
        //清空输入框
        event.target.value = ""
    }

    render() {
        return (
            <div className="todo-header">
                <input
                    type="text"
                    placeholder="请输入你的任务名称，按回车键确认"
                    onKeyUp={this.handleKeyUp}
                />
            </div>
        )
    }
}
