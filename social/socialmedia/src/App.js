import React,{useState} from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './Component/Home'
import Login from './Component/Login'


export default function App() {
    const [auth, setauth] = useState(true)
 return(
<Router>
     <div>
         <Switch>
              <Route  path='/home' component={Home}/>
             <Route exact path='/' component={Login}/>
</Switch>

        </div>
        </Router>
    )
}
