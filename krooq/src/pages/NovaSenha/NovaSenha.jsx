import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout/AuthLayout";
import "./NovaSenha.css";
import Banner from "../../assets/nome_Krooq_verde.png";
import IconKey from "../../assets/icon_chave.png";

function NovaSenha() {
  const navigate = useNavigate();

  const [dadosNovaSenha, setDadosNovaSenha] = useState({
    novaSenha: "",
    confirmarNovaSenha: "",
  });

  const [mensagensErro, setMensagensErro] = useState({});

  function atualizarCampoDaSenha(evento) {
    const { name, value } = evento.target;

    setDadosNovaSenha({
      ...dadosNovaSenha,
      [name]: value,
    });
  }

  function verificarCamposDaNovaSenha() {
    const errosEncontrados = {};

    if (!dadosNovaSenha.novaSenha) {
      errosEncontrados.novaSenha = "Crie uma nova senha para continuar.";
    } else if (dadosNovaSenha.novaSenha.length < 8) {
      errosEncontrados.novaSenha =
        "A nova senha precisa ter pelo menos 8 caracteres.";
    }

    if (!dadosNovaSenha.confirmarNovaSenha) {
      errosEncontrados.confirmarNovaSenha =
        "Confirme sua nova senha para continuar.";
    } else if (
      dadosNovaSenha.confirmarNovaSenha !== dadosNovaSenha.novaSenha
    ) {
      errosEncontrados.confirmarNovaSenha =
        "As senhas precisam ser iguais.";
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

    console.log("Nova senha cadastrada com sucesso:", dadosNovaSenha);

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
            <input
              type="password"
              name="novaSenha"
              placeholder="Digite sua nova senha"
              value={dadosNovaSenha.novaSenha}
              onChange={atualizarCampoDaSenha}
              className={mensagensErro.novaSenha ? "input-com-erro" : ""}
            />

            {mensagensErro.novaSenha ? (
              <div className="caixa-mensagem-erro">
                <span>!</span>
                <p>{mensagensErro.novaSenha}</p>
              </div>
            ) : (
              <small>Deve ter pelo menos 8 caracteres.</small>
            )}
          </div>

          <div className="novaSenha-campo">
            <label>Confirmar senha</label>
            <input
              type="password"
              name="confirmarNovaSenha"
              placeholder="Digite a senha novamente"
              value={dadosNovaSenha.confirmarNovaSenha}
              onChange={atualizarCampoDaSenha}
              className={
                mensagensErro.confirmarNovaSenha ? "input-com-erro" : ""
              }
            />

            {mensagensErro.confirmarNovaSenha ? (
              <div className="caixa-mensagem-erro">
                <span>!</span>
                <p>{mensagensErro.confirmarNovaSenha}</p>
              </div>
            ) : (
              <small>Digite a mesma senha informada acima.</small>
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