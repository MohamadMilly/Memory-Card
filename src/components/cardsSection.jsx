import { PokemonCard } from "./card.jsx";
import "../styles/cardsSection.css";
function CardsSection({ handleCardClick, handleTwiceClick, characters }) {
  return (
    <div className="cards-container">
      {characters.map((characterName) => {
        return (
          <PokemonCard
            increaseScore={handleCardClick}
            onClickTwice={handleTwiceClick}
            pokemonName={characterName}
            key={characterName}
          />
        );
      })}
    </div>
  );
}

export { CardsSection };
