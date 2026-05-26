import "./ComentariosProfissionais.css";
import IconeAssistente from "../../assets/usercheck.png";

function ComentariosProfissionais() {
  const comentarios = [
    {
      nota: "8.5",
      titulo: "Engenharia Civil",
      assistentes: "120 Assistant",
      descricao:
        "Responsáveis pelo cálculo estrutural e viabilidade técnica, garantindo que sua obra siga todos os normas de segurança e eficiência.",
    },
    {
      nota: "7.0",
      titulo: "Mestre de Obras",
      assistentes: "120 Assistant",
      descricao:
        "A liderança no canteiro. Profissionais experientes coordenam equipes e garantem a execução fiel do cronograma planejado.",
    },
    {
      nota: "4.8",
      titulo: "Técnicos em Edificações",
      assistentes: "120 Assistant",
      descricao:
        "Foco no detalhamento técnico e acompanhamento diário, unindo o projeto do arquiteto à execução prática dos trabalhadores.",
    },
    {
      nota: "4.8",
      titulo: "Instalações e Elétrica",
      assistentes: "120 Assistant",
      descricao:
        "Especialistas em infraestrutura hidráulica e elétrica, garantindo que os sistemas vitais da sua casa funcionem com máxima segurança.",
    },
    {
      nota: "4.8",
      titulo: "Execução de Estruturas",
      assistentes: "120 Assistant",
      descricao:
        "Equipe qualificada para armação, concretagem e alvenaria estrutural, entregando a base robusta que seu imóvel merece.",
    },
    {
      nota: "4.8",
      titulo: "Acabamentos Técnicos",
      assistentes: "120",
      descricao:
        "Profissionais focados na estética final, assentamento de grandes formatos e instalação de revestimentos de alto padrão.",
    },
  ];

  return (
    <section className="comentarios-profissionais">
      <div className="comentarios-profissionais-container">
        {comentarios.map((item, index) => (
          <div className="comentarios-profissionais-card" key={index}>
            <span className="comentarios-profissionais-nota">
              <span className="comentarios-profissionais-estrela">★</span>
              {item.nota}
            </span>

            <h3>{item.titulo}</h3>

            <p className="comentarios-profissionais-assistentes">
              <img
                src={IconeAssistente}
                alt="Assistente"
                className="comentarios-profissionais-icone"
              />
              {item.assistentes}
            </p>

            <p className="comentarios-profissionais-descricao">
              {item.descricao}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ComentariosProfissionais;