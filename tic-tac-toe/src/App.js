import './assets/App.css';
import {
  ControlPanel,
  GamePanel,
  Board

} from "./components";

function App() {
  return (
    <div className="main-content">
      <ControlPanel/>
      <GamePanel/>
    </div>
  );
}

export default App;
