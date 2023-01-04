import React, { Component } from "react"
import PropTypes from "prop-types"
import Item from "../Item"
import "./index.css"

export default class List extends Component {
    //对接收数据进行限制
    static propTypes = {
        todos: PropTypes.array.isRequired,
        updateTodo: PropTypes.func.isRequired,
    }

    render() {
        const { todos, updateTodo, deleteTodoItem } = this.props
        return (
            <ul className="todo-main">
                {todos.map((todo, index) => {
                    return (
                        <Item
                            key={todo.id}
                            {...todo}
                            updateTodo={updateTodo}
                            deleteTodoItem={deleteTodoItem}
                        />
                    )
                })}
            </ul>
        )
    }
}
