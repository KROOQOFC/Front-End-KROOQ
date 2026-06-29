import "./CardEncontrarProfissionais.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function CardEncontrarProfissionais({
  foto,
  nome,
  areaAtuacao,
  telefone,
  email,
  cidade,
  status,
  onClick,
}) {
  return (
    <div className="CardProfissional" onClick={onClick}>
      <div className="TopoCardProfissional">
        <div className="AreaFotoProfissional">
          <img src={foto} alt={nome} />

          <span
            className={`StatusProfissional ${
              status === "ativo"
                ? "StatusProfissionalAtivo"
                : "StatusProfissionalInativo"
            }`}
          ></span>
        </div>

        <div className="InfoProfissionalTopo">
          <h3>{nome}</h3>
          <span>Profissional</span>
          <p>{areaAtuacao}</p>
        </div>
      </div>

      <div className="DadosProfissional">
        <p>
          <FaPhoneAlt />
          {telefone}
        </p>

        <p>
          <FaEnvelope />
          {email}
        </p>

        <p>
          <FaMapMarkerAlt />
          {cidade}
        </p>
      </div>
    </div>
  );
}

export default CardEncontrarProfissionais;