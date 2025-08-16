import React, { useContext,useState } from 'react'
import './Navbar.css'
import logo from '../../assets/frontend_assets/logo.png'
import searchIcon from '../../assets/frontend_assets/search_icon.png'
import basketIcon from '../../assets/frontend_assets/basket_icon.png'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {

    const [menu,setMenu] = useState("menu");

    const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='navbar'>
      <Link to='/'><img src={logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' className={menu === "home" ? "active" : ""} onClick={() => setMenu("home")}>Home</Link>
        <a href='#explore-menu' className={menu === "menu" ? "active" : ""} onClick={() => setMenu("menu")}>Menu</a>
        <a href='#app-download' className={menu === "mobile-app" ? "active" : ""} onClick={() => setMenu("mobile-app")}>Mobile-App</a>
        <a href='#footer' className={menu === "contact-us" ? "active" : ""} onClick={() => setMenu("contact-us")}>Contact Us</a>
      </ul>

      <div className="navbar-right">
        <img src={searchIcon} alt="" />
        <div className="navbar-search-icon">
            <Link to='/cart'><img src={basketIcon} alt="" /></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar

