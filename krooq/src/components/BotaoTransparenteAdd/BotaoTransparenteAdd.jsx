import "./BotaoTransparenteAdd.css"
import SetaBtnTransparente from "../../assets/SetaBtnTransparente.png";


// SetaBtnTransparente

function BotaoTransparenteAdd() {
    return ( 
<div className="btn-transparente-central">
<button className="botao-tranparente-geral">+ Adicionar Novo Projeto</button>
<p className="paragrafo-do-btnt">Outras Atividades</p> <img src= {SetaBtnTransparente} alt="seta para direita"  className="seta-btn-transparente"/>
</div>


     );
}

export default BotaoTransparenteAdd;