import React from 'react';
import './App.css';

//importing Character from componenets folder
import Characters from './components/Characters';



function App() {
  return (
    <div className="App">
    <h1>Rick and Morty</h1>
    <Characters />
    </div>
  );
}

export default App;
