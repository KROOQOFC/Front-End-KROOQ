import "./ModalProjetosEmProgresso.css";
import { useState } from "react";
import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";
import DetalhesProjetoEmProgresso from "../DetalhesProjetoEmProgresso/DetalhesProjetoEmProgresso";

function ModalProjetosEmProgresso({ aberto, aoFechar, projetos = [] }) {
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);

  if (!aberto) return null;

  function fecharModal() {
    setProjetoSelecionado(null);
    aoFechar();
  }

  function voltarParaLista() {
    setProjetoSelecionado(null);
  }

  return createPortal(
    <div className="OverlayModalProjetosEmProgresso">
      <div className="ModalProjetosEmProgresso">
        {projetoSelecionado ? (
          <DetalhesProjetoEmProgresso
            projeto={projetoSelecionado}
            onVoltar={voltarParaLista}
          />
        ) : (
          <>
            <div className="TopoModalProjetosEmProgresso">
              <div>
                <span>Lista completa</span>
                <h2>Projetos em progresso</h2>
              </div>

              <button onClick={fecharModal}>
                <FaTimes />
              </button>
            </div>

            <div className="ConteudoModalProjetosEmProgresso">
              {projetos.map((projeto, index) => (
                <div
                  className="CardProjetoModalProgresso"
                  key={index}
                  onClick={() => setProjetoSelecionado(projeto)}
                >
                  <div className="CabecalhoProjetoModalProgresso">
                    <span
                      className="BolinhaProjetoModalProgresso"
                      style={{ backgroundColor: projeto.cor }}
                    ></span>

                    <div>
                      <h3>{projeto.titulo}</h3>
                      <p>{projeto.status || "Em andamento"}</p>
                    </div>
                  </div>

                  <p className="DescricaoProjetoModalProgresso">
                    {projeto.descricao}
                  </p>

                  <div className="BarraProjetoModalProgresso">
                    <div
                      style={{
                        width: projeto.progresso,
                        backgroundColor: projeto.cor,
                      }}
                    ></div>
                  </div>

                  <span className="PrazoProjetoModalProgresso">
                    {projeto.prazo}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>,
    document.body
  );
}

export default ModalProjetosEmProgresso;