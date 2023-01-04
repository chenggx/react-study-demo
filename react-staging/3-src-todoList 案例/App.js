import  React,{Component} from "react";
import "./App.css";
import Header from './component/Header'
import List from './component/List'
import Footer from './component/Footer'

class App extends Component{
    state = {
        todos: [
            { id: "001", name: "吃饭", done: true },
            { id: "002", name: "吃2饭", done: false },
            { id: "003", name: "吃2饭", done: true },
        ],
    }

    /**
     * 【父组件】给【子组件】传递数据：通过 props 直接传递
     * 【子组件】给【父组件】传递数据：父提前给子传递一个函数，然后通过 props 传递。例如：addTodo，updateTodo。。。
     * 
     */

    //用于子组件传参到父组件
    addTodo = (todoObj)=>{
        const newTodos = [todoObj,...this.state.todos];
        this.setState({todos:newTodos})
    }

    //用于更新一个item
    updateTodo = (id,done)=>{
        const {todos} = this.state
        const newTodos = todos.map((todoObj)=>{
            if(todoObj.id === id){
                return {...todoObj,done:done} //复制对象，如果哪个值需要更改卸载后面
            }else{
                return todoObj
            }
        })
        this.setState({todos:newTodos})
    }

    //删除一个todo
    deleteTodoItem = (id)=> {
        const {todos} = this.state
         const newTodos = todos.filter((todoObj)=>{
            return todoObj.id !== id
         })
         this.setState({todos:newTodos})
    }
    //全部选中
    checkAll = (done)=>{
        const {todos} = this.state
        const newTodos = todos.map((todoObj)=>{
            return {...todoObj,done:done}
        })
         this.setState({todos:newTodos})
    }

    //清除所有已完成
    clearAllDone = ()=>{
        const {todos} = this.state
         const newTodos = todos.filter((todoObj)=>{
            return !todoObj.done
         })
         this.setState({todos:newTodos})
    }

    render(){
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                <Header add={this.addTodo}/>
                <List deleteTodoItem={this.deleteTodoItem} todos={this.state.todos} updateTodo={this.updateTodo}/>
                <Footer clearAllDone={this.clearAllDone} checkAll={this.checkAll} todos={this.state.todos}/>
                </div>
            </div>
        )
    }
}

export default App