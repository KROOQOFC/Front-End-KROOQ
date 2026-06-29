import "./CardDetalhesProfissionais.css";
import { useState } from "react";
import {
  FaArrowLeft,
  FaMapMarkerAlt,
  FaBriefcase,
  FaGraduationCap,
  FaStar,
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaChevronLeft,
  FaChevronRight,
  FaImage,
} from "react-icons/fa";

function CardDetalhesProfissionais({
  profissional,
  onVoltar,
  onIniciarConversa,
  onRemover,
}) {
  const [imagemAtual, setImagemAtual] = useState(0);

  if (!profissional) return null;

  const portfolio = profissional.portfolio || [];

  function imagemAnterior() {
    setImagemAtual((indexAtual) =>
      indexAtual === 0 ? portfolio.length - 1 : indexAtual - 1
    );
  }

  function proximaImagem() {
    setImagemAtual((indexAtual) =>
      indexAtual === portfolio.length - 1 ? 0 : indexAtual + 1
    );
  }

  return (
    <div className="ContainerCardDetalhesProfissional">
      <section className="LadoInfoProfissional">
        <button className="BotaoVoltarDetalhesProfissional" onClick={onVoltar}>
          <FaArrowLeft />
          Voltar
        </button>

        <span className="EtiquetaDetalhesProfissional">
          Perfil profissional
        </span>

        <h2>{profissional.areaAtuacao}</h2>

        <div className="MiniCardProfissionalDetalhes">
          <img src={profissional.foto} alt={profissional.nome} />

          <div>
            <h3>{profissional.nome}</h3>
            <span>{profissional.tipo || "Profissional"}</span>
          </div>
        </div>

        <div className="InfoDetalhesProfissionalGrid">
          <div className="ItemDetalhesProfissional">
            <FaMapMarkerAlt />
            <div>
              <span>Localização</span>
              <strong>{profissional.cidade || "Não informado"}</strong>
            </div>
          </div>

          <div className="ItemDetalhesProfissional">
            <FaUser />
            <div>
              <span>Idade</span>
              <strong>{profissional.idade || "Não informado"}</strong>
            </div>
          </div>

          <div className="ItemDetalhesProfissional">
            <FaBriefcase />
            <div>
              <span>Experiência</span>
              <strong>{profissional.experiencia || "Não informado"}</strong>
            </div>
          </div>

          <div className="ItemDetalhesProfissional">
            <FaGraduationCap />
            <div>
              <span>Formação</span>
              <strong>{profissional.formacao || "Não informado"}</strong>
            </div>
          </div>

          <div className="ItemDetalhesProfissional">
            <FaStar />
            <div>
              <span>Avaliação</span>
              <strong>{profissional.avaliacao || "Sem avaliação"}</strong>
            </div>
          </div>

          <div className="ItemDetalhesProfissional">
            <FaBriefcase />
            <div>
              <span>Projetos realizados</span>
              <strong>
                {profissional.projetosRealizados || "Não informado"}
              </strong>
            </div>
          </div>

          <div className="ItemDetalhesProfissional">
            <FaPhoneAlt />
            <div>
              <span>Telefone</span>
              <strong>{profissional.telefone || "Não informado"}</strong>
            </div>
          </div>

          <div className="ItemDetalhesProfissional">
            <FaEnvelope />
            <div>
              <span>Email</span>
              <strong>{profissional.email || "Não informado"}</strong>
            </div>
          </div>
        </div>

        <div className="AreaDescricaoDetalhesProfissional">
          <h3>Sobre o profissional</h3>

          <p>
            {profissional.descricao ||
              "O profissional ainda não adicionou uma descrição detalhada para o perfil."}
          </p>
        </div>

        <div className="BotoesDetalhesProfissional">
          <button
            className="BotaoRecusarProfissional"
            onClick={() => onRemover(profissional)}
          >
            Remover profissional
          </button>

          <button
            className="BotaoAceitarProfissional"
            onClick={() => onIniciarConversa(profissional)}
          >
            Iniciar conversa
          </button>
        </div>
      </section>

      <section className="LadoImagemProfissional">
        {portfolio.length > 0 ? (
          <div className="CarrosselImagemProfissional">
            <img
              src={portfolio[imagemAtual]}
              alt={`Trabalho realizado ${imagemAtual + 1}`}
            />

            {portfolio.length > 1 && (
              <>
                <button
                  className="SetaCarrosselProfissional SetaEsquerdaProfissional"
                  onClick={imagemAnterior}
                >
                  <FaChevronLeft />
                </button>

                <button
                  className="SetaCarrosselProfissional SetaDireitaProfissional"
                  onClick={proximaImagem}
                >
                  <FaChevronRight />
                </button>

                <div className="IndicadoresCarrosselProfissional">
                  {portfolio.map((_, index) => (
                    <span
                      key={index}
                      className={
                        index === imagemAtual
                          ? "IndicadorProfissional IndicadorProfissionalAtivo"
                          : "IndicadorProfissional"
                      }
                    ></span>
                  ))}
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="PlaceholderImagemProfissional">
            <FaImage />
            <p>Nenhuma imagem adicionada pelo profissional</p>
          </div>
        )}
      </section>
    </div>
  );
}

export default CardDetalhesProfissionais;