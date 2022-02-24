import React from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const ImageGallery = ({ imagesData, showModal }) => {
  return (
    <ul className={s.ImageGallery}>
      {imagesData.map(({ id, pageURL, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={nanoid()}
          id={id}
          pageURL={pageURL}
          webformatURL={webformatURL}
          tags={tags}
          largeImageURL={largeImageURL}
          showModal={showModal}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  imagesData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      pageURL: PropTypes.string,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
  showModal: PropTypes.func.isRequired,
};

export default ImageGallery;
