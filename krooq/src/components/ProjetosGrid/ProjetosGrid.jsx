import "./ProjetosGrid.css";

import Frame30 from "../../assets/Frame 30.png";
import Frame31 from "../../assets/Frame 31.png";
import Frame32 from "../../assets/Frame 32.png";

function ProjetosGrid() {
  return (
    <section className="projetos-grid-section">
      <div className="projetos-grid-container">
        <div className="projetos-grid-header">
          <h2>Residenciais</h2>
        </div>

        <div className="galeria-projetos">
          <div className="imagem-principal">
            <img src={Frame30} alt="Projeto principal" />
            <div className="play-overlay">▶</div>
          </div>

          <div className="imagens-laterais">
            <div className="imagem-secundaria">
              <img src={Frame31} alt="Projeto secundário 1" />
              <div className="play-overlay">▶</div>
            </div>

            <div className="imagem-secundaria">
              <img src={Frame32} alt="Projeto secundário 2" />
              <div className="play-overlay">▶</div>
            </div>
          </div>
        </div>

        <div className="estatisticas-projetos">
          <div className="estatistica-item">
            <h3>200.000</h3>
            <p>
              Lares
              <br />
              Entregues
            </p>
          </div>

          <div className="divisor"></div>

          <div className="estatistica-item">
            <h3>6000+ m²</h3>
            <p>
              Terrenos
              <br />
              Reservados
            </p>
          </div>

          <div className="divisor"></div>

          <div className="estatistica-item">
            <h3>100k+</h3>
            <p>
              Metros
              <br />
              Quadrados
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjetosGrid;