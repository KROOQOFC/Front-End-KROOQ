import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout/AuthLayout";
import GoogleIcon from "../../assets/google.png";
import "./Login.css";

function Login() {
  const { tipoUsuario } = useParams();

  const nomesUsuarios = {
    profissional: "Profissional",
    cliente: "Cliente",
    fornecedor: "Fornecedor",
  };

  const tipoFormatado = nomesUsuarios[tipoUsuario] || "Usuário";

  const [dadosLogin, setDadosLogin] = useState({
    email: "",
    senha: "",
  });

  const [mensagensErro, setMensagensErro] = useState({});
  const [mostrarSenha, setMostrarSenha] = useState(false);

  function atualizarCampoDoLogin(evento) {
    const { name, value } = evento.target;

    setDadosLogin({
      ...dadosLogin,
      [name]: value,
    });
  }

  function verificarCamposDoLogin() {
    const errosEncontrados = {};

    if (!dadosLogin.email.trim()) {
      errosEncontrados.email = "Informe seu e-mail para continuar.";
    } else if (!dadosLogin.email.includes("@")) {
      errosEncontrados.email = "Digite um e-mail válido contendo @.";
    }

    if (!dadosLogin.senha) {
      errosEncontrados.senha = "Informe sua senha para continuar.";
    }

    return errosEncontrados;
  }

  function entrarNaConta(evento) {
    evento.preventDefault();

    const erros = verificarCamposDoLogin();

    if (Object.keys(erros).length > 0) {
      setMensagensErro(erros);
      return;
    }

    setMensagensErro({});

    /*
      Aqui depois você chama a API.
      Evite console.log com dados sensíveis, principalmente senha.
    */
  }

  return (
    <AuthLayout>
      <div className="login-container">
        <h1>Login {tipoFormatado}</h1>

        <p className="login-welcome">Olá, bem-vindo de volta 👋</p>

        <button type="button" className="google-btn">
          <img src={GoogleIcon} alt="Google" />
          <span>Entrar com Google</span>
        </button>

        <div className="divider">
          <span className="divider-line"></span>
          <p className="divider-text">ou entre com seu e-mail</p>
          <span className="divider-line"></span>
        </div>

        <form className="login-form" onSubmit={entrarNaConta}>
          <div className="login-campo">
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
              value={dadosLogin.email}
              onChange={atualizarCampoDoLogin}
              className={mensagensErro.email ? "input-com-erro" : ""}
            />

            {mensagensErro.email && (
              <div className="caixa-mensagem-erro">
                <strong>!</strong>
                <p>{mensagensErro.email}</p>
              </div>
            )}
          </div>

          <div className="login-campo">
            <label>Senha</label>

            <div
              className={
                mensagensErro.senha
                  ? "senha-wrapper senha-wrapper-erro"
                  : "senha-wrapper"
              }
            >
              <input
                type={mostrarSenha ? "text" : "password"}
                name="senha"
                placeholder="Digite sua senha"
                value={dadosLogin.senha}
                onChange={atualizarCampoDoLogin}
              />

              <button
                type="button"
                className="senha-eye"
                onClick={() => setMostrarSenha(!mostrarSenha)}
                aria-label={mostrarSenha ? "Ocultar senha" : "Mostrar senha"}
              >
                {mostrarSenha ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3 3L21 21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M10.58 10.58C10.21 10.95 10 11.45 10 12C10 13.1 10.9 14 12 14C12.55 14 13.05 13.79 13.42 13.42"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M9.88 5.09C10.56 5.03 11.26 5 12 5C16.5 5 20.27 7.61 22 12C21.5 13.27 20.77 14.37 19.88 15.26"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M6.61 6.61C4.61 7.8 3.02 9.66 2 12C3.73 16.39 7.5 19 12 19C13.45 19 14.8 18.73 16.01 18.24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M2 12C3.73 7.61 7.5 5 12 5C16.5 5 20.27 7.61 22 12C20.27 16.39 16.5 19 12 19C7.5 19 3.73 16.39 2 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>

            {mensagensErro.senha && (
              <div className="caixa-mensagem-erro">
                <strong>!</strong>
                <p>{mensagensErro.senha}</p>
              </div>
            )}
          </div>

          <Link to="/esqueceu-senha" className="forgot">
            Esqueceu a senha?
          </Link>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="register">
          Ainda não tem uma conta?{" "}
          <Link to={`/cadastro/${tipoUsuario}`}>Cadastre-se</Link>
        </p>
      </div>
    </AuthLayout>
  );
}

export default Login;