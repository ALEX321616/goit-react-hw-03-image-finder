import React, { Component } from 'react';
import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  render() {
    const { id, webformatURL, tags, largeImageURL, showModal } = this.props;

    return (
      <>
        <li className={s.ImageGalleryItem} id={id}>
          <img
            className={s.ImageGalleryItemImage}
            src={webformatURL}
            alt={tags}
            largeimageurl={largeImageURL}
            onClick={showModal}
          />
        </li>
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  showModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;