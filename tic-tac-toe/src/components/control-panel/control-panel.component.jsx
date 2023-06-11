import "./control-panel.css"

import React, { useState } from "react"

function ControlPanel({onStarClick, gameStart}){

    const [mode, setMode] = useState("none");
    const handleSetMode = () =>{
        const value = document.getElementById("vs").value;
        switch (value){
            case "none":
                setMode("none");
                break;

            case "vsUtilizador":
                setMode("vsUtilizador");
                break;

            case "vsComputador":
                setMode("vsComputador");
                break;
        }
        
            
    }

    return(
        <section id="panel-control">
        
            <select name="vs" id="vs" onChange={handleSetMode} disabled={gameStart}>
                <option value= "none"> Modo de Jogo...</option>
                <option value="vsUtilizador" >Jogar vs Utilizador</option>
                <option value="vsComputador" >Jogar vs Computador</option>
            </select>     
            
            <button type="button" id="btPlay" onClick={onStarClick} disabled = {mode == "none"? true : false || gameStart}>Start</button>

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
