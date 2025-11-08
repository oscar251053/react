import './ProductFormUI.css';


export const ProductFormUI = ({product, errors, loading, onSubmit, onChange, onFileChange}) => {

    return (
        <section>
            <form className="product-form" onSubmit={onSubmit} noValidate>
                <h2>Agregar Producto</h2>
                <div>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={onChange}
                        required
                    />
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div>
                    <label>Precio:</label>
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={onChange}
                        required
                    />
                    {errors.price && <p className="error">{errors.price}</p>}
                </div>
                <div>
                    <label>Categoría:</label>
                    <input
                        type="text"
                        name="category"
                        value={product.category}
                        onChange={onChange}
                        required
                    />
                    {errors.category && <p className="error">{errors.category}</p>}
                </div>
                <div>
                    <label>Descripción:</label>
                    <textarea
                        type="text"
                        name="description"
                        value={product.description}
                        onChange={onChange}
                        required
                        ></textarea>
                    {errors.description && <p className="error">{errors.description}</p>}
                </div>
                <div>
                    <label>Imagen:</label>
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={(e) => onFileChange(e.target.files?.[0]??null)}
                        required
                    />
                    {errors.file && <p className="error">{errors.file}</p>}
                </div>
                <div>
                    <button className="btn" type="submit" disabled={loading}>
                        {loading ? 'Guardando...' : 'Guardar Producto'}
                    </button>
                </div>
            </form>
        </section>
    );
};