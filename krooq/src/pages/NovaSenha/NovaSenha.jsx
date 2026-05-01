import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout/AuthLayout";
import "./NovaSenha.css";
import Banner from "../../assets/nome_Krooq_verde.png";
import IconKey from "../../assets/icon_chave.png";

function NovaSenha() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    navigate("/senha-redefinida");
  }

  return (
    <AuthLayout>
      <div className="novaSenha-container">
        <img src={Banner} alt="Krooq" className="novaSenha-logo" />

        <div className="novaSenha-icon-box">
          <img src={IconKey} alt="Ícone chave" className="novaSenha-icon" />
        </div>

        <h2>Definir nova senha</h2>

        <p className="novaSenha-subtitle">
          Sua nova senha deve ser diferente das senhas usadas anteriormente.
        </p>

        <form className="novaSenha-form" onSubmit={handleSubmit}>
          <div className="novaSenha-campo">
            <label>Senha</label>
            <input
              type="password"
              placeholder="Crie uma nova senha"
            />
          </div>

          <p className="novaSenha-info">
            Deve ter pelo menos 8 caracteres.
          </p>

          <div className="novaSenha-campo">
            <label>Confirme Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha novamente"
            />
          </div>

          <button type="submit" className="btn-reset">
            Redefinir senha
          </button>
        </form>

        <Link to="/escolha-login" className="back-login">
          Voltar para o login
        </Link>
      </div>
    </AuthLayout>
  );
}

export default NovaSenha;