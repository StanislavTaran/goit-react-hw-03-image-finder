import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import styles from './Loader.module.css';

const myLoader = () => {
  return (
    <div className={styles.loader}>
      <Loader
        type="ThreeDots"
        color="#403a39"
        height={100}
        width={100}
        timeout={5000}
      />
    </div>
  );
};

export default myLoader;
