import "./NavContatoClientes.css";
import { FaPlus } from "react-icons/fa";

function NavContatoClientes({
  clientes = [],
  onSelecionarCliente,
  clienteSelecionado,
}) {
  return (
    <div className="NavContatoClientes">
      <div className="TopoNavContatoClientes">
        <h2>Mensagens</h2>
        <FaPlus className="IconeAdicionarMensagem" />
      </div>

      <div className="ListaConversasClientes">
        {clientes.map((cliente, index) => {
          const estaSelecionado = clienteSelecionado?.nome === cliente.nome;

          return (
            <button
              key={index}
              className={`ItemConversaCliente ${
                estaSelecionado ? "ItemConversaSelecionado" : ""
              }`}
              onClick={() => onSelecionarCliente(cliente)}
            >
              <img src={cliente.foto} alt={cliente.nome} />

              <div className="TextoConversaCliente">
                <div className="LinhaNomeCliente">
                  <h3>{cliente.nome}</h3>
                  <span>{cliente.tipo || "Cliente"}</span>
                </div>

                <p>{cliente.ultimaMensagem}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default NavContatoClientes;