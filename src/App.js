import AuthContext from "./contexts/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Products, SignUp, SignIn, Home } from "./pages";
import { useState } from "react";

export default function App() {
  const tokenOnLocalStorage = localStorage.getItem("token");

  const [token, setToken] = useState(tokenOnLocalStorage);

  function setAndPersistToken(token) {
    setToken(token);
    localStorage.setItem("token", token);
  }

  return (
    <AuthContext.Provider value={{ token, setToken, setAndPersistToken }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/products" element={<Products />}></Route>
          {/* <Route path="/cart" element={""}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route> */}
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
