import { useState } from "react";
import "./Navegation.css";
import logoTipo from "../../assets/logoTipo.png";
import { Link, useNavigate } from "react-router-dom";

function Navegation() {
  const [menuAberto, setMenuAberto] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="header">

      <nav
        className="conteiner"
        onClick={() => setMenuAberto(!menuAberto)}
      >

        <img
          src={logoTipo}
          alt="Logo KROOQ"
          className="logo"
        />

        <ul className={menuAberto ? "menu ativo" : "menu"}>

          <li><Link to="/">HOME</Link></li>
          <li><Link to="/projetos">SERVIÇOS</Link></li>
          <li><Link to="/profissionais">PROFISSIONAIS</Link></li>
          <li><Link to="/krooqia">KROOQ IA</Link></li>

          <li className="btn-area">
            <button
              type="button"
              className="btn"
              onClick={(e) => {
                e.stopPropagation();
                navigate("/escolha-login");}}>ENTRAR</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navegation;