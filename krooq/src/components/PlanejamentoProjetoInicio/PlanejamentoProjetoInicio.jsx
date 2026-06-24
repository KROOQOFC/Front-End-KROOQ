import "./PlanejamentoProjetoInicio.css";
import { useState } from "react";
import {
  FaArrowLeft,
  FaPlus,
  FaTrash,
  FaMapMarkerAlt,
  FaUser,
} from "react-icons/fa";

function PlanejamentoProjetoInicio({ projeto, onVoltar }) {
  const [tarefas, setTarefas] = useState([]);
  const [materiais, setMateriais] = useState([]);

  const [novaTarefa, setNovaTarefa] = useState({
    nome: "",
    descricao: "",
    dataInicio: "",
    dataTermino: "",
    status: "Não iniciada",
  });

  const [novoMaterial, setNovoMaterial] = useState({
    nome: "",
    quantidade: "",
  });

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
      },
    ]);

    setNovaTarefa({
      nome: "",
      descricao: "",
      dataInicio: "",
      dataTermino: "",
      status: "Não iniciada",
    });
  }

  function removerTarefa(id) {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  }

  function adicionarMaterial() {
    if (
      novoMaterial.nome.trim() === "" ||
      novoMaterial.quantidade.trim() === ""
    ) {
      return;
    }

    setMateriais([
      ...materiais,
      {
        id: Date.now(),
        ...novoMaterial,
      },
    ]);

    setNovoMaterial({
      nome: "",
      quantidade: "",
    });
  }

  function removerMaterial(id) {
    setMateriais(materiais.filter((material) => material.id !== id));
  }

  function salvarPlanejamento() {
    const planejamento = {
      projeto,
      tarefas,
      materiais,
    };

    console.log("Planejamento salvo:", planejamento);
    alert("Planejamento salvo com sucesso!");
  }

  if (!projeto) return null;

  return (
    <div className="ContainerPlanejamentoProjetoInicio">
      <button className="BotaoVoltarPlanejamentoInicio" onClick={onVoltar}>
        <FaArrowLeft />
        Voltar para projetos
      </button>

      <div className="ConteudoPlanejamentoProjetoInicio">
        <div className="TopoPlanejamentoProjetoInicio">
          <div>
            <span>Planejamento do projeto</span>
            <h2>{projeto.titulo}</h2>
            <p>{projeto.descricao}</p>
          </div>

          <div className="InfoResumoPlanejamentoInicio">
            <div>
              <FaUser />
              <span>{projeto.cliente || "Cliente não informado"}</span>
            </div>

            <div>
              <FaMapMarkerAlt />
              <span>{projeto.localidade || "Localidade não informada"}</span>
            </div>
          </div>
        </div>

        <section className="CardPlanejamentoInicio">
          <div className="TituloSecaoPlanejamentoInicio">
            <h3>Tarefas do projeto</h3>
          </div>

          <div className="FormularioTarefaPlanejamentoInicio">
            <input
              type="text"
              placeholder="Nome da tarefa"
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

            <div className="LinhaDatasTarefaInicio">
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

          <div className="ListaPlanejamentoInicioItens ListaTarefasInicio">
            {tarefas.length === 0 ? (
              <p className="MensagemListaVaziaInicio">
                Nenhuma tarefa adicionada ainda.
              </p>
            ) : (
              tarefas.map((tarefa) => (
                <div className="ItemPlanejamentoInicio" key={tarefa.id}>
                  <div>
                    <h4>{tarefa.nome}</h4>

                    {tarefa.descricao && (
                      <p className="DescricaoTarefaInicio">
                        {tarefa.descricao}
                      </p>
                    )}

                    <p>
                      Início: {tarefa.dataInicio} | Término:{" "}
                      {tarefa.dataTermino}
                    </p>

                    <span>{tarefa.status}</span>
                  </div>

                  <button onClick={() => removerTarefa(tarefa.id)}>
                    <FaTrash />
                  </button>
                </div>
              ))
            )}
          </div>
        </section>

        <section className="CardPlanejamentoInicio">
          <div className="TituloSecaoPlanejamentoInicio">
            <h3>Materiais necessários</h3>
          </div>

          <div className="FormularioMateriaisInicio">
            <input
              type="text"
              placeholder="Nome do material"
              value={novoMaterial.nome}
              onChange={(evento) =>
                setNovoMaterial({
                  ...novoMaterial,
                  nome: evento.target.value,
                })
              }
            />

            <input
              type="text"
              placeholder="Quantidade"
              value={novoMaterial.quantidade}
              onChange={(evento) =>
                setNovoMaterial({
                  ...novoMaterial,
                  quantidade: evento.target.value,
                })
              }
            />

            <button onClick={adicionarMaterial}>
              <FaPlus />
            </button>
          </div>

          <div className="ListaPlanejamentoInicioItens">
            {materiais.length === 0 ? (
              <p className="MensagemListaVaziaInicio">
                Nenhum material adicionado ainda.
              </p>
            ) : (
              materiais.map((material) => (
                <div className="ItemPlanejamentoInicio" key={material.id}>
                  <div>
                    <h4>{material.nome}</h4>
                    <p>Quantidade: {material.quantidade}</p>
                  </div>

                  <button onClick={() => removerMaterial(material.id)}>
                    <FaTrash />
                  </button>
                </div>
              ))
            )}
          </div>
        </section>

        <div className="RodapePlanejamentoProjetoInicio">
          <button
            className="BotaoSalvarPlanejamentoInicio"
            onClick={salvarPlanejamento}
          >
            Salvar planejamento
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlanejamentoProjetoInicio;