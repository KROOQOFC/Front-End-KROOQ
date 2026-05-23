import "./Servicos.css";
import Navegation from "../../components/Navegation/Navegation";
import ServicosDesejo from "../../components/ServicosDesejo/ServicosDesejo"
import ServicosEspecialista from "../../components/ServicosEspecialistas/ServicosEspecialistas"
import ServicosProjetos from "../../components/ServicosProjetos/ServicosProjetos"
import ServicosFornecedor from "../../components/ServicosFornecedor/ServicosFornecedor"
import ServicoComentarios from "../../components/ServicoComentarios/ServicoComentarios"

function Servicos() {
    return(
        <>
      <Navegation/> 
      <ServicosDesejo/>
      <ServicosProjetos/>
      <ServicosEspecialista/>
      <ServicosFornecedor/>
      <ServicoComentarios/>
       </>
    )
}

export default Servicos