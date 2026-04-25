import "./LoginUsuario.css";
function LoginUsuario() {
    return (
        <div className="login-cliente-container">
            <div>
                <h1>Login Cliente</h1>
                <p>Olá, bem vindo</p>
                <input type="text" />
            </div>
            <form action="#">
                <label htmlFor=""
                >Email</label>
                <input type="text" placeholder="Digite sua email"/>
                <label htmlFor=""
                >Senha</label>
                <input type="text" placeholder="Digite sua senha"/>

                <a href="#">Esqueceu a senha?</a>
            </form>
            <div className="login">
                <a href="#" className="login-a">Login</a>
                <p>Ainda não tem uma conta? <a href="#">Cadastre-se</a></p>

            </div>

        </div>

    )

}

export default LoginUsuario