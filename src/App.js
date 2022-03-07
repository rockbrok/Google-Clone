import React from 'react';
import logo from './googlelogo_color.png';
import './App.css';
import './/components/Container.css';
import './/components/Navbar.css';
import './/components/Logo.css';
import './/components/Search.css';
import { UserCircleIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/solid';
import { MicrophoneIcon } from '@heroicons/react/solid';

function App() {
  return (
    <div className="container">
      <header className="navbar">
        <ul>
          <li>
            <a href="#" alt="Gmail">
              Gmail
            </a>
          </li>
          <li>
            <a href="#" alt="Images">
              Images
            </a>
          </li>
          <li>
            <a class="gapps-icon-link" href="#" alt="Gapps">
              <svg className="gapps-icon" focusable="false" viewBox="0 0 24 24">
                <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
              </svg>
            </a>
          </li>
          <li>
            <a className="profile-icon-link" href="#" alt="profile">
              <UserCircleIcon className='profile-icon' />
            </a>
          </li>
        </ul>
      </header>
      <main>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div class="search-wrapper">
          <div class="search-container">

              <div class="search-bar-wrapper">
              <div class="search-icon-container">
              <SearchIcon className='search-icon' />
              <MicrophoneIcon className='microphone-icon' />
                <input className="search-bar" type="search" aria-label="search site" />
              </div>
            </div>
          </div>
            
        </div>
        <div class="search-button-wrapper">
        <ul>
              <li>
                <button class="search-button">Google Search</button>
              </li>
              <li>
                <button class="search-button">I'm Feeling Lucky</button>
              </li>
            </ul>
        </div>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
