import { useCartContext } from '../../context/CartContext/useCartContext';
import { Count } from '../Count/Count';
import { Item } from '../Item/Item';


export const ItemDetail = ({ detail }) => {
    const { addItem } = useCartContext();

    const handleAdd = (quantity) => {
        addItem({...detail, quantity});
    }

    return (
        <Item {...detail}>

            <Count btnText={"Agregar al carrito"} onConfirm={handleAdd}/>
        </Item>
    );
};