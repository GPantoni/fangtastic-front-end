import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    function addToCart(id, cartList) {
        if(cartList.length > 0) {
            cartList.map(cartItem => {
                if(id === cartItem.id) {
                    cartItem = Object.assign(cartItem, {quantity: cartItem.quantity + 1})
                    return;
                }
                cartList.push({id: id, quantity: 1})
            })
        } else {
            cartList.push({id: id, quantity: 1})
        }

        localStorage.setItem('cart', JSON.stringify(cartList))        

    }

    return(
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;