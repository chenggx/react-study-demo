import React, { Component } from "react"
import PubSub from "pubsub-js"
import "./index.css"
export default class List extends Component {
    state = {
        users: [],
        isFirst: true,
        isLoding: false,
        err: "",
    }

    componentDidMount() {
        this.token = PubSub.subscribe("updateState", (msg, dataObj) => {
            this.setState(dataObj)
        })
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.token)
    }

    render() {
        const { users, isFirst, isLoding, err } = this.state

        return (
            <div className="row">
                {isFirst ? (
                    <h2>请搜索</h2>
                ) : isLoding ? (
                    <h2>Lodign .....</h2>
                ) : err ? (
                    <h2>{err}</h2>
                ) : (
                    users.map((user) => {
                        return (
                            <div key={user.id} className="card">
                                <a
                                    href={user.html_url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        alt={user.login}
                                        src={user.avatar_url}
                                        style={{ width: "100px" }}
                                    />
                                </a>
                                <p className="card-text">{user.login}</p>
                            </div>
                        )
                    })
                )}
            </div>
        )
    }
}
