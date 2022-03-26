import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const {clickAddToCart,product}=props;
    const {name,price,picture,id}= product;
   
    return (
        <div className='product'>
            <img src={picture} alt="" />
            <div className='product-info'>
            <p>ID:{id}</p>
            <p className='product-name'>Name:{name}</p>
            <p>Price:${price}</p>
            </div>
            <button onClick={()=>clickAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;