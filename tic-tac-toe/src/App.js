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

      setName(nome0, 0);
      setName(nome1 ,1);
      console.log(nome);

      //names = {nome0,nome1}
      //console.log(names);
    }
    else{
        const nome0 = prompt("Nome do jogador:");
        setName(nome0, 0);
    }
  };

  const setName = (name, i)=>{
    const nextName = nome.slice();
    nextName[i] = name;
    setNome(nextName);
    console.log(nome);
  }


  return (
    <div className="main-content">
      <ControlPanel onStarClick = {handleGameStart} gameStart = {gameStarted}/>
      <GamePanel hide = {gameStarted? false : true} nome = {nome}/> 
    </div>
  );
}

export default App;
