import "./GaleriaHome.css";
import GaleriaImagem from "../../assets/GaleriaImagem.png";

function GaleriaHome() {
  return (
    <section className="galeria-home">
      <div className="galeria-container">
        <div className="galeria-texto">
          <h1>Galeria em Destaque</h1>

          <p>
            Nossa galeria em destaque reúne trabalhos selecionados que melhor
            representam nossa visão arquitetônica e expertise em design.
          </p>
        </div>

        <div className="galeria-imagem-box">
          <img
            src={GaleriaImagem}
            alt="Galeria de projetos arquitetônicos"
            className="galeria-imagem"
          />
        </div>
      </div>
    </section>
  );
}

export default GaleriaHome;