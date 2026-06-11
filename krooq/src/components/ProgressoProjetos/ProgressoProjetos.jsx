import "./ProgressoProjetos.css";
import { FaEnvelope, FaPlus } from "react-icons/fa";

function ProgressoProjetos({
  progresso = 0,
  TempoRestantes = "0 Dias Restantes",
}) {
  return (
    <section className="ContainerQuantidadeProjetos">
      <div className="QuantidadeProjetoInfo">
        <h2 className="TituloQuantidadeProjetos">Projetos</h2>

        <div className="ProjetoBotoes">
          <button className="BotaoEnvios">
            <FaEnvelope />
            32 Envios
          </button>

          <button className="BotaoAdicionar">
            <FaPlus />
            Adicionar
          </button>
        </div>
      </div>

      <div className="ProjetoProgressoArea">
        <div className="BarraProgressoProjetos">
          <div
            className="BarraProgressoLaranja"
            style={{ width: `${progresso}%` }}
          >
            {progresso}%
          </div>
        </div>
      </div>

      <strong className="DiasRestantes">{TempoRestantes}</strong>
    </section>
  );
}

export default ProgressoProjetos;