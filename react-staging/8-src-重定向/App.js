import React, { Component } from 'react'
import {NavLink,Route, Routes,Navigate } from 'react-router-dom'
import About  from "./pages/About";
import Home from './pages/Home'
import Header from './components/Header'

export default class App extends Component {
   
  render() {
    return (
       <div>
        <div className="row">
            <Header />
        </div>
        <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
                <div className="list-group">
                    <NavLink className={({ isActive }) => "list-group-item" + (isActive ? " atguigu" : "")} to='about'>About</NavLink>
                    <NavLink className={({ isActive }) => "list-group-item" + (isActive ? " atguigu" : "")} to='home'>Home</NavLink>
                </div>
            </div>
            <div className="col-xs-6">
                <div className="panel">
                <div className="panel-body">
                   {/* router v5 版本写法 */}
                    {/* <Route path='/about' componet={About} />
                    <Route path='/home' componet={Home} /> */}
                   
                   <Routes>
                    {/* caseSensitive  路径区分大小写 */}
                        <Route path='/about' caseSensitive element={<About/>} />
                        <Route path='/home' element={<Home/>} />
                        {/* 表示如果路径为“/”，那么跳转到 "/about" */}
                        <Route path='/' element={<Navigate to="/about"/>} />
                   </Routes>
                </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
    