import "./CentralCliente.css";

import { useEffect, useState } from "react";

import NavegationLateralCliente from "../../components/NavegationLateralCliente/NavegationLateralCliente";
import CentralHeader from "../../components/CentralHeader/CentralHeader";

import SimboloProcesso from "../../assets/SimboloProcesso.png";
import SimboloProcessoBranco from "../../assets/SimboloProcessoBranco.png";
import ProcessoIconeComunidade from "../../assets/ProcessoIconeComunidade.png";
import SimboloIconeExecutivo from "../../assets/SimboloIconeExecutivo.png";

import ProcessoCentral from "../../components/ProcessoCentral/ProcessoCentral";
import MetaMensal from "../../components/MetaMensal/MetaMensal";
import PanoramaGeral from "../../components/PanoramaGeral/PanoramaGeral";
import EvolucaoSemana from "../../components/EvolucaoSemana/EvolucaoSemana";

import { buscarDashboard } from "../../services/dashboardService";


function CentralCliente() {
  const [dashboard, setDashboard] = useState(null);
  
  

useEffect(() => {
  async function carregarDados() {
    try {
      const usuario = JSON.parse(
        localStorage.getItem("usuario")
      );

      const dashboardData = await buscarDashboard(
        usuario.id
      );

      setDashboard(dashboardData);

    } catch (erro) {
      console.error("Erro ao carregar dados.");
    }
  }

  carregarDados();
}, []);

  return (
    <section className="conteiner-central-cliente">
      <NavegationLateralCliente />

      <div className="LayoutCentralHeader">
<CentralHeader
  nomeUsuario={dashboard?.nomeUsuario}
/>
      </div>

      <div className="AreaPanoramaGeral">
        <PanoramaGeral
          tarefasConcluidas={
            dashboard?.tarefasConcluidas || 0
          }
          projetosPausados={
            dashboard?.projetosAtivos || 0
          }
          percentualProjetos={
            dashboard?.progressoMedioProjetos || 0
          }
          progressoBarra={
            dashboard?.progressoMedioProjetos || 0
          }

        />
      </div>

      <div className="AreaEvolucaoSemana">
        <EvolucaoSemana />
      </div>

      

      <p className="paragrafo-processos-centralCliente">
        Em processo (2)
      </p>

      <div className="AreaProcessosCliente">
        <ProcessoCentral
          iconeTopo={ProcessoIconeComunidade}
          titulo="Reunião com Engenheiro Civil"
          responsavel="José Santos"
          iconeStatus={SimboloProcessoBranco}
          destaqueStatus={true}
          onMenu={() => {}}
        />

        <ProcessoCentral
          iconeTopo={SimboloIconeExecutivo}
          titulo="Apresentação de Conceito"
          responsavel="Marília Teresa"
          iconeStatus={SimboloProcesso}
          destaqueStatus={false}
          onMenu={() => {}}
        />
      </div>

      <div className="AreaMetaMensal">
        <MetaMensal
          porcentagemPerformance={
            dashboard?.progressoMedioProjetos || 0
          }
          execucao={72}
          desenvolvimento={60}
          homologacao={38}
          porcentagemCentro={
            dashboard?.progressoMedioProjetos || 0
          }
        />
      </div>

      
    </section>
  );
}

export default CentralCliente;