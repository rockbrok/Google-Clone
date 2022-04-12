import './style.css';
import { SearchIcon } from '@heroicons/react/solid';
import { MicrophoneIcon } from '@heroicons/react/solid';
import { XIcon } from '@heroicons/react/solid';
import { t } from 'i18next';

function SearchBar() {
  return (
    <div className="search-container">
      <div className="search-bar">
        <SearchIcon className="search-icon" />
        <Input />
        <ClearButton />
        <VoiceButton />
      </div>
    </div>
  )
}

const Input = () => (
  <input 
    type="search"
    role="search"
    placeholder=" "
    title={t('searchbar_title')}
    maxLength="2048"
    autoComplete="off"
    autoCorrect="off"
    spellCheck="false"
    ariaLabel="Search"
    name="q"
  />
);

const ClearButton = () => (
  <div className="clear-button">
    <button className="clear tip" type="reset" aria-label="clear">
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

export default SearchBar