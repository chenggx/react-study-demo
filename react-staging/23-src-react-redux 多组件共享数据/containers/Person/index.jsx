import React, { Component } from 'react'
import { connect } from "react-redux"
import {createAddPersonAction} from '../../redux/actions/persion'
import {nanoid} from 'nanoid'

class Person extends Component {
    addPerson = ()=>{
        const name = this.nameNode.value
        const age = this.ageNode.value
        this.props.addPersonAction({id:nanoid(),name,age})
    }

  render() {
    return (
      <div>
        <h3>上方组件的count为：{this.props.count}</h3>
        <h2>我是 Person 组件</h2>
        <input ref={c=> this.nameNode = c} type="text" placeholder='输入名字'/>
        <input ref={c=> this.ageNode = c} type="text" placeholder='输入年龄'/>
        <button onClick={this.addPerson}>点我添加一个人</button>
        <ul>
            {
                this.props.persons.map((person)=>{
                    return (<li key={person.id}>id:{person.id}---name:{person.name}---age:{person.age}</li>)
                })
            }
        </ul>
      </div>
    )
  }
}


//使用 connect 创建并暴露一个 Count 的容器组件
export default connect(
    (state) => ({
         persons: state.personReducer,
         count:state.countReducer
        }),
    {
        addPersonAction: createAddPersonAction
    }
)(Person)