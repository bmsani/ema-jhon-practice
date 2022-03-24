import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = (props) => {
    const{product, handleAddToCart} = props
    const {img, name, price, ratings, seller} = product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className="product-name">{name}</p>
            <p>price:${price}</p>
            <p><small>Seller:{seller}</small></p>
            <p><small>Ratings: {ratings} stars </small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;