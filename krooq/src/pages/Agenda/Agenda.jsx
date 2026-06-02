import "./Agenda.css";
import AgendaBG from "../../assets/AgendaBG.png";

import { useState } from "react";
import SemanaAgenda from "../../components/Agenda/SemanaAgenda";
import Calendario from "../../components/Agenda/Calendario";
import CardEvento from "../../components/Agenda/CardEvento";
import EventModal from "../../components/Agenda/EventModal";
import LogoKrooq from "../../assets/LogoKrooq.png";
import { useNavigate } from "react-router-dom";

function Agenda() {
    const navigate = useNavigate();

    const [abrirModal, setAbrirModal] = useState(false);
    const [dataSelecionada, setDataSelecionada] = useState({
    dia: new Date().getDate(),
    mes: new Date().getMonth(),
    ano: new Date().getFullYear()
});
const [eventoEditando, setEventoEditando] = useState(null);

    const [eventos, setEventos] = useState([]);

const [novoEvento, setNovoEvento] = useState({
    horario: "",
    titulo: "",
    descricao: "",
    cor: "#8FB996"
});

function adicionarEvento() {

    if (!novoEvento.titulo) return;

    if (eventoEditando) {

        const eventosAtualizados = eventos.map((evento) =>

            evento.id === eventoEditando
                ? {
                    ...novoEvento,
                    id: eventoEditando,

                    dia: dataSelecionada.dia,
                    mes: dataSelecionada.mes,
                    ano: dataSelecionada.ano
                }
                : evento
        );

        setEventos(eventosAtualizados);

    } else {

        const eventoCompleto = {
            id: Date.now(),

            ...novoEvento,

            dia: dataSelecionada.dia,
            mes: dataSelecionada.mes,
            ano: dataSelecionada.ano
        };

        setEventos([...eventos, eventoCompleto]);
    }

    setNovoEvento({
        horario: "",
        titulo: "",
        descricao: "",
        cor: "#8FB996"
    });

    setEventoEditando(null);

    setAbrirModal(false);
}
function editarEvento(evento) {

    setNovoEvento(evento);

    setEventoEditando(evento.id);

    setAbrirModal(true);
}
function deletarEvento() {

    const novosEventos = eventos.filter(
        (evento) => evento.id !== eventoEditando
    );

    setEventos(novosEventos);

    setEventoEditando(null);

    setAbrirModal(false);
}
    return (
        <section
            className="container-agenda"
            style={{ backgroundImage: `url(${AgendaBG})`  }}
        >
            <div
            className="overlay-voltar"
            onClick={() => navigate("/CentralProfissional")}
            />

            <Calendario
            dataSelecionada={dataSelecionada}
            setDataSelecionada={setDataSelecionada}
            eventos={eventos}
            />
            <div className="lado-direito">

            <section className="painel-eventos">

<SemanaAgenda
    dataSelecionada={dataSelecionada}
    setDataSelecionada={setDataSelecionada}
/>

<div className="topo-eventos">

    <h2>Compromissos</h2>

    <button
        className="botao-adicionar"
        onClick={() => setAbrirModal(true)}
    >
        +
    </button>

</div>

<div className="lista-eventos">


                    {eventos .filter( (evento) =>
                    evento.dia === dataSelecionada.dia &&
                     evento.mes === dataSelecionada.mes &&
                     evento.ano === dataSelecionada.ano
                    )
                        .sort((a, b) => {
                            return a.horario.localeCompare(b.horario);
                        })
                        .map((evento, index) => (

                        <CardEvento
                            key={evento.id}
                            horario={evento.horario}
                            titulo={evento.titulo}
                            descricao={evento.descricao}
                            cor={evento.cor}
                            onClick={() => editarEvento(evento)}
                        />

                    ))}

                </div>

            </section>


</div>

            <EventModal
                abrir={abrirModal}
                fecharModal={() => setAbrirModal(false)}
                novoEvento={novoEvento}
                setNovoEvento={setNovoEvento}
                adicionarEvento={adicionarEvento}
                eventoEditando={eventoEditando}
                deletarEvento={deletarEvento}
            />
            <img
            className="logo-krooq-agenda"
            src={LogoKrooq}
            alt="Logo Krooq"
            />

        </section>
    );
    
}


export default Agenda;