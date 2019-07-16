import React, { FunctionComponent } from 'react';
import logo from '../assets/logo.svg';
import './App.css';

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
};

export default App;
