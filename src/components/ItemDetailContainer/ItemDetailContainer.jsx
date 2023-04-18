import React from 'react'
import { useState, useEffect } from 'react'
import './ItemDetailContainer.css'
import { getUnProducto } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);

  const {idItem} = useParams();

  useEffect(() => {
    getUnProducto(idItem)
      .then(response => {
        setProducto(response)
      })
      .catch(error => {
        console.error(error)
      })
  }, [idItem])


  return (
    <div className='ItemDetailContainer'>
      <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer