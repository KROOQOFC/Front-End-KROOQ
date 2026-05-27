import "./MetodoProfissionais.css";
import MetodoImagem from "../../assets/dashboard-Krooq.png.png";

function MetodoProfissionais() {
  const etapas = [
    {
      numero: "1",
      titulo: "Definição do Perfil e Personalidade",
      texto: "Nossa IA identifica seu estilo e necessidades reais para o ambiente.",
    },
    {
      numero: "2",
      titulo: "Geração de Design e Conceito",
      texto: "Geramos visuais exclusivos para você visualizar seu projeto antes da obra.",
    },
    {
      numero: "3",
      titulo: "Viabilidade Técnica e Execução",
      texto: "Entregamos o cálculo de materiais e conectamos você aos profissionais.",
    },
  ];

  return (
    <section className="metodo-profissionais">
      <div className="metodo-profissionais-container">
        <div className="metodo-profissionais-esquerda">
          <span className="metodo-profissionais-tag">COMO FUNCIONA</span>

          <h2>Nosso Método Comprovado</h2>

          <p>
            Desenvolvemos um processo inteligente que une tecnologia de ponta e
            expertise técnica para transformar sua visão em um projeto real e
            viável.
          </p>

          <div className="metodo-profissionais-video">
            <img src={MetodoImagem} alt="Plataforma funcionando" />

            <div className="metodo-profissionais-video-footer">
              <button type="button" className="metodo-profissionais-play">
                ▶
              </button>

              <span>
                Saiba como nossa <br />
                plataforma funciona.
              </span>
            </div>
          </div>
        </div>

        <div className="metodo-profissionais-direita">
          {etapas.map((etapa) => (
            <div className="metodo-profissionais-etapa" key={etapa.numero}>
              <div className="metodo-profissionais-numero">
                {etapa.numero}
              </div>

              <div>
                <h3>{etapa.titulo}</h3>
                <p>{etapa.texto}</p>
              </div>
            </div>
          ))}

          <button type="button" className="metodo-profissionais-button">
            LER MAIS
          </button>
        </div>
      </div>
    </section>
  );
}

export default MetodoProfissionais;