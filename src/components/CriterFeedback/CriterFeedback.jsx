import './CriterFeedback.css';

import vect_feednoticia from '../../assets/vectores/VECT_FEED_NOTICIA_01.svg'
import vect_correcto from '../../assets/vectores/VECT_CORRECTO.svg'
import vect_incorrecto from '../../assets/vectores/VECT_INCORRECTO.svg'
import vect_ramader from '../../assets/vectores/VECT_RAMA_DER.svg'
import vect_ramaizq from '../../assets/vectores/VECT_RAMA_IZQ.svg'

function CriterFeedback({
    estado: {escena, respuesta, evaluacion, puntos, puntaje, feedback_final},
    pregunta: {feedback},
    continuar, reiniciar
}) {

    const vect_evaluacion = {
        correcto: vect_correcto,
        incorrecto: vect_incorrecto
    }

    return (
        <div id="feedback">
            {escena === 'feedback' &&
                <>
                <div id="tip">
                    <div id="tip-icon">
                        <img src={vect_feednoticia} className="tip-icon" />
                    </div>
                    <div id="tip-content">
                        <div className="tip-content-title">Tip/Feedback:</div>
                        <p>{feedback[respuesta]}</p>
                    </div>
                </div>
                <div className="points">
                    <img src={vect_evaluacion[evaluacion]} className="tip-points-img" />
                    +{puntos} puntos
                    <div className="tip-points-action" onClick={continuar}>CONTINUAR</div>
                    <div id="floating-result" className={evaluacion}>{evaluacion}</div>
                </div>
                </>
            }
            
            {escena === 'feedback_final' &&
                <>
                <div id="tip">
                    <div id="tip-icon">
                        <img src={vect_feednoticia} className="tip-icon" />
                    </div>
                    <div id="tip-content">
                        <div className="tip-content-title">Tip:</div>
                        <p>{feedback_final}</p>
                    </div>
                </div>
                <div className="points end-points">
                    Tu puntaje es:
                    <div className="final-points">
                        <div id="end-left-arrow"></div>
                        <img src={vect_ramader} className="end-points-img" />
                        {puntaje}
                        <img src={vect_ramaizq} className="end-points-img" />
                        <div id="end-right-arrow"></div>
                    </div>
                    <div className="tip-points-action" onClick={reiniciar}>
                        Volver a Jugar
                    </div>
                </div>
                </>
            }
        </div>
    );
}

export default CriterFeedback;
