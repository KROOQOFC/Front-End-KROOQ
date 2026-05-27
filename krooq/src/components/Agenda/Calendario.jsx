import "./Calendario.css";
import { useState } from "react";

function Calendario({
    dataSelecionada,
    setDataSelecionada,
    eventos
}) {

    const [dataAtual, setDataAtual] = useState(new Date());


    const meses = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ];

    const diasSemana = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];

    const ano = dataAtual.getFullYear();

    const mes = dataAtual.getMonth();

    const primeiroDiaMes = new Date(ano, mes, 1).getDay();

    const quantidadeDias = new Date(ano, mes + 1, 0).getDate();

    const diasMes = [];

    for (let i = 0; i < primeiroDiaMes; i++) {
        diasMes.push(null);
    }

    for (let i = 1; i <= quantidadeDias; i++) {
        diasMes.push(i);
    }

    function proximoMes() {
        setDataAtual(new Date(ano, mes + 1, 1));
    }

    function mesAnterior() {
        setDataAtual(new Date(ano, mes - 1, 1));
    }
function diaTemEvento(dia) {

    return eventos.some(

        (evento) =>

            evento.dia === dia &&
            evento.mes === mes &&
            evento.ano === ano

    );
}
    return (
        <section className="container-calendario">

            <div className="topo-calendario">

                <h2>
                    {meses[mes]} {ano}
                </h2>

                <div className="botoes-mes">

                    <button onClick={mesAnterior}>
                        {"<"}
                    </button>

                    <button onClick={proximoMes}>
                        {">"}
                    </button>

                </div>

            </div>

            <div className="linha-verde"></div>

            <div className="dias-semana">

                {diasSemana.map((dia) => (
                    <span key={dia}>
                        {dia}
                    </span>
                ))}

            </div>

            <div className="grid-dias">

                {diasMes.map((dia, index) => (

                    dia ? (

<button
    key={index}
    onClick={() =>
        setDataSelecionada({
            dia,
            mes,
            ano
        })
    }
    className={
        dataSelecionada.dia === dia &&
        dataSelecionada.mes === mes &&
        dataSelecionada.ano === ano
            ? "dia selecionado"
            : "dia"
    }
>

    <div className="conteudo-dia">

        <span>{dia}</span>

        {diaTemEvento(dia) && (
            <div className="pontinho-evento"></div>
        )}

    </div>

</button>

                    ) : (

                        <div
                            key={index}
                            className="espaco-vazio"
                        ></div>

                    )

                ))}

            </div>

        </section>
    );
}

export default Calendario;