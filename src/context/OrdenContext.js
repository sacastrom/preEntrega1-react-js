import { useState, createContext } from "react";

export const OrdenContext = createContext();

export const OrdenProvider = ({children}) => {
    const [ordenId, setOrdenId] = useState("");
    const [orden, setOrden] = useState(null);

    const placeOrder = (ordenId) => {
        return setOrdenId(ordenId)
    }

    return(
        <OrdenContext.Provider value={ {ordenId, placeOrder, orden, setOrden} }>
            {children}
        </OrdenContext.Provider>
    )
}