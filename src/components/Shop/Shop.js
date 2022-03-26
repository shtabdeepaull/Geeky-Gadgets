import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart,setCart] =useState([]);
    // const []= ([]);

    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))

    },[])

    const clickAddToCart = (product) =>{
       const newCart = [...cart,product.name];
       setCart(newCart);
    }

    return (
        <div className='shop-container'>
           <div className="products-container">
                {
                    products.map(product => <Product 
                        key= {product.id}
                        product={product}
                        clickAddToCart={clickAddToCart}
                        ></Product>)
                }
           </div>
           <div className="cart-container">
                <h2>Seleted Items</h2>
                <div>
                    {
                        cart.map(item => <p> {item}</p>)
                    }
                </div>
           </div>
        </div>
    );
};

export default Shop;