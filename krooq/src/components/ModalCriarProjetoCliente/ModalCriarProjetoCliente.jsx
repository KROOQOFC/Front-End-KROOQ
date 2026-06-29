import "./ModalCriarProjetoCliente.css";
import { FaTimes, FaImage, FaPaperPlane } from "react-icons/fa";

function ModalCriarProjetoCliente({ aberto, aoFechar }) {
  if (!aberto) return null;

  return (
    <div className="OverlayModalCriarProjetoCliente">
      <div className="ModalCriarProjetoCliente">
        <div className="TopoModalCriarProjetoCliente">
          <div>
            <p>Novo projeto</p>
            <h2>Cadastrar solicitação</h2>
          </div>

          <button
            className="BotaoFecharModalCriarProjetoCliente"
            onClick={aoFechar}
          >
            <FaTimes />
          </button>
        </div>

        <form className="FormularioCriarProjetoCliente">
          <div className="GrupoCampoProjetoCliente CampoGrandeProjetoCliente">
            <label>Nome do projeto</label>
            <input type="text" placeholder="Ex: Reforma da cozinha" />
          </div>

          <div className="GrupoCampoProjetoCliente">
            <label>Tipo de imóvel</label>
            <input type="text" placeholder="Casa, apartamento, comércio..." />
          </div>

          <div className="GrupoCampoProjetoCliente">
            <label>Localização</label>
            <input type="text" placeholder="Cidade / Região da obra" />
          </div>

          <div className="GrupoCampoProjetoCliente">
            <label>Data estimada de início</label>
            <input type="date" />
          </div>

          <div className="GrupoCampoProjetoCliente">
            <label>Data estimada de fim</label>
            <input type="date" />
          </div>

          <div className="GrupoCampoProjetoCliente">
            <label>Orçamento médio</label>
            <input type="text" placeholder="Ex: R$ 15.000" />
          </div>

          <div className="GrupoCampoProjetoCliente">
            <label>Profissional desejado</label>
            <input type="text" placeholder="Pode deixar em branco" />
          </div>

          <div className="GrupoCampoProjetoCliente CampoGrandeProjetoCliente">
            <label>Descrição do projeto</label>
            <textarea placeholder="Descreva o que você deseja no projeto, ideias, necessidades, estilo, materiais e observações importantes..." />
          </div>

          <div className="GrupoCampoProjetoCliente CampoGrandeProjetoCliente">
            <label>Fotos de referência ou estado atual</label>

            <label className="UploadFotosProjetoCliente">
              <FaImage />
              <span>Clique para adicionar imagens</span>
              <small>Referências, ideias ou fotos de como o local está atualmente</small>
              <input type="file" multiple accept="image/*" />
            </label>
          </div>

          <div className="BotoesModalCriarProjetoCliente">
            <button
              type="button"
              className="BotaoCancelarCriarProjetoCliente"
              onClick={aoFechar}
            >
              Cancelar
            </button>

            <button type="button" className="BotaoEnviarCriarProjetoCliente">
              Enviar projeto <FaPaperPlane />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalCriarProjetoCliente;