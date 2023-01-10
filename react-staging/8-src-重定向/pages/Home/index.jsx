import React, { useState } from "react"
import { Navigate } from "react-router-dom"

export default function Home() {
    const [sum, setSum] = useState(1)

    return (
        <div>
            <h3>我是 Home 页面</h3>
            {/* <Navigate /> 用于跳转页面,to=>要跳转的页面，replace=>使用replace 模式  */}
            {sum === 2 ? (
                <Navigate to="/about" replace={true} />
            ) : (
                <h4>当前sum 的值为 : {sum}</h4>
            )}
            <button
                onClick={() => {
                    setSum(2)
                }}
            >
                点我将sum 的值变成 2
            </button>
        </div>
    )
}
