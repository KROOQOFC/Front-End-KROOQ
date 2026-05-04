import "./HomeFront.css";
import DoisButtons from "../../components/DoisButtons/DoisButtons";
import Navegation from "../../components/Navegation/Navegation";
import Card from "../../components/Card/Card";

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
        Do visão à execução, cada projeto soma nosso repertório
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
    </main>
  );
}

export default HomeFront;