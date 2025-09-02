import { useState, useEffect } from "react";
import "../styles/card.css";
function PokemonCard({ pokemonName, onClickTwice, increaseScore }) {
  const [pokemon, setPokemon] = useState(null);
  const [hasClicked, setHasClicked] = useState(false);
  useEffect(() => {
    let ignore = false;
    async function fetchPokemon() {
      try {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
        if (ignore) return;
        const data = await res.json();
        setPokemon({
          name: data.name,
          gif: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
        });
      } catch (err) {
        console.log("Error:" + err);
      }
    }
    fetchPokemon();
    return () => (ignore = true);
  }, [pokemonName]);
  const handleCardClick = () => {
    if (!hasClicked) {
      setHasClicked(true);
      increaseScore();
    } else {
      onClickTwice();
    }
  };

  if (!pokemon) return <span>Loading ...</span>;
  return (
    <div className="card" onClick={handleCardClick}>
      <img src={pokemon.gif} alt={pokemon.name} />
      <span>
        <b>{pokemon.name}</b>
      </span>
    </div>
  );
}

export { PokemonCard };
