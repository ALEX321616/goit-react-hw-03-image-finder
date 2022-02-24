import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({
  id,
  webformatURL,
  tags,
  largeImageURL,
  showModal,
}) => {
  return (
    <li className={s.ImageGalleryItem} id={id}>
      <img
        className={s.ImageGalleryItemImage}
        src={webformatURL}
        alt={tags}
        largeimageurl={largeImageURL}
        onClick={showModal}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  showModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
