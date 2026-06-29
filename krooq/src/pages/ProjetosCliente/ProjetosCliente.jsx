import "./ProjetosCliente.css";
import { useState } from "react";

import NavegationLateralCliente from "../../components/NavegationLateralCliente/NavegationLateralCliente";
import MensagensNavBar from "../../components/MensagensNavBar/MensagensNavBar";
import CardProjetoCliente from "../../components/CardProjetoCliente/CardProjetoCliente";
import ModalCriarProjetoCliente from "../../components/ModalCriarProjetoCliente/ModalCriarProjetoCliente";
import ModalEditarProjetoCliente from "../../components/ModalEditarProjetoCliente/ModalEditarProjetoCliente";

function ProjetosCliente() {
  const [modalCriarAberto, setModalCriarAberto] = useState(false);
  const [modalEditarAberto, setModalEditarAberto] = useState(false);
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);

  const [projetosEmEspera, setProjetosEmEspera] = useState([
    {
      id: 1,
      titulo: "Reforma do Banheiro",
      tipoImovel: "Apartamento",
      localizacao: "São Paulo - SP",
      dataInicio: "2026-07-10",
      dataFim: "2026-08-20",
      orcamento: "R$ 8.000",
      profissionalDesejado: "",
      descricao: "Troca de revestimentos, pia, box e iluminação.",
      progresso: "0%",
      prazo: "Aguardando profissional",
      cor: "#d8a63f",
      status: "Em espera",
    },
  ]);

  const [projetosEmAndamento, setProjetosEmAndamento] = useState([
    {
      id: 2,
      titulo: "Projeto Residencial",
      tipoImovel: "Casa",
      localizacao: "Mogi das Cruzes - SP",
      dataInicio: "2026-06-20",
      dataFim: "2026-08-15",
      orcamento: "R$ 15.000",
      profissionalDesejado: "Arquiteto",
      descricao: "Maquete 3D e renderização da fachada externa",
      progresso: "85%",
      prazo: "Entrega em 3 dias",
      cor: "#0b2a57",
      status: "Em andamento",
    },
    {
      id: 3,
      titulo: "Design de Interiores",
      tipoImovel: "Apartamento",
      localizacao: "São Paulo - SP",
      dataInicio: "2026-06-25",
      dataFim: "2026-08-30",
      orcamento: "R$ 12.000",
      profissionalDesejado: "Designer",
      descricao: "Apartamento 402 – Detalhamento executivo",
      progresso: "68%",
      prazo: "Entrega em 5 dias",
      cor: "#ff9f1c",
      status: "Em andamento",
    },
  ]);

  const [projetosFinalizados, setProjetosFinalizados] = useState([
    {
      id: 4,
      titulo: "Área Gourmet",
      tipoImovel: "Casa",
      localizacao: "Campinas - SP",
      dataInicio: "2026-04-10",
      dataFim: "2026-05-20",
      orcamento: "R$ 22.000",
      profissionalDesejado: "Arquiteto",
      descricao: "Construção e organização do espaço externo",
      progresso: "100%",
      prazo: "Finalizado",
      cor: "#3d5f47",
      status: "Finalizado",
    },
  ]);

  function adicionarProjeto(novoProjeto) {
    const projetoFormatado = {
      id: Date.now(),
      titulo: novoProjeto.titulo || "Novo projeto",
      tipoImovel: novoProjeto.tipoImovel,
      localizacao: novoProjeto.localizacao,
      dataInicio: novoProjeto.dataInicio,
      dataFim: novoProjeto.dataFim,
      orcamento: novoProjeto.orcamento,
      profissionalDesejado: novoProjeto.profissionalDesejado,
      descricao: novoProjeto.descricao || "Projeto cadastrado pelo cliente",
      fotos: novoProjeto.fotos,
      progresso: "0%",
      prazo: "Aguardando profissional",
      cor: "#d8a63f",
      status: "Em espera",
    };

    setProjetosEmEspera((projetosAtuais) => [
      projetoFormatado,
      ...projetosAtuais,
    ]);

    setModalCriarAberto(false);
  }

  function abrirEditarProjeto(projeto) {
    if (projeto.status === "Finalizado") return;

    setProjetoSelecionado(projeto);
    setModalEditarAberto(true);
  }

  function salvarEdicaoProjeto(projetoEditado) {
    if (projetoEditado.status === "Em espera") {
      setProjetosEmEspera((projetos) =>
        projetos.map((projeto) =>
          projeto.id === projetoEditado.id ? projetoEditado : projeto
        )
      );
    }

    if (projetoEditado.status === "Em andamento") {
      setProjetosEmAndamento((projetos) =>
        projetos.map((projeto) =>
          projeto.id === projetoEditado.id ? projetoEditado : projeto
        )
      );
    }

    setModalEditarAberto(false);
    setProjetoSelecionado(null);
  }

  function removerProjetoEmEspera(idProjeto) {
    setProjetosEmEspera((projetos) =>
      projetos.filter((projeto) => projeto.id !== idProjeto)
    );

    setModalEditarAberto(false);
    setProjetoSelecionado(null);
  }

  function finalizarProjeto(projetoFinalizado) {
    const projetoFormatado = {
      ...projetoFinalizado,
      status: "Finalizado",
      progresso: "100%",
      prazo: "Finalizado",
      cor: "#3d5f47",
    };

    setProjetosEmAndamento((projetos) =>
      projetos.filter((projeto) => projeto.id !== projetoFinalizado.id)
    );

    setProjetosFinalizados((projetos) => [
      projetoFormatado,
      ...projetos,
    ]);

    setModalEditarAberto(false);
    setProjetoSelecionado(null);
  }

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
            onClick={() => setModalCriarAberto(true)}
          >
            + Criar projeto
          </button>
        </div>

        <section className="SecaoProjetosCliente">
          <h2>Em espera ({projetosEmEspera.length})</h2>

          <div className="GridProjetosCliente">
            {projetosEmEspera.map((projeto) => (
              <CardProjetoCliente
                projeto={projeto}
                key={projeto.id}
                onClick={() => abrirEditarProjeto(projeto)}
              />
            ))}
          </div>
        </section>

        <section className="SecaoProjetosCliente">
          <h2>Em andamento ({projetosEmAndamento.length})</h2>

          <div className="GridProjetosCliente">
            {projetosEmAndamento.map((projeto) => (
              <CardProjetoCliente
                projeto={projeto}
                key={projeto.id}
                onClick={() => abrirEditarProjeto(projeto)}
              />
            ))}
          </div>
        </section>

        <section className="SecaoProjetosCliente">
          <h2>Finalizados ({projetosFinalizados.length})</h2>

          <div className="GridProjetosCliente">
            {projetosFinalizados.map((projeto) => (
              <CardProjetoCliente projeto={projeto} key={projeto.id} />
            ))}
          </div>
        </section>
      </main>

      <ModalCriarProjetoCliente
        aberto={modalCriarAberto}
        aoFechar={() => setModalCriarAberto(false)}
        aoCriarProjeto={adicionarProjeto}
      />

      <ModalEditarProjetoCliente
        aberto={modalEditarAberto}
        projeto={projetoSelecionado}
        aoFechar={() => setModalEditarAberto(false)}
        aoSalvar={salvarEdicaoProjeto}
        aoRemover={removerProjetoEmEspera}
        aoFinalizar={finalizarProjeto}
      />
    </div>
  );
}

export default ProjetosCliente;