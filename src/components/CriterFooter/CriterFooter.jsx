import './CriterFooter.css';

function CriterFooter({ estado: {escena, evaluacion} }) {
    return (
        <div id="footer">
            {escena === 'pregunta' &&
                <>
                <div id="luisa_atras" className="bg_personaje"></div>
                <div id="yeiner_atras" className="bg_personaje"></div>
                </>
            }

            {escena === 'feedback' &&
                <>
                {evaluacion === 'correcto'
                    ? <div id="footer_correcto" className="bg_personaje"></div>
                    : <div id="footer_incorrecto" className="bg_personaje"></div>
                }
                <div id="lilia_frente" className="bg_personaje"></div>
                </>
            }

            {escena === 'feedback_final' &&
                <>
                <div id="footer_final" className="bg_personaje"></div>
                <div id="luisa_frente" className="bg_personaje"></div>
                <div id="yeiner_frente" className="bg_personaje"></div>
                </>
            }
        </div>
    );
}

export default CriterFooter;
