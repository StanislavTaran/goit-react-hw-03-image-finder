import React from 'react';
import propTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ item, onClickImage }) => {
  return (
    <img
      onClick={onClickImage}
      src={item.webformatURL}
      data-src={item.largeImageURL}
      alt=""
      className={styles.ImageGalleryItemImage}
    />
  );
};

ImageGalleryItem.propTypes = {
  item: propTypes.shape({
    webformatURL: propTypes.string.isRequired,
    largeImageURL: propTypes.string.isRequired,
  }).isRequired,
  onClickImage: propTypes.func.isRequired,
};

export default ImageGalleryItem;
