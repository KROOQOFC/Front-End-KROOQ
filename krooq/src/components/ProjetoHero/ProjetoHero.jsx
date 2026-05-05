import "./ProjetoHero.css";
import TelaDeFundo from "../../assets/TelaDeFundo.png";

function ProjetoHero() {
  return (
    <section className="projeto-hero">
      <div className="projeto-hero-container">
        <div className="projeto-hero-texto">
          <span className="projeto-tag">Projetos</span>

          <h1>
            Foco no desejo <br />
            do cliente
          </h1>

          <p>
            Transformamos ideias em espaços reais, funcionais e marcantes,
            unindo arquitetura, tecnologia e experiência.
          </p>

          <button className="projeto-hero-btn">Ver projetos</button>
        </div>

        <div className="projeto-hero-imagem">
          <img src={TelaDeFundo} alt="Prédio moderno" />
        </div>
      </div>
    </section>
  );
}

export default ProjetoHero;