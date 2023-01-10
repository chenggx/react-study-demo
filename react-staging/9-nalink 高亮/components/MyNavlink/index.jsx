import React, { Component } from "react"
import { NavLink } from "react-router-dom"

export default class MyNavlink extends Component {
    render() {
        return (
            // 属性上有个 children ，他的值为标签中的内容
            <NavLink
                className={({ isActive }) =>
                    "list-group-item" + (isActive ? " atguigu" : "")
                }
                {...this.props} //展开标签上的属性
            />
        )
    }
}
