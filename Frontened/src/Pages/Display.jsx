import React from 'react';
import './Display.css';
import { useLocation } from 'react-router-dom';
import Product from './Product/Product';

function Display() {
  const location = useLocation();
  const { image, title, description, price, oldPrice, rating } = location.state || {};

  // Optional: If no data is passed, you can show a fallback message
  if (!image || !title) {
    return <h2>No product details to display</h2>;
  }

  return (
    <div>
      <Product
        image={image}
        title={title}
        description={description}
        price={price}
        oldPrice={oldPrice}
        rating={rating}
      />
    </div>
  );
}

export default Display;

