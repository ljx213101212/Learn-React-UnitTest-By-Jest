import React from 'react';
import 'App.css';
import sum from '__jest_samples_target__/sum';

function App() {

  let smallTest = () =>{
    console.log(sum(2,3));
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
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
          {smallTest()}
        </a>
      </header>
    </div>
  );
}

export default App;
