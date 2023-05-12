import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CarritoProvider } from "./context/CarritoContext";
import { OrdenProvider } from "./context/OrdenContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import OrdenSummary from "./components/OrdenSummary/OrdenSummary";


function App() {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
        <OrdenProvider>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting='Tienda Online de Productos Asiáticos e Importados'/>}   />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer greeting='Tienda Online de Productos Asiáticos e Importados'/>} />
          <Route path="/item/:idItem" element={<ItemDetailContainer/>} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/orden" element={<OrdenSummary/>}/>
          <Route path="*" element={<h2>Sitio en Construcción</h2>}/>
        </Routes>
        </OrdenProvider>
        </CarritoProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

