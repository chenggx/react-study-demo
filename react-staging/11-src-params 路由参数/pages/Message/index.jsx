import React from "react"
import { useState } from "react"
import { Link, Outlet } from "react-router-dom"

export default function Message() {
    const [message] = useState([
        { id: "01", title: "1111111", content: "我是001的内容" },
        { id: "02", title: "2222222", content: "我是002的内容" },
        { id: "03", title: "3333333", content: "我是003的内容" },
        { id: "04", title: "4444444", content: "我是004的内容" },
    ])

    return (
        <div>
            <ul>
                {message.map((m) => {
                    return (
                        <li key={m.id}>
                            <Link to={`detail/${m.id}/${m.title}/${m.content}`}>
                                {m.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <hr />
            <Outlet />
        </div>
    )
}
