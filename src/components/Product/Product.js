import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name,price,picture,id}= props.product;
    return (
        <div className='product'>
            <img src={picture} alt="" />
            <div className='product-info'>
            <p>ID:{id}</p>
            <p className='product-name'>Name:{name}</p>
            <p>Price:${price}</p>
            </div>
            <button className='btn-cart'>
                <p>Add To Cart</p>
            </button>
        </div>
    );
};

export default Product;