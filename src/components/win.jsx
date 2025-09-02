import "../styles/win.css";
function WinDialog({ triggerNewGame, time }) {
  return (
    <div className="win-dialog-container">
      <div className="win-dialog">
        <h3>You Won !</h3>
        <p>Your time : {time}</p>
        <button onClick={triggerNewGame}>New game</button>
      </div>
    </div>
  );
}

export { WinDialog };
