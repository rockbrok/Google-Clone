import React from 'react'
import './Searchbar.css';
import { SearchIcon } from '@heroicons/react/solid';
import { MicrophoneIcon } from '@heroicons/react/solid';
import { XIcon } from '@heroicons/react/solid';

function Searchbar() {
  return (
    <div class="search-wrapper">
        <center>
            <form>
              <div class="search-bar">
                  <SearchIcon className="search-icon" />
                  <input type="search" placeholder=" " maxLength="2048" autoComplete="off" autoCorrect="off" spellCheck="false" aria-label="Search" />
                  <button className="clear" type="reset" title="Clear"><XIcon className="x-icon" /></button>
                  <div class="divider" />
                  <button type="" title="Search by voice"><MicrophoneIcon className="microphone-icon" /></button>
              </div>
          </form>
        </center>
    </div>
  )
}

export default Searchbar