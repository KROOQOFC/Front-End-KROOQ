import { Link, useParams } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout/AuthLayout";
import "./Login.css";

function Login() {
  const { tipoUsuario } = useParams();

  const nomesUsuarios = {
    arquiteto: "Arquiteto",
    cliente: "Cliente",
    fornecedor: "Fornecedor",
  };

  const tipoFormatado = nomesUsuarios[tipoUsuario] || "Usuário";

  function handleLogin(e) {
    e.preventDefault();

    console.log("Tentando fazer login como:", tipoFormatado);
  }

  return (
    <AuthLayout>
      <div className="login-container">
        <h1>Login {tipoFormatado}</h1>

        <p>Olá, bem-vindo 👋</p>

        <button type="button" className="google-btn">
          Entrar com Google
        </button>

        <div className="divider">
          <span>ou entre com seu e-mail</span>
        </div>

        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input type="email" placeholder="Digite seu e-mail" />

          <label>Senha</label>
          <input type="password" placeholder="Digite sua senha" />

          <Link to="/esqueceu-senha" className="forgot">
            Esqueceu a senha?
          </Link>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="register">
          Ainda não tem uma conta?{" "}
          <Link to="/cadastro">Cadastre-se</Link>
        </p>
      </div>
    </AuthLayout>
  );
}

export default Login;