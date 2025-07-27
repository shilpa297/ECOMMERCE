
import React from "react"; 
import "./NewCollection.css"; 
import { Link } from 'react-router-dom'; 

const NewCollection = ({ image, title, price, oldPrice, rating }) => {
  const description = `${title} party wear`;

  return (
    <div className="product-card">
      <Link
        to="/display"
        state={{ image, title, description, price, oldPrice, rating }}
      >
        <img 
          src={image}  
          className="product-image" 
          alt={title} 
        />
      </Link>

      <div className="product-details">
        <p className="product-title">{title}</p>
        <p>
          <span className="price">${price}</span>{" "}
          <span className="old-price">${oldPrice}</span>
        </p>
         <p className="product-title">{rating}</p>
      </div>
    </div>
  );
};

export default NewCollection;
