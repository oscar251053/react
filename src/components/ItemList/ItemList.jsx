import { Item } from "../Item/Item";
import { Link } from "react-router-dom";
import "./ItemList.css";

export const ItemList = ({lista}) => {
    return(
        <div className="item-list">
            {lista.length ? (
                lista.map((prod) =>(
                    <Link to={`/detail/${prod.id}`} key={prod.id}> 
                        <Item {...prod}/>
                    </Link>
                ))
            ) : (
                <p>No hay productos</p>
            )}
        </div>
    );
};