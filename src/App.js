import React, { Component } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// import Loader from 'react-loader-spinner';
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
    IsModalOpen: false,
    imageForModal: null,
    currentQuery: '',
    currentPage: 1,
    isLastPage: false,
    isImagesNotFound: false,
  };

  componentDidMount() {
    this.setState({
      currentQuery: 'Skywalker',
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
      .then(res => {
        console.log(res);

        const { data } = res;
        const { currentPage } = this.state;
        const lengthOfHitsArray = data.hits.length;
        this.setState(state => {
          return {
            isLastPage:
              (lengthOfHitsArray > 0 && lengthOfHitsArray < 12) || false,
            images: state.images.concat(data.hits),
            isImagesNotFound: lengthOfHitsArray < 1,
            error: res.status === 200 ? null : data.status,
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
    const {
      images,
      isLoading,
      error,
      IsModalOpen,
      imageForModal,
      isLastPage,
      isImagesNotFound,
    } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        {error && <Notification message={error.message} />}

        {IsModalOpen && (
          <Modal url={imageForModal} onCloseModal={this.closeModal} />
        )}

        {images.length > 0 && (
          <ImageGallery items={images} onClickImage={this.getUrlForModal} />
        )}

        {!isLastPage && !isImagesNotFound && !error && !isLoading && (
          <Button
            title="Load More"
            OnloadMore={this.OnloadMore}
            disadled={false}
          />
        )}

        {isLastPage && !isLoading && (
          <Button title="Sorry, that's all" disadled />
        )}

        {isImagesNotFound && (
          <Notification message="Images not found,try something else" />
        )}
        {isLoading && <Loader />}
      </>
    );
  }
}
