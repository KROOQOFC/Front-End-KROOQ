import pessoasCasa from "../../assets/servicosPessoasCasa.webp";
import linkedin from "../../assets/linkedin.webp";
import instagram from "../../assets/instagram.webp";
import github from "../../assets/git.webp";
import CardServicosContainer from "../CardServicos/CardServicos";
import "./ServicosDesejo.css";

function ServicosDesejo() {
  return (
    <div className="ServicosDesejoContainer">
      <div className="servicosDesejo">
        <h2 className="Servicos-Titulo">
          Foco no Desejo <br /> do Cliente
        </h2>

        <img
          src={pessoasCasa}
          alt="Pessoas em uma casa"
          className="pessoasCasa"
        />

        <p>Inovação e Precisão em Cada m²</p>

        <button type="button" className="btn-ServicosProjeto">
          INICIAR UM PROJETO
        </button>
      </div>

      <div className="RedesSociais">
        <img src={linkedin} alt="Logo do Linkedin" className="linkedinServicos" />
        <img src={instagram} alt="Logo do Instagram" className="instagramServicos" />
        <img src={github} alt="Logo do Github" className="githubServicos" />
      </div>

      <div className="ImagemDesejos">
        <CardServicosContainer
          texto="Acompanhar"
          top="130px"
          right="5%"
          height="50px"
          width="150px"
        />

        <CardServicosContainer
          texto="Planejar"
          top="240px"
          right="2%"
          height="50px"
          width="110px"
        />

        <CardServicosContainer
          texto="Conectar"
          top="450px"
          left="550px"
          height="50px"
          width="120px"
        />

        <CardServicosContainer
          texto="KROOQ um ecossistema inteligente que une design, fornecedores e execução para tirar o seu projeto do papel com tecnologia e sofisticação."
          top="510px"
          left="550px"
          height="120px"
          width="380px"
          alinhamento="left"
        />
      </div>
    </div>
  );
}

export default ServicosDesejo;