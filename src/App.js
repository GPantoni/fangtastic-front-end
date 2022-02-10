import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Products, SignUp } from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/home" element={<Sign-up />}></Route> */}
        <Route path="/sign-up" element={<SignUp />}></Route>
        {/* <Route path="/sign-in" element={<SignIn />}></Route> */}
        <Route path="/products" element={<Products />}></Route>
        {/* <Route path="/cart" element={""}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}
