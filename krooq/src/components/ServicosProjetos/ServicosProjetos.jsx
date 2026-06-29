import { useState } from "react";
import "./ServicosProjetos.css";

import ReformaCozinha from "../../assets/ReformaCozinha.webp";
import CroquiPc from "../../assets/CroquiPc.webp";
import DesignSala from "../../assets/DesignSala.webp";

function ServicosProjetos() {
  const [imagemAtiva, setImagemAtiva] = useState(0);

  function proximaImagem() {
    setImagemAtiva((atual) => (atual === 2 ? 0 : atual + 1));
  }

  function imagemAnterior() {
    setImagemAtiva((atual) => (atual === 0 ? 2 : atual - 1));
  }

  return (
    <section className="ServicosProjetosContainer">
      <div className="ProjetosDetalhes">
        <h4>Projetos eficientes</h4>

        <div className="LinhaAvancoProjetos">
          <div
            className="LinhaProgressoProjetos"
            style={{ width: `${((imagemAtiva + 1) / 3) * 100}%` }}
          ></div>
        </div>

        <div className="BotoesSetaProjetos">
          <button onClick={imagemAnterior}>←</button>
          <button onClick={proximaImagem}>→</button>
        </div>
      </div>

      <div className="ImagensServicosProjetos">
        <img
          src={ReformaCozinha}
          alt="Reforma de cozinha"
          className={
            imagemAtiva === 0
              ? "ReformaCozinha imagemAtiva"
              : "ReformaCozinha"
          }
        />

        <img
          src={CroquiPc}
          alt="Croqui no computador"
          className={imagemAtiva === 1 ? "CroquiPc imagemAtiva" : "CroquiPc"}
        />

        <img
          src={DesignSala}
          alt="Design de sala"
          className={
            imagemAtiva === 2 ? "DesignSala imagemAtiva" : "DesignSala"
          }
        />
      </div>

      <div className="MetricasProjetos">
        <div className="MetricaItem">
          <h4>200.000</h4>
          <p>
            Reformas
            <br />
            Entregues
          </p>
        </div>

        <span className="DivisorMetricas"></span>

        <div className="MetricaItem">
          <h4>6000+</h4>
          <p>
            Projetos
            <br />
            Reservados
          </p>
        </div>

        <span className="DivisorMetricas"></span>

        <div className="MetricaItem">
          <h4>100+</h4>
          <p>
            Designer
            <br />
            de interiores
          </p>
        </div>
      </div>
    </section>
  );
}

export default ServicosProjetos;