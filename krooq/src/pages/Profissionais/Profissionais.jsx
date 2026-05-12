import "./Profissionais.css";
import Navegation from "../../components/Navegation/Navegation";
import Perfil1 from "../../assets/perfil1.png";
import Perfil2 from "../../assets/perfil2.png";
import Perfil3 from "../../assets/perfil3.png";
import Perfil4 from "../../assets/perfil4.png";
import Perfil5 from "../../assets/perfil5.png";
import Perfil6 from "../../assets/perfil6.png";
import Perfil8 from "../../assets/perfil8.png";
import Perfil7 from "../../assets/perfil7.png";
import icon10 from "../../assets/icon(10).png";
import icon11 from "../../assets/icon(11).png";
import icon12 from "../../assets/icon(12).png";
import IconBox from "../../assets/IconBox.png";
import Like from "../../assets/like.png";
import Podcast from "../../assets/podcast.png";
import Check from "../../assets/usercheck.png";
import Video from "../../assets/VideoBox.png";
import Video2 from "../../assets/VideoBox(1).png";
import Obras from "../../assets/obras().png";
import Obras2 from "../../assets/obras(2).png";
import Obras3 from "../../assets/obras(3).png";


function Profissionais() {
  return (
    <>
 
    <div className="landing-page">
      <section className="hero">
        <div className="hero-left">
          <h1>
            Sua Carreira
            <br />
            Arquitetônica Sem
            <br />
            Fronteiras.
          </h1>

          <div className="profile-box">
            <img
              src={Perfil8}
              alt="profile"
            />

            <p>
              Arquitetos e empresas em todo o mundo utilizam o ecossistema
              KROOQ para potencializar seus negócios.
            </p>
          </div>

          <button>Cadastrar Perfil</button>

          <span className="hero-caption">
            Transforme sua criatividade em viabilidade técnica com cálculos
            automáticos.
          </span>

          <div className="brands">
            <span>Logoipsum</span>
            <span>Logoipsum</span>
            <span>Logoipsum</span>
          </div>
        </div>

        <div className="hero-right">
          <img
            src={Obras2}
            alt="engenheiro"
          />

          <div className="floating-cards"><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <div className="service-card">Gestão de Projetos</div>
            <div className="service-card">Consultoria Técnica</div>
            <div className="service-card">Rede de Fornecedores</div>
          </div>
        </div>
      </section>

  
      <section className="about">
        <div className="about-image">
          <img
            src={Obras3}
            alt="construction"
          />

          <div className="mini-card top">
            <span>1200+ Especialistas Verificados</span>
          </div>

          <div className="mini-card professionals">
            <div className="professional">
              <img
                src={Perfil5}
                alt=""
              />
              <div>
                <h4>Ricardo S. Oliveira</h4>
                <p>Arquiteto Urbanista</p>
              </div>
            </div>

            <div className="professional">
              <img
                src={Perfil6}
                alt=""
              />
              <div>
                <h4>Carlos Andrade</h4>
                <p>Mestre de Obras</p>
              </div>
            </div>

            <div className="professional">
              <img
                src={Perfil7}
                alt=""
              />
              <div>
                <h4>Juliana M. Silva</h4>
                <p>Designer de Interiores</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-content">
          <span className="tag">POR QUE A KROOQ?</span>

          <h2>Por que escolher nossos especialistas?</h2>

          <p>
            Conectamos você a um ecossistema completo de especialistas. Da visão
            técnica do arquiteto à mão de obra qualificada no canteiro de obras,
            garantimos que cada etapa do seu projeto seja entregue com precisão
            e qualidade.
          </p>

          <div className="accordion">
            <div className="accordion-item active">
              <div className="accordion-header">
                Serviços Confiáveis
              </div>
            </div>

            <div className="accordion-item open">
              <div className="accordion-header">
                Profissionais de Alto Nível
              </div>

              <div className="accordion-content">
                Nossa rede conta com arquitetos especialistas em design
                inteligente e trabalhadores da construção civil autônomos
                altamente capacitados.
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">
                Adaptabilidade
              </div>
            </div>
          </div>
        </div>
      </section>

<section className="services-section">
  <div className="services-hero">
    <img
      src={Obras}
      alt="construction"
    />

    <div className="services-overlay">
      <button>Ver Especialistas</button>

      <h2>
        Construímos o Futuro
        <br />
        com Mão de Obra
        <br />
        Especializada
      </h2>

      <p>
        Nossa rede de profissionais da construção civil está pronta para
        transformar projetos em estruturas sólidas.
      </p>
    </div>
  </div>

  <div className="service-grid">
    <div className="service-box">
      <span>★ 4.8</span>
      <h3>Engenharia Civil</h3>
      <small>R$ 120 Assistente </small>

      <p>
        Responsável pela execução estrutural e viabilidade técnica.
      </p>
    </div>

    <div className="service-box">
      <span>★ 4.9</span>
      <h3>Mestres de Obras</h3>
      <small>R$ 100 Assistente </small>

      <p>
        Liderança no canteiro e coordenação de equipes.
      </p>
    </div>

    <div className="service-box">
      <span>★ 4.7</span>
      <h3>Técnicos em Edificações</h3>
      <small>R$ 90 Assistente </small>

      <p>
        Apoio técnico no desenvolvimento e acompanhamento da obra.
      </p>
    </div>

    <div className="service-box">
      <span>★ 4.8</span>
      <h3>Instalações Elétrica</h3>
      <small>R$ 100 Assistente </small>

      <p>
        Infraestrutura elétrica e segurança para ambientes.
      </p>
    </div>

    <div className="service-box">
      <span>★ 4.6</span>
      <h3>Execução de Estruturas</h3>
      <small>R$ 120 Assistente </small>

      <p>
        Construções estruturais com alta precisão e qualidade.
      </p>
    </div>

    <div className="service-box">
      <span>★ 4.9</span>
      <h3>Acabamentos Técnicos</h3>
      <small>R$ 140 Assistente</small>

      <p>
        Revestimentos e detalhes finais para grandes projetos.
      </p>
    </div>
  </div>
</section>


<section className="testimonial-section">
  <div className="testimonial-header">
    <span>DEPOIMENTOS</span>

    <h2>
      Avaliações Reais de Nossos
      <br />
      Clientes Satisfeitos
    </h2>
  </div>

  <div className="testimonial-banner">
    <img
      src={Video}
      alt="podcast"
    />

    <div className="play-button">▶</div>
  </div>

  <div className="testimonial-card">
  
    <div className="stats-card">
      <div className="stat">
        <h3>29189</h3>
        <p>Clientes Felizes</p>
      </div>

      <div className="stat">
        <h3>2981</h3>
        <p>Projetos Gerenciados</p>
      </div>

      <div className="stat">
        <h3>27</h3>
        <p>Anos de Experiência</p>
      </div>

      <div className="stat">
        <h3>350</h3>
        <p>Profissionais Especialistas</p>
      </div>
    </div>

    <div className="testimonial-list">
      <div className="testimonial-item">
        <h4>Precisão e economia garantidas.</h4>

        <div className="user">
          <img
            src={Perfil1}
            alt=""
          />
          <div>
            <strong>Ryan Hasan</strong>
            <span>Usuário Cliente</span>
          </div>
        </div>
      </div>

      <div className="testimonial-item">
        <h4>IA e técnica que facilitaram minha obra.</h4>

        <div className="user">
          <img
            src={Perfil2}
            alt=""
          />
          <div>
            <strong>Maria Coutt</strong>
            <span>Designer de Interiores</span>
          </div>
        </div>
      </div>

      <div className="testimonial-item">
        <h4>Cálculo preciso que gerou economia real.</h4>

        <div className="user">
          <img
            src={Perfil3}
            alt=""
          />
          <div>
            <strong>Larissa Barbosa</strong>
            <span>Usuário Cliente</span>
          </div>
        </div>
      </div>

      <div className="testimonial-item">
        <h4>Serviço de alta qualidade e total confiança.</h4>

        <div className="user">
          <img
            src={Perfil4}
            alt=""
          />
          <div>
            <strong>Pietro Nunes</strong>
            <span>Arquiteto Urbanista</span>
          </div>
        </div>
      </div>

      <button className="testimonial-btn">
        MAIS DEPOIMENTOS
      </button>
    </div>
  </div>
</section>

<section className="method-section">
  <div className="method-left">
    <span className="section-tag">COMO FUNCIONA</span>

    <h2>Nosso Método Comprovado</h2>

    <p>
      Desenvolvemos um processo inteligente que une tecnologia de ponta e
      expertise técnica para transformar sua visão em um projeto real e
      viável.
    </p>

    <div className="method-video">
      <img
        src={Podcast}
        alt="video"
      />

      <div className="video-overlay">
        <div className="play-icon">▶</div>

        <span>Saiba como nosso sistema de gestão funciona.</span>
      </div>
    </div>
  </div>

  <div className="method-right">
    <div className="step-item">
      <div className="step-number">1</div>

      <div>
        <h3>Definição do Perfil e Personalidade</h3>

        <p>
          Nossa IA identifica seu estilo e necessidades reais para o ambiente.
        </p>
      </div>
    </div>

    <div className="step-item">
      <div className="step-number">2</div>

      <div>
        <h3>Geração de Design e Conceito</h3>

        <p>
          Geramos visuais exclusivos para você visualizar seu projeto antes da
          obra.
        </p>
      </div>
    </div>

    <div className="step-item">
      <div className="step-number">3</div>

      <div>
        <h3>Viabilidade Técnica e Execução</h3>

        <p>
          Entregamos o cálculo de materiais e conectamos você aos
          profissionais.
        </p>
      </div>
    </div>

    <button className="method-btn">LER MAIS</button>
  </div>
</section>


<section className="pricing-section">
  <div className="pricing-header">
    <span className="section-tag">PREÇOS E PACOTES</span>

    <h2>Escolha o Melhor Pacote para o seu Projeto</h2>
  </div>

  <div className="pricing-cards">
    <div className="pricing-card dark">
      <h3>Projeto Único</h3>

      <span>A partir de</span>

      <h1>R$0</h1>

      <p>
        Projeto completo com renders 3D e cálculo de materiais.
      </p>

      <button>INICIAR PROJETO</button>
    </div>

    <div className="pricing-card featured">
      <div className="offer-badge"> Melhor Oferta</div>

      <h3>Plano Mensal</h3>

      <span>A partir de</span>

      <h1>R$0</h1>

      <p>
        Ideal para profissionais e escritórios que precisam de suporte contínuo
        da nossa IA e acesso à rede de fornecedores.
      </p>

      <button>INICIAR PROJETO</button>
    </div>
    <div className="pricing-card dark">
      <h3>Plano Anual</h3>

      <span>A partir de</span>

      <h1>R$0</h1>

      <p>
        Projeto completo com renders 3D e cálculo de materiais.
      </p>

      <button>INICIAR PROJETO</button>
    </div>

  </div>

</section>
  <div className="support-banner">
    <img
      src={Video2}
      alt="support"
    />

    <div className="support-overlay">
      <div className="play-icon large">▶</div>

      <h3>
        Suporte de confiança em
        <br />
        qualquer lugar.
      </h3>
    </div>
  </div>


<section className="contact-section">
  <div className="contact-left">
    <span className="section-tag dark-tag">
      PROJETO E CONSULTORIA PERSONALIZADA
    </span>

    <h2>
      Sua obra avançando
      <br />
      enquanto você aproveita
      <br />
      seu tempo.
    </h2>

    <p>
      Cuidamos de toda a complexidade técnica, do design inteligente à gestão
      de insumos. Tenha a liberdade de focar no que importa enquanto nós
      transformamos sua visão em realidade.
    </p>
  </div>

  <div className="contact-right">
    <form>
      <div className="input-grid">
        <input type="text" placeholder="Seu primeiro nome" />
        <input type="text" placeholder="Seu sobrenome" />

        <input type="text" placeholder="Telefone" />
        <input type="email" placeholder="E-mail" />
      </div>

      <textarea placeholder="Sua mensagem..." />

      <button type="submit">SOLICITAR ORÇAMENTO</button>
    </form>
  </div>
</section>
    </div>
    </>
  );
}

export default Profissionais;