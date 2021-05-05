import { Circle } from './components/Circle';

import './styles/App.css';
import './global.css';
import { useState } from 'react';

function App() {

  const [isUp, setIsUp] = useState(true);
  const [text, setText] = useState("Desativar");
  const [selectValue, setSelectValue] = useState('1')

  function setAnimation(){
    setIsUp(!isUp)

    isUp ? setText("Ativar") :  setText("Desativar");
  }

  return (
    <>
      <div className="App">
        <div className="flex">
          <Circle color="#d82b1a" glow="1" isUp={isUp} velocity={selectValue}/>
          <Circle color="#eb5e1f" glow="2" isUp={isUp} velocity={selectValue}/>
          <Circle color="#f0d144" glow="3" isUp={isUp} velocity={selectValue}/>
          <Circle color="#0a7f43" glow="4" isUp={isUp} velocity={selectValue}/>
          <Circle color="#359ae7" glow="5" isUp={isUp} velocity={selectValue}/>
          <Circle color="#1c3aa8" glow="6" isUp={isUp} velocity={selectValue}/>
          <Circle color="#642359" glow="7" isUp={isUp} velocity={selectValue}/>
        </div>
        <div className="form">
            <button onClick={setAnimation}>{text}</button>
            <div className="velocityForm">
              <label htmlFor="velocity">Velocidade:</label>
              <input 
                name="velocity" 
                id="velocity"
                type="range" 
                min="0.5" max="3" 
                value={selectValue} 
                onChange={e => setSelectValue(e.target.value)}
                step="0.025"/>
            </div>
        </div>
      </div> 

    </>
  );
}

export default App;
