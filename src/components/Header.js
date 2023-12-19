// Header.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import Cart from './Cart';

const Header = ({ cartItemsCount,cartItems}) => {
  const navigate = useNavigate();
  const [isCartOpen, setCartOpen] = useState(false);

  const handleOpenCart = () => {
    console.log('Opening Cart');
    setCartOpen(!isCartOpen);
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="headerbutton">
      <div className="logo-name" style={{ display: 'flex', alignItems: 'center' }}>
        <h3>E-COMMERCE</h3>
      </div>
      <div className="headerbuttoncenter">
        <button onClick={() => handleNavigate('/men')}>MEN</button>
        <button onClick={() => handleNavigate('/women')}>WOMEN</button>
        <button>KIDS</button>
      </div>
      <div className="headerbuttonend">
        <button className="profile-button" onClick={() => navigate('/login')}>
          Profile
        </button>
        <button className="cart-button" onClick={handleOpenCart}>
          Cart({cartItemsCount})
        </button>
        {isCartOpen && <Cart cartItems={[cartItems]} closeCart={() => setCartOpen(false)} />}
      </div>
    </div>
  );
};

export default Header;
