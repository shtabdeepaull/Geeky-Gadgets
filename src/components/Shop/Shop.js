import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart,setCart] =useState([]);
    const [cartItems,setCartItems] = useState([]);
    // const []= ([]);

    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))

    },[])

    const clickAddToCart = (product) =>{
       const newCart = [...cart,product.name];
       setCart(newCart);
       if(cart.length >= 4){
           alert("Can't Add More Items")
       }
       else{
        cart.map(item => <p> {item}</p>)
       }

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
                
                <button className='choose-btn'>
                    <p>choose One</p>
                </button>
                
                <button className='reset-btn'>
                    <p>Reset</p>
                </button>
               
           </div>
           <section className='QN-section'>
               <h1>QN Section</h1>
                    <div className='QN-text'>
                        <div className='top-div'>
                        <h2>How React Works??</h2>
                        <p>React is an efficient, flexible, and open-source JavaScript framework library that allows developers to the creation of simple, fast, and scalable web applications.React uses virtual DOM to render the view.With the help of props, we can send data from a parent to a child component.</p>
                        </div>
                        
                        <div className='middle-div'>
                        <h2>Props vs State</h2>
                        <p>Props are used to pass data from one component to another. 
                        The state is a local data storage that is local to the component only and cannot be passed to other components.
                        The this.setState property is used to update the state values in the component.
                        Props are read-only.
                        Props are read-only.
                        Props is Immutable.
                        State is Mutable. </p>
                        </div>

                        <div className='bottom-div'>
                        <h2>How useState Works?</h2>
                        <p>The useState hook allows us declare one or more state variables in function components. Under the hood, React keeps track of these state variables and ensures they stay up-to-date on subsequent re-renders of the component.The useState() is a Hook that allows you to have state variables in functional components. React has two types of components, one is class components which are ES6 classes that extend from React and the other is functional components.</p>
                        </div>
                    </div>
           </section>
        </div>


    );
};

export default Shop;