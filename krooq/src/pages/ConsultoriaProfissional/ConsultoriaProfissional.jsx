import "./ConsultoriaProfissional.css";
import { useState } from "react";

import NavegationLateral from "../../components/NavegationLateral/NavegationLateral";
import MensagensNavBar from "../../components/MensagensNavBar/MensagensNavBar";
import NavConsultoriaNovosClientes from "../../components/NavConsultoriaNovosClientes/NavConsultoriaNovosClientes";
import CardEncontrarClientes from "../../components/CardEncontrarClientes/CardEncontrarClientes";
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

  const clientes = [
    {
      foto: Foto1,
      nome: "Lucas Andrade",
      tipo: "Cliente",
      projeto: "Reforma na Cozinha",
      telefone: "(00) 00000-0000",
      email: "andrade@email.com",
      cidade: "Mogi das Cruzes - SP",
      status: "ativo",
      ultimaMensagem: "Perfeito, fico muito mais...",
    },
    {
      foto: Foto2,
      nome: "Matheus Costa",
      tipo: "Cliente",
      projeto: "Sala construção",
      telefone: "(00) 00000-0000",
      email: "costa@email.com",
      cidade: "São José dos Campos - SP",
      status: "inativo",
      ultimaMensagem: "Finalizei o moodboard...",
    },
    {
      foto: Foto3,
      nome: "Camila Nunes",
      tipo: "Cliente",
      projeto: "Ampliação de Área Gourmet",
      telefone: "(00) 00000-0000",
      email: "nunes@email.com",
      cidade: "Campinas - SP",
      status: "ativo",
      ultimaMensagem: "Recebi as plantas estruturais...",
    },
    {
      foto: Foto1,
      nome: "Renan Santos",
      tipo: "Cliente",
      projeto: "Projeto Residencial",
      telefone: "(00) 00000-0000",
      email: "renan@email.com",
      cidade: "Suzano - SP",
      status: "ativo",
      ultimaMensagem: "Conseguimos marcar uma...",
    },
    {
      foto: Foto2,
      nome: "Mariana Lopes",
      tipo: "Cliente",
      projeto: "Design de Interiores",
      telefone: "(00) 00000-0000",
      email: "mariana@email.com",
      cidade: "São Paulo - SP",
      status: "inativo",
      ultimaMensagem: "Recebi os renders em 3D...",
    },
  ];

  const clientesFiltrados = clientes.filter((cliente) =>
    cliente.nome.toLowerCase().includes(busca.toLowerCase())
  );

  function trocarTelaClientes() {
    setMostrarClientes(!mostrarClientes);
    setClienteSelecionado(null);
    setBusca("");
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
        <div className="AreaCardsClientes">
          {clientes.map((cliente, index) => (
            <CardEncontrarClientes key={index} {...cliente} />
          ))}
        </div>
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
              onVoltar={() => setClienteSelecionado(null)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ConsultoriaProfissional;