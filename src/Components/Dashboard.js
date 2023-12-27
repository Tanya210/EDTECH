import React from 'react'
import '../Styles/Dashboard.css'
import Product from './Dashboard items/Product'
import data from '../Data'

function Dashboard({setCart, cart}) {

  return (
      <div className='Dashboard-content'>
        {data.map((item)=>{
          return <Product item={item} key={item.id} setCart={setCart} cart={cart}></Product>
        })}
      </div>
  )
}

export default Dashboard
