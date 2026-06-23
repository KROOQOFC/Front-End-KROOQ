import "./ConsultoriaProfissional.css";
import { useState } from "react";

import NavegationLateral from "../../components/NavegationLateral/NavegationLateral";
import MensagensNavBar from "../../components/MensagensNavBar/MensagensNavBar";
import NavConsultoriaNovosClientes from "../../components/NavConsultoriaNovosClientes/NavConsultoriaNovosClientes";
import CardEncontrarClientes from "../../components/CardEncontrarClientes/CardEncontrarClientes";
import CardDetalhesProjetoCliente from "../../components/CardDetalhesProjetoCliente/CardDetalhesProjetoCliente";
import NavContatoClientes from "../../components/NavContatoClientes/NavContatoClientes";
import PesquisaConversasClientes from "../../components/PesquisaConversasClientes/PesquisaConversasClientes";
import PainelChatProfissional from "../../components/PainelChatProfissional/PainelChatProfissional";

import Foto1 from "../../assets/perfil1.png";
import Foto2 from "../../assets/perfil2.png";
import Foto3 from "../../assets/perfil3.png";

function ConsultoriaProfissional() {
  const [mostrarClientes, setMostrarClientes] = useState(false);
  const [busca, setBusca] = useState("");
  const [clienteSelecionado, setClienteSelecionado] = useState(null);
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);
  const [mensagensPorCliente, setMensagensPorCliente] = useState({});

  const [clientesDisponiveis, setClientesDisponiveis] = useState([
    {
      foto: Foto1,
      nome: "Lucas Andrade",
      tipo: "Cliente",
      projeto: "Reforma na Cozinha",
      descricao:
        "Cliente deseja reformar a cozinha, trocar revestimentos, melhorar a iluminação e reorganizar o espaço para deixá-lo mais funcional e moderno.",
      prazo: "60 dias",
      orcamento: "R$ 15.000",
      imagensProjeto: [],
      telefone: "(00) 00000-0000",
      email: "andrade@email.com",
      cidade: "Mogi das Cruzes - SP",
      status: "ativo",
      ultimaMensagem: "Projeto aceito. Inicie a conversa...",
    },
    {
      foto: Foto2,
      nome: "Matheus Costa",
      tipo: "Cliente",
      projeto: "Sala construção",
      descricao:
        "Cliente deseja construir e planejar uma sala confortável, com melhor aproveitamento do ambiente, iluminação adequada e acabamento moderno.",
      prazo: "45 dias",
      orcamento: "R$ 12.000",
      imagensProjeto: [],
      telefone: "(00) 00000-0000",
      email: "costa@email.com",
      cidade: "São José dos Campos - SP",
      status: "inativo",
      ultimaMensagem: "Projeto aceito. Inicie a conversa...",
    },
    {
      foto: Foto3,
      nome: "Camila Nunes",
      tipo: "Cliente",
      projeto: "Ampliação de Área Gourmet",
      descricao:
        "Cliente deseja ampliar a área gourmet da residência, criando um espaço integrado para receber familiares e amigos com conforto.",
      prazo: "75 dias",
      orcamento: "R$ 22.000",
      imagensProjeto: [],
      telefone: "(00) 00000-0000",
      email: "nunes@email.com",
      cidade: "Campinas - SP",
      status: "ativo",
      ultimaMensagem: "Projeto aceito. Inicie a conversa...",
    },
    {
      foto: Foto1,
      nome: "Renan Santos",
      tipo: "Cliente",
      projeto: "Projeto Residencial",
      descricao:
        "Cliente busca desenvolver um projeto residencial completo, com planejamento dos ambientes, organização dos espaços e definição de etapas da obra.",
      prazo: "90 dias",
      orcamento: "R$ 35.000",
      imagensProjeto: [],
      telefone: "(00) 00000-0000",
      email: "renan@email.com",
      cidade: "Suzano - SP",
      status: "ativo",
      ultimaMensagem: "Projeto aceito. Inicie a conversa...",
    },
    {
      foto: Foto2,
      nome: "Mariana Lopes",
      tipo: "Cliente",
      projeto: "Design de Interiores",
      descricao:
        "Cliente deseja um projeto de interiores para renovar os ambientes da casa, incluindo escolha de móveis, cores, iluminação e decoração.",
      prazo: "30 dias",
      orcamento: "R$ 8.000",
      imagensProjeto: [],
      telefone: "(00) 00000-0000",
      email: "mariana@email.com",
      cidade: "São Paulo - SP",
      status: "inativo",
      ultimaMensagem: "Projeto aceito. Inicie a conversa...",
    },
  ]);

  const [clientesChat, setClientesChat] = useState([]);

  const clientesFiltrados = clientesChat.filter((cliente) =>
    cliente.nome.toLowerCase().includes(busca.toLowerCase())
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

  function trocarTelaClientes() {
    setMostrarClientes(!mostrarClientes);
    setClienteSelecionado(null);
    setProjetoSelecionado(null);
    setBusca("");
  }

  function abrirDetalhesProjeto(cliente) {
    setProjetoSelecionado(cliente);
  }

  function voltarParaCards() {
    setProjetoSelecionado(null);
  }

  function mensagensIniciaisDoCliente(cliente) {
    return [
      {
        id: 1,
        texto: `Olá! Vi que você aceitou meu projeto: ${cliente.projeto}.`,
        data: pegarDataAtual(),
        horario: pegarHorarioAtual(),
        tipo: "recebida",
      },
    ];
  }

  function aceitarProjeto(cliente) {
    setClientesChat((clientesAtuais) => {
      const clienteJaExiste = clientesAtuais.some(
        (item) => item.email === cliente.email
      );

      if (clienteJaExiste) {
        return clientesAtuais;
      }

      return [cliente, ...clientesAtuais];
    });

    setMensagensPorCliente((mensagensAtuais) => ({
      ...mensagensAtuais,
      [cliente.email]:
        mensagensAtuais[cliente.email] || mensagensIniciaisDoCliente(cliente),
    }));

    setClientesDisponiveis((clientesAtuais) =>
      clientesAtuais.filter((item) => item.email !== cliente.email)
    );

    setClienteSelecionado(cliente);
    setProjetoSelecionado(null);
    setMostrarClientes(false);
    setBusca("");

    console.log(`Notificação enviada para ${cliente.nome}`);
  }

  function recusarProjeto(clienteRecusado) {
    setClientesDisponiveis((clientesAtuais) =>
      clientesAtuais.filter((cliente) => cliente.email !== clienteRecusado.email)
    );

    setProjetoSelecionado(null);
  }

  function enviarMensagemParaCliente(cliente, textoMensagem) {
    if (!cliente || textoMensagem.trim() === "") return;

    const novaMensagem = {
      id: Date.now(),
      texto: textoMensagem,
      data: pegarDataAtual(),
      horario: pegarHorarioAtual(),
      tipo: "enviada",
    };

    setMensagensPorCliente((mensagensAtuais) => ({
      ...mensagensAtuais,
      [cliente.email]: [
        ...(mensagensAtuais[cliente.email] || []),
        novaMensagem,
      ],
    }));

    setClientesChat((clientesAtuais) =>
      clientesAtuais.map((item) =>
        item.email === cliente.email
          ? { ...item, ultimaMensagem: textoMensagem }
          : item
      )
    );
  }

  return (
    <div className="ContainerConsultoriaProfissionais">
      <NavegationLateral />

      {mostrarClientes && (
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
          mostrarClientes
            ? "AreaNavConsultoriaNovosClientes"
            : "AreaNavConsultoriaNovosClientes AreaNavConsultoriaModoChat"
        }
      >
        <NavConsultoriaNovosClientes
          mostrandoClientes={mostrarClientes}
          onTrocarTela={trocarTelaClientes}
        />
      </div>

      {mostrarClientes ? (
        <>
          <div className="AreaCardsClientes">
            {clientesDisponiveis.map((cliente, index) => (
              <CardEncontrarClientes
                key={index}
                {...cliente}
                onClick={() => abrirDetalhesProjeto(cliente)}
              />
            ))}
          </div>

          {projetoSelecionado && (
            <div className="OverlayDetalhesProjetoCliente">
              <CardDetalhesProjetoCliente
                cliente={projetoSelecionado}
                onVoltar={voltarParaCards}
                onAceitar={aceitarProjeto}
                onRecusar={recusarProjeto}
              />
            </div>
          )}
        </>
      ) : (
        <div
          className={
            clienteSelecionado
              ? "AreaChatClientes ChatAbertoMobile"
              : "AreaChatClientes"
          }
        >
          <div className="AreaListaConversasClientes">
            <PesquisaConversasClientes
              valorBusca={busca}
              onBuscar={setBusca}
            />

            <NavContatoClientes
              clientes={clientesFiltrados}
              clienteSelecionado={clienteSelecionado}
              onSelecionarCliente={(cliente) => {
                setClienteSelecionado(cliente);
              }}
            />
          </div>

          <div className="AreaPainelChatProfissional">
            <PainelChatProfissional
              cliente={clienteSelecionado}
              mensagens={
                clienteSelecionado
                  ? mensagensPorCliente[clienteSelecionado.email] || []
                  : []
              }
              onEnviarMensagem={enviarMensagemParaCliente}
              onVoltar={() => setClienteSelecionado(null)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ConsultoriaProfissional;