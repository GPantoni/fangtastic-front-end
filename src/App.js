import AuthContext from "./contexts/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Products, SignUp, SignIn, Home, Cart, Product, Checkout, AddFormOfPayment } from "./pages";
import { useState } from "react";
import { CartProvider } from "./contexts/CartContext";

export default function App() {
  const tokenOnLocalStorage = localStorage.getItem("token");

  const [token, setToken] = useState(tokenOnLocalStorage);

  function setAndPersistToken(token) {
    setToken(token);
    localStorage.setItem("token", token);
  }

  return (
    <AuthContext.Provider value={{ token, setToken, setAndPersistToken }}>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/sign-up" element={<SignUp />}></Route>
            <Route path="/sign-in" element={<SignIn />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/product/:idProduct" element={<Product />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path='/checkout' element={<Checkout />}></Route>
            <Route path='/add-form-of-payment/:form' element={<AddFormOfPayment />}></Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthContext.Provider>
  );
}
