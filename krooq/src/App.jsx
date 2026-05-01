import AuthLayout from "./components/AuthLayout/AuthLayout";
import Login from "./pages/Login/login";
import Cadastro  from "./pages/Cadastro/cadastro";
import EsqueceuSenha from "./pages/EsqueceuSenha/EsqueceuSenha";
import VerificacaoEmail from "./pages/VerificacaoEmail/VerificacaoEmail";
import NovaSenha from "./pages/NovaSenha/NovaSenha";
import SenhaRedefinida from "./pages/SenhaRedefinida/SenhaRedefinida";
import EscolherPerfil from "./pages/EscolhaLogin/EscolhaLogin";

function App() {
  return (
    <>
    {/* <Login tipoUsuario="Arquiteto" /> */}
    {/* <Cadastro /> */}
    {/* <EsqueceuSenha /> */}
    {/* <VerificacaoEmail /> */}
    {/* <NovaSenha/> */}
    {/* <SenhaRedefinida/> */}
    <EscolherPerfil />
    </>
  );
}

export default App;