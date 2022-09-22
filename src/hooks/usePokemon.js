import { useState, useEffect } from 'react';
import { fetchPokemon } from '../services/pokemon.js';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);

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

  return { pokemon };
}