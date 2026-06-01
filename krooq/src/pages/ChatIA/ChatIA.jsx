import { useState } from "react";
import "./ChatIA.css";
import Navegation from "../../components/Navegation/Navegation";

function ChatIA() {
  const [mensagens, setMensagens] = useState([
    {
      id: 1,
      tipo: "ia",
      texto: "Olá! Eu sou a IA da KROOQ. Me conte qual ambiente você deseja reformar ou visualizar.",
    },
  ]);

  const [mensagem, setMensagem] = useState("");

  function enviarMensagem() {
    if (mensagem.trim() === "") return;

    const novaMensagemUsuario = {
      id: Date.now(),
      tipo: "usuario",
      texto: mensagem,
    };

    const respostaIA = {
      id: Date.now() + 1,
      tipo: "ia",
      texto: "Entendi. Com base no que você descreveu, posso te ajudar com ideias de design, estimativa de materiais e uma sugestão visual do ambiente. Em breve essa resposta virá da API da IA.",
    };

    setMensagens((mensagensAtuais) => [
      ...mensagensAtuais,
      novaMensagemUsuario,
      respostaIA,
    ]);

    setMensagem("");
  }

  function enviarComEnter(event) {
    if (event.key === "Enter") {
      enviarMensagem();
    }
  }

  return (
    <>
      <Navegation />

      <main className="chat-ia-page">
        <section className="chat-ia-sidebar">
          <div>
            <span className="chat-ia-label">KROOQ IA</span>
            <h1>Converse com a IA</h1>
            <p>
              Descreva seu ambiente, envie ideias e peça sugestões para reforma,
              decoração, materiais e estimativas.
            </p>
          </div>

          <div className="chat-ia-limits">
            <h3>Teste gratuito</h3>
            <p>Mensagens: até 10 por usuário</p>
            <p>Imagens: até 1 geração por usuário</p>
          </div>
        </section>

        <section className="chat-ia-container">
          <div className="chat-ia-header">
            <div>
              <h2>Assistente KROOQ</h2>
              <p>Online agora</p>
            </div>

            <button className="chat-ia-new-chat">
              Nova conversa
            </button>
          </div>

          <div className="chat-ia-messages">
            {mensagens.map((item) => (
              <div
                key={item.id}
                className={
                  item.tipo === "usuario"
                    ? "chat-ia-message usuario"
                    : "chat-ia-message ia"
                }
              >
                <p>{item.texto}</p>
              </div>
            ))}
          </div>

          <div className="chat-ia-actions">
            <button type="button" className="chat-ia-image-button">
              Gerar imagem
            </button>

            <div className="chat-ia-input-area">
              <input
                type="text"
                placeholder="Ex: Quero ver minha cozinha com paredes brancas e armários de madeira..."
                value={mensagem}
                onChange={(event) => setMensagem(event.target.value)}
                onKeyDown={enviarComEnter}
              />

              <button type="button" onClick={enviarMensagem}>
                Enviar
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default ChatIA;