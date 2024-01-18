import style from './AnimationRight.module.css';

const AnimationRight = () => {
  const doodleStyles = `
    @grid: 8 / 30vh 49vw;

    background: cyan;
    scale: 0;
    opacity: 0;
    animation: m 4s linear infinite;
    
    animation-delay: calc(
      -1s/@I * @i * @sin(@i)
    );

    @keyframes m {
      0%, 50%, 90% { scale: 1; opacity: 1 }
      25%, 75%, 100% { scale: 0; opacity: 0 }
    }
  `;

  return (
    <div className={style.rightAnimationContainer}>
      <css-doodle>
        <style>{doodleStyles}</style>
      </css-doodle>
    </div>
  );
};

export default AnimationRight;
