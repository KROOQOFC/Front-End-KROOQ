import './IA.css'
import Vector1 from "../../assets/Vector1.png";
import Vector from "../../assets/Vector.png";
import NewChat from "../../assets/New chat 1.png";
import Aspect1 from "../../assets/&AspectRatioBlock.png";
import Aspect2 from "../../assets/&AspectRatioBlock(1).png";
import Aspect3 from "../../assets/&AspectRatioBlock(2).png";
import Aspect4 from "../../assets/&AspectRatioBlock(3).png";
import Aspect5 from "../../assets/&AspectRatioBlock(4).png";
import Cozinha from "../../assets/Cozinha.png";
import HeroBg from "../../assets/Frame 26.png";
import CtaBg from "../../assets/Frame 46.png";

function IA() {
  return (
     
    <>
<div className="hero-page">
  <section className="hero"
   style={{ backgroundImage: `url(${HeroBg})` }}>
    
    <small className="logo">KROOQ IA</small>

    <h1 className="logo">
       Domine a Criatividade <br/> Ilimitada.Projete,<br/> Inove, Escalone e<br/> Execute.
    </h1>

    <p className="verde">
       Bem-vindo ao PromptVerse. Transforme ideias em realidade visual e técnica sem esforço. Explore prompts infinitos, gere designs de interiores deslumbrantes e obtenha cálculos precisos de materiais e medidas em tempo real. Automatize seu fluxo de trabalho, do conceito à lista de compras, tudo em um design futurista feito para elevar sua produtividade.
    </p>

    <button className="logobtn">Criar Agora <img src={Vector1} alt="ícone de varinha" /></button>
</section>

<section>
    <h2>Foco no Fluxo de Trabalho</h2>

    <p>
        Sua visão criativa com a precisão de um especialista. Nossa IA de design de interiores transforma suas medidas em projetos visuais deslumbrantes, enquanto calcula instantaneamente a lista completa de materiais e custos para sua obra.
    </p>
    <button className="verdebtn">Gerar Agora<img src={Vector} alt="ícone de varinha"/></button>
    <br/>
    <img src={NewChat} alt="Escreve o que tem na imagem"/>

</section>


<section>
    <h2>Imagens como você nunca viu antes</h2>

    <p>
        Descubra criatividade sem fim com o PromptVerse. Gere conteúdos diversos sem esforço usando prompts. Fique atualizado com as tendências em tempo real, automatize tarefas e extraia insights de qualquer documento ou URL. Tudo dentro de um design elegante e futurista. Crie mais, com menos esforço.
    </p>
<br/>
<div className="gallery">
  <div className="big">
    <img src={Aspect1} alt=""/>
  </div>

  <div className="grid-small">
    <img src={Aspect2} alt=""/>
    <img src={Aspect3} alt=""/>
    <img src={Aspect4} alt=""/>
    <img src={Aspect5} alt=""/>
  </div>
</div>
</section>


<section>
    <h2>Projete a casa que reflete sua <br/> essência</h2>

    <p>
        Nossa IA analisa sua personalidade, estilo de vida e preferências estéticas para criar conceitos de design de interiores verdadeiramente únicos e personalizados para sua casa. Cada espaço é um reflexo do que você é.
    </p>
<br/><br/><br/>
  <div className="card">
    
    <div className="content">
      <h3>Design de Interiores Exclusivo e Calculado pela sua Personalidade</h3>

      <p>
        Gere plantas, renders 3D e visualizações imersivas instantaneamente,
        garantindo um fluxo criativo contínuo do conceito à realidade.
      </p>

      <p className="small">
        O DIFERENCIAL: Ao aprovar um conceito, nossa IA reserva designs exclusivos
        e calcula a lista exata de materiais, orçamentos e fornecedores perto de você,
        unindo criatividade e viabilidade técnica.
      </p>

      <div className="tags">
        <span>Perfil de Estilo</span>
        <span>Renders 3D</span>
        <span>Design de Interiores</span>
        <span>Cálculo de Insumos</span>
        <span>Exclusividade</span>
        <span className="active">Projeto Único</span>
      </div>
    </div>

    <div className="image">
      <img src={Cozinha} alt=""/>
      <div className="play"></div>
    </div>

  </div>

</section>

<section className="features">
  <div className="container">
    <h2>
      Mais recursos<br/>
      que a <span>KROOQ IA</span> oferece para você
    </h2>

    <div className="divider"></div>

    <div className="grid-ia">
      <div className="item">
        <h3>Escreva e-mails e respostas</h3>
        <p>Somos visionários. Fornecemos tudo o que você precisa saber sobre o mercado atual e prevemos como o custo da construção na sua área mudará nos próximos anos.</p>
      </div>

      <div className="item-ia">
        <h3>Digitalize Imagens:</h3>
        <p>Oferecemos suporte completo desde a busca por referências visuais até a execução técnica e documentação final do seu projeto.</p>
      </div>

      <div className="item-ia">
        <h3>Pesquisa Integrada:</h3>
        <p>Temos acesso a um vasto portfólio de referências, mas para você, faremos uma seleção individual baseada apenas nas opções que realmente se encaixam no seu perfil.</p>
      </div>

      <div className="item-ia">
        <h3>Leia PDFs e anexos:</h3>
        <p>Não queremos apenas sugerir objetos; nosso objetivo é encontrar o projeto “certo” para você e ser seu parceiro tecnológico por muitos anos.</p>
      </div>

      <div className="item-ia">
        <h3>Escreva códigos e programas:</h3>
        <p>A moradia deve melhorar sua vida. Por isso, ao selecionar um estilo, analisamos cuidadosamente seu pedido para encontrar apenas o que é ideal.</p>
      </div>

      <div className="item-ia">
        <h3>Automação de Cálculos:</h3>
        <p>Seja a execução legal de uma transação, o design de interiores baseado na sua personalidade ou os detalhes técnicos e cálculos de materiais de um edifício; nossa IA resolve tudo.</p>
      </div>
    </div>
  </div>
</section>

<section className="cta"
style={{ backgroundImage: `url(${CtaBg})` }}>
    
    <h2>O KROOQ IA é ilimitado. Embarque nesta <br/>jornada com o KROOQ IA.</h2>
    
    <button className="btnBranco">Comece Agora</button>
</section>
</div>
    </>
  )
}

export default IA
