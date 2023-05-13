import React from "react";
import { useState, useEffect } from "react";
import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase/config";
import { getDoc, doc } from "firebase/firestore";
import Loader from "../Loader/Loader";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(false);

  const { idItem } = useParams();

  useEffect(() => {
    setLoading(true);
    const nuevoDoc = doc(db, "productos-umami-practica", idItem);

    getDoc(nuevoDoc)
      .then((res) => {
        setTimeout(() => {
          const data = res.data();
          const nuevoProducto = { id: res.id, ...data };
          setProducto(nuevoProducto);
          setLoading(false);
        }, 1000); // esperar 1 segundo antes de ejecutar el código dentro de setTimeout
      })
      .catch((error) => console.log(error));
  }, [idItem]);

  return (
    <div className="ItemDetailContainer">
      {loading ? <Loader /> : <ItemDetail {...producto} />}
    </div>
  );
};

export default ItemDetailContainer;
