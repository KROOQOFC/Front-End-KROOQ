import "./ListaProjetosProfissional.css";
import { useState } from "react";
import { FaPen } from "react-icons/fa";
import ModalListaProjetos from "../ModalListaProjetos/ModalListaProjetos";

function ListaProjetosProfissional({ projetos = [], aoIniciarProjeto }) {
  const [modalListaProjetos, setModalListaProjetos] = useState(false);

  return (
    <>
      <div className="CardListaProjetos">
        <div className="TopoListaProjetos">
          <h3>Lista de Projetos ({projetos.length})</h3>

          <button
            className="BotaoEditarListaProjetos"
            onClick={() => setModalListaProjetos(true)}
          >
            <FaPen className="IconeEditarLista" />
          </button>
        </div>

        <div className="ListaProjetosIniciar">
          {projetos.map((projeto) => (
            <div className="ProjetoInfoiniciar" key={projeto.id}>
              <div className="TituloProjetoIniciar">
                <span
                  className="BolinhaProjetoIniciar"
                  style={{
                    backgroundColor: projeto.cor,
                  }}
                ></span>

                <h4>{projeto.titulo}</h4>
              </div>

              <p>{projeto.descricao}</p>

              <div className="BarraProjetoIniciar">
                <div
                  className="BarraProjetoIniciarPreenchida"
                  style={{
                    width: projeto.progresso,
                    backgroundColor: projeto.cor,
                  }}
                ></div>
              </div>

              <span className="PrazoInicioProjeto">{projeto.prazo}</span>
            </div>
          ))}
        </div>
      </div>

      <ModalListaProjetos
        aberto={modalListaProjetos}
        aoFechar={() => setModalListaProjetos(false)}
        projetos={projetos}
        aoIniciarProjeto={aoIniciarProjeto}
      />
    </>
  );
}

export default ListaProjetosProfissional;