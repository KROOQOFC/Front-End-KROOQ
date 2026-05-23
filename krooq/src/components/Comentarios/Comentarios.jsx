import "./Comentarios.css";
import AspasComentario from "../../assets/AspasComentario.png";

function Comentarios({ titulo, texto, nome, cargo, foto, ativo = false }) {
  return (
    <div className={`ComentariosServicoCard ${ativo ? "ativo" : ""}`}>
      <img src={AspasComentario} alt="" className="ComentariosAspas" />

      <div className="ComentariosConteudo">
        <h4>{titulo}</h4>

        <p>{texto}</p>

        <div className="ComentariosPessoa">
          <img src={foto} alt={`Foto de ${nome}`} />

          <div>
            <h5>{nome}</h5>
            <span>{cargo}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comentarios;