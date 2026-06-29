import "./CardProjetoCliente.css";

function CardProjetoCliente({ projeto }) {
  return (
    <div className="CardProjetoCliente">
      <div className="TopoCardProjetoCliente">
        <span
          className="BolinhaCardProjetoCliente"
          style={{ backgroundColor: projeto.cor }}
        ></span>

        <h3>{projeto.titulo}</h3>
      </div>

      <p>{projeto.descricao}</p>

      <div className="BarraCardProjetoCliente">
        <div
          className="BarraCardProjetoClientePreenchida"
          style={{
            width: projeto.progresso,
            backgroundColor: projeto.cor,
          }}
        ></div>
      </div>

      <div className="RodapeCardProjetoCliente">
        <span>{projeto.status}</span>
        <strong>{projeto.prazo}</strong>
      </div>
    </div>
  );
}

export default CardProjetoCliente;