import React, {useContext } from 'react'
import {Link} from 'react-router-dom'

import {UserContext} from '../contextapi'

import './Topnavbar.css'


function TopNavBar()
  {
      const [state,setState] = useContext(UserContext)
      const logout_clicked=()=>{
        setState({show_logout_btn: false})  
        alert("logout clicked"+ state.show_logout_btn)
    }
        return (
             <div>
               <div className="topnav">
                 <nav className="navbar navbar-expand-sm bg-dark sticky-top border rounded-sm">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="active "  to="/dashboard" >Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/form" >Form</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/orders" >Orders</Link>
                        </li>
                        <li className="nav-item">
                            {state.show_logout_btn && <button className="btn btn-primary" style={{"margin":"10px 0px 0px 0px"}} onClick={logout_clicked}>Logout</button>}
                        </li>
                        </ul>
                        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                <img id='logoimg' src='./LOGO_NEW.jpg' alt='bkisan logo'/> 
                                </li>
                        </ul>
                        </div>
                 </nav>
                </div>
            </div>
        )
    }
export default TopNavBar