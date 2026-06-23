import "./PainelChatProfissional.css";
import { useState } from "react";
import {
  FaPhoneAlt,
  FaEllipsisV,
  FaSmile,
  FaPaperclip,
  FaPaperPlane,
  FaArrowLeft,
} from "react-icons/fa";

function PainelChatProfissional({
  cliente,
  mensagens = [],
  onEnviarMensagem,
  onVoltar,
}) {
  const [novaMensagem, setNovaMensagem] = useState("");

  function enviarMensagem() {
    if (!cliente || novaMensagem.trim() === "") return;

    onEnviarMensagem(cliente, novaMensagem);

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
            <div className="DataChat">{formatarDataChat(mensagem.data)}</div>
          )}

          <div
            className={
              mensagem.tipo === "enviada"
                ? "MensagemEnviada maior"
                : "MensagemRecebida maior"
            }
          >
            <p>{mensagem.texto}</p>
            <span>{mensagem.horario}</span>
          </div>
        </div>
      );
    });
  }

  if (!cliente) {
    return (
      <div className="PainelChatProfissional PainelChatVazio">
        <div className="ConteudoChatVazio">
          <p>
            Selecione um chat para iniciar
            <br />
            uma conversa.
          </p>
          <div className="IconeEnvelope">✉️</div>
          <span>Nada está selecionado</span>
        </div>
      </div>
    );
  }

  return (
    <div className="PainelChatProfissional">
      <div className="TopoChatCliente">
        <div className="InfoTopoChat">
          <button className="BotaoVoltarChat" onClick={onVoltar}>
            <FaArrowLeft />
          </button>

          <img src={cliente.foto} alt={cliente.nome} />

          <div>
            <h3>{cliente.nome}</h3>
            <span>{cliente.tipo || "cliente"}</span>
          </div>
        </div>

        <div className="AcoesTopoChat">
          <FaPhoneAlt />
          <FaEllipsisV />
        </div>
      </div>

      <div className="MensagensChat">{renderizarMensagensComData()}</div>

      <div className="InputChatCliente">
        <input
          type="text"
          placeholder="Digite uma mensagem..."
          value={novaMensagem}
          onChange={(evento) => setNovaMensagem(evento.target.value)}
          onKeyDown={enviarComEnter}
        />

        <div className="AcoesInputChat">
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

export default PainelChatProfissional;