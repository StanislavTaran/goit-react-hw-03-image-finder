import React, { Component } from 'react';
import propTypes from 'prop-types';
import styles from './Modal.module.css';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.hadleKeypress);
  }

  hadleKeypress = e => {
    const { code } = e.target;
    const { onCloseModal } = this.props;
    if (code !== 'Escape') return;

    onCloseModal();
  };

  render() {
    const { url, title } = this.props;

    return () => (
      <div className={styles.Overlay}>
        <div className={styles.Modal}>
          <img src={url} alt={title} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  url: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  onCloseModal: propTypes.func.isRequired,
};
