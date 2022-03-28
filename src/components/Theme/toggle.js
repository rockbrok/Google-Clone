import styled from 'styled-components';
import { SunIcon } from '@heroicons/react/solid';
import { MoonIcon } from '@heroicons/react/solid';
import { t } from 'i18next';
import './../SettingsPanel/style.css';

export const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';

  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
      <div><DarkOn /></div>
      <div><DarkOff /></div>
    </ToggleContainer>
  );
};

const DarkOff = () => (
  <li>
    <a class="dark_off" role="menuitem" tabindex="-1" alt="Settings">
      {t('dark_theme.off')}
      <SunIcon className="sun-icon"/>
    </a>
 </li>
);
  
const DarkOn = () => (
  <li>
    <a class="dark_on" role="menuitem" tabindex="-1" alt="Settings">
      {t('dark_theme.on')}
      <MoonIcon className="moon-icon"/>
    </a>
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