import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart-icon.png';
import { Link } from "react-router-dom";
const Navbar = () => {

    const[ menu,Setmenu ] = useState("shop")
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img class="logo" src={logo} alt="" />
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{Setmenu("shop")}}><Link to='/'>Shop</Link> {menu==="shop" ? <hr/>:<></>}</li>
        <li onClick={()=>{Setmenu("mens")}}><Link to='/mens'>Men</Link> {menu==="mens" ? <hr/>:<></>}</li>
        <li onClick={()=>{Setmenu("womens")}}><Link to='/womens'>Women</Link> {menu==="womens" ? <hr/>:<></>}</li>
        <li onClick={()=>{Setmenu("kids")}}><Link to='/kids'>Kids</Link> {menu==="kids" ? <hr/>:<></>}</li>
        <li onClick={()=>{Setmenu("about")}}><Link to='/About'>About</Link> {menu==="about" ? <hr/>:<></>}</li>
        <li onClick={()=>{Setmenu("contactus")}}><Link to='/Contactus'>Contact Us</Link> {menu==="contactus" ? <hr/>:<></>}</li>
      </ul>
      <div className="nav-login_cart">
       <Link onClick={()=>{Setmenu("login")}} to='/login'><button class="login_btn">Login</button></Link> 
        <Link onClick={()=>{Setmenu("cart")}} to='/cart'><img class="cart_icon" src={cart_icon} alt="" /></Link>
      </div>
    </div>
  )
}

export default Navbar;