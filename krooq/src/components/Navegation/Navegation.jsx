import { useEffect, useState } from "react";
import "./Navegation.css";
import logoTipo from "../../assets/logoTipo.webp";
import { Link, useNavigate } from "react-router-dom";
import { pegarUsuarioLogado, sairDaConta } from "../../services/authService";

function Navegation() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const usuario = pegarUsuarioLogado();
    setUsuarioLogado(usuario);
  }, []);

  function pegarInicialUsuario() {
    if (!usuarioLogado?.nome) {
      return "U";
    }

    return usuarioLogado.nome.charAt(0).toUpperCase();
  }

  function fazerLogout(evento) {
    evento.stopPropagation();

    sairDaConta();
    setUsuarioLogado(null);
    setMenuAberto(false);

    window.location.href = "/";
  }

  function irParaLogin(evento) {
    evento.stopPropagation();
    navigate("/escolha-login");
  }

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
          <li><Link to="/Servicos">SERVIÇOS</Link></li>
          <li><Link to="/Profissionais">PROFISSIONAIS</Link></li>
          <li><Link to="/ia">KROOQ IA</Link></li>

          <li className="btn-area">
            {usuarioLogado ? (
              <div className="area-logada">
                <button
                  type="button"
                  className="icone-login"
                  onClick={(evento) => {
                    evento.stopPropagation();
                    navigate("/");
                  }}
                  title={usuarioLogado.nome || "Usuário"}
                >
                  {pegarInicialUsuario()}
                </button>

                <button
                  type="button"
                  className="btn-sair"
                  onClick={fazerLogout}
                >
                  SAIR
                </button>
              </div>
            ) : (
              <button
                type="button"
                className="btn"
                onClick={irParaLogin}
              >
                ENTRAR
              </button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navegation;