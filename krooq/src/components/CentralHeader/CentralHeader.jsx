import { useState } from "react";

import "./CentralHeader.css";

import IconBusca from "../../assets/IconBusca.png";
import IconNotificacao from "../../assets/IconNotificacao.png";
import PerfilPadrao from "../../assets/PerfilPadrao.png";

function CentralHeader({
  nomeUsuario,
  fotoUsuario,
  corSaudacao,
  onNotificacoes,
  onPerfil,
}) {

  const [buscaAberta, setBuscaAberta] = useState(false);

  function abrirBusca() {

    setBuscaAberta(!buscaAberta);

  }

  return (

    <header className="CentralHeaderGeral">

      <h1
        className="SaudacaoHeader"
        style={{
          color: corSaudacao || "#FFFFFF"
        }}
      >

        Olá! {nomeUsuario || "Usuário"}

      </h1>

      <div className="AcoesHeader">

        <div
          className={`BuscaContainer ${
            buscaAberta ? "aberta" : ""
          }`}
        >

          <div className="CampoInput">

            <input
              type="text"
              placeholder="Pesquisar"
              autoFocus={buscaAberta}
            />

          </div>

          <button
            className="BuscaBotao"
            onClick={abrirBusca}
          >

            <img
              src={IconBusca}
              alt="Pesquisar"
            />

          </button>

        </div>

        <button
          className="NotificacaoBotao"
          onClick={onNotificacoes}
        >

          <img
            src={IconNotificacao}
            alt="Notificações"
          />

        </button>

        <button
          className="PerfilBotao"
          onClick={onPerfil}
        >

          <img
            src={fotoUsuario || PerfilPadrao}
            alt={`Foto de ${nomeUsuario || "Usuário"}`}
          />

        </button>

      </div>

    </header>

  );

}

export default CentralHeader;