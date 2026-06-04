import "./CardMVV.css";

function CardMVV({ icone, titulo, descricao }) {
  return (
    <div className="card-mvv">
      <div className="icone-mvv">
        <img src={icone} alt={titulo} />
      </div>

      <h3>{titulo}</h3>

      <p>{descricao}</p>
    </div>
  );
}

export default CardMVV;