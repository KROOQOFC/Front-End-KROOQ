import { useState } from "react";
import "./ServicoComentarios.css";

import Comentarios from "../Comentarios/Comentarios";
import ClienteStela from "../../assets/ClienteStela.png";
import ClienteSheila from "../../assets/ClienteSheila.png";

function ServicoComentarios() {
  const [comentarioAtivo, setComentarioAtivo] = useState(0);

  return (
    <section className="ServicoComentariosContainer">
      <div className="ComentariosLista">
        <div onClick={() => setComentarioAtivo(0)}>
          <Comentarios
            titulo="Ótima estrutura, Adorei"
            texto="Utilizar a KROOQ foi incrível, acompanhei tudo da minha reforma, adorei! Uma estrutura robusta que superou todas as nossas expectativas."
            nome="Stela Araújo"
            cargo="Cliente"
            foto={ClienteStela}
            ativo={comentarioAtivo === 0}
          />
        </div>

        <div onClick={() => setComentarioAtivo(1)}>
          <Comentarios
            titulo="Me surpreendeu"
            texto="Gostei muito da plataforma, estava sem ideias do que podia fazer na minha sala e depois que testei o site tive muitas ideias, achei muito legal. A atenção aos detalhes, não conhecia mais adorei."
            nome="Sheila Costa"
            cargo="Cliente"
            foto={ClienteSheila}
            ativo={comentarioAtivo === 1}
          />
        </div>
      </div>

      <div className="BarraComentarios">
        <button
          className={comentarioAtivo === 0 ? "ativo" : ""}
          onClick={() => setComentarioAtivo(0)}
        ></button>

        <button
          className={comentarioAtivo === 1 ? "ativo" : ""}
          onClick={() => setComentarioAtivo(1)}
        ></button>
      </div>
    </section>
  );
}

export default ServicoComentarios;