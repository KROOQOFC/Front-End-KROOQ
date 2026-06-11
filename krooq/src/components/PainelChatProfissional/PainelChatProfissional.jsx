import "./PainelChatProfissional.css";
import { FaPhoneAlt, FaEllipsisV, FaSmile, FaPaperclip, FaPaperPlane } from "react-icons/fa";

function PainelChatProfissional({ cliente }) {
  if (!cliente) {
    return (
      <div className="PainelChatProfissional PainelChatVazio">
        <div className="ConteudoChatVazio">
          <p>Selecione um chat para iniciar<br />uma conversa.</p>
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
          <img src={cliente.foto} alt={cliente.nome} />
          <h3>{cliente.nome}</h3>
          <span>{cliente.tipo || "cliente"}</span>
        </div>

        <div className="AcoesTopoChat">
          <FaPhoneAlt />
          <FaEllipsisV />
        </div>
      </div>

      <div className="DataChat">Fev 20, 2026</div>

      <div className="MensagensChat">
        <div className="MensagemRecebida">
          <p>Oi! Tudo bem?</p>
          <span>14:00</span>
        </div>

        <div className="MensagemEnviada">
          <p>Olá! Tudo ótimo por aqui. Sim, acabamos de sair do canteiro.</p>
          <span>14:00</span>
        </div>

        <div className="MensagemRecebida maior">
          <p>Que bom! Como estão as coisas por lá? Fiquei curioso com a parte dos revestimentos da cozinha.</p>
          <span>14:23</span>
        </div>

        <div className="MensagemEnviada maior">
          <p>A paginação do piso já começou! Os azulejos da parede também estão sendo assentados.</p>
          <span>14:25</span>
        </div>

        <div className="MensagemRecebida">
          <p>Ah, excelente!</p>
          <span>14:35</span>
        </div>

        <div className="MensagemEnviada maior">
          <p>Sim, o engenheiro acompanhou a finalização do reforço hoje cedo. Ficou 100% liberado e seguro para continuarmos.</p>
          <span>15:00</span>
        </div>

        <div className="MensagemRecebida maior">
          <p>Perfeito, fico muito mais tranquilo.</p>
          <span>15:10</span>
        </div>
      </div>

      <div className="InputChatCliente">
        <input type="text" placeholder="Digite uma mensagem..." />

        <div className="AcoesInputChat">
          <FaSmile />
          <FaPaperclip />
          <button>
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PainelChatProfissional;