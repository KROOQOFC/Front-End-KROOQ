import "./Projetos.css";
import Navegation from "../../components/Navegation/Navegation";
import Rodape from "../../components/Rodape/Rodape";
import ProjetoHero from "../../components/ProjetoHero/ProjetoHero";
import ProjetosGrid from "../../components/ProjetosGrid/ProjetosGrid";
import ComentariosProjetos from "../../components/ComentariosProjetos/ComentariosProjeto";

function Projetos() {
  return (
    <main className="projetos-page">
      <Navegation />

      <ProjetoHero />

      <ProjetosGrid />

      <ComentariosProjetos />

      <Rodape />
    </main>
  );
}

export default Projetos;