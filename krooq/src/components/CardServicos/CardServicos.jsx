import "./CardServicos.css";

function CardServicosContainer({texto, bottom, width, height, top, right, left, alinhamento = "center"}){
    return(
        <div className="cardServicosBege" style={{bottom, width, height, top, left, right, textAlign: alinhamento}}>
            <p>{texto}</p>
        </div>
    )
}

export default CardServicosContainer