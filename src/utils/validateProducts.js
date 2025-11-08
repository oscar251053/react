export const validateProducts = (products, fileRequired = true) => {
    const errors = {};

    if (!products.name.trim()) {
        errors.name = "El nombre es requerido.";
    }

    if (!products.description.trim()) {
        errors.description = "La descripción es requerida.";
    }
    if (!products.price || products.price <= 0) {
        errors.price = "El precio debe ser un número positivo.";
    }
    if (!products.category.trim()) {
        errors.category = "La categoría es requerida.";
    }
    if (products.stock < 0) {
        errors.stock = "El stock no puede ser negativo.";
    }
    if (fileRequired && !products.file) {
        errors.file = "La imagen es requerida.";
    }
    return errors;
};
