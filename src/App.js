import React from 'react';
import ReactDom from 'react-dom';
import Logo from './components/Logo.js';
import Header from './components/Header/Index.js';
import SearchBar from './components/SearchBar/Index.js';
import SearchButton from './components/SearchButton/Index.js';
import Footer from './components/Footer/Index.js';
import './App.css';
import './components/Container.css';

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Logo />
        <form>
          <SearchBar />
          <SearchButton />
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default App;
ReactDom.render(App, document.getElementById('root'));