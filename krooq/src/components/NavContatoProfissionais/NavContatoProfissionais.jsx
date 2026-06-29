import "./NavContatoProfissionais.css";
import { FaPlus } from "react-icons/fa";

function NavContatoProfissionais({
  profissionais = [],
  onSelecionarProfissional,
  profissionalSelecionado,
}) {
  return (
    <div className="NavContatoProfissionais">
      <div className="TopoNavContatoProfissionais">
        <h2>Mensagens</h2>
        <FaPlus className="IconeAdicionarMensagemProfissional" />
      </div>

      <div className="ListaConversasProfissionais">
        {profissionais.map((profissional, index) => {
          const estaSelecionado =
            profissionalSelecionado?.nome === profissional.nome;

          return (
            <button
              key={index}
              className={`ItemConversaProfissional ${
                estaSelecionado ? "ItemConversaProfissionalSelecionado" : ""
              }`}
              onClick={() => onSelecionarProfissional(profissional)}
            >
              <img src={profissional.foto} alt={profissional.nome} />

              <div className="TextoConversaProfissional">
                <div className="LinhaNomeProfissional">
                  <h3>{profissional.nome}</h3>
                  <span>{profissional.areaAtuacao || "Profissional"}</span>
                </div>

                <p>
                  {profissional.ultimaMensagem ||
                    "Nenhuma mensagem enviada ainda."}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default NavContatoProfissionais;