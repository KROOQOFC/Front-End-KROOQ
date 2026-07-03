import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Servicos from "./pages/Servicos/Servicos";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import EscolhaLogin from "./pages/EscolhaLogin/EscolhaLogin";
import EsqueceuSenha from "./pages/EsqueceuSenha/EsqueceuSenha";
import NovaSenha from "./pages/NovaSenha/NovaSenha";
import SenhaRedefinida from "./pages/SenhaRedefinida/SenhaRedefinida";
import VerificacaoEmail from "./pages/VerificacaoEmail/VerificacaoEmail";
import HomeFront from "./pages/HomeFront/HomeFront";
import IA from "./pages/IA/IA";
import Agenda from "./pages/Agenda/Agenda";
import AgendaCliente from "./pages/AgendaCliente/AgendaCliente";
import ConsultoriaProfissional from "./pages/ConsultoriaProfissional/ConsultoriaProfissional";
import ConsultoriaCliente from "./pages/ConsultoriaCliente/ConsultoriaCliente";
import Profissionais from "./pages/Profissionais/Profissionais";
import CentralProfissional from "./pages/CentralProfissional/CentralProfissional";
import TarefasProfissional from "./pages/TarefasProfissional/TarefasProfissional";
import MeusProjetosProfissional from "./pages/MeusProjetosProfissional/MeusProjetosProfissional";
import ChatIA from "./pages/ChatIA/ChatIA";
import ProjetosCliente from "./pages/ProjetosCliente/ProjetosCliente";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import SobreNos from "./pages/SobreNos/SobreNos";
import NovoProjeto from "./pages/NovoProjeto/NovoProjeto";
import CentralCliente from "./pages/CentralCliente/CentralCliente";
import VLibras from "./components/VLibras/VLibras";

function App() {
  return (
    <BrowserRouter>
      <VLibras />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomeFront />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/ia" element={<IA />} />

        <Route path="/escolha-login" element={<EscolhaLogin />} />
        <Route path="/login/:tipoUsuario" element={<Login />} />
        <Route path="/cadastro/:tipoUsuario" element={<Cadastro />} />
        <Route path="/cadastro" element={<Navigate to="/escolha-login" />} />

        <Route path="/esqueceu-senha" element={<EsqueceuSenha />} />
        <Route path="/nova-senha" element={<NovaSenha />} />
        <Route path="/senha-redefinida" element={<SenhaRedefinida />} />
        <Route path="/verificacao-email" element={<VerificacaoEmail />} />

        <Route path="/profissionais" element={<Profissionais />} />
        <Route path="/CentralCliente" element={<CentralCliente />} />
        <Route path="/CentralProfissional" element={<CentralProfissional />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/AgendaCliente" element={<AgendaCliente />} />
        <Route path="/consultoria" element={<ConsultoriaProfissional />} />
        <Route path="/consultoriaCliente" element={<ConsultoriaCliente />} />
        <Route path="/tarefas" element={<TarefasProfissional />} />
        <Route path="/NovoProjeto" element={<NovoProjeto />} />
        <Route path="/sobre-nos" element={<SobreNos />} />

        <Route path="/projetos" element={<MeusProjetosProfissional />} />
        <Route path="/projetosCliente" element={<ProjetosCliente />} />
        <Route path="/chat-ia" element={<ChatIA />} />
        <Route path="/chat-ia/:id" element={<ChatIA />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;