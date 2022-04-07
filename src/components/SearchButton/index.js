import './style.css';
import { t } from 'i18next';

function SearchButton() {
  return (
    <div className="search-button">
        <ul>
            <GoogleSearch />
            <LuckySearch />
        </ul>
    </div>
  )
}

const GoogleSearch = () => (
    <li>
        <button className="google-search" name="" type="submit">{t('google_search')}</button>
    </li>
);

const LuckySearch = () => (
    <li>
        <button className="lucky-search" name="btnI" type="submit">{t('lucky_search')}</button>
    </li>
);

export default SearchButton