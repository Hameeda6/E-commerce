// MenTshirts.js
import React,{ useState } from 'react';
import './men.css';
import Cart from '../Cart';

const Men = ({ addToCart }) =>  {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setCartOpen] = useState(false);


    const showPopup = () => {
      setPopupVisible(true);
    };
  
    const hidePopup = () => {
      setPopupVisible(false);
    };

  const tshirts = [
    {
      id: 1,
      imageUrl: '/tshirt1.jpeg',
      productName: 'Classic White T-shirt',
      price: 19.99,
    },
    {
      id: 2,
      imageUrl: '/tshirt2.jpeg',
      productName: 'Graphic Print T-shirt',
      price: 24.99,
    },
    {
      id: 3,
      imageUrl: '/tshirt3.jpeg',
      productName: 'Striped Polo Shirt',
      price: 29.99,
    },
    {
        id: 4,
        imageUrl: '/tshirt4.jpeg',
        productName: 'Striped Polo Shirt',
        price: 29.99,
      },
      {
        id: 5,
        imageUrl: '/tshirt5.jpeg',
        productName: 'Striped Polo Shirt',
        price: 29.99,
      },
      {
        id: 6,
        imageUrl: '/tshirt6.jpeg',
        productName: 'Striped Polo Shirt',
        price: 29.99,
      },
      {
        id: 7,
        imageUrl: '/tshirt6.jpeg',
        productName: 'Striped Polo Shirt',
        price: 29.99,
      },
      {
        id: 8,
        imageUrl: '/tshirt6.jpeg',
        productName: 'Striped Polo Shirt',
        price: 29.99,
      },
      {
        id: 9,
        imageUrl: '/tshirt6.jpeg',
        productName: 'Striped Polo Shirt',
        price: 29.99,
      },
      {
        id: 10,
        imageUrl: '/tshirt6.jpeg',
        productName: 'Striped Polo Shirt',
        price: 29.99,
      },
      {
        id: 11,
        imageUrl: '/tshirt2.jpeg',
        productName: 'Graphic Print T-shirt',
        price: 24.99,
      },
      {
        id: 12,
        imageUrl: '/tshirt2.jpeg',
        productName: 'Graphic Print T-shirt',
        price: 24.99,
      },
    // Add more t-shirt items as needed
  ];

//   const addToCart = (tshirt) => {
//     setCartItems([...cartItems, tshirt]);
//     console.log("cart items in men",cartItems)
//   };

  const openCart = () => {
    setCartOpen(true);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  const handleAddToCart = (tshirt) => {
    addToCart(tshirt);
  };

  

  return (
    <div className='men-container'>
    <h2>Men's T-shirts</h2>
    <ul className="men-tshirts-list">
      {tshirts.map((tshirt) => (
        <li key={tshirt.id} className="men-tshirt-card">
          <div className="men-tshirt-card-content">
            <img src={tshirt.imageUrl} alt={tshirt.productName} />
            <div className="men-product">
              <div>{tshirt.productName}</div>
              <div className="price">${tshirt.price}</div>
              {/* <button onClick={() => addToCart(tshirt.id)}>Add to Cart</button> */}
              <button onClick={() => handleAddToCart(tshirt)}>
                  Add to Cart
                </button>

                {isPopupVisible && (
                  <div className="popup">
                    <button>S</button>
                    <button>M</button>
                    <button>L</button>
                    <button onClick={hidePopup}>Close</button>
                  </div>
                )}
              
            </div>
          </div>
         
        </li>
    
      ))}
    </ul>
    {isCartOpen && <Cart cartItems={cartItems} closeCart={closeCart} />}
  </div>
   
  );
};

export default Men;
