import { Link } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout/AuthLayout";
import "./SenhaRedefinida.css";
import Banner from "../../assets/nome_Krooq_verde.png";
import IconOk from "../../assets/icon_ok.png";

function SenhaRedefinida() {
  return (
    <AuthLayout>
      <div className="senhaRedefinida-container">
        <img
          src={Banner}
          alt="Krooq"
          className="senhaRedefinida-logo"
        />

        <div className="senhaRedefinida-icon-box">
          <img
            src={IconOk}
            alt="Senha redefinida com sucesso"
            className="senhaRedefinida-icon"
          />
        </div>

        <h2>Senha redefinida</h2>

        <p className="senhaRedefinida-subtitle">
          Sua senha foi redefinida com sucesso. <br />
          Clique abaixo para fazer login.
        </p>

        <Link to="/escolha-login" className="btn-continuar">
          Continuar
        </Link>

        <Link to="/escolha-login" className="back-login">
          Voltar para o login
        </Link>
      </div>
    </AuthLayout>
  );
}

export default SenhaRedefinida;