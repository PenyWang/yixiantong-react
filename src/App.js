import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {


  fetch('http://example.com/movies.json')
  .then(function(response) {
    var a = '1111111';
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });

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
