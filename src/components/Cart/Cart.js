import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity
        total = total + product.price * product.quantity
        shipping = shipping + product.shipping
    }
    const tax = total * 0.1;
    const grandTotal = total + tax + shipping
    return (
        <div className='cart'>
            <h3>order Summary</h3>
            <p>Selected Items: {cart.length}</p>
            <p>Total price: ${total} </p>
            <p>Total Shipping: ${shipping}  </p>
            <p>Tax: ${tax.toFixed(2)} </p>
            <h5>Grand Total:  $ {grandTotal} </h5>
        </div>
    );
};

export default Cart;