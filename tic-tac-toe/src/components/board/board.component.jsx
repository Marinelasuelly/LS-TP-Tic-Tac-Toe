import "./board.css"
import {BoardPiece} from "../../components";

import React, { useState } from "react"
import { checkResult } from "../../helpers";

function Board({letter, index, symbol, changeSymbol, onPieceClick, isBoardActive} ){ // componente que contem 9 pecas
    
   
    const [piece, setPiece] = useState(Array(9).fill(null))//array de 9 elementos preeechido a null

    const result = checkResult(piece); //guarda letra de vencedor ou empate
   
    const handleClick = (i) => {
        const nextPiece = piece.slice();
        if (nextPiece[i] || checkResult(piece)) { //verifica se a peca ja foi preechida ou se ja ha uma vitoria
            return;
        }  
          
        nextPiece[i] = symbol;
        changeSymbol(symbol);
        setPiece(nextPiece);
        
        onPieceClick(i);

        //se o modo escolhido for 1vsPC e se o tabuleiro nao estiver ganho
        if (document.getElementById("vs").value !== "vsUtilizador" && checkResult(nextPiece) === null){
             computador(nextPiece);
        }
       
    }
    
    const computador = (nextPiece) =>{
        const random = Math.floor(Math.random() * 8);
        if (nextPiece[random] || checkResult(piece)) { //verifica se a peca ja foi preechida ou se ja ha uma vitoria
            computador(nextPiece);
            return;
        }
        symbol === "X"? nextPiece[random] = "O" : nextPiece[random] = "X" 
        changeSymbol(nextPiece[random]);
        setPiece(nextPiece);
    }

    return(
        <section className="board" >
            {result == null ? ( // se nao existir vencedor ou empate mostra o tabuleiro normal
                <div className="running">
                    <div className="board-row" id = "uno" >
                        <div className="peca1">
                            <BoardPiece value = {piece[0]} onPieceClick={() =>handleClick(0)} isActive = {isBoardActive}/>
                        </div>  
                        <div className="peca2">
                            <BoardPiece value = {piece[1]} onPieceClick={() =>handleClick(1)} isActive = {isBoardActive}/>
                        </div> 
                        <div className="peca3">
                            <BoardPiece value = {piece[2]} onPieceClick={() =>handleClick(2)} isActive = {isBoardActive}/>
                        </div>  
                    </div>
                    <div className="board-row" id = "dos">
                        <div className="peca1">
                            <BoardPiece value = {piece[3]} onPieceClick={() =>handleClick(3)} isActive = {isBoardActive}/>
                        </div>  
                        <div className="peca2">
                            <BoardPiece value = {piece[4]} onPieceClick={() =>handleClick(4)} isActive = {isBoardActive}/>
                        </div>  
                        <div className="peca3">
                            <BoardPiece value = {piece[5]} onPieceClick={() =>handleClick(5)} isActive = {isBoardActive}/>
                        </div>    
                    </div>
                    <div className="board-row" id = "tres">
                        <div className="peca1">
                            <BoardPiece value = {piece[6]} onPieceClick={() =>handleClick(6)} isActive = {isBoardActive}/>
                        </div>  
                        <div className="peca2">
                            <BoardPiece value = {piece[7]} onPieceClick={() =>handleClick(7)} isActive = {isBoardActive}/>
                        </div>  
                        <div className="peca3">
                            <BoardPiece value = {piece[8]} onPieceClick={() =>handleClick(8)} isActive = {isBoardActive}/>
                        </div>   
                    </div>
                </div>  
            )
            : // else mostra letra vencedora, se empate mosta E
                (<div className="tabOver" onMouseMove ={() => letter(index,result)}>{result}</div>)
            }
            
             
        </section>
    );
}
//!(activePieceIndex===null)&&(activePieceIndex !== index)
export default Board
