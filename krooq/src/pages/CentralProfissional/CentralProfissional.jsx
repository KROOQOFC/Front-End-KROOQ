import "./CentralProfissional.css"
import "../../components/NavegationLateral/NavegationLateral";
import NavegationLateral from "../../components/NavegationLateral/NavegationLateral";
import CentralHeader from "../../components/CentralHeader/CentralHeader"



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