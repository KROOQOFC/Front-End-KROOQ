import "./NavConsultoria.css";
import { FaUserPlus } from "react-icons/fa";

function NavConsultoria() {
  return (
    <section className="ConsultoriaCard">
      <div className="ConsultoriaConteudo">
        <h2>Consultoria</h2>

        <button className="BotaoAdicionarCliente">
          <FaUserPlus />
          Adicionar clientes
        </button>
      </div>
    </section>
  );
}

export default NavConsultoria;