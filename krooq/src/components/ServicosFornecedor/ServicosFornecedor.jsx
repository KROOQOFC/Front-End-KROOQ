import "./ServicosFornecedor.css"
import Fornecedor1 from "../../assets/Fornecedor1.webp"
import Fornecedor2 from "../../assets/Fornecedor2.webp"
import Fornecedor3 from "../../assets/Fornecedor3.webp"
import Fornecedor4 from "../../assets/Fornecedor4.webp"
import Fornecedor5 from "../../assets/Fornecedor5.webp"
import Fornecedor6 from "../../assets/Fornecedor6.webp"
import BotaKrooq from "../../assets/BotaKrooq.webp"

function ServicosFornecedor() {
  return (
    <section className="FornecedoresServicos" style={{ backgroundImage: `url(${BotaKrooq})` }}>
      <div className="CadastrarFornecedor">
        <span className="tagFornecedor">Cadastrar minha empresa</span>
        <h2>Seja um fornecedor parceiro</h2>
        <p>Você cadastra sua empresa na nossa plataforma e passa a fazer parte da nossa rede de parceiros.</p>
        <div className="BotoesFornecedor">
          <button className="BtFDetalhes">VER DETALHES</button>
          <button className="BtFRede">ENTRE PARA A REDE</button>
        </div>
      </div>

      <div className="LogoFornecedores">
        <img src={Fornecedor1} alt=""/>
        <img src={Fornecedor2} alt=""/>
        <img src={Fornecedor3} alt=""/>
        <img src={Fornecedor4} alt=""/>
        <img src={Fornecedor5} alt=""/>
        <img src={Fornecedor6} alt=""/>
      </div>
    </section>
  )
}

export default ServicosFornecedor;