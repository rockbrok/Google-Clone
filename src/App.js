import React from 'react';
import logo from './googlelogo_color.png';
import './App.css';
import './/components/Container.css';
import './/components/Navbar.css';
import './/components/Logo.css';

function App() {
  return (
    <div className="container">
      <header className="navbar">
      </header>
      <main>
        <img src={logo} className="logo"
        alt="logo" />
      </main>
    </div>
  );
}

export default App;
