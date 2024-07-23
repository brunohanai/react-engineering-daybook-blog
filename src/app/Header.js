import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="Header">
            <nav>
                <Link to="/" className="nav-item">Textos</Link>
                |
                <Link to="/about" className="nav-item">Sobre</Link>
            </nav>
        </header>
    )
}

export default Header;