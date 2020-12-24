import {Types} from "../types";

const imgInitialState = {characterPhoto: ''};
const statusPopupInitial = {popupIsOpen: false};
const DataSerialInitial = {dataSerial: []};
const DataCharactersInitial = {dataCharacters: []};

export const characterPhotoReducer = (state = imgInitialState, action) => {
    switch (action.type) {
        case Types.CHANGE_CHARACTER_PHOTO: {
            let copiedState = state;
            copiedState.characterPhoto = action.payload;
            return {...copiedState};
        }
        default: return state;
    }
};

export const statePopupReducer = (state = statusPopupInitial, action) => {
    switch (action.type) {
        case Types.CHANGE_STATE_POPUP: {
            let copiedState = state;
            copiedState.popupIsOpen = !action.payload;
            return {...copiedState}
        }
        default: return state;
    }
};


export const dataSerialReducer = (state = DataSerialInitial, action) => {
    switch (action.type) {
        case Types.CHANGE_SERIAL_DATA: {
            let copiedState = state;
            copiedState = action.payload;
            return {...copiedState}
        }
        default: return state;
    }
};

export const dataCharactersReducer = (state = DataCharactersInitial, action) => {
    console.log('ttt')
    switch (action.type) {
        case Types.CHANGE_CHARACTERS_DATA: {
            console.log('333')
            let copiedState = state;
            copiedState = action.payload;
            return {...copiedState}
        }
        default: return state;
    }
};
export const isLoadedReducer = (state = false, action) => {
    switch (action.type) {
        case Types.CHANGE_IS_LOADER: {
            let copiedState = state;
            copiedState = action.isLoad;
            console.log(copiedState)
            return {...copiedState}
        }
        default: return state;
    }
};