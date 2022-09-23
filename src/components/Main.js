import { usePokemon } from '../hooks/usePokemon.js';
import Header from './Header.js';
import './main.css';
import PokemonDisplay from './PokemonDisplay.js';
import Select from './Select.js';

export default function Main() {
  const { pokemon, type, setSelectType, loading } = usePokemon();
  if (loading)
    return <div>{loading && <div>Loading . . . </div>}</div>;
  return (
    <>
      <Header />
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