import React from 'react';
import './pokemondisplay.css';

export default function PokemonDisplay({ pokemon, id, type_1 }) {
  return (
    <div>
      <h1>{pokemon}</h1>
      <h2>{id}</h2>
      <h3>{type_1}</h3>
    </div>
  );
}