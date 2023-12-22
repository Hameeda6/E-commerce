// Cart.js
import React, { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = ({ cartItems, closeCart ,updateCartItems}) => {
    const navigate = useNavigate();
  const [isCartVisible, setCartVisibility] = useState(true);
// const flattenedCartItems = cartItems.flat().map(item => ({ ...item, quantity: 1 }));
const [flattenedCartItems, setFlattenedCartItems] = useState([]);

  useEffect(() => {
    setFlattenedCartItems(cartItems.flat().map(item => ({ ...item, quantity: 1 })));
  }, [cartItems]);

//   const toggleCartVisibility = () => {
//     setCartVisibility(!isCartVisible);
//   };

const toggleCartVisibility = () => {
    setCartVisibility((prevIsCartVisible) => !prevIsCartVisible);
  };
  
const handleNavigate = (path) => {
    navigate(path);
  };

  useEffect(() => {
    if (!isCartVisible) {
      setFlattenedCartItems([]);
    }
  }, [isCartVisible]);


  const decreaseQuantity = (index) => {
    const updatedCartItems = [...flattenedCartItems];
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity--;
      setFlattenedCartItems(updatedCartItems);
     // updateCartItems(updatedCartItems);
      console.log('Decreased quantity:', updatedCartItems[index].quantity);
      return updatedCartItems;

    }
  };

  const calculateSubtotal = () => {
    return flattenedCartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleProceedToCheckout = () => {
    // Add your logic for handling checkout, e.g., navigating to a checkout page
    // You can also pass relevant information like cart items to the checkout page
    console.log('Proceeding to checkout...');
  };
  

  const increaseQuantity = (index) => {
    const updatedCartItems = [...flattenedCartItems];
    updatedCartItems[index].quantity++;
    setFlattenedCartItems(updatedCartItems);
  // updateCartItems(updatedCartItems);
    console.log('Increased quantity:', updatedCartItems[index].quantity);
    return updatedCartItems;
  };

  return (
    <div className={`side-cart ${isCartVisible ? 'open' : ''}`}>
        <div className="side-cart-header">
         <h3>CART</h3>
      <button onClick={toggleCartVisibility} className="close-cart-btn">
        {isCartVisible ? 'Close' : 'Open Cart'}
      </button>
      </div>
      {isCartVisible && (
        <>
         
          <ul>
            {flattenedCartItems &&
              flattenedCartItems.map((item,index) => (
                <div className='cart-products'>
                <li key={item.id} className="cart-item">
                  <img src={item.imageUrl} alt={item.productName} />
                  <div>
                    <p>{item.productName}</p>
                    <button class="quantity-btn" onClick={() => decreaseQuantity(index)}>-</button>
                    <span class="quantity">{item.quantity}</span>
                    <button class="quantity-btn" onClick={() => increaseQuantity(index)}>+</button>
                    <p>${item.price * item.quantity}</p>

                  </div>
                </li>
                </div>
              ))}
          </ul>
          <div className="subtotal-section">
            <p>Subtotal: ${calculateSubtotal()}</p>
            <button onClick={() => handleNavigate('/checkout')}>Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;



