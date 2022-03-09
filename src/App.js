import React from 'react';
import logo from './googlelogo_color.png';
import './App.css';
import './/components/Container.css';
import './/components/Navbar.css';
import './/components/Logo.css';
import './/components/Searchbar.css';
import './/components/Searchbutton.css';
import './/components/Footer.css';
import { UserCircleIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/solid';
import { MicrophoneIcon } from '@heroicons/react/solid';
import { XIcon } from '@heroicons/react/solid';

function App() {
  return (
    <div className="container">
      <header className="navbar">
        <ul>
          <li>
            <a href="https://mail.google.com/mail/" alt="Gmail">
              Gmail
            </a>
          </li>
          <li>
            <a href="https://images.google.com/" alt="Images">
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
        <form>
          <div class="search-wrapper">
            <div class="search-bar">
              <SearchIcon className="search-icon" />
              <input type="search" maxLength="2048" autoComplete="off" autoCorrect="off" spellCheck="false" aria-label="Search" />
              <XIcon className="x-icon" />
              <span class="divider" />
              <MicrophoneIcon className="microphone-icon" /> 
            </div>
          </div>
          <div class="search-button-wrapper">
            <div class="search-button-container">
              <ul>
                <li>
                  <input class="search-button" value="Google Search" aria-label="Google Search" type="submit" role="button" />
                </li>
                <li>
                  <input class="lucky-button" value="I'm Feeling Lucky" aria-label="I'm Feeling Lucky" type="submit" role="button" />
                </li>
              </ul>
            </div>
          </div>
        </form>
      </main>
      <footer>
          <div class="footer-country">
            <p>Argentina</p>
          </div>
          <div class="footer-content">
              <ul>
                <li>
                  <a href="https://about.google/" alt="About">
                    About
                  </a>
                </li>
                <li>
                  <a href="https://ads.google.com/" alt="Advertising">
                    Advertising
                  </a>
                </li>
                <li>
                  <a href="https://smallbusiness.withgoogle.com/" alt="Business">
                    Business
                  </a>
                </li>
                <li>
                  <a href="https://www.google.com/search/howsearchworks/" alt="How Search Works">
                    How Search Works
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="https://policies.google.com/privacy/" alt="Privacy">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="https://policies.google.com/terms/" alt="Terms">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" alt="Settings">
                    Settings
                  </a>
                </li>
              </ul>
          </div>
      </footer>
    </div>
  );
}

export default App;
