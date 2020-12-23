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

export function fetchURL(url) {
    return (dispatch) => {
        console.log('tiut');
        fetch(url)
        .then(res => res.json())
        .then((result) => {
            console.log('dispatch');
            dispatch(changeCharactersData(result));

        })
        .then(() =>  setIsLoaded(true))

        // .catch((error) => {
        //     setIsLoaded(false);
        //     setError(error);
        // });
}}
