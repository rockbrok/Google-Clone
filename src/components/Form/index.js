import { Component } from 'react';
import { SearchIcon, MicrophoneIcon, XIcon } from '@heroicons/react/solid';
import { t } from 'i18next';

import './SearchButton/style.css';
import './SearchBar/style.css';

class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      searchInput: '',
      searchInputValid: false,
      formValid: false
    }
  }
  state = this.initialState
  initialState = { searchInput: '' }

  handleFormReset = () => {
    this.setState(() => this.initialState)
  }

  handleUserInput = (e) => {
    const name = e.target.className;
    const value = e.target.value;
    this.setState({[name]: value},
      () => { this.validateField(name, value.trim()) });
  }

  validateField(fieldName, value) {
    let searchInputValid = this.state.searchInputValid;

    switch(fieldName) {
      case 'searchInput':
        searchInputValid = value.length >= 1;
        break;
      default:
        break;
    }
    this.setState({searchInputValid: searchInputValid,
    }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.searchInputValid});
  }

  render () {
    return (
      <form name="search" method="get" onReset={this.handleFormReset} action="https://www.google.com/search">
        <div className="search-container">
          <div className="search-bar">
            <SearchIcon className="search-icon" />
            <input
              type="search"
              title={t('searchbar_title')}
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
            <ClearButton />
            <VoiceButton />
          </div>
        </div>
        <div className="search-button">
          <ul>
            <li>
              <button className="google-search" name="" type="submit" disabled={!this.state.formValid}>
                {t('google_search')}
              </button>
            </li>
            <LuckySearch />
          </ul>
        </div>
      </form>
    )
  }
}

const LuckySearch = () => (
  <li>
  <button className="lucky-search" name="btnI" type="submit">
    {t('lucky_search')}
  </button>
</li>
);

const ClearButton = () => (
  <div className="clear-button">
    <button className="clear tip" type="reset" value='reset' aria-label="clear">
      <XIcon className="x-icon" />
      <span className="clear">{t('clear')}</span>
    </button>
  </div>
);

const VoiceButton = () => (
  <a href="https://www.google.com/" type="" className="tip" aria-label="search by voice">
    <MicrophoneIcon className="microphone-icon" />
    <span className="microphone">{t('search_by_voice')}</span>
  </a>
);

export default Form;
