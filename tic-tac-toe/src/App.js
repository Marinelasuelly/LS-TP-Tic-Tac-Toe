import './assets/App.css';
import {
  ControlPanel,
  GamePanel
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
