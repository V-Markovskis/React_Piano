import './App.css';
import Octave from './components/Octave.tsx';
import { notes } from './NoteType/NoteType.ts';
import React from 'react';

function App() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.value);
    const audio = new Audio(`src/sounds/piano_${e.currentTarget.value}.mp3`);
    audio.play();
  };
  return (
    <div>
      <Octave notes={notes} clickHandler={handleClick} />
    </div>
  );
}

export default App;
