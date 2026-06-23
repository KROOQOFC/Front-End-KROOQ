import "./MeusProjetosProfissional.css";

import { useState } from "react";

import NavegationLateral from "../../components/NavegationLateral/NavegationLateral";
import MensagensNavBar from "../../components/MensagensNavBar/MensagensNavBar";
import ProjetosRecentesCards from "../../components/ProjetosRecentesCards/ProjetosRecentesCards";
import EvolucaoSemana from "../../components/EvolucaoSemana/EvolucaoSemana";
import EmProgressoProfissional from "../../components/EmProgressoProfissional/EmProgressoProfissional";
import ListaProjetosProfissional from "../../components/ListaProjetosProfissional/ListaProjetosProfissional";
import ProgressoProjetos from "../../components/ProgressoProjetos/ProgressoProjetos";
import ModalCriarProjeto from "../../components/ModalCriarProjeto/ModalCriarProjeto";

import { criarProjeto } from "../../services/projetoService";

function MeusProjetosProfissional() {
  const [modalProjeto, setModalProjeto] = useState(false);

  const [projetosLista, setProjetosLista] = useState([
    {
      id: 1,
      cor: "#f54500",
      titulo: "Design de interiores",
      cliente: "Ana Clara",
      localidade: "São Paulo - SP",
      descricao: "Iniciar o briefing e levantamento de necessidades",
      progresso: "95%",
      prazo: "início em 3 dias",
      status: "Aguardando início",
      tarefas: [],
    },
    {
      id: 2,
      cor: "#ed2bf4",
      titulo: "Projeto Corporativo",
      cliente: "Rafael Martins",
      localidade: "Campinas - SP",
      descricao: "Escritório TechHub – Preparar a documentação",
      progresso: "75%",
      prazo: "início em 6 dias",
      status: "Aguardando início",
      tarefas: [],
    },
    {
      id: 3,
      cor: "#4dc7ff",
      titulo: "Execução Sala",
      cliente: "Beatriz Lima",
      localidade: "Santo André - SP",
      descricao: "Reformar e pintar parede de sala",
      progresso: "70%",
      prazo: "início em 1 semana",
      status: "Aguardando início",
      tarefas: [],
    },
    {
      id: 4,
      cor: "#b54bf1",
      titulo: "Projeto Quarto",
      cliente: "Felipe Melo",
      localidade: "Campinas - SP",
      descricao: "Modelagem estrutural de um quarto infantil",
      progresso: "45%",
      prazo: "início em 2 semanas",
      status: "Aguardando início",
      tarefas: [],
    },
  ]);

  const [projetosEmProgresso, setProjetosEmProgresso] = useState([
    {
      id: 5,
      cor: "#1B4C7D",
      titulo: "Projeto Residencial",
      cliente: "Marcos Vinícius",
      localidade: "Mogi das Cruzes - SP",
      localizacao: "Mogi das Cruzes - SP",
      descricao: "Maquete 3D e renderização da fachada externa",
      progresso: "85%",
      prazo: "Entrega em 3 dias",
      status: "Em andamento",
      tarefas: [
        {
          id: 1,
          nome: "Levantamento de medidas",
          descricao: "Tirar medidas principais da fachada e área externa.",
          dataInicio: "2026-06-01",
          dataTermino: "2026-06-03",
          status: "Concluída",
        },
        {
          id: 2,
          nome: "Modelagem 3D",
          descricao: "Criar a maquete 3D inicial do projeto residencial.",
          dataInicio: "2026-06-04",
          dataTermino: "2026-06-08",
          status: "Concluída",
        },
        {
          id: 3,
          nome: "Renderização da fachada",
          descricao: "Finalizar renderização realista da fachada externa.",
          dataInicio: "2026-06-09",
          dataTermino: "2026-06-12",
          status: "Em andamento",
        },
      ],
    },
    {
      id: 6,
      cor: "#F4A52B",
      titulo: "Design de Interiores",
      cliente: "Ana Clara",
      localidade: "São Paulo - SP",
      localizacao: "São Paulo - SP",
      descricao: "Apartamento 402 (Ana) – Detalhamento executivo",
      progresso: "70%",
      prazo: "Entrega em 5 dias",
      status: "Em andamento",
      tarefas: [
        {
          id: 1,
          nome: "Briefing com cliente",
          descricao: "Entender referências, estilo desejado e necessidades.",
          dataInicio: "2026-06-01",
          dataTermino: "2026-06-02",
          status: "Concluída",
        },
        {
          id: 2,
          nome: "Moodboard",
          descricao: "Montar referências visuais para aprovação.",
          dataInicio: "2026-06-03",
          dataTermino: "2026-06-05",
          status: "Concluída",
        },
        {
          id: 3,
          nome: "Detalhamento executivo",
          descricao: "Preparar documentação e detalhamento dos ambientes.",
          dataInicio: "2026-06-06",
          dataTermino: "2026-06-12",
          status: "Em andamento",
        },
      ],
    },
    {
      id: 7,
      cor: "#FF5B4D",
      titulo: "Projeto Comercial",
      cliente: "Clínica Sorriso",
      localidade: "Santo André - SP",
      localizacao: "Santo André - SP",
      descricao: "Clínica Sorriso compatibilização engenharia hidráulica",
      progresso: "92%",
      prazo: "Entrega em 1 semana",
      status: "Em andamento",
      tarefas: [
        {
          id: 1,
          nome: "Análise hidráulica",
          descricao: "Revisar pontos hidráulicos do projeto comercial.",
          dataInicio: "2026-06-01",
          dataTermino: "2026-06-04",
          status: "Concluída",
        },
        {
          id: 2,
          nome: "Compatibilização",
          descricao: "Compatibilizar projeto hidráulico com arquitetura.",
          dataInicio: "2026-06-05",
          dataTermino: "2026-06-10",
          status: "Em andamento",
        },
      ],
    },
    {
      id: 8,
      cor: "#4CAF50",
      titulo: "Projeto Industrial",
      cliente: "LogiMax",
      localidade: "Guarulhos - SP",
      localizacao: "Guarulhos - SP",
      descricao: "Modelagem estrutural galpão logístico",
      progresso: "45%",
      prazo: "Entrega em 12 dias",
      status: "Em andamento",
      tarefas: [
        {
          id: 1,
          nome: "Estudo estrutural",
          descricao: "Analisar estrutura principal do galpão.",
          dataInicio: "2026-06-01",
          dataTermino: "2026-06-04",
          status: "Concluída",
        },
        {
          id: 2,
          nome: "Modelagem estrutural",
          descricao: "Criar modelo estrutural do galpão logístico.",
          dataInicio: "2026-06-05",
          dataTermino: "2026-06-15",
          status: "Em andamento",
        },
      ],
    },
  ]);

  const [formularioProjeto, setFormularioProjeto] = useState({
    nome: "",
    descricao: "",
    tipoAmbiente: "",
    largura: "",
    comprimento: "",
    altura: "",
    dataInicio: "",
    dataEntrega: "",
  });

  function iniciarProjeto(projetoIniciado) {
    const projetoParaEmProgresso = {
      ...projetoIniciado,
      status: "Em andamento",
      prazo: "Projeto iniciado",
      progresso: "0%",
      localizacao: projetoIniciado.localidade,
      tarefas: projetoIniciado.tarefas || [],
    };

    setProjetosLista(
      projetosLista.filter((projeto) => projeto.id !== projetoIniciado.id)
    );

    setProjetosEmProgresso([...projetosEmProgresso, projetoParaEmProgresso]);
  }

  async function salvarProjeto() {
    try {
      await criarProjeto({
        nome: formularioProjeto.nome,
        descricao: formularioProjeto.descricao,
        tipoAmbiente: formularioProjeto.tipoAmbiente,
        largura: Number(formularioProjeto.largura),
        comprimento: Number(formularioProjeto.comprimento),
        altura: Number(formularioProjeto.altura),
        progresso: 0,
        dataInicio: formularioProjeto.dataInicio,
        dataEntrega: formularioProjeto.dataEntrega,
      });

      setModalProjeto(false);

      setFormularioProjeto({
        nome: "",
        descricao: "",
        tipoAmbiente: "",
        largura: "",
        comprimento: "",
        altura: "",
        dataInicio: "",
        dataEntrega: "",
      });

      alert("Projeto criado com sucesso!");
    } catch (erro) {
      alert(erro.message);
    }
  }

  return (
    <section className="ContainerProjetosProfissional">
      <NavegationLateral />

      <div className="AreaNavBarMensagens AreaNavBarMensagensProjetos">
        <MensagensNavBar
          nomeUsuario="Sofia"
          emailUsuario="sofia@email"
          notificacoes={16}
          mensagens={28}
          fotoUsuario=""
        />
      </div>

      <div className="AreaProgressoProjetos">
        <ProgressoProjetos
          progresso={65}
          TempoRestantes="7 Dias Restantes"
          aoAdicionarProjeto={() => setModalProjeto(true)}
        />
      </div>

      <div className="AreaEmProgresso">
        <EmProgressoProfissional projetos={projetosEmProgresso} />
      </div>

      <div className="AreaListaProjetos">
        <ListaProjetosProfissional
          projetos={projetosLista}
          aoIniciarProjeto={iniciarProjeto}
        />
      </div>

      <div className="AreaEvolucaoSemanaProjetos">
        <EvolucaoSemana
          dadosProjeto={[45, 70, 35, 75, 42, 63, 82, 55, 28, 43, 25, 95, 45]}
          dadosVisita={[45, 60, 82, 70, 58, 48, 65, 95, 72, 56, 45]}
        />
      </div>

      <div className="componentes-projetos-andamento">
        <ProjetosRecentesCards
          tituloProjetos="Em Andamento"
          subtituloProjetos="● Anteprojeto Residencial"
          paragrafosProjetos="Ajustes de layout finalizados. Aguardando feedback do cliente sobre revestimentos."
          porcentagem={95}
        />

        <ProjetosRecentesCards
          className="card-completo"
          tituloProjetos="Edifício Sustentável"
          paragrafosProjetos="● COMPLETO"
          porcentagem={100}
        />

        <ProjetosRecentesCards
          className="card-completo"
          tituloProjetos="Reforma Residência"
          paragrafosProjetos="● COMPLETO"
          porcentagem={100}
        />
      </div>

      <ModalCriarProjeto
        aberto={modalProjeto}
        aoFechar={() => setModalProjeto(false)}
        formulario={formularioProjeto}
        setFormulario={setFormularioProjeto}
        aoSalvar={salvarProjeto}
      />
    </section>
  );
}

export default MeusProjetosProfissional;