import React from 'react';

const Character = ({ character }) => {
  return (
    <div className='character-card'>
      <img src={character.image} alt='' />
      <h4>{character.name}</h4>
      <h5> {character.species} </h5>
    </div>
  );
};

export default Character;

