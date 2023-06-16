import React, { useState } from 'react';
import logo from './logo.svg';
import styles from '../src/styles/App.module.scss';
import Header from './components/Header';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={styles.App}>
    <Header />
      <header className={`${isDarkMode ? styles.dark_mode : ''}`}>
        <img src={logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </header>
    </div>
  );
}

export default App;
