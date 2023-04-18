import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'

const ItemDetail = ({ nombre, precio, stock, img, description }) => {
  return (
    <>
      <div className="card-detail">
        <img src={img} alt="Nombre del producto" />
        <div className="card-info-detail">
          <h2>{nombre}</h2>
          <p className="price-detail">Precio: $ {precio}</p>
          <p className="stock-detail">{stock} unidades disponibles</p>
          <p className="description-detail">Descripción del producto: {description}</p>
          <ItemCount stock={stock} inicial={1} />
        </div>
      </div>
      
    </>
  );
};

export default ItemDetail;
