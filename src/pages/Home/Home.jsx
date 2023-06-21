import "./style.css";
import animeImage from "../../assets/png_assets/cute_anime.png"

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-emphasis-text">
        <p>Tenha um local para controlar sua rotina de Animes/Mangás!</p>
        <span>Cadastre-se agora mesmo, e comece a montar sua própria lista</span>
        <button>Cadastre Aqui!</button>
      </div>
      <img src={animeImage} alt="personagem de anime ilustrativo" />
    </div>
  );
}