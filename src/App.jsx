import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { CartProvider } from "./context/CartContext/CartProvider";
import { Cart } from "./components/Cart/Cart";
import "./App.css";
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer/ProductFormContainer";

function App() {
  return (
      <BrowserRouter>
        <CartProvider>
          <div className="App-container">
            <Header />
            <main className="App-main">
              <Routes>
                <Route
                  path="/"
                  element={<ItemListContainer titulo={"Bienvenidos"} />}
                />
                <Route
                  path="/category/:category" element={<ItemListContainer />}
                />
                <Route path="/detail/:id" element={<ItemDetailContainer />} />
                <Route path="/carrito" element={<Cart />} />
                <Route path="/admin" element={<ProductFormContainer />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </CartProvider>
      </BrowserRouter>
  );
}


export default App;
