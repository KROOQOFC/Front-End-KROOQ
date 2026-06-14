import "./ProjetosRecentesCards.css";

function ProjetosRecentesCards({
  tituloProjetos,
  subtituloProjetos,
  paragrafosProjetos,
  porcentagem,
   className
}) {
  return (
    <section  className={`conteiner-projetos-andamento ${className || ""}`}>

      <div className="topo-card">

        <h2>{tituloProjetos}</h2>

<div
  className="circulo-progresso"
  style={{
    background: `conic-gradient(
      #ff6947 ${(porcentagem || 0) * 3.6}deg,
      #ffffff 0deg
    )`
  }}
>
  <span>{porcentagem || 0}%</span>
</div>

      </div>

      <h3 className="topico-card-progresso-sub">{subtituloProjetos}</h3>
      <p className="topico-card-progresso-paragrafo">{paragrafosProjetos}</p>

    </section>
  );
}

export default ProjetosRecentesCards;