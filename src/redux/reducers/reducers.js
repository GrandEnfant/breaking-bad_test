import {Types} from '../types';

const imgInitialState = {characterPhoto: ''};
const statusPopupInitial = {popupIsOpen: false};
const DataSerialInitial = [];
const DataCharactersInitial = [];

export const characterPhotoReducer = (state = imgInitialState, action) => {
  switch (action.type) {
    case Types.CHANGE_CHARACTER_PHOTO: {
      const copiedState = state;
      copiedState.characterPhoto = action.payload;
      return {...copiedState};
    }
    default: return state;
  }
};

export const statePopupReducer = (state = statusPopupInitial, action) => {
  switch (action.type) {
    case Types.CHANGE_STATE_POPUP: {
      const copiedState = state;
      copiedState.popupIsOpen = !action.payload;
      return {...copiedState};
    }
    default: return state;
  }
};


export const dataSerialReducer = (state = DataSerialInitial, action) => {
  switch (action.type) {
    case Types.CHANGE_SERIAL_DATA: {
      let copiedState = state;
      copiedState = action.payload;
      return {...copiedState};
    }
    default: return state;
  }
};

export const dataCharactersReducer = (state = DataCharactersInitial,
    action) => {
  switch (action.type) {
    case Types.CHANGE_CHARACTERS_DATA: {
      let copiedState = state;
      copiedState = action.payload;
      return {...copiedState};
    }
    default: return state;
  }
};

export const isLoadedReducer = (state = false, action) => {
  switch (action.type) {
    case Types.CHANGE_IS_LOADER: {
      let copiedState = state;
      copiedState = action.isLoad;
      return {...copiedState};
    }
    default: return state;
  }
};


export const errorReducer = (state = false, action) => {
  switch (action.type) {
    case Types.CHANGE_ERROR: {
      let copiedState = state;
      copiedState = action.error;
      return {...copiedState};
    }
    default: return state;
  }
};
