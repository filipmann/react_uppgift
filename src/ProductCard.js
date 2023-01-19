import React from 'react';

  const ProductCard = ({ product, campaign }) => {
    const { name, description, productImage, price } = product;
    let discountedPrice = Math.round(price);
  
    if (campaign) {
      const { name: campaignName, discountPercent } = campaign;
      discountedPrice = Math.round(price * (1 - (discountPercent / 100))); 
  
      return (
            <div>
              {product.productImage && 
              <img src={`https://www.mcdn.net${product.productImage}`} alt={product.name} className="productImage" />
              }
              <h5>{product.name}</h5>
              <p>{discountedPrice}:- <span className='noDiscount'>{Math.round(product.price)}:-</span></p>
          </div>
      );
    }
    return (
        <div>
        {product.productImage && 
        <img src={`https://www.mcdn.net${product.productImage}`} alt={product.name} className="productImage" />
        }
        <h5>{product.name}</h5>
        <p>{Math.round(product.price)}:-</p>
        </div>
      );
    }

    export default ProductCard;