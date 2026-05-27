import "./HeroDashboardProfissionais.css";
import DashboardKrooq from "../../assets/dashboard-krooq.png";

function HeroDashboardProfissionais() {
  return (
    <section className="hero-dashboard-profissionais">
      <div className="hero-dashboard-profissionais-image">
        <img src={DashboardKrooq} alt="Dashboard Krooq" />
      </div>

      <div className="hero-dashboard-profissionais-card">
        <button className="hero-dashboard-profissionais-button">
          ACESSAR PLATAFORMA
        </button>

        <h1>
          Construímos o Futuro <br />
          com Mão de Obra <br />
          Especializada
        </h1>

        <p>
          Nossa rede de profissionais da construção civil está pronta
          para transformar projetos em estruturas sólidas.
        </p>
      </div>
    </section>
  );
}

export default HeroDashboardProfissionais;