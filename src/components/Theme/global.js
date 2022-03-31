import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.color};
  }

  header {
    background-color: ${({ theme }) => theme.headerbackgroundcolor};
  }

  header a {
    color: ${({ theme }) => theme.headertextcolor};
  }

  .gapps-icon {
    fill: ${({ theme }) => theme.gappsfill};
  }

  .gapps-icon-link:hover {
    background: ${({ theme }) => theme.gappshover};
  }

  .sign-in {
    background: ${({ theme }) => theme.signinbackground};
    color: ${({ theme }) => theme.signincolor};
    border-color: ${({ theme }) => theme.signinborder};
  }

  .sign-in:hover {
    background: ${({ theme }) => theme.signinhoverbackground};
    border-color: ${({ theme }) => theme.signinhoverborder};
  }

  [data-title="Google Apps"]::after {
    background: ${({ theme }) => theme.gappsafterbackground};
    color: ${({ theme }) => theme.gappsaftercolor};
  }

  .logo {
    background-color: ${({ theme }) => theme.logobackgroundcolor};
    background-image: ${({ theme }) => theme.logobackgroundimage};
  }

  .search-language {
    color: ${({ theme }) => theme.searchlanguagecolor};
  }

  .search-language button {
    color: ${({ theme }) => theme.searchlanguageacolor};
  }

  .search-container {
    background-color: ${({ theme }) => theme.searchbarcontainerbackground};
  }

  .search-bar {
    border-color: ${({ theme }) => theme.searchbarborder};
    background-color: ${({ theme }) => theme.searchbarbackground};
  }

  .search-bar:hover {
    box-shadow: ${({ theme }) => theme.searchbarhovershadow};
    border-color: ${({ theme }) => theme.searchbarhoverborder};
  }

  .search-icon {
    fill: ${({ theme }) => theme.searchiconfill};
  }

  .microphone-icon,
  .x-icon {
    fill: ${({ theme }) => theme.searchbariconfill};
  }

  .clear-button {
    border-color: ${({ theme }) => theme.clearbuttondivider};
  }

  input[type="search"] {
    color: ${({ theme }) => theme.searchbartextcolor};
    -webkit-tap-highlight-color: ${({ theme }) => theme.searchbartexthighlight};
  }

  input[type="search"]:hover,
  input[type="search"]:focus {
    background-color: ${({ theme }) => theme.searchbarinputbackground};
  }

  .search-bar:hover,
  .search-bar:focus {
    background-color: ${({ theme }) => theme.searchbarfocusbackground};
  }

  .google-search-container {
    background-color: ${({ theme }) => theme.searchbuttoncontainerbackground};
  }

  .google-search,
  .lucky-search {
    color: ${({ theme }) => theme.searchbuttontextcolor};
    background: ${({ theme }) => theme.searchbuttonbackground};
    border-color: ${({ theme }) => theme.searchbuttonborder};
  }

  .google-search:hover,
  .lucky-search:hover {
    border-color: ${({ theme }) => theme.searchbuttonhoverborder};
  }

  .search-language-container {
    background-color: ${({ theme }) => theme.pagelanguagebackground};
  }

  ul.panel {
    background: ${({ theme }) => theme.panel};
    border-color: ${({ theme }) => theme.panelborder};
  }
  
  ul.panel li a,
  ul.panel li button {
    color: ${({ theme }) => theme.panelbuttontextcolor};
  }

  .panel-separator {
    border-color: ${({ theme }) => theme.panelseparator};
  }

  button.dark-off .sun-icon,
  button.dark-on .moon-icon {
    fill: ${({ theme }) => theme.themeiconfill};
  }

  footer {
    --background-color: ${({ theme }) => theme.footerbackground};
  }

  footer p,
  footer a,
  button.settings {
    color: ${({ theme }) => theme.footertextcolor};
  }

  .footer-country {
    background-color: ${({ theme }) => theme.footerbackground};
    border-color: ${({ theme }) => theme.footercountryborder};
  }

  .footer-content {
    background-color: ${({ theme }) => theme.footerbackground};
  }

  small {
  }

  button {
  }

  a {
    color: ${({ theme }) => theme.text};
  }
`;