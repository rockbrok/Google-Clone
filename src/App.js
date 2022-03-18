import React from 'react';
import Logo from './components/Logo/index';
import Header from './components/Header/index';
import SearchBar from './components/SearchBar/index';
import SearchButton from './components/SearchButton/index';
import PageLanguage from './components/PageLanguage/index';
import Footer from './components/Footer/index';
import './App.css';

function App() {
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