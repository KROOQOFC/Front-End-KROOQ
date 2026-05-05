import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import EscolhaLogin from "./pages/EscolhaLogin/EscolhaLogin";
import EsqueceuSenha from "./pages/EsqueceuSenha/EsqueceuSenha";
import NovaSenha from "./pages/NovaSenha/NovaSenha";
import SenhaRedefinida from "./pages/SenhaRedefinida/SenhaRedefinida";
import VerificacaoEmail from "./pages/VerificacaoEmail/VerificacaoEmail";
import HomeFront from "./pages/HomeFront/HomeFront";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeFront />} />

        <Route path="/escolha-login" element={<EscolhaLogin />} />
        <Route path="/login/:tipoUsuario" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/esqueceu-senha" element={<EsqueceuSenha />} />
        <Route path="/nova-senha" element={<NovaSenha />} />
        <Route path="/senha-redefinida" element={<SenhaRedefinida />} />
        <Route path="/verificacao-email" element={<VerificacaoEmail />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;