import './App.css';
import Octave from './components/Octave.tsx';
import { notes, NoteType } from './NoteType/NoteType.ts';
import React, { useEffect, useState } from 'react';
import AnimationLeft from './assets/Animation/AnimationLeft/AnimationLeft.tsx';
import AnimationRight from './assets/Animation/AnimationRight/AnimationRight.tsx';
import CustomButton from './components/buttons/CustomButton.tsx';

function App() {
  const [image, setImage] = useState(
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bb336d7b-962c-4f01-9dce-e68f1c2ccc09/dbg8w8n-d28733ff-d84a-4226-995e-9b54de5800e5.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JiMzM2ZDdiLTk2MmMtNGYwMS05ZGNlLWU2OGYxYzJjY2MwOVwvZGJnOHc4bi1kMjg3MzNmZi1kODRhLTQyMjYtOTk1ZS05YjU0ZGU1ODAwZTUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.EzXdyrnC4LxOuiVp4OZSq4LiVUIZKdQmnNuzOxSPahQ',
  );

  const [notesArray, setNotesArray] = useState<NoteType[]>(notes);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.value);
    const audio = new Audio(`src/sounds/piano_${e.currentTarget.value}.mp3`);
    setImage(`src/assets/images/piano_${e.currentTarget.value}.webp`);
    audio.play();
    removeNoteFromArray(e);
  };

  const toggleShowContent = () => {
    setIsOpen(!isOpen);
  };

  const removeNoteFromArray = (e: React.MouseEvent<HTMLButtonElement>) => {
    const noteName = e.currentTarget.value;
    setNotesArray((prevNotesArray) => prevNotesArray.filter((note) => note.note !== noteName));
  };

  return (
    <>
      <div className="globalContainer">
        <AnimationLeft />
        <div>
          <div className="image-container">
            <img src={image} alt="Overwatch" width={300} height={300} className="image" />
          </div>
          <Octave notes={notes} clickHandler={handleClick} />
          <div className="custom-arrow-button">
            <CustomButton handleClick={toggleShowContent} text="&#8597;" />
          </div>
          {isOpen && (
            <div className="custom-buttons-container">
              <CustomButton value="Janis" handleClick={handleClick} text="Jānis" />
              <CustomButton value="Elvis" handleClick={handleClick} text="Elvis" />
            </div>
          )}
        </div>
        <AnimationRight />
      </div>
    </>
  );
}

export default App;
