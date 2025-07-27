import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const Product = ({ image, title, description, price, oldPrice, rating = 0 }) => {
  const safeRating = isNaN(rating) ? 0 : Math.max(0, Math.floor(rating));
  const hasHalfStar = !isNaN(rating) && rating % 1 !== 0;

  return (
    <div className="product">
      <img src={image} alt={title} className="product-image" />
      
      <h2 className="product-title">{title}</h2>

      <div className="product-rating">
        {[...Array(safeRating)].map((_, i) => (
          <FontAwesomeIcon icon={faStar} key={i} />
        ))}
        {hasHalfStar && <FontAwesomeIcon icon={faStarHalfAlt} />}
        <span className="rating-value"> ({rating || 0})</span>
      </div>

      <p className="product-description">{description}</p>

      <div className="product-price">
        <span className="current-price">${price}</span>
        {oldPrice && <span className="old-price">${oldPrice}</span>}
      </div>
      <div className="size">
        
        <button className="size1">Xs</button>
        <button className="size1">S</button>
        <button className="size1">M</button>
        <button className="size1">L</button>
        <button className="size1">XL</button>
        <button className="size1">XXL</button>
        <button className="size1">XXL</button>

      </div>
      <br></br>
      <button className="add-to-cart" >Buy</button>
    </div>
  );
};

export default Product;
