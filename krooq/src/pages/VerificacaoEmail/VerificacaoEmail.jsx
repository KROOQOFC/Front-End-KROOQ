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

        <button type="button" className="verificacaoEmail-button">
          Abrir aplicativo de e-mail
        </button>

        <p className="verificacaoEmail-resend">
          Não recebeu o e-mail?{" "}
          <a href="/verificacao-email">Clique para reenviar</a>
        </p>

        <a href="/login" className="verificacaoEmail-back">
          Voltar para o login
        </a>
      </div>
    </AuthLayout>
  );
}

export default VerificacaoEmail;