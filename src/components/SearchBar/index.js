import React from 'react';
import './style.css';
import { SearchIcon } from '@heroicons/react/solid';
import { MicrophoneIcon } from '@heroicons/react/solid';
import { XIcon } from '@heroicons/react/solid';

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
    placeholder=" "
    maxLength="2048"
    autoComplete="off"
    autoCorrect="off"
    spellCheck="false"
    aria-label="Search"
  />
);

const ClearButton = () => (
  <div className="clear-button">
    <button className="clear" type="reset" title="Clear">
      <XIcon className="x-icon" />
    </button>
  </div>
);

const VoiceButton = () => (
  <button type="" title="Search by voice">
    <MicrophoneIcon className="microphone-icon" />
  </button>
);

export default SearchBar