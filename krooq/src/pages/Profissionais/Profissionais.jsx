import './Profissionais.css';
import Navegation from '../../components/Navegation/Navegation';
import Rotape from '../../components/Rodape/Rodape';
import HeroProfissionais from '../../components/HeroProfissionais/HeroProfissionais';
import EspecialistasProfissionais from '../../components/EspecialistasProfissionais/EspecialistasProfissionais.jsx';

function Profissionais() {
    return (
        <>
        <Navegation/>
        <HeroProfissionais/>
        <EspecialistasProfissionais/>
        <Rotape/>
        </>
    );
}

export default Profissionais; 