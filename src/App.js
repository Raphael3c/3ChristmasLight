import { Circle } from './components/Circle';

import './styles/App.css'
import './global.css'

function App() {
  return (
    <div className="App">
      <Circle color="blue"/>
      <Circle color="yellow"/>
      <Circle color="violet"/>
      <Circle color="green"/>
    </div>
  );
}

export default App;
