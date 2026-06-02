import "./DoisButtons.css"
import { useNavigate } from "react-router-dom";
function DoisButtons() {

     const navigate = useNavigate();

    return (
        <>
       
            <button type="button" className="btn-sobre-nos" onClick={() => navigate("/sobre-nos")}>SOBRE NÓS</button>
            
            <button type="button" className="btn-iniciar-projeto" onClick={() => navigate("/CentralProfissional")}>INICIAR UM PROJETO</button>


        </>

    );
}

export default DoisButtons