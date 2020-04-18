import React from 'react';
import propTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ title, OnloadMore }) => (
  <div className={styles.container}>
    <button type="button" className={styles.Button} onClick={OnloadMore}>
      {title}
    </button>
  </div>
);

Button.propTypes = {
  title: propTypes.string.isRequired,
  OnloadMore: propTypes.func.isRequired,
};

export default Button;
