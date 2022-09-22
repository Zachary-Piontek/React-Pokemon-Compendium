
export async function fetchPokemon() {
  const resp = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex`);
  const pokemonData = await resp.json();
  return pokemonData.results;
}