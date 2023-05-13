import React from "react";
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import "./CartSummary.css";

const CartSummary = () => {
  const { carrito } = useContext(CarritoContext);
  return (
    <>
      {carrito.map((producto) => (
        <div className="resumen-carrito" key={producto.item.id}>
          <div className="resumen-carrito-nombre">
            <p className="nombre-resumen">{producto.item.nombre}</p>
            <p>
              {producto.cantidad} x ${producto.item.precio}
            </p>
          </div>
          <div className="resumen-carrito-precio">
            <p>${producto.item.precio * producto.cantidad}</p>
          </div>
        </div>
      ))}
      <div className="total-resumen">
        TOTAL $
        {carrito.reduce(
          (total, producto) => total + producto.item.precio * producto.cantidad,
          0
        )}
      </div>
    </>
  );
};

export default CartSummary;
