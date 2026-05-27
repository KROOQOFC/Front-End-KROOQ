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

<MetasGerais titulo="Metas Gerais"
        metas={[
          { texto: "Especificação de Materiais", concluida: false },
          { texto: "Detalhamento de Projeto", concluida: false },
          { texto: "Modelagem 3D / Render", concluida: false },
          { texto: "Entregas Prioritárias", concluida: false },
        ]}/>

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

</section>


    );
}

export default CentralProfissional;