import "./MetaMensal.css";
import { FiRefreshCw, FiShare2 } from "react-icons/fi";

function AnelProgresso({ porcentagem, cor, raio }) {
  const centro = 120;
  const largura = 12;
  const circunferencia = 2 * Math.PI * raio;
  const progresso = circunferencia - (porcentagem / 100) * circunferencia;

  return (
    <circle
      className="anel-progresso"
      cx={centro}
      cy={centro}
      r={raio}
      stroke={cor}
      strokeWidth={largura}
      strokeDasharray={circunferencia}
      strokeDashoffset={progresso}
      strokeLinecap="round"
      fill="none"
    />
  );
}


function MetaMensal({porcentagemPerformance,execucao,desenvolvimento,homologacao,porcentagemCentro,}) {
    return(
        <section className="ContainerMetaMensal">
            <div className="SuperiorMeta">
                <h2 className="TituloMeta">Meta Mensal</h2>
                <FiRefreshCw size={25} />
            </div>
            <div className="NivelPerformance">
                <p className="PorcentagemPerformance">{porcentagemPerformance}%</p>
                <p className="PerformanceEcossistema">Performance do <br /> Ecossistema</p>
            </div>

            <div className="ConteudoMeta">
              <div className="StatusMeta">
                <h3 className="TituloStatus">STATUS</h3>

                <div className="StatusItem">
                  <p><span className="BolinhaExecucao"></span>Execução</p>

                  <p><span className="BolinhaDesenvolvimento"></span>Desenvolvimento</p>

                  <p><span className="BolinhaHomologacao"></span>Homologação</p>
                </div>
             </div>

             <div className="GraficoCircular">
             <svg width="220" height="220" viewBox="0 0 240 240">
              <circle className="anel-fundo" cx="120" cy="120" r="90" />
              <circle className="anel-fundo" cx="120" cy="120" r="64" />
              <circle className="anel-fundo" cx="120" cy="120" r="38" />

              <AnelProgresso porcentagem={execucao} cor="#54715E" raio={90} />
              <AnelProgresso porcentagem={desenvolvimento} cor="#E95134" raio={64} />
              <AnelProgresso porcentagem={homologacao} cor="#9A9A9A" raio={38} />
             </svg>

             <p className="TextoGrafico">{porcentagemCentro}%</p>
             </div>
           </div>


           <div className="CompartilharMetas">
             <button className="BotaoCompartilhar">
              <FiShare2  className="IconeCompartilhar" size={22} color="#FFF" />
             </button>

             <button className="ExportarMeta">Exportar</button>
           </div>

        </section>
    )
}
export default MetaMensal;