import "./PesquisaConversasClientes.css";
import { FaSearch } from "react-icons/fa";

function PesquisaConversasClientes({ valorBusca, onBuscar }) {
  return (
    <div className="PesquisaConversasClientes">
      <FaSearch className="IconePesquisaConversasClientes" />

      <input
        type="text"
        placeholder="Fale com seus clientes"
        value={valorBusca}
        onChange={(e) => onBuscar(e.target.value)}
      />
    </div>
  );
}

export default PesquisaConversasClientes;