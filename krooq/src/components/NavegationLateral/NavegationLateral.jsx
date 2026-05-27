import "./NavegationLateral.css";
import { NavLink } from "react-router-dom";
import LogoLateral from "../../assets/LogoMenuLateral.png";
import IconePainelGeral from "../../assets/IconePainelGeralMenuLateral.png";
import IconeAgenda from "../../assets/IconeAgendaMenuLateral.png";
import IconeMinhasTarefas from "../../assets/IconeMinhasTarefasMenuLateral.png";
import IconeProjetos from "../../assets/IconeProjetosMenuLateral.png";
import IconeConsultoria from "../../assets/IconeConsultoriaMenuLateral.png";
import IconeKrooqIa from "../../assets/IconeKrooqIaMenuLateral.png";

function NavegationLateral() {
    return (
        <aside className="nav-menu-lateral">

            <div className="layout-links-menu-lateral">

                <img
                    className="logo-lateral"
                    src={LogoLateral}
                    alt="Logo Krooq"/>

                <nav>
                    <ul>
                        <li>
                            <NavLink to="/" className="link-menu">

                                <img
                                    className="icone-painel"
                                    src={IconePainelGeral}
                                    alt="Painel Geral"/>
                                <span className="texto-painel">Painel Geral</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/agenda" className="link-menu">
                                <img
                                    src={IconeAgenda}
                                    alt="Agenda"/>
                                <span>Agenda</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/tarefas" className="link-menu">
                                <img
                                    src={IconeMinhasTarefas}
                                    alt="Minhas tarefas" />
                                <span>Minhas Tarefas</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/projetos" className="link-menu">
                                <img
                                    src={IconeProjetos}
                                    alt="Projetos" />
                                <span>Projetos</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/consultoria" className="link-menu">
                                <img
                                    src={IconeConsultoria}
                                    alt="Consultoria"/>
                                <span>Consultoria</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/krooqia" className="link-menu">
                                <img className="imagem-krooq-ia"
                                    src={IconeKrooqIa}
                                    alt="KROOQ IA"/>
                                    
                                <span className="texto-krooq-ia-painel">KROOQ IA</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}

export default NavegationLateral;