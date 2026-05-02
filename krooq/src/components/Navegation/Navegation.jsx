import { useState } from "react";
import "./Navegation.css";
import logoTipo from "../../assets/logoTipo.png";

function Navegation() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="header">
      <nav className="conteiner">

        <img
          src={logoTipo}
          alt="Logo KROOQ"
          className="logo"
          onClick={() => setMenuAberto(!menuAberto)}
        />

        <ul className={menuAberto ? "menu ativo" : "menu"}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Projetos</a></li>
          <li><a href="#">Serviços</a></li>
          <li><a href="#">Profissionais</a></li>
          <li><a href="#">Jornada</a></li>
          <li><button type="button" className="btn mobile-btn">Cadastrar</button></li>
        </ul>

        <button type="button" className="btn desktop-btn">Cadastrar</button>

      </nav>
    </header>
  );
}

export default Navegation;