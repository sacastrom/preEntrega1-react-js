import React from "react";
import { useContext } from "react";
import { OrdenContext } from "../../context/OrdenContext";
import "./OrdenSummary.css";
import { Link } from "react-router-dom";

const OrdenSummary = () => {
  const { orden } = useContext(OrdenContext);
  const { ordenId } = useContext(OrdenContext);

  if (!orden) {
    return <p>No hay ordenes disponibles.</p>;
  }

  return (
    <>
      <div className="orden-identificador">
        <strong>¡Gracias por tu compra, {orden.nombre}!</strong>
        <p>Tu identificador de orden es {ordenId}</p>
      </div>
      <div className="orden">
        <div>
          <div className="orden-datos">
            <h2>Tus Datos:</h2>
            <p>Nombre: {orden.nombre}</p>
            <p>Apellido: {orden.apellido}</p>
            <p>Teléfono: {orden.telefono}</p>
            <p>Email: {orden.email}</p>
            <p>Fecha: {orden.fecha}</p>
          </div>
        </div>
        <div className="orden-productos">
          <h2 className="titulo-resumen-orden">Resumen:</h2>
          {orden?.items.map((item) => (
            <div className="resumen-orden" key={item.id}>
              <div className="resumen-orden-productos">
                <p className="resumen-orden-nombre">{item.nombre}</p>
                <p>
                  {item.cantidad} x ${item.precio}
                </p>
              </div>
              <div className="resumen-orden-precio">
                <p>${item.cantidad * item.precio}</p>
              </div>
            </div>
          )) || null}
          <div>
            <p className="total-orden">Total a pagar: ${orden.total}</p>
          </div>
        </div>
      </div>
      <Link className="botones-detail" to="/">
        SEGUIR NAVEGANDO
      </Link>
    </>
  );
};

export default OrdenSummary;
