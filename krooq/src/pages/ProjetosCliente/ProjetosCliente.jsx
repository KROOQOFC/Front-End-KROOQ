import "./ProjetosCliente.css";
import { useNavigate } from "react-router-dom";

import NavegationLateralCliente from "../../components/NavegationLateralCliente/NavegationLateralCliente";
import MensagensNavBar from "../../components/MensagensNavBar/MensagensNavBar";
import CardProjetoCliente from "../../components/CardProjetoCliente/CardProjetoCliente";

function ProjetosCliente() {
  const navigate = useNavigate();

  const projetosEmAndamento = [
    {
      titulo: "Projeto Residencial",
      descricao: "Maquete 3D e renderização da fachada externa",
      progresso: "85%",
      prazo: "Entrega em 3 dias",
      cor: "#0b2a57",
      status: "Em andamento",
    },
    {
      titulo: "Design de Interiores",
      descricao: "Apartamento 402 (Ana) – Detalhamento executivo",
      progresso: "68%",
      prazo: "Entrega em 5 dias",
      cor: "#ff9f1c",
      status: "Em andamento",
    },
    {
      titulo: "Projeto Comercial",
      descricao: "Clínica Sorriso compatibilização engenharia hidráulica",
      progresso: "92%",
      prazo: "Entrega em 1 semana",
      cor: "#e95f45",
      status: "Em andamento",
    },
  ];

  const projetosFinalizados = [
    {
      titulo: "Reforma da Cozinha",
      descricao: "Projeto finalizado com acompanhamento completo",
      progresso: "100%",
      prazo: "Finalizado",
      cor: "#3d5f47",
      status: "Finalizado",
    },
    {
      titulo: "Área Gourmet",
      descricao: "Construção e organização do espaço externo",
      progresso: "100%",
      prazo: "Finalizado",
      cor: "#3d5f47",
      status: "Finalizado",
    },
  ];

  return (
    <div className="ContainerProjetosCliente">
      <NavegationLateralCliente />

      <div className="AreaMensagensProjetosCliente">
        <MensagensNavBar />
      </div>

      <main className="ConteudoProjetosCliente">
        <div className="TopoProjetosCliente">
          <div>
            <p className="SubtituloProjetosCliente">Meus projetos</p>
            <h1>Projetos cadastrados</h1>
          </div>

          <button
            className="BotaoCriarProjetoCliente"
            onClick={() => navigate("/criar-projeto")}
          >
            + Criar projeto
          </button>
        </div>

        <section className="SecaoProjetosCliente">
          <h2>Em andamento ({projetosEmAndamento.length})</h2>

          <div className="GridProjetosCliente">
            {projetosEmAndamento.map((projeto, index) => (
              <CardProjetoCliente projeto={projeto} key={index} />
            ))}
          </div>
        </section>

        <section className="SecaoProjetosCliente">
          <h2>Finalizados ({projetosFinalizados.length})</h2>

          <div className="GridProjetosCliente">
            {projetosFinalizados.map((projeto, index) => (
              <CardProjetoCliente projeto={projeto} key={index} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default ProjetosCliente;