import "./Projetos.css";
import Navegation from "../../components/Navegation/Navegation";
import RodapeProjetos from "../../components/RodapeProjetos/RodapeProjetos";
import ProjetoHero from "../../components/ProjetoHero/ProjetoHero";
import ProjetosGrid from "../../components/ProjetosGrid/ProjetosGrid";
import ComentariosProjetos from "../../components/ComentariosProjetos/ComentariosProjeto";

function Projetos() {
  return (
    <main className="projetos-page">
      <section id="parteCima">
      <Navegation />
  
      <ProjetoHero />
</section>
      <ProjetosGrid />

      <ComentariosProjetos />

      <RodapeProjetos />
    </main>
  );
}

export default Projetos;