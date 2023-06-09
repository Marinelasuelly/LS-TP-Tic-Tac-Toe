import "./control-panel.css"

import React, { useState } from "react"

function ControlPanel({onStarClick, gameStart, symbol, timer}){

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
                <dd id="gameTime">{timer}</dd>
            </dl>
            <dl className="list-item">
                <dt >Proximo Jogador:</dt>
                <dd id="nextplayer">{symbol}</dd>
            </dl>
            
        </section>
    );
}

export default ControlPanel
