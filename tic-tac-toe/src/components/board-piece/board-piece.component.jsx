
import "./board-piece.css"

import React from "react"

function BoardPiece({value, onPieceClick}){ //peca unica de um tabuleiro
    
    function isFull(){
      if(value != null)
        return true;
      return false;
    }

    return(
        <section id="boardPiece">
              <button className="piece"  disabled = {isFull()} onClick = {onPieceClick}  > {value} </button>
        </section>
    );


}

export default BoardPiece
