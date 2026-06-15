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
        <EmProgressoProfissional
          projetos={[
            {
              cor: "#1B4C7D",
              titulo: "Projeto Residencial",
              descricao: "Maquete 3D e renderização da fachada externa",
              progresso: "85%",
              prazo: "Entrega em 3 dias",
            },
            {
              cor: "#F4A52B",
              titulo: "Design de Interiores",
              descricao: "Apartamento 402 (Ana) – Detalhamento executivo",
              progresso: "70%",
              prazo: "Entrega em 5 dias",
            },
            {
              cor: "#FF5B4D",
              titulo: "Projeto Comercial",
              descricao: "Clínica Sorriso compatibilização engenharia hidráulica",
              progresso: "92%",
              prazo: "Entrega em 1 semana",
            },
            {
              cor: "#4CAF50",
              titulo: "Projeto Industrial",
              descricao: "Modelagem estrutural galpão logístico",
              progresso: "45%",
              prazo: "Entrega em 12 dias",
            },
          ]}
        />
      </div>

      <div className="AreaListaProjetos">
        <ListaProjetosProfissional
          projetos={[
            {
              cor: "#f54500",
              titulo: "Design de interiores",
              descricao: "Iniciar o briefing e levantamento de necessidades",
              progresso: "95%",
              prazo: "início em 3 dias",
            },
            {
              cor: "#ed2bf4",
              titulo: "Projeto Corporativo",
              descricao: "Escritório TechHub – Preparar a documentação",
              progresso: "75%",
              prazo: "início em 6 dias",
            },
            {
              cor: "#4dc7ff",
              titulo: "Execução Sala",
              descricao: "Reformar e pintar parede de sala",
              progresso: "70%",
              prazo: "início em 1 semana",
            },
            {
              cor: "#b54bf1",
              titulo: "Projeto Quarto",
              descricao: "Modelagem estrutural de um quarto infantil",
              progresso: "45%",
              prazo: "início em 2 semanas",
            },
          ]}
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