import React from 'react'
import './Searchbutton.css';

function Searchbutton() {
  return (
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
  )
}

export default Searchbutton