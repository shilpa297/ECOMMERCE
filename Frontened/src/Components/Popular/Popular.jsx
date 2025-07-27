import React from "react";
import "./Popular.css"; // optional if you're using CSS

const Popular = ({ image, title, price, oldPrice }) => {
  return (
    
      
      
    <div className="product-card">
      
      <img src={image} alt={title} className="product-image" />
      <div className="product-details">
        <p>{title}</p>
        <p>
          <span className="price">${price}</span>{" "}
          <span className="old-price">${oldPrice}</span>
        </p>
      </div>
    
    </div>
  )
}
export default Popular;