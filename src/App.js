import React, { Component } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import fetchImagesAPI from './utils/images-api';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Searchbar from './components/Searchbar/Searchbar';
// import Loader from './components/Loader/Loader';
import ErrorNotification from './components/ErrorNotification/ErrorNotification';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';

export default class App extends Component {
  state = {
    images: [],
    error: null,
    isLoading: false,
    IsModalOpen: false,
    imageForModal: null,
    currentQuery: '',
    currentPage: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const { currentPage, currentQuery } = this.state;

    if (
      prevState.currentPage !== currentPage ||
      prevState.currentQuery !== currentQuery
    ) {
      this.fetchImages(currentQuery, currentPage);
    }
  }

  fetchImages = (value, page) => {
    this.setState({
      isLoading: true,
      currentQuery: value,
    });

    fetchImagesAPI(value, page)
      .then(({ data }) => {
        const { currentPage } = this.state;

        this.setState(state => {
          return { images: state.images.concat(data.hits) };
        });

        if (currentPage > 1) {
          this.scrollPage();
        }
      })
      .catch(error => this.setState({ error }))
      .finally(this.setState({ isLoading: false }));
  };

  onSubmit = value => {
    this.updateCurrentQueryParams(value);
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

  OnloadMore = () => {
    this.setState(state => {
      return { currentPage: state.currentPage + 1 };
    });
  };

  updateCurrentQueryParams = value => {
    this.setState({
      images: [],
      currentQuery: value,
      currentPage: 1,
    });
  };

  render() {
    const { images, isLoading, error, IsModalOpen, imageForModal } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        {error && <ErrorNotification message={error.message} />}
        {isLoading && (
          <Loader type="ThreeDots" color="#00BFFF" height={120} width={120} />
        )}
        {IsModalOpen && (
          <Modal url={imageForModal} onCloseModal={this.closeModal} />
        )}
        {!isLoading && images.length > 0 && (
          <>
            <ImageGallery items={images} onClickImage={this.getUrlForModal} />
            <Button title="Load More" OnloadMore={this.OnloadMore} />
          </>
        )}
      </>
    );
  }
}
