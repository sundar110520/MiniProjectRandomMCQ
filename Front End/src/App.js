/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

// App.js
import React from 'react';
import QuestionList from './QuestionList';
//import DataDisplay from './components/DataDisplay';
import MCQGenerator from './components/MCQGenerator';


function App() {
  return (
    <div className="App">
      {/* <QuestionList /> */}
      <MCQGenerator />

    </div>
  );
}

export default App;