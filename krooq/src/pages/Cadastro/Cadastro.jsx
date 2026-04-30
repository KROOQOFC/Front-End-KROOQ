import AuthLayout from "../../components/AuthLayout/AuthLayout";
import "./Cadastro.css";
import Banner from "../../assets/nome_Krooq_verde.png";

function Cadastro() {
  return (
    <AuthLayout>
      <div className="cadastro-container">
        <img src={Banner} alt="Krooq" className="cadastro-logo" />

        <h2>Cadastre-se</h2>

        <p className="cadastro-subtitle">
          Bem-vindo de volta! Por favor, insira seus dados.
        </p>

        <form className="cadastro-form">
          <div className="form-group">
            <label>Nome</label>
            <input type="text" placeholder="Digite seu nome" />
          </div>

          <div className="form-group">
            <label>Sobrenome</label>
            <input type="text" placeholder="Digite seu sobrenome" />
          </div>

          <div className="form-group">
            <label>Senha</label>
            <input type="password" placeholder="Digite sua senha" />
            <span>Deve ter pelo menos 8 caracteres.</span>
          </div>

          <div className="form-group">
            <label>Confirme sua senha</label>
            <input type="password" placeholder="Confirme sua senha" />
            <span>Deve ter pelo menos 8 caracteres.</span>
          </div>

          <label className="termos">
            <input type="checkbox" />
            <span>
              Aceito os <a href="#">Termos de Uso</a> e a{" "}
              <a href="#">Política de Privacidade</a>.
            </span>
          </label>

          <button type="submit" className="btn-cadastrar">
            Cadastrar Agora
          </button>

          <button type="button" className="btn-google">
            <span>G</span> Entrar com o Google
          </button>

          <p className="login-link">
            Já tem uma conta? <a href="#">Entrar</a>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
}

export default Cadastro;