import React from 'react'
import './style.css';
import { t } from 'i18next';

function SearchButton() {
  return (
    <div className="google-search-container">
        <ul>
            <GoogleSearch />
            <LuckySearch />
        </ul>
    </div>
  )
}

const GoogleSearch = () => (
    <li>
        <button className="google-search" type="submit">{t('google_search')}</button>
    </li>
);

const LuckySearch = () => (
    <li>
        <button className="lucky-search" type="submit">{t('lucky_search')}</button>
    </li>
);

export default SearchButton