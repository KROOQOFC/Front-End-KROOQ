import "./AuthLayout.css";
import bannerAuth from "../../assets/krooq_cadastre_se.png";
// import bannerAuth from "../../assets/telaNova.png.png";

function AuthLayout({ children }) {
  return (
    <main className="auth-layout">
      <div className="auth-content">
        <section className="auth-form-area">
          {children}
        </section>

        <section className="auth-image-area">
          <img src={bannerAuth} alt="Imagem da KROOQ" />
        </section>
      </div>
    </main>
  );
}

export default AuthLayout;