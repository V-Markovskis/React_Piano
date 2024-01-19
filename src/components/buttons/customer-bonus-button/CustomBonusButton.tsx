import React from 'react';
import bonusStyle from './CustomBonusButton.module.css';

type customBonusButtonProps = {
  toggleYoutube: (e: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
};

const CustomBonusButton = ({ toggleYoutube, text }: customBonusButtonProps) => {
  return (
    <div>
      <button className={bonusStyle.button} onClick={toggleYoutube}>
        {/*Bonus ↕*/}
        {text}
      </button>
    </div>
  );
};

export default CustomBonusButton;
