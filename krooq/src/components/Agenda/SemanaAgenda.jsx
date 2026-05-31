import "./SemanaAgenda.css";

function SemanaAgenda({
    dataSelecionada,
    setDataSelecionada
}) {

    const diasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

    const semana = [];

    const dataBase = new Date(
        dataSelecionada.ano,
        dataSelecionada.mes,
        dataSelecionada.dia
    );

    for (let i = -3; i <= 3; i++) {

        const novaData = new Date(dataBase);

        novaData.setDate(dataBase.getDate() + i);

        semana.push(novaData);
    }

    return (
        <section className="container-semana-agenda">

            {semana.map((data, index) => {

                const ativo =
                    data.getDate() === dataSelecionada.dia &&
                    data.getMonth() === dataSelecionada.mes &&
                    data.getFullYear() === dataSelecionada.ano;

                return (

                    <button
                        key={index}
                        className={
                            ativo
                                ? "dia-semana ativo"
                                : "dia-semana"
                        }
                        onClick={() =>
                            setDataSelecionada({
                                dia: data.getDate(),
                                mes: data.getMonth(),
                                ano: data.getFullYear()
                            })
                        }
                    >

                        <span>
                            {diasSemana[data.getDay()]}
                        </span>

                        <strong>
                            {String(data.getDate()).padStart(2, "0")}
                        </strong>

                    </button>

                );
            })}

        </section>
    );
}

export default SemanaAgenda;