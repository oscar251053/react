import { useCartContext } from '../../context/CartContext/useCartContext';
import { Item } from '../Item/Item';


export const ItemDetail = ({ detail }) => {
    const { addItem } = useCartContext();

    if (!detail || Object.keys(detail).length === 0) {
        return <p>Cargando detalle...</p>;
    }

    return (
        <Item {...detail}>
            <button onClick={() => addItem(detail)}>Enviar al carrito</button>
        </Item>
    );
};