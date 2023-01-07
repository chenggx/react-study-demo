import React, { Component } from "react"
import PubSub from "pubsub-js"

export default class Search extends Component {
    search = async () => {
        // const { value } = this.keyWordElement
        //同上，连续结构复制并重命名
        const {
            keyWordElement: { value: keyWord },
        } = this

        PubSub.publish("updateState", { isFirst: false, isLoding: true })

        //#region 发送请求fetch (版本1-未优化)
        // fetch(`https://api.github.com/search/users?q=${keyWord}`)
        //     .then(
        //         (response) => {
        //             console.log("联系服务器成功了", response)
        //             return response.json()
        //         },
        //         (error) => {
        //             console.log("联系服务器失败了", error)
        //             return new Promise(() => {})
        //         }
        //     )
        //     .then(
        //         (response) => {
        //             console.log("获取数据成功了", response)
        //         },
        //         (error) => {
        //             console.log("获取数据失败了", error)
        //         }
        //     )
        // #endregion

        //#region 版本2-优化部分
        // fetch(`https://api.github.com/search/users?q=${keyWord}`)
        //     .then((response) => {
        //         console.log("联系服务器成功了", response)
        //         return response.json()
        //     })
        //     .then((response) => {
        //         console.log("获取数据成功了", response)
        //     })
        //     .catch((error) => {
        //         console.log("获取数据出错", error)
        //     })
        //#endregion

        // 版本3-优化完全版
        try {
            const response = await fetch(
                `https://api.github.com/search/users?q=${keyWord}`
            )
            const data = await response.json()
            PubSub.publish("updateState", {
                users: data.items,
                isLoding: false,
            })
        } catch (error) {
            PubSub.publish("updateState", {
                isLoding: false,
                err: error.message,
            })
        }
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input
                        ref={(c) => (this.keyWordElement = c)}
                        type="text"
                        placeholder="enter the name you search"
                    />
                    &nbsp;<button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
