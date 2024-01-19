import React from 'react';
import bonusStyle from './CustomBonusButton.module.css';

type customBonusButtonProps = {
  toggleYoutube: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const CustomBonusButton = ({ toggleYoutube }: customBonusButtonProps) => {
  return (
    <div>
      <button className={bonusStyle.button} onClick={toggleYoutube}>
        Bonus ↕
      </button>
    </div>
  );
};

export default CustomBonusButton;
