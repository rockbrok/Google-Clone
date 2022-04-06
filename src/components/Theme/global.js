import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
  }

  :root {
    --logo: ${({ theme }) => theme.logo};
    --scrollbar-color: ${({ theme }) => theme.scrollbarbackground};
    --scrollbar-thumb: ${({ theme }) => theme.scrollbarthumb};
    --gapp-background-color: ${({ theme }) => theme.gabackground};
    --gapp-thumb-color: ${({ theme }) => theme.searchbarcolor};
    --footer-background-color: ${({ theme }) => theme.shadow1};
    --search-button-hover: ${({ theme }) => theme.grayhover1};
    --search-button-color: ${({ theme }) => theme.gray1};
    --searchbar-icon: ${({ theme }) => theme.searchbariconfill};
    --text-color-1: ${({ theme }) => theme.textcolor1};
    --text-color-2: ${({ theme }) => theme.textcolor2};
    --text-color-3: ${({ theme }) => theme.buttoncolor1};
    --background-color: ${({ theme }) => theme.background};
    --border-color-1: ${({ theme }) => theme.searchbarcolor};
    --border-color-2: ${({ theme }) => theme.gacolor1};
  }

  input[type="search"]:hover,
  input[type="search"]:focus,
  .search-bar:hover,
  .search-bar:focus,
  .gapps-icon-link:hover {
    background-color: ${({ theme }) => theme.gray1};
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
  
  .gapps-link:hover {
    background-color: ${({ theme }) => theme.gaitemhover};
  }

  .sign-in:hover {
    background-color: ${({ theme }) => theme.signinhover};
    border-color: ${({ theme }) => theme.signinhover};
  }

  [data-title="Google Apps"]::after {
    background-color: ${({ theme }) => theme.gappslabel};
    color: ${({ theme }) => theme.gray1};
  }

  .search-language {
    color: ${({ theme }) => theme.searchlanguagecolor};
  }

  .search-bar:hover {
    border-color: ${({ theme }) => theme.searchbarhoverborder};
  }

  ul.panel {
    border-color: ${({ theme }) => theme.panelborder};
  }

  .footer-country {
    border-color: ${({ theme }) => theme.footercountryborder};
  }


  

  .search-icon {
    fill: ${({ theme }) => theme.searchiconfill};
  }
`;