import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout/AuthLayout";
import "./EsqueceuSenha.css";
import Banner from "../../assets/nome_Krooq_verde.png";
import IconKey from "../../assets/icon_chave.png";

function EsqueceuSenha() {
  const navigate = useNavigate();

  const [emailRecuperacao, setEmailRecuperacao] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");

  function atualizarEmailRecuperacao(evento) {
    setEmailRecuperacao(evento.target.value);
  }

  function verificarEmailRecuperacao() {
    if (!emailRecuperacao.trim()) {
      return "Informe seu e-mail para continuar.";
    }

    if (!emailRecuperacao.includes("@")) {
      return "Digite um e-mail válido contendo @.";
    }

    return "";
  }

  function enviarInstrucaoDeSenha(evento) {
    evento.preventDefault();

    const erroEncontrado = verificarEmailRecuperacao();

    if (erroEncontrado) {
      setMensagemErro(erroEncontrado);
      return;
    }

    setMensagemErro("");

    console.log("Enviando instruções para:", emailRecuperacao);

    navigate("/verificacao-email");
  }

  return (
    <AuthLayout>
      <div className="esqueceuSenha-container">
        <img src={Banner} alt="Krooq" className="esqueceuSenha-logo" />

        <div className="esqueceuSenha-icon-box">
          <img src={IconKey} alt="Ícone chave" className="esqueceuSenha-icon" />
        </div>

        <h2>Esqueceu a senha?</h2>

        <p className="esqueceuSenha-subtitle">
          Não se preocupe, enviaremos instruções de redefinição.
        </p>

        <form className="esqueceuSenha-form" onSubmit={enviarInstrucaoDeSenha}>
          <div className="esqueceuSenha-campo">
            <label>E-mail</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={emailRecuperacao}
              onChange={atualizarEmailRecuperacao}
              className={mensagemErro ? "input-com-erro" : ""}
            />

            {mensagemErro && (
              <div className="caixa-mensagem-erro">
                <span>!</span>
                <p>{mensagemErro}</p>
              </div>
            )}
          </div>

          <button type="submit" className="btn-forgot">
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

export default EsqueceuSenha;