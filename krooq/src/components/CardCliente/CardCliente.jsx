import "./CardCliente.css";

function CardCliente({
    foto,
    nome,
    projeto,
    telefone,
    email,
    cidade,
    status
}) {
    return (
        <article className="card-cliente">

            <div className="topo-cliente">

                <img
                    src={foto}
                    alt={nome}
                    className="foto-cliente"
                />

                <div className="info-cliente">

                    <h3>{nome}</h3>

                    <span>Cliente</span>

                    <p>{projeto}</p>

                </div>

                <div
                    className={`status-cliente ${status}`}
                />
            </div>

            <div className="dados-cliente">

                <p>📞 {telefone}</p>

                <p>✉️ {email}</p>

                <p>📍 {cidade}</p>

            </div>

        </article>
    );
}

export default CardCliente;