import './App.css';
import React from 'react';
import {useEffect} from 'react';
import {Popup} from './Popup/Popup';
import {useSelector, useDispatch} from 'react-redux';
import {changeCharacterPhoto,
  changeStatePopup,
  loadData} from './redux/actions';
const SeasonList = React.lazy(() => import('./SeasonList/SeasonList'));


function App() {
  const characterPhoto = useSelector((state) => state.characterPhoto);
  const popupIsOpen = useSelector((state) => state.popupIsOpen);
  const dataSerial = useSelector((state) => state.dataSerial);
  const dataCharacters = useSelector((state) => state.dataCharacters);
  const isLoad = useSelector((state) => state.isLoad);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();
  const URLSerial = 'https://breakingbadapi.com/api/episodes?series=Breaking+Bad';
  const URLCharacters = 'https://breakingbadapi.com/api/characters';

  useEffect(() => {
    dispatch(loadData({typeData: 'serial', url: URLSerial}));
    dispatch(loadData({typeData: 'characters', url: URLCharacters}));
  },
  [URLSerial]);
  const groupBySeason = (array) => {
    if (array.data !== undefined) {
      const mapCollection = new Map();
      const filteredSeason = array.data.map((el, idx) =>
        array.data.filter((elem) => +elem.season === +array.data[idx].season));
      const arrTempEpisode = filteredSeason.map((e) => e.map((el) => el));
      filteredSeason.map((e) => e[0].season).forEach((e, i) =>
        mapCollection.set(e, arrTempEpisode[i]));
      const groupedEpisodes = [];
      for (let i = 1; i <= mapCollection.size; i++) {
        groupedEpisodes.push(mapCollection.get(String(i)));
      }
      return groupedEpisodes;
    }
  };
  const groupedEpisodes = groupBySeason(dataSerial);

  return (
    <div className="App">
      {!!error && error}
      {!isLoad ? <div> loading... </div> :
                <React.Suspense fallback={<div>Loading...</div>}>
                  <div>
                    {groupedEpisodes.map((item, id) =>
                      <SeasonList key={id}
                        numberSeason={id}
                        item={item}
                        changeCharacterPhoto={changeCharacterPhoto}
                        dispatch={dispatch}
                        dataCharacters={dataCharacters}
                        changeStatePopup={() => dispatch(changeStatePopup())}
                        popupIsOpen={popupIsOpen}/>,
                    )}
                  </div>
                </React.Suspense>
      }
      {popupIsOpen.popupIsOpen ?
            <Popup
              text='Закрыть'
              src={characterPhoto.characterPhoto}
              closePopup={() => dispatch(changeStatePopup(popupIsOpen))}
            >
            </Popup> :
            null
      }
    </div>
  );
}
export default App;
