import { useEffect, useState } from "react";

import "./MetasGerais.css";

import CanetaEdicao from "../../assets/CanetaEdicao.png";
import CheckVerificado from "../../assets/CheckVerificado.png";
import NaoCheckVerificado from "../../assets/NaoCheckVerificado.png";

function MetasGerais({ titulo, metas }) {
  const [listaMetas, setListaMetas] = useState(metas);
  const [progressoAnimado, setProgressoAnimado] = useState(0);

  const metasConcluidas = listaMetas.filter((meta) => meta.concluida).length;

  const porcentagem =
    listaMetas.length > 0
      ? (metasConcluidas / listaMetas.length) * 100
      : 0;

  useEffect(() => {
    const intervalo = setInterval(() => {
      setProgressoAnimado((progressoAtual) => {
        if (progressoAtual < porcentagem) {
          return Math.min(progressoAtual + 0.7, porcentagem);
        }

        if (progressoAtual > porcentagem) {
          return Math.max(progressoAtual - 0.7, porcentagem);
        }

        clearInterval(intervalo);
        return progressoAtual;
      });
    }, 10);

    return () => clearInterval(intervalo);
  }, [porcentagem]);

  function alternarMeta(index) {
    const novasMetas = listaMetas.map((meta, i) => {
      if (i === index) {
        return {
          ...meta,
          concluida: !meta.concluida,
        };
      }

      return meta;
    });

    setListaMetas(novasMetas);
  }

  return (
    <div className="ContainerMetas">
      <div className="TopoMetas">
        <h4 className="TituloMetas">{titulo}</h4>

        <div className="AcoesTopoMetas">
          <div
            className="ProgressoMetas"
            style={{
              background: `conic-gradient(
                #EF553D ${progressoAnimado}%,
                #D4D4D4 ${progressoAnimado}%
              )`,
            }}
          >
            <div className="CentroProgresso">
              {metasConcluidas}/{listaMetas.length}
            </div>
          </div>

          <button className="EditarMetasBotao">
            <img src={CanetaEdicao} alt="Editar metas" />
          </button>
        </div>
      </div>

      <div className="ListaMetas">
        {listaMetas.map((meta, index) => (
          <div className="ItemMeta" key={index}>
            <button
              className="BotaoCheck"
              onClick={() => alternarMeta(index)}
            >
              <img
                src={meta.concluida ? CheckVerificado : NaoCheckVerificado}
                alt={meta.concluida ? "Concluído" : "Pendente"}
              />
            </button>

            <p className={meta.concluida ? "MetaConcluida" : "MetaPendente"}>
              {meta.texto}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MetasGerais;