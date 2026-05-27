import "./CentralProfissional.css";

import NavegationLateral from "../../components/NavegationLateral/NavegationLateral";
import CentralHeader from "../../components/CentralHeader/CentralHeader"

import SimboloProcesso from "../../assets/SimboloProcesso.png";
import SimboloProcessoBranco from "../../assets/SimboloProcessoBranco.png";
import ProcessoIconeComunidade from "../../assets/ProcessoIconeComunidade.png";
import SimboloIconeExecutivo from "../../assets/SimboloIconeExecutivo.png";

function CentralProfissional() {
    return (  
<section className="conteiner-central-profissional">

<NavegationLateral/>
<div className="LayoutCentralHeader">
<CentralHeader/>
</div>


</section>


    );
}

export default CentralProfissional;