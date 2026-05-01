import { Link } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout/AuthLayout";
import "./VerificacaoEmail.css";
import Banner from "../../assets/nome_Krooq_verde.png";
import IconEmail from "../../assets/Icon_e_mail.png";

function VerificacaoEmail() {
  return (
    <AuthLayout>
      <div className="verificacaoEmail-container">
        <img
          src={Banner}
          alt="Krooq"
          className="verificacaoEmail-logo"
        />

        <div className="verificacaoEmail-icon-box">
          <img
            src={IconEmail}
            alt="Ícone de e-mail"
            className="verificacaoEmail-icon"
          />
        </div>

        <h2>Verifique seu e-mail</h2>

        <p className="verificacaoEmail-subtitle">
          Abra o aplicativo de e-mail para verificar
        </p>

        <Link to="/nova-senha" className="verificacaoEmail-button">
          Abrir aplicativo de e-mail
        </Link>

        <p className="verificacaoEmail-resend">
          Não recebeu o e-mail?{" "}
          <Link to="/esqueceu-senha">Clique para reenviar</Link>
        </p>

        <Link to="/escolha-login" className="verificacaoEmail-back">
          Voltar para o login
        </Link>
      </div>
    </AuthLayout>
  );
}

export default VerificacaoEmail;