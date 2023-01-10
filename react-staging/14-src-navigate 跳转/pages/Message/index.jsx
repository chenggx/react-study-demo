import React from "react"
import { useState } from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"

export default function Message() {
    const navigate = useNavigate()

    const [message] = useState([
        { id: "01", title: "1111111", content: "我是001的内容" },
        { id: "02", title: "2222222", content: "我是002的内容" },
        { id: "03", title: "3333333", content: "我是003的内容" },
        { id: "04", title: "4444444", content: "我是004的内容" },
    ])

    function showDetail(message) {
        navigate("detail", {
            replace: false,
            state: {
                id: message.id,
                title: message.title,
                content: message.content,
            },
        })
    }

    return (
        <div>
            <ul>
                {message.map((m) => {
                    return (
                        <li key={m.id}>
                            <Link
                                to="detail"
                                state={{
                                    id: m.id,
                                    title: m.title,
                                    content: m.content,
                                }}
                            >
                                {m.title}
                            </Link>
                            <button
                                onClick={() => {
                                    showDetail(m)
                                }}
                            >
                                详情
                            </button>
                        </li>
                    )
                })}
            </ul>
            <hr />
            <Outlet />
        </div>
    )
}
