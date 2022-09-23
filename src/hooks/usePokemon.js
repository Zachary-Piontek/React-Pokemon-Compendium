import { useState, useEffect } from 'react';
import { fetchPokemon } from '../services/pokemon.js';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [type, setType] = useState('all');

  useEffect(() => {
    const loadPokemon = async () => {
      try {
        const pokemonData = await fetchPokemon();
        setPokemon(pokemonData);
      } catch (e) {
        console.error(e);
      }
    };
    loadPokemon();
  }, []);

  
  const filterPokemonTypes = () => {
    if (type === 'all') return pokemon;
    return pokemon.filter((types) => types.type === type);
  };

  return { pokemon, filterPokemonTypes, type, setType };
}