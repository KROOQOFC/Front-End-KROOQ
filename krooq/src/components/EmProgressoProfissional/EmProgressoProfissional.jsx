import "./EmProgressoProfissional.css";
import { useState } from "react";
import { FaPen } from "react-icons/fa";
import ModalProjetosEmProgresso from "../ModalProjetosEmProgresso/ModalProjetosEmProgresso";

function EmProgressoProfissional({ projetos = [] }) {
  const [modalAberto, setModalAberto] = useState(false);

  return (
    <>
      <div className="CardEmProgresso">
        <div className="TopoEmProgresso">
          <h3>Em progresso ({projetos.length})</h3>

          <button
            className="BotaoEditarEmProgresso"
            onClick={() => setModalAberto(true)}
          >
            <FaPen className="IconeEditar" />
          </button>
        </div>

        <div className="ListaProjetos">
          {projetos.map((projeto, index) => (
            <div className="ProjetoInfo" key={index}>
              <div className="TituloProjeto">
                <span
                  className="BolinhaProjeto"
                  style={{
                    backgroundColor: projeto.cor,
                  }}
                ></span>

                <h4>{projeto.titulo}</h4>
              </div>

              <p>{projeto.descricao}</p>

              <div className="BarraProjeto">
                <div
                  className="BarraProjetoPreenchida"
                  style={{
                    width: projeto.progresso,
                    backgroundColor: projeto.cor,
                  }}
                ></div>
              </div>

              <span className="PrazoProjeto">{projeto.prazo}</span>
            </div>
          ))}
        </div>
      </div>

      <ModalProjetosEmProgresso
        aberto={modalAberto}
        aoFechar={() => setModalAberto(false)}
        projetos={projetos}
      />
    </>
  );
}

export default EmProgressoProfissional;