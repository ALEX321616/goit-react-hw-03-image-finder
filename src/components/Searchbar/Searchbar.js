import React, { Component } from 'react';
import s from './Searchbar.module.css';
import { BsSearch } from 'react-icons/bs';

class Searchbar extends Component {
  state = {
    imagesSearch: '',
  };
  reset = () => {
    this.setState({ imagesSearch: '' });
  };
  changeSearchImg = e => {
    this.setState({ imagesSearch: e.currentTarget.value.trim().toLowerCase() });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.imagesSearch) {
      this.props.onSubmit(this.state.imagesSearch);
      this.reset();
    }
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.searchFormbutton}>
            <span className={s.buttonLabel}>
              <BsSearch />
            </span>
          </button>

          <input
            className={s.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.changeSearchImg}
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
