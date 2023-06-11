import "./game-panel.css"
import React, { useState } from "react"
import { checkResult } from "../../helpers";
import {
    Board,
    ModalGameOver
} from "../../components";


function GamePanel({hide}){ //componete que contem os 9 tabuleiros

   
    const [result, setResult] = useState(Array(9).fill(null));
    

    const boardResultHandler = (i,value) => {
        
        const nextRes = result.slice();
        nextRes[i] = value;
        setResult(nextRes);
        console.log(result);
    }
    
    checkResult(result);
    
    
    return(
        <section id="game-panel" hidden ={hide}>
            <div className="game-row" id = "row1">
                <div className="tab1">
                    <Board letter = {boardResultHandler} i={0}/>
                </div>  
                <div className="tab2">
                    <Board letter = {boardResultHandler} i={1}/>
                </div>  
                <div className="tab3">
                    <Board letter = {boardResultHandler} i={2}/>
                </div>  
            </div>
            <div className="game-row" id = "row2">
                <div className="tab1">
                    <Board letter = {boardResultHandler} i={3}/>
                </div>  
                <div className="tab2">
                    <Board letter = {boardResultHandler} i={4}/>
                </div>  
                <div className="tab3">
                    <Board letter = {boardResultHandler} i={5}/>
                </div> 
            </div>
            <div className="game-row" id = "row3">
                <div className="tab1">
                    <Board letter = {boardResultHandler} i={6}/>
                </div>  
                <div className="tab2">
                    <Board letter = {boardResultHandler} i={7}/>
                </div>  
                <div className="tab3">
                    <Board letter = {boardResultHandler} i={8}/>
                </div> 
            </div>
              
            <ModalGameOver value = {checkResult(result)} isHidden = {(checkResult(result) == null)? true : false}/>
        </section>
    );
}


export default GamePanel
