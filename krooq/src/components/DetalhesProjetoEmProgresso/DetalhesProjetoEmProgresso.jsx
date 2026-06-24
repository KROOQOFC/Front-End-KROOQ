import "./DetalhesProjetoEmProgresso.css";
import { useState } from "react";
import {
  FaArrowLeft,
  FaPlus,
  FaTrash,
  FaCheckCircle,
  FaClock,
  FaCircle,
  FaUser,
  FaMapMarkerAlt,
  FaTimes,
  FaImage,
  FaFileAlt,
} from "react-icons/fa";

function DetalhesProjetoEmProgresso({ projeto, onVoltar }) {
  const [tarefas, setTarefas] = useState(projeto.tarefas || []);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [tarefaAcompanhamentoAberta, setTarefaAcompanhamentoAberta] =
    useState(null);

  const [novaTarefa, setNovaTarefa] = useState({
    nome: "",
    descricao: "",
    dataInicio: "",
    dataTermino: "",
    status: "Não iniciada",
  });

  const [novoAcompanhamento, setNovoAcompanhamento] = useState({
    descricao: "",
    fotos: [],
    arquivos: [],
  });

  function calcularProgresso() {
    if (tarefas.length === 0) return 0;

    const concluidas = tarefas.filter(
      (tarefa) => tarefa.status === "Concluída"
    ).length;

    return Math.round((concluidas / tarefas.length) * 100);
  }

  function limparFormulario() {
    setNovaTarefa({
      nome: "",
      descricao: "",
      dataInicio: "",
      dataTermino: "",
      status: "Não iniciada",
    });
  }

  function limparAcompanhamento() {
    setNovoAcompanhamento({
      descricao: "",
      fotos: [],
      arquivos: [],
    });
  }

  function adicionarTarefa() {
    if (
      novaTarefa.nome.trim() === "" ||
      novaTarefa.dataInicio === "" ||
      novaTarefa.dataTermino === ""
    ) {
      return;
    }

    setTarefas([
      ...tarefas,
      {
        id: Date.now(),
        ...novaTarefa,
        acompanhamentos: [],
      },
    ]);

    limparFormulario();
    setMostrarFormulario(false);
  }

  function cancelarNovaTarefa() {
    limparFormulario();
    setMostrarFormulario(false);
  }

  function removerTarefa(id) {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  }

  function alterarStatus(id, novoStatus) {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, status: novoStatus } : tarefa
      )
    );
  }

  function escolherIconeStatus(status) {
    if (status === "Concluída") return <FaCheckCircle />;
    if (status === "Em andamento") return <FaClock />;
    return <FaCircle />;
  }

  function abrirAcompanhamento(idTarefa) {
    if (tarefaAcompanhamentoAberta === idTarefa) {
      setTarefaAcompanhamentoAberta(null);
      limparAcompanhamento();
      return;
    }

    setTarefaAcompanhamentoAberta(idTarefa);
    limparAcompanhamento();
  }

  function adicionarFotos(evento) {
    const arquivosSelecionados = Array.from(evento.target.files);

    const fotosFormatadas = arquivosSelecionados.map((foto) => ({
      id: Date.now() + Math.random(),
      nome: foto.name,
      url: URL.createObjectURL(foto),
    }));

    setNovoAcompanhamento({
      ...novoAcompanhamento,
      fotos: [...novoAcompanhamento.fotos, ...fotosFormatadas],
    });
  }

  function adicionarArquivos(evento) {
    const arquivosSelecionados = Array.from(evento.target.files);

    const arquivosFormatados = arquivosSelecionados.map((arquivo) => ({
      id: Date.now() + Math.random(),
      nome: arquivo.name,
    }));

    setNovoAcompanhamento({
      ...novoAcompanhamento,
      arquivos: [...novoAcompanhamento.arquivos, ...arquivosFormatados],
    });
  }

  function salvarAcompanhamento(idTarefa) {
    if (
      novoAcompanhamento.descricao.trim() === "" &&
      novoAcompanhamento.fotos.length === 0 &&
      novoAcompanhamento.arquivos.length === 0
    ) {
      return;
    }

    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === idTarefa
          ? {
              ...tarefa,
              acompanhamentos: [
                ...(tarefa.acompanhamentos || []),
                {
                  id: Date.now(),
                  data: new Date().toLocaleDateString("pt-BR"),
                  descricao: novoAcompanhamento.descricao,
                  fotos: novoAcompanhamento.fotos,
                  arquivos: novoAcompanhamento.arquivos,
                },
              ],
            }
          : tarefa
      )
    );

    limparAcompanhamento();
    setTarefaAcompanhamentoAberta(null);
  }

  function removerAcompanhamento(idTarefa, idAcompanhamento) {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === idTarefa
          ? {
              ...tarefa,
              acompanhamentos: tarefa.acompanhamentos.filter(
                (item) => item.id !== idAcompanhamento
              ),
            }
          : tarefa
      )
    );
  }

  const progressoAtual = calcularProgresso();

  return (
    <div className="ContainerDetalhesProjetoEmProgresso">
      <button className="BotaoVoltarDetalhesProgresso" onClick={onVoltar}>
        <FaArrowLeft />
        Voltar para projetos
      </button>

      <div className="TopoDetalhesEmProgresso">
        <div>
          <span>Projeto em progresso</span>
          <h2>{projeto.titulo}</h2>
          <p>{projeto.descricao}</p>
        </div>

        <div className="CardClienteLocalProjeto">
          <div className="ItemClienteLocalProjeto">
            <FaUser />
            <span>{projeto.cliente || "Cliente não informado"}</span>
          </div>

          <div className="ItemClienteLocalProjeto">
            <FaMapMarkerAlt />
            <span>{projeto.localizacao || "Local não informado"}</span>
          </div>
        </div>
      </div>

      <div className="AreaBarraProgressoDetalhes">
        <div className="LinhaTituloBarraDetalhes">
          <h3>Andamento do projeto</h3>
          <strong>{progressoAtual}%</strong>
        </div>

        <div className="BarraDetalhesProjeto">
          <div
            style={{
              width: `${progressoAtual}%`,
              backgroundColor: projeto.cor,
            }}
          ></div>
        </div>
      </div>

      <section className="CardTarefasDetalhesProgresso">
        <div className="TopoTarefasProjeto">
          <h3>Tarefas do projeto</h3>

          {!mostrarFormulario ? (
            <button
              className="BotaoAbrirNovaTarefa"
              onClick={() => setMostrarFormulario(true)}
            >
              <FaPlus />
              Nova tarefa
            </button>
          ) : (
            <button
              className="BotaoCancelarNovaTarefa"
              onClick={cancelarNovaTarefa}
            >
              <FaTimes />
              Cancelar
            </button>
          )}
        </div>

        {mostrarFormulario && (
          <div className="FormularioNovaTarefaProgresso">
            <input
              type="text"
              placeholder="Nome da nova tarefa"
              value={novaTarefa.nome}
              onChange={(evento) =>
                setNovaTarefa({ ...novaTarefa, nome: evento.target.value })
              }
            />

            <textarea
              placeholder="Descrição da tarefa"
              value={novaTarefa.descricao}
              onChange={(evento) =>
                setNovaTarefa({
                  ...novaTarefa,
                  descricao: evento.target.value,
                })
              }
            ></textarea>

            <div className="LinhaNovaTarefaProgresso">
              <input
                type="date"
                value={novaTarefa.dataInicio}
                onChange={(evento) =>
                  setNovaTarefa({
                    ...novaTarefa,
                    dataInicio: evento.target.value,
                  })
                }
              />

              <input
                type="date"
                value={novaTarefa.dataTermino}
                onChange={(evento) =>
                  setNovaTarefa({
                    ...novaTarefa,
                    dataTermino: evento.target.value,
                  })
                }
              />

              <select
                value={novaTarefa.status}
                onChange={(evento) =>
                  setNovaTarefa({
                    ...novaTarefa,
                    status: evento.target.value,
                  })
                }
              >
                <option>Não iniciada</option>
                <option>Em andamento</option>
                <option>Concluída</option>
              </select>

              <button onClick={adicionarTarefa}>
                <FaPlus />
              </button>
            </div>
          </div>
        )}

        <div className="ListaTarefasDetalhesProgresso">
          {tarefas.map((tarefa) => (
            <div className="ItemTarefaDetalhesProgresso" key={tarefa.id}>
              <div
                className={`IconeStatusTarefa ${tarefa.status.replace(
                  " ",
                  ""
                )}`}
              >
                {escolherIconeStatus(tarefa.status)}
              </div>

              <div className="ConteudoTarefaProgresso">
                <div className="TopoItemTarefa">
                  <h4>{tarefa.nome}</h4>

                  <button
                    className="BotaoRemoverTarefaProgresso"
                    onClick={() => removerTarefa(tarefa.id)}
                  >
                    <FaTrash />
                  </button>
                </div>

                {tarefa.descricao && <p>{tarefa.descricao}</p>}

                <span>
                  Início: {tarefa.dataInicio} | Término: {tarefa.dataTermino}
                </span>

                <select
                  value={tarefa.status}
                  onChange={(evento) =>
                    alterarStatus(tarefa.id, evento.target.value)
                  }
                >
                  <option>Não iniciada</option>
                  <option>Em andamento</option>
                  <option>Concluída</option>
                </select>

                <div className="AreaAcompanhamentoTarefa">
                  <button
                    className="BotaoAbrirAcompanhamento"
                    onClick={() => abrirAcompanhamento(tarefa.id)}
                  >
                    <FaPlus />
                    Adicionar acompanhamento
                  </button>

                  {tarefaAcompanhamentoAberta === tarefa.id && (
                    <div className="FormularioAcompanhamentoTarefa">
                      <textarea
                        placeholder="Descreva o que foi feito nesta tarefa"
                        value={novoAcompanhamento.descricao}
                        onChange={(evento) =>
                          setNovoAcompanhamento({
                            ...novoAcompanhamento,
                            descricao: evento.target.value,
                          })
                        }
                      ></textarea>

                      <div className="LinhaUploadsAcompanhamento">
                        <label>
                          <FaImage />
                          Fotos
                          <input
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={adicionarFotos}
                          />
                        </label>

                        <label>
                          <FaFileAlt />
                          Arquivos
                          <input
                            type="file"
                            multiple
                            onChange={adicionarArquivos}
                          />
                        </label>

                        <button onClick={() => salvarAcompanhamento(tarefa.id)}>
                          Salvar
                        </button>
                      </div>

                      {(novoAcompanhamento.fotos.length > 0 ||
                        novoAcompanhamento.arquivos.length > 0) && (
                        <div className="PreviaUploadsAcompanhamento">
                          {novoAcompanhamento.fotos.map((foto) => (
                            <span key={foto.id}>{foto.nome}</span>
                          ))}

                          {novoAcompanhamento.arquivos.map((arquivo) => (
                            <span key={arquivo.id}>{arquivo.nome}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {tarefa.acompanhamentos?.length > 0 && (
                    <div className="ListaAcompanhamentosTarefa">
                      {tarefa.acompanhamentos.map((item) => (
                        <div className="CardAcompanhamentoTarefa" key={item.id}>
                          <div className="TopoAcompanhamentoSalvo">
                            <strong>Atualização - {item.data}</strong>

                            <button
                              onClick={() =>
                                removerAcompanhamento(tarefa.id, item.id)
                              }
                            >
                              <FaTrash />
                            </button>
                          </div>

                          {item.descricao && <p>{item.descricao}</p>}

                          {item.fotos.length > 0 && (
                            <div className="FotosAcompanhamento">
                              {item.fotos.map((foto) => (
                                <img
                                  src={foto.url}
                                  alt={foto.nome}
                                  key={foto.id}
                                />
                              ))}
                            </div>
                          )}

                          {item.arquivos.length > 0 && (
                            <div className="ArquivosAcompanhamento">
                              {item.arquivos.map((arquivo) => (
                                <span key={arquivo.id}>
                                  <FaFileAlt />
                                  {arquivo.nome}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default DetalhesProjetoEmProgresso;