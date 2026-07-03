import { useEffect } from "react";

function VLibras() {
  useEffect(() => {
    function loadVLibras() {
      const Widget =
        window.VLibras?.Widget || window.VLibras?.default?.Widget;

      if (Widget) {
        new Widget("https://vlibras.gov.br/app");
      }
    }

    const scriptAlreadyExists = document.getElementById("vlibras-script");

    if (!scriptAlreadyExists) {
      const script = document.createElement("script");
      script.id = "vlibras-script";
      script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
      script.async = true;
      script.onload = loadVLibras;
      document.body.appendChild(script);
    } else {
      loadVLibras();
    }
  }, []);

  return (
    <div vw="" className="enabled">
      <div vw-access-button="" className="active"></div>
      <div vw-plugin-wrapper="">
        <div className="vw-plugin-top-wrapper"></div>
      </div>
    </div>
  );
}

export default VLibras;