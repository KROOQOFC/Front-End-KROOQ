import AuthLayout from "../../components/AuthLayout/AuthLayout";
import "./EscolhaLogin.css";
import Banner from "../../assets/nome_Krooq_verde.png";

function EscolhaLogin() {
    return (
        <AuthLayout>
            <div className="escolhaLogin-container">
                <img 
                    src={Banner} 
                    alt="Krooq" 
                    className="escolhaLogin-logo" 
                />

                <p className="escolhaLogin-welcome">
                    Olá, bem-vindo 👋
                </p>

                <h2>
                    Para começarmos, identifique seu perfil de acesso
                </h2>

                <div className="escolhaLogin-divider">
                    <span></span>
                    <p>Escolha uma opção abaixo</p>
                    <span></span>
                </div>

                <div className="escolhaLogin-options">
                    <a href="/login/arquiteto" className="perfil-btn perfil-btn-green">
                        Sou Arquiteto
                    </a>

                    <a href="/login/cliente" className="perfil-btn perfil-btn-gold">
                        Sou Cliente
                    </a>

                    <a href="/login/fornecedor" className="perfil-btn perfil-btn-green">
                        Sou Fornecedor
                    </a>
                </div>

                <p className="escolhaLogin-footer">
                    Acesse sua conta de acordo com seu tipo de usuário.
                </p>
            </div>
        </AuthLayout>
    );
}

export default EscolhaLogin;