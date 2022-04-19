import { Toggle, useTheme } from '../../themes';
import { t } from 'i18next';

import './style.css';

export const SettingsPanel = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <ul className="panel" role="menu">
      <SearchSettings />
      <AdvancedSearch />
      <YourDataInSearch />
      <SearchHistory />
      <SearchHelp />
      <SendFeedback />
      <Separator />
      <Toggle theme={theme} toggleTheme={toggleTheme} />
    </ul>
  )
}

const SearchSettings = () => (
  <li>
    <a className="panel" href="https://www.google.com/preferences" role="menuitem" tabindex="-1" alt="Search settings">
      {t('search_settings')}
    </a>
  </li>
);

const AdvancedSearch = () => (
  <li>
    <a href="https://www.google.com/advanced_search" role="menuitem" tabindex="-1" alt="Advanced search">
      {t('advanced_search')}
    </a>
  </li>
);

const YourDataInSearch = () => (
  <li>
    <a href="https://myaccount.google.com/yourdata/search?utm_source=googlemenu" role="menuitem" tabindex="-1" alt="Your data in search">
      {t('your_data_in_search')}
    </a>
  </li>
);

const SearchHistory = () => (
  <li>
    <a href="https://www.google.com/history/optout" role="menuitem" tabindex="-1" alt="Search history">
      {t('search_history')}
    </a>
  </li>
);

const SearchHelp = () => (
  <li>
    <a href="https://support.google.com/websearch/#topic=3378866" role="menuitem" tabindex="-1" alt="Search help">
      {t('search_help')}
    </a>
  </li>
);

const SendFeedback = () => (
  <li>
    <a href="https://www.google.com/tools/feedback/" role="menuitem" tabindex="-1" alt="Send feedback">
      {t('send_feedback')}
    </a>
  </li>
);

const Separator = () => (
  <li className="panel-separator" role="separator" />
)
