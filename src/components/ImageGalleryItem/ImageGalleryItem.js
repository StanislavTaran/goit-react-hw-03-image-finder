import React from 'react';
import propTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ item }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={item.webformatURL}
        alt=""
        className={styles.ImageGalleryItemImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  item: propTypes.shape({
    webformatURL: propTypes.string.isRequired,
  }).isRequired,
};

export default ImageGalleryItem;
