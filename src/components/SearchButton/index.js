import React from 'react'
import './style.css';
import { t } from 'i18next';

function SearchButton() {
  return (
    <div class="google-search-container">
        <ul>
            <GoogleSearch />
            <LuckySearch />
        </ul>
    </div>
  )
}

const GoogleSearch = () => (
    <li>
        <button class="google-search" type="submit">{t('google_search')}</button>
    </li>
);

const LuckySearch = () => (
    <li>
        <button class="lucky-search" type="submit">{t('lucky_search')}</button>
    </li>
);

export default SearchButton