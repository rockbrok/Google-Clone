import { useState } from 'react';
import { SearchIcon, MicrophoneIcon, XIcon } from '@heroicons/react/solid';
import { t } from 'i18next';

import './SearchButton/style.css';
import './SearchBar/style.css';

export default function Form() {
  const [state, setState] = useState({
    searchInput: '',
    searchInputValid: false,
    formValid: false
  });
  
  const initialState = { searchInput: '' }

  const handleFormReset = () => {
    setState(() => initialState)
  }

  const handleUserInput = (e) => {
    const name = e.target.className;
    const value = e.target.value;
    setState({[name]: value},
      () => { validateField(name, value.trim()) });
  }

  const validateField = (fieldName, value) => {
    let searchInputValid = state.searchInputValid;

    switch(fieldName) {
      case 'searchInput':
        searchInputValid = value.length >= 1;
        break;
      default:
        break;
    }
    setState({searchInputValid: searchInputValid,
    }, validateForm);
  }

  const validateForm = () => {
    setState({formValid: state.searchInputValid});
  }

  return (
    <form name="search" method="get" onReset={handleFormReset} action="https://www.google.com/search">
      <div className="search-container">
        <div className="search-bar">
          <SearchIcon className="search-icon" />
          <input
            type="search"
            title={t('search.searchbar_title')}
            className="searchInput"
            name="q"
            role="search"
            placeholder=" "
            maxLength="2048"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            aria-label="Search"
            value={state.searchInput}
            onChange={handleUserInput}
          />
          <ClearButton />
          <VoiceButton />
        </div>
      </div>
      <div className="search-button">
        <ul>
          <li>
            <button className="google-search" name="" type="submit" disabled={state.formValid}>
              {t('search.google_search')}
            </button>
          </li>
          <LuckySearch />
        </ul>
      </div>
    </form>
  )
}

const LuckySearch = () => (
  <li>
  <button className="lucky-search" name="btnI" type="submit">
    {t('search.lucky_search')}
  </button>
</li>
);

const ClearButton = () => (
  <div className="clear-button">
    <button className="clear tip" type="reset" value='reset' aria-label="clear">
      <XIcon className="x-icon" />
      <span className="clear">{t('search.clear')}</span>
    </button>
  </div>
);

const VoiceButton = () => (
  <a href="https://www.google.com/" type="" className="tip" aria-label="search by voice">
    <MicrophoneIcon className="microphone-icon" />
    <span className="microphone">{t('search.search_by_voice')}</span>
  </a>
);
