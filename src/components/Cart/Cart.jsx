import React from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";
import "./Cart.css";
import CartItem from "../CartItem/CartItem";
import "bootstrap/dist/css/bootstrap.min.css";

const Cart = () => {
  const { carrito, vaciarCarrito } = useContext(CarritoContext);

  //Calculamos la cantidad total de productos en el carrito.
  const totalCantidad = carrito.reduce(
    (total, producto) => total + producto.cantidad,
    0
  );

  //Calculamos el precio total de los productos en el carrito.
  const total = carrito.reduce(
    (total, producto) => total + producto.item.precio * producto.cantidad,
    0
  );

  if (totalCantidad === 0) {
    return (
      <>
        <h2 className="message-cart-empty">No hay productos en el carrito</h2>
        {
          <Link className="botones-carrito" to="/">
            Sigue Explorando
          </Link>
        }
      </>
    );
  }

  return (
    <div className="offcanvas-body">
      <div className="list-carrito">
        {carrito.map((producto) => (
          <CartItem key={producto.id} {...producto} />
        ))}
      </div>
      <div className="bottom-carrito">
        <h3 className="total-carrito">Total: ${total}</h3>
        <Link className="botones-carrito" to="/checkout">
          Finalizar Compra
        </Link>
        <Link className="botones-carrito" onClick={() => vaciarCarrito()}>
          Vaciar Carrito
        </Link>
        <Link className="botones-carrito" to="/">
          Sigue Explorando
        </Link>
      </div>
    </div>
  );
};

export default Cart;
