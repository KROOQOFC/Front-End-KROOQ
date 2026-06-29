import "./EspecialistasProfissionais.css";

import imagemProfissionalObra from "../../assets/ObraHomem.png";
import iconeSeguranca from "../../assets/iconeSeguranca.png";
import iconeCheck from "../../assets/user-check.png";
import perfil7 from "../../assets/perfil7.webp";
import perfil6 from "../../assets/perfil6.png";
import perfil5 from "../../assets/perfil5.png";
import seta from "../../assets/setaIcone.png";

function EspecialistasProfissionais() {
    return (
        <section className="especialistas-profissionais-section">
            <div className="especialistas-profissionais-container">
                <div className="especialistas-profissionais-image-area">
                    <img
                        src={imagemProfissionalObra}
                        alt="Profissional da construção civil usando capacete"
                        className="especialistas-profissionais-main-image"
                    />

 <div className="especialistas-profissionais-verified-card">
  <p className="especialistas-profissionais-verified-text">
    <span className="especialistas-profissionais-verified-number">
      1200+
    </span>{" "}
    Especialistas Verificados
  </p>

  <div className="especialistas-profissionais-verified-icon-box">
    <img
      src={iconeSeguranca}
      alt="Especialistas verificados"
      className="especialistas-profissionais-verified-icon"
    />
  </div>
</div>

                    <div className="especialistas-profissionais-list-card">
                        <div className="especialistas-profissionais-person">
                            <img
                                src={perfil7}
                                alt="Ricardo S. Oliveira"
                                className="especialistas-profissionais-person-avatar"
                            />

                            <div>
                                <h3 className="especialistas-profissionais-person-name">
                                    Ricardo S. Oliveira
                                </h3>
                                <p className="especialistas-profissionais-person-role">
                                    Arquiteto e Urbanista
                                </p>
                            </div>
                        </div>

                        <div className="especialistas-profissionais-person">
                            <img
                                src={perfil6}
                                alt="Carlos Andrade"
                                className="especialistas-profissionais-person-avatar"
                            />

                            <div>
                                <h3 className="especialistas-profissionais-person-name">
                                    Carlos Andrade
                                </h3>
                                <p className="especialistas-profissionais-person-role">
                                    Mestre de Obras
                                </p>
                            </div>
                        </div>

                        <div className="especialistas-profissionais-person">
                            <img
                                src={perfil5}
                                alt="Juliana M. Silva"
                                className="especialistas-profissionais-person-avatar"
                            />

                            <div>
                                <h3 className="especialistas-profissionais-person-name">
                                    Juliana M. Silva
                                </h3>
                                <p className="especialistas-profissionais-person-role">
                                    Designer de Interiores
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="especialistas-profissionais-content">
                    <span className="especialistas-profissionais-label">
                        Por que a Krooq?
                    </span>

                    <h2 className="especialistas-profissionais-title">
                        Por que escolher nossos especialistas?
                    </h2>

                    <p className="especialistas-profissionais-description">
                        Conectamos você a um ecossistema completo de especialistas. Da visão
                        técnica do arquiteto à mão de obra qualificada no canteiro de obras,
                        garantimos que cada etapa do seu projeto seja entregue com precisão
                        e qualidade.
                    </p>

                    <div className="especialistas-profissionais-benefits-list">
                        <div className="especialistas-profissionais-benefit-card">
                            <div className="especialistas-profissionais-benefit-header">
                                <img
                                    src={iconeCheck}
                                    alt=""
                                    className="especialistas-profissionais-benefit-icon"
                                />

                                <h3 className="especialistas-profissionais-benefit-title">
                                    Serviços Confiáveis
                                </h3>
                            </div>

                            <img
                                style={{ transform: "rotate(180deg)" }}
                                src={seta}
                                alt=""
                                className="especialistas-profissionais-benefit-arrow"
                            />
                        </div>

                        <div className="especialistas-profissionais-benefit-card especialistas-profissionais-benefit-card--active">
                            <div className="especialistas-profissionais-benefit-header">
                                <img
                                    src={iconeCheck}
                                    alt=""
                                    className="especialistas-profissionais-benefit-icon"
                                />

                                <h3 className="especialistas-profissionais-benefit-title">
                                    Profissionais de Alto Nível
                                </h3>
                            </div>

                            <p className="especialistas-profissionais-benefit-description">
                                Nossa rede conta com arquitetos especialistas em design
                                inteligente e trabalhadores da construção civil autônomos
                                altamente capacitados. Separamos cada categoria para que você
                                encontre exatamente o talento que sua obra precisa.
                            </p>

                            <img
                                src={seta}
                                alt=""
                                className="especialistas-profissionais-benefit-arrow"
                            />
                        </div>

                        <div className="especialistas-profissionais-benefit-card">
                            <div className="especialistas-profissionais-benefit-header">
                                <img
                                    src={iconeCheck}
                                    alt=""
                                    className="especialistas-profissionais-benefit-icon"
                                />

                                <h3 className="especialistas-profissionais-benefit-title">
                                    Adaptabilidade
                                </h3>
                            </div>

                            <img
                                style={{ transform: "rotate(180deg)" }}
                                src={seta}
                                alt=""
                                className="especialistas-profissionais-benefit-arrow"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EspecialistasProfissionais;