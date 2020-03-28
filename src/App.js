import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Nav from './components/Nav';
import Main from './components/Main';
import './css/style.css';
import './react-transitions.css';

const App = () => {
    return (
        <Router>
            <Nav />
            <Main className="transition-container"/>
            <footer>© 2019 Jeremy Estes</footer>
        </Router>
    );
};

export default App;