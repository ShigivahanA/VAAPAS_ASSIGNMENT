import React, { useState } from 'react';
import './App.css';
import MovieSearch from './components/MovieSearch';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <header className="App-header">
        <h1>VAAPAS</h1>
        <button className="mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>
      <main>
        <div>
          <p className='para'>Explore Movies, Unleash Joy!</p>
        </div>
        <MovieSearch />
      </main>
    </div>
  );
};

export default App;
