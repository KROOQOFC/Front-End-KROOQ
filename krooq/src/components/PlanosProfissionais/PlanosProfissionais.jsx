import "./PlanosProfissionais.css";

function PlanosProfissionais() {
  const planos = [
    {
      id: 1,
      nome: "Projeto Único",
      preco: "R$0",
      descricao: "Projeto completo com render 3D e cálculo de materiais.",
      destaque: false,
    },
    {
      id: 2,
      nome: "Plano Mensal",
      preco: "R$45,90",
      descricao:
        "Ideal para profissionais e escritórios que precisam de suporte contínuo da nossa IA e acesso à rede de fornecedores.",
      destaque: true,
    },
    {
      id: 3,
      nome: "Plano Anual",
      preco: "R$250,00",
      descricao: "Projeto completo com render 3D e cálculo de materiais.",
      destaque: false,
    },
  ];

  return (
    <section className="planos-profissionais">
      <div className="planos-profissionais-container">
        <span className="planos-profissionais-tag">PREÇOS E PACOTES</span>

        <h2>Escolha o Melhor Pacote para o seu Projeto</h2>

        <div className="planos-profissionais-cards">
          {planos.map((plano) => (
            <div
              className={
                plano.destaque
                  ? "planos-profissionais-card planos-profissionais-card-destaque"
                  : "planos-profissionais-card"
              }
              key={plano.id}
            >
              {plano.destaque && (
                <span className="planos-profissionais-oferta">
                  ♡ Melhor Oferta
                </span>
              )}

              <h3>{plano.nome}</h3>

              <span className="planos-profissionais-apartir">
                A partir de
              </span>

              <strong>{plano.preco}</strong>

              <p>{plano.descricao}</p>

              <button type="button">INICIAR PROJETO</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PlanosProfissionais;