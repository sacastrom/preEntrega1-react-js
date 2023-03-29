import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "https://cdn-icons-png.flaticon.com/128/4195/4195127.png";
  return (
    
    <div className='carrito'>
        <img className='imgCarrito' src={imgCarrito} alt="Carrito" />
        <strong>3</strong>
    </div>
  )
}

export default CartWidget