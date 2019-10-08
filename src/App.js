import React from 'react';
import Nav from './components/Nav';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Nav></Nav>
        <footer>© 2019</footer>
      </div>  
    </Router>
  );
}

export default App;
