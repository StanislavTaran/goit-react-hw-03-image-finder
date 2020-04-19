import React from 'react';
import propTypes from 'prop-types';
import styles from './Notification.module.css';

const Notification = ({ message }) => (
  <div className={styles.notification}>
    {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
    <h1>Oops : {message}...</h1>
  </div>
);

Notification.propTypes = {
  message: propTypes.string.isRequired,
};

export default Notification;
