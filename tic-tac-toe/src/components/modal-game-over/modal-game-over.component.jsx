
import "./modal-game-over.css"

import React from "react"

function BoardPiece({value, win , loss}){ //peca unica de um tabuleiro
    
//const ( win ,loss ) => {}


    return(
        <section id="boardPiece" className={onPieceClick}>
            <div> {value} </div>
              <button ClassName = "againbtn" onClick = {gameStart}> Jogar outra vez </button>
        </section>
    );

}

export default BoardPiece
