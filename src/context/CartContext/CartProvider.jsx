import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    /* const exists = (id) => {
        const exist = cart.some((p) => p.id === id);
        return exist;
    }; */

    const addItem = (item) => {
        /* alert("El producto ya fue agregado al carrito");
        if (exists(item.id)) {
            return;
        } */

        setCart([...cart, item]);
        alert(`${item.name} agregado al carrito`);
    };

    const clearCart = () => {
        setCart([]);
    };
    
    const getTotalItems = () => cart.length;
    // const getTotalItems = () => {
    //     if (cart.length){
    //         return cart.length;
    //     }
    //
    

    //const values = { cart, addItem, clearCart, getTotalItems };
    return (
        <CartContext.Provider value={{ cart, addItem, clearCart, getTotalItems }}>
            {children}
        </CartContext.Provider>
        );
    };