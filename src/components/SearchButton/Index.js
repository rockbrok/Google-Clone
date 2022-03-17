import React from 'react'
import './Style.css';

function SearchButton() {
  return (
    <div class="search-button-container">
        <ul>
            <GoogleSearch />
            <LuckySearch />
        </ul>
    </div>
  )
}

const GoogleSearch = () => (
    <li>
        <input class="google-search" value="Google Search" aria-label="Google Search" type="submit" />
    </li>
);

const LuckySearch = () => (
    <li>
        <input class="lucky-search" value="I'm Feeling Lucky" aria-label="I'm Feeling Lucky" type="submit" />
    </li>
);

export default SearchButton