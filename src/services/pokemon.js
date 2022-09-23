
export async function fetchPokemon(selectType) {
  const params = new URLSearchParams();
  if (selectType !== 'all') {
    params.set('type', selectType);
  }
  const resp = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}`);
  const pokemonData = await resp.json();
  return pokemonData.results;
}

export async function fetchTypes() {
  const resp = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex/types');
  const pokemonTypeData = await resp.json();
  return pokemonTypeData;
}