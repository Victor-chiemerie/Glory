import React, { useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from '../redux/slice/ThemeSlice';
import { BrightnessHighFill, MoonFill } from 'react-bootstrap-icons';
import "../styles/Welcome.scss";

const Welcome = () => {

  const { dark } = useSelector((store) => store.theme);
  const dispatch = useDispatch();

  
    const lightMode = useRef(null)
    const darkMode = useRef(null);

  const showLightMode = () => {
    dispatch(changeTheme());
    lightMode.current.classList.add('hide');
    darkMode.current.classList.remove('hide');
  }

  const showdarkMode = () => {
    dispatch(changeTheme());
    lightMode.current.classList.remove('hide');
    darkMode.current.classList.add('hide');
  }

  return (
    <div className={ `Welcome ${dark ? `dark_mode` : ''}`}>
      <BrightnessHighFill ref={lightMode} className="theme hide" onClick={showLightMode} />
      <MoonFill ref={darkMode} onClick={showdarkMode} className="theme"/>
      <div className="section">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2.44062in"
            height="3.28602in"
            version="1.1"
            viewBox="0 0 2440.61 3286.02"
            className="icon"
          >
            <g id="Layer_x0020_1">
              <metadata id="CorelCorpID_0Corel-Layer" />
              <path
                className="fil0"
                d="M19.17 1219.86c116.54,-901.7 550.98,-1400.03 1557.94,-1159.68 
                1401.99,797.99 572.03,1712.1 863.51,2187.11 -26.68,13.13 -65.19,8.42 
                -112.97,-10.31 37.73,226.44 -106.01,369.4 -17.46,603.1 -40.81,3.83 
                -67.29,-1.67 -100.83,-34.73 -86.24,100.28 -161.24,175.8 -415.25,238.39 
                -6.22,36.72 -7.69,45.43 6.53,72.33 -75.68,-27.49 -144.69,-82.78 
                -209.61,-154.86 7.87,-511.94 512.95,-452.32 486.9,-1304.22 -39.37,-393.75 
                59.17,-787.51 -128.98,-1039.71 -96.52,-121.16 -165.68,-73.37 -218.94,68.72 
                -276.48,1216.57 -1155.37,1271.86 -655.21,1668.26 -334.1,-30.09 49.52,489.34 
                475.47,701.46 -159.8,134.73 -400.72,-13.63 -611.32,30.37 -32.22,43.54 
                9.41,86.78 88.52,129.89 -73.16,1.02 -128.01,-34.54 -202.56,-96.43l91.09 
                166.47c-119.93,-87.59 -205.14,-183.37 -293.18,-281.39 21.23,95.46 77.14,182.55 
                159.7,262.29 -100.91,-53.33 -195.98,-130.03 -274.94,-271.09 -31.94,72.33 
                1.19,158.31 53.77,252.65 -147.06,-141.19 -227.8,-301.11 -230.24,-483.07 
                -25.51,81.75 -66.67,154.35 -118.34,220.78 141.04,-505 -218.73,-487.38 
                -175.68,-992.37 -159.2,-331.33 233.2,-1177.96 436.92,-1581.86 -217.31,203.88 
                -368.44,473.62 -454.85,807.9z"
              />
            </g>
        </svg>
        <div>Look Iconic</div>
        <h2>The Hairthentic</h2>
        </div>
    </div>
  );
};

export default Welcome;
