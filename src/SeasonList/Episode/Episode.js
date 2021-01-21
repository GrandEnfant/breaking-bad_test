import React from 'react';
import './style.css';
const CharactersList = React.lazy(() => import('./Characters/CharactersList'));
import PropTypes from 'prop-types';


const EpisodeCard = ({episodeData,
  dispatch,
  dataCharacters,
  changeCharacterPhoto,
  changeStatePopup}) => {
  EpisodeCard.propTypes = {
    episodeData: PropTypes.object,
    dispatch: PropTypes.func,
    changeCharacterPhoto: PropTypes.object,
    dataCharacters: PropTypes.object,
    changeStatePopup: PropTypes.func,
  };
  const getSrcName = (clickedName) => {
    const result = dataCharacters.data.find(obj => (obj.name === clickedName));
    if (result !== undefined) {
      const srcImg = result.img;
      dispatch(changeCharacterPhoto(srcImg));
      changeStatePopup();
    }
  };

  return (
    <div className={'episode-card'}>
      <div className={'episode-number'}>
                Episode {episodeData.episode}
      </div>
      <div className={'episode-title'}>
        {episodeData.title}
      </div>
      <React.Suspense fallback={<div>Loading...</div>}>
        <CharactersList episodeData={episodeData} getSrcName={getSrcName}/>
      </React.Suspense>
    </div>
  );
};
export default EpisodeCard;
