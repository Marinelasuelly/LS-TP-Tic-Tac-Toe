import { useState , useEffect} from 'react';
import './assets/App.css';
import {
  ControlPanel,
  GamePanel
} from "./components";

function App() {
  let timerId;
  const TIMEOUTGAME = 10;
  const [gameStarted, setGameStarted] = useState(false);
  const [nome, setNome] = useState(Array(2).fill(null));

  const [symbol, setSymbol] = useState("X");
  const [timer,setTimer] = useState(TIMEOUTGAME);


  /*useEffect(() => {
    if (gameStarted) {
      timerId = setInterval(() => {
        let nextTimer;
        setTimer((previousState) => {
          nextTimer = previousState - 1;
          return nextTimer;
        });

        if (nextTimer === 0) {
          setGameStarted(false);
          return;
        }
      }, 1000);
    } else if (timer !== TIMEOUTGAME) {
      setTimer(TIMEOUTGAME);
    }

    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [gameStarted]);
  */
  useEffect(() => {
    let timerId;
  
    if (gameStarted) {
      timerId = setInterval(() => {
        setTimer((previousState) => {
          const nextTimer = previousState - 1;
  
          if (nextTimer === 0) {
            setGameStarted(false);
            clearInterval(timerId); // Interrompe o intervalo quando o temporizador atinge zero
          }
  
          return nextTimer;
        });
      }, 1000);
    } else if (timer !== TIMEOUTGAME) {
      setTimer(TIMEOUTGAME);
    }
  
    return () => {
      clearInterval(timerId); // Limpa o intervalo quando o componente é desmontado
    };
  }, [gameStarted, timer]);

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

  return (
    <div className="main-content">
      <ControlPanel onStarClick = {handleGameStart} gameStart = {gameStarted} symbol = {symbol} timer = {timer}/>
      <GamePanel gameStarted = {gameStarted? false : true} nome = {nome} symbol = {symbol} setSymbol = {setSymbol} timer = {timer}/> 
    </div>
  );
}

export default App;
