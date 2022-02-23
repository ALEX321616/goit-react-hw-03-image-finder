import React, { Component } from 'react';
import s from './Modal.module.css';
import PropTypes from 'prop-types';

class Modal extends Component {
  render() {
    const { largeImageURL, alt, showModal } = this.props;
    console.log(this.props.largeImageURL);
    return (
      <div className={s.overlay}>
        <div className={s.modal}>
          <img src={largeImageURL} alt={alt} onClick={showModal} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  alt: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  showModal: PropTypes.func.isRequired,
};

export default Modal;
