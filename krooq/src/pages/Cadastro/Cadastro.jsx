import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout/AuthLayout";
import "./Cadastro.css";
import Banner from "../../assets/nome_Krooq_verde.png";

function Cadastro() {
  const [dadosCadastro, setDadosCadastro] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    aceitouTermos: false,
  });

  const [mensagensErro, setMensagensErro] = useState({});

  function atualizarCampoDoFormulario(evento) {
    const { name, value, type, checked } = evento.target;

    setDadosCadastro({
      ...dadosCadastro,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function verificarCamposDoCadastro() {
    const errosEncontrados = {};

    if (!dadosCadastro.nome.trim()) {
      errosEncontrados.nome = "Informe seu nome para continuar.";
    }

    if (!dadosCadastro.email.trim()) {
      errosEncontrados.email = "Informe seu e-mail para continuar.";
    } else if (!dadosCadastro.email.includes("@")) {
      errosEncontrados.email = "Digite um e-mail válido contendo @.";
    }

    if (!dadosCadastro.senha) {
      errosEncontrados.senha = "Crie uma senha para continuar.";
    } else if (dadosCadastro.senha.length < 8) {
      errosEncontrados.senha = "A senha precisa ter pelo menos 8 caracteres.";
    }

    if (!dadosCadastro.confirmarSenha) {
      errosEncontrados.confirmarSenha = "Confirme sua senha para continuar.";
    } else if (dadosCadastro.confirmarSenha !== dadosCadastro.senha) {
      errosEncontrados.confirmarSenha = "As senhas precisam ser iguais.";
    }

    if (!dadosCadastro.aceitouTermos) {
      errosEncontrados.aceitouTermos =
        "Você precisa aceitar os termos e a política de privacidade.";
    }

    return errosEncontrados;
  }

  function cadastrarUsuario(evento) {
    evento.preventDefault();

    const erros = verificarCamposDoCadastro();

    if (Object.keys(erros).length > 0) {
      setMensagensErro(erros);
      return;
    }

    setMensagensErro({});

    console.log("Cadastro realizado com sucesso:", dadosCadastro);
  }

  return (
    <AuthLayout>
      <div className="cadastro-container">
        <img src={Banner} alt="Krooq" className="cadastro-logo" />

        <h2>Cadastre-se</h2>

        <p className="cadastro-subtitle">
          Bem-vindo de volta! Por favor, insira seus dados.
        </p>

        <form className="cadastro-form" onSubmit={cadastrarUsuario}>
          <div className="cadastro-campo">
            <label>Nome</label>
            <input
              type="text"
              name="nome"
              placeholder="Digite seu nome"
              value={dadosCadastro.nome}
              onChange={atualizarCampoDoFormulario}
              className={mensagensErro.nome ? "input-com-erro" : ""}
            />

            {mensagensErro.nome && (
              <div className="caixa-mensagem-erro">
                <span>!</span>
                <p>{mensagensErro.nome}</p>
              </div>
            )}
          </div>

          <div className="cadastro-campo">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Digite seu email"
              value={dadosCadastro.email}
              onChange={atualizarCampoDoFormulario}
              className={mensagensErro.email ? "input-com-erro" : ""}
            />

            {mensagensErro.email && (
              <div className="caixa-mensagem-erro">
                <span>!</span>
                <p>{mensagensErro.email}</p>
              </div>
            )}
          </div>

          <div className="cadastro-campo">
            <label>Senha</label>
            <input
              type="password"
              name="senha"
              placeholder="Crie uma senha"
              value={dadosCadastro.senha}
              onChange={atualizarCampoDoFormulario}
              className={mensagensErro.senha ? "input-com-erro" : ""}
            />

            {mensagensErro.senha ? (
              <div className="caixa-mensagem-erro">
                <span>!</span>
                <p>{mensagensErro.senha}</p>
              </div>
            ) : (
              <small>Deve ter pelo menos 8 caracteres.</small>
            )}
          </div>

          <div className="cadastro-campo">
            <label>Confirme senha</label>
            <input
              type="password"
              name="confirmarSenha"
              placeholder="Digite sua senha novamente"
              value={dadosCadastro.confirmarSenha}
              onChange={atualizarCampoDoFormulario}
              className={mensagensErro.confirmarSenha ? "input-com-erro" : ""}
            />

            {mensagensErro.confirmarSenha ? (
              <div className="caixa-mensagem-erro">
                <span>!</span>
                <p>{mensagensErro.confirmarSenha}</p>
              </div>
            ) : (
              <small>Digite a mesma senha informada acima.</small>
            )}
          </div>

          <label className="cadastro-termos">
            <input
              type="checkbox"
              name="aceitouTermos"
              checked={dadosCadastro.aceitouTermos}
              onChange={atualizarCampoDoFormulario}
            />
            <span>Aceitar termos e condições política de privacidade</span>
          </label>

          {mensagensErro.aceitouTermos && (
            <div className="caixa-mensagem-erro erro-termos">
              <span>!</span>
              <p>{mensagensErro.aceitouTermos}</p>
            </div>
          )}

          <button type="submit" className="btn-cadastrar">
            Cadastrar Agora
          </button>

          <button type="button" className="btn-google">
            <span>G</span>
            Entrar com o Google
          </button>
        </form>

        <p className="cadastro-login">
          Já tem uma conta? <Link to="/escolha-login">Entrar</Link>
        </p>
      </div>
    </AuthLayout>
  );
}

export default Cadastro;