import "./PainelChatCliente.css";
import { useState } from "react";
import {
  FaPhoneAlt,
  FaEllipsisV,
  FaSmile,
  FaPaperclip,
  FaPaperPlane,
  FaArrowLeft,
} from "react-icons/fa";

function PainelChatCliente({
  profissional,
  mensagens = [],
  onEnviarMensagem,
  onVoltar,
}) {
  const [novaMensagem, setNovaMensagem] = useState("");

  function enviarMensagem() {
    if (!profissional || novaMensagem.trim() === "") return;

    onEnviarMensagem(profissional, novaMensagem);

    setNovaMensagem("");
  }

  function enviarComEnter(evento) {
    if (evento.key === "Enter") {
      enviarMensagem();
    }
  }

  function formatarDataChat(dataMensagem) {
    if (!dataMensagem) return "";

    const hoje = new Date();
    const data = new Date(`${dataMensagem}T00:00:00`);

    const hojeFormatado = hoje.toISOString().split("T")[0];

    const ontem = new Date();
    ontem.setDate(hoje.getDate() - 1);
    const ontemFormatado = ontem.toISOString().split("T")[0];

    if (dataMensagem === hojeFormatado) {
      return "Hoje";
    }

    if (dataMensagem === ontemFormatado) {
      return "Ontem";
    }

    return data.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }

  function renderizarMensagensComData() {
    let ultimaDataRenderizada = null;

    return mensagens.map((mensagem) => {
      const mostrarData = mensagem.data !== ultimaDataRenderizada;

      if (mostrarData) {
        ultimaDataRenderizada = mensagem.data;
      }

      return (
        <div key={mensagem.id}>
          {mostrarData && (
            <div className="DataChatCliente">
              {formatarDataChat(mensagem.data)}
            </div>
          )}

          <div
            className={
              mensagem.tipo === "enviada"
                ? "MensagemEnviadaCliente maior"
                : "MensagemRecebidaCliente maior"
            }
          >
            <p>{mensagem.texto}</p>
            <span>{mensagem.horario}</span>
          </div>
        </div>
      );
    });
  }

  if (!profissional) {
    return (
      <div className="PainelChatCliente PainelChatClienteVazio">
        <div className="ConteudoChatClienteVazio">
          <p>
            Selecione um chat para iniciar
            <br />
            uma conversa.
          </p>
          <div className="IconeEnvelopeCliente">✉️</div>
          <span>Nada está selecionado</span>
        </div>
      </div>
    );
  }

  return (
    <div className="PainelChatCliente">
      <div className="TopoChatProfissional">
        <div className="InfoTopoChatCliente">
          <button className="BotaoVoltarChatCliente" onClick={onVoltar}>
            <FaArrowLeft />
          </button>

          <img src={profissional.foto} alt={profissional.nome} />

          <div>
            <h3>{profissional.nome}</h3>
            <span>{profissional.areaAtuacao || "Profissional"}</span>
          </div>
        </div>

        <div className="AcoesTopoChatCliente">
          <FaPhoneAlt />
          <FaEllipsisV />
        </div>
      </div>

      <div className="MensagensChatCliente">{renderizarMensagensComData()}</div>

      <div className="InputChatCliente">
        <input
          type="text"
          placeholder="Digite uma mensagem..."
          value={novaMensagem}
          onChange={(evento) => setNovaMensagem(evento.target.value)}
          onKeyDown={enviarComEnter}
        />

        <div className="AcoesInputChatCliente">
          <FaSmile />
          <FaPaperclip />

          <button onClick={enviarMensagem}>
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PainelChatCliente;