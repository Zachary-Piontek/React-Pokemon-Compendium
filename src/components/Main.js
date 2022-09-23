import { usePokemon } from '../hooks/usePokemon.js';
import './main.css';
import PokemonDisplay from './PokemonDisplay.js';

export default function Main() {
  const { filterPokemonTypes, pokemon, setType, type } = usePokemon();

  return (
    <>
      <div className='top-display'>
        <select value={type} onChange={(event) => {
          setType(event.target.value);
        }} >
          <option value='all'>All Types</option>
          <option value='bug'>Bug</option>
          <option value='dark'>Dark</option>
          <option value='dragon'>Dragon</option>
          <option value='electric'>Electric</option>
        </select>
      </div><div className='main-display'>
        {pokemon.map((poke) => (
          <PokemonDisplay {...poke} key={poke.id} />
        ))}
      </div></>
  );
}