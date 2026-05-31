import "./Teste.css";

import CardCliente from "../../components/CardCliente/CardCliente";

import Foto1 from "../../assets/perfil1.png";
import Foto2 from "../../assets/perfil2.png";
import Foto3 from "../../assets/perfil3.png";

function Teste() {

    const clientes = [
        {
            foto: Foto1,
            nome: "Lucas Andrade",
            projeto: "Reforma na Cozinha",
            telefone: "(11) 43000-0000",
            email: "andrade@email.com",
            cidade: "Mogi das Cruzes - SP",
            status: "ativo"
        },

        {
            foto: Foto2,
            nome: "Matheus Costa",
            projeto: "Sala Construção",
            telefone: "(00) 23400-0000",
            email: "costa@email.com",
            cidade: "São José dos Campos - SP",
            status: "inativo"
        },

        {
            foto: Foto3,
            nome: "Felipe Melo",
            projeto: "Ampliação de Área Gourmet",
            telefone: "(00) 00000-0000",
            email: "melo@email.com",
            cidade: "Campinas - SP",
            status: "ativo"
        }
    ];

    return (
        <section className="pagina-teste">

            <h1>Teste Card Cliente</h1>

            <div className="grid-clientes">

                {clientes.map((cliente, index) => (

                    <CardCliente
                        key={index}
                        {...cliente}
                    />

                ))}

            </div>

        </section>
    );
}

export default Teste;