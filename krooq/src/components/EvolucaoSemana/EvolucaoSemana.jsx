import { useState } from "react";
import "./EvolucaoSemana.css";
import { FaChartPie } from "react-icons/fa6";

function EvolucaoSemana({
  titulo = "Evolução da Semana",
  dadosProjeto = [45, 70, 35, 75, 42, 63, 82, 55, 28, 43, 25, 95, 45],
  dadosVisita = [45, 60, 82, 70, 58, 48, 65, 95, 72, 56, 45],
  dias = ["D", "S", "T", "Q", "Q", "S", "S"],
}) {
  const [diaAtivo, setDiaAtivo] = useState(0);

  const largura = 420;
  const altura = 220;

  const pontosDias = [0, 2, 4, 6, 8, 10, 12];

  function gerarPontos(dados) {
    const max = 100;
    const espacamento = largura / (dados.length - 1);

    return dados.map((valor, index) => {
      const x = index * espacamento;
      const y = altura - (valor / max) * altura;

      return {
        x,
        y,
        valor,
      };
    });
  }

  function converterPontosParaSvg(pontos) {
    return pontos.map((ponto) => `${ponto.x},${ponto.y}`).join(" ");
  }

  const pontosProjeto = gerarPontos(dadosProjeto);
  const pontosVisita = gerarPontos(dadosVisita);

  const indicePontoSelecionado = pontosDias[diaAtivo];
  const pontoSelecionado = pontosProjeto[indicePontoSelecionado];

  return (
    <section className="ContainerEvolucaoSemana">
      <div className="TopoEvolucao">
        <h3>{titulo}</h3>
        <FaChartPie className="IconeGrafico" />
      </div>

      <div className="LegendaEvolucao">
        <div className="ItemLegenda ativo">
          <span></span>
          <p>Projeto</p>
        </div>

        <div className="ItemLegenda">
          <span></span>
          <p>Visita Técnica</p>
        </div>
      </div>

      <div className="AreaGrafico">
        <span
          className="TagDestaque"
          style={{
            left: `${(pontoSelecionado.x / largura) * 100}%`,
            top: `${(pontoSelecionado.y / altura) * 100}%`,
          }}
        >
          {pontoSelecionado.valor}%
        </span>

        <svg viewBox={`0 0 ${largura} ${altura}`} preserveAspectRatio="none">
          <line x1="0" y1="20" x2={largura} y2="20" />
          <line x1="0" y1="45" x2={largura} y2="45" />
          <line x1="0" y1="70" x2={largura} y2="70" />
          <line x1="0" y1="95" x2={largura} y2="95" />
          <line x1="0" y1="120" x2={largura} y2="120" />
          <line x1="0" y1="145" x2={largura} y2="145" />
          <line x1="0" y1="170" x2={largura} y2="170" />
          <line x1="0" y1="195" x2={largura} y2="195" />

          <polyline
            className="LinhaVisita"
            points={converterPontosParaSvg(pontosVisita)}
          />

          <polyline
            className="LinhaProjeto"
            points={converterPontosParaSvg(pontosProjeto)}
          />
        </svg>
      </div>

      <div className="DiasSemana">
        {dias.map((dia, index) => (
          <span
            key={index}
            onClick={() => setDiaAtivo(index)}
            className={index === diaAtivo ? "ativo" : ""}
          >
            {dia}
          </span>
        ))}
      </div>
    </section>
  );
}

export default EvolucaoSemana;