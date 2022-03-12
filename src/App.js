import React from 'react';
import Logo from './components/Logo.js';
import Navbar from './components/Navbar.js';
import Searchbar from './components/Searchbar.js';
import Searchbutton from './components/Searchbutton.js';
import Footer from './components/Footer.js';
import './App.css';
import './components/Container.css';

function App() {
  return (
    <div className="container">
      <Navbar />
      <main>
        <Logo />
        <form>
          <Searchbar />
          <Searchbutton />
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default App;
