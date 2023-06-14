import { useState } from 'react';
import './assets/App.css';
import {
  ControlPanel,
  GamePanel
} from "./components";

function App() {

  const [gameStarted, setGameStarted] = useState(false);
  const [nome, setNome] = useState(Array(2).fill(null));
  let names;

  const handleGameStart = () => {
    if (gameStarted) {
      console.log("Terminar");
      setGameStarted(false);
    } else {
      console.log("Iniciar");
      setGameStarted(true);
    }

    if (document.getElementById("vs").value === "vsUtilizador"){
      const nome0 = prompt("Nome do primeiro jogador:");
      const nome1 = prompt("Nome do segundo jogador:");
      const primeirojogador = Math.round(Math.random()) + 1;
      primeirojogador === 1 ? setNome([nome0, nome1]) : setNome([nome1, nome0]);
      primeirojogador === 1 ? alert("Primeiro Jogador: "+ nome0 + ": X ") : alert("Primeiro Jogador: "+ nome1 + ": X ");
    }
    else{
        const nome0 = prompt("Nome do jogador:");
        setNome([nome0]);
        alert("Primeiro Jogador: "+nome0 + ": X ");
    }
  };

  console.log(nome);

  return (
    <div className="main-content">
      <ControlPanel onStarClick = {handleGameStart} gameStart = {gameStarted}/>
      <GamePanel hide = {gameStarted? false : true} nome = {nome}/> 
    </div>
  );
}

export default App;
