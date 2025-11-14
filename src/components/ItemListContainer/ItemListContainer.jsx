import { ItemList } from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/products";
import "./ItemListContainer.css";

export const ItemListContainer = ({titulo}) => {
  const [products, setProducts] = useState([]);
  const {category} = useParams();

  useEffect(() => {
    getProducts(category)
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, [category]);    
    
  return (  
    <section>
      <h2>{titulo}</h2>
      <ItemList  className="categoria" lista={products} />
    </section>
  );
};
