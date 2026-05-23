import AuthLayout from "../../components/AuthLayout/AuthLayout";
import "./EscolhaLogin.css";
import Banner from "../../assets/nome_Krooq_verde.png";
import { Link } from "react-router-dom";

function EscolhaLogin() {
  return (
    <AuthLayout>
      <div className="escolhaLogin-container">
        <img
          src={Banner}
          alt="Krooq"
          className="escolhaLogin-logo"
        />

        <p className="escolhaLogin-welcome">
          Olá, bem-vindo 👋
        </p>

        <h2>
          Para começarmos, identifique seu perfil de acesso
        </h2>

        <div className="escolhaLogin-divider">
          <span></span>
          <p>Escolha uma opção abaixo</p>
          <span></span>
        </div>

        <div className="escolhaLogin-options">
          <Link to="/login/arquiteto" className="perfil-btn perfil-btn-green">
            Sou Profissional
          </Link>

          <Link to="/login/cliente" className="perfil-btn perfil-btn-gold">
            Sou Cliente
          </Link>

          <Link to="/login/fornecedor" className="perfil-btn perfil-btn-green">
            Sou Fornecedor
          </Link>
        </div>

        <p className="escolhaLogin-footer">
          Acesse sua conta de acordo com seu tipo de usuário.
        </p>
      </div>
    </AuthLayout>
  );
}

export default EscolhaLogin;