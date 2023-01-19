import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function ProductPage() {
  const [productDetails, setProductDetails] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3001/products/${id}`)
        .then(res => {
          return res.json();
        })
        .then(data => {
          setProductDetails(data);
        });
    }
  }, [id]);

  return (
    <div className="product-details">
      {productDetails && (
        <div>
          <div className="product-page-img">
            <img src={`https://www.mcdn.net${productDetails.productImage}`} alt={productDetails.name} className="productImage" ></img>
          </div>
          <div className="product-page-description">
            <h5>{productDetails.name}</h5>
            <p className="production-page-details">{productDetails.description}</p>
            {productDetails.campaign ? (
              <div>
                <p>{Math.round(productDetails.price * (1 - (productDetails.campaign.discountPercent / 100)))}:- <span className='noDiscount'>{Math.round(productDetails.price)}:-</span></p>
              </div>
            ) : (
              <p>{Math.round(productDetails.price)}:-</p>
            )}
            <button onClick={() => alert("Produkten har lagts i fantasivarukorgen :)")} className="buyBtn">Köp mig</button>
          </div>
        </div>
      )}
    </div>
  )
}