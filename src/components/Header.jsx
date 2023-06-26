import { Link } from "react-router-dom";
import "./style.css";

export default function Header({}) {
  return (
    <header className="header-main">
      <Link to="/" className="header-icon">Manga Library</Link>
      <nav className="header-items">
        <Link to="/user" className="header-buttons">Entrar</Link>
      </nav>
    </header>
  );
}