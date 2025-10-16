import { ItemList } from "../ItemList/ItemList";
import { useEffect, useState } from "react";
export const ItemListContainer = ({titulo}) => {
  const [products, setProducts] = useState([]);
    
  useEffect(() => {
    fetch('/data/products.json')
    .then((res) => {
      if(!res.ok){
        throw new Error('Error al cargar los productos');
      }
      return res.json();
    })
    .then(data => {
      setProducts(data);
    })
    .catch(err => {
      console.log(err);
    });
  }, []);
    
  return (  
    <section>
      <h2>{titulo}</h2>
      <ItemList lista={products} />
    </section>
  );
};
