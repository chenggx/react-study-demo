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
                    <MyNavlink to="/about">About</MyNavlink>
                    {/* end 表示父级路由不显示高亮 */}
                     <MyNavlink to="/home" end>Home</MyNavlink>
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
    