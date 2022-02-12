import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './pages/Products/index';
import Cart from './pages/Cart';
import { Products, SignUp } from './pages';

import { CartProvider } from './contexts/CartContext';

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/sign-up' element={<SignUp />}></Route>
          {/* <Route path="/sign-in" element={<Sign-in />}></Route>
            <Route path="/sign-up" element={<Sign-up />}></Route>
            <Route path="/home" element={<Sign-up />}></Route>
            <Route path="/services" element={<Services />}></Route>
            
            <Route path="/checkout" element={<Checkout />}></Route> */}
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
