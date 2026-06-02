import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout/AuthLayout";
import "./NovaSenha.css";
import Banner from "../../assets/nome_Krooq_verde.png";
import IconKey from "../../assets/Icon_chave.png";

function NovaSenha() {
  const navigate = useNavigate();

  const [dadosNovaSenha, setDadosNovaSenha] = useState({
    novaSenha: "",
    confirmarNovaSenha: "",
  });

  const [mensagensErro, setMensagensErro] = useState({});

  const [mostrarNovaSenha, setMostrarNovaSenha] = useState(false);
  const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);

  function atualizarCampoDaSenha(evento) {
    const { name, value } = evento.target;

    setDadosNovaSenha({
      ...dadosNovaSenha,
      [name]: value,
    });
  }

  function senhaEhValida(senha) {
    const temNoMinimo8Caracteres = senha.length >= 8;
    const temArroba = senha.includes("@");
    const temLetraMaiuscula = /[A-Z]/.test(senha);
    const temLetraMinuscula = /[a-z]/.test(senha);

    return (
      temNoMinimo8Caracteres &&
      temArroba &&
      temLetraMaiuscula &&
      temLetraMinuscula
    );
  }

  function impedirCopiarEColar(evento) {
    evento.preventDefault();
  }

  function verificarCamposDaNovaSenha() {
    const errosEncontrados = {};

    if (!dadosNovaSenha.novaSenha) {
      errosEncontrados.novaSenha = "Crie uma nova senha para continuar.";
    } else if (!senhaEhValida(dadosNovaSenha.novaSenha)) {
      errosEncontrados.novaSenha =
        "A senha precisa ter no mínimo 8 caracteres, conter @, letra maiúscula e letra minúscula.";
    }

    if (!dadosNovaSenha.confirmarNovaSenha) {
      errosEncontrados.confirmarNovaSenha =
        "Confirme sua nova senha para continuar.";
    } else if (dadosNovaSenha.confirmarNovaSenha !== dadosNovaSenha.novaSenha) {
      errosEncontrados.confirmarNovaSenha = "As senhas precisam ser iguais.";
    }

    return errosEncontrados;
  }

  function redefinirSenha(evento) {
    evento.preventDefault();

    const erros = verificarCamposDaNovaSenha();

    if (Object.keys(erros).length > 0) {
      setMensagensErro(erros);
      return;
    }

    setMensagensErro({});

    navigate("/senha-redefinida");
  }

  return (
    <AuthLayout>
      <div className="novaSenha-container">
        <img src={Banner} alt="Krooq" className="novaSenha-logo" />

        <div className="novaSenha-icon-box">
          <img src={IconKey} alt="Ícone chave" className="novaSenha-icon" />
        </div>

        <h2>Nova senha</h2>

        <p className="novaSenha-subtitle">
          Sua nova senha deve ser diferente da senha usada anteriormente.
        </p>

        <form className="novaSenha-form" onSubmit={redefinirSenha}>
          <div className="novaSenha-campo">
            <label>Nova senha</label>

            <div
              className={
                mensagensErro.novaSenha
                  ? "senha-wrapper senha-wrapper-erro"
                  : "senha-wrapper"
              }
            >
              <input
                type={mostrarNovaSenha ? "text" : "password"}
                name="novaSenha"
                placeholder="Digite sua nova senha"
                value={dadosNovaSenha.novaSenha}
                onChange={atualizarCampoDaSenha}
              />

              <button
                type="button"
                className="senha-eye"
                onClick={() => setMostrarNovaSenha(!mostrarNovaSenha)}
                aria-label={mostrarNovaSenha ? "Ocultar senha" : "Mostrar senha"}
              >
                {mostrarNovaSenha ? (
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

            {mensagensErro.novaSenha ? (
              <div className="caixa-mensagem-erro">
                <span>!</span>
                <p>{mensagensErro.novaSenha}</p>
              </div>
            ) : (
              <small>
                Deve ter no mínimo 8 caracteres, @, letra maiúscula e minúscula.
              </small>
            )}
          </div>

          <div className="novaSenha-campo">
            <label>Confirmar senha</label>

            <div
              className={
                mensagensErro.confirmarNovaSenha
                  ? "senha-wrapper senha-wrapper-erro"
                  : "senha-wrapper"
              }
            >
              <input
                type={mostrarConfirmarSenha ? "text" : "password"}
                name="confirmarNovaSenha"
                placeholder="Digite a senha novamente"
                value={dadosNovaSenha.confirmarNovaSenha}
                onChange={atualizarCampoDaSenha}
                onPaste={impedirCopiarEColar}
                onCopy={impedirCopiarEColar}
                onCut={impedirCopiarEColar}
                onDrop={impedirCopiarEColar}
                autoComplete="new-password"
              />

              <button
                type="button"
                className="senha-eye"
                onClick={() =>
                  setMostrarConfirmarSenha(!mostrarConfirmarSenha)
                }
                aria-label={
                  mostrarConfirmarSenha ? "Ocultar senha" : "Mostrar senha"
                }
              >
                {mostrarConfirmarSenha ? (
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

            {mensagensErro.confirmarNovaSenha ? (
              <div className="caixa-mensagem-erro">
                <span>!</span>
                <p>{mensagensErro.confirmarNovaSenha}</p>
              </div>
            ) : (
              <small>Digite manualmente a mesma senha informada acima.</small>
            )}
          </div>

          <button type="submit" className="btn-resetar">
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