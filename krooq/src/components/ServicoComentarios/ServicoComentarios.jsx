import { useState } from "react";
import "./ServicoComentarios.css";

import Comentarios from "../Comentarios/Comentarios";

import ClienteStela from "../../assets/ClienteStela.png";
import ClienteSheila from "../../assets/ClienteSheila.png";
import ClienteMarcos from "../../assets/perfil7.png";
import ClienteAugusto from "../../assets/perfil8.png";

function ServicoComentarios() {

  const [comentarioAtivo, setComentarioAtivo] = useState(0);

  const comentarios = [

    {
      titulo: "Ótima estrutura, Adorei",
      texto:
        "Utilizar a KROOQ foi incrível, acompanhei tudo da minha reforma, adorei! Uma estrutura robusta que superou todas as nossas expectativas.",
      nome: "Stela Araújo",
      cargo: "Cliente",
      foto: ClienteStela,
    },

    {
      titulo: "Me surpreendeu",
      texto:
        "Gostei muito da plataforma, estava sem ideias do que podia fazer na minha sala e depois que testei o site tive muitas ideias, achei muito legal. A atenção aos detalhes, não conhecia mais adorei.",
      nome: "Sheila Costa",
      cargo: "Cliente",
      foto: ClienteSheila,
    },

    {
      titulo: "Projeto impecável",
      texto:
        "Acompanhar minha obra ficou muito mais simples. Gostei bastante da organização e da clareza das informações.",
      nome: "Marcos Martins",
      cargo: "Cliente",
      foto: ClienteMarcos,
    },

    {
      titulo: "Experiência organizada",
      texto:
        "Nunca imaginei acompanhar tudo de forma tão organizada. A Krooq facilitou bastante meu projeto.",
      nome: "Augusto Pereira",
      cargo: "Cliente",
      foto: ClienteAugusto,
    },

  ];

  const larguraCard = 520;
  const gap = 70;

  const larguraCardComGap = larguraCard + gap;

  const larguraVisivel = 1090;

  const deslocamento =
    comentarioAtivo === 0
      ? 0

      : comentarioAtivo === comentarios.length - 1
      ? (comentarios.length - 2) * larguraCardComGap

      : comentarioAtivo * larguraCardComGap -
        (larguraVisivel - larguraCard) / 2;

  return (

    <section className="ServicoComentariosContainer">

      <div className="ComentariosCarrossel">

        <div
          className="ComentariosLista"
          style={{
            transform: `translateX(-${deslocamento}px)`,
          }}
        >

          {comentarios.map((comentario, index) => (

            <div
              className="ComentarioItem"
              key={index}
              onClick={() => setComentarioAtivo(index)}
            >

              <Comentarios
                titulo={comentario.titulo}
                texto={comentario.texto}
                nome={comentario.nome}
                cargo={comentario.cargo}
                foto={comentario.foto}
                ativo={comentarioAtivo === index}
              />

            </div>

          ))}

        </div>

      </div>

      <div className="BarraComentarios">

        {comentarios.map((_, index) => (

          <button
            key={index}
            className={
              comentarioAtivo === index
                ? "ativo"
                : ""
            }
            onClick={() =>
              setComentarioAtivo(index)
            }
          />

        ))}

      </div>

    </section>

  );

}

export default ServicoComentarios;