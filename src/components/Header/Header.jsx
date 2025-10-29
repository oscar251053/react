import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav";
export const Header = () => {
    return (
        <header>
            <Link className="logo-link"  to="/">Logo</Link>
            <Nav />
        </header>
    );
};
