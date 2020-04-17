import React from 'react';
import propTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ items, onClickImage }) => {
  return (
    items.length > 0 && (
      <ul className={styles.ImageGallery}>
        {items.map(item => {
          return (
            <li key={item.id}>
              <ImageGalleryItem item={item} onClickImage={onClickImage} />
            </li>
          );
        })}
      </ul>
    )
  );
};

ImageGallery.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
    }),
  ).isRequired,
  onClickImage: propTypes.func.isRequired,
};

export default ImageGallery;
