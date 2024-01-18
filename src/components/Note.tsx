import styled from 'styled-components';
import React from 'react';

const Black = styled.button`
  width: 40px;
  height: 130px;
  background: black;
  position: absolute;
  margin: 1px 1px 1px -20px;

  :active {
    background: #333;
  }
`;

const White = styled.button`
  width: 60px;
  height: 200px;
  background: white;
  border: 1px solid black;
  box-shadow: 2px 5px;
  margin: 1px;

  :active {
    background: #eee;
  }
`;

type NoteProps = {
  color: string;
  note: string;
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
const Note = ({ color, note, clickHandler }: NoteProps) => {
  return color === 'white' ? (
    <White value={note} onClick={clickHandler} />
  ) : (
    <Black value={note} onClick={clickHandler} />
  );
};

export default Note;
