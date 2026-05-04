import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import EscolhaLogin from "./pages/EscolhaLogin/EscolhaLogin";
import EsqueceuSenha from "./pages/EsqueceuSenha/EsqueceuSenha";
import NovaSenha from "./pages/NovaSenha/NovaSenha";
import SenhaRedefinida from "./pages/SenhaRedefinida/SenhaRedefinida";
import VerificacaoEmail from "./pages/VerificacaoEmail/VerificacaoEmail";
import ButtonGreen from "./components/ButtonGreen/ButtonGreen";
import Navegation from "./components/Navegation/Navegation";
import DoisButtons from "./components/DoisButtons/DoisButtons";
import HomeFront from "./pages/HomeFront/HomeFront";

function App() {
  return (
    <BrowserRouter>

      <Navegation />

      <Routes>
        <Route path="/" element={<HomeFront />} />
      </Routes>

    </BrowserRouter>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Navigate to="/escolha-login" />} />

    //     <Route path="/escolha-login" element={<EscolhaLogin />} />

    //     <Route path="/login" element={<Navigate to="/escolha-login" />} />
    //     <Route path="/login/:tipoUsuario" element={<Login />} />

    //     <Route path="/cadastro" element={<Cadastro />} />
    //     <Route path="/esqueceu-senha" element={<EsqueceuSenha />} />
    //     <Route path="/nova-senha" element={<NovaSenha />} />
    //     <Route path="/senha-redefinida" element={<SenhaRedefinida />} />
    //     <Route path="/verificacao-email" element={<VerificacaoEmail />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;