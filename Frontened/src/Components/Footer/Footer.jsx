import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="footer">
        <div className="footer-logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6moQbMNWWawFZfJ9jaOFJhgTkgRI1FeVjWw&s" />
        <p>Shopper</p> 
        </div>
        <ul className="footer-list">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <img className="imagee" src="https://static.vecteezy.com/system/resources/previews/014/414/683/non_2x/instagram-black-logo-on-transparent-background-free-vector.jpg" />
            <img className="imagee" src="https://images.ctfassets.net/h67z7i6sbjau/5zteWRcC1qbgLZoClcMmYl/a0391fdc321eddce7de41152108723b5/Brand_Guidelines_hero_2x.jpg?fm=webp&q=85"/>
            <img className="imagee" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr8vS7DKHqSKNk4NIOHXoaheWgj6EDZuIDmg&s"/>
        </div>
        <div className="footer-copyright">
            <p>Copyright @</p>
        </div>
    </div>
  )
}

export default Footer