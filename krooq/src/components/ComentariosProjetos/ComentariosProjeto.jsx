import "./ComentariosProjetos.css";

import Rectangle16 from "../../assets/Rectangle 16 (1).png";
import Rectangle18 from "../../assets/Rectangle 18.png";

function ComentariosProjetos() {
  return (
    <section className="comentarios-projetos">
      <div className="comentarios-container">
        <div className="sonho-bloco">
          <img
            src={Rectangle16}
            alt="Projeto arquitetônico com vegetação"
            className="sonho-imagem"
          />

          <div className="sonho-card">
            <h2>
              Construa Seu <br />
              Sonho
            </h2>

            <ul>
              <li>Ótima Acessível</li>
              <li>Alta Experiência</li>
              <li>Entrega Completa do Projeto</li>
              <li>Design Personalizado</li>
              <li>Excelência em Design</li>
            </ul>

            <button>DETALHES</button>
          </div>
        </div>

        <div className="comentarios-area">
          <h2>Comentários</h2>

          <div className="comentarios-lista">
            <article className="depoimento-card">
              <span className="aspas">“</span>

              <p>
                O melhor projeto que já fizemos. A KROOQ conseguiu transformar
                uma ideia simples em uma experiência completa.
              </p>

              <div className="cliente">
                <div className="cliente-avatar"></div>
                <div>
                  <strong>Maria Luiza</strong>
                  <small>Cliente residencial</small>
                </div>
              </div>
            </article>

            <article className="depoimento-card">
              <span className="aspas">“</span>

              <p>
                A equipe entendeu exatamente o que queríamos e entregou uma
                proposta moderna, funcional e muito bem planejada.
              </p>

              <div className="cliente">
                <div className="cliente-avatar"></div>
                <div>
                  <strong>Rafael Andrade</strong>
                  <small>Cliente comercial</small>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div className="contato-projeto">
          <div className="contato-texto">
            <h2>
              Vamos iniciar um <br />
              projeto juntos
            </h2>

            <img
              src={Rectangle18}
              alt="Prédio residencial moderno"
              className="contato-imagem"
            />
          </div>

          <form className="contato-form">
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="E-mail" />
            <input type="text" placeholder="Mensagem" />

            <button type="button">Enviar</button>
          </form>
        </div>

        <div className="descricao-final">
          <p>
            Nossa equipe ajuda você a sair da ideia e transformar o projeto em
            uma solução arquitetônica funcional, elegante e alinhada ao seu
            estilo de vida.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ComentariosProjetos;