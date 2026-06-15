import "./ModalCriarProjeto.css";
import { FaTimes } from "react-icons/fa";

function ModalCriarProjeto({
  aberto,
  aoFechar,
  formulario,
  setFormulario,
  aoSalvar,
}) {
  if (!aberto) return null;

  return (
    <div className="OverlayCriarProjeto">

      <div className="ContainerCriarProjeto">

        <div className="TopoCriarProjeto">

          <h2>Novo Projeto</h2>

          <button
            className="BotaoFecharProjeto"
            onClick={aoFechar}
          >
            <FaTimes />
          </button>

        </div>

        <div className="FormularioCriarProjeto">

          <input
            placeholder="Nome do projeto"
            value={formulario.nome}
            onChange={(e) =>
              setFormulario({
                ...formulario,
                nome: e.target.value,
              })
            }
          />

          <input
            placeholder="Tipo do ambiente"
            value={formulario.tipoAmbiente}
            onChange={(e) =>
              setFormulario({
                ...formulario,
                tipoAmbiente: e.target.value,
              })
            }
          />

          <textarea
            placeholder="Descrição"
            value={formulario.descricao}
            onChange={(e) =>
              setFormulario({
                ...formulario,
                descricao: e.target.value,
              })
            }
          />

          <div className="LinhaMedidasProjeto">

            <input
              type="number"
              placeholder="Largura"
              value={formulario.largura}
              onChange={(e) =>
                setFormulario({
                  ...formulario,
                  largura: e.target.value,
                })
              }
            />

            <input
              type="number"
              placeholder="Comprimento"
              value={formulario.comprimento}
              onChange={(e) =>
                setFormulario({
                  ...formulario,
                  comprimento: e.target.value,
                })
              }
            />

            <input
              type="number"
              placeholder="Altura"
              value={formulario.altura}
              onChange={(e) =>
                setFormulario({
                  ...formulario,
                  altura: e.target.value,
                })
              }
            />

          </div>

          <div className="LinhaDatasProjeto">

            <input
              type="date"
              value={formulario.dataInicio}
              onChange={(e) =>
                setFormulario({
                  ...formulario,
                  dataInicio: e.target.value,
                })
              }
            />

            <input
              type="date"
              value={formulario.dataEntrega}
              onChange={(e) =>
                setFormulario({
                  ...formulario,
                  dataEntrega: e.target.value,
                })
              }
            />

          </div>

          <button
            className="BotaoSalvarProjeto"
            onClick={aoSalvar}
          >
            Criar Projeto
          </button>

        </div>

      </div>

    </div>
  );
}

export default ModalCriarProjeto;