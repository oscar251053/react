import { useState, useRef } from 'react';
import { ProductFormUI } from '../ProductFormUI/ProductFormUI';
import { validateProducts } from '../../../utils/validateProducts';
import { uploadToImgbb} from '../../../services/uploadImage'
import { createProduct } from '../../../services/products';
import {useNotification} from '../../Context/NotificationContext/NotificationContext'
import "../ProductFormContainer/ProductFormContainer.css"

export const ProductFormContainer = () => {
    const { notify } = useNotification();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [file, setFile] = useState(null)
    const fileInputRef = useRef(null);
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
            const imageUrl = await uploadToImgbb(file);
            const productData = {...product, price: Number(product.price), imageUrl};        

        await createProduct(productData);
        notify('Producto creado con éxito');

        setProduct({name: '', price: '', category: '', description: ''});
        setFile(null);
        // resetear el input de archivo manualmente
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }

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
        fileInputRef={fileInputRef}
        loading={loading}
        errors={errors}
        onSubmit={handleSubmit}
    />;
};