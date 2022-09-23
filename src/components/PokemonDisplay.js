import React from 'react';
import './pokemondisplay.css';

export default function PokemonDisplay({ pokemon, type_1, type_2, attack, defense, url_image }) {
  return (
    <div className='pokemon-display'>
      <h1>{pokemon}</h1>
      <img src={url_image} />
      <h3>Type: {type_1}{type_2}</h3>
      <h3>Subtype: {type_2}</h3>
      <h3>Attack: {attack}</h3>
      <h3>Defense: {defense}</h3>
    </div>
  );
}