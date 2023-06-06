import "./game-panel.css"
import Board from "../board/board.component";

import React from "react"

function GamePanel(){
    return(
        <section id="game-panel">
            <div className="game-row" id = "row1">
                <div className="tab1">
                    <Board />
                </div>  
                <div className="tab2">
                    <Board />
                </div>  
                <div className="tab3">
                    <Board />
                </div>  
            </div>
            <div className="game-row" id = "row2">
                <div className="tab1">
                    <Board />
                </div>  
                <div className="tab2">
                    <Board />
                </div>  
                <div className="tab3">
                    <Board />
                </div> 
            </div>
            <div className="game-row" id = "row3">
                <div className="tab1">
                    <Board />
                </div>  
                <div className="tab2">
                    <Board />
                </div>  
                <div className="tab3">
                    <Board />
                </div> 
            </div>
              
            
        </section>
    );
}

export default GamePanel
