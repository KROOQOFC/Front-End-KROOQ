import "./ConsultoriaProfissional.css";

import NavegationLateral from "../../components/NavegationLateral/NavegationLateral";
import MensagensNavBar from "../../components/MensagensNavBar/MensagensNavBar";
import NavConsultoria from "../../components/NavConsultoria/NavConsultoria";

function ConsultoriaProfissional() {
  return (
    <div className="ContainerConsultoriaProfissionais">
      <NavegationLateral />

        <MensagensNavBar
        className="AreaNavBarMensagens"
        nomeUsuario="Sofia"
        emailUsuario="sofia@email"
        notificacoes={16}
        mensagens={28}
        fotoUsuario=""
      />

        <div className="AreaNavConsultoria">
          <NavConsultoria />
        </div>
        
      
    </div>
  );
}

export default ConsultoriaProfissional;