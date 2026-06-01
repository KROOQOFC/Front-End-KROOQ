import "./BlocoTarefas.css";
import { FiPlus, FiEdit2 } from "react-icons/fi";

function BlocoTarefas({
  dataInicio = "22 de Jan, 2026",
  dataFim = "30 de Mai, 2026",
  titulo = "Briefing e Estudo Preliminar",
  subtitulo = "Necessidades do Cliente",
  progresso = 70,
  prazo = "Faltam 2 dias",
  cor = "#c90000",
  pessoas = [],
  onEditar,
  onAdicionarPessoa,
}) {
  return (
    <article className="ContainerBlocoTarefas">
      <p className="DataCardTarefa">
        {dataInicio} – {dataFim}
      </p>

      <h3 className="TituloCardTarefa">{titulo}</h3>

      <p className="SubtituloCardTarefa">{subtitulo}</p>

      <div className="AreaProgressoCard">
        <p>Progresso</p>

        <div className="BarraProgressoCard">
          <div
            className="ProgressoAtualCard"
            style={{
              width: `${progresso}%`,
              backgroundColor: cor,
            }}
          ></div>
        </div>

        <span>{progresso}%</span>
      </div>

      <div className="LinhaCardTarefa"></div>

      <div className="RodapeCardTarefa">
        <div className="PessoasCardTarefa">
          {pessoas.map((pessoa, index) => (
            <img
              key={index}
              src={pessoa}
              alt="Pessoa do projeto"
              className="FotoPessoaCard"
            />
          ))}

          <button
            className="BotaoAdicionarPessoa"
            onClick={onAdicionarPessoa}
            style={{ backgroundColor: cor }}
          >
            <FiPlus />
          </button>
        </div>

        <div
          className="PrazoCardTarefa"
          style={{ backgroundColor: cor }}
        >
          {prazo}
        </div>
      </div>

      <button className="BotaoEditarCard" onClick={onEditar}>
        <FiEdit2 />
      </button>
    </article>
  );
}

export default BlocoTarefas;