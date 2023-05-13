import React from "react";
import "./CartWidget.css";
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import Cart from "../Cart/Cart";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Offcanvas } from "react-bootstrap";

const CartWidget = () => {
  const { carrito } = useContext(CarritoContext);
  const [show, setShow] = useState(false);

  const totalCantidad = carrito.reduce(
    (total, producto) => total + producto.cantidad,
    0
  );

  const handleShowCart = () => {
    setShow(true);
  };

  const handleCloseCart = () => {
    setShow(false);
  };

  return (
    <>
      <button className="cart-widget" onClick={handleShowCart}>
        <img
          className="imgCarrito"
          src="https://cdn-icons-png.flaticon.com/512/34/34627.png"
          alt="Carrito"
        />
        <span>{totalCantidad}</span>
      </button>

      <Offcanvas
        show={show}
        onHide={handleCloseCart}
        placement="end"
        className="offcanvas-cart"
      >
        <Offcanvas.Header closeButton className="offcanvas-cart-bg">
          <Offcanvas.Title>
            <h4 className="my-1">Tu Carrito en UMAMI</h4>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="offcanvas-cart-bg">
          {<Cart handleClose={handleCloseCart} />}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CartWidget;
