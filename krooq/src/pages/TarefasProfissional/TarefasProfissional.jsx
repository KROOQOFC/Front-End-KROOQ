import { useState } from "react";
import "./TarefasProfissional.css";

import NavegationLateral from "../../components/NavegationLateral/NavegationLateral";
import MensagensNavBar from "../../components/MensagensNavBar/MensagensNavBar";
import TarefasResumo from "../../components/TarefasResumo/TarefasResumo";
import BlocoTarefas from "../../components/BlocoTarefas/BlocoTarefas";

function TarefasProfissional() {
  const [tarefas, setTarefas] = useState([]);
  const [modalAberto, setModalAberto] = useState(false);
  const [modalDataAberto, setModalDataAberto] = useState(false);
  const [modalProgressoAberto, setModalProgressoAberto] = useState(false);

  const [tarefaSelecionada, setTarefaSelecionada] = useState(null);
  const [tarefaEditando, setTarefaEditando] = useState(null);

  const [novaDataFim, setNovaDataFim] = useState("");
  const [novoProgresso, setNovoProgresso] = useState("");

  const [novaTarefa, setNovaTarefa] = useState({
    dataInicio: "",
    dataFim: "",
    titulo: "",
    subtitulo: "",
    progresso: "",
    cor: "#54715E",
  });

  function formatarData(data) {
    if (!data) return "";

    const dataFormatada = new Date(data + "T00:00:00");

    return dataFormatada
      .toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
      .replace(".", "");
  }

  function calcularPrazo(dataFim) {
    const hoje = new Date();
    const fim = new Date(dataFim + "T00:00:00");

    hoje.setHours(0, 0, 0, 0);
    fim.setHours(0, 0, 0, 0);

    const diferenca = fim - hoje;
    const dias = Math.ceil(diferenca / (1000 * 60 * 60 * 24));

    if (dias < 0) return "vencido";
    if (dias === 0) return "Acaba hoje";
    if (dias === 1) return "Falta 1 dia";
    if (dias < 30) return ` ${dias} dias`;

    const meses = Math.floor(dias / 30);

    if (meses === 1) return "1 mês";
    return `${meses} meses`;
  }

  function abrirModalAdicionar() {
    setModalAberto(true);
    setTarefaSelecionada(null);
  }

  function fecharModal() {
    setModalAberto(false);

    setNovaTarefa({
      dataInicio: "",
      dataFim: "",
      titulo: "",
      subtitulo: "",
      progresso: "",
      cor: "#54715E",
    });
  }

  function alterarCampo(event) {
    const { name, value } = event.target;

    setNovaTarefa({
      ...novaTarefa,
      [name]: value,
    });
  }

  function adicionarTarefa(event) {
    event.preventDefault();

    const tarefaCriada = {
      id: Date.now(),
      dataInicio: novaTarefa.dataInicio,
      dataFim: novaTarefa.dataFim,
      titulo: novaTarefa.titulo,
      subtitulo: novaTarefa.subtitulo,
      progresso: Number(novaTarefa.progresso),
      cor: novaTarefa.cor,
    };

    setTarefas([...tarefas, tarefaCriada]);
    fecharModal();
  }

  function removerTarefaSelecionada() {
    if (!tarefaSelecionada) {
      alert("Selecione uma tarefa para remover.");
      return;
    }

    setTarefas(tarefas.filter((tarefa) => tarefa.id !== tarefaSelecionada));
    setTarefaSelecionada(null);
  }

  function abrirEditarDataFim(tarefa) {
    setTarefaEditando(tarefa);
    setNovaDataFim(tarefa.dataFim);
    setModalDataAberto(true);
  }

  function salvarNovaDataFim(event) {
    event.preventDefault();

    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === tarefaEditando.id
          ? { ...tarefa, dataFim: novaDataFim }
          : tarefa
      )
    );

    setModalDataAberto(false);
    setTarefaEditando(null);
    setNovaDataFim("");
  }

  function abrirEditarProgresso(tarefa) {
    setTarefaEditando(tarefa);
    setNovoProgresso(tarefa.progresso);
    setModalProgressoAberto(true);
  }

  function salvarNovoProgresso(event) {
    event.preventDefault();

    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === tarefaEditando.id
          ? { ...tarefa, progresso: Number(novoProgresso) }
          : tarefa
      )
    );

    setModalProgressoAberto(false);
    setTarefaEditando(null);
    setNovoProgresso("");
  }

  return (
    <section
      className="ContainerTarefasProfissional"
      onClick={() => setTarefaSelecionada(null)}
    >
      <NavegationLateral />

      <MensagensNavBar
        className="AreaNavBarMensagens"
        nomeUsuario="Sofia"
        emailUsuario="sofia@email"
        notificacoes={16}
        mensagens={28}
        fotoUsuario=""
      />

      <TarefasResumo
        className="AreaTarefasResumo"
        data="22 Jul 2025"
        itens={[
          { numero: tarefas.length, texto: "Em andamento" },
          { numero: 0, texto: "Por vir" },
          { numero: 0, texto: "Em espera" },
          { numero: tarefas.length, texto: "Total projetos" },
        ]}
        onAdicionar={abrirModalAdicionar}
        onRemover={(event) => {
          event.stopPropagation();
          removerTarefaSelecionada();
        }}
      />

      <div
        className="AreaCardsTarefas"
        onClick={(event) => event.stopPropagation()}
      >
        {tarefas.map((tarefa) => (
          <BlocoTarefas
            key={tarefa.id}
            dataInicio={formatarData(tarefa.dataInicio)}
            dataFim={formatarData(tarefa.dataFim)}
            titulo={tarefa.titulo}
            subtitulo={tarefa.subtitulo}
            progresso={tarefa.progresso}
            prazo={calcularPrazo(tarefa.dataFim)}
            cor={tarefa.cor}
            selecionado={tarefaSelecionada === tarefa.id}
            onSelecionar={() => setTarefaSelecionada(tarefa.id)}
            onEditar={() => abrirEditarDataFim(tarefa)}
            onAdicionarPessoa={() => abrirEditarProgresso(tarefa)}
          />
        ))}
      </div>

      {modalAberto && (
        <div
          className="FundoModalTarefa"
          onClick={(event) => event.stopPropagation()}
        >
          <form className="ModalTarefa" onSubmit={adicionarTarefa}>
            <h2>Adicionar tarefa</h2>

            <label>
              Data de início
              <input
                type="date"
                name="dataInicio"
                value={novaTarefa.dataInicio}
                onChange={alterarCampo}
                required
              />
            </label>

            <label>
              Data de término
              <input
                type="date"
                name="dataFim"
                value={novaTarefa.dataFim}
                onChange={alterarCampo}
                required
              />
            </label>

            <label>
              Título
              <input
                type="text"
                name="titulo"
                placeholder="Ex: Projeto Executivo"
                value={novaTarefa.titulo}
                onChange={alterarCampo}
                required
              />
            </label>

            <label>
              Subtítulo
              <input
                type="text"
                name="subtitulo"
                placeholder="Ex: Plantas e Cortes"
                value={novaTarefa.subtitulo}
                onChange={alterarCampo}
                required
              />
            </label>

            <label>
              Progresso
              <input
                type="number"
                name="progresso"
                min="0"
                max="100"
                placeholder="Ex: 70"
                value={novaTarefa.progresso}
                onChange={alterarCampo}
                required
              />
            </label>

            <label>
              Cor da tarefa
              <input
                type="color"
                name="cor"
                value={novaTarefa.cor}
                onChange={alterarCampo}
              />
            </label>

            <div className="BotoesModalTarefa">
              <button type="button" onClick={fecharModal}>
                Cancelar
              </button>

              <button type="submit">Salvar tarefa</button>
            </div>
          </form>
        </div>
      )}

      {modalDataAberto && (
        <div
          className="FundoModalTarefa"
          onClick={(event) => event.stopPropagation()}
        >
          <form
            className="ModalTarefa ModalPequenoTarefa"
            onSubmit={salvarNovaDataFim}
          >
            <h2>Editar data final</h2>

            <label>
              Nova data de término
              <input
                type="date"
                value={novaDataFim}
                onChange={(event) => setNovaDataFim(event.target.value)}
                required
              />
            </label>

            <div className="BotoesModalTarefa">
              <button type="button" onClick={() => setModalDataAberto(false)}>
                Cancelar
              </button>

              <button type="submit">Salvar</button>
            </div>
          </form>
        </div>
      )}

      {modalProgressoAberto && (
        <div
          className="FundoModalTarefa"
          onClick={(event) => event.stopPropagation()}
        >
          <form
            className="ModalTarefa ModalPequenoTarefa"
            onSubmit={salvarNovoProgresso}
          >
            <h2>Atualizar progresso</h2>

            <label>
              Novo progresso
              <input
                type="number"
                min="0"
                max="100"
                placeholder="Ex: 80"
                value={novoProgresso}
                onChange={(event) => setNovoProgresso(event.target.value)}
                required
              />
            </label>

            <div className="BotoesModalTarefa">
              <button
                type="button"
                onClick={() => setModalProgressoAberto(false)}
              >
                Cancelar
              </button>

              <button type="submit">Salvar</button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
}

export default TarefasProfissional;