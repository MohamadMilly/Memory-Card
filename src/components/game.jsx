import { useState, useEffect } from "react";
import { CardsSection } from "./cardsSection.jsx";
import { pokemonCharacters } from "../constants/data.js";
import { randomiseArray } from "../constants/utility.jsx";
import { ScoreBoard } from "./scoreBoard.jsx";
import { GameOver } from "./gameover.jsx";
import "../styles/game.css";
import { WinDialog } from "./win.jsx";
function Game() {
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [bestScore, setBestScore] = useState(0);
  const [currentCharacters, setCurrentCharacters] = useState(pokemonCharacters);
  const [gameId, setGameId] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isGameOver) {
        setCount((count) => count + 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [isGameOver]);
  const handleTwiceClick = () => {
    setIsGameOver(true);
    setBestScore((prev) => (prev > score ? prev : score));
  };
  const handleCardClick = () => {
    if (isGameOver) {
      return;
    }
    setScore(score + 1);
    setCurrentCharacters(randomiseArray(currentCharacters));
  };
  const handleRetryGame = () => {
    setGameId(gameId + 1);
    setIsGameOver(false);
    setScore(0);
  };
  return (
    <div className="game-container">
      <ScoreBoard score={score} bestScore={bestScore} />
      <CardsSection
        handleCardClick={handleCardClick}
        handleTwiceClick={handleTwiceClick}
        characters={currentCharacters}
        key={`cardsSection${gameId}`}
      />
      {isGameOver && <GameOver makeRetry={handleRetryGame} time={count} />}
      {!isGameOver && score === currentCharacters.length && (
        <WinDialog
          triggerNewGame={() => {
            handleRetryGame();
            setBestScore(0);
          }}
          time={count}
        />
      )}
    </div>
  );
}

export default Game;
