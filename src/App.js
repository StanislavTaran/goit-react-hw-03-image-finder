import React, { Component } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import fetchImagesAPI from './utils/images-api';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Searchbar from './components/Searchbar/Searchbar';
import Notification from './components/Notification/Notification';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';
import Loader from './components/Loader/Loader';

export default class App extends Component {
  state = {
    images: [],
    error: null,
    isLoading: false,
    largeImage: null,
    currentQuery: '',
    currentPage: 1,
    isLastPage: false,
  };

  componentDidMount() {
    this.setState({
      currentQuery: 'skywalker',
    });
  }

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
    });

    fetchImagesAPI(value, page)
      .then(hits => {
        const { currentPage } = this.state;

        this.setState(state => {
          return {
            isLastPage: (hits.length > 0 && hits.length < 12) || false,
            images: state.images.concat(hits),
          };
        });

        if (currentPage > 1) {
          this.scrollPage();
        }
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  onSubmit = value => {
    this.updateCurrentQueryParams(value);
  };

  closeModal = () => {
    this.setState({
      largeImage: null,
    });
  };

  getUrlForModal = e => {
    const url = e.target.dataset.src;
    this.setState({
      largeImage: url,
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
    const { images, isLoading, error, largeImage, isLastPage } = this.state;
    const isShouldRenderLoadMoreButton =
      !isLastPage && !images.length < 1 && !error && !isLoading;

    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        {error && <Notification message={error.message} />}

        {largeImage && (
          <Modal url={largeImage} onCloseModal={this.closeModal} />
        )}

        {images.length > 0 && (
          <ImageGallery items={images} onClickImage={this.getUrlForModal} />
        )}

        {isShouldRenderLoadMoreButton && (
          <Button title="Load More" OnClickButton={this.OnloadMore} />
        )}

        {isLastPage && !isLoading && (
          <Button title="Sorry, that's all" IsDisadled />
        )}

        {images.length < 1 && (
          <Notification message="Images not found,try something else" />
        )}
        {isLoading && <Loader />}
      </>
    );
  }
}
