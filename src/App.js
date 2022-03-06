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
        <ul>
          <li><a href="#" alt="Gmail">Gmail</a></li>
          <li><a href="#" alt="Images">Images</a></li>
          <li>Icon 9</li>
          <li>profile_pic</li>
        </ul>
      </header>
      <main>
        <div className="logo"><img src={logo}
        alt="logo" /></div>
        
      </main>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
