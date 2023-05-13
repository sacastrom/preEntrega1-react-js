import { useState, createContext, useEffect } from "react";

export const CarritoContext = createContext({ carrito: [] });

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(
    JSON.parse(localStorage.getItem("carrito")) || []
  );

  useEffect(() => {
    carrito.length > 0
      ? localStorage.setItem("carrito", JSON.stringify(carrito))
      : localStorage.clear();
  }, [carrito]);

  console.log(carrito);

  const agregarProducto = (item, cantidad = 1) => {
    if (!yaEstaEnCarrito(item.id)) {
      setCarrito((prev) => [...prev, { item, cantidad }]);
    }
  };

  const eliminarProducto = (id) => {
    const carritoActualizado = carrito.filter((prod) => prod.item.id !== id);
    setCarrito(carritoActualizado);
  };

  const actualizarCantidadProducto = (id, nuevaCantidad) => {
    setCarrito((prev) =>
      prev.map((item) =>
        item.item.id === id ? { ...item, cantidad: nuevaCantidad } : item
      )
    );
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const yaEstaEnCarrito = (id) => {
    return carrito.some((item) => item.item.id === id);
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarProducto,
        eliminarProducto,
        actualizarCantidadProducto,
        vaciarCarrito,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
