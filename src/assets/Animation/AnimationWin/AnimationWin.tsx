const AnimationWin = () => {
  const doodleStyles = `
  :doodle {
    @grid: 10 / 100%; 
  }

  background: @pick(
     #F38181, #FCE38A, #EAFFD0, #95E1D3
  );

  transform: translate(
    @rand(-50vw, 50vw),
    @rand(-50vh, 50vh)
  );

  @size: 5vmin;
  @shape: circle;
  @place-cell: 50% 50%;

  animation-name: explosion;
  animation-iteration-count: infinite;
  animation-direction: reverse;
  animation-duration: calc(@rand(2s, 5s, .1));
  animation-delay: calc(@rand(-5s, -1s, .1));
  animation-timing-function: 
    cubic-bezier(.84, .02, 1, 1);

  @keyframes explosion {
    0% { opacity: 0; }
    70% { opacity: 1; }
    100% { transform: translate(0, 0); }
  }
  `;

  return (
    <div>
      <css-doodle>
        <style>{doodleStyles}</style>
      </css-doodle>
    </div>
  );
};

export default AnimationWin;
