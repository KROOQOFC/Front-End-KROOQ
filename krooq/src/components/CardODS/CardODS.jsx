import "./CardODS.css";

function CardODS({
  imagem,
  alt,
  descricao,
  tituloTag,
  classeTexto = "",
  classeTag = "",
}) {
  return (
    <div className="card-ods">
      <div className="topo-ods">
        <img src={imagem} alt={alt} />
      </div>

      <p className={`texto-ods ${classeTexto}`}>
        <strong className="tag-verde-sobre-nos">
          Nós alinhamos
        </strong>{" "}
        {descricao}
      </p>

      <span className={`tags-ods ${classeTag}`}>
        {tituloTag}
      </span>
    </div>
  );
}

export default CardODS;