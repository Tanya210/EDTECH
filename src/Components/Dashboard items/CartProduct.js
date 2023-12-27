import React from 'react'
import '../../Styles/Product.css'

function CartProduct(props) {
    function removeHandler(){
        const newArray = props.cart.filter(item => item.id !== props.key);
        props.updateCart(newArray);
    }
  return (
    <div className='Product-card'>
          <p className='Product-title'>{props.item.title}</p>
          <p className='Product-desc'>{props.item.description}</p>
          <img src={props.item.image} alt='image' className='Product-img'></img>
        
        <div className='Product-amount'>
            <p className='Product-price'>Rs. {props.item.price}</p>
            <button className='Product-button' onClick={removeHandler}>Remove</button>
        </div>
      </div>
  )
}

export default CartProduct
