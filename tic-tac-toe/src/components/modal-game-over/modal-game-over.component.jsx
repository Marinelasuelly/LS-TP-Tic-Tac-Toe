
import "./modal-game-over.css"

import React from "react"

function ModalGameOver({value, isHidden, nome}){ //peca unica de um tabuleiro
let winnerName; 
const writeResult = ()  =>{

    if (value == null) 
        return "Time Over. Não houve vencedor!"
    if(value === "E"){
        return "Empate!"
    }else{
        console.log(nome);
        winnerName =`Parabéns ${(value == "X")? nome[0] : ((nome[1] == null)? "Computador" : nome[1])}!`; 
        return `Letra '${value}' venceu!`
    }

}

    return(
        <section id="modal" className="modal" hidden = {isHidden}>
            <div className="message"> Fim de Jogo </div>
            <div className="messageWinner"> {writeResult()} </div>
            <div className="messageName"> {winnerName} </div>
            <div className="btn">
                <button className = "againbtn" > Jogar outra vez </button>
            </div>
        
        </section>
    );

}

export default ModalGameOver
