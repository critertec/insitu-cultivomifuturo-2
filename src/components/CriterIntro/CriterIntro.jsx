import './CriterIntro.css';

import img_cultivo from '../../assets/logos/CULTIVO.png'
import img_sponsors from '../../assets/logos/SPONSORS.png'

function CriterIntro({iniciar}) {
    return (
        <div id="intro_background">
            <div id="intro_container">
                <img src={img_cultivo} />
                <h1>Noticias Falsas</h1>
                <h2>Instrucciones</h2>
                <p>Yeiner y Luisa necesitan de tu ayuda para buscar información sobre la COVID-19 en internet. Esta información debe ser verdadera y confiable para crear mensajes y publicaciones en los que puedan confiar sus seguidores. Así ayudarán a su comunidad a identificar las mejores prácticas para protegerse del virus mientras se vacunan.</p>  
                <p>¿Qué debes hacer?</p>
                <p>Desliza las noticias: Mueve tu dedo hacia la derecha si confías en la información que estás leyendo o hacia la izquierda si crees que estás leyendo información falsa.</p>
                <p>Suma puntos: Entre más respuestas correctas, acumularás más puntos. Se considera una respuesta correcta cuando confías en la información de noticias verdaderas o cuando desconfías de las noticias falsas. ¿Podrás identificarlas?</p>
                <p>Multiplica puntos: Si logras encadenar una racha de respuestas correctas, recibirás una bonificación en los próximos puntos que obtengas.</p>
                <img className="img_bottom" src={img_sponsors} />
                <div id="exit" onClick={iniciar}>x</div>
            </div>
        </div>
    );
}

export default CriterIntro;
