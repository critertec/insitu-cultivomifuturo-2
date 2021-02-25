import './CriterHeader.css';

import vect_intentos from '../../assets/vectores/VECT_INTENTOS.svg'
import vect_fallos from '../../assets/vectores/VECT_FALLOS.svg'
import vect_home from '../../assets/vectores/VECT_HOME.svg'

function CriterHeader({ estado: {intentos, puntaje} }) {
    return (
        <>
            <div id="header-background">
                {[...Array(3)].map((x, i) =>
                    <img src={i < intentos ? vect_intentos : vect_fallos} className="header_icon" key={i} />
                )}
                <img src={vect_home} className="header_icon" />
            </div>
            <div id="header-puntaje">Puntaje: {puntaje}</div>
        </>
    );
}

export default CriterHeader;
