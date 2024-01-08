import './App.css'
import Game from './components/Game'
import { useState } from 'react';
import ModeSelection from './components/ModeSelection';

function App() {

  const [mode, setMode] = useState('human-human');
  const [difficulty1, setDifficulty1] = useState('easy');
  const [difficulty2, setDifficulty2] = useState('easy');
  const [modeSelection, setModeSelection] = useState(true);

  return (
    <>
      {modeSelection ?
        <ModeSelection
          setDifficulty1={setDifficulty1}
          setDifficulty2={setDifficulty2}
          mode={mode}
          setMode={setMode}
          onFinish={() => setModeSelection(false)}
        /> :
        <Game mode={mode} difficulty1={difficulty1} difficulty2={difficulty2} setModeSelection={setModeSelection} />
      }
    </>
  )
}

export default App
