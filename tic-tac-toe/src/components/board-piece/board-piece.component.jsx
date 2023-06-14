
import "./board-piece.css"

import React from "react"

function BoardPiece({value, onPieceClick, isActive}){ //peca unica de um tabuleiro
    
const isFull = (value!=null)?  true : false;

    return(
        <section id="boardPiece">
              <button className="piece"  disabled = {isFull||isActive} onClick = {onPieceClick}  > {value} </button>
        </section>
    );


}

export default BoardPiece
