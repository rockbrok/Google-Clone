import React from 'react';
import Logo from './components/Logo/index';
import Header from './components/Header/index';
import SearchBar from './components/SearchBar/index';
import SearchButton from './components/SearchButton/index';
import PageLanguage from './components/PageLanguage/index';
import Footer from './components/Footer/index';

import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie';
import i18next from 'i18next'

import './App.css';

const languages = [
  {
      code: 'en',
      language_name: 'English (United States)',
  },
  {
      code: 'es',
      language_name: 'Español (Latinoamérica)',
  },
]

function App() {
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation()

  return ( <>
    <Header />
      <main>
        <Logo />
        <form>
          <SearchBar />
          <SearchButton />
          <PageLanguage />
        </form>
      </main>
    <Footer />
  </> );
}

export default App;