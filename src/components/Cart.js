// Cart.js
import React, { useState } from 'react';
import './Cart.css';

const Cart = ({ cartItems, closeCart }) => {
  const [isCartVisible, setCartVisibility] = useState(true);
  const flattenedCartItems = cartItems.flat();
console.log("ff",flattenedCartItems);

console.log("cart items",cartItems)
  const toggleCartVisibility = () => {
    setCartVisibility(!isCartVisible);
  };

  return (
    <div className={`side-cart ${isCartVisible ? 'open' : ''}`}>
      <button onClick={toggleCartVisibility} className="close-cart-btn">
        {isCartVisible ? 'Close Cart' : 'Open Cart'}
      </button>
      {isCartVisible && (
        <>
          <h3>Shopping Cart</h3>
          <ul>
            {flattenedCartItems &&
              flattenedCartItems.map((item) => (
                <div className='cart-products'>
                <li key={item.id} className="cart-item">
                  <img src={item.imageUrl} alt={item.productName} />
                  <div>
                    <p>{item.productName}</p>
                    <p>${item.price}</p>
                  </div>
                </li>
                </div>
              ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Cart;
