import './Header.css';
import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav";

export const Header = () => {
    return (
        <header>
            <Link className="logo" to="/">
                <a href="/" > 
                    <img src="/carrito.png" className="logo-link" alt="Mi logo" /> {/* ⬅️ CAMBIO AQUÍ */}
                </a>
            </Link>
            <Nav />
        </header>
    );
};
