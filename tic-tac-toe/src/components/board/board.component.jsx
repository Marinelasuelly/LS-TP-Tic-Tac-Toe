import "./board.css"
import BoardPiece from "../board-piece/board-piece.component";


import React from "react"

function Board(){
    return(
        <section className="board">
              
            <div className="board-row" id = "uno">
                <div className="peca1">
                    <BoardPiece value = ' '/>
                </div>  
                <div className="peca2">
                    <BoardPiece value = ' '/>
                </div>  
                <div className="peca3">
                    <BoardPiece value = ' '/>
                </div>  
            </div>
            <div className="board-row" id = "dos">
                <div className="peca1">
                    <BoardPiece value = ' '/>
                </div>  
                <div className="peca2">
                    <BoardPiece value = ' '/>
                </div>  
                <div className="peca3">
                    <BoardPiece value = ' '/>
                </div>  
            </div>
            <div className="board-row" id = "tres">
                <div className="peca1">
                    <BoardPiece value = ' '/>
                </div>  
                <div className="peca2">
                    <BoardPiece value = ' '/>
                </div>  
                <div className="peca3">
                    <BoardPiece value = ' '/>
                </div>  
            </div>
        </section>
    );
}

export default Board
