import "./EventModal.css";

function EventModal({
    abrir,
    fecharModal,
    novoEvento,
    setNovoEvento,
    adicionarEvento,
    eventoEditando,
    deletarEvento
}) {

    if (!abrir) return null;

    return (
        <section className="overlay-modal">

            <div className="modal-evento">

                <h2>Novo Evento</h2>

                <input
                    type="time"
                    value={novoEvento.horario}
                    onChange={(e) =>
                        setNovoEvento({
                            ...novoEvento,
                            horario: e.target.value
                        })
                    }
                />

                <input
                    type="text"
                    placeholder="Título"
                    value={novoEvento.titulo}
                    onChange={(e) =>
                        setNovoEvento({
                            ...novoEvento,
                            titulo: e.target.value
                        })
                    }
                />

                <textarea
                    placeholder="Descrição"
                    value={novoEvento.descricao}
                    onChange={(e) =>
                        setNovoEvento({
                            ...novoEvento,
                            descricao: e.target.value
                        })
                    }
                />
                <input
                type="color"
                value={novoEvento.cor}
                onChange={(e) =>
                    setNovoEvento({
                        ...novoEvento,
                        cor: e.target.value
        })
    }
/>

                <div className="acoes-modal">
                    {eventoEditando && (
                        <button onClick={deletarEvento}>Excluir</button>

)}

                    <button onClick={fecharModal}>
                        Cancelar
                    </button>

                    <button onClick={adicionarEvento}>
                        Adicionar
                    </button>

                </div>

            </div>

        </section>
    );
}

export default EventModal;