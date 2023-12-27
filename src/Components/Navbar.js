import React from 'react'
import logo from '../Images/logo.png'
import '../Styles/Navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar(props) {
  return (
    <div className='Navbar-storage'>
      <nav>
        <div className='Navbar-logo'>
            <img src={logo} className='Navbar-image'></img>
        </div>
        <div className='Navbar-content'>
            <div className='Navbar-home'><NavLink className='nav-link' to={"/"}>Home</NavLink></div>
            <div className='Navbar-about'><NavLink  className='nav-link' to={"/About"}>About</NavLink></div>
            <div className='Navbar-contact'><NavLink  className='nav-link' to={"/Contact"}>Contact Us</NavLink></div>
        </div>

        <div className='Navbar-btn'>
            {!props.login?<button className='Navbar-login'><NavLink className='nav-link' to={"/login"}>Log in</NavLink></button> : <button className='Navbar-login' onClick={()=>{props.setLogin(false)}}><NavLink className='nav-link' to={"/login"}>Log out</NavLink></button>}
            {!props.login?<button className='Navbar-signup'><NavLink className='nav-link' to={"/signup"}>Sign-up</NavLink></button>:<button className='Navbar-signup'><NavLink className='nav-link' to={"/Dashboard"}>Dashboard</NavLink></button>}
            {!props.login?null:<button className='Navbar-Cart'><NavLink className='nav-link' to={"/Cart"}>Cart</NavLink></button>}
        </div>
      </nav>
      <div className='Navbar-underline'></div>
    </div>
  )
}

export default Navbar
