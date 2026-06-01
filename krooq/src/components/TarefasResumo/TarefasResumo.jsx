import "./TarefasResumo.css";

function TarefasResumo({
  titulo = "Tarefas",
  data = "22 Jul 2025",
  itens = [
    { numero: 6, texto: "Em andamento" },
    { numero: 8, texto: "Por vir" },
    { numero: 2, texto: "Em espera" },
    { numero: 16, texto: "Total projetos" },
  ],
  onAdicionar,
  onRemover,
  className = "",
}) {
  return (
    <section className={`ContainerResumoTarefas ${className}`}>
      <div className="TopoResumoTarefas">
        <h2>{titulo}</h2>
        <p>{data}</p>
      </div>

      <div className="ConteudoResumoTarefas">
        <div className="IndicadoresTarefas">
          {itens.map((item, index) => (
            <div className="BlocoIndicador" key={index}>
              <div className="TextoIndicador">
                <strong>{item.numero}</strong>
                <span>{item.texto}</span>
              </div>

              {index !== itens.length - 1 && <div className="SeparadorIndicador"></div>}
            </div>
          ))}
        </div>

        <div className="BotoesTarefas">
          <button className="BotaoAdicionarTarefa" onClick={onAdicionar}>
            Adicionar tarefa
          </button>

          <button className="BotaoRemoverTarefa" onClick={onRemover}>
            Remover tarefa
          </button>
        </div>
      </div>
    </section>
  );
}

export default TarefasResumo;