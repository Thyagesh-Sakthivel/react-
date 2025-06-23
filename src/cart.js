import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function Cart() {
  const location = useLocation();
  const product = location.state?.product;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Cart</h2>
      {product ? (
        <div>
          <h3>{product.title}</h3>
          <img src={product.image} alt={product.title} width="150" />
          <p>Price: ${product.price}</p>
          <p>Count: {product.rating.count} items</p>
          <Link to="/dashboard">
            <button style={{ padding: '8px 16px', marginTop: '15px' }}>Back to Dashboard</button>
          </Link>
        </div>
      ) : (
        <p>No product in cart. Please add from the dashboard.</p>
      )}
    </div>
  );
}

export default Cart;
