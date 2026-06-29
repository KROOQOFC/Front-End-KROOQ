import "./NavConsultoriaNovosProfissionais.css";
import { FaUserPlus, FaComments } from "react-icons/fa";

function NavConsultoriaNovosProfissionais({
  mostrandoProfissionais,
  onTrocarTela,
}) {
  return (
    <section className="ConsultoriaClienteCard">
      <div className="ConsultoriaClienteConteudo">
        <h2>Consultoria</h2>

        <button
          className="BotaoAdicionarProfissional"
          onClick={onTrocarTela}
        >
          {mostrandoProfissionais ? <FaComments /> : <FaUserPlus />}

          {mostrandoProfissionais
            ? "Voltar para conversas"
            : "Encontrar profissionais"}
        </button>
      </div>
    </section>
  );
}

export default NavConsultoriaNovosProfissionais;