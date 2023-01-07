import React, { Component } from 'react'
import {Route, Routes,Navigate } from 'react-router-dom'
import About  from "./pages/About";
import Home from './pages/Home'
import Test from './pages/Test'
import Header from './components/Header'
import MyNavlink from './components/MyNavlink'

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
                    {/* <NavLink className={({ isActive }) => "list-group-item" + (isActive ? " atguigu" : "")} to='about'>About</NavLink> */}
                    {/* <NavLink className={({ isActive }) => "list-group-item" + (isActive ? " atguigu" : "")} to='home'>Home</NavLink> */}
                    <MyNavlink to="/about">About</MyNavlink>
                     <MyNavlink to="/home">Home</MyNavlink>
                </div>
            </div>
            <div className="col-xs-6">
                <div className="panel">
                <div className="panel-body">
                   {/* router v5 版本写法 */}
                    {/* <Route path='/about' componet={About} />
                    <Route path='/home' componet={Home} /> */}
                   
                   <Routes>
                        <Route path='/about' element={<About/>} />
                        <Route path='/home' element={<Home/>} />
                        {/* 只会显示上面的组件，即匹配到就停止 */}
                        <Route path='/home' element={<Test/>} />    
                        {/* react-router-dom v5的实现方式 */}
                        {/* <Redirect to="/about"/> */}
                        
                        {/* react-router-dom v6的实现方式 */}
                        <Route path="*" element={<Navigate to="/about" />} />
                   </Routes>
                </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
    