import AuthLayout from "../../components/AuthLayout/AuthLayout";
import "./EsqueceuSenha.css";
import Banner from "../../assets/nome_Krooq_verde.png";
import IconKey from "../../assets/icon_chave.png";

function EsqueceuSenha() {
    return (
        <AuthLayout>
            <div className="esqueceuSenha-container">
                <img src={Banner} alt="Krooq" className="esqueceuSenha-logo" />

                <div className="esqueceuSenha-icon-box">
                    <img src={IconKey} alt="Ícone chave" className="esqueceuSenha-icon" />
                </div>

                <h2>Esqueceu a senha?</h2>

                <p className="esqueceuSenha-subtitle">
                    Não se preocupe, enviaremos instruções de redefinição.
                </p>

                <form className="esqueceuSenha-form">
                    <div className="esqueceuSenha-campo">
                        <label>E-mail</label>
                        <input type="email" placeholder="Digite seu e-mail" />
                    </div>

                    <button type="button" className="btn-forgot">
                        Redefinir senha
                    </button>
                </form>

                <a href="/login" className="back-login">
                    Voltar para o login
                </a>
            </div>
        </AuthLayout>
    );
}

export default EsqueceuSenha;