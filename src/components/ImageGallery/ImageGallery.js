import React from 'react';
import propTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ items }) => {
  return (
    items.length > 0 && (
      <ul className={styles.ImageGallery}>
        {items.map(item => {
          return <ImageGalleryItem key={item.id} item={item} />;
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
};

export default ImageGallery;
