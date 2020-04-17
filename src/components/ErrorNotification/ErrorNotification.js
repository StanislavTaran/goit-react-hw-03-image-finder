import React from 'react';
import propTypes from 'prop-types';

const ErrorNotification = ({ message }) => (
  // eslint-disable-next-line react/jsx-one-expression-per-line
  <h1>Something went wrong : {message}, please try again later.</h1>
);

ErrorNotification.propTypes = {
  message: propTypes.string.isRequired,
};

export default ErrorNotification;
