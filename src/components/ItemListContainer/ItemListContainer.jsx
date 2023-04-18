import React from 'react'
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProductos, getProductosPorCategoria } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);

  const {idCategoria} = useParams();

  useEffect(() => {

    const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

    funcionProductos(idCategoria)
      .then( response => {
        setProducts(response)
      })
      .catch(error => {
        console.error(error)
      })
  }, [idCategoria])


  return (
    <div>
        <h2 className='categories'>{props.greeting}</h2>
        <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer