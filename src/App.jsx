import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { CartProvider } from "./context/CartContext/CartProvider";
import { Cart } from "./components/Cart/Cart";
import "./App.css";
import { MainLayout } from "./layouts/MainLayout";
import {AdminLayout} from "./layouts/AdminLayout";
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer/ProductFormContainer";
import { Login } from "./components/Login/Login";
import { RutaProtegida } from "./components/RutaProtegida/RutaProtegida";

function App() {
  return (
      <BrowserRouter>
        <CartProvider>
          <div className="App-container">
            <main className="App-main">
              <Routes>
                <Route element ={<MainLayout />}>
                  <Route path="/" element={<ItemListContainer titulo={"Bienvenidos"} />} />                
                  <Route path="/category/:category" element={<ItemListContainer />} />
                  <Route path="/detail/:id" element={<ItemDetailContainer />} />
                  <Route path="/carrito" element={<Cart />} />
                </Route>
                  <Route path="/admin" element ={<AdminLayout />}>
                    <Route index element ={<Login />} />
                    <Route path="alta-productos" element ={
                      <RutaProtegida>
                        <ProductFormContainer />
                      </RutaProtegida>
                    }
                    />
                  </Route>
                  {/* <Route path="/admin" element={<ProductFormContainer />} /> */}
              </Routes>
            </main>
            <Footer />
          </div>
        </CartProvider>
      </BrowserRouter>
  );
}


export default App;
