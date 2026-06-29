import "./Rodape.css";
import logoNome from "../../assets/logoNome.webp";
import redeinsta from "../../assets/instagram.webp";
import redelinkedin from "../../assets/linkedin.webp";
import redegit from "../../assets/git.webp";
import { Link, useNavigate } from "react-router-dom";

function Rodape(props) {
  
  return (
    <footer  style={{
        backgroundColor: props.cor}}className="footer" 
    
    >
      <div className="container">

        <div className="logonome-left">
          <img src={logoNome} alt="logo-krooq" />

          <p>
            Conectamos clientes, arquitetos e fornecedores
            em um ecossistema inteligente para transformar
            a jornada da construção em uma experiência
            fluida e moderna.
          </p>

          <div className="redes">
            <a href="https://www.instagram.com/krooq.ofc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
              <img src= {redeinsta} alt="Instagram" />
            </a>

            <a href="#" target="_blank">
              <img src= {redelinkedin} alt="LinkedIn" />
            </a>

            <a href="https://github.com/KROOQOFC" target="_blank">
              <img src={redegit} className="github" alt="GitHub" />
            </a>
          </div>
        </div>

        <div className="links">
          <h3>Links Rápidos</h3>
          <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/sobre-nos">Sobre Nós</Link></li>
            <li><Link to="/">Contato</Link></li>
            <li><Link to="/">Privacidade</Link></li>
          </ul>
        </div>

        <div className="atualizacoes">
          <h3>Para Receber Atualizações</h3>

          <form>
            <div className="input-group">
              <input
                type="email"
                placeholder="Digite seu e-mail..."
                required
              />
              <button type="submit">INSCREVER-SE</button>
            </div>
          </form>

          <p>KROOQ © All rights reserved</p>
        </div>

      </div>
    </footer>
  );
}

export default Rodape;


