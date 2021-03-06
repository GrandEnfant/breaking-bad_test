import React from 'react';
import './style.css';
import closeBtn from './close_img.png';
import PropTypes from 'prop-types';

export const Popup = ({closePopup, src}) => {
  Popup.propTypes = {
    closePopup: PropTypes.func,
    src: PropTypes.string,
  };

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

