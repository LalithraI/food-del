import React, { useContext,useState } from 'react'
import './Navbar.css'
import logo from '../../assets/frontend_assets/logo.png'
import searchIcon from '../../assets/frontend_assets/search_icon.png'
import basketIcon from '../../assets/frontend_assets/basket_icon.png'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/frontend_assets/assets';

const Navbar = ({ setShowLogin }) => {

    const [menu,setMenu] = useState("menu");

    const {getTotalCartAmount,token,setToken} = useContext(StoreContext);

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        setToken(""); 
        navigate("/");
    }

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
        {!token?
        <button onClick={() => setShowLogin(true)}>Sign In</button>
        :<div className='navbar-profile'>
          <img src={assets.profile_icon} alt="" />
          <ul className="nav-profile-dropdown">
            <li><img src={assets.bag_icon} alt="" /></li><p>Orders</p>
            <hr />
            <li onClick={logout}><img src={assets.logout_icon} alt="" /></li><p>Logout</p>
          </ul>
        </div>}
      </div>
    </div>
  )
}

export default Navbar

