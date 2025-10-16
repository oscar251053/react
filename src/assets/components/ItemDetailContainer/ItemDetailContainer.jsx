import {useState, useEffect} from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
export const ItemDetailContainer = () => {
    console.log("ItemDetailContainer montado");

    const [detail, setDetail] = useState({});
    const { id } = useParams();
    useEffect(() => {
        fetch("/data/products.json")
            .then((res) => {
                if (!res.ok) {
            throw new Error("No se encontro el producto");
        }
        return res.json();
        })
        .then((data) => {
            const found = data.find((p) => String(p.id) === id);
            console.log("Producto encontrado:", found); // <-- Agrega esto
            if (found) {
                setDetail(found);
            } else {
            throw new Error("Producto no encontrado");
            }
        })
        .catch(err => {
            console.log(err);
        });
    }, [id]);
return (
    <main>
        {Object.keys(detail).length ? (
            <ItemDetail detail={detail} />
        ) : (
            <p>Cargando...</p>
        )}
    </main>
    );
};
