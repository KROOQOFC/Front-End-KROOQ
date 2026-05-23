import "./Servicos.css";
import Navegation from "../../components/Navegation/Navegation";
import ServicosDesejo from "../../components/ServicosDesejo/ServicosDesejo"
import ServicosEspecialista from "../../components/ServicosEspecialistas/ServicosEspecialistas"

function Servicos() {
    return(
        <>
      <Navegation/> 
      <ServicosDesejo/>
      <ServicosEspecialista/>
       </>
    )
}

export default Servicos