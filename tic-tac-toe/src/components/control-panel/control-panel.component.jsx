import "./control-panel.css"

import React from "react"

function ControlPanel(){
    function nome(){
        if (document.getElementById("vs").value === "vsUtilizador"){
            let nome1 = prompt("Nome do primeiro jogador:");
            let nome2 = prompt("Nome do segundo jogador:");
        }
        else{
            let nome1 = prompt("Nome do jogador:");
        } 
    }
    return(
        <section id="panel-control">
        
            <select name="vs" id="vs">
            <option value="vsUtilizador">Jogar vs Utilizador</option>
            <option value="vsComputador">Jogar vs Computador</option>
            </select>     
            
            <button type="button" id="btPlay" onClick={nome}>Start</button>

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
