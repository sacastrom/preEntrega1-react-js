import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting='Tienda Online de Productos Asiáticos e Importados'/>}   />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer greeting='Tienda Online de Productos Asiáticos e Importados'/>} />
          <Route path="/item/:idItem" element={<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

