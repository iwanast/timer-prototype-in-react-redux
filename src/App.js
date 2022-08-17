import './App.css';
import { Timer } from "./app/features/timer/Timer"
import { Settings } from "./app/features/settings/Settings"

function App() {
  return (
    <div className="App">
      <Timer/>
      <Settings />
    </div>
  );
}

export default App;
