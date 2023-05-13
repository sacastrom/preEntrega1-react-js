import React from "react";
import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../services/firebase/config";
import Loader from "../Loader/Loader";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { idCategoria } = useParams();

  useEffect(() => {
    setLoading(true);
    const misProductos = idCategoria
      ? query(
          collection(db, "productos-umami-practica"),
          where("categoria", "==", idCategoria)
        )
      : collection(db, "productos-umami-practica");

    getDocs(misProductos)
      .then((res) => {
        setTimeout(() => {
          const nuevosProductos = res.docs.map((doc) => {
            const data = doc.data();
            return { id: doc.id, ...data };
          });
          setProducts(nuevosProductos);
          setLoading(false);
        }, 1000); // espera 1 segundo antes de ejecutar el código dentro de setTimeout
      })
      .catch((error) => console.log(error));
  }, [idCategoria]);

  return (
    <div>
      <h2 className="categories">{props.greeting}</h2>
      {loading ? <Loader /> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
