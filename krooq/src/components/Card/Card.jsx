import "./Card.css";

function Card({ titulo, texto, tipo }) {
  return (
    <div className={`card-info ${tipo || ""}`}>
      <h3>{titulo}</h3>
      <p>{texto}</p>
    </div>
  );
}

export default Card;