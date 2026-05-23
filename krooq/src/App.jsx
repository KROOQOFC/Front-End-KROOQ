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
// import Profissionais from "./pages/Profissionais/Profissionais";
// import Ia from "./pages/Ia/Ia";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeFront />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/escolha-login" element={<EscolhaLogin />} />
        <Route path="/login/:tipoUsuario" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/esqueceu-senha" element={<EsqueceuSenha />} />
        <Route path="/nova-senha" element={<NovaSenha />} />
        {/* <Route path="/Ia" element={<Ia />} /> */}
        <Route path="/senha-redefinida" element={<SenhaRedefinida />} />
        <Route path="/verificacao-email" element={<VerificacaoEmail />} />
        {/* <Route path="/Profissionais" element={<Profissionais />} /> */}

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;