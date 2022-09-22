import { usePokemon } from '../hooks/usePokemon.js';
import './main.css';
import PokemonDisplay from './PokemonDisplay.js';

export default function Main() {
  const { pokemon } = usePokemon();

  return (
    <div>
      {pokemon.map((poke) => (
        <PokemonDisplay {...poke} key={poke.id} />
      ))}
    </div>
  );
}