import React from 'react';
import Logo from './components/Logo/index';
import Header from './components/Header/index';
import SearchBar from './components/SearchBar/index';
import SearchButton from './components/SearchButton/index';
import PageLanguage from './components/PageLanguage/index';
import Footer from './components/Footer/index';
import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
  const { t } = useTranslation()

  return ( <>
    <Header />
      <main>
        <Logo />
        <div className="form-container">
          <form method="get" action="https://www.google.com/search">
            <SearchBar />
            <SearchButton />
          </form>
        </div>
        <PageLanguage />
      </main>
    <Footer />
  </> );
}

export default App