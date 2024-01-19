import './App.css';
import Octave from './components/Octave.tsx';
import { notes, NoteType } from './NoteType/NoteType.ts';
import React, { useRef, useState } from 'react';
import AnimationLeft from './assets/Animation/AnimationLeft/AnimationLeft.tsx';
import AnimationRight from './assets/Animation/AnimationRight/AnimationRight.tsx';
import CustomButton from './components/buttons/custom-button/CustomButton.tsx';
import CustomBonusButton from './components/buttons/customer-bonus-button/CustomBonusButton.tsx';

function App() {
  const [image, setImage] = useState(
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bb336d7b-962c-4f01-9dce-e68f1c2ccc09/dbg8w8n-d28733ff-d84a-4226-995e-9b54de5800e5.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JiMzM2ZDdiLTk2MmMtNGYwMS05ZGNlLWU2OGYxYzJjY2MwOVwvZGJnOHc4bi1kMjg3MzNmZi1kODRhLTQyMjYtOTk1ZS05YjU0ZGU1ODAwZTUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.EzXdyrnC4LxOuiVp4OZSq4LiVUIZKdQmnNuzOxSPahQ',
  );

  const [notesArray, setNotesArray] = useState<NoteType[]>(notes);
  const [isOpen, setIsOpen] = useState(false);
  // const [audioStatus, changeAudioStatus] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const playPauseHandler = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.02;
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.value === 'Reset') {
      populateNotesArray();
    }
    console.log(e.currentTarget.value);
    const audio = new Audio(`src/sounds/piano_${e.currentTarget.value}.mp3`);
    setImage(`src/assets/images/piano_${e.currentTarget.value}.webp`);
    audio.play();
    removeNoteFromArray(e);
  };

  const populateNotesArray = () => {
    setNotesArray(notes);
  };

  const toggleYoutube = () => {
    setIsOpen(!isOpen);
  };

  const removeNoteFromArray = (e: React.MouseEvent<HTMLButtonElement>) => {
    const noteName = e.currentTarget.value;
    setNotesArray((prevNotesArray) => prevNotesArray.filter((note) => note.note !== noteName));
  };

  const buttonData = [
    { value: 'Janis', text: 'Jānis' },
    { value: 'Elvis', text: 'Elvis' },
    { value: 'Reset', text: 'Reset' },
  ];

  return (
    <>
      <div className="globalContainer">
        <AnimationLeft />
        <div>
          <div className="background-music-container">
            <CustomBonusButton toggleYoutube={toggleYoutube} text={'Bonus ↕'} />
            <CustomBonusButton toggleYoutube={playPauseHandler} text={'Music'} />
          </div>
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <audio ref={audioRef}>
            <source src="src/sounds/main_theme.mp3" type="audio/mp3" />
          </audio>
          <br />
          {isOpen && (
            <div className="youtube-container">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/xoFzyA4xaNo?si=KGMVpGs_ZE5AheFI"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>{' '}
            </div>
          )}
          <div className="image-container">
            <img src={image} alt="Overwatch" width={300} height={300} className="image" />
          </div>
          <Octave notes={notes} clickHandler={handleClick} />
          <br />
          <div className="paragraph-container">
            <h2 className="paragraph">Press all to find ME</h2>
          </div>
          {notesArray.length === 0 && (
            <div className="custom-buttons-container">
              {buttonData.map((button) => (
                <CustomButton key={button.value} value={button.value} handleClick={handleClick} text={button.text} />
              ))}
            </div>
          )}
        </div>
        <AnimationRight />
      </div>
    </>
  );
}

export default App;
