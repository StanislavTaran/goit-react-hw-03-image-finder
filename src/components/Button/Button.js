import React from 'react';
import propTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ title, OnClickButton, IsDisadled }) => {
  const buttonClasses = IsDisadled ? styles.disabled : styles.Button;

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={buttonClasses}
        onClick={OnClickButton}
        disabled={IsDisadled}
      >
        {title}
      </button>
    </div>
  );
};

Button.defaultProps = {
  OnClickButton: null,
  IsDisadled: false,
};

Button.propTypes = {
  title: propTypes.string.isRequired,
  IsDisadled: propTypes.bool,
  OnClickButton: propTypes.func,
};

export default Button;
