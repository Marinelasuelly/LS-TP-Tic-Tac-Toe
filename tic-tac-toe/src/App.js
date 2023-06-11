import { useState } from 'react';
import './assets/App.css';
import {
  ControlPanel,
  GamePanel
} from "./components";

function App() {

  const [gameStarted, setGameStarted] = useState(false);

  const handleGameStart = () => {
    if (gameStarted) {
      console.log("Terminar");
      setGameStarted(false);
    } else {
      console.log("Iniciar");
      setGameStarted(true);
    }

    if (document.getElementById("vs").value === "vsUtilizador"){
      let nome1 = prompt("Nome do primeiro jogador:");
      let nome2 = prompt("Nome do segundo jogador:");
    }
    else{
        let nome1 = prompt("Nome do jogador:");
    }
  };

  return (
    <div className="main-content">
      <ControlPanel onStarClick = {handleGameStart} gameStart = {gameStarted}/>
      <GamePanel hide = {gameStarted? false : true}/> 
    </div>
  );
}

export default App;
