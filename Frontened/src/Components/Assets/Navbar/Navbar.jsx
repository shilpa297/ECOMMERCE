import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; 

function Navbar() {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <FontAwesomeIcon icon={faShoppingBag} style={{ width: '30px', height: '50px', color: 'green' }} />
        <h1>Shopping</h1>
      </div>
      <div className="navbar-list">
        <ul className="navbar-list1">
          <li onClick={() => setMenu("shop")} className={menu === "shop" ? "active" : ""}>
           <Link to="/">Shop</Link></li>
          <li onClick={() => setMenu("men")} className={menu === "men" ? "active" : ""}>
              <Link to="/men">Men</Link></li>
          <li onClick={() => setMenu("women")} className={menu === "women" ? "active" : ""}>
            <Link to="/women">Women</Link>
          </li>
          <li onClick={() => setMenu("kids")} className={menu === "kids" ? "active" : ""}>
            <Link to="/kids">Kids</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-logo">
        <FontAwesomeIcon icon={faShoppingCart} style={{ width: '30px', height: '50px', color: 'black' }} />
        <button onClick={() => setMenu("Search")} className={menu === "kids" ? "active" : ""}>
          <Link to="/LoginSignup">LOGIN</Link></button>
      </div>
    </div>
  );
}

export default Navbar;
