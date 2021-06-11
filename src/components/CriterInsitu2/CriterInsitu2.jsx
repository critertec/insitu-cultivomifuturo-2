import { useState } from 'react';

import CriterIntro from '../CriterIntro/CriterIntro';
import CriterHeader from '../CriterHeader/CriterHeader';
import CriterQuestion from '../CriterQuestion/CriterQuestion';
import CriterFeedback from '../CriterFeedback/CriterFeedback';
import CriterFooter from '../CriterFooter/CriterFooter';

import { noticias, feedback } from './RepoNoticias';

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

function CriterInsitu2() {
    const [listaNoticias, setListaNoticias] = useState([]);
    const [estado, setEstado] = useState({escena: 'introduccion'});
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
        if (estado.intentos === 0 || listaNoticias.length === 0){
            escena = 'feedback_final';
            let feedback_final = feedback[parseInt(estado.puntaje/135)];
            setEstado({...estado, escena: escena, feedback_final: feedback_final});
        } else {
            escena = 'pregunta';
            setEstado({...estado, escena: escena});
            setPregunta(listaNoticias.slice(-1)[0]);
            setListaNoticias(listaNoticias.slice(0,-1));
        }
    }
    const iniciar = () => {
        const shuffledNews = shuffle([...noticias]);

        setListaNoticias( shuffledNews.slice(0,-1) );
        setEstado({
            escena: 'pregunta',
            intentos: 3,
            puntaje: 0,
            multiplicador: 1,
            racha: 0
        });
        setPregunta( shuffledNews.slice(-1)[0] );
    }

    return (
        <>
            <CriterHeader estado={estado} />
            <CriterFooter estado={estado} />
            {estado.escena === 'pregunta'
                ? <CriterQuestion pregunta={pregunta} contestar={contestar} />
                : <CriterFeedback estado={estado} pregunta={pregunta} continuar={continuar} reiniciar={iniciar} />
            }
            {estado.escena === 'introduccion' && <CriterIntro iniciar={iniciar} />}
        </>
    );
}

export default CriterInsitu2;
