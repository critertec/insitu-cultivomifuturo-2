import { useState, useEffect } from 'react';

import CriterHeader from '../CriterHeader/CriterHeader';
import CriterQuestion from '../CriterQuestion/CriterQuestion';
import CriterFeedback from '../CriterFeedback/CriterFeedback';
import CriterFooter from '../CriterFooter/CriterFooter';

import { noticias, feedback } from './RepoNoticias';

function CriterInsitu2() {
    const [estado, setEstado] = useState({});
    const [pregunta, setPregunta] = useState({});

    const contestar = (event) => {
        let response_type = event.target.dataset.type;
        if (!response_type) return;

        let resp_correcta = response_type === pregunta.tipo;

        let puntos = resp_correcta ? 8 * estado.multiplicador : 0;
        let racha = resp_correcta ? estado.racha + 1 : 0;
        let multiplicador = resp_correcta ? estado.multiplicador : 1;
        if (racha === 5) {
            racha = 0;
            multiplicador = multiplicador * 2;
        }

        let nuevo_estado = {
            escena: 'feedback',
            intentos: resp_correcta ? estado.intentos : estado.intentos - 1,
            puntaje: estado.puntaje + puntos,
            respuesta: response_type,
            evaluacion: resp_correcta ? 'correcto' : 'incorrecto',
            puntos: puntos,
            multiplicador: multiplicador,
            racha: racha
        }
        setEstado({...estado, ...nuevo_estado});
    }
    const continuar = () => {
        let escena = 'pregunta';
        if (estado.intentos === 0 || noticias.length === 0){
            escena = 'feedback_final';
            let feedback_final = feedback[parseInt(estado.puntaje/100)];
            setEstado({...estado, escena: escena, feedback_final: feedback_final});
        } else {
            escena = 'pregunta';
            setEstado({...estado, escena: escena});
            setPregunta(noticias.pop());
        }
    }
    const iniciar = () => {
        let noticiasList = noticias;
        noticiasList = noticiasList.sort(() => Math.random() - 0.5);

        setEstado({
            escena: 'pregunta',
            intentos: 3,
            puntaje: 0,
            multiplicador: 1,
            racha: 0
        });
        setPregunta(noticiasList.pop());
    }

    useEffect(() => {
        iniciar();
    }, [])

    return (
        <>
            <CriterHeader estado={estado} />
            <CriterFooter estado={estado} />
            {estado.escena === 'pregunta'
                ? <CriterQuestion pregunta={pregunta} contestar={contestar} />
                : <CriterFeedback estado={estado} pregunta={pregunta} continuar={continuar} reiniciar={iniciar} />
            }
        </>
    );
}

export default CriterInsitu2;
