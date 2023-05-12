import React from 'react'
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
//import { getProductos, getProductosPorCategoria } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
//importamos nuevas funciones:
import { collection, getDocs, where, query } from "firebase/firestore"


import { db } from "../../services/firebase/config";
import Loader from '../Loader/Loader';


const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const {idCategoria} = useParams();

  useEffect( () => {
    setLoading(true);
    const misProductos = idCategoria ? query(collection(db, "productos-umami-practica"), where("categoria", "==", idCategoria)) : collection(db, "productos-umami-practica");
    

    getDocs(misProductos)
      .then(res=> {
        const nuevosProductos = res.docs.map( doc => {
          const data = doc.data()
          return { id:doc.id, ...data}
        })
        setProducts(nuevosProductos);
        setLoading(false);
      })
      .catch(error=> console.log(error))
  }, [idCategoria])

  /* useEffect(() => {

    const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

    funcionProductos(idCategoria)
      .then( response => {
        setProducts(response)
      })
      .catch(error => {
        console.error(error)
      })
  }, [idCategoria]) */


  return (
    <div>
        <h2 className='categories'>{props.greeting}</h2>
        {loading ? <Loader/> : <ItemList products={products}/>}
    </div>
  )
}

export default ItemListContainer