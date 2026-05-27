import "./ProcessoCentral.css";

function ProcessoCentral({
  iconeTopo,
  titulo,
  responsavel,
  iconeStatus,
  destaqueStatus = false,
  onMenu,
}) {
  return (
    <div className="CardProcesso">
      <div className="TopoCardProcesso">
        <img
          className="IconeTopoProcesso"
          src={iconeTopo}
          alt="Ícone do processo"
        />

        <button className="MenuProcesso" onClick={onMenu}>
          ...
        </button>
      </div>

      <h3 className="TituloProcesso">{titulo}</h3>

      <div className="RodapeProcesso">
        <p>{responsavel}</p>

        <div className={destaqueStatus ? "StatusLaranja" : "StatusSimples"}>
          <img
            className="IconeStatusProcesso"
            src={iconeStatus}
            alt="Status do processo"
          />
        </div>
      </div>
    </div>
  );
}

export default ProcessoCentral;