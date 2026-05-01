import "./Navegation.css"
import logoTipo from "../../assets/logoTipo.png"


function Navegation() {
    return (
        <header>
           
            <nav className="conteiner">
                 <img src= {logoTipo}/>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Projetos</a></li>
                    <li><a href="">Serviços</a></li>
                    <li><a href="">Profissionais</a></li>
                    <li><a href="">Jornada</a></li>
                </ul>
                 <button type="button" className="btn">Cadastrar</button>
            </nav>

        </header>
    )
}
export default Navegation