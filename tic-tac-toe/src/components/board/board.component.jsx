import "./board.css"
import {BoardPiece} from "../../components";

import React, { useState } from "react"
import { checkResult } from "../../helpers";

function Board({letter, i}){ // componente que contem 9 pecas
    
    const [symbol, setSymbol] = useState("X");
    const [piece, setPiece] = useState(Array(9).fill(null))//array de 9 elementos preeechido a null

    const result = checkResult(piece); //guarda letra de vencedor ou empate

    
    function handleClick(i) {
        if (piece[i] || checkResult(piece)) { //verifica se a peca ja foi preechida ou se ja ha uma vitoria
            return;
        }
        
        const nextPiece = piece.slice();
        if(symbol === "X"){ //Se o simbolo atual for X o seguinte sera O
            nextPiece[i] = "X";
            setSymbol("O");
        }
        else{
            nextPiece[i] = "O";
            setSymbol("X");
        }
        
        setPiece(nextPiece); 
        
    }
    
    return(
        <section className="board" >
            {result == null ? ( // se nao existir vencedor ou empate mostra o tabuleiro normal
                <div className="running">
                    <div className="board-row" id = "uno" >
                        <div className="peca1">
                            <BoardPiece value = {piece[0]} onPieceClick={() =>handleClick(0)} />
                        </div>  
                        <div className="peca2">
                            <BoardPiece value = {piece[1]} onPieceClick={() =>handleClick(1)} />
                        </div>  
                        <div className="peca3">
                            <BoardPiece value = {piece[2]} onPieceClick={() =>handleClick(2)} />
                        </div>  
                    </div>
                    <div className="board-row" id = "dos">
                        <div className="peca1">
                            <BoardPiece value = {piece[3]} onPieceClick={() =>handleClick(3)} />
                        </div>  
                        <div className="peca2">
                            <BoardPiece value = {piece[4]} onPieceClick={() =>handleClick(4)} />
                        </div>  
                        <div className="peca3">
                            <BoardPiece value = {piece[5]} onPieceClick={() =>handleClick(5)} />
                        </div>    
                    </div>
                    <div className="board-row" id = "tres">
                        <div className="peca1">
                            <BoardPiece value = {piece[6]} onPieceClick={() =>handleClick(6)} />
                        </div>  
                        <div className="peca2">
                            <BoardPiece value = {piece[7]} onPieceClick={() =>handleClick(7)} />
                        </div>  
                        <div className="peca3">
                            <BoardPiece value = {piece[8]} onPieceClick={() =>handleClick(8)} />
                        </div>   
                    </div>
                </div>  
            )
            : // else mostra letra vencedora, se empate mosta E
                (<div className="tabOver" onMouseLeave ={() => letter(i,result)}>{result}</div> )
            }
            
             
        </section>
    );
}

export default Board
