import { useState, useEffect } from 'react';
import { fetchPokemon, fetchTypes } from '../services/pokemon.js';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [type, setType] = useState([]);
  const [selectType, setSelectType] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPokemon = async () => {
      try {
        const pokemonData = await fetchPokemon(selectType);
        setPokemon(pokemonData);
        setLoading(false);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    };
    loadPokemon();
  }, [selectType]);

  useEffect(() => {
    const filterPokemonTypes = async () => {
      try {
        const pokemonType = await fetchTypes();
        setType(pokemonType.map((type) => type.type));
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    };
    filterPokemonTypes();
  }, []);

  return { pokemon, type, setSelectType, loading };
}