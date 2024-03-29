import { NoteType } from '../NoteType/NoteType.ts';
import Note from './Note.tsx';
import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

type OctaveProps = {
  notes: NoteType[];
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
const Octave = ({ notes, clickHandler }: OctaveProps) => {
  return (
    <Wrapper>
      <div>
        {notes.map((element, key) => (
          <Note key={key} color={element.color} note={element.note} clickHandler={clickHandler} image={element.image} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Octave;
