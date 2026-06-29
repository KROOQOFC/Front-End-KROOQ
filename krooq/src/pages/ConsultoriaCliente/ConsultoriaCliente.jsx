import "./ConsultoriaCliente.css";
import { useState } from "react";

import NavegationLateral from "../../components/NavegationLateral/NavegationLateral";
import MensagensNavBar from "../../components/MensagensNavBar/MensagensNavBar";
import NavConsultoriaNovosProfissionais from "../../components/NavConsultoriaNovosProfissionais/NavConsultoriaNovosProfissionais";
import CardEncontrarProfissionais from "../../components/CardEncontrarProfissionais/CardEncontrarProfissionais";
import CardDetalhesProfissionais from "../../components/CardDetalhesProfissionais/CardDetalhesProfissionais";
import NavContatoProfissionais from "../../components/NavContatoProfissionais/NavContatoProfissionais";
import PesquisaConversasClientes from "../../components/PesquisaConversasClientes/PesquisaConversasClientes";
import PainelChatCliente from "../../components/PainelChatCliente/PainelChatCliente";

import Foto1 from "../../assets/perfil1.png";
import Foto2 from "../../assets/perfil2.png";
import Foto3 from "../../assets/perfil3.png";

function ConsultoriaCliente() {
  const [mostrarProfissionais, setMostrarProfissionais] = useState(false);
  const [busca, setBusca] = useState("");
  const [profissionalSelecionado, setProfissionalSelecionado] = useState(null);
  const [profissionalDetalhado, setProfissionalDetalhado] = useState(null);
  const [mensagensPorProfissional, setMensagensPorProfissional] = useState({});

  const [profissionaisDisponiveis, setProfissionaisDisponiveis] = useState([
    {
      foto: Foto1,
      nome: "Carlos Mendes",
      tipo: "Profissional",
      areaAtuacao: "Reformas residenciais",
      descricao:
        "Profissional especializado em reformas residenciais, planejamento de ambientes e acompanhamento de obras.",
      idade: "34 anos",
      experiencia: "8 anos de experiência",
      formacao: "Engenharia Civil",
      avaliacao: "4.8",
      projetosRealizados: "32 projetos realizados",
      telefone: "(00) 00000-0000",
      email: "carlos@email.com",
      cidade: "Mogi das Cruzes - SP",
      status: "ativo",
      portfolio: [],
      ultimaMensagem: "Olá! Gostaria de saber mais sobre sua consultoria.",
    },
    {
      foto: Foto2,
      nome: "Marcos Oliveira",
      tipo: "Profissional",
      areaAtuacao: "Construção e acabamento",
      descricao:
        "Profissional com experiência em construção, acabamento, pintura, revestimentos e pequenas reformas.",
      idade: "41 anos",
      experiencia: "12 anos de experiência",
      formacao: "Técnico em Edificações",
      avaliacao: "4.6",
      projetosRealizados: "48 projetos realizados",
      telefone: "(00) 00000-0000",
      email: "marcos@email.com",
      cidade: "São José dos Campos - SP",
      status: "ativo",
      portfolio: [],
      ultimaMensagem: "Olá! Gostaria de saber mais sobre sua consultoria.",
    },
    {
      foto: Foto3,
      nome: "Fernanda Lima",
      tipo: "Profissional",
      areaAtuacao: "Design de interiores",
      descricao:
        "Especialista em interiores, organização de ambientes, escolha de móveis, iluminação e decoração residencial.",
      idade: "29 anos",
      experiencia: "5 anos de experiência",
      formacao: "Design de Interiores",
      avaliacao: "4.9",
      projetosRealizados: "21 projetos realizados",
      telefone: "(00) 00000-0000",
      email: "fernanda@email.com",
      cidade: "Campinas - SP",
      status: "inativo",
      portfolio: [],
      ultimaMensagem: "Olá! Gostaria de saber mais sobre sua consultoria.",
    },
  ]);

  const [profissionaisChat, setProfissionaisChat] = useState([]);

  const profissionaisFiltrados = profissionaisChat.filter((profissional) =>
    profissional.nome.toLowerCase().includes(busca.toLowerCase())
  );

  function pegarDataAtual() {
    const agora = new Date();
    const ano = agora.getFullYear();
    const mes = String(agora.getMonth() + 1).padStart(2, "0");
    const dia = String(agora.getDate()).padStart(2, "0");

    return `${ano}-${mes}-${dia}`;
  }

  function pegarHorarioAtual() {
    const agora = new Date();
    const horas = String(agora.getHours()).padStart(2, "0");
    const minutos = String(agora.getMinutes()).padStart(2, "0");

    return `${horas}:${minutos}`;
  }

  function trocarTelaProfissionais() {
    setMostrarProfissionais(!mostrarProfissionais);
    setProfissionalSelecionado(null);
    setProfissionalDetalhado(null);
    setBusca("");
  }

  function abrirDetalhesProfissional(profissional) {
    setProfissionalDetalhado(profissional);
  }

  function voltarParaCards() {
    setProfissionalDetalhado(null);
  }

  function mensagensIniciaisDoProfissional(profissional) {
    return [
      {
        id: 1,
        texto: `Olá! Gostaria de saber mais sobre sua consultoria em ${profissional.areaAtuacao}.`,
        data: pegarDataAtual(),
        horario: pegarHorarioAtual(),
        tipo: "enviada",
      },
    ];
  }

  function iniciarConversa(profissional) {
    setProfissionaisChat((profissionaisAtuais) => {
      const profissionalJaExiste = profissionaisAtuais.some(
        (item) => item.email === profissional.email
      );

      if (profissionalJaExiste) {
        return profissionaisAtuais;
      }

      return [profissional, ...profissionaisAtuais];
    });

    setMensagensPorProfissional((mensagensAtuais) => ({
      ...mensagensAtuais,
      [profissional.email]:
        mensagensAtuais[profissional.email] ||
        mensagensIniciaisDoProfissional(profissional),
    }));

    setProfissionaisDisponiveis((profissionaisAtuais) =>
      profissionaisAtuais.filter((item) => item.email !== profissional.email)
    );

    setProfissionalSelecionado(profissional);
    setProfissionalDetalhado(null);
    setMostrarProfissionais(false);
    setBusca("");
  }

  function removerProfissional(profissionalRemovido) {
    setProfissionaisDisponiveis((profissionaisAtuais) =>
      profissionaisAtuais.filter(
        (profissional) => profissional.email !== profissionalRemovido.email
      )
    );

    setProfissionalDetalhado(null);
  }

  function enviarMensagemParaProfissional(profissional, textoMensagem) {
    if (!profissional || textoMensagem.trim() === "") return;

    const novaMensagem = {
      id: Date.now(),
      texto: textoMensagem,
      data: pegarDataAtual(),
      horario: pegarHorarioAtual(),
      tipo: "enviada",
    };

    setMensagensPorProfissional((mensagensAtuais) => ({
      ...mensagensAtuais,
      [profissional.email]: [
        ...(mensagensAtuais[profissional.email] || []),
        novaMensagem,
      ],
    }));

    setProfissionaisChat((profissionaisAtuais) =>
      profissionaisAtuais.map((item) =>
        item.email === profissional.email
          ? { ...item, ultimaMensagem: textoMensagem }
          : item
      )
    );
  }

  return (
    <div className="ContainerConsultoriaCliente">
      <NavegationLateral />

      {mostrarProfissionais && (
        <div className="AreaNavBarMensagens">
          <MensagensNavBar
            nomeUsuario="Sofia"
            emailUsuario="sofia@email"
            notificacoes={16}
            mensagens={28}
            fotoUsuario=""
            className="MensagensNavBarConsultoria"
          />
        </div>
      )}

      <div
        className={
          mostrarProfissionais
            ? "AreaNavConsultoriaProfissionais"
            : "AreaNavConsultoriaProfissionais AreaNavConsultoriaModoChat"
        }
      >
        <NavConsultoriaNovosProfissionais
          mostrandoProfissionais={mostrarProfissionais}
          onTrocarTela={trocarTelaProfissionais}
        />
      </div>

      {mostrarProfissionais ? (
        <>
          <div className="AreaCardsProfissionais">
            {profissionaisDisponiveis.map((profissional, index) => (
              <CardEncontrarProfissionais
                key={index}
                {...profissional}
                onClick={() => abrirDetalhesProfissional(profissional)}
              />
            ))}
          </div>

          {profissionalDetalhado && (
            <div className="OverlayDetalhesProfissional">
              <CardDetalhesProfissionais
                profissional={profissionalDetalhado}
                onVoltar={voltarParaCards}
                onIniciarConversa={iniciarConversa}
                onRemover={removerProfissional}
              />
            </div>
          )}
        </>
      ) : (
        <div
          className={
            profissionalSelecionado
              ? "AreaChatProfissionais ChatAbertoMobile"
              : "AreaChatProfissionais"
          }
        >
          <div className="AreaListaConversasProfissionais">
            <PesquisaConversasClientes
              valorBusca={busca}
              onBuscar={setBusca}
            />

            <NavContatoProfissionais
              profissionais={profissionaisFiltrados}
              profissionalSelecionado={profissionalSelecionado}
              onSelecionarProfissional={(profissional) => {
                setProfissionalSelecionado(profissional);
              }}
            />
          </div>

          <div className="AreaPainelChatCliente">
            <PainelChatCliente
              profissional={profissionalSelecionado}
              mensagens={
                profissionalSelecionado
                  ? mensagensPorProfissional[profissionalSelecionado.email] || []
                  : []
              }
              onEnviarMensagem={enviarMensagemParaProfissional}
              onVoltar={() => setProfissionalSelecionado(null)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ConsultoriaCliente;