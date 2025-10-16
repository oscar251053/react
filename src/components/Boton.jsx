export const Boton = ({ texto, color}) => {
    const estilos = {
        backgroundColor: color,
        color: 'white',
    };
    const saludar = () => {
        alert('Hola, has hecho clic en el botón!');
    };
    return(<button style={estilos} onClick={saludar}>
        {texto}
    </button>
    );
};