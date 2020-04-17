import React, { Component } from 'react';
import fetchImagesAPI from './utils/images-api';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Searchbar from './components/Searchbar/Searchbar';
import Loader from './components/Loader/Loader';
import ErrorNotification from './components/ErrorNotification/ErrorNotification';
import Modal from './components/Modal/Modal';

export default class App extends Component {
  state = {
    images: [],
    error: null,
    isLoading: false,
    IsModalOpen: false,
    imageForModal: null,
  };

  componentDidMount() {
    this.fetchImages();
  }

  fetchImages = value => {
    this.setState({
      isLoading: true,
    });

    fetchImagesAPI(value)
      .then(({ data }) => this.setState({ images: data.hits }))
      .catch(error => this.setState({ error }))
      .finally(this.setState({ isLoading: false }));

    this.scrollPage();
  };

  onSubmit = value => {
    this.fetchImages(value);
  };

  closeModal = () => {
    this.setState({
      IsModalOpen: false,
    });
  };

  getUrlForModal = e => {
    const url = e.target.dataset.src;
    this.setState({
      imageForModal: url,
      IsModalOpen: true,
    });
  };

  scrollPage = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  render() {
    const { images, isLoading, error, IsModalOpen, imageForModal } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        {error && <ErrorNotification message={error.message} />}
        {isLoading && <Loader />}
        {IsModalOpen && (
          <Modal url={imageForModal} onCloseModal={this.closeModal} />
        )}
        {images.length > 0 && (
          <ImageGallery items={images} onClickImage={this.getUrlForModal} />
        )}
      </>
    );
  }
}
