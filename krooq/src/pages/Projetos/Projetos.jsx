import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Projetos.css";

import NavegationLateral from "../../components/NavegationLateral/NavegationLateral";
import { criarProjeto, listarProjetos } from "../../services/projetoService";
import { pegarUsuarioLogado } from "../../services/authService";

function Projetos() {
  const navigate = useNavigate();

  const usuarioLogado = pegarUsuarioLogado();
  const nomeUsuario = usuarioLogado?.nome || "Usuário";
  const emailUsuario = usuarioLogado?.email || "";

  const [projetos, setProjetos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [criando, setCriando] = useState(false);
  const [erro, setErro] = useState("");
  const [modalAberto, setModalAberto] = useState(false);

  const [formulario, setFormulario] = useState({
    nome: "",
    descricao: "",
    tipoAmbiente: "",
    largura: "",
    comprimento: "",
    altura: "",
  });

  useEffect(() => {
    carregarProjetos();
  }, []);

  async function carregarProjetos() {
    try {
      setErro("");
      setCarregando(true);

      const dados = await listarProjetos();

      if (Array.isArray(dados)) {
        setProjetos(dados);
      } else {
        setProjetos([]);
      }
    } catch (error) {
      const mensagemErro = error.message || "Erro ao carregar projetos.";

      if (
        mensagemErro.includes("autenticado") ||
        mensagemErro.includes("Sessão")
      ) {
        navigate("/escolha-login");
        return;
      }

      setErro(mensagemErro);
    } finally {
      setCarregando(false);
    }
  }

  function atualizarCampo(event) {
    const { name, value } = event.target;

    setFormulario((dadosAtuais) => ({
      ...dadosAtuais,
      [name]: value,
    }));
  }

  function limparFormulario() {
    setFormulario({
      nome: "",
      descricao: "",
      tipoAmbiente: "",
      largura: "",
      comprimento: "",
      altura: "",
    });
  }

  function validarFormulario() {
    if (!formulario.nome.trim()) {
      return "Digite o nome do projeto.";
    }

    if (!formulario.tipoAmbiente.trim()) {
      return "Digite o tipo de ambiente.";
    }

    if (!formulario.descricao.trim()) {
      return "Digite uma descrição para o projeto.";
    }

    if (!formulario.largura || Number(formulario.largura) <= 0) {
      return "Informe uma largura válida.";
    }

    if (!formulario.comprimento || Number(formulario.comprimento) <= 0) {
      return "Informe um comprimento válido.";
    }

    if (!formulario.altura || Number(formulario.altura) <= 0) {
      return "Informe uma altura válida.";
    }

    return "";
  }

  async function salvarProjeto(event) {
    event.preventDefault();

    const erroFormulario = validarFormulario();

    if (erroFormulario) {
      setErro(erroFormulario);
      return;
    }

    try {
      setErro("");
      setCriando(true);

      const novoProjeto = await criarProjeto({
        nome: formulario.nome.trim(),
        descricao: formulario.descricao.trim(),
        tipoAmbiente: formulario.tipoAmbiente.trim(),
        largura: Number(formulario.largura),
        comprimento: Number(formulario.comprimento),
        altura: Number(formulario.altura),
      });

      limparFormulario();
      setModalAberto(false);

      await carregarProjetos();

      if (novoProjeto?.id) {
        navigate(`/chat-ia/${novoProjeto.id}`);
      }
    } catch (error) {
      const mensagemErro = error.message || "Erro ao criar projeto.";

      if (
        mensagemErro.includes("autenticado") ||
        mensagemErro.includes("Sessão")
      ) {
        navigate("/escolha-login");
        return;
      }

      setErro(mensagemErro);
    } finally {
      setCriando(false);
    }
  }

  function abrirIA(id) {
    navigate(`/chat-ia/${id}`);
  }

  function calcularArea(projeto) {
    if (projeto.area) {
      return projeto.area;
    }

    if (projeto.largura && projeto.comprimento) {
      return projeto.largura * projeto.comprimento;
    }

    return 0;
  }

  function contarProjetosPorStatus(status) {
    return projetos.filter((projeto) =>
      String(projeto.status || "")
        .toLowerCase()
        .includes(status.toLowerCase())
    ).length;
  }

  function formatarData(data) {
    if (!data) {
      return "Sem data";
    }

    return new Date(data).toLocaleDateString("pt-BR");
  }

  return (
    <section className="ProjetosPage">
      <NavegationLateral />

      <main className="ProjetosMain">
        <header className="ProjetosNavbar">
          <h2>Projetos</h2>

          <div className="ProjetosPerfil">
            <div className="ProjetosAvatar">
              {nomeUsuario.charAt(0).toUpperCase()}
            </div>

            <div>
              <p>{nomeUsuario}</p>
              <span>{emailUsuario || "Usuário logado"}</span>
            </div>
          </div>
        </header>

        <section className="ProjetosResumo">
          <div className="ProjetosResumoTexto">
            <span>Projetos</span>
            <h1>Meus projetos</h1>
            <p>
              Acompanhe seus projetos cadastrados, abra a KROOQ IA e gere
              imagens personalizadas para cada ambiente.
            </p>
          </div>

          <div className="ProjetosResumoNumeros">
            <div>
              <strong>{projetos.length}</strong>
              <span>Total projetos</span>
            </div>

            <div>
              <strong>{contarProjetosPorStatus("andamento")}</strong>
              <span>Em andamento</span>
            </div>

            <div>
              <strong>{contarProjetosPorStatus("concl")}</strong>
              <span>Concluídos</span>
            </div>

            <div>
              <button type="button" onClick={() => setModalAberto(true)}>
                Adicionar projeto
              </button>

              <button
                type="button"
                className="ProjetosBotaoAtualizar"
                onClick={carregarProjetos}
              >
                Atualizar lista
              </button>
            </div>
          </div>
        </section>

        <section className="ProjetosAreaCards">
          {carregando ? (
            <div className="ProjetosEstado">Carregando projetos...</div>
          ) : projetos.length === 0 ? (
            <div className="ProjetosEstado">
              Nenhum projeto cadastrado ainda.
            </div>
          ) : (
            projetos.map((projeto) => (
              <article className="ProjetoCard" key={projeto.id}>
                <div className="ProjetoCardTopo">
                  <span>{projeto.tipoAmbiente || "Projeto"}</span>
                  <small>{projeto.status || "Em andamento"}</small>
                </div>

                <h3>{projeto.nome}</h3>

                <p>{projeto.descricao || "Sem descrição cadastrada."}</p>

                <div className="ProjetoLinhaInfo">
                  <span>Área</span>
                  <strong>{calcularArea(projeto)} m²</strong>
                </div>

                <div className="ProjetoLinhaInfo">
                  <span>Medidas</span>
                  <strong>
                    {projeto.largura || 0}m x {projeto.comprimento || 0}m
                  </strong>
                </div>

                <div className="ProjetoLinhaInfo">
                  <span>Criado em</span>
                  <strong>{formatarData(projeto.dataCriacao)}</strong>
                </div>

                <div className="ProjetoCardRodape">
                  <button type="button" onClick={() => abrirIA(projeto.id)}>
                    KROOQ IA
                  </button>
                </div>
              </article>
            ))
          )}
        </section>
      </main>

      {modalAberto && (
        <div className="ProjetosModalOverlay">
          <form className="ProjetosModal" onSubmit={salvarProjeto}>
            <div className="ProjetosModalTopo">
              <div>
                <span>Novo projeto</span>
                <h2>Cadastrar projeto</h2>
              </div>

              <button
                type="button"
                onClick={() => {
                  setModalAberto(false);
                  setErro("");
                }}
              >
                ×
              </button>
            </div>

            <div className="ProjetosModalCampos">
              <label>
                Nome do projeto
                <input
                  type="text"
                  name="nome"
                  placeholder="Ex: Reforma da cozinha"
                  value={formulario.nome}
                  onChange={atualizarCampo}
                />
              </label>

              <label>
                Tipo de ambiente
                <input
                  type="text"
                  name="tipoAmbiente"
                  placeholder="Ex: Cozinha, sala, quarto..."
                  value={formulario.tipoAmbiente}
                  onChange={atualizarCampo}
                />
              </label>

              <label>
                Descrição
                <textarea
                  name="descricao"
                  placeholder="Descreva o objetivo do projeto..."
                  value={formulario.descricao}
                  onChange={atualizarCampo}
                />
              </label>

              <div className="ProjetosModalMedidas">
                <label>
                  Largura
                  <input
                    type="number"
                    name="largura"
                    placeholder="4"
                    value={formulario.largura}
                    onChange={atualizarCampo}
                  />
                </label>

                <label>
                  Comprimento
                  <input
                    type="number"
                    name="comprimento"
                    placeholder="4.5"
                    value={formulario.comprimento}
                    onChange={atualizarCampo}
                  />
                </label>

                <label>
                  Altura
                  <input
                    type="number"
                    name="altura"
                    placeholder="2.8"
                    value={formulario.altura}
                    onChange={atualizarCampo}
                  />
                </label>
              </div>
            </div>

            {erro && <div className="ProjetosErro">{erro}</div>}

            <button
              type="submit"
              className="ProjetosBotaoSalvar"
              disabled={criando}
            >
              {criando ? "Criando..." : "Criar projeto"}
            </button>
          </form>
        </div>
      )}
    </section>
  );
}

export default Projetos;