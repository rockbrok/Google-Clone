import styled from 'styled-components';
import { SunIcon } from '@heroicons/react/solid';
import { MoonIcon } from '@heroicons/react/solid';
import { t } from 'i18next';
import './../SettingsPanel/style.css';

export const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';

  return (
    <ToggleContainer lightTheme={!isLight} onClick={toggleTheme}>
      <div className="pl2"><DarkOn /></div>
      <div className="pl2"><DarkOff /></div>
    </ToggleContainer>
  );
};

const DarkOff = () => (
  <li>
    <button className="dark-off" role="menuitem" tabIndex="-1" alt="Settings">
      {t('dark_theme.off')}
      <SunIcon className="sun-icon"/>
    </button>
 </li>
);
  
const DarkOn = () => (
  <li>
    <button className="dark-on" role="menuitem" tabIndex="-1" alt="Settings">
      {t('dark_theme.on')}
      <MoonIcon className="moon-icon"/>
    </button>
  </li>
);

const ToggleContainer = styled.button`
  div {
    &:first-child {
      display: ${({ lightTheme }) => lightTheme ? 'none' : 'block' };
    }

    &:nth-child(2) {
      display: ${({ lightTheme }) => lightTheme ? 'block' : 'none' };
    }
  }
`;