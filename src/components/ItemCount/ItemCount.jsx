import React from 'react'
import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({stock, inicial, agregarAlCarrito}) => {
    const [contador, setContador] = useState(inicial);

    const aumentar = () => {
        if(contador < stock){
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if(contador > inicial){
            setContador(contador - 1);
        }
    }

    /* const agregarAlCarrito = () => {
        console.log(`Se agregaron ${contador} items`)
    } */

  return (
    <div className='contador'>
        <h3>Cantidad</h3>
        <div className='divContador'>
            <button className='botonDisminuir' onClick={decrementar}>-</button>
            <strong> {contador} </strong>
            <button className='botonAumentar' onClick={aumentar}>+</button>
        </div>

        <button className='botonAgregar' onClick={() => agregarAlCarrito(contador)}>AGREGAR AL CARRITO</button>
    </div>
  )
}

export default ItemCount