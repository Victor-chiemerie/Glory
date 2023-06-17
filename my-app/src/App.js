import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from '../src/redux/slice/ThemeSlice';
import Headder from './components/Headder';
import logo from './logo.svg';
import styles from '../src/styles/App.module.scss';

const App = () => {

  const { dark } = useSelector((store) => store.theme);
  const dispatch = useDispatch();

  return (
    <div>
    <Headder />
      <header  className={ `${styles.App} ${dark ? styles.dark_mode : ''}`}>
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
        <button onClick={() => dispatch(changeTheme())}>Toggle Theme</button>
      </header>
    </div>
  );
}

export default App;
