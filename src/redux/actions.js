import {Types} from "./types";




export function changeCharacterPhoto(charImg) {
    return {
        type: Types.CHANGE_CHARACTER_PHOTO,
        payload: charImg
        }
    }

export function changeStatePopup(isOpen) {
    return {
        type: Types.CHANGE_STATE_POPUP,
        payload: isOpen
    }
}


export function changeSerialData(dataSerial) {
    return {
        type: Types.CHANGE_SERIAL_DATA,
        payload: {data: dataSerial}
    }
}


export function changeCharactersData(dataCharacters) {
    return {
        type: Types.CHANGE_CHARACTERS_DATA,
        payload: {data: dataCharacters}
    }
}

export function setIsLoaded(isLoad) {
    return {
        type: Types.CHANGE_IS_LOADER,
        isLoad: isLoad
    }
}

export const loadData = ({typeData, url}) => {
    return (dispatch) => {
        fetch(url)
        .then(res => res.json())
        .then((result) => {
            if (typeData === 'serial') {
                dispatch(changeSerialData(result));
                dispatch(setIsLoaded(true));
            } else if (typeData === 'characters') {
                dispatch(changeCharactersData(result));
            }
        })
        .catch((error) => {
            setIsLoaded(false);
        });
}};
