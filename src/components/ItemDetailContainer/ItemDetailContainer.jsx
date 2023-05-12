import React from 'react'
import { useState, useEffect } from 'react'
import './ItemDetailContainer.css'
//import { getUnProducto } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

//Importamos las nuevas funciones
import { db } from "../../services/firebase/config"
import { getDoc, doc } from 'firebase/firestore'
import Loader from '../Loader/Loader'

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(false);

  const {idItem} = useParams();

  useEffect( () => {
    setLoading(true);
    const nuevoDoc = doc(db, "productos-umami-practica", idItem);

    getDoc(nuevoDoc)
      .then( res => {
        const data = res.data();
        const nuevoProducto = {id: res.id, ...data}
        setProducto(nuevoProducto);
        setLoading(false);
      })
      .catch(error => console.log(error))
  }, [idItem])

  /* useEffect(() => {
    getUnProducto(idItem)
      .then(response => {
        setProducto(response)
      })
      .catch(error => {
        console.error(error)
      })
  }, [idItem]) */


  return (
    <div className='ItemDetailContainer'>
      {loading ? <Loader/> : <ItemDetail {...producto}/>}
    </div>
  )
}

export default ItemDetailContainer