import "./CardEncontrarClientes.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function CardEncontrarClientes({
  foto,
  nome,
  projeto,
  telefone,
  email,
  cidade,
  status,
  onClick,
}) {
  return (
    <div className="CardCliente" onClick={onClick}>
      <div className="TopoCardCliente">
        <div className="AreaFotoCliente">
          <img src={foto} alt={nome} />

          <span
            className={`StatusCliente ${
              status === "ativo" ? "StatusAtivo" : "StatusInativo"
            }`}
          ></span>
        </div>

        <div className="InfoClienteTopo">
          <h3>{nome}</h3>
          <span>Cliente</span>
          <p>{projeto}</p>
        </div>
      </div>

      <div className="DadosCliente">
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

export default CardEncontrarClientes;