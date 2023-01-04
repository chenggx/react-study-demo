import React, { Component } from "react"
import "./index.css"

export default class Item extends Component {
    state = { mouse: false }

    //防止一进入就调用
    handleMouse = (flag) => {
        return () => {
            this.setState({ mouse: flag }) //标识鼠标移入移出
        }
    }

    //勾选或取消一个todo 的回调
    handleCheck = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked)
        }
    }

    //删除一个 todo
    handleDelete = (id) => {
        if (window.confirm("确定删除么？")) {
            this.props.deleteTodoItem(id)
        }
    }

    render() {
        const { id, name, done } = this.props
        const { mouse } = this.state

        return (
            <li
                style={{ backgroundColor: mouse ? "#add" : "white" }}
                onMouseEnter={this.handleMouse(true)}
                onMouseLeave={this.handleMouse(false)}
            >
                <label>
                    <input
                        type="checkbox"
                        checked={done}
                        onChange={this.handleCheck(id)}
                    />
                    <span>{name}</span>
                </label>
                <button
                    onClick={() => {
                        this.handleDelete(id)
                    }}
                    className="btn btn-danger"
                    style={{ display: mouse ? "block" : "none" }}
                >
                    删除
                </button>
            </li>
        )
    }
}
