import './App.css';
import React from 'react';
import {useEffect, useState} from "react";
import {Popup} from "./Popup/Popup";
import {useSelector, useDispatch} from "react-redux";
import {changeCharacterPhoto, changeStatePopup, changeSerialData, changeCharactersData} from "./redux/actions";
const SeasonList = React.lazy(() => import("./SeasonList/SeasonList"));

function App({
                 // changeCharImg,
                 // changeStatePopup,
                 // changeSerialData,
                 // changeCharactersData,
             }) {

    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState();
    const characterPhoto = useSelector(state => state.characterPhoto);
    const popupIsOpen = useSelector(state => state.popupIsOpen);
    const dataSerial = useSelector(state => state.dataSerial);
    const dataCharacters = useSelector(state => state.dataCharacters);
    const dispatch = useDispatch();
    
    useEffect(() => {
        fetch("https://breakingbadapi.com/api/episodes?series=Breaking+Bad")
            .then(res => res.json())
            .then((result) => {
                dispatch(changeSerialData(result));
            }).then(() => {
            setIsLoaded(true);
        })
            .catch((error) => {
                setIsLoaded(false);
                setError(error);
            });
        fetch("https://breakingbadapi.com/api/characters")
            .then(res => res.json())
            .then((result) => {
                dispatch(changeCharactersData(result));
            }).then(() => {
            setIsLoaded(true);
        })
            .catch((error) => {
                setIsLoaded(false);
                setError(error);
            });
    }, [dataSerial.dataSerial]);

    const groupBySeason = (array) => {
        if (array.data !== undefined) {
            let mapCollection = new Map();
            let filteredSeason = array.data.map((el, idx) => array.data.filter(elem => +elem.season === +array.data[idx].season));
            let arrTempEpisode = filteredSeason.map(e => e.map(el => el));
            let arrTempSeason = filteredSeason.map(e => e[0].season).forEach((e, i) => mapCollection.set(e, arrTempEpisode[i]));
            const groupedEpisodes = [];
            for (let i = 1; i <= mapCollection.size; i++) {
                groupedEpisodes.push(mapCollection.get(String(i)))
            }
            return groupedEpisodes;
        }
    };
    const groupedEpisodes = groupBySeason(dataSerial);

    return (
        <div className="App">
            {/*{!!error && error}*/}
            {!isLoaded ? <div> loading... </div> :
                <React.Suspense fallback={<div>Loading...</div>}>
                <div>
                    {groupedEpisodes.map((item, id) =>
                             <SeasonList key={id} numberSeason={id} item={item} changeCharacterPhoto={() => dispatch(changeCharacterPhoto())} dataCharacters={dataCharacters}
                                    changeStatePopup={() => dispatch(changeStatePopup())} popupIsOpen={popupIsOpen}/>
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
                </Popup>
                : null
            }
        </div>

    );
}

    export default App;