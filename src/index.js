import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ThemeContext from './context/ThemeContext';

ReactDOM.render(
  <React.StrictMode>
    {/* this will provide the global context value to the entire application */}
    <ThemeContext.Provider value={{ color: 'blue' }}>    {/* value prop here, and now any component in application can access theme context */}
      <App />
    </ ThemeContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
