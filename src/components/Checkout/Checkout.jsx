import React, { useEffect } from 'react'
import './Checkout.css'
import { useState, useContext } from 'react'
//import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import { db } from '../../services/firebase/config'
import { collection, addDoc, doc, updateDoc, query, onSnapshot } from 'firebase/firestore'
import CartSummary from '../CartSummary/CartSummary'
import { OrdenContext } from '../../context/OrdenContext'
import { useNavigate } from 'react-router-dom'
import Loader from '../Loader/Loader'



const Checkout = () => {
    const {carrito, vaciarCarrito} = useContext(CarritoContext);
    const { setOrden} = useContext(OrdenContext);
    const { placeOrder } = useContext(OrdenContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfimacion] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [productos, setProductos] = useState([]);
    //const [orden, setOrden] = useState("");

    const navigateTo = useNavigate();

    useEffect(() => {
        //Creamos una consulta a la coleccion
        const q = query(collection(db, "productos-umami-practica"));
        const modificar = onSnapshot(q, function(querySnapShot){
            const docs = [];
            querySnapShot.forEach(function (doc){
                docs.push({id:doc.id, ...doc.data()});
            });
            setProductos(docs);
        });
        return () => {
            modificar()
        };

    } , []);

    //Función para bajar el stock cuando el usuario compra:
    const handleStock = (id, cantidad) => {
        const productoRef = doc(db, "productos-umami-practica", id);
        const producto = productos.find(prod => prod.id === id);

        if(producto){
            updateDoc(productoRef, {
                stock: producto.stock - cantidad,
            })
            //updateDoc: me actualiza el documento
            .then(() => {
                console.log("El stock se actualizó correctamente");
            })
            .catch((error) => {
                console.log(error);
            })
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const fecha = new Date();
        const fechaISO = fecha.toISOString().slice(0, 10);

        //Validar que los campos estén completos.
        /* if(!nombre || !apellido || !telefono || !email || !emailConfirmacion){
            setError("Por favor complete todos los campos");
            return;
        } */

        //Validamos que los campos del email coincidan.
        if(email !== emailConfirmacion){
            setError("Los campos del email no coinciden");
            return;
        }

        //Creamos el objeto de la orden
        const nuevaOrden = {
            items: carrito.map((producto)=>({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad,
                precio: producto.item.precio
            })),
            total: carrito.reduce((total, producto) => total + producto.item.precio * producto.cantidad, 0),
            nombre,
            apellido,
            telefono,
            email,
            fecha: fechaISO,
        };

        setOrden(nuevaOrden);
        nuevaOrden.items.map(prod => (handleStock(prod.id, prod.cantidad)))
        

        //Guardamos la orden en la base de datos.
        addDoc(collection(db, "ordenes"), nuevaOrden)
            .then((docRef) => {
                placeOrder(docRef.id);
                vaciarCarrito();
                navigateTo(`/orden`);
                /* console.log(orden.items); */
            })
            .catch((error) => {
                console.error(error);
                setError("Se produjo un error al crear la orden, vuelva más tarde");
            })
            setIsLoading(true);
    }

  return (
    <div className='checkout'>
        {isLoading ? <Loader/> : <><div className='resumen-compra'>
        <h2>Resumen de Compra</h2>
        {
                <CartSummary/>
            }
        </div>
        <form onSubmit={ handleSubmit }>
            
            <h2>Completa el Formulario</h2>
            <div>
                <label htmlFor="">Nombre</label>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
            </div>

            <div>
                <label htmlFor="">Apellido</label>
                <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} required />
            </div>

            <div>
                <label htmlFor="">Teléfono</label>
                <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
            </div>

            <div>
                <label htmlFor="">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <div>
                <label htmlFor="">Email Confirmación</label>
                <input type="email" value={emailConfirmacion} onChange={(e) => setEmailConfimacion(e.target.value)} required />
            </div>

            {error && <p style={{color: "red"}}> {error}</p>}
            <button type='submit'>Finalizar Compra</button>
        </form>

         
        {/* {
            orden && (
                <CheckoutSummary/>
            )
        } */}
        </>}
    </div>
  )
}

export default Checkout