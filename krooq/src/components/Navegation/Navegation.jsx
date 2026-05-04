import { useState } from "react";
import "./Navegation.css";
import logoTipo from "../../assets/logoTipo.png";
import { Link, useNavigate } from "react-router-dom";

function Navegation() {
  const [menuAberto, setMenuAberto] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="header">
      <nav className="conteiner">

        <img src={logoTipo} alt="Logo KROOQ" className="logo"
          onClick={() => setMenuAberto(!menuAberto)}/>

       
        <ul className={menuAberto ? "menu ativo" : "menu"}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projetos">Projetos</Link></li>
          <li><Link to="/servicos">Serviços</Link></li>
          <li><Link to="/profissionais">Profissionais</Link></li>
          <li><Link to="/jornada">Jornada</Link></li>
          {/*desktop*/}
          <li>
            <button
              type="button"
              className="btn desktop-btn"
              onClick={() => navigate("/escolha-login")}>Cadastrar</button>
          </li>
        </ul>


        {/* mobile*/}
        <Link to="/escolha-login" className="btn mobile-btn">
          Cadastrar
        </Link>

      </nav>
    </header>
  );
}

export default Navegation;