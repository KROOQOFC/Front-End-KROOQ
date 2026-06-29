import "./ServicosEspecialistas.css";
import Arquiteta from "../../assets/ArquitetaServicos.webp";
import Seta from "../../assets/IconSeta.webp";
import IconUsuario from "../../assets/IconUsuario.webp";

function ServicosEspecialista() {
  return (
    <div className="ServicosEspecialistaContainer">
      <img src={Arquiteta} alt="" className="ArquitetaServicos" />

      <div className="ColunaEspecialistas">
        <div className="ExplicacaoEspecialista">
          <h4 className="PqEspecialista">
            Por que escolher nossos <br /> especialistas?
          </h4>

          <p className="TextoArquiteto">
            Conectamos você a um ecossistema completo de especialistas. Da visão
            técnica do arquiteto à mão de obra qualificada no canteiro de obras,
            garantimos que cada etapa do seu projeto seja entregue com precisão
            e qualidade.
          </p>
        </div>

        <div className="CardsEspecialistas">
          <div className="ServicosConfiaveis">
            <img
              src={IconUsuario}
              alt=""
              className="IconUsuarioEspecialista"
            />
            <h5 className="TituloServicosConfiaveis">
              Serviços Confiáveis
            </h5>
            <img src={Seta} alt="" className="IconSetaEspecialista" />
          </div>

          <div className="ProfissionaisNivel">
            <img
              src={IconUsuario}
              alt=""
              className="IconUsuarioEspecialista"
            />
            <h5 className="TituloProfissionaisNivel">
              Profissionais de Alto Nível
            </h5>
            <img src={Seta} alt="" className="IconSetaEspecialista" />

            <p className="TextoProfissionaisNivel">
              Nossa rede conta com arquitetos especialistas em design
              inteligente e trabalhadores da construção civil autônomos
              altamente capacitados. Separamos cada categoria para que você
              encontre exatamente o talento que sua obra precisa.
            </p>
          </div>

          <div className="AdaptabilidadeEspecialista">
            <img
              src={IconUsuario}
              alt=""
              className="IconUsuarioEspecialista"
            />
            <h5 className="TituloAdaptabilidadeEspecialista">
              Adaptabilidade
            </h5>
            <img src={Seta} alt="" className="IconSetaEspecialista" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicosEspecialista;