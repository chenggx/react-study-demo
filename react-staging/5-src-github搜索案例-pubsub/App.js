import React, { Component } from 'react'
import List from './component/List'
import Search from './component/Search'

export default class App extends Component {
    

    updateAppState = (stateObj)=>{
        this.setState(stateObj)
    }
  render() {
    return (
       <div className="container">
            <Search/>
            <List/>
        </div>
    )
  }
}
    