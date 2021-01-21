import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
const EpisodeCard = React.lazy(() => import('./Episode/Episode'));


const SeasonList = ({item,
  numberSeason,
  dispatch,
  changeCharacterPhoto,
  dataCharacters,
  changeStatePopup,
  popupIsOpen}) => {
  SeasonList.propTypes = {
    item: PropTypes.object,
    numberSeason: PropTypes.number,
    dispatch: PropTypes.func,
    changeCharacterPhoto: PropTypes.object,
    dataCharacters: PropTypes.object,
    changeStatePopup: PropTypes.func,
    popupIsOpen: PropTypes.func,
  };

  return (
    <React.Fragment>
      <div className={'title'}> Season {item[numberSeason].season} </div>
      <div className={'season'}>
        {item.map((elem, idx) =>
          <React.Suspense key={idx} fallback={<div>Loading...</div>}>
            <EpisodeCard changeCharacterPhoto={changeCharacterPhoto}
              episodeData={elem}
              dispatch={dispatch}
              dataCharacters={dataCharacters}
              changeStatePopup={changeStatePopup}
              popupIsOpen={popupIsOpen.popupIsOpen}
            />
          </React.Suspense>)}
      </div>
    </React.Fragment>
  );
};

export default SeasonList;


