// MenTshirts.js
import React,{ useState ,useEffect} from 'react';
import { Link,useNavigate,useParams } from 'react-router-dom';
import './men.css';
import Cart from '../Cart';
import ProductDetails from '../ProductDetails';
import tshirts from './tshirtsData';

const Men = ({ addToCart ,products}) =>  {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setCartOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const { productId } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        if (productId) {
          const selectedProduct = tshirts.find((tshirt) => tshirt.id === parseInt(productId, 10));
          setSelectedProduct(selectedProduct);
        }
      }, [productId]);
     
    const showPopup = () => {
      setPopupVisible(true);
    };
  
    const hidePopup = () => {
      setPopupVisible(false);
    };

    const showProductDetails = (product) => {
        console.log("product", product);
        setSelectedProduct(product);
        console.log("setselectedproduct", selectedProduct);
       // navigate(`/product-details/${product.id}`, { state: { product } });
      };


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
          <Link
                to={{
                  pathname: `/product-details/${tshirt.id}`,
                  state: { product: tshirt },
                }}
              >
                <img src={tshirt.imageUrl} alt={tshirt.productName} onClick={() => showProductDetails(tshirt)} />
              </Link>
            <div className="men-product">
              <div>{tshirt.productName}</div>
              <div className="price">${tshirt.price}</div>
              
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

    {selectedProduct && (
  <div>
    {console.log('Selected Product in Men: ', selectedProduct)}
    <ProductDetails product={selectedProduct} />
  </div>
)}
     
  </div>
   
  );
};

export default Men;
