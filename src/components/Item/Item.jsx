import "./Item.css"
import { Link } from "react-router-dom";
export const Item = ({name, description, price, imageUrl, children}) => {
return (
        <article>
            <div className="product-item">
                <img src={imageUrl} alt={name} />
                <h2 className="product-title">{name}</h2>
                <p>Descripción: {description}</p>
                <p>Precio: ${price}</p>
            </div>
            {children}
        </article>
)
}