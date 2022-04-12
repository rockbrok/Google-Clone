import React, { Component } from 'react';
import { SearchIcon } from '@heroicons/react/solid';
import { MicrophoneIcon } from '@heroicons/react/solid';
import { XIcon } from '@heroicons/react/solid';
import { t } from 'i18next';
import '../SearchButton/style.css';
import '../SearchBar/style.css';

class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      searchInput: '',
      formErrors: {searchInput: ''},
      searchInputValid: false,
      formValid: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.className;
    const value = e.target.value;
    this.setState({[name]: value},
      () => { this.validateField(name, value.trim()) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let searchInputValid = this.state.searchInputValid;

    switch(fieldName) {
      case 'searchInput':
        searchInputValid = value.length >= 1;
        fieldValidationErrors.searchInput = searchInputValid ? '' : ' is invalid';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
      searchInputValid: searchInputValid,
    }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.searchInputValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  render () {
    return (
      <form name="search" method="get" action="https://www.google.com/search">
        <div className="search-container">
          <div className="search-bar">
            <SearchIcon className="search-icon" />
            <input
              type="search"
              title={t('search')}
              required
              className="searchInput"
              name="q"
              role="search"
              placeholder=" "
              maxLength="2048"
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
              aria-label="Search"
              value={this.state.searchInput}
              onChange={this.handleUserInput}
            />
            <div className="clear-button">
              <button className="clear tip" type="reset" value='reset' aria-label="clear">
                <XIcon className="x-icon" />
                  <span className="clear">{t('clear')}</span>
              </button>
            </div>
            <VoiceButton />
          </div>
        </div>
        <div className="search-button">
          <ul>
            <li>
              <button
                className="google-search"
                name=""
                type="submit"
                disabled={!this.state.formValid}
              >
                {t('google_search')}
              </button>
            </li>
            <li>
              <button
                className="lucky-search"
                name="btnI"
                type="submit"
                disabled={!this.state.formValid}
              >
                {t('lucky_search')}
              </button>
            </li>
          </ul>
        </div>
      </form>
    )
  }
}

const VoiceButton = () => (
  <a href="https://www.google.com/" type="" className="tip" aria-label="search by voice">
    <MicrophoneIcon className="microphone-icon" />
    <span className="microphone">{t('search_by_voice')}</span>
  </a>
);

export default Form;