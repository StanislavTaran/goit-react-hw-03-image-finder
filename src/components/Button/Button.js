import React from 'react';
import propTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ title, OnloadMore, disadled }) => {
  const buttonClasses = disadled ? styles.disabled : styles.Button;

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={buttonClasses}
        onClick={OnloadMore}
        disabled={disadled}
      >
        {title}
      </button>
    </div>
  );
};

Button.defaultProps = {
  OnloadMore: null,
};

Button.propTypes = {
  title: propTypes.string.isRequired,
  disadled: propTypes.bool.isRequired,
  OnloadMore: propTypes.func,
};

export default Button;
