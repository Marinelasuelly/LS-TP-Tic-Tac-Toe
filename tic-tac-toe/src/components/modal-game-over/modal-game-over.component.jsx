
import "./modal-game-over.css"

import React from "react"

function ModalGameOver({value, isHidden}){ //peca unica de um tabuleiro

const writeResult = ()  =>{

    if (value == null) 
        return "Time Over. Não houve vencedor!"
    if(value === "E"){
        return "Empate!"
    }else{
        return `Letra '${value}' venceu!`
    }

}

    return(
        <section id="modal" className="modal" hidden = {isHidden}>
            <div className="message"> Fim de Jogo </div>
            <div className="messageWinner"> {writeResult()} </div>
            <div className="btn">
                <button className = "againbtn" > Jogar outra vez </button>
            </div>
            
   
        </section>
    );

}

export default ModalGameOver
