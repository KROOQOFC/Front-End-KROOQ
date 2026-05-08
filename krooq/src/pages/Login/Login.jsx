import { useState } from "react";
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

  const [dadosLogin, setDadosLogin] = useState({
    email: "",
    senha: "",
  });

  const [mensagensErro, setMensagensErro] = useState({});

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
                <span>!</span>
                <p>{mensagensErro.email}</p>
              </div>
            )}
          </div>

          <div className="login-campo">
            <label>Senha</label>
            <input
              type="password"
              name="senha"
              placeholder="Digite sua senha"
              value={dadosLogin.senha}
              onChange={atualizarCampoDoLogin}
              className={mensagensErro.senha ? "input-com-erro" : ""}
            />

            {mensagensErro.senha && (
              <div className="caixa-mensagem-erro">
                <span>!</span>
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
          Ainda não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
        </p>
      </div>
    </AuthLayout>
  );
}

export default Login;