import "./CentralProfissional.css"
import "../../components/NavegationLateral/NavegationLateral";
import NavegationLateral from "../../components/NavegationLateral/NavegationLateral";
import CentralHeader from "../../components/CentralHeader/CentralHeader"
import ProjetosRecentesCards from "../../components/ProjetosRecentesCards/ProjetosRecentesCards";
import BotaoTransparenteAdd from "../../components/BotaoTransparenteAdd/BotaoTransparenteAdd";


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