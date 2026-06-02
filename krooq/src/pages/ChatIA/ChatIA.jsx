import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ChatIA.css";
import Navegation from "../../components/Navegation/Navegation";
import {
  buscarHistoricoIA,
  enviarMensagemIA,
  limparHistoricoIA,
  gerarImagemIA,
  listarImagensIA,
} from "../../services/iaService";
import { BASE_URL } from "../../services/api";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function ChatIA() {
  const { id } = useParams();
  const navigate = useNavigate();

  const projetoId = Number(id);

  const mensagemInicial = {
    id: 1,
    tipo: "ia",
    texto: "Olá! Eu sou a IA da KROOQ. Me conte qual ambiente você deseja reformar ou visualizar.",
  };

  const [mensagens, setMensagens] = useState([mensagemInicial]);
  const [mensagem, setMensagem] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [carregandoHistorico, setCarregandoHistorico] = useState(true);
  const [limpandoHistorico, setLimpandoHistorico] = useState(false);
  const [erro, setErro] = useState("");

  const mensagensRef = useRef(null);

  useEffect(() => {
    carregarHistorico();
  }, [projetoId]);

  useEffect(() => {
    rolarParaFinal();
  }, [mensagens, carregando]);

  async function carregarHistorico() {
    try {
      setErro("");
      setCarregandoHistorico(true);

      if (!projetoId) {
        setErro("Projeto não encontrado. Abra a IA a partir de um projeto.");
        setMensagens([mensagemInicial]);
        return;
      }

      const historico = await buscarHistoricoIA(projetoId);
      const imagens = await listarImagensIA(projetoId);

      let mensagensFormatadas = [];

      if (historico && historico.length > 0) {
        mensagensFormatadas = historico.map((item, index) => ({
          id: item.id || index + 1,
          tipo: item.remetente === "usuario" ? "usuario" : "ia",
          texto: item.conteudo,
        }));
      }

      if (imagens && imagens.length > 0) {
        const mensagensDeImagem = imagens.map((imagem, index) => ({
          id: `imagem-${imagem.id || index}`,
          tipo: "ia",
          texto: `Imagem gerada para o pedido: "${imagem.prompt}"`,
          imagem: imagem.urlImagem,
        }));

        mensagensFormatadas = [
          ...mensagensFormatadas,
          ...mensagensDeImagem,
        ];
      }

      if (mensagensFormatadas.length === 0) {
        setMensagens([mensagemInicial]);
        return;
      }

      setMensagens(mensagensFormatadas);
    } catch (error) {
      if (
        error.message.includes("autenticado") ||
        error.message.includes("Sessão")
      ) {
        navigate("/escolha-login");
        return;
      }

      setErro(error.message || "Erro ao carregar histórico da conversa.");
      setMensagens([mensagemInicial]);
    } finally {
      setCarregandoHistorico(false);
    }
  }

  async function enviarMensagem() {
    if (mensagem.trim() === "" || carregando || carregandoHistorico) {
      return;
    }

    if (!projetoId) {
      setErro("Projeto não encontrado. Não foi possível enviar a mensagem.");
      return;
    }

    const textoMensagem = mensagem.trim();

    const novaMensagemUsuario = {
      id: Date.now(),
      tipo: "usuario",
      texto: textoMensagem,
    };

    setMensagens((mensagensAtuais) => [
      ...mensagensAtuais,
      novaMensagemUsuario,
    ]);

    setMensagem("");
    setCarregando(true);
    setErro("");

    try {
      const dados = await enviarMensagemIA(projetoId, textoMensagem);

      const respostaIA = {
        id: Date.now() + 1,
        tipo: "ia",
        texto:
          dados.resposta ||
          "A IA respondeu, mas não retornou uma mensagem válida.",
      };

      setMensagens((mensagensAtuais) => [...mensagensAtuais, respostaIA]);
    } catch (error) {
      tratarErroComoMensagem(error);
    } finally {
      setCarregando(false);
    }
  }

  async function gerarImagem() {
    if (mensagem.trim() === "" || carregando || carregandoHistorico) {
      return;
    }

    if (!projetoId) {
      setErro("Projeto não encontrado. Não foi possível gerar a imagem.");
      return;
    }

    const textoPrompt = mensagem.trim();

    const novaMensagemUsuario = {
      id: Date.now(),
      tipo: "usuario",
      texto: textoPrompt,
    };

    setMensagens((mensagensAtuais) => [
      ...mensagensAtuais,
      novaMensagemUsuario,
      {
        id: Date.now() + 1,
        tipo: "ia",
        texto: "Gerando imagem do ambiente...",
        carregandoImagem: true,
      },
    ]);

    setMensagem("");
    setCarregando(true);
    setErro("");

    try {
      const dados = await gerarImagemIA(projetoId, textoPrompt);

      const respostaImagem = {
        id: Date.now() + 2,
        tipo: "ia",
        texto: dados.prompt
          ? `Imagem gerada para: "${dados.prompt}"`
          : "Imagem gerada com sucesso.",
        imagem: dados.urlImagem,
      };

      setMensagens((mensagensAtuais) => [
        ...mensagensAtuais.filter((item) => !item.carregandoImagem),
        respostaImagem,
      ]);
    } catch (error) {
      setMensagens((mensagensAtuais) =>
        mensagensAtuais.filter((item) => !item.carregandoImagem)
      );

      tratarErroComoMensagem(error);
    } finally {
      setCarregando(false);
    }
  }

  function tratarErroComoMensagem(error) {
    if (
      error.message.includes("autenticado") ||
      error.message.includes("Sessão")
    ) {
      navigate("/escolha-login");
      return;
    }

    const mensagemErro =
      error.message || "Não consegui conectar com a IA agora.";

    setErro(mensagemErro);

    const respostaErro = {
      id: Date.now() + 1,
      tipo: "ia",
      texto: mensagemErro,
    };

    setMensagens((mensagensAtuais) => [...mensagensAtuais, respostaErro]);
  }

  async function novaConversa() {
    if (limpandoHistorico || carregandoHistorico || carregando) {
      return;
    }

    if (!projetoId) {
      setErro("Projeto não encontrado. Não foi possível limpar a conversa.");
      return;
    }

    try {
      setErro("");
      setLimpandoHistorico(true);

      await limparHistoricoIA(projetoId);

      setMensagens([
        {
          id: Date.now(),
          tipo: "ia",
          texto: "Nova conversa iniciada. Como posso ajudar no seu projeto?",
        },
      ]);

      setMensagem("");
    } catch (error) {
      if (
        error.message.includes("autenticado") ||
        error.message.includes("Sessão")
      ) {
        navigate("/escolha-login");
        return;
      }

      setErro(error.message || "Erro ao limpar o histórico da conversa.");
    } finally {
      setLimpandoHistorico(false);
    }
  }

  function enviarComEnter(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      enviarMensagem();
    }
  }

  function rolarParaFinal() {
    if (mensagensRef.current) {
      mensagensRef.current.scrollTop = mensagensRef.current.scrollHeight;
    }
  }

  function formatarTextoMarkdown(texto) {
    if (!texto) {
      return "";
    }

    return String(texto).replace(/\\n/g, "\n");
  }

  function montarUrlImagem(urlImagem) {
    if (!urlImagem) {
      return "";
    }

    if (urlImagem.startsWith("http")) {
      return urlImagem;
    }

    return `${BASE_URL}${urlImagem}`;
  }

  const quantidadeMensagensUsuario = mensagens.filter(
    (item) => item.tipo === "usuario"
  ).length;

  const quantidadeImagens = mensagens.filter((item) => item.imagem).length;

  const botaoDesabilitado =
    carregando || carregandoHistorico || limpandoHistorico;

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
              decoração, materiais, estimativas e imagens realistas.
            </p>
          </div>

          <div className="chat-ia-info-card">
            <h3>Projeto atual</h3>
            <p>ID do projeto: {projetoId || "não encontrado"}</p>
            <p>Mensagens enviadas: {quantidadeMensagensUsuario}</p>
            <p>Imagens geradas: {quantidadeImagens}</p>
          </div>
        </section>

        <section className="chat-ia-container">
          <div className="chat-ia-header">
            <div>
              <h2>Assistente KROOQ</h2>

              <p>
                {carregando
                  ? "Processando..."
                  : limpandoHistorico
                  ? "Limpando conversa..."
                  : carregandoHistorico
                  ? "Carregando histórico..."
                  : "Online agora"}
              </p>
            </div>

            <button
              type="button"
              className="chat-ia-new-chat"
              onClick={novaConversa}
              disabled={botaoDesabilitado}
            >
              {limpandoHistorico ? "Limpando..." : "Nova conversa"}
            </button>
          </div>

          <div className="chat-ia-messages" ref={mensagensRef}>
            {carregandoHistorico ? (
              <div className="chat-ia-loading">
                Carregando histórico da conversa...
              </div>
            ) : (
              <>
                {mensagens.map((item) => (
                  <div
                    key={item.id}
                    className={`chat-ia-message ${item.tipo}`}
                  >
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {formatarTextoMarkdown(item.texto)}
                    </ReactMarkdown>

                    {item.carregandoImagem && (
                      <div className="chat-ia-image-loading">
                        Preparando visualização do ambiente...
                      </div>
                    )}

                    {item.imagem && (
                      <img
                        src={montarUrlImagem(item.imagem)}
                        alt="Imagem gerada pela IA da KROOQ"
                        className="chat-ia-generated-image"
                      />
                    )}
                  </div>
                ))}
              </>
            )}
          </div>

          {erro && <div className="chat-ia-error">{erro}</div>}

          <div className="chat-ia-actions">
            <button
              type="button"
              className="chat-ia-image-button"
              onClick={gerarImagem}
              disabled={botaoDesabilitado || !mensagem.trim()}
              title="Gerar imagem a partir da descrição digitada"
            >
              {carregando ? "Gerando..." : "Gerar imagem"}
            </button>

            <div className="chat-ia-input-area">
              <input
                type="text"
                placeholder="Ex: Quero ver minha cozinha com paredes brancas e armários de madeira..."
                value={mensagem}
                onChange={(event) => setMensagem(event.target.value)}
                onKeyDown={enviarComEnter}
                disabled={botaoDesabilitado}
              />

              <button
                type="button"
                onClick={enviarMensagem}
                disabled={botaoDesabilitado || !mensagem.trim()}
              >
                {carregando ? "Enviando..." : "Enviar"}
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default ChatIA;