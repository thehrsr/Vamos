import React from 'react'
import { BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom'
import Ride from './Ride'
import Home from './Home'
import '../css/Header.css'
import logo from '../assets/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login'
import HomePage from './HomePage'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
// import 'bootstrap/js/dist/modal'; 


export default function Header() {
  return (
    <div>
<header>
  
      <div className="logo">
        <Link to="/"> <img src={logo} alt='logo'/> </Link>
      </div>
      <div className="bx bx-menu" id="menu-icon"></div>
      <ul className="navbar">
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/ride'}>Ride</Link></li>
        <li><Link to={'/product'}>Services</Link></li>
        <li><Link to={'/aboutus'}>About</Link></li>
        <li><Link to={'/contact'}>Contact Us</Link></li>
      </ul>
      <div className="header-btn">
        <Link to="/signup" className="sign-up">Sign Up</Link>
        <Link to="/signin" className="sign-in">Sign In</Link>
      </div>
      
    </header>
    </div>
  )
}
