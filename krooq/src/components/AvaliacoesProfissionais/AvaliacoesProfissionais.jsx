import "./AvaliacoesProfissionais.css";

import VideoBox from "../../assets/VideoBox.png";
import AspasComentario from "../../assets/AspasComentario.png";
import IconBox from "../../assets/IconBox.png";

import perfil1 from "../../assets/perfil1.png";
import perfil2 from "../../assets/perfil2.png";
import perfil3 from "../../assets/perfil3.png";
import perfil4 from "../../assets/perfil4.png";

function AvaliacoesProfissionais() {
  const depoimentos = [
    {
      id: 1,
      texto: "Preciso e economia garantidas.",
      nome: "Ryan Hasan",
      cargo: "Usuário Cliente",
      foto: perfil1,
      destaque: true,
    },
    {
      id: 2,
      texto: "IA e técnica que facilitaram meu trabalho.",
      nome: "Maria Coutt",
      cargo: "Designer de Interiores",
      foto: perfil2,
    },
    {
      id: 3,
      texto: "Cálculo preciso que gerou economia real.",
      nome: "Larissa Barbosa",
      cargo: "Usuário Cliente",
      foto: perfil3,
    },
    {
      id: 4,
      texto: "Serviço de alta qualidade e total confiança.",
      nome: "Pietro Nunes",
      cargo: "Arquiteto e Urbanista",
      foto: perfil4,
    },
  ];

  return (
    <section className="avaliacoes-profissionais">
      <div className="avaliacoes-profissionais-container">
        <div className="avaliacoes-profissionais-header">
          <span className="avaliacoes-profissionais-tag">DEPOIMENTOS</span>

          <h2>
            Avaliações Reais de Nossos
            <br />
            Clientes Satisfeitos
          </h2>
        </div>

        <div className="avaliacoes-profissionais-video">
          <img
            src={VideoBox}
            alt="Clientes satisfeitos"
            className="avaliacoes-profissionais-video-img"
          />

          <button className="avaliacoes-profissionais-play" type="button">
            ▶
          </button>
        </div>

        <div className="avaliacoes-profissionais-card">
          <div className="avaliacoes-profissionais-coluna-esquerda">
<div className="avaliacoes-profissionais-aspas">“</div>

            <div className="avaliacoes-profissionais-depoimento-principal">
              <h3>{depoimentos[0].texto}</h3>

              <div className="avaliacoes-profissionais-user">
                <img
                  src={depoimentos[0].foto}
                  alt={depoimentos[0].nome}
                  className="avaliacoes-profissionais-avatar"
                />

                <div className="avaliacoes-profissionais-user-info">
                  <strong>{depoimentos[0].nome}</strong>
                  <p>{depoimentos[0].cargo}</p>
                </div>
              </div>
            </div>

            <div className="avaliacoes-profissionais-numeros">
              <div className="avaliacoes-profissionais-numero">
                <strong>29189</strong>
                <p>Clientes Felizes</p>
              </div>

              <div className="avaliacoes-profissionais-numero com-icone">
                <img src={IconBox} alt="Ícone de destaque" />

                <div>
                  <strong>2981</strong>
                  <p>Projetos Gerenciados</p>
                </div>
              </div>

              <div className="avaliacoes-profissionais-numero">
                <strong>27</strong>
                <p>Anos de Experiência</p>
              </div>

              <div className="avaliacoes-profissionais-numero com-icone">
                <img src={IconBox} alt="Ícone de destaque" />

                <div>
                  <strong>350</strong>
                  <p>Profissionais Especialistas</p>
                </div>
              </div>
            </div>
          </div>

          <div className="avaliacoes-profissionais-coluna-direita">
            {depoimentos.slice(1).map((item) => (
              <div
                className="avaliacoes-profissionais-item"
                key={item.id}
              >
                <h3>{item.texto}</h3>

                <div className="avaliacoes-profissionais-user">
                  <img
                    src={item.foto}
                    alt={item.nome}
                    className="avaliacoes-profissionais-avatar"
                  />

                  <div className="avaliacoes-profissionais-user-info">
                    <strong>{item.nome}</strong>
                    <p>{item.cargo}</p>
                  </div>
                </div>
              </div>
            ))}

            <button
              className="avaliacoes-profissionais-button"
              type="button"
            >
              MAIS DEPOIMENTOS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AvaliacoesProfissionais;