import "./TarefasProfissional.css";

import NavegationLateral from "../../components/NavegationLateral/NavegationLateral";
import MensagensNavBar from "../../components/MensagensNavBar/MensagensNavBar";
import TarefasResumo from "../../components/TarefasResumo/TarefasResumo";
import BlocoTarefas from "../../components/BlocoTarefas/BlocoTarefas";

function TarefasProfissional() {
  return (
    <section className="ContainerTarefasProfissional">
      <NavegationLateral />

      <MensagensNavBar
        className="AreaNavBarMensagens"
        nomeUsuario="Sofia"
        emailUsuario="sofia@email"
        notificacoes={16}
        mensagens={28}
        fotoUsuario=""
      />

      <TarefasResumo
        className="AreaTarefasResumo"
        data="22 Jul 2025"
        itens={[
          { numero: 6, texto: "Em andamento" },
          { numero: 8, texto: "Por vir" },
          { numero: 2, texto: "Em espera" },
          { numero: 16, texto: "Total projetos" },
        ]}
      />

      <div className="AreaCardsTarefas">
        <BlocoTarefas
          dataInicio="22 de Jan, 2026"
          dataFim="30 de Mai, 2026"
          titulo="Briefing e Estudo Preliminar"
          subtitulo="Necessidades do Cliente"
          progresso={70}
          prazo="Faltam 2 dias"
          cor="#c90000"
        />

        <BlocoTarefas
          dataInicio="29 de Mai, 2026"
          dataFim="12 de Jun, 2026"
          titulo="Modelagem 3D do Projeto"
          subtitulo="Definição de Volumetria"
          progresso={50}
          prazo="3 Semanas"
          cor="#d98c19"
        />

        <BlocoTarefas
          dataInicio="15 de Jun, 2026"
          dataFim="30 de Jun, 2026"
          titulo="Projeto Executivo"
          subtitulo="Plantas e Cortes"
          progresso={85}
          prazo="1 Mês Restante"
          cor="#15998b"
        />

        <BlocoTarefas
          dataInicio="01 de Jul, 2026"
          dataFim="15 de Jul, 2026"
          titulo="Interiores e Marcenaria"
          subtitulo="Detalhamento de Marcenaria"
          progresso={5}
          prazo="2 Meses"
          cor="#13b54a"
        />

<BlocoTarefas
          dataInicio="22 de Mai, 2026"
          dataFim="5 de Jun, 2026"
          titulo="Memorial Descritivo"
          subtitulo="Revestimentos e Acabamentos"
          progresso={30}
          prazo="2 Semanas"
          cor="#5F7D6A"
        />

        <BlocoTarefas
          dataInicio="08 de Jun, 2026"
          dataFim="19 de Jun, 2026"
          titulo="Compatibilização Engenharia"
          subtitulo="Estrutural e Hidráulico"
          progresso={41}
          prazo="1 Mês"
          cor="#E35336"
        />

        <BlocoTarefas
          dataInicio="22 de Mai, 2026"
          dataFim="29 de Mai, 2026"
          titulo="Cotação de Materiais"
          subtitulo="Fornecedores da Obra"
          progresso={31}
          prazo="5 dias"
          cor="#BAA888"
        />

        <BlocoTarefas
          dataInicio="01 de Jul, 2026"
          dataFim="01 de Dez, 2026"
          titulo=" Acompanhamento de Obra"
          subtitulo=" Execução e Visita Técnica"
          progresso={8}
          prazo="5 Meses"
          cor="#474BCA"
        />
         <BlocoTarefas
          dataInicio="01 de Jul, 2026"
          dataFim="01 de Dez, 2026"
          titulo=" Acompanhamento de Obra"
          subtitulo=" Execução e Visita Técnica"
          progresso={8}
          prazo="5 Meses"
          cor="#474BCA"
        />

        







      </div>
    </section>
  );
}

export default TarefasProfissional;