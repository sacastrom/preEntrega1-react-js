import React, { useContext } from "react";
import "./CartItem.css";
import { CarritoContext } from "../../context/CarritoContext";

const CartItem = ({ item, cantidad, onActualizarCantidad }) => {
  const { actualizarCantidadProducto } = useContext(CarritoContext);
  const { eliminarProducto } = useContext(CarritoContext);

  const aumentarCantidad = () => {
    if (cantidad < item.stock) {
      const nuevaCantidad = cantidad + 1;
      //onActualizarCantidad(nuevaCantidad);
      actualizarCantidadProducto(item.id, nuevaCantidad);
    }
  };

  const disminuirCantidad = () => {
    if (cantidad > 1) {
      const nuevaCantidad = cantidad - 1;
      //onActualizarCantidad(nuevaCantidad);
      actualizarCantidadProducto(item.id, nuevaCantidad);
    }
  };

  const eliminarDelCarrito = () => {
    eliminarProducto(item.id);
  };

  const cantidadDisponible = item.stock - cantidad;

  return (
    <div className="card-carrito">
      <div>
        <img className="cart-image" src={item.img} alt="Nombre del producto" />
      </div>

      <div className="cart-card-detalles">
        <h3>{item.nombre}</h3>
        <div className="contador-cart">
          <button className="boton-disminuir" onClick={disminuirCantidad}>-</button>
          <p className="cantidad-cart">{cantidad}</p>
          <button className="boton-aumentar"
            onClick={aumentarCantidad}
            disabled={cantidadDisponible === 0}
          >
            +
          </button>
        </div>
        <p className="precio-cart">
          ${item.precio} <span>({cantidadDisponible} disponible(s))</span>
        </p>
        <button className="eliminar-cart" onClick={eliminarDelCarrito}>
          x
        </button>
      </div>
    </div>
  );
};

export default CartItem;
