import "./ModalListaProjetos.css";
import { useState } from "react";
import { FaTimes, FaMapMarkerAlt, FaUser, FaPlay } from "react-icons/fa";
import PlanejamentoProjetoInicio from "../PlanejamentoProjetoInicio/PlanejamentoProjetoInicio";

function ModalListaProjetos({
  aberto,
  aoFechar,
  projetos = [],
  aoIniciarProjeto,
}) {
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);

  if (!aberto) return null;

  function fecharModal() {
    setProjetoSelecionado(null);
    aoFechar();
  }

  function voltarParaLista() {
    setProjetoSelecionado(null);
  }

  function iniciarProjeto(evento, projeto) {
    evento.stopPropagation();

    if (aoIniciarProjeto) {
      aoIniciarProjeto(projeto);
    }

    setProjetoSelecionado(null);
    aoFechar();
  }

  return (
    <div className="OverlayModalListaProjetos">
      <div className="ModalTodosProjetos">
        {projetoSelecionado ? (
          <PlanejamentoProjetoInicio
            projeto={projetoSelecionado}
            onVoltar={voltarParaLista}
          />
        ) : (
          <>
            <div className="TopoModalTodosProjetos">
              <div>
                <span>Lista completa</span>
                <h2>Projetos para dar início</h2>
              </div>

              <button onClick={fecharModal}>
                <FaTimes />
              </button>
            </div>

            <div className="ConteudoModalTodosProjetos">
              {projetos.map((projeto) => (
                <div
                  className="CardProjetoModalLista"
                  key={projeto.id}
                  onClick={() => setProjetoSelecionado(projeto)}
                >
                  <div className="CabecalhoProjetoModalLista">
                    <span
                      className="BolinhaProjetoModalLista"
                      style={{ backgroundColor: projeto.cor }}
                    ></span>

                    <div>
                      <h3>{projeto.titulo}</h3>
                      <p>{projeto.status || "Aguardando início"}</p>
                    </div>
                  </div>

                  <div className="InfoProjetoModalLista">
                    <div>
                      <FaUser />
                      <span>{projeto.cliente || "Cliente não informado"}</span>
                    </div>

                    <div>
                      <FaMapMarkerAlt />
                      <span>
                        {projeto.localidade || "Localidade não informada"}
                      </span>
                    </div>
                  </div>

                  <p className="DescricaoProjetoModalLista">
                    {projeto.descricao}
                  </p>

                  <div className="RodapeProjetoModalLista">
                    <span className="PrazoProjetoModalLista">
                      {projeto.prazo}
                    </span>

                    <button
                      className="BotaoIniciarProjetoModal"
                      onClick={(evento) => iniciarProjeto(evento, projeto)}
                    >
                      <FaPlay />
                      Iniciar projeto
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ModalListaProjetos;