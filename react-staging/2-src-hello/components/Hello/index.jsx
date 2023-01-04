import React, { Component } from "react"
import hello from "./index.module.css" //利用样式的模块化，防止类名冲突

export default class Hello extends Component {
    render() {
        return <h2 className={hello.title}>Hello</h2>
    }
}
