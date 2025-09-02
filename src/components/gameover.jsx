import "../styles/gameover.css";
function GameOver({ makeRetry, time }) {
  return (
    <div className="gameover-dialog-container">
      <div className="gameover-dialog">
        <h3>Game Over</h3>
        <p>You clicked the same card twice !</p>
        <p>Your time: {time}</p>
        <button onClick={makeRetry}>Try again</button>
      </div>
    </div>
  );
}

export { GameOver };
