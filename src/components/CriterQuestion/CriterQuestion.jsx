import './CriterQuestion.css';

function CriterQuestion({
    pregunta: {titulo, subtitulo, contenido},
    contestar
}) {
    return (
        <div id="question">
            <div id="question-statement">
                <div id="question-statement-title">{titulo}</div>
                <div id="question-statement-subtitle">{subtitulo}</div>
                <div id="question-statement-content" dangerouslySetInnerHTML={{__html: contenido}}></div>
                <div id="question-statement-icon"></div>
            </div>
            <div id="question-buttons" onClick={contestar}>
                <div id="arrow-left" data-type="mentira"></div>
                <div id="label-left" data-type="mentira">MENTIRA</div>
                <div id="label-right" data-type="verdad">VERDAD</div>
                <div id="arrow-right" data-type="verdad"></div>
            </div>
        </div>
    );
}

export default CriterQuestion;
