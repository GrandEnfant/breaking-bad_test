
import {combineReducers} from 'redux';
import {characterPhotoReducer, dataCharactersReducer, statePopupReducer, dataSerialReducer, isLoadedReducer} from "./reducers";

export const rootReducer = combineReducers({
    characterPhoto: characterPhotoReducer,
    popupIsOpen: statePopupReducer,
    dataSerial: dataSerialReducer,
    dataCharacters: dataCharactersReducer,
    isLoad: isLoadedReducer,
});