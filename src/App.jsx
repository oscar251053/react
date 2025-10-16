import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { CartProvider } from "./context/CartContext/CartProvider";

function App() {
  return (
      <BrowserRouter>
        <CartProvider>
          <div>
            <Header />
            <Routes>
              <Route
                path="/"
                element={<ItemListContainer titulo={"Bienvenidos"} />}
              />
              <Route path="/detail/:id" element={<ItemDetailContainer />} />
            </Routes>
            <Footer />
          </div>
        </CartProvider>
      </BrowserRouter>
  );
}


export default App;
