import "./ModalEditarProjetoCliente.css";
import { useEffect, useState } from "react";
import { FaTimes, FaSave, FaTrash, FaCheckCircle } from "react-icons/fa";

function ModalEditarProjetoCliente({
  aberto,
  projeto,
  aoFechar,
  aoSalvar,
  aoRemover,
  aoFinalizar,
}) {
  const [dadosProjeto, setDadosProjeto] = useState(null);

  useEffect(() => {
    if (projeto) {
      setDadosProjeto(projeto);
    }
  }, [projeto]);

  if (!aberto || !dadosProjeto) return null;

  const projetoEmEspera = dadosProjeto.status === "Em espera";
  const projetoEmAndamento = dadosProjeto.status === "Em andamento";

  function atualizarCampo(campo, valor) {
    setDadosProjeto((dadosAtuais) => ({
      ...dadosAtuais,
      [campo]: valor,
    }));
  }

  return (
    <div className="OverlayModalEditarProjetoCliente">
      <div className="ModalEditarProjetoCliente">
        <div className="TopoModalEditarProjetoCliente">
          <div>
            <p>{dadosProjeto.status}</p>
            <h2>Editar projeto</h2>
          </div>

          <button
            className="BotaoFecharModalEditarProjetoCliente"
            onClick={aoFechar}
          >
            <FaTimes />
          </button>
        </div>

        <div className="AvisoEditarProjetoCliente">
          {projetoEmEspera
            ? "Este projeto ainda está em espera. Você pode editar todas as informações, remover a solicitação e personalizar a cor do card."
            : "Este projeto já foi iniciado. Agora você pode alterar datas, orçamento, cor e finalizar o projeto."}
        </div>

        <form className="FormularioEditarProjetoCliente">
          <div className="GrupoCampoEditarProjetoCliente CampoGrandeEditarProjetoCliente">
            <label>Nome do projeto</label>
            <input
              type="text"
              value={dadosProjeto.titulo}
              disabled={!projetoEmEspera}
              onChange={(e) => atualizarCampo("titulo", e.target.value)}
            />
          </div>

          <div className="GrupoCampoEditarProjetoCliente">
            <label>Tipo de imóvel</label>
            <input
              type="text"
              value={dadosProjeto.tipoImovel || ""}
              disabled={!projetoEmEspera}
              onChange={(e) => atualizarCampo("tipoImovel", e.target.value)}
            />
          </div>

          <div className="GrupoCampoEditarProjetoCliente">
            <label>Localização</label>
            <input
              type="text"
              value={dadosProjeto.localizacao || ""}
              disabled={!projetoEmEspera}
              onChange={(e) => atualizarCampo("localizacao", e.target.value)}
            />
          </div>

          <div className="GrupoCampoEditarProjetoCliente">
            <label>Data estimada de início</label>
            <input
              type="date"
              value={dadosProjeto.dataInicio || ""}
              onChange={(e) => atualizarCampo("dataInicio", e.target.value)}
            />
          </div>

          <div className="GrupoCampoEditarProjetoCliente">
            <label>Data estimada de fim</label>
            <input
              type="date"
              value={dadosProjeto.dataFim || ""}
              onChange={(e) => atualizarCampo("dataFim", e.target.value)}
            />
          </div>

          <div className="GrupoCampoEditarProjetoCliente">
            <label>Orçamento médio</label>
            <input
              type="text"
              value={dadosProjeto.orcamento || ""}
              onChange={(e) => atualizarCampo("orcamento", e.target.value)}
            />
          </div>

          <div className="GrupoCampoEditarProjetoCliente">
            <label>Profissional desejado</label>
            <input
              type="text"
              value={dadosProjeto.profissionalDesejado || ""}
              disabled={!projetoEmEspera}
              onChange={(e) =>
                atualizarCampo("profissionalDesejado", e.target.value)
              }
            />
          </div>

          <div className="GrupoCampoEditarProjetoCliente">
            <label>Cor do projeto</label>

            <div className="CampoCorEditarProjetoCliente">
              <input
                type="color"
                value={dadosProjeto.cor || "#d8a63f"}
                onChange={(e) => atualizarCampo("cor", e.target.value)}
              />

              <span
                style={{ backgroundColor: dadosProjeto.cor || "#d8a63f" }}
              ></span>
              <p>{dadosProjeto.cor || "#d8a63f"}</p>
            </div>
          </div>

          <div className="GrupoCampoEditarProjetoCliente CampoGrandeEditarProjetoCliente">
            <label>Descrição do projeto</label>
            <textarea
              value={dadosProjeto.descricao || ""}
              disabled={!projetoEmEspera}
              onChange={(e) => atualizarCampo("descricao", e.target.value)}
            />
          </div>

          <div className="BotoesModalEditarProjetoCliente">
            {projetoEmEspera && (
              <button
                type="button"
                className="BotaoRemoverEditarProjetoCliente"
                onClick={() => aoRemover(dadosProjeto.id)}
              >
                <FaTrash /> Remover projeto
              </button>
            )}

            {projetoEmAndamento && (
              <button
                type="button"
                className="BotaoFinalizarEditarProjetoCliente"
                onClick={() => aoFinalizar(dadosProjeto)}
              >
                <FaCheckCircle /> Finalizar projeto
              </button>
            )}

            <button
              type="button"
              className="BotaoCancelarEditarProjetoCliente"
              onClick={aoFechar}
            >
              Cancelar
            </button>

            <button
              type="button"
              className="BotaoSalvarEditarProjetoCliente"
              onClick={() => aoSalvar(dadosProjeto)}
            >
              Salvar alterações <FaSave />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalEditarProjetoCliente;