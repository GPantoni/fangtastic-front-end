import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    function addToCart(id, cartList, quantity = 1) {
        if(cartList.length > 0) {

            if(!cartList.find(item => item.id === id)) {
                cartList.push({id: id, quantity })
                return;
            }

            cartList.map(cartItem => {
                if(id === cartItem.id) {
                    cartItem = Object.assign(cartItem, {quantity: cartItem.quantity + quantity})
                    return;       
                
            }})
        
        } else {
            cartList.push({id: id, quantity})
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