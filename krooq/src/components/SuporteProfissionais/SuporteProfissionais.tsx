import "./SuporteProfissionais.css";
import SuporteVideo from "../../assets/VideoBox(1).png";

function SuporteProfissionais() {
  return (
    <section className="suporte-profissionais">
      <div className="suporte-profissionais-container">
        <div className="suporte-profissionais-video">
          <img src={SuporteVideo} alt="Suporte de confiança" />

          <button className="suporte-profissionais-play" type="button">
            ▶
          </button>

          <h3>
            Suporte de confiança em
            <br />
            qualquer lugar.
          </h3>
        </div>

        <div className="suporte-profissionais-conteudo">
          <div className="suporte-profissionais-texto">
            <span>PROJETO E SUPORTE EM TODAS AS ETAPAS</span>

            <h2>
              Sua obra avançando
              <br />
              enquanto você aproveita
              <br />
              seu tempo.
            </h2>

            <p>
              Tenha a liberdade de focar no que importa enquanto nós
              transformamos sua visão e ideias em realidade.
            </p>
          </div>

          <form className="suporte-profissionais-form">
            <div className="suporte-profissionais-inputs">
              <input type="text" placeholder="Seu primeiro nome" />
              <input type="text" placeholder="Seu sobrenome" />
              <input type="tel" placeholder="Telefone" />
              <input type="email" placeholder="E-mail" />
            </div>

            <textarea placeholder="Sua mensagem..."></textarea>

            <button type="submit">SOLICITAR ORÇAMENTO</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SuporteProfissionais;