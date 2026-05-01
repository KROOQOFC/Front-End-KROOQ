import { Link } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout/AuthLayout";
import "./Cadastro.css";
import Banner from "../../assets/nome_Krooq_verde.png";

function Cadastro() {
  function handleCadastro(e) {
    e.preventDefault();

    // Futuramente aqui entra a lógica de cadastro
    console.log("Tentando cadastrar usuário");
  }

  return (
    <AuthLayout>
      <div className="cadastro-container">
        <img src={Banner} alt="Krooq" className="cadastro-logo" />

        <h2>Cadastre-se</h2>

        <p className="cadastro-subtitle">
          Bem-vindo de volta! Por favor, insira seus dados.
        </p>

        <form className="cadastro-form" onSubmit={handleCadastro}>
          <div className="cadastro-campo">
            <label>Nome</label>
            <input type="text" placeholder="Digite seu nome" />
          </div>

          <div className="cadastro-campo">
            <label>Sobrenome</label>
            <input type="text" placeholder="Digite seu sobrenome" />
          </div>

          <div className="cadastro-campo">
            <label>Senha</label>
            <input type="password" placeholder="Crie uma senha" />
            <small>Deve ter pelo menos 8 caracteres.</small>
          </div>

          <div className="cadastro-campo">
            <label>Confirme senha</label>
            <input type="password" placeholder="Digite sua senha" />
            <small>Deve ter pelo menos 8 caracteres.</small>
          </div>

          <label className="cadastro-termos">
            <input type="checkbox" />
            <span>
              Aceitar termos e condições política de privacidade
            </span>
          </label>

          <button type="submit" className="btn-cadastrar">
            Cadastrar Agora
          </button>

          <button type="button" className="btn-google">
            <span>G</span>
            Entrar com o Google
          </button>
        </form>

        <p className="cadastro-login">
          Já tem uma conta?{" "}
          <Link to="/escolha-login">Entrar</Link>
        </p>
      </div>
    </AuthLayout>
  );
}

export default Cadastro;