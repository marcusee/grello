import React from 'react';
import logo from './logo.svg';
import './App.css';
import GrelloLayer from './components/GrelloLayer';
import GrelloCard from './components/grelloCard';
import GrelloBoard from './components/GrelloBoard';

function App() {
  return (
    <div className="App">
      <GrelloBoard />
    </div>
  );
}

export default App;
