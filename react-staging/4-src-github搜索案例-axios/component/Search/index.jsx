import React, { Component } from "react"
import axios from "axios"

export default class Search extends Component {
    search = () => {
        // const { value } = this.keyWordElement
        //同上，连续结构复制并重命名
        const {
            keyWordElement: { value: keyWord },
        } = this
        //
        this.props.updateAppState({ isFirst: false, isLoding: true })
        //发送请求
        axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
            (respones) => {
                this.props.updateAppState({
                    users: respones.data.items,
                    isLoding: false,
                })
            },
            (error) => {
                this.props.updateAppState({
                    isLoding: false,
                    err: error.message,
                })
            }
        )
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
