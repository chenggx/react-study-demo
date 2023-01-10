import React from "react"
import { useLocation } from "react-router-dom"

export default function Detail() {
    const { state } = useLocation()
    const { id, title, content } = state

    return (
        <div>
            <ul>
                <li>编号：{id}</li>
                <li>标题：{title}</li>
                <li>内容：{content}</li>
            </ul>
        </div>
    )
}
