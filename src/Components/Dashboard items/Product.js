import React from 'react'
import '../../Styles/Product.css'
import img from '..//../Images/loginimg.webp'

function Product(props) {
    
    function clickHandler(){
        props.setCart([...props.cart, props.item]);
        console.log(props.cart);
    }
  
  return (
      <div className='Product-card'>
          <p className='Product-title'>{props.item.title}</p>
          <p className='Product-desc'>{props.item.description}</p>
          <img src={props.item.image} alt='image' className='Product-img'></img>
        
        <div className='Product-amount'>
            <p className='Product-price'>Rs. {props.item.price}</p>
            <button className='Product-button' onClick={clickHandler}>Add to cart</button>
        </div>
      </div>
  )
}

export default Product
