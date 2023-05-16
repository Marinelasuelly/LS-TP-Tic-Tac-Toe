import "./control-panel.css"

import React from "react"

function ControlPanel(){
    return(
        <section id="panel-control">
                
            <button type="button" id="btPlay" disabled>Start</button>

            <dl className="list-item">
                <dt>Tempo de Jogo:</dt>
                <dd id="gameTime">0</dd>
            </dl>
            <dl className="list-item">
                <dt>Pontuação TOP:</dt>
                <dd id="pointsTop">0</dd>
            </dl>
            <dl className="list-item">
                <dt>Pontuação:</dt>
                <dd id="points">0</dd>
            </dl>
            <div id="top10">
                <button id="btTop">Ver TOP 10</button>
            </div>
            
        </section>
    );
}

export default ControlPanel