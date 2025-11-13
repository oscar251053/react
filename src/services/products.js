const base_URL = 'https://690a18411a446bb9cc215171.mockapi.io/products';

// función para obtener lista de productos (filtra por categoría si se pasa)
export const getProducts = async (category = null) => {
    const res = await fetch(base_URL);
    if (!res.ok) {
        throw new Error('Error al obtener los productos');
    }
    const data = await res.json();
    if (category) {
        return data.filter(p => String(p.category) === String(category));
    }
    return data;
};

// función para obtener un producto por id (opcional)
export const getProductById = async (id) => {
    const res = await fetch(`${base_URL}/${id}`);
    if (!res.ok) {
        throw new Error('Error al obtener el producto');
    }
    const result = await res.json();
    return result;
};

export const createProduct = async (product) => {
    const res = await fetch(base_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(product),
    });
    if (!res.ok) {
        throw new Error('Error creando el producto');
    }
    const result = await res.json();
    return result;
};