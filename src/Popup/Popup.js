import React from 'react';
import './style.css';
import closeBtn from './close_img.png';
import PropTypes from 'prop-types';

Popup.propTypes = {
  closePopup: PropTypes.func,
  src: PropTypes.string,
};

export const Popup = ({closePopup, src}) => {
  return (
    <div className={'fixed_wrapper'}>
      <div className='popup'>
        <div className='popup_inner'>
          <button className={'close-btn'} onClick={closePopup}>
            <img alt={'Закрыть'} src={closeBtn}/></button>
          <img className={'img'} src={src}/>
        </div>
      </div>
    </div>
  );
};
