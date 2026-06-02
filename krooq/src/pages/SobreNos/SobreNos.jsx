import "./SobreNos.css";
import EquipeKrooq from "../../assets/EquipeKrooq.png";
import Navegation from "../../components/Navegation/Navegation";
import FundoSobreNos from "../../assets/FundoSobreNos.png";
import IconeMissaoSobreNos from "../../assets/IconeMissaoSobreNos.png";
import IconeVisaoSobreNos from "../../assets/IconeVisaoSobreNos.png";
import IconeValoresSobreNos from "../../assets/IconeValoresSobreNos.png";
import Ods8SobreNos from "../../assets/Ods8SobreNos.png";
import Ods9SobreNos from "../../assets/Ods9SobreNos.png";
import Ods10SobreNos from "../../assets/Ods10SobreNos.png";
import FotoEquipeFinalSobreNos from "../../assets/FotoEquipeFinalSobreNos.png"

function SobreNos() {
  return (
    <>
    <section className="conteiner-sobre-nos">
        <div className="layout-navbar-sobre-nos">
        <Navegation/>
        </div>
      <div className="verde">

        <div className="btn-e-escrita">
          Nossa trajetória
        </div>

        <h2 className="titulo-krooq">
          KROOQ — Simplificando Obras, conectando pessoas
        </h2>

        <div className="card-equipe">
          <img
            src={EquipeKrooq}
            alt="Equipe KROOQ"
            className="imagem-equipe"
          />

          <div className="overlay-equipe"></div>

          <div className="texto-equipe">
            <h2 className="titulo-equipe">
              Conectar mentes para erguer o futuro das obras.
            </h2>

            <h3 className="descricao-equipe">
             Atrás de cada linha de código, design e estratégia, nosso time une tecnologia e conhecimento de mercado para resolver os gargalos da construção civil. Criamos um ecossistema transparente e colaborativo que conecta arquitetos, profissionais autônomos, fornecedores e clientes com total segurança.
            </h3>
          </div>

          <button className="btn-krooq">
            Saiba da KROOQ →
          </button>
        </div>

      </div>
      <div className="m-v-v-sobre-nos">

      </div>
    </section>
    <section className="missao-visao-valores">

  <h2 className="titulo-mvv">
    Nossa Missão, Visão e Valores
  </h2>

  <p className="descricao-mvv">
   Construir o futuro do mercado de arquitetura e obras através de um ecossistema transparente, colaborativo e tecnológico.
  </p>

  <div className="cards-mvv">

    <div className="card-mvv">
      <div className="icone-mvv"><img src={IconeMissaoSobreNos} alt="" /></div>

      <h3>Missão</h3>

      <p>
        Transformar a gestão da construção civil centralizando processos, comunicação e informações em um único lugar, para garantir total transparência e controle para todos os envolvidos na obra.
      </p>
    </div>

    <div className="card-mvv">
      <div className="icone-mvv"><img src={IconeVisaoSobreNos} alt="" /></div>

      <h3>Visão</h3>

      <p>
       Ser a plataforma que revoluciona o gerenciamento de obras através da conexão e organização, para ampliar a visibilidade de profissionais autônomos e gerando total confiança aos clientes.
      </p>
    </div>

    <div className="card-mvv">
      <div className="icone-mvv"><img src={IconeValoresSobreNos} alt="" /></div>

      <h3>Valores</h3>

      <p>
      Clareza & Conexão: Informações compreensíveis sem ruídos, para unir clientes a profissionais de confiança.
Diversidade & Crescimento: Espaço para todos os perfis evoluírem e crescerem juntos a cada nova obra concluída.
      </p>
    </div>

  </div>

</section>
<section className="ods-section">
  <h2 className="titulo-ods">
    ODS que fazem parte
    <br />
    da KROOQ
  </h2>

  <p className="descricao-ods">
   Voamos alto para ser a plataforma que revoluciona o mercado de obras através da organização.
  </p>

  <div className="cards-ods">

    <div className="card-ods">
      <div className="topo-ods">
        <img src={Ods8SobreNos} alt="ODS 8" />
      </div>

      <p className="texto-ods">
        <strong className="tag-verde-sobre-nos">Nós alinhamos</strong> principalmente ao ODS 8, ao melhorar a produtividade e as oportunidades dos profissionais autônomos.
      </p>

      <span className="tags-ods-8">
       Trabalho Decente e Crescimento Econômico
      </span>
    </div>

    <div className="card-ods">
      <div className="topo-ods">
        <img src={Ods9SobreNos} alt="ODS 9" />
      </div>

      <p className="texto-ods">
        <strong className="tag-verde-sobre-nos">Nós alinhamos</strong>  principalmente ao ODS 9, ao trazer mais inovação e acelerar a digitalização dos processos de gestão em canteiros de obra.
      </p>

      <span className="tags-ods">
       Indústria, Inovação e Infraestrutura
      </span>
    </div>

    <div className="card-ods">
      <div className="topo-ods">
        <img src={Ods10SobreNos} alt="ODS 10" />
      </div>

      <p className="texto-ods-10">
        <strong className="tag-verde-sobre-nos">Nós alinhamos</strong> principalmente ao ODS 10, ao abrir novas oportunidades para prestadores de serviço, garantindo que o acesso ao trabalho dependa da competência técnica, e não apenas de indicações.
      </p>

      <span className="tags-ods-10">
       Indústria, Inovação e Infraestrutura
      </span>
    </div>

  </div>
</section>
<section className="fotos-da-equipe">
   <img src={FotoEquipeFinalSobreNos} alt=""  className="imagem-equipe-final"/> 
</section>
</>
  );
}

export default SobreNos;