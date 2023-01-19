import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

export default function ProductListingPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setProducts(data);
      });
  }, []);


  const filteredProducts = products.filter(product =>
    product.productImage &&
    product.productImage.startsWith('/images/products/') &&
    product.productImage.endsWith("jpg") &&
    product.price >= 0 &&
    product.id &&
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (product.campaign ? Math.round(product.price * (1 - (product.campaign.discountPercent / 100))) >= 0 : true)
  );

  return (
    <div>
      <div className="search-bar-container">
        <input
          className="search-bar"
          type="text"
          placeholder="Sök efter produkt..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>


      <div className='product-list'>
        {filteredProducts.map(product => (
          <div className="product-card" key={product.id}>
            {product.campaign &&
              <div className="campaign-tag">Rea!</div>
            }
            <div onClick={() => navigate(`/product/${product.id}`)}>
              <ProductCard product={product} campaign={product.campaign} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}