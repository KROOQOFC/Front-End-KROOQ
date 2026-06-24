import "./CardDetalhesProjetoCliente.css";
import { useState } from "react";
import {
  FaArrowLeft,
  FaMapMarkerAlt,
  FaClock,
  FaMoneyBillWave,
  FaChevronLeft,
  FaChevronRight,
  FaImage,
} from "react-icons/fa";

function CardDetalhesProjetoCliente({
  cliente,
  onVoltar,
  onAceitar,
  onRecusar,
}) {
  const [imagemAtual, setImagemAtual] = useState(0);

  if (!cliente) return null;

  const imagensProjeto = cliente.imagensProjeto || [];

  function imagemAnterior() {
    setImagemAtual((indexAtual) =>
      indexAtual === 0 ? imagensProjeto.length - 1 : indexAtual - 1
    );
  }

  function proximaImagem() {
    setImagemAtual((indexAtual) =>
      indexAtual === imagensProjeto.length - 1 ? 0 : indexAtual + 1
    );
  }

  return (
    <div className="ContainerCardDetalhesProjetoCliente">
      <section className="LadoInfoProjetoCliente">
        <button className="BotaoVoltarDetalhesProjeto" onClick={onVoltar}>
          <FaArrowLeft />
          Voltar
        </button>

        <span className="EtiquetaDetalhesProjeto">Projeto solicitado</span>

        <h2>{cliente.projeto}</h2>

        <div className="MiniCardClienteDetalhes">
          <img src={cliente.foto} alt={cliente.nome} />

          <div>
            <h3>{cliente.nome}</h3>
            <span>{cliente.tipo || "Cliente"}</span>
          </div>
        </div>

        <div className="InfoDetalhesProjetoGrid">
          <div className="ItemDetalhesProjeto">
            <FaMapMarkerAlt />
            <div>
              <span>Localização</span>
              <strong>{cliente.cidade}</strong>
            </div>
          </div>

          <div className="ItemDetalhesProjeto">
            <FaClock />
            <div>
              <span>Prazo estimado</span>
              <strong>{cliente.prazo || "A combinar"}</strong>
            </div>
          </div>

          <div className="ItemDetalhesProjeto">
            <FaMoneyBillWave />
            <div>
              <span>Orçamento</span>
              <strong>{cliente.orcamento || "A combinar"}</strong>
            </div>
          </div>
        </div>

        <div className="AreaDescricaoDetalhesProjeto">
          <h3>Descrição do projeto</h3>

          <p>
            {cliente.descricao ||
              "O cliente ainda não adicionou uma descrição detalhada para este projeto."}
          </p>
        </div>

        <div className="BotoesDetalhesProjeto">
          <button
            className="BotaoRecusarProjeto"
            onClick={() => onRecusar(cliente)}
          >
            Recusar projeto
          </button>

          <button
            className="BotaoAceitarProjeto"
            onClick={() => onAceitar(cliente)}
          >
            Aceitar projeto
          </button>
        </div>
      </section>

      <section className="LadoImagemProjetoCliente">
        {imagensProjeto.length > 0 ? (
          <div className="CarrosselImagemProjeto">
            <img
              src={imagensProjeto[imagemAtual]}
              alt={`Referência do projeto ${imagemAtual + 1}`}
            />

            {imagensProjeto.length > 1 && (
              <>
                <button
                  className="SetaCarrosselProjeto SetaEsquerdaProjeto"
                  onClick={imagemAnterior}
                >
                  <FaChevronLeft />
                </button>

                <button
                  className="SetaCarrosselProjeto SetaDireitaProjeto"
                  onClick={proximaImagem}
                >
                  <FaChevronRight />
                </button>

                <div className="IndicadoresCarrosselProjeto">
                  {imagensProjeto.map((_, index) => (
                    <span
                      key={index}
                      className={
                        index === imagemAtual
                          ? "IndicadorProjeto IndicadorProjetoAtivo"
                          : "IndicadorProjeto"
                      }
                    ></span>
                  ))}
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="PlaceholderImagemProjeto">
            <FaImage />
            <p>Nenhuma imagem adicionada pelo cliente</p>
          </div>
        )}
      </section>
    </div>
  );
}

export default CardDetalhesProjetoCliente;