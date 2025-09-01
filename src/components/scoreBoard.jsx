import "../styles/scoreBoard.css";
import pokemonLogo from "../assets/pokemonLogo.png";

function ScoreBoard({ score, bestScore }) {
  return (
    <div className="scoreboard">
      <h1>
        <img src={pokemonLogo} alt="pokemon logo" />
        Memory Game
      </h1>
      <div>
        <h2>Score : {score}</h2>
        <h2>BestScore : {bestScore}</h2>
      </div>
    </div>
  );
}

export { ScoreBoard };
