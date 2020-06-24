import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCharacters } from '../store/actions/index';
import Character from './Character';

const Characters = ({ fetchCharacters, characters, isFetching }) => {
  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  return (
    <div>
      {isFetching && <h4>Getting the data one second .....</h4>}
      <div className='character-container'>
        {characters.map(character => {
          return <Character key={character.id} character={character} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.reducer.isFetching,
    characters: state.reducer.characters,
  };
};

export default connect(mapStateToProps, { fetchCharacters })(Characters);
