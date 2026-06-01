import "./MensagensNavBar.css";

import { HiOutlineBell, HiOutlineMail, HiOutlineUser } from "react-icons/hi";
import { LuArrowUpDown } from "react-icons/lu";

function MensagensNavBar({ nomeUsuario, emailUsuario, fotoUsuario, notificacoes, mensagens, className}) {
  return (
    <section className={`ContainerMensagensNavBar ${className}`}>
      <h3 className="TituloMensagens">Mensagens</h3>

      <div className="AcoesMensagens">
        <div className="ContainerIcone">
          <HiOutlineBell className="IconeMensagens" />
          <span className="BadgeIcone">{notificacoes}</span>
        </div>

        <div className="ContainerIcone">
          <HiOutlineMail className="IconeMensagens" />
          <span className="BadgeIcone BadgeLaranja">{mensagens}</span>
        </div>

        <div className="ContainerIcone">
          <LuArrowUpDown className="IconeMensagens" />
        </div>

        <div className="LinhaSeparadora"></div>

        <div className="PerfilUsuario">
          {fotoUsuario ? (
            <img src={fotoUsuario} alt={nomeUsuario} className="FotoPerfil" />
          ) : (
            <div className="PerfilPadrao">
              <HiOutlineUser />
            </div>
          )}

          <div className="DadosUsuario">
            <p className="NomeUsuario">{nomeUsuario}</p>
            <p className="EmailUsuario">{emailUsuario}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MensagensNavBar;