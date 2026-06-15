import "./CentralProfissional.css";

import { useEffect, useState } from "react";

import NavegationLateral from "../../components/NavegationLateral/NavegationLateral";
import CentralHeader from "../../components/CentralHeader/CentralHeader";
import ProjetosRecentesCards from "../../components/ProjetosRecentesCards/ProjetosRecentesCards";
import BotaoTransparenteAdd from "../../components/BotaoTransparenteAdd/BotaoTransparenteAdd";

import SimboloProcesso from "../../assets/SimboloProcesso.png";
import SimboloProcessoBranco from "../../assets/SimboloProcessoBranco.png";
import ProcessoIconeComunidade from "../../assets/ProcessoIconeComunidade.png";
import SimboloIconeExecutivo from "../../assets/SimboloIconeExecutivo.png";

import MetasGerais from "../../components/MetasGerais/MetasGerais";
import ProcessoCentral from "../../components/ProcessoCentral/ProcessoCentral";
import MetaMensal from "../../components/MetaMensal/MetaMensal";
import PanoramaGeral from "../../components/PanoramaGeral/PanoramaGeral";
import EvolucaoSemana from "../../components/EvolucaoSemana/EvolucaoSemana";

import { buscarDashboard } from "../../services/dashboardService";
import { buscarMetas } from "../../services/metaService";
import { listarProjetos } from "../../services/projetoService";

function CentralProfissional() {
  const [dashboard, setDashboard] = useState(null);
  const [metas, setMetas] = useState([]);
  const [projetos, setProjetos] = useState([]);

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

      const metasData = await buscarMetas(
        usuario.id
      );

      setMetas(metasData);

      const projetosData = await listarProjetos();

      console.log(projetosData);

      setProjetos(projetosData);

    } catch (erro) {
      console.error("Erro ao carregar dados.");
    }
  }

  carregarDados();
}, []);

  return (
    <section className="conteiner-central-profissional">
      <NavegationLateral />

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

      <div className="AreaMetasGerais">
        <MetasGerais
          titulo="Metas Gerais"
          metas={metas.map(meta => ({
            texto: meta.texto,
            concluida: meta.concluida
          }))}
        />
      </div>

      <p className="paragrafo-processos-central">
        Em processo (2)
      </p>

      <div className="AreaProcessos">
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

<div className="componentes-projetos-andamento">

  {projetos.length > 0 ? (
    projetos.slice(0, 3).map((projeto) => (
      <ProjetosRecentesCards
        key={projeto.id}
        tituloProjetos={projeto.nome}
        subtituloProjetos={`● ${projeto.tipoAmbiente}`}
        paragrafosProjetos={projeto.descricao}
        porcentagem={projeto.progresso || 0}
        className={
          projeto.status === "Concluído"
            ? "card-completo"
            : ""
        }
      />
    ))
  ) : (
    <ProjetosRecentesCards
      tituloProjetos="Nenhum projeto"
      subtituloProjetos="● Sem projetos cadastrados"
      paragrafosProjetos="Crie seu primeiro projeto."
      porcentagem={0}
    />
  )}

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

      <div className="botão-transparente-geral">
        <BotaoTransparenteAdd />
      </div>
    </section>
  );
}

export default CentralProfissional;