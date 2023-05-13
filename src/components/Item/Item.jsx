import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, precio, img, stock }) => {
  return (
    <div className="card">
      <img src={img} alt="Nombre del producto" />
      <div className="card-info">
        <h2>{nombre}</h2>
        <p className="price">${precio}</p>
        <p className="stock">{stock} unidades disponibles</p>
        <Link className="details-btn" to={`/item/${id}`}>
          {" "}
          Ver Detalles{" "}
        </Link>
      </div>
    </div>
  );
};

export default Item;
