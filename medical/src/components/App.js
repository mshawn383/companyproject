import React, { Component } from 'react'
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom'
import Nurse from '../Router/Nurse'
import Physiotherapist from '../Router/Physiotherapist'
import Cook from '../Router/Cook'
import Ambulance from '../Router/Ambulance'
import Hearse from '../Router/Hearse'
import OxygenCylinder from '../Router/OxygenCylinder'
import PaceMaker from '../Router/PaceMaker'
import Wheelchair from '../Router/Wheelchair'
import BillingHome from '../Router/BillingHome'
import BillingConcierge from '../Router/BillingConcierge'
import BillingMedical from '../Router/BillingMedical'

export default class App extends Component {
    render() {
        return (
            <Router>
            <div>
               <div>
               <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">Medical Application</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Home Care Services
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
          <Link className="dropdown-item" to="/Nurse">NURSE</Link>
          <Link className="dropdown-item" to="/Physiotherapist">PHYSIOTHERAPIST</Link>
          <Link className="dropdown-item" to="/Cook">COOK</Link>
          <div className="dropdown-divider"></div>
          {/* <a className="dropdown-item" href="/">Billing</a> */}
          <Link className="dropdown-item" to="/BillingHome">Billing Home</Link>
        </div>
      </li>
    <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Concierge Services
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown2">
          <Link className="dropdown-item" to="/Ambulance">AMBULANCE</Link>
          <Link className="dropdown-item" to="/Hearse">HEARSE</Link>
          <div className="dropdown-divider"></div>
          <Link className="dropdown-item" to="/BillingConcierge">Billing Concierge</Link>
          {/* <a className="dropdown-item" href="/">Billing</a> */}
        </div>
      </li>
      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Medical Equipment Services
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown3">
          <Link className="dropdown-item" to="/OxygenCylinder">OXYGEN CYLINDER</Link>
          <Link className="dropdown-item" to="/PaceMaker">PACE MAKER</Link>
          <Link className="dropdown-item" to="/Wheelchair">WHEELCHAIR</Link>
          <div className="dropdown-divider"></div>
          <Link className="dropdown-item" to="/BillingMedical">Billing Medical</Link>
          {/* <a className="dropdown-item" href="/">Billing</a> */}
        </div>
      </li>
  
    </ul>
    

</div>
</nav>
               </div>
<Switch>


<Route path="/BillingMedical"> 
  <BillingMedical/>
</Route>


<Route path="/BillingHome">
<BillingHome/>
</Route>
<Route path="/BillingConcierge">
<BillingConcierge/>
</Route>
    <Route path="/Nurse"> 
<Nurse/>  
  </Route>

  <Route path="/Physiotherapist"> 
<Physiotherapist/>  
  </Route>
  <Route path="/Cook"> 
<Cook/>  
  </Route>
  <Route path="/Ambulance"> 
<Ambulance/>  
  </Route>
  <Route path="/Hearse"> 
<Hearse/>  
  </Route >
  <Route path="/OxygenCylinder"> 
<OxygenCylinder/>  
  </Route>
  <Route path="/PaceMaker"> 
<PaceMaker/>  
  </Route>
  <Route path="/Wheelchair"> 
<Wheelchair/>  
  </Route>


</Switch>
            </div>
            </Router>
            
      
        )

    }
}
