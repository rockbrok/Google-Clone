import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
  }

  body,
  ul.panel,
  .search-bar {
    background-color: ${({ theme }) => theme.background};
  }

  input[type="search"]:hover,
  input[type="search"]:focus,
  .search-bar:hover,
  .search-bar:focus,
  .gapps-icon-link:hover,
  .google-search,
  .lucky-search {
    background-color: ${({ theme }) => theme.gray1};
  }

  .sign-in {
    background-color: ${({ theme }) => theme.buttoncolor1};
  }

  .more-from-google a,
  .search-language button {
    color: ${({ theme }) => theme.buttoncolor1};
  }

  ul.panel li a,
  ul.panel li button,
  .footer-country,
  footer a,
  button.settings {
    color: ${({ theme }) => theme.textcolor1};
  }

  button.dark-off .sun-icon,
  button.dark-on .moon-icon {
    fill: ${({ theme }) => theme.textcolor1};
  }

  .search-bar,
  .clear-button,
  .more-from-google {
    border-color: ${({ theme }) => theme.searchbarcolor};
  }

  input[type="search"],
  .gapps-panel-labels,
  .google-search,
  .lucky-search {
    color: ${({ theme }) => theme.textcolor2};
  }

  .more-from-google:hover {
    background-color: ${({ theme }) => theme.gacolor1};
  }

  .panel-separator {
    border-color: ${({ theme }) => theme.gacolor1};
  }

  .gapps-panel,
  .gapps-panel::-webkit-scrollbar {
    background-color: ${({ theme }) => theme.gabackground};
  }

  ::-webkit-scrollbar,
  ::-webkit-scrollbar-corner,
  ::-webkit-scrollbar-track,
  ::-webkit-scrollbar-button:single-button {
    background-color: ${({ theme }) => theme.scrollbarbackground};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.scrollbarthumb};
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.grayhover1};
  }

  ::-webkit-scrollbar-thumb:active {
    background-color: ${({ theme }) => theme.scrollbarthumbactive};
  }

  header a {
    color: ${({ theme }) => theme.headertextcolor};
  }

  .gapps-icon {
    fill: ${({ theme }) => theme.gappsfill};
  }

  .gapps-icon-link:active {
    background-color: ${({ theme }) => theme.gappsactive};
  }

  .search-bar:hover,
  .gapps-panel {
    box-shadow: ${({ theme }) => theme.shadow1};
  }
  
  .gapps-panel {
    border-color: ${({ theme }) => theme.shadow1};
  }

  .gapps-link:hover {
    background-color: ${({ theme }) => theme.gaitemhover};
  }

  .gapps-panel .divider,
  .gapps-panel::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.searchbarcolor};
  }

  .gapps-panel::-webkit-scrollbar-thumb {
    border-color: ${({ theme }) => theme.gabackground};
  }

  .sign-in {
    color: ${({ theme }) => theme.background};
  }

  .sign-in:hover {
    background-color: ${({ theme }) => theme.signinhover};
    border-color: ${({ theme }) => theme.signinhover};
  }

  [data-title="Google Apps"]::after {
    background-color: ${({ theme }) => theme.gappslabel};
    color: ${({ theme }) => theme.gray1};
  }

  .logo {
    background-image: ${({ theme }) => theme.logo};
  }

  .search-language {
    color: ${({ theme }) => theme.searchlanguagecolor};
  }

  .search-bar:hover {
    border-color: ${({ theme }) => theme.searchbarhoverborder};
  }

  .search-icon {
    fill: ${({ theme }) => theme.searchiconfill};
  }

  .microphone-icon,
  .x-icon {
    fill: ${({ theme }) => theme.searchbariconfill};
  }

  .google-search:hover,
  .lucky-search:hover {
    border-color: ${({ theme }) => theme.grayhover1};
  }

  ul.panel {
    border-color: ${({ theme }) => theme.panelborder};
  }

  .footer-country,
  .footer-content {
    background-color: ${({ theme }) => theme.shadow1};
  }

  .footer-country {
    border-color: ${({ theme }) => theme.footercountryborder};
  }
`;