import pessoasCasa from "../../assets/servicosPessoasCasa.png"
import linkedin from "../../assets/linkedin.png"
import instagram from "../../assets/instagram.png"
import github from "../../assets/git.png"
import CardServicosContainer from "../CardServicos/CardServicos"
import "./ServicosDesejo.css"

function ServicosDesejo() {
    return(
        <div className="ServicosDesejoContainer">

        <div className="servicosDesejo">
            <h2 className="Servicos-Titulo">Foco no Desejo <br/> do Cliente</h2>
            <p> Inovação e Precisão em Cada m²</p>
            <button type="button" className="btn-ServicosProjeto">INICIAR UM PROJETO</button>
        </div>

        <div className="RedesSociais">
        <img src={linkedin} alt="Logo do Linkedin" className="linkedinServicos"/>
        <img src={instagram} alt="Logo do Instagram" className="instagramServicos"/>
        <img src={github} alt="Logo do Github" className="githubServicos"/>
        </div>
        <img src={pessoasCasa} alt="Pessoas em uma casa" className="pessoasCasa"/> 

        <div className="ImagemDesejos">
            <CardServicosContainer texto="Acompanhar" top="120px" right="9%" height="50px" width="150px"/>
            <CardServicosContainer texto="Planejar" top="200px" right="9%" height="50px" width="110px"/>
            <CardServicosContainer texto="Conectar" top="470px" left="550px" height="50px" width="120px"/>
            <CardServicosContainer texto="KROOQ um ecossistema inteligente que une
             design, fornecedores e execução para tirar o seu projeto do papel com tecnologia e sofisticação." top="550px" left="550px" height="120px" width="380px" alinhamento="left"/>
        </div>
        
        
          </div>
    )
}
export default ServicosDesejo;  