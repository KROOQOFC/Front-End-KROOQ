import "./ModalCriarProjetoCliente.css";
import { useState } from "react";
import { FaTimes, FaImage, FaPaperPlane } from "react-icons/fa";

function ModalCriarProjetoCliente({ aberto, aoFechar, aoCriarProjeto }) {
  const [dadosProjeto, setDadosProjeto] = useState({
    titulo: "",
    tipoImovel: "",
    localizacao: "",
    dataInicio: "",
    dataFim: "",
    orcamento: "",
    profissionalDesejado: "",
    descricao: "",
    fotos: [],
  });

  if (!aberto) return null;

  function atualizarCampo(campo, valor) {
    setDadosProjeto((dadosAtuais) => ({
      ...dadosAtuais,
      [campo]: valor,
    }));
  }

  function enviarProjeto() {
    aoCriarProjeto(dadosProjeto);

    setDadosProjeto({
      titulo: "",
      tipoImovel: "",
      localizacao: "",
      dataInicio: "",
      dataFim: "",
      orcamento: "",
      profissionalDesejado: "",
      descricao: "",
      fotos: [],
    });
  }

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
            <input
              type="text"
              placeholder="Ex: Reforma da cozinha"
              value={dadosProjeto.titulo}
              onChange={(e) => atualizarCampo("titulo", e.target.value)}
            />
          </div>

          <div className="GrupoCampoProjetoCliente">
            <label>Tipo de imóvel</label>
            <input
              type="text"
              placeholder="Casa, apartamento, comércio..."
              value={dadosProjeto.tipoImovel}
              onChange={(e) => atualizarCampo("tipoImovel", e.target.value)}
            />
          </div>

          <div className="GrupoCampoProjetoCliente">
            <label>Localização</label>
            <input
              type="text"
              placeholder="Cidade / Região da obra"
              value={dadosProjeto.localizacao}
              onChange={(e) => atualizarCampo("localizacao", e.target.value)}
            />
          </div>

          <div className="GrupoCampoProjetoCliente">
            <label>Data estimada de início</label>
            <input
              type="date"
              value={dadosProjeto.dataInicio}
              onChange={(e) => atualizarCampo("dataInicio", e.target.value)}
            />
          </div>

          <div className="GrupoCampoProjetoCliente">
            <label>Data estimada de fim</label>
            <input
              type="date"
              value={dadosProjeto.dataFim}
              onChange={(e) => atualizarCampo("dataFim", e.target.value)}
            />
          </div>

          <div className="GrupoCampoProjetoCliente">
            <label>Orçamento médio</label>
            <input
              type="text"
              placeholder="Ex: R$ 15.000"
              value={dadosProjeto.orcamento}
              onChange={(e) => atualizarCampo("orcamento", e.target.value)}
            />
          </div>

          <div className="GrupoCampoProjetoCliente">
            <label>Profissional desejado</label>
            <input
              type="text"
              placeholder="Pode deixar em branco"
              value={dadosProjeto.profissionalDesejado}
              onChange={(e) =>
                atualizarCampo("profissionalDesejado", e.target.value)
              }
            />
          </div>

          <div className="GrupoCampoProjetoCliente CampoGrandeProjetoCliente">
            <label>Descrição do projeto</label>
            <textarea
              placeholder="Descreva o que você deseja no projeto, ideias, necessidades, estilo, materiais e observações importantes..."
              value={dadosProjeto.descricao}
              onChange={(e) => atualizarCampo("descricao", e.target.value)}
            />
          </div>

          <div className="GrupoCampoProjetoCliente CampoGrandeProjetoCliente">
            <label>Fotos de referência ou estado atual</label>

            <label className="UploadFotosProjetoCliente">
              <FaImage />
              <span>Clique para adicionar imagens</span>
              <small>
                {dadosProjeto.fotos.length > 0
                  ? `${dadosProjeto.fotos.length} imagem(ns) selecionada(s)`
                  : "Referências, ideias ou fotos de como o local está atualmente"}
              </small>

              <input
                type="file"
                multiple
                accept="image/*"
                onChange={(e) =>
                  atualizarCampo("fotos", Array.from(e.target.files))
                }
              />
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

            <button
              type="button"
              className="BotaoEnviarCriarProjetoCliente"
              onClick={enviarProjeto}
            >
              Enviar projeto <FaPaperPlane />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalCriarProjetoCliente;