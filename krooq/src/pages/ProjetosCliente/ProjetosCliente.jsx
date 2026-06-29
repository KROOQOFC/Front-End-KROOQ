import "./ProjetosCliente.css";
import { useState } from "react";

import NavegationLateralCliente from "../../components/NavegationLateralCliente/NavegationLateralCliente";
import MensagensNavBar from "../../components/MensagensNavBar/MensagensNavBar";
import CardProjetoCliente from "../../components/CardProjetoCliente/CardProjetoCliente";
import ModalCriarProjetoCliente from "../../components/ModalCriarProjetoCliente/ModalCriarProjetoCliente";
import ModalEditarProjetoCliente from "../../components/ModalEditarProjetoCliente/ModalEditarProjetoCliente";
import ModalDetalhesProjetoCliente from "../../components/ModalDetalhesProjetoCliente/ModalDetalhesProjetoCliente";

function ProjetosCliente() {
  const [modalCriarAberto, setModalCriarAberto] = useState(false);
  const [modalEditarAberto, setModalEditarAberto] = useState(false);
  const [modalDetalhesAberto, setModalDetalhesAberto] = useState(false);
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
      profissionalResponsavel: "Carlos Henrique",
      descricao: "Maquete 3D e renderização da fachada externa",
      progresso: "85%",
      prazo: "Entrega em 3 dias",
      cor: "#0b2a57",
      status: "Em andamento",
      tarefas: [
        { nome: "Levantamento de medidas", status: "Concluída" },
        { nome: "Modelagem 3D da fachada", status: "Concluída" },
        { nome: "Renderização final", status: "Em andamento" },
        { nome: "Entrega dos arquivos", status: "Pendente" },
      ],
      atualizacoes: [
        {
          data: "28/06/2026",
          titulo: "Renderização da fachada iniciada",
          descricao:
            "Foram ajustados os volumes principais da fachada e aplicada a primeira proposta de materiais externos.",
          fotos: [],
        },
        {
          data: "26/06/2026",
          titulo: "Modelagem 3D concluída",
          descricao:
            "A estrutura principal da fachada foi finalizada com base nas referências enviadas pelo cliente.",
          fotos: [],
        },
      ],
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
      profissionalResponsavel: "Mariana Lopes",
      descricao: "Apartamento 402 – Detalhamento executivo",
      progresso: "68%",
      prazo: "Entrega em 5 dias",
      cor: "#ff9f1c",
      status: "Em andamento",
      tarefas: [
        { nome: "Briefing com cliente", status: "Concluída" },
        { nome: "Paleta de cores", status: "Concluída" },
        { nome: "Layout dos ambientes", status: "Em andamento" },
        { nome: "Detalhamento executivo", status: "Pendente" },
      ],
      atualizacoes: [
        {
          data: "27/06/2026",
          titulo: "Layout dos ambientes atualizado",
          descricao:
            "Foi criada uma nova proposta de distribuição dos móveis da sala e dos quartos.",
          fotos: [],
        },
      ],
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
      profissionalResponsavel: "Ana Ribeiro",
      descricao: "Construção e organização do espaço externo",
      progresso: "100%",
      prazo: "Finalizado",
      cor: "#3d5f47",
      status: "Finalizado",
      tarefas: [
        { nome: "Projeto inicial", status: "Concluída" },
        { nome: "Aprovação do cliente", status: "Concluída" },
        { nome: "Execução da proposta", status: "Concluída" },
      ],
      atualizacoes: [
        {
          data: "20/05/2026",
          titulo: "Projeto finalizado",
          descricao:
            "Área gourmet entregue com organização final dos espaços e acabamentos aprovados.",
          fotos: [],
        },
      ],
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
      cor: novoProjeto.cor || "#d8a63f",
      status: "Em espera",
      tarefas: [],
      atualizacoes: [],
    };

    setProjetosEmEspera((projetosAtuais) => [
      projetoFormatado,
      ...projetosAtuais,
    ]);

    setModalCriarAberto(false);
  }

  function abrirProjeto(projeto) {
    setProjetoSelecionado(projeto);

    if (projeto.status === "Em espera") {
      setModalEditarAberto(true);
      return;
    }

    setModalDetalhesAberto(true);
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
    };

    setProjetosEmAndamento((projetos) =>
      projetos.filter((projeto) => projeto.id !== projetoFinalizado.id)
    );

    setProjetosFinalizados((projetos) => [projetoFormatado, ...projetos]);

    setModalEditarAberto(false);
    setModalDetalhesAberto(false);
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
                onClick={() => abrirProjeto(projeto)}
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
                onClick={() => abrirProjeto(projeto)}
              />
            ))}
          </div>
        </section>

        <section className="SecaoProjetosCliente">
          <h2>Finalizados ({projetosFinalizados.length})</h2>

          <div className="GridProjetosCliente">
            {projetosFinalizados.map((projeto) => (
              <CardProjetoCliente
                projeto={projeto}
                key={projeto.id}
                onClick={() => abrirProjeto(projeto)}
              />
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

      <ModalDetalhesProjetoCliente
        aberto={modalDetalhesAberto}
        projeto={projetoSelecionado}
        aoFechar={() => setModalDetalhesAberto(false)}
        aoFinalizar={finalizarProjeto}
      />
    </div>
  );
}

export default ProjetosCliente;