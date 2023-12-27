import React from 'react'
import '././../../Styles/Cart.css'
import CartProduct from './CartProduct'


function Cart({cart, setCart}) {
  function updateCart(values){
    setCart(values);
  }
  return (
    <div className='Cart-storage'>
      {cart.map((item)=>{
          return <CartProduct item={item} key={item.id} cart={cart} updateCart={updateCart}></CartProduct>
        })}
        
    </div>
  )
}

export default Cart
