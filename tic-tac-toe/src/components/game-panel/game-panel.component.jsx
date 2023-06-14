import "./game-panel.css"
import React, { useState } from "react"
import { checkResult } from "../../helpers";
import {
    Board,
    ModalGameOver
} from "../../components";


function GamePanel({hide, nome}){ //componete que contem os 9 tabuleiros

   
    const [result, setResult] = useState(Array(9).fill(null));
    const [symbol, setSymbol] = useState("X");
    const [activePieceIndex, setActivePieceIndex] = useState(null);

    const boardResultHandler = (i,value) => {
        
        const nextRes = result.slice();
        nextRes[i] = value;
        setResult(nextRes);
    }
    
    checkResult(result);

    const handleSymbol = (value) =>{ value === "X"? setSymbol("O") : setSymbol("X") }

    const handleClickedPiece = (indexClicked) => {
        setActivePieceIndex(indexClicked);
    }

    const isBoardActive = (i) =>{

        if(activePieceIndex === null){
            return false;
        }
        if(i === activePieceIndex ||result[activePieceIndex]!==null){
            return false;
        }
        return true;

    } 

    
    return(
        <section id="game-panel" hidden ={hide}>
            <div className="game-row" id = "row1">
                <div className="tab1">
                    <Board letter = {boardResultHandler} index={0} symbol = {symbol} changeSymbol = {handleSymbol} onPieceClick={handleClickedPiece} isBoardActive = {isBoardActive(0)}/>
                </div>  
                <div className="tab2">
                    <Board letter = {boardResultHandler} index={1} symbol = {symbol} changeSymbol = {handleSymbol} onPieceClick={handleClickedPiece} isBoardActive = {isBoardActive(1)}/>
                </div>  
                <div className="tab3">
                    <Board letter = {boardResultHandler} index={2} symbol = {symbol} changeSymbol = {handleSymbol} onPieceClick={handleClickedPiece} isBoardActive = {isBoardActive(2)}/>
                </div>  
            </div>
            <div className="game-row" id = "row2">
                <div className="tab1">
                    <Board letter = {boardResultHandler} index={3} symbol = {symbol} changeSymbol = {handleSymbol} onPieceClick={handleClickedPiece} isBoardActive = {isBoardActive(3)}/>
                </div>  
                <div className="tab2">
                    <Board letter = {boardResultHandler} index={4} symbol = {symbol} changeSymbol = {handleSymbol} onPieceClick={handleClickedPiece} isBoardActive = {isBoardActive(4)}/>
                </div>  
                <div className="tab3">
                    <Board letter = {boardResultHandler} index={5} symbol = {symbol} changeSymbol = {handleSymbol} onPieceClick={handleClickedPiece} isBoardActive = {isBoardActive(5)}/>
                </div> 
            </div>
            <div className="game-row" id = "row3">
                <div className="tab1">
                    <Board letter = {boardResultHandler} index={6} symbol = {symbol} changeSymbol = {handleSymbol} onPieceClick={handleClickedPiece} isBoardActive = {isBoardActive(6)}/>
                </div>  
                <div className="tab2">
                    <Board letter = {boardResultHandler} index={7} symbol = {symbol} changeSymbol = {handleSymbol} onPieceClick={handleClickedPiece} isBoardActive = {isBoardActive(7)}/>
                </div>  
                <div className="tab3">
                    <Board letter = {boardResultHandler} index={8} symbol = {symbol} changeSymbol = {handleSymbol} onPieceClick={handleClickedPiece} isBoardActive = {isBoardActive(8)}/>
                </div> 
            </div>
              
            <ModalGameOver value = {checkResult(result)} isHidden = {(checkResult(result) == null)? true : false} nome = {nome}/>
        </section>
    );
}


export default GamePanel
