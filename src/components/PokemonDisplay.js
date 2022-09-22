import React from 'react';
import './pokemondisplay.css';

export default function PokemonDisplay({ pokemon, id }) {
  return (
    <div>
      <h1>{pokemon}</h1>
      <h2>{id}</h2>
    </div>
  );
}