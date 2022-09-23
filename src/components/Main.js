import { usePokemon } from '../hooks/usePokemon.js';
import './main.css';
import PokemonDisplay from './PokemonDisplay.js';
import Select from './Select.js';

export default function Main() {
  const { pokemon, type, setSelectType } = usePokemon();

  return (
    <>
      <div className='top-display'>
        <Select options={type} changeEvent={setSelectType} />
      </div>
      <div className='main-display'>
        {pokemon.map((poke) => (
          <PokemonDisplay {...poke} key={poke.id} />
        ))}
      </div>
    </>
  );
}