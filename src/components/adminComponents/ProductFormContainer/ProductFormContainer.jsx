import { useState } from 'react';
import { ProductFormUI } from '../ProductFormUI/ProductFormUI';
import { validateProducts } from '../../../utils/validateProducts';
import {uploadToImgbb} from '../../../services/uploadImage'
//import { createProduct } from '../../../services/products';
import "../ProductFormContainer/ProductFormContainer.css"

export const ProductFormContainer = () => {
    const [loading, setLoading] = useState();
    const [errors, setErrors] = useState("");
    const [file, setFile] = useState(null)
    const [product, setProduct] = useState({
    name: '',
    price: "",
    category: '',
    description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({...product, [name]: value});
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setLoading(true);

        const newErrors = validateProducts({...product, file});
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setLoading(false);
            return;
        }

        try {
            const imageUrl = await uploadToImgbb();
            const productData = {...product, price: Number(product.price), imageUrl};        

        await createProduct(productData);
        alert('Producto creado con éxito');

        setProduct({name: '', price: 0, category: '', description: ''});
        setFile(null);

        } catch (error) {
            setErrors({general: error.message});
        }finally{
            setLoading(false);
        }
    };

    return <ProductFormUI
        product={product}
        onChange={handleChange}
        onFileChange={setFile}
        loading={loading}
        errors={errors}
        onSubmit={handleSubmit}
    />;
};