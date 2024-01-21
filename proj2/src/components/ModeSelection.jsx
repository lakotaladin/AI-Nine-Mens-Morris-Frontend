import './ModeSelection.css';
import playsound from '../assets/sounds/play.wav'
import { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
export default function ModeSelection({ setDifficulty1, setDifficulty2, mode, setMode, onFinish }) {
    
    const [value, setValue] = useState(1);

    useEffect(()=> {
        if(value % 2 === 0)
        play();
    }, [value])


    function onSubmit(e) {
        e.preventDefault();
        onFinish();
    }

    // Sound Let's start
    function play() {
        new Audio(playsound).play();
    }
    return (
        <>
        <div className='global-form-div'>
        <form className="game-mode-form" onSubmit={onSubmit}>
        <h1 className='game-title'>Nine Man&apos;s Morris</h1>
            <div className='mode-div'>
            {(mode === 'human-ai' || mode === 'ai-ai') &&  <p>Difficulty:</p> && <select className='mode-selection' onChange={(e) => setDifficulty1(e.target.value)}>
                <option value='easy'>Easy</option>
                <option value='medium'>Medium</option>
                <option value='hard'>Hard</option>
            </select>}
            {mode === 'ai-ai' && <select className='mode-selection' onChange={(e) => setDifficulty2(e.target.value)}>
                <option value='easy'>Easy</option>
                <option value='medium'>Medium</option>
                <option value='hard'>Hard</option>
            </select>}
            </div>
            <select className='mode-selection' onChange={(e) => setMode(e.target.value)}>
                <option value='human-human'>Human - Human</option>
                <option value='human-ai'>Human - AI</option>
                <option value='ai-ai'>AI - AI</option>
            </select>
            <button onClick={() => setValue(value+1)} className="btn-96"><span>Play game</span></button>
        </form>
        </div>
        </>
    )
}