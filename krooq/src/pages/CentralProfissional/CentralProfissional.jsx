import "./CentralProfissional.css";

import NavegationLateral from "../../components/NavegationLateral/NavegationLateral";
import CentralHeader from "../../components/CentralHeader/CentralHeader";
import MetasGerais from "../../components/MetasGerais/MetasGerais";
import ProcessoCentral from "../../components/ProcessoCentral/ProcessoCentral";

import SimboloProcesso from "../../assets/SimboloProcesso.png";
import SimboloProcessoBranco from "../../assets/SimboloProcessoBranco.png";
import ProcessoIconeComunidade from "../../assets/ProcessoIconeComunidade.png";
import SimboloIconeExecutivo from "../../assets/SimboloIconeExecutivo.png";

function CentralProfissional() {
  return (
    <section className="conteiner-central-profissional">
      <NavegationLateral />

      <CentralHeader />

      <MetasGerais
        titulo="Metas Gerais"
        metas={[
          { texto: "Especificação de Materiais", concluida: false },
          { texto: "Detalhamento de Projeto", concluida: false },
          { texto: "Modelagem 3D / Render", concluida: false },
          { texto: "Entregas Prioritárias", concluida: false },
        ]}
      />

      <div className="AreaProcessos">
        <ProcessoCentral
  iconeTopo={ProcessoIconeComunidade}
  titulo="Reunião com Engenheiro Civil"
  responsavel="José Santos"
  iconeStatus={SimboloProcessoBranco}
  destaqueStatus={true}
  onMenu={() => console.log("Abrir menu")}
/>

        <ProcessoCentral
  iconeTopo={SimboloIconeExecutivo}
  titulo="Apresentação de Conceito"
  responsavel="Marília Teresa"
  iconeStatus={SimboloProcesso}
  destaqueStatus={false}
  onMenu={() => console.log("Abrir menu")}
/>
      </div>
    </section>
  );
}

export default CentralProfissional;