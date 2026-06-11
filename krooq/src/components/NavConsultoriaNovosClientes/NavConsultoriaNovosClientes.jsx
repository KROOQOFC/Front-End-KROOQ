import "./NavConsultoriaNovosClientes.css";
import { FaUserPlus, FaComments } from "react-icons/fa";

function NavConsultoriaNovosClientes({ mostrandoClientes, onTrocarTela }) {
  return (
    <section className="ConsultoriaCard">
      <div className="ConsultoriaConteudo">
        <h2>Consultoria</h2>

        <button className="BotaoAdicionarCliente" onClick={onTrocarTela}>
          {mostrandoClientes ? <FaComments /> : <FaUserPlus />}
          {mostrandoClientes ? "Voltar para chat" : "Adicionar clientes"}
        </button>
      </div>
    </section>
  );
}

export default NavConsultoriaNovosClientes;