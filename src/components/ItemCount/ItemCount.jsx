import React from "react";
import { useState } from "react";
import "./ItemCount.css";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, inicial, agregarAlCarrito }) => {
  const [contador, setContador] = useState(inicial);

  const aumentar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const decrementar = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };

  return (
    <div className="contador">
      <h3>Cantidad</h3>
      <div className="divContador">
        <button className="botonDisminuir" onClick={decrementar}>
          -
        </button>
        <strong> {contador} </strong>
        <button className="botonAumentar" onClick={aumentar}>
          +
        </button>
      </div>

      <Link
        className="botones-detail-item"
        onClick={() => agregarAlCarrito(contador)}
      >
        AGREGAR AL CARRITO
      </Link>
      <Link className="botones-detail-item" to="/">
        SEGUIR NAVEGANDO
      </Link>
    </div>
  );
};

export default ItemCount;
