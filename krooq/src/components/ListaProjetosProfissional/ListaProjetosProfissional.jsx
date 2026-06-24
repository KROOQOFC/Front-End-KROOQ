import "./ListaProjetosProfissional.css";
import { FaPen } from "react-icons/fa";

function ListaProjetosProfissional({ projetos = [] }) {
  return (
    <div className="CardListaProjetos">

      <div className="TopoListaProjetos">
        <h3>Lista de Projetos ({projetos.length})</h3>
        <FaPen className="IconeEditarLista" />
      </div>

      <div className="ListaProjetosIniciar">

        {projetos.map((projeto, index) => (
          <div className="ProjetoInfoiniciar" key={index}>

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

            <span className="PrazoInicioProjeto">
              {projeto.prazo}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}

export default ListaProjetosProfissional;

/*

import "./ListaProjetosProfissional.css";
import { FaPen } from "react-icons/fa";

function ListaProjetosProfissional({ projetos = [] }) {
  return (
    <div className="CardListaProjetos">
      <div className="TopoListaProjetos">
        <h3>Lista de Projetos ({projetos.length})</h3>
        <FaPen className="IconeEditarLista" />
      </div>

      <div className="ListaProjetosIniciar">
        {projetos.map((projeto) => (
          <div className="ProjetoInfoiniciar" key={projeto.id}>
            <div className="TituloProjetoIniciar">
              <span
                className="BolinhaProjetoIniciar"
                style={{
                  backgroundColor: "#4CAF50",
                }}
              />

              <h4>{projeto.nome}</h4>
            </div>

            <p>{projeto.descricao}</p>

            <div className="BarraProjetoIniciar">
              <div
                className="BarraProjetoIniciarPreenchida"
                style={{
                  width: `${projeto.progresso}%`,
                  backgroundColor: "#4CAF50",
                }}
              />
            </div>

            <span className="PrazoInicioProjeto">
              {new Date(projeto.dataEntrega).toLocaleDateString("pt-BR")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListaProjetosProfissional;
*/