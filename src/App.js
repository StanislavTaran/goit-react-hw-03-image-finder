import React, { Component } from 'react';
import fetchImagesAPI from './utils/images-api';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Searchbar from './components/Searchbar/Searchbar';
import Loader from './components/Loader/Loader';

export default class App extends Component {
  state = {
    images: [],
    // error: null,
    isLoading: false,
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
      // .catch(error => this.setState({ error }))
      .finally(this.setState({ isLoading: false }));
  };

  onSubmit = value => {
    this.fetchImages(value);
  };

  render() {
    const { images, isLoading } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        {isLoading && <Loader />}
        {images.length > 0 && <ImageGallery items={images} />}
      </>
    );
  }
}
