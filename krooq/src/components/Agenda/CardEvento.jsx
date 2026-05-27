import "./CardEvento.css";

function hexToRgba(hex, alpha = 0.15) {
    const cleanHex = hex.replace("#", "");

    const r = parseInt(cleanHex.substring(0, 2), 16);
    const g = parseInt(cleanHex.substring(2, 4), 16);
    const b = parseInt(cleanHex.substring(4, 6), 16);

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function CardEvento({
    horario,
    titulo,
    descricao,
    cor,
    onClick
}) {

    return (
        <div
            className="card-evento"
            style={{
                borderLeft: `12px solid ${cor}`,
                background: hexToRgba(cor, 0.28)
            }}
            onClick={onClick}
        >

            <span className="horario-evento">
                {horario}
            </span>

            <h3>{titulo}</h3>

            <p>{descricao}</p>

        </div>
    );
}

export default CardEvento;