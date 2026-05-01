import AuthLayout from "../../components/AuthLayout/AuthLayout";
import "./SenhaRedefinida.css";
import Banner from "../../assets/nome_Krooq_verde.png";
import IconOk from "../../assets/icon_ok.png";

function SenhaRedefinida() {
    return (
        <AuthLayout>
            <div className="senhaRedefinida-container">
                <img 
                    src={Banner} 
                    alt="Krooq" 
                    className="senhaRedefinida-logo" 
                />

                <div className="senhaRedefinida-icon-box">
                    <img 
                        src={IconOk} 
                        alt="Senha redefinida com sucesso" 
                        className="senhaRedefinida-icon" 
                    />
                </div>

                <h2>Senha redefinida</h2>

                <p className="senhaRedefinida-subtitle">
                    Sua senha foi redefinida com sucesso. <br />
                    Clique abaixo para fazer login.
                </p>

                <a href="/login" className="btn-continuar">
                    Continuar
                </a>

                <a href="/login" className="back-login">
                    
                    Voltar para o login
                </a>
            </div>
        </AuthLayout>
    );
}

export default SenhaRedefinida;