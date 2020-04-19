import React, { Component, createRef } from 'react';
import propTypes from 'prop-types';
import styles from './Modal.module.css';

export default class Modal extends Component {
  overlayRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.hadleKeypress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.hadleKeypress);
  }

  hadleKeypress = e => {
    const { onCloseModal } = this.props;
    if (e.code !== 'Escape') return;

    onCloseModal();
  };

  handleOverlayCLick = e => {
    const { onCloseModal } = this.props;
    if (e.target === this.overlayRef.current) {
      onCloseModal();
    }
  };

  render() {
    const { url } = this.props;

    return (
      <div
        className={styles.Overlay}
        ref={this.overlayRef}
        onClick={this.handleOverlayCLick}
      >
        <div className={styles.Modal}>
          <img src={url} alt="" className={styles.image} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  url: propTypes.string.isRequired,
  onCloseModal: propTypes.func.isRequired,
};
