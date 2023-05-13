import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { useEffect, useContext } from "react";
import Cart from "../Cart/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import { Offcanvas } from "react-bootstrap";

const ItemDetail = ({ id, nombre, precio, stock, img, description }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const [show, setShow] = useState(false);
  const { carrito, agregarProducto } = useContext(CarritoContext);

  const handleShowCart = () => {
    setShow(true);
  };

  const handleCloseCart = () => {
    setShow(false);
  };

  useEffect(() => {
    const productoEnCarrito = carrito.find((item) => item.item.id === id);
    if (productoEnCarrito) {
      setAgregarCantidad(productoEnCarrito.cantidad);
    }
  }, [carrito, id]);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("Productos Agregados:" + cantidad);

    const item = { id, nombre, precio, img, stock };
    agregarProducto(item, cantidad);
  };

  return (
    <>
      <div className="card-detail">
        <img src={img} alt="Nombre del producto" />
        <div className="card-info-detail">
          <h2>{nombre}</h2>
          <p className="price-detail">Precio: $ {precio}</p>
          <p className="stock-detail">{stock} unidades disponibles</p>
          <p className="description-detail">
            Descripción del producto: {description}
          </p>
          {stock > 0 ? (
            <>
              {agregarCantidad > 0 ? (
                <div className="botones-item-detail">
                  <Link className="botones-detail" onClick={handleShowCart}>
                    IR AL CARRITO
                  </Link>
                  <Link className="botones-detail" to="/">
                    SEGUIR NAVEGANDO
                  </Link>
                </div>
              ) : (
                <ItemCount
                  inicial={1}
                  stock={stock}
                  agregarAlCarrito={manejadorCantidad}
                />
              )}
            </>
          ) : (
            <p className="stock-detail">Producto agotado</p>
          )}
        </div>
      </div>

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

export default ItemDetail;
