import "./NovoProjeto.css";

import NavegationLateral from "../../components/NavegationLateral/NavegationLateral";
import CentralHeader from "../../components/CentralHeader/CentralHeader";
import BotaoTransparenteAdd from "../../components/BotaoTransparenteAdd/BotaoTransparenteAdd";
import FundoCentral from "../../assets/FundoCentral.png";
import mapaNP from "../../assets/mapaNP.png";
import telefoneNP from "../../assets/telefoneNP.png";
import emailNP from "../../assets/EmailNP.png";
import bussolaNP from "../../assets/BussolaNP.png";
import EnvioNP from "../../assets/EnvioNP.png";
import instagramNP from "../../assets/InstagramNP.png";
import linkedinNP from "../../assets/LinkedinNP.png";

function NovoProjeto() {
  return (
    <section className="container-novo-projeto"
      style={{
    backgroundImage: `url(${FundoCentral})`
  }}>

      <NavegationLateral />

      <div className="LayoutCentralHeader">
  <CentralHeader />

</div>
<button className="btn-criar-projeto">
  + Criar
</button>
      

      <div className="area-formulario">

        <h1>Cadastrar Novo Projeto</h1>

        <div className="linha-inputs">

          <input
            type="text"
            placeholder="Nome do Projeto"
          />

          <input
            type="text"
            placeholder="Tipo de Imóvel"
          />

        </div>

        <input
          type="text"
          placeholder="Cidade / Região da Obra"
        />

        <input
          type="text"
          placeholder="Orçamento Estimado"
        />

        <textarea
          placeholder="Descrição detalhada do projeto..."
        />

        <div className="area-termos">

          <input type="checkbox" />

          <p>
            Li e concordo com os termos e políticas de privacidade.
          </p>

        </div>

        <button className="btn-enviar">
          ENVIAR PROJETO
            <img
    src={EnvioNP}
    alt="Enviar"
    className="icone-envio"
  />
        </button>

      </div>

      <div className="area-info">

  <div className="mapa-fake">
    <img src={mapaNP} alt="Mapa" />
  </div>

  <div className="info-contato">

    <div className="item-contato">
      <img src={telefoneNP} alt="" />
      <p>+11 0000 - 0000</p>
    </div>

    <div className="item-contato">
      <img src={emailNP} alt="" />
      <p>projetos@seuprojeto.com</p>
    </div>

    <div className="item-contato">
      <img src={bussolaNP} alt="" />
      <p>O endereço físico do seu escritório em São Paulo.</p>
    </div>

  </div>

  <div className="linha-card"></div>

  <p className="titulo-redes">
    Conecte-se conosco
  </p>

  <div className="redes-sociais">

    <img src={linkedinNP} alt="LinkedIn" />

    <img src={instagramNP} alt="Instagram" />

  </div>

</div>

    </section>
  );
}

export default NovoProjeto;