import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import tshirts from './Category/tshirtsData'; 
import './ProductDetails.css'; 
import Cart from './Cart';

const ProductDetails = ({addToCart}) => {
  const { productId } = useParams();
  const selectedProduct = tshirts.find((tshirt) => tshirt.id === parseInt(productId, 10));
  const [selectedSize, setSelectedSize] = useState('');
  const [isSizeSelected, setIsSizeSelected] = useState(false);

  useEffect(() => {
    console.log('Product Details: ', selectedProduct);
  }, [selectedProduct]);

  if (!selectedProduct) {
    return <div>Product not found</div>; 
  }

  const handleSizeClick = (size) => {
    setSelectedSize(size);
    setIsSizeSelected(true);
  };

  const handleAddToCart = (tshirt) => {
    
    if (isSizeSelected) {
        //addToCart(tshirt);
        console.log("yshirt",tshirt)
        addToCart(tshirt);
      console.log(`Clicked ${selectedProduct.productName} to the cart with size ${selectedSize}`);

    } else {
      console.log('Please select a size before adding to the cart.');
    }
  };


// const handleAddToCart = (tshirt) => {
//     addToCart(tshirt);
//   };



  return (
    <div className="product-details-container">
      <div className="product-details-content">
        <div className="product-details-image">
          <img src={selectedProduct.imageUrl} alt={selectedProduct.productName} />
        </div>
            <div className="product-details-text">
          <h2>{selectedProduct.productName}</h2>
          <p>Price: ${selectedProduct.price}</p>
          <h2>Select Sizes</h2>
          <div className="size-buttons">
           
          <button
          className={selectedSize === 'S' ? 'active' : ''}
          onClick={() => handleSizeClick('S')}
        >
          S
        </button>
        <button
          className={selectedSize === 'M' ? 'active' : ''}
          onClick={() => handleSizeClick('M')}
        >
          M
        </button>
        <button
          className={selectedSize === 'L' ? 'active' : ''}
          onClick={() => handleSizeClick('L')}
        >
          L
        </button>
        <button
          className={selectedSize === 'XL' ? 'active' : ''}
          onClick={() => handleSizeClick('XL')}
        >
          XL
        </button>
        <button
          className={selectedSize === 'XXL' ? 'active' : ''}
          onClick={() => handleSizeClick('XXL')}
        >
          XXL
        </button>
          </div>
          <button disabled={!selectedSize} onClick={() => handleAddToCart(selectedProduct)}>Add to Cart</button>
        </div>


      </div>

      {/* <div className="related-tshirts">
        <h3>Related T-shirts</h3>
        <ul>
          {tshirts.map((tshirt) => (
            <li key={tshirt.id}>
              <img src={tshirt.imageUrl} alt={tshirt.productName} />
              <p>{tshirt.productName}</p>
              <p>Price: ${tshirt.price}</p>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default ProductDetails;
