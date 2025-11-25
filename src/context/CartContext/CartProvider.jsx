import { useState } from "react";
import { CartContext } from "./CartContext";
import { useNotification } from "../../components/Context/NotificationContext/NotificationContext";


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const { notify, confirm } = useNotification();
    const exists = (id) => {
        const exist = cart.some((p) => p.id === id);
        return exist;
    };

    const addItem = (item) => {
        if (exists(item.id)) {
            const updatedCart = cart.map((prod) => {
                if (prod.id === item.id) {
                    return { ...prod, quantity: prod.quantity + item.quantity };
                }else {
                    return prod;
                }
            });

            setCart(updatedCart);
            notify("El producto ya fue agregado al carrito", "info");
        }else {
            setCart([...cart, item]);
            notify(`${item.name} agregado al carrito`, "success");
        }        
    };

    const deleteItem = (id) => {
        const filtered = cart.filter((p) => p.id !== id);
        setCart(filtered);
        notify("El producto fue eliminado del carrito", "error");
    };

    const clearCart = () => {
        setCart([]);
        notify("El carrito fue vaciado", "error");
    };

    const getTotalItems = () => {
        const totalItems = cart.reduce((acc, p) => acc + p.quantity, 0);
        return totalItems;
    };

    const total = () => {
        const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);
        return Math.round(total * 100) / 100;
    };

    const checkout = async () => {
        const ok = await confirm ("¿Desea finalizar la compra?");
        if (ok) {
            clearCart();
            notify("Gracias por su compra", "success");
            
        }
    }

    return (
        <CartContext.Provider value={{ cart, addItem, clearCart, getTotalItems, deleteItem, total, checkout }}>
            {children}
        </CartContext.Provider>
        );
    };