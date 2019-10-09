import React from 'react';
import Nav from './components/Nav';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';

function App() {
  return (
      <div>
        <Nav></Nav>
        <footer>© 2019</footer>
      </div>  
  );
}

export default App;
