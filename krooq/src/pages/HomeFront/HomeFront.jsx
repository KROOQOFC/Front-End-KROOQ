import "./HomeFront.css";
import DoisButtons from "../../components/DoisButtons/DoisButtons";
import Navegation from "../../components/Navegation/Navegation";
import Card from "../../components/Card/Card";
import CasaBasker from "../../assets/CasaBasker.png";
import CasaFerrara from "../../assets/CasaFerrara.png"
import ButtonGreen from "../../components/ButtonGreen/ButtonGreen"
import CasaAlmeria from "../../assets/CasaAlmeria .png"
import Rodape from "../../components/Rodape/Rodape"
import GaleriaHome from "../../components/GaleriaHome/GaleriaHome";

function HomeFront() {
  return (
    <main>
      <section className="Container-home">
        <div className="nav-posicao">
          <Navegation />
        </div>

        <section>
          <div className="alinhar">
            <h1>
              Arquitetura Moderna <br /> e Atemporal
            </h1>

            <p>
              Criamos espaços que inspiram a conexão entre <br />
              pessoas, lugares e propósitos — seja para <br />
              residências, cafés, áreas públicas ou além.
            </p>

            <div className="layoubtn">
              <DoisButtons />
            </div>
          </div>
        </section>

        <div id="container-paragrafo">
          <p>
            Na KROOQ, acreditamos que a arquitetura é mais do que estruturas;
            trata-se de moldar ambientes onde a vida acontece. De casas
            contemporâneas a campus focados no futuro, nosso trabalho
            equilibra inovação, detalhe e significado.
          </p>
        </div>
      </section>

      <section className="cards-section">
  <h2 className="titulo-cards">
    KROOQ conecta clientes, arquitetos, profissionais e fornecedores em um ecossistema <br />
    inteligente. Transformamos a jornada da construção em uma experiência fluida,
    unindo <br />
     design moderno, técnica e os <span className="destaque">melhores materiais.</span>
  </h2>

  <div className="cards">
    <Card
      titulo="Nosso Estúdio"
      texto="Na KROOQ, criatividade e Na KROOQ, criatividade e técnica se encontram. Projetamos espaços com propósito, baseados na compreensão real de como as pessoas vivem. Cada projeto é uma chance de redefinir ambientes e conectar quem constrói a quem habita. se encontram para criar espaços com propósito."
    tipo="estudio"
    />

    <Card
      titulo="Nossa Prática"
      texto="Integramos arquitetura, Integramos arquitetura, interiores e estratégia em um processo único e fluido. Colaboramos com especialistas e fornecedores para entregar soluções que equilibram estética, funcionalidade e eficiência na obra. e estratégia em um processo único."
    />

    <Card
      titulo="Nossa Gente"
      texto="Somos um ecossistema que Somos um ecossistema que valoriza a curiosidade e a parceria. Acreditamos que grandes projetos nascem da confiança e da troca constante entre arquitetos, parceiros e clientes. a conexão entre pessoas."
    />
  </div>
</section>

<section className="grid-section">

  <div className="grid">

    <div className="box branco ">
      <h2>O que
        <br /> já realizamos</h2>
    </div>

    <div className="box bege">
      <h2>175</h2>
      <p>Casos práticos e construídos nos últimos 5 anos.</p>
    </div>

    <div className="box bege">
      <p>
        Da visão à execução, cada projeto soma nosso repertório
        em métodos, processos e resultados.
      </p>
    </div>

    <div className="box bege">
      <h2>40+</h2>
      <p>Categorias de projetos concluídos.</p>
    </div>

    <div className="box bege">
      <h2>125</h2>
      <p>Conceitos comerciais e estudos entregues.</p>
    </div>

    <div className="box imagem"></div>

  </div>

</section>
<section className="projetos-section">
  <div className="header-projetos">
    <div className="linha-projetos"></div>

    <div className="texto-projetos">
      <h2>Projetos Atuais (Em Andamento)</h2>
      <p>
        Damos vida a visões arquitetônicas através de espaços que unem design, funcionalidade e contexto. Cada projeto reflete nosso compromisso com o detalhe, a inovação e o apelo atemporal.
      </p>
    </div>
  </div>

  <div className="linha-decorativa"></div>

  <div className="projeto-item">
    <div className="numero-projeto">
      <h2>01</h2>
      <p>
        Residencial <br />
        Basker <br />
        430 m² <br />
        Em Construção <br />
        2025
      </p>
    </div>

    <img src={CasaBasker} alt="Basker Residence" />

    <div className="descricao-projeto">
      <h3>Basker Residence</h3>
      <p>
        Elevado sobre a baía, esta residência une elegância moderna e geometria
        orgânica. O design qualifica materiais refinados e permite natural,
        criando uma fusão harmônica entre forma e sofisticação.
      </p>
      <ButtonGreen/>
    </div>
  </div>

  <div className="projeto-item">
    <div className="numero-projeto">
      <h2>02</h2>
      <p>
        Residencial <br />
        Ferrara <br />
        430 m² <br />
        Em Construção <br />
        2025
      </p>
    </div>

    <img src={CasaFerrara} alt="Casa Ferrara" />

    <div className="descricao-projeto">
      <h3>Casa Ferrara</h3>
      <p>
        A Casa Ferrara redefine o morar moderno com uma arquitetura elegante,
        ampla e confortável. Seu design une estrutura contemporânea com fluidez,
        criando uma experiência sofisticada.
      </p>
      <ButtonGreen/>
    </div>
  </div>
</section>
<section className="Casaalmeria">
<img src= {CasaAlmeria} alt="" />

  <div className="overlay">

    <span className="tag">Projeto em Destaque</span>

    <h2>Casa Almeria</h2>

    <p>
      Casa Almeria é uma residência contemporânea que combina
      geometria arrojada com o ambiente natural.
    </p>

    <div className="botoes">
      <button className="btn1">VER DETALHES</button>
      <button className="btn2">PROJETO</button>
    </div>

  </div>
</section>

<section className="galeria-section">
  <GaleriaHome />
</section>

<section className="Footer-rodape">
  <Rodape/>

</section>
    </main>
  );
}

export default HomeFront;