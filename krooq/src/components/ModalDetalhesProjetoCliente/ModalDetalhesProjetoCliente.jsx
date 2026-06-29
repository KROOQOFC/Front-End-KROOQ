import "./ModalDetalhesProjetoCliente.css";
import {
  FaTimes,
  FaCheckCircle,
  FaClock,
  FaHourglassHalf,
  FaUserTie,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCamera,
  FaFlagCheckered,
} from "react-icons/fa";

function ModalDetalhesProjetoCliente({
  aberto,
  projeto,
  aoFechar,
  aoFinalizar,
}) {
  if (!aberto || !projeto) return null;

  const tarefas = projeto.tarefas || [];
  const atualizacoes = projeto.atualizacoes || [];

  const tarefasConcluidas = tarefas.filter(
    (tarefa) => tarefa.status === "Concluída"
  ).length;

  function iconeStatus(status) {
    if (status === "Concluída") return <FaCheckCircle />;
    if (status === "Em andamento") return <FaClock />;
    return <FaHourglassHalf />;
  }

  return (
    <div className="OverlayModalDetalhesProjetoCliente">
      <div className="ModalDetalhesProjetoCliente">
        <div className="TopoModalDetalhesProjetoCliente">
          <div>
            <p>{projeto.status}</p>
            <h2>{projeto.titulo}</h2>
          </div>

          <button
            className="BotaoFecharModalDetalhesProjetoCliente"
            onClick={aoFechar}
          >
            <FaTimes />
          </button>
        </div>

        <div className="ResumoDetalhesProjetoCliente">
          <div className="CardResumoDetalhesProjetoCliente">
            <FaUserTie />
            <span>Profissional</span>
            <strong>{projeto.profissionalResponsavel || "Não informado"}</strong>
          </div>

          <div className="CardResumoDetalhesProjetoCliente">
            <FaMapMarkerAlt />
            <span>Localização</span>
            <strong>{projeto.localizacao || "Não informada"}</strong>
          </div>

          <div className="CardResumoDetalhesProjetoCliente">
            <FaCalendarAlt />
            <span>Prazo</span>
            <strong>{projeto.prazo}</strong>
          </div>

          <div className="CardResumoDetalhesProjetoCliente">
            <FaCheckCircle />
            <span>Tarefas</span>
            <strong>
              {tarefasConcluidas}/{tarefas.length} concluídas
            </strong>
          </div>
        </div>

        <div className="BlocoProgressoDetalhesProjetoCliente">
          <div>
            <span>Progresso geral</span>
            <strong>{projeto.progresso}</strong>
          </div>

          <div className="BarraDetalhesProjetoCliente">
            <div
              className="BarraDetalhesProjetoClientePreenchida"
              style={{
                width: projeto.progresso,
                backgroundColor: projeto.cor,
              }}
            ></div>
          </div>
        </div>

        <div className="ConteudoModalDetalhesProjetoCliente">
          <section className="SecaoDetalhesProjetoCliente">
            <h3>Tarefas do projeto</h3>

            <div className="ListaTarefasDetalhesProjetoCliente">
              {tarefas.length === 0 ? (
                <p className="TextoVazioDetalhesProjetoCliente">
                  Nenhuma tarefa cadastrada pelo profissional ainda.
                </p>
              ) : (
                tarefas.map((tarefa, index) => (
                  <div className="ItemTarefaDetalhesProjetoCliente" key={index}>
                    <div
                      className="IconeTarefaDetalhesProjetoCliente"
                      style={{ color: projeto.cor }}
                    >
                      {iconeStatus(tarefa.status)}
                    </div>

                    <div>
                      <strong>{tarefa.nome}</strong>
                      <span>{tarefa.status}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>

          <section className="SecaoDetalhesProjetoCliente">
            <h3>Atualizações do profissional</h3>

            <div className="ListaAtualizacoesDetalhesProjetoCliente">
              {atualizacoes.length === 0 ? (
                <p className="TextoVazioDetalhesProjetoCliente">
                  Nenhuma atualização enviada pelo profissional ainda.
                </p>
              ) : (
                atualizacoes.map((atualizacao, index) => (
                  <div
                    className="CardAtualizacaoDetalhesProjetoCliente"
                    key={index}
                  >
                    <div className="TopoAtualizacaoDetalhesProjetoCliente">
                      <div>
                        <span>{atualizacao.data}</span>
                        <h4>{atualizacao.titulo}</h4>
                      </div>

                      <FaCamera />
                    </div>

                    <p>{atualizacao.descricao}</p>

                    <div className="FotosAtualizacaoDetalhesProjetoCliente">
                      <div className="FotoFakeDetalhesProjetoCliente">
                        Foto da obra
                      </div>
                      <div className="FotoFakeDetalhesProjetoCliente">
                        Antes / Depois
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>
        </div>

        <div className="RodapeModalDetalhesProjetoCliente">
          <button
            type="button"
            className="BotaoFecharDetalhesProjetoCliente"
            onClick={aoFechar}
          >
            Fechar
          </button>

          {projeto.status === "Em andamento" && (
            <button
              type="button"
              className="BotaoFinalizarDetalhesProjetoCliente"
              onClick={() => aoFinalizar(projeto)}
            >
              <FaFlagCheckered /> Finalizar projeto
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ModalDetalhesProjetoCliente;