import "./PanoramaGeral.css";

import { HiShare, HiDotsVertical } from "react-icons/hi";
import { BsBullseye, BsPauseCircle, BsCheckCircle } from "react-icons/bs";

function PanoramaGeral({tarefasConcluidas, projetosPausados, percentualProjetos, progressoBarra}) {
  return (
    <section className="ContainerPanoramaGeral">
      <div className="SuperiorPanorama">
        <h3 className="TituloPanoramaGeral">Panorama Geral</h3>

        <div className="AcoesPanorama">
          <HiShare />
          <HiDotsVertical />
        </div>
      </div>

      <div className="PanoramaNumeros">
        <div className="InfoPanorama">
          <strong>{tarefasConcluidas}</strong>
          <p>
            Tarefas <br />
            Concluídas
          </p>
        </div>

        <div className="LinhaDivisoria"></div>

        <div className="InfoPanorama">
          <strong>{projetosPausados}</strong>
          <p>
            Projetos <br />
            Pausados
          </p>
        </div>
      </div>

      <div className="BarraProgresso">
        <div
          className="BarraPreenchida"
          style={{ width: `${progressoBarra}%` }}
        ></div>
      </div>

      <div className="CardsPanorama">
        <div className="MiniCard MiniCardEscuro">
          <BsBullseye className="MiniCardIcone" />
          <strong>{percentualProjetos}%</strong>
          <p>Projetos</p>
        </div>

        <div className="MiniCard">
          <BsPauseCircle className="MiniCardIcone" />
          <strong>{projetosPausados}</strong>
          <p>Pausados</p>
        </div>

        <div className="MiniCard MiniCardClaro">
          <BsCheckCircle className="MiniCardIcone" />
          <strong>{tarefasConcluidas}</strong>
          <p>Concluídas</p>
        </div>
      </div>
    </section>
  );
}

export default PanoramaGeral;