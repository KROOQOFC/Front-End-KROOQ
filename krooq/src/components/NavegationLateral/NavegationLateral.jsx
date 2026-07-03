import "./NavegationLateral.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import LogoLateral from "../../assets/LogoMenuLateral.png";
import LogoKrooq from "../../assets/LogoKrooqLateral.png";

import IconePainelGeral from "../../assets/IconePainelGeralMenuLateral.png";
import IconeAgenda from "../../assets/IconeAgendaMenuLateral.png";
import IconeMinhasTarefas from "../../assets/IconeMinhasTarefasMenuLateral.png";
import IconeProjetos from "../../assets/IconeProjetosMenuLateral.png";
import IconeConsultoria from "../../assets/IconeConsultoriaMenuLateral.png";
import IconeKrooqIa from "../../assets/IconeKrooqIaMenuLateral.png";
import { FiLogOut } from "react-icons/fi";

function NavegationLateral() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <>
      {/* MENU DESKTOP */}
      <aside className="nav-menu-lateral">
        <div className="layout-links-menu-lateral">
          <img
            className="logo-lateral"
            src={LogoLateral}
            alt="Logo Krooq"
          />

          <nav>
            <ul>
              <li>
                <NavLink to="/CentralProfissional" className="link-menu">
                  <img
                    className="icone-painel"
                    src={IconePainelGeral}
                    alt="Painel Geral"
                  />
                  <span className="texto-painel">Painel Geral</span>
                </NavLink>
              </li>

              <li>
                <NavLink to="/agenda" className="link-menu">
                  <img src={IconeAgenda} alt="Agenda" />
                  <span>Agenda</span>
                </NavLink>
              </li>

              <li>
                <NavLink to="/tarefas" className="link-menu">
                  <img src={IconeMinhasTarefas} alt="Minhas tarefas" />
                  <span>Minhas Tarefas</span>
                </NavLink>
              </li>

              <li>
                <NavLink to="/projetos" className="link-menu">
                  <img src={IconeProjetos} alt="Projetos" />
                  <span>Projetos</span>
                </NavLink>
              </li>

              <li>
                <NavLink to="/consultoria" className="link-menu">
                  <img src={IconeConsultoria} alt="Consultoria" />
                  <span>Consultoria</span>
                </NavLink>
              </li>

              <li>
                <NavLink to="/Ia" className="link-menu">
                  <img
                    className="imagem-krooq-ia"
                    src={IconeKrooqIa}
                    alt="KROOQ IA"
                  />
                  <span className="texto-krooq-ia-painel">KROOQ IA</span>
                </NavLink>
              </li>

              {/* ÍCONE DE SAIR - DESKTOP */}
              <li className="item-voltar-home">
                <NavLink to="/home" className="link-menu">
                  <FiLogOut className="icone-sair-menu" />
                  <span>Voltar para o início</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* MENU MOBILE */}
      <aside className="menu-lateral-mobile">
        <div
          className="container-lateral"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          <img
            src={LogoKrooq}
            alt="Logo Krooq"
            className="logo-lateral-mobile"
          />
        </div>

        <ul className={menuAberto ? "menu-lateral ativo" : "menu-lateral"}>
          <li>
            <NavLink to="/CentralProfissional" onClick={() => setMenuAberto(false)}>
              <img
                className="icone-mobile-tamanho"
                src={IconePainelGeral}
                alt="Painel Geral"
              />
              <span>Painel Geral</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/agenda" onClick={() => setMenuAberto(false)}>
              <img className="icone-mobile" src={IconeAgenda} alt="Agenda" />
              <span>Agenda</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/tarefas" onClick={() => setMenuAberto(false)}>
              <img
                className="icone-mobile"
                src={IconeMinhasTarefas}
                alt="Minhas Tarefas"
              />
              <span>Minhas Tarefas</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/projetos" onClick={() => setMenuAberto(false)}>
              <img className="icone-mobile" src={IconeProjetos} alt="Projetos" />
              <span>Projetos</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/consultoria" onClick={() => setMenuAberto(false)}>
              <img className="icone-mobile" src={IconeConsultoria} alt="Consultoria" />
              <span>Consultoria</span>
            </NavLink>
          </li>

          <li className="krooqia-alinhar">
            <NavLink to="/krooqia" onClick={() => setMenuAberto(false)}>
              <img
                className="icone-mobile-tamanho-krooqia"
                src={IconeKrooqIa}
                alt="KROOQ IA"
              />
              <span className="texto-krooqai-responsive">KROOQ IA</span>
            </NavLink>
          </li>

          {/* ÍCONE DE SAIR - MOBILE */}
          <li className="item-voltar-home">
            <NavLink to="/home" onClick={() => setMenuAberto(false)}>
              <FiLogOut className="icone-mobile" />
              <span>Voltar para o início</span>
            </NavLink>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default NavegationLateral;