import React from "react"
import { useParams, useMatch } from "react-router-dom"

export default function Detail() {
    const message = useParams()
    //match 的方法
    // const x = useMatch("/home/message/detail/:id/:title/:content")
    // console.log(x)
    return (
        <div>
            <ul>
                <li>编号：{message.id}</li>
                <li>标题：{message.title}</li>
                <li>内容：{message.content}</li>
            </ul>
        </div>
    )
}
