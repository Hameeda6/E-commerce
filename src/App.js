
// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Main from './components/Main';
import Header from './components/Header';
import Men from './components/Category/men';
import Women from './components/Category/women';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);
  // const navigate = useNavigate();

  const openCart = () => {
    console.log('Opening Cart');
    setCartOpen(true);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  const addToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, { ...item, quantity: 1 }]);
    console.log(cartItems)
    openCart(); 
  };
  


  return (
    <Router>
      <div>
        <Header cartItemsCount={cartItems.length} openCartProp={openCart} cartItems={cartItems} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/men" element={<Men addToCart={addToCart} />} />
          <Route path="/women" element={<Women />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>

        {/* {isCartOpen && <Cart cartItems={cartItems} updateCartItems={setCartItems} closeCart={closeCart} />} */}
        {isCartOpen && window.location.pathname !== '/checkout' && (
          <Cart cartItems={cartItems} updateCartItems={setCartItems} closeCart={closeCart} />
        )}
        
      </div>
    </Router>
  );
}

export default App;
