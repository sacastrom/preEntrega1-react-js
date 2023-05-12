//1) importamos useState y createContext

import { useState, createContext } from "react";

//2) CXreamos un nuevo contexto
//El valor incial del carrito es un aray vacio
export const CarritoContext = createContext({carrito:[]});

//3) creamos un componente llamado carrito provider

export const CarritoProvider = ({children}) => {
    //4) creamos un estado local carrito con useState

    const [carrito, setCarrito] = useState([]);

    console.log(carrito);

    //5) agregamos algunos metodos al proveedor de contexto para manipular el carrito

    const agregarProducto = (item, cantidad = 1) => {
        if (!yaEstaEnCarrito(item.id)) {
          setCarrito((prev) => [...prev, { item, cantidad }]);
        } /* else {
          setCarrito(prev => prev.map((prod) => {
            if( prod.item.id === item.id) {
              return{ ...prod, cantidad: prod.cantidad + cantidad}
            }else{
              return prod;
            }
          }))
        } */
      };

    //Funcion para eliminar porductos del carrito

    const eliminarProducto = (id) => {
        const carritoActualizado = carrito.filter( prod => prod.item.id !== id )
        setCarrito(carritoActualizado);
    }

    const actualizarCantidadProducto = (id, nuevaCantidad) => {
        setCarrito((prev) =>
          prev.map((item) =>
            item.item.id === id ? { ...item, cantidad: nuevaCantidad } : item
          )
        );
      };

    //Funcion para vaciar el carrito

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    //funcion para verificar si el producto ya esta en el carrito:

    const yaEstaEnCarrito = (id) => {
        return carrito.some((item) => item.item.id === id);
      };

    //6) usamos el componenete carrito context. provider para enviar el valor actual del carrito y los metodos a los componewntes de mi aplicacion que lo necesiten.

    return(
        <CarritoContext.Provider value={{carrito, agregarProducto, eliminarProducto, actualizarCantidadProducto, vaciarCarrito}  }>
            {children}
        </CarritoContext.Provider>
    )

    //7)Children: propiedad especial que se utiliza para representar a todos aquellos componentes que puedan necesitar el carrito y sus metodos.


}

