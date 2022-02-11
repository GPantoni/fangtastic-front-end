import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    function addToCart(id, cartList) {
        console.log(cartList)
        cartList.push(id)
        setCart(cartList);

        localStorage.setItem('cart', JSON.stringify(cart))        

    }

    return(
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;