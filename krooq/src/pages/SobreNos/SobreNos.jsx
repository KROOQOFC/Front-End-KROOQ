import "./SobreNos.css";
import EquipeKrooq from "../../assets/EquipeKrooq.png";
import Navegation from "../../components/Navegation/Navegation";
import Carrossel from '../../components/Carrossel/Carrossel'
import IconeMissaoSobreNos from "../../assets/IconeMissaoSobreNos.png";
import IconeVisaoSobreNos from "../../assets/IconeVisaoSobreNos.png";
import IconeValoresSobreNos from "../../assets/IconeValoresSobreNos.png";
import Ods8SobreNos from "../../assets/Ods8SobreNos.png";
import Ods9SobreNos from "../../assets/Ods9SobreNos.png";
import Ods10SobreNos from "../../assets/Ods10SobreNos.png";
import FotoEquipeFinalSobreNos from "../../assets/FotoEquipeFinalSobreNos.png"
import Rodape from "../../components/Rodape/Rodape";
import IconeGuiaKrooq from "../../assets/IconeGuiaKrooq.png"
import CardMVV from "../../components/CardMVV/CardMVV";
import CardODS from "../../components/CardODS/CardODS";

function SobreNos() {
  return (
   <>
  <section className="conteiner-sobre-nos">
    
    <div className="verde">

      <div className="layout-navbar-sobre-nos">
        <Navegation />
      </div>


      <h2 className="titulo-krooq">
        KROOQ — Simplificando Obras, conectando pessoas
      </h2>

       <div className="btn-e-escrita">
        Nossa trajetória
      </div>

      <div className="card-equipe">
        <img
          src={EquipeKrooq}
          alt="Equipe KROOQ"
          className="imagem-equipe"
        />


        <div className="texto-equipe">
          <h2 className="titulo-equipe">
            Conectar mentes para erguer o futuro das obras.
          </h2>

          <h3 className="descricao-equipe">
            Atrás de cada linha de código, design e estratégia, nosso time une
            tecnologia e conhecimento de mercado para resolver os gargalos da
            construção civil. Criamos um ecossistema transparente e
            colaborativo que conecta arquitetos, profissionais autônomos,
            fornecedores e clientes com total segurança.
          </h3>
        </div>

        <button className="btn-krooq">
         Guia da KROOQ <img src={IconeGuiaKrooq} alt=""  className="icone-btn-guia-krooq"/>
        </button>
      </div>

    </div>
    <div className="efeito-circulo"></div>
  </section>
  
    <section className="missao-visao-valores">

  <h2 className="titulo-mvv">
    Nossa Missão, Visão e Valores
  </h2>

  <p className="descricao-mvv">
   Construir o futuro do mercado de arquitetura e obras através de um ecossistema transparente, colaborativo e tecnológico.
  </p>

  <div className="cards-mvv">

   <div className="cards-mvv">
  <CardMVV
    icone={IconeMissaoSobreNos}
    titulo="Missão"
    descricao=" Transformar a gestão da construção civil centralizando processos, comunicação e informações em um único lugar, para garantir total transparência e controle para todos os envolvidos na obra."
  />

  <CardMVV
    icone={IconeVisaoSobreNos}
    titulo="Visão"
    descricao="Ser a plataforma que revoluciona o gerenciamento de obras através da conexão e organização, para ampliar a visibilidade de profissionais autônomos e gerando total confiança aos clientes."
  />

  <CardMVV
    icone={IconeValoresSobreNos}
    titulo="Valores"
    descricao="Clareza & Conexão: Informações compreensíveis sem ruídos, para unir clientes a profissionais de confiança.
Diversidade & Crescimento: Espaço para todos os perfis evoluírem e crescerem juntos a cada nova obra concluída."
  />
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

      <CardODS
    imagem={Ods8SobreNos}
    alt="ODS 8"
    descricao="principalmente ao ODS 8, ao melhorar a produtividade e as oportunidades dos profissionais autônomos."
    tituloTag="Trabalho Decente e Crescimento Econômico"
    classeTag="tags-ods-8"
  />

  <CardODS
    imagem={Ods9SobreNos}
    alt="ODS 9"
    descricao=" com o ODS 9, ao trazer mais inovação e acelerar a digitalização dos processos de gestão em ambientes voltados para construção."
    tituloTag="Indústria, Inovação e Infraestrutura"
  />

  <CardODS
    imagem={Ods10SobreNos}
    alt="ODS 10"
    descricao=" com o ODS 10, ao ampliar as oportunidades para prestadores de serviço e valorizando a competência técnica."
    tituloTag="Redução das Desigualdades"
    classeTexto="texto-ods-10"
    classeTag="tags-ods-10"
  />
  </div>

</section>
<section className="fotos-da-equipe">
   <img src={FotoEquipeFinalSobreNos} alt=""  className="imagem-equipe-final"/> 
</section>
<Carrossel />
<Rodape />
</>
  );
}

export default SobreNos;