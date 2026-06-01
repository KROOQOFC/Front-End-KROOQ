import "./CentralProfissional.css";

import NavegationLateral from "../../components/NavegationLateral/NavegationLateral";
import CentralHeader from "../../components/CentralHeader/CentralHeader"
import ProjetosRecentesCards from "../../components/ProjetosRecentesCards/ProjetosRecentesCards";
import BotaoTransparenteAdd from "../../components/BotaoTransparenteAdd/BotaoTransparenteAdd";
import SimboloProcesso from "../../assets/SimboloProcesso.png";
import SimboloProcessoBranco from "../../assets/SimboloProcessoBranco.png";
import ProcessoIconeComunidade from "../../assets/ProcessoIconeComunidade.png";
import SimboloIconeExecutivo from "../../assets/SimboloIconeExecutivo.png";
import MetasGerais from "../../components/MetasGerais/MetasGerais";
import ProcessoCentral from "../../components/ProcessoCentral/ProcessoCentral";
import MetaMensal from "../../components/MetaMensal/MetaMensal";
import PanoramaGeral from "../../components/PanoramaGeral/PanoramaGeral";
import EvolucaoSemana from "../../components/EvolucaoSemana/EvolucaoSemana";


function CentralProfissional() {
    return (  
<section className="conteiner-central-profissional">

<NavegationLateral/>

<div className="botão-transparente-geral">
    <BotaoTransparenteAdd/>
</div>

    <div className="LayoutCentralHeader">
      <CentralHeader/>
    </div>

    <div className="AreaPanoramaGeral">
    <PanoramaGeral 
  tarefasConcluidas={43}
  projetosPausados={2}
  percentualProjetos={32}
  progressoBarra={68}/>
  </div>

<div className="AreaEvolucaoSemana">
<EvolucaoSemana
   dadosProjeto={[45, 70, 35, 75, 42, 63, 82, 55, 28, 43, 25, 95, 45]}
  dadosVisita={[45, 60, 82, 70, 58, 48, 65, 95, 72, 56, 45]}
/></div>


    <div className="AreaMetasGerais">
        <MetasGerais
           titulo="Metas Gerais"
           metas={[
            { texto: "Especificação de Materiais", concluida: false },
            { texto: "Detalhamento de Projeto", concluida: false },
            { texto: "Modelagem 3D / Render", concluida: false },
            { texto: "Entregas Prioritárias", concluida: false },
           ]}
        />
    </div>

    <p className="paragrafo-processos-central">Em processo  (2)</p>
   <div className="AreaProcessos">
        <ProcessoCentral
          iconeTopo={ProcessoIconeComunidade}
          titulo="Reunião com Engenheiro Civil"
          responsavel="José Santos"
          iconeStatus={SimboloProcessoBranco}
          destaqueStatus={true}
          onMenu={() => console.log("Abrir menu")}
        /> 

        <ProcessoCentral
          iconeTopo={SimboloIconeExecutivo}
          titulo="Apresentação de Conceito"
          responsavel="Marília Teresa"
          iconeStatus={SimboloProcesso}
          destaqueStatus={false}
          onMenu={() => console.log("Abrir menu")}
        />
        
    </div>
      

<div className="componentes-projetos-andamento">
<ProjetosRecentesCards
 tituloProjetos="Em Andamento"
  subtituloProjetos="● Anteprojeto Residencial"
  paragrafosProjetos="Ajustes de layout finalizados. Aguardando feedback do cliente sobre revestimentos."
  porcentagem={95}/>

  <ProjetosRecentesCards  className="card-completo"
  tituloProjetos="Edifício Sustentável"
   paragrafosProjetos="● COMPLETO"
  porcentagem={100}
/>

<ProjetosRecentesCards className="card-completo"
  tituloProjetos="Reforma Residência"
  paragrafosProjetos="● COMPLETO"
  porcentagem={100}
/>
</div>

<div className="AreaMetaMensal">
<MetaMensal  
  porcentagemPerformance={30}
  execucao={72}
  desenvolvimento={60}
  homologacao={38}
  porcentagemCentro={65}/></div>

</section>


    );
}

export default CentralProfissional;