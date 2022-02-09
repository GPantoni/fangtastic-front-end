import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products/index";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<Products />}></Route>
        {/* <Route path="/sign-in" element={<Sign-in />}></Route>
            <Route path="/sign-up" element={<Sign-up />}></Route>
            <Route path="/home" element={<Sign-up />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}
