import {useRoutes } from 'react-router-dom'
import Header from './components/Header'
import MyNavlink from './components/MyNavlink'
import routes from './routes'

export default function App() {
   const element = useRoutes(routes)

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
                   
                   {element}
                </div>
                </div>
            </div>
        </div>
    </div>
    )
  
}
    