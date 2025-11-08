const base_URL = 'https://690a18411a446bb9cc215171.mockapi.io/products';

const createProduct = async (product) => {
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