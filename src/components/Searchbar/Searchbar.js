import React, { Component } from 'react';
import propTypes from 'prop-types';
import styles from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  handleInputChange = e => {
    this.setState({
      searchValue: e.target.value,
    });
  };

  handleSubmit = e => {
    const { onSubmit } = this.props;
    const { searchValue } = this.state;
    e.preventDefault();
    onSubmit(searchValue);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      searchValue: '',
    });
  };

  render() {
    const { searchValue } = this.state;

    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <input
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchValue}
            onChange={this.handleInputChange}
          />
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: propTypes.func.isRequired,
};

export default Searchbar;
