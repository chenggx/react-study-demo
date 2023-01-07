import React, { Component } from 'react'
import List from './component/List'
import Search from './component/Search'

export default class App extends Component {
    state = {
        users:[],
        isFirst:true,
        isLoding:false,
        err:''
    }

    updateAppState = (stateObj)=>{
        this.setState(stateObj)
    }
  render() {
    return (
       <div className="container">
            <Search updateAppState={this.updateAppState}/>
            <List {...this.state}/>
        </div>
    )
  }
}
    