import React from 'react'
import { Route } from 'react-router-dom' 
import { RootComponent } from './pages/index'
import 'antd/dist/antd.css'
//import './anotherCSS.less'


function App() {
  return (
    <div className="App">
      <Route exact path={["/"]} render = { () => <RootComponent/>}/>
    </div>
  )
}

export default App