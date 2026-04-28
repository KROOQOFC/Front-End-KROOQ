import "./AuthLayout.css";
import bannerAuth from "../../assets/krooq_cadastre_se.png";

function AuthLayout({ children }) {
  return (
    <main className="auth-layout">
      <section className="auth-form-area">
        {children}
      </section>

      <section className="auth-image-area">
        <img src={bannerAuth} alt="Imagem da KROOQ" />
      </section>
    </main>
  );
}

export default AuthLayout;