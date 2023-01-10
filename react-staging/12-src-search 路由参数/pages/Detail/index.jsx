import React from "react"
import { useLocation, useSearchParams } from "react-router-dom"

export default function Detail() {
    const [search, setSearch] = useSearchParams()
    const id = search.get("id")
    const content = search.get("content")
    const title = search.get("title")

    // location 的方式获取 search 参数
    // const x = useLocation()
    // console.log(x)

    return (
        <div>
            <ul>
                <li>
                    <button
                        onClick={() => {
                            setSearch("id=1999")
                        }}
                    >
                        点我更新url
                    </button>
                </li>
                <li>编号：{id}</li>
                <li>标题：{title}</li>
                <li>内容：{content}</li>
            </ul>
        </div>
    )
}
