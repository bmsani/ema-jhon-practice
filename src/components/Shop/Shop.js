import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('../fakeData/product.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div className='shop-container'>
            <div className="products-container">
                <h3>This is for products: {products.length}</h3>
            </div>
            <div className="cart-container">
                <h3>order Summary</h3>
            </div>
        </div>
    );
};

export default Shop;