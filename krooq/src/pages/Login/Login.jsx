import AuthLayout from "../../components/AuthLayout/AuthLayout";
import "./Login.css";

function Login({ tipoUsuario }) {
  return (
    <AuthLayout>
      <div className="login-container">
        <h1>Login {tipoUsuario}</h1>
        <p>Olá, bem-vindo 👋</p>

        <button className="google-btn">
          Entrar com Google
        </button>

        <div className="divider">
          <span>ou entre com seu e-mail</span>
        </div>

        <form>
          <label>Email</label>
          <input type="email" placeholder="Digite seu e-mail" />

          <label>Senha</label>
          <input type="password" placeholder="Digite sua senha" />

          <a href="#" className="forgot">
            Esqueceu a senha?
          </a>

          <button className="login-btn">Login</button>
        </form>

        <p className="register">
          Ainda não tem uma conta? <a href="#">Cadastre-se</a>
        </p>
      </div>
    </AuthLayout>
  );
}

export default Login;