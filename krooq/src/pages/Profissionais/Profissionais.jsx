import './Profissionais.css';
import Navegation from '../../components/Navegation/Navegation';
import Rotape from '../../components/Rodape/Rodape';
import HeroProfissionais from '../../components/HeroProfissionais/HeroProfissionais';
import EspecialistasProfissionais from '../../components/EspecialistasProfissionais/EspecialistasProfissionais.jsx';
import HeroDashboardProfissionais from '../../components/HeroDashboardProfissionais/HeroDashboardProfissionais.jsx';
import ComentariosProfissionais from '../../components/ComentariosProfissionais/ComentariosProfissionais.jsx';
import AvaliacoesProfissionais from '../../components/AvaliacoesProfissionais/AvaliacoesProfissionais.jsx';

function Profissionais() {
    return (
        <>
        <Navegation/>
        <HeroProfissionais/>
        <EspecialistasProfissionais/>
        <HeroDashboardProfissionais/>
        <ComentariosProfissionais/>
        <AvaliacoesProfissionais/>
        <Rotape/>
        </>
    );
}

export default Profissionais; 