import "./style.css";

export default function Header({}) {
  return (
    <header className="header-main">
      <a href="#" className="header-icon">Manga Library</a>
      <nav className="header-items">
        <a href="#" className="header-buttons">Entrar</a>
      </nav>
    </header>
  );
}