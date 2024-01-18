import './App.css';
import Octave from './components/Octave.tsx';
import { notes } from './NoteType/NoteType.ts';
import React from 'react';
import AnimationLeft from './assets/Animation/AnimationLeft/AnimationLeft.tsx';
import AnimationRight from './assets/Animation/AnimationRight/AnimationRight.tsx';

function App() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.value);
    const audio = new Audio(`src/sounds/piano_${e.currentTarget.value}.mp3`);
    audio.play();
  };
  return (
    <div className="globalContainer">
      <AnimationLeft />
      <Octave notes={notes} clickHandler={handleClick} />
      <AnimationRight />
    </div>
  );
}

export default App;
