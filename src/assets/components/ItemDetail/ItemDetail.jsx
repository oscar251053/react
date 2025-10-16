import { Item } from '../Item/Item';
import { useCartContext } from '../../../../src/context/CartContext/CartContext';

export const ItemDetail = ({ detail }) => {
    const { addItem } = useCartContext();

    // Validación: si detail está vacío, muestra "Cargando..."
    if (!detail || Object.keys(detail).length === 0) {
        return <p>Cargando detalle...</p>;
    }

    return (
        <Item {...detail}>
            <button onClick={() => addItem(detail)}>Enviar al carrito</button>
        </Item>
    );
};