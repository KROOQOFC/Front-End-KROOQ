import "./NovoProjeto.css";

import NavegationLateral from "../../components/NavegationLateral/NavegationLateral";
import CentralHeader from "../../components/CentralHeader/CentralHeader";
import BotaoTransparenteAdd from "../../components/BotaoTransparenteAdd/BotaoTransparenteAdd";
import FundoCentral from "../../assets/FundoCentral.png";

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
        </button>

      </div>

      <div className="area-info">

<div className="mapa-fake">
  MAPA
</div>

        <div className="info-contato">

          <p>(11) 0000-0000</p>

          <p>projetos@empresa.com</p>

          <p>
            O endereço físico do seu escritório.
          </p>

        </div>

      </div>

    </section>
  );
}

export default NovoProjeto;