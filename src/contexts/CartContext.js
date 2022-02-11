import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    function addToCart(id, cartList) {
        cartList.push(id)
        localStorage.setItem('cart', JSON.stringify(cartList))        

    }

    return(
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;