import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const CharactersList = ({episodeData, getSrcName}) => {
  CharactersList.propTypes = {
    episodeData: PropTypes.object,
    getSrcName: PropTypes.func,
  };
  return (
    <div className={'episodeCharacters'}>
      <ul>
        {episodeData.characters.map((item, id) =>
          <li key={id}><a onClick={() =>
            getSrcName(item)}>{item}</a></li>)}</ul>
    </div>
  );
};

export default CharactersList;
