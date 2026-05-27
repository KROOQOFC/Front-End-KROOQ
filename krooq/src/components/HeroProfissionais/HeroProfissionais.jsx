import "./HeroProfissionais.css";
import perfil8 from "../../assets/perfil8.png";
import obras from "../../assets/obras(2).png";
import { Link } from "react-router-dom";
import IconeCheck from "../../assets/user-check.png";

function HeroProfissionais() {
  return (
    <main className="hero-profissionais-page">
      <section className="hero-profissionais-section">
        <div className="hero-profissionais-background-line"></div>

        <div className="hero-profissionais-container">
          <div className="hero-profissionais-content">
            <h1 className="hero-profissionais-title">
              Sua Carreira Arquitetônica Sem Fronteiras.
            </h1>

            <div className="hero-profissionais-user-row">
              <img
                src={perfil8}
                alt="Foto de perfil de um profissional de arquitetura"
                className="hero-profissionais-profile-image"
              />

              <p className="hero-profissionais-description">
                Arquitetos e empresas em todo o mundo utilizam o ecossistema
                KROOQ para potencializar seus negócios.
              </p>
            </div>

            <Link
              to="/cadastro-perfil"
              className="hero-profissionais-register-button"
            >
              Cadastrar Perfil
            </Link>

            <p className="hero-profissionais-support-text">
              Transforme sua criatividade em viabilidade técnica com cálculos
              automáticos.
            </p>
          </div>

          <div className="hero-profissionais-image-area">
            <img
              src={obras}
              alt="Profissional de arquitetura analisando uma obra"
              className="hero-profissionais-main-image"
            />

            <div className="hero-profissionais-floating-cards">
            <div className="hero-profissionais-feature-card hero-profissionais-feature-card--green">
                <img
                src={IconeCheck}
                alt=""
                className="hero-profissionais-feature-icon-image"
                />
                <p>Gestão de Projetos</p>
            </div>

            <div className="hero-profissionais-feature-card hero-profissionais-feature-card--orange">
                <img
                src={IconeCheck}
                alt=""
                className="hero-profissionais-feature-icon-image"
                />
                <p>Consultoria Técnica</p>
            </div>

            <div className="hero-profissionais-feature-card hero-profissionais-feature-card--green">
                <img
                src={IconeCheck}
                alt=""
                className="hero-profissionais-feature-icon-image"
                />
                <p>Rede de Fornecedores</p>
            </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HeroProfissionais;