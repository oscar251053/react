import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import { Item } from "../Item/Item";
import "./Cart.css"

export const Cart = () => {
    const { cart, deleteItem, clearCart, total, checkout } = useCartContext();
    return (
        <section className="item-list-container">
            <h2>Carrito de Compras</h2>

            {cart.length ? (
                <div className="cart-items">
                    {cart.map((prod) => (
                        <Item key={prod.id} {...prod}>
                            <div className="cart-item">
                                <span className="item-quantity">Cantidad: {prod.quantity}</span>
                                <button className="btn1" onClick={() => deleteItem(prod.id)}>
                                Eliminar
                                </button>
                            </div>
                        </Item>
                    ))}
                </div>
            ) : (
                <p>El carrito está vacío</p>
            )}
            {cart.length ? (
                <div className="btn-container">
                    <div className="total-pagar">
                        <p>Total a pagar: ${total()}</p>
                    </div>
                    <div className="action-buttons">
                        <button className="btn2" onClick={checkout}>
                            Finalizar Compra
                        </button>
                        <button className="btn2" onClick={clearCart}>
                            Vaciar Carrito
                        </button>
                    </div>
                </div>
            ):(
                <Link to={"/"} className="btn">
                    Volver al Inicio
                </Link>
            )}
        </section>
    );
};