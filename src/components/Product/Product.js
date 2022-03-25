import React, { useEffect, useState } from 'react';
import './Product.css';


const Product = () => {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))

    },[])

    return (
        <div className='shop-container'>
           <div className="products-container">
                <h2>this is fpr products:{products.length}</h2>
           </div>
           <div className="cart-container">
                <h2>Seleted Items</h2>
           </div>
        </div>
    );
};

export default Product;