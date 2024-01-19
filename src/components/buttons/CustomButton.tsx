import style from './CustomButton.module.css';
import React from 'react';

type customButtonProps = {
  value: string;
  text: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const CustomButton = ({ value, handleClick, text }: customButtonProps) => {
  return (
    <div>
      <button className={style.button} value={value} onClick={handleClick}>
        {text}
      </button>
    </div>
  );
};

export default CustomButton;
